const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');

const root = path.join(__dirname, '..', '..');
const source = fs.readFileSync(path.join(root, 'Code.gs'), 'utf8');
const cell = () => ({ value: '', formula: '', note: '', validation: null });

class Range {
  constructor(sheet, row, column, rows = 1, columns = 1) {
    if (![row, column, rows, columns].every(value => Number.isInteger(value) && value > 0)) {
      throw new Error('Invalid range dimensions');
    }
    if (row + rows - 1 > sheet.getMaxRows() || column + columns - 1 > sheet.getMaxColumns()) {
      throw new Error('Range exceeds grid bounds');
    }
    Object.assign(this, { sheet, row, column, rows, columns });
  }
  getSheet() { return this.sheet; }
  getRow() { return this.row; }
  getColumn() { return this.column; }
  getLastRow() { return this.row + this.rows - 1; }
  getLastColumn() { return this.column + this.columns - 1; }
  getNumRows() { return this.rows; }
  getNumColumns() { return this.columns; }
  map(fn) {
    return Array.from({ length: this.rows }, (_, r) => (
      Array.from({ length: this.columns }, (_, c) => fn(this.sheet.cells[this.row + r - 1][this.column + c - 1], r, c))
    ));
  }
  getValues() { return this.map(item => item.value); }
  getFormulas() { return this.map(item => item.formula); }
  getNotes() { return this.map(item => item.note); }
  getDataValidations() { return this.map(item => item.validation); }
  getValue() { return this.getValues()[0][0]; }
  getFormula() { return this.getFormulas()[0][0]; }
  getNote() { return this.getNotes()[0][0]; }
  getDataValidation() { return this.getDataValidations()[0][0]; }
  getDisplayValue() { return String(this.getValue()); }
  getDisplayValues() { return this.getValues().map(row => row.map(String)); }
  setValues(values) {
    if (values.length !== this.rows || values.some(row => row.length !== this.columns)) throw new Error('setValues shape mismatch');
    this.map((item, r, c) => {
      const value = values[r][c];
      if (item.validation && !item.validation.allowInvalid && value !== '' && value !== item.value) {
        const options = item.validation.range ? item.validation.range.getValues().flat() : item.validation.values;
        if (!options.includes(value)) throw new Error(`Validation rejects ${value}`);
      }
    });
    this.map((item, r, c) => {
      const value = values[r][c];
      item.formula = typeof value === 'string' && value.startsWith('=') ? value : '';
      item.value = typeof value === 'string' && value.startsWith("'=") ? value.slice(1) : value;
    });
    return this;
  }
  setValue(value) { return this.setValues(this.map(() => value)); }
  setNotes(values) { this.map((item, r, c) => { item.note = values[r][c]; }); return this; }
  setNote(value) { return this.setNotes(this.map(() => value)); }
  clearContent() { this.map(item => { item.value = ''; item.formula = ''; }); return this; }
  clearNote() { this.map(item => { item.note = ''; }); return this; }
  clearDataValidations() { this.map(item => { item.validation = null; }); return this; }
  setDataValidation(rule) { this.map(item => { item.validation = rule; }); return this; }
  insertCheckboxes() {
    this.map(item => { item.value = false; item.validation = null; });
    return this;
  }
  canEdit() { return true; }
  isPartOfMerge() { return false; }
  copyTo(destination, type) {
    const template = this.sheet.cells[this.row - 1][this.column - 1];
    destination.map(item => {
      if (type === 'validation') item.validation = template.validation;
      else Object.assign(item, template);
    });
    return this;
  }
  sort({ column, ascending }) {
    const rows = this.sheet.cells.slice(this.row - 1, this.getLastRow());
    rows.sort((left, right) => {
      const a = left[column - 1].value;
      const b = right[column - 1].value;
      const difference = typeof a === 'number' && typeof b === 'number' ? a - b : String(a).localeCompare(String(b));
      return ascending ? difference : -difference;
    });
    this.sheet.cells.splice(this.row - 1, this.rows, ...rows);
    return this;
  }
  createFilter() { return this; }
}

for (const name of ['setBackground', 'setBackgrounds', 'setFontColor', 'setFontFamily', 'setFontSize',
  'setFontWeight', 'setHorizontalAlignment', 'setVerticalAlignment', 'setWrap', 'setWrapStrategy',
  'setBorder', 'setNumberFormat']) {
  Range.prototype[name] = function () { return this; };
}

class Sheet {
  constructor(ss, name, values = [], columns = 40, rows = 30) {
    this.ss = ss;
    this.name = name;
    this.columns = Math.max(columns, ...values.map(row => row.length));
    this.cells = Array.from({ length: Math.max(rows, values.length) }, () => Array.from({ length: this.columns }, cell));
    values.forEach((row, r) => row.forEach((value, c) => { this.cells[r][c].value = value; }));
    this.selection = [];
  }
  getName() { return this.name; }
  getParent() { return this.ss; }
  getMaxRows() { return this.cells.length; }
  getMaxColumns() { return this.columns; }
  getLastRow() {
    for (let r = this.cells.length - 1; r >= 0; r -= 1) if (this.cells[r].some(item => item.value !== '' || item.formula)) return r + 1;
    return 0;
  }
  getLastColumn() {
    let last = 0;
    this.cells.forEach(row => row.forEach((item, column) => { if (item.value !== '' || item.formula) last = Math.max(last, column + 1); }));
    return last;
  }
  getRange(...args) { return new Range(this, ...args); }
  getDataRange() { return this.getRange(1, 1, Math.max(this.getLastRow(), 1), Math.max(this.getLastColumn(), 1)); }
  getActiveRangeList() { return { getRanges: () => this.selection }; }
  getActiveRange() { return this.selection[0] || this.getRange(1, 1); }
  setActiveRange(range) { this.selection = [range]; return range; }
  getBandings() { return []; }
  getFilter() { return null; }
  insertRowsAfter(row, count) {
    const template = this.cells[Math.max(row - 1, 0)];
    const added = Array.from({ length: count }, () => template.map(item => ({ ...cell(), validation: item.validation })));
    this.cells.splice(row, 0, ...added);
    return this;
  }
  insertRowAfter(row) { return this.insertRowsAfter(row, 1); }
  deleteRows(row, count) { this.cells.splice(row - 1, count); return this; }
  deleteRow(row) { return this.deleteRows(row, 1); }
  moveRows(range, destination) {
    const start = range.getRow() - 1;
    const count = range.getNumRows();
    const rows = this.cells.splice(start, count);
    const target = destination - 1 - (start < destination - 1 ? count : 0);
    this.cells.splice(target, 0, ...rows);
    return this;
  }
  appendRow(values) { this.getRange(this.getLastRow() + 1, 1, 1, values.length).setValues([values]); return this; }
  clear() { this.cells = this.cells.map(row => row.map(cell)); return this; }
  activate() { this.ss.active = this; return this; }
  setRowHeightsForced(start, count, height) { this.forcedHeight = height; return this; }
}
for (const name of ['setColumnWidths', 'setColumnWidth', 'setFrozenRows', 'setFrozenColumns',
  'hideColumns', 'setRowHeight', 'setRowHeights']) Sheet.prototype[name] = function () { return this; };

function store() {
  const values = new Map();
  return {
    getProperty: key => values.get(key) ?? null,
    setProperty(key, value) { values.set(key, value); return this; },
    deleteProperty(key) { values.delete(key); return this; },
  };
}

function renderTemplate(template, report) {
  const escaped = value => String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  let code = 'let output = "";\n';
  let cursor = 0;
  for (const match of template.matchAll(/<\?([!=]?)([\s\S]*?)\?>/g)) {
    code += `output += ${JSON.stringify(template.slice(cursor, match.index))};\n`;
    code += match[1] === '=' ? `output += escapeHtml(${match[2]});\n`
      : (match[1] === '!' ? `output += (${match[2].replace(/^=/, '')});\n` : match[2] + '\n');
    cursor = match.index + match[0].length;
  }
  code += `output += ${JSON.stringify(template.slice(cursor))};\nreturn output;`;
  return new Function('report', 'escapeHtml', code)(report, escaped);
}

function harness() {
  const events = { alerts: [], requests: [], files: [], html: [], lock: false, confirm: null };
  const ss = {
    sheets: [], active: null,
    getId: () => 'TEST-WORKBOOK', getName: () => 'Test workbook',
    getSheetByName(name) { return this.sheets.find(sheet => sheet.name === name) || null; },
    getSheets() { return this.sheets; },
    getActiveSheet() { return this.active; },
    setActiveSheet(sheet) { this.active = sheet; return sheet; },
    insertSheet(name) { const sheet = new Sheet(this, name); this.sheets.push(sheet); return sheet; },
    toast() {},
  };
  const scriptProperties = store();
  const documentProperties = store();
  const ui = {
    Button: { OK: 'OK', CANCEL: 'CANCEL' }, ButtonSet: { OK_CANCEL: 'OK_CANCEL', OK: 'OK' },
    alert(...args) {
      events.alerts.push(args);
      if (args[2] === 'OK_CANCEL') return events.confirm ? events.confirm(...args) : 'OK';
      return 'OK';
    },
  };
  const makeLock = () => ({ tryLock: () => true, releaseLock() {} });
  const folder = {
    createFile(blob) {
      const file = { getName: () => blob.name, getUrl: () => 'https://example.test/pdf/' + events.files.length };
      events.files.push({ file, blob });
      return file;
    },
  };
  const response = (status, json) => ({ getResponseCode: () => status, getContentText: () => JSON.stringify(json) });
  const context = vm.createContext({
    console, Date,
    SpreadsheetApp: {
      getActive: () => ss, getActiveSpreadsheet: () => ss, getUi: () => ui, flush() {},
      BorderStyle: { SOLID: 'solid', SOLID_THICK: 'thick' },
      CopyPasteType: { PASTE_DATA_VALIDATION: 'validation' },
      WrapStrategy: { CLIP: 'clip' },
      newDataValidation: () => ({
        requireValueInRange(range) { this.range = range; return this; },
        requireValueInList(values) { this.values = values; return this; },
        setAllowInvalid(value) { this.allowInvalid = value; return this; },
        build() { return { range: this.range, values: this.values, allowInvalid: this.allowInvalid }; },
      }),
    },
    PropertiesService: { getScriptProperties: () => scriptProperties, getDocumentProperties: () => documentProperties },
    LockService: { getScriptLock: makeLock, getDocumentLock: makeLock },
    MimeType: { HTML: 'text/html', PDF: 'application/pdf' },
    Utilities: {
      getUuid: () => crypto.randomUUID(), sleep() {},
      newBlob(html, type, name) {
        const blob = {
          name, html,
          getAs() { return this; },
          setName(value) { this.name = value; return this; },
          getBytes: () => [37, 80, 68, 70],
        };
        return blob;
      },
    },
    DriveApp: {
      getFoldersByName: () => { let available = true; return { hasNext: () => available, next: () => { available = false; return folder; } }; },
      createFolder: () => folder,
    },
    HtmlService: {
      createTemplateFromFile(name) {
        const template = {
          report: null,
          evaluate() {
            const html = renderTemplate(fs.readFileSync(path.join(root, name + '.html'), 'utf8'), this.report);
            events.html.push(html);
            return { getContent: () => html };
          },
        };
        return template;
      },
    },
    UrlFetchApp: {
      fetch(url, options) {
        const payload = JSON.parse(options.payload);
        const input = JSON.parse(payload.input.find(item => item.role === 'user').content);
        events.requests.push({ url, payload, input });
        if (events.onFetch) return events.onFetch({ url, payload, input, response });
        return response(200, { status: 'completed', output_text: JSON.stringify(Object.fromEntries(
          input.comments.map(item => [item.columnName, item.comment + ' 수업에서 함께 연습하고 있습니다.'])
        )) });
      },
    },
  });
  vm.runInContext(source, context);
  const scoreHeaders = Array.from(vm.runInContext('DESIRED_INPUT_HEADERS', context));
  const classHeaders = Array.from(vm.runInContext('DEFAULT_CLASS_HEADERS', context));
  const classNames = ['Starter1', 'Beginner1', 'Pre-inter1', 'Inter1', 'Advanced1', 'Powerstation1'];
  const students = classNames.flatMap((name, group) => [0, 1].map(index => ({
    '요일': '월수', '시간': '3:30-5:00', '반 이름': name,
    '학생 이름': `Test ${group}-${index}`, '학생ID': `ID-${group}-${index}`, 'Grade': '4학년',
    'Writing(Alpha) 점수': index === 0 ? 80 : 100,
    'Grammar 점수': index === 0 ? 60 : 80,
    'Reading 점수': '', 'Listening,Speaking 점수': 'X',
    'Grammar 평균그룹': index === 0 ? 'A' : 'B',
    'Vocabulary': 'Good', 'Vocabulary 교재명': 'Existing vocabulary',
    'Writing Comment': '영작 연습', 'Grammar Comment': '문법 연습', 'Listening Comment': '듣기 연습',
  })));
  const score = new Sheet(ss, '성적입력', [scoreHeaders, ...students.map(student => scoreHeaders.map(header => student[header] ?? ''))]);
  const classes = new Sheet(ss, '반별설정', [
    [...classHeaders, '__반ID', '__이전반이름'],
    ...classNames.map((name, index) => [name, 'Default vocabulary', 'Default writing', 'Default reading', false, 'CLASS-' + index, name]),
  ]);
  const settings = new Sheet(ss, '출력설정', [
    ['항목', '값'], ['출력월', '2026년 10월'], ['성적표 제목', 'Current report title'],
    ['저장폴더명', 'Test PDFs'], ['AI 모델', 'test-model'],
  ]);
  ss.sheets = [score, classes, settings];
  ss.active = score;
  scriptProperties.setProperty('OPENAI_API_KEY', 'test-not-a-real-key');
  const records = () => context.readObjects_(score).filter(row => row['학생 이름']);
  const rowById = id => records().find(row => row['학생ID'] === id)?.__sheetRow;
  const dataCell = (id, header) => score.getRange(rowById(id), scoreHeaders.indexOf(header) + 1);
  const edit = (sheet, row, column, value) => {
    const range = sheet.getRange(row, column);
    const oldValue = range.getValue();
    range.setValue(value);
    context.onEdit({ source: ss, range, oldValue, value });
  };
  return { context, ss, score, classes, settings, events, records, rowById, dataCell, edit,
    scriptProperties, documentProperties, scoreHeaders, classNames };
}

module.exports = { harness, renderTemplate };

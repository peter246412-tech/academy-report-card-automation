const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');

const source = fs.readFileSync(path.join(__dirname, '..', 'Code.gs'), 'utf8');
const headers = [
  '요일', '시간', '반 이름', '학생 이름', 'Grade',
  'Vocabulary 교재명', 'Writing/Grammar 교재명', 'Reading/Listening 교재명',
  'Writing(Alpha) 점수', 'Grammar 점수', 'Grammar 평균그룹',
  'Writing Comment', 'Listening Comment', '학생ID',
];

function makeRow(values) {
  return headers.map(header => values[header] === undefined ? '' : values[header]);
}

function fixture() {
  const existing = makeRow({
    '요일': '화목', '시간': '3:30-5:00', '반 이름': 'Powerstation4',
    '학생 이름': 'Existing Student', 'Grade': '4학년',
    'Writing(Alpha) 점수': 82, 'Grammar 점수': 0, 'Grammar 평균그룹': 'B',
    'Writing Comment': 'Original writing comment',
    'Listening Comment': 'Original listening comment', '학생ID': 'EXISTING-1',
  });
  const sheet = {
    rows: [headers.slice(), existing.slice()],
    getLastColumn() { return headers.length; },
    getLastRow() { return this.rows.length; },
    insertRowAfter(row) { this.rows.splice(row, 0, headers.map(() => '')); },
    getRange(row, column, rowCount = 1, columnCount = 1) {
      return {
        row,
        getValues: () => sheet.rows.slice(row - 1, row - 1 + rowCount)
          .map(values => values.slice(column - 1, column - 1 + columnCount)),
        setValues(values) {
          values.forEach((cells, offset) => {
            sheet.rows[row - 1 + offset].splice(column - 1, columnCount, ...cells);
          });
        },
      };
    },
    setActiveRange(range) { this.selectedRow = range.row; },
  };
  const ss = {
    getSheetByName(name) {
      if (name === '성적입력') return sheet;
      if (name === '반별설정') return {};
      return null;
    },
    setActiveSheet(active) { assert.equal(active, sheet); },
  };
  let released = 0;
  const context = vm.createContext({
    SpreadsheetApp: { getActive: () => ss },
    LockService: {
      getDocumentLock: () => ({
        tryLock: () => true,
        releaseLock: () => { released += 1; },
      }),
    },
    Utilities: { getUuid: () => 'NEW-STUDENT-UUID' },
  });
  vm.runInContext(source, context);
  context.readDurableClassRows_ = () => [
    {
      name: 'Powerstation4', vocabularyBook: 'Vocabulary Book',
      writingGrammarBook: 'Writing Book', readingListeningBook: 'Reading Book',
    },
    { name: 'Starter1' },
  ];
  context.applyDurableDropdowns_ = () => {};
  // Simulate layout changes; the returned selection must follow the new student's ID.
  context.sortScoreRowsByClassOrder_ = () => {
    const rows = sheet.rows.slice(1).reverse();
    sheet.rows = [headers.slice(), ...rows];
  };
  context.normalizeClassSpacerRows_ = () => {
    sheet.rows.splice(1, 0, headers.map(() => ''));
  };
  context.applyClassGroupStyling_ = () => {};
  return { context, sheet, existing, released: () => released };
}

const input = {
  day: '월수', time: '2:00-3:30', className: 'Powerstation4',
  studentName: 'New Student', grade: '5학년',
};

test('student creation returns success and locates the inserted ID after layout changes', () => {
  const { context, sheet, existing, released } = fixture();
  const result = context.createNewStudent(input);
  const idIndex = headers.indexOf('학생ID');
  const index = sheet.rows.findIndex(row => row[idIndex] === 'WP-NEW-STUDENT-UUID');
  assert.ok(index > 0);
  assert.equal(result.rowNumber, index + 1);
  assert.equal(sheet.selectedRow, result.rowNumber);
  assert.match(result.message, /New Student/);
  assert.equal(sheet.rows.filter(row => row[idIndex] === 'WP-NEW-STUDENT-UUID').length, 1);
  assert.deepEqual(sheet.rows.find(row => row[idIndex] === 'EXISTING-1'), existing);
  const newRow = sheet.rows[index];
  assert.equal(newRow[headers.indexOf('Grammar 평균그룹')], '');
  assert.equal(newRow[headers.indexOf('Writing Comment')], '');
  assert.equal(newRow[headers.indexOf('Writing(Alpha) 점수')], '');
  assert.equal(newRow[headers.indexOf('Vocabulary 교재명')], 'Vocabulary Book');
  assert.equal(newRow[headers.indexOf('Grade')], '5학년');
  assert.equal(released(), 1);
});

test('adding to a class without students succeeds', () => {
  const { context, sheet } = fixture();
  const result = context.createNewStudent({ ...input, className: 'Starter1' });
  const added = sheet.rows[result.rowNumber - 1];
  assert.equal(added[headers.indexOf('반 이름')], 'Starter1');
  assert.equal(added[headers.indexOf('학생 이름')], 'New Student');
});

test('invalid form input does not mutate existing rows', () => {
  for (const override of [{ grade: '' }, { className: 'Missing Class' }, { studentName: '' }]) {
    const { context, sheet } = fixture();
    const before = sheet.rows.map(row => row.slice());
    assert.throws(() => context.createNewStudent({ ...input, ...override }));
    assert.deepEqual(sheet.rows, before);
  }
});

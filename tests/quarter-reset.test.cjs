const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');

const source = fs.readFileSync(path.join(__dirname, '..', 'Code.gs'), 'utf8');
const operationKey = 'QUARTER_RESET_OPERATION';
const jobKey = 'AI_COMMENT_POLISH_JOB';
const headers = [
  '요일', '시간', '반 이름', '학생 이름', '학생ID', 'Grade', 'Grammar 평균그룹',
  'Vocabulary', 'Homework', 'Participation', 'Vocabulary 교재명',
  'Writing/Grammar 교재명', 'Reading/Listening 교재명',
  'Writing(Alpha) 점수', 'Grammar 점수', 'Reading 점수', 'Listening,Speaking 점수',
  'Writing Comment', 'Grammar Comment', 'Reading Comment', 'Listening Comment',
  'Listening,Speaking Comment', 'Listening/Speaking Comment', 'Custom Comment',
];

function properties() {
  const values = new Map();
  return {
    getProperty: key => values.has(key) ? values.get(key) : null,
    setProperty(key, value) { values.set(key, String(value)); return this; },
    deleteProperty(key) { values.delete(key); return this; },
  };
}

class Sheet {
  constructor(name, rows, state) {
    this.name = name;
    this.values = rows.map(row => row.slice());
    this.formulas = rows.map(row => row.map(() => ''));
    this.notes = rows.map(row => row.map(() => ''));
    this.maxRows = 50;
    this.maxColumns = Math.max(rows[0].length, 26);
    this.state = state;
  }
  getName() { return this.name; }
  getMaxRows() { return this.maxRows; }
  getMaxColumns() { return this.maxColumns; }
  getLastRow() {
    for (let row = this.values.length - 1; row >= 0; row -= 1) {
      if ([this.values, this.formulas, this.notes].some(matrix => matrix[row].some(value => value !== ''))) return row + 1;
    }
    return 0;
  }
  getLastColumn() {
    return Math.max(0, ...this.values.map(row => {
      for (let column = row.length - 1; column >= 0; column -= 1) if (row[column] !== '') return column + 1;
      return 0;
    }));
  }
  clone() {
    const copy = new Sheet(this.name, this.values, this.state);
    copy.formulas = this.formulas.map(row => row.slice());
    copy.notes = this.notes.map(row => row.slice());
    return copy;
  }
  getRange(row, column, height, width) {
    const sheet = this;
    const read = matrix => Array.from({ length: height }, (_, r) => (
      Array.from({ length: width }, (_, c) => (matrix[row + r - 1] || [])[column + c - 1] ?? '')
    ));
    const write = (matrix, values) => {
      for (let r = 0; r < height; r += 1) {
        if (!matrix[row + r - 1]) matrix[row + r - 1] = Array(sheet.maxColumns).fill('');
        for (let c = 0; c < width; c += 1) matrix[row + r - 1][column + c - 1] = values[r][c];
      }
    };
    return {
      getValues: () => read(sheet.values),
      getFormulas: () => read(sheet.formulas),
      getNotes: () => read(sheet.notes),
      canEdit: () => !sheet.state.options.protected
        && !(sheet.name === '출력설정' && sheet.state.options.outputProtected),
      isPartOfMerge: () => Boolean(sheet.state.options.merged),
      clearContent() {
        assert.equal(sheet.state.backupOpened, true, 'never clear before the backup is opened');
        sheet.state.clearCalls += 1;
        if (sheet.state.options.clearFailure && sheet.state.clearCalls === 2) {
          if (sheet.state.options.concurrentTargetEdit) sheet.values[1][headers.indexOf('Writing(Alpha) 점수')] = 99;
          if (sheet.state.options.concurrentIdentityEdit) sheet.values[1][3] = 'Concurrent name';
          throw new Error('Simulated clear failure');
        }
        write(sheet.values, Array.from({ length: height }, () => Array(width).fill('')));
        write(sheet.formulas, Array.from({ length: height }, () => Array(width).fill('')));
      },
      clearNote() { write(sheet.notes, Array.from({ length: height }, () => Array(width).fill(''))); },
      setValues(values) {
        if (sheet.name === '출력설정' && sheet.state.options.termWriteFailure
            && values[0][0] === '2026년 12월') {
          throw new Error('Simulated next-month validation failure');
        }
        write(sheet.values, values.map(cells => cells.map(value => (
          typeof value === 'string' && value.startsWith("'=") ? value.slice(1) : value
        ))));
        write(sheet.formulas, values.map(cells => cells.map(value => (
          typeof value === 'string' && value.startsWith('=') ? value : ''
        ))));
      },
      setNotes(values) { write(sheet.notes, values); },
    };
  }
}

function fixture(options = {}) {
  const state = {
    options, clearCalls: 0, copies: 0, backupOpened: false, releases: [],
    folderName: 'Quarter backups', createdFolders: [], nameLookups: [],
  };
  const record = name => headers.map(header => ({
    '요일': '월수', '시간': '2:00-3:30', '반 이름': 'Starter1', '학생 이름': name,
    '학생ID': name + '-ID', 'Grade': '5학년', 'Grammar 평균그룹': 'B',
    'Vocabulary': 'Perfect', 'Homework': 'Good', 'Participation': 'Perfect',
    'Vocabulary 교재명': 'Vocabulary book', 'Writing/Grammar 교재명': 'Writing book',
    'Reading/Listening 교재명': 'Reading book', 'Writing(Alpha) 점수': 82,
    'Grammar 점수': 0, 'Reading 점수': 'X', 'Listening,Speaking 점수': 95,
    'Writing Comment': 'Original writing', 'Grammar Comment': 'Original grammar',
    'Reading Comment': 'Original reading', 'Listening Comment': 'Original listening',
    'Listening,Speaking Comment': 'Alias 1', 'Listening/Speaking Comment': 'Alias 2',
    'Custom Comment': 'Do not clear this custom field',
  })[header] ?? '');
  const score = new Sheet('성적입력', [headers, record('Student A'), record('Student B')], state);
  score.notes[1][headers.indexOf('Writing Comment')] = 'AI 다듬기 전 원문: Original note';
  score.notes[1][headers.indexOf('Grammar 점수')] = 'Original score note';
  score.notes[1][headers.indexOf('Grade')] = 'Preserve grade note';
  const sheets = [score,
    new Sheet('반별설정', [['반 이름'], ['Starter1']], state),
    new Sheet('출력설정', [
      ['항목', '값'], ['성적표 제목', 'Current report title'], ['출력월', '2026년 10월'],
      ['저장폴더명', 'Keep PDF folder'], ['파일명규칙', 'Keep naming rule'],
    ], state),
    new Sheet('시상순위', [['학생', '총점'], ['Student A', 177]], state),
  ];
  const workbook = (id, items) => ({
    getId: () => id,
    getName: () => 'Current workbook',
    getSpreadsheetTimeZone: () => 'Asia/Seoul',
    getSheets: () => items,
    getSheetByName: name => items.find(sheet => sheet.name === name) || null,
  });
  const ss = workbook('SOURCE', sheets);
  const docProperties = properties();
  const scriptProperties = properties();
  scriptProperties.setProperty('OPENAI_API_KEY', 'keep-key');
  const folder = {
    getId: () => 'FOLDER123456', getName: () => state.folderName,
    getUrl: () => 'https://drive.google.com/drive/folders/FOLDER123456',
    isTrashed: () => Boolean(options.trashed),
  };
  let backup;
  const file = {
    getId: () => 'BACKUP', getUrl: () => 'https://docs.google.com/spreadsheets/d/BACKUP/edit',
    isTrashed: () => false,
    getParents: () => {
      let available = true;
      return {
        hasNext: () => available,
        next() { available = false; return options.wrongFolder ? { getId: () => 'OTHER' } : folder; },
      };
    },
  };
  const context = vm.createContext({
    console,
    PropertiesService: {
      getDocumentProperties: () => docProperties,
      getScriptProperties: () => scriptProperties,
    },
    Utilities: { formatDate: () => '20261104_190000' },
    LockService: {
      getScriptLock: () => ({
        tryLock: () => !options.aiBusy,
        releaseLock: () => state.releases.push('script'),
      }),
      getDocumentLock: () => ({
        tryLock: () => !options.studentBusy,
        releaseLock: () => state.releases.push('document'),
      }),
    },
    DriveApp: {
      getFolderById(id) { assert.equal(id, folder.getId()); return folder; },
      getFolderByIdAndResourceKey(id, key) { assert.equal(key, 'KEY'); return folder; },
      getFoldersByName(name) {
        state.nameLookups.push(name);
        const folders = options.duplicateFolders ? [folder, folder]
          : (name === state.folderName ? [folder] : []);
        let index = 0;
        return {
          hasNext: () => index < folders.length,
          next: () => folders[index++],
        };
      },
      createFolder(name) {
        if (options.createFolderFailure) throw new Error('No Drive folder creation permission');
        state.createdFolders.push(name);
        state.folderName = name;
        return folder;
      },
      getFileById: () => ({
        makeCopy(name, destination) {
          assert.equal(destination, folder);
          assert.match(name, /분기마감/);
          if (options.copyFailure) throw new Error('No Drive write permission');
          state.copies += 1;
          backup = workbook('BACKUP', sheets.map(sheet => sheet.clone()));
          if (options.badBackup) backup.getSheets()[0].values[1][13] = 1;
          if (options.badBackupNote) backup.getSheets()[0].notes[1][17] = 'Wrong note';
          if (options.changedDuringBackup) score.values[1][13] = 12;
          if (options.aiStartedDuringBackup) scriptProperties.setProperty(jobKey, '{}');
          return file;
        },
      }),
    },
    SpreadsheetApp: {
      flush() {}, getActive: () => ss,
      openById(id) {
        assert.equal(id, 'BACKUP');
        if (options.openFailure) throw new Error('Missing spreadsheets scope');
        state.backupOpened = true;
        return backup;
      },
    },
  });
  vm.runInContext(source, context);
  const snapshot = () => context.readQuarterWorkbook_(ss);
  const signature = () => context.quarterWorkbookSignature_(snapshot());
  const execute = (expected = signature()) => context.executeQuarterReset_(ss, folder, '2026 Q4', expected);
  return { context, ss, score, folder, state, docProperties, scriptProperties, snapshot, signature, execute,
    backup: () => backup };
}

test('backup keeps all original data; reset clears only subject scores, comments and their notes', () => {
  const f = fixture();
  const before = f.snapshot();
  const expected = f.context.quarterWorkbookSignature_(f.context.completedQuarterSnapshot_(before,
    f.context.buildQuarterResetPlan_(before)));
  const result = f.execute();
  assert.equal(f.signature(), expected);
  assert.equal(f.context.quarterWorkbookSignature_(f.context.readQuarterWorkbook_(f.backup())),
    f.context.quarterWorkbookSignature_(before));
  assert.equal(f.scriptProperties.getProperty('OPENAI_API_KEY'), 'keep-key');
  assert.equal(JSON.parse(f.docProperties.getProperty(operationKey)).status, 'completed');
  assert.match(result.url, /BACKUP/);
  assert.deepEqual(f.state.releases, ['document', 'script']);
});

for (const [name, options] of [
  ['Drive copy fails', { copyFailure: true }],
  ['backup cannot be opened', { openFailure: true }],
  ['backup values differ', { badBackup: true }],
  ['backup notes differ', { badBackupNote: true }],
  ['backup is in a different folder', { wrongFolder: true }],
  ['AI is running', { aiBusy: true }],
  ['student management is running', { studentBusy: true }],
  ['target range is protected', { protected: true }],
  ['target range is merged', { merged: true }],
  ['output settings cannot be edited', { outputProtected: true }],
  ['an AI job starts during backup', { aiStartedDuringBackup: true }],
]) {
  test(`does not clear any original cell when ${name}`, () => {
    const f = fixture(options);
    const before = f.signature();
    assert.throws(() => f.execute());
    assert.equal(f.signature(), before);
    assert.equal(f.state.clearCalls, 0);
  });
}

test('data edited during a confirmation dialog aborts before copying', () => {
  const f = fixture();
  const expected = f.signature();
  f.score.values[1][13] = 99;
  assert.throws(() => f.execute(expected), /입력값이 바뀌어/);
  assert.equal(f.state.copies, 0);
  assert.equal(f.state.clearCalls, 0);
});

test('data edited during backup is kept and not cleared', () => {
  const f = fixture({ changedDuringBackup: true });
  assert.throws(() => f.execute(), /다른 입력/);
  assert.equal(f.score.values[1][13], 12);
  assert.equal(f.state.clearCalls, 0);
});

test('partial clearing failure restores values and notes, preserving zero and X scores', () => {
  const f = fixture({ clearFailure: true });
  const before = f.signature();
  assert.throws(() => f.execute(), /자동 복원했습니다/);
  assert.equal(f.signature(), before);
  assert.equal(JSON.parse(f.docProperties.getProperty(operationKey)).status, 'restored');
});

for (const option of ['concurrentTargetEdit', 'concurrentIdentityEdit']) {
  test(`rollback refuses to overwrite ${option}`, () => {
    const f = fixture({ clearFailure: true, [option]: true });
    assert.throws(() => f.execute(), /자동 복원을 완료하지 못했습니다/);
    assert.equal(JSON.parse(f.docProperties.getProperty(operationKey)).status, 'needs_recovery');
    assert.throws(() => f.context.assertQuarterResetReady_(f.docProperties), /BACKUP/);
    if (option === 'concurrentTargetEdit') assert.equal(f.score.values[1][13], 99);
    else assert.equal(f.score.values[1][3], 'Concurrent name');
  });
}

test('an interrupted operation blocks any further destructive execution', () => {
  const f = fixture();
  f.docProperties.setProperty(operationKey, JSON.stringify({ status: 'clearing', url: 'BACKUP-URL' }));
  assert.throws(() => f.execute(), /BACKUP-URL/);
  assert.equal(f.state.clearCalls, 0);
  assert.equal(f.state.copies, 0);
});

test('same confirmation cannot be executed twice', () => {
  const f = fixture();
  const expected = f.signature();
  f.execute(expected);
  assert.throws(() => f.execute(expected), /입력값이 바뀌어/);
  assert.equal(f.state.copies, 1);
});

test('target formulas are backed up and cleared like other scores and comments', () => {
  const f = fixture();
  f.score.formulas[1][13] = '=40+42';
  const before = f.signature();
  f.execute();
  assert.equal(f.score.values[1][13], '');
  assert.equal(f.score.formulas[1][13], '');
  assert.equal(f.context.quarterWorkbookSignature_(f.context.readQuarterWorkbook_(f.backup())), before);
});

test('empty-string and name-based comment formulas no longer block resetting', () => {
  const f = fixture();
  f.score.formulas[1][17] = '=""';
  f.score.values[1][17] = '';
  f.score.formulas[1][20] = '=IF($D2="","", "우리 "&RIGHT($D2,2)&" 듣기 코멘트")';
  const before = f.signature();
  f.execute();
  assert.equal(f.score.formulas[1][17], '');
  assert.equal(f.score.formulas[1][20], '');
  assert.equal(f.score.values[1][20], '');
  assert.equal(f.context.quarterWorkbookSignature_(f.context.readQuarterWorkbook_(f.backup())), before);
});

test('reset failure restores formulas that were not yet cleared', () => {
  const f = fixture({ clearFailure: true });
  f.score.formulas[1][20] = '=IF($D2="","", "Original comment")';
  const before = f.signature();
  assert.throws(() => f.execute(), /자동 복원/);
  assert.equal(f.signature(), before);
});

test('late reset failure restores cleared score and comment formulas', () => {
  const f = fixture({ termWriteFailure: true });
  f.score.formulas[1][13] = '=40+42';
  f.score.formulas[1][20] = '=IF($D2="","", "Original comment")';
  const before = f.signature();
  assert.throws(() => f.execute(), /자동 복원/);
  assert.equal(f.signature(), before);
});

test('unrelated formulas and dates are preserved', () => {
  const f = fixture();
  f.score.formulas[1][23] = '=NOW()';
  f.score.values[2][23] = new Date('2026-11-04T00:00:00Z');
  f.execute();
  assert.equal(f.score.formulas[1][23], '=NOW()');
  assert.equal(f.score.values[2][23].getTime(), Date.parse('2026-11-04T00:00:00Z'));
});

test('only the matching spreadsheet AI resume state is removed', () => {
  for (const spreadsheetId of ['SOURCE', 'OTHER']) {
    const f = fixture();
    const raw = JSON.stringify({ spreadsheetId, sheetName: '성적입력', nextRow: 36 });
    f.scriptProperties.setProperty(jobKey, raw);
    f.execute();
    assert.equal(f.scriptProperties.getProperty(jobKey), spreadsheetId === 'SOURCE' ? null : raw);
    assert.equal(f.scriptProperties.getProperty('OPENAI_API_KEY'), 'keep-key');
  }
});

test('folder accepts legacy saved IDs, normal URLs and resource-key URLs', () => {
  const f = fixture();
  assert.equal(f.context.getQuarterBackupFolder_('FOLDER123456', true, true), f.folder);
  for (const input of [f.folder.getUrl(),
    f.folder.getUrl() + '?resourcekey=KEY',
    'https://drive.google.com/drive/u/0/folders/FOLDER123456']) {
    assert.equal(f.context.getQuarterBackupFolder_(input), f.folder);
  }
});

test('invalid destinations and trashed folders are rejected', () => {
  const f = fixture();
  for (const input of ['', '/Users/example/Desktop', 'https://docs.google.com/spreadsheets/d/FILE',
    'https://drive.google.com.evil.test/drive/folders/FOLDER123456']) {
    assert.throws(() => f.context.getQuarterBackupFolder_(input));
  }
  const trashed = fixture({ trashed: true });
  assert.throws(() => trashed.context.getQuarterBackupFolder_(trashed.folder.getUrl()), /휴지통/);
});

test('new menu entry follows the API key entry and one separator', () => {
  const f = fixture();
  const items = [];
  const menu = {
    addItem(label, handler) { items.push([label, handler]); return this; },
    addSeparator() { items.push('separator'); return this; },
    addToUi() {},
  };
  f.context.SpreadsheetApp.getUi = () => ({ createMenu: () => menu });
  f.context.onOpen();
  assert.deepEqual(items.slice(-3), [
    ['AI API 키 저장', 'setOpenAiApiKey'], 'separator',
    ['분기 종료 성적표 초기화', 'finishQuarterAndReset'],
  ]);
});

test('cancelling any dialog never copies or clears data', () => {
  for (const cancelAt of [1, 2, 3]) {
    const f = fixture();
    const before = f.signature();
    let step = 0;
    const ui = {
      Button: { OK: 'OK', CANCEL: 'CANCEL' },
      ButtonSet: { OK: 'OK', OK_CANCEL: 'OK_CANCEL' },
      prompt() {
        step += 1;
        return {
          getSelectedButton: () => step === cancelAt ? 'CANCEL' : 'OK',
          getResponseText: () => step === 1 ? f.folder.getUrl() : '2026 Q4',
        };
      },
      alert() { step += 1; return step === cancelAt ? 'CANCEL' : 'OK'; },
    };
    f.context.SpreadsheetApp.getUi = () => ui;
    f.context.finishQuarterAndReset();
    assert.equal(f.signature(), before);
    assert.equal(f.state.copies, 0);
    assert.equal(f.state.clearCalls, 0);
  }
});

test('first use registers the folder; a later blank response reuses the saved folder', () => {
  for (const saved of [false, true]) {
    const f = fixture();
    if (saved) f.docProperties.setProperty('QUARTER_BACKUP_FOLDER', f.folder.getUrl());
    let prompts = 0;
    const messages = [];
    const ui = {
      Button: { OK: 'OK', CANCEL: 'CANCEL' },
      ButtonSet: { OK: 'OK', OK_CANCEL: 'OK_CANCEL' },
      prompt(title, message) {
        prompts += 1;
        if (saved && prompts === 1) assert.match(message, /등록된 위치/);
        return {
          getSelectedButton: () => 'OK',
          getResponseText: () => prompts === 1 ? (saved ? '' : f.folder.getUrl()) : '2026 Q4',
        };
      },
      alert(title, message) { messages.push([title, message]); return 'OK'; },
    };
    f.context.SpreadsheetApp.getUi = () => ui;
    f.context.finishQuarterAndReset();
    assert.equal(f.state.copies, 1);
    assert.equal(f.docProperties.getProperty('QUARTER_BACKUP_FOLDER'), f.folder.getUrl());
    assert.equal(messages.at(-1)[0], '분기 마감 완료');
    assert.match(messages.at(-1)[1], /BACKUP/);
  }
});

test('missing score headers abort before copying or clearing', () => {
  const f = fixture();
  f.score.values[0][13] = 'Unknown score column';
  assert.throws(() => f.execute(), /열이 없거나 중복/);
  assert.equal(f.state.copies, 0);
  assert.equal(f.state.clearCalls, 0);
});

test('the manifest allows opening the backup for verification', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'appsscript.json'), 'utf8'));
  assert.ok(manifest.oauthScopes.includes('https://www.googleapis.com/auth/spreadsheets'));
  assert.ok(manifest.oauthScopes.includes('https://www.googleapis.com/auth/drive'));
  assert.ok(!manifest.oauthScopes.includes('https://www.googleapis.com/auth/script.scriptapp'));
});

for (const [current, nextMonth, nextLabel] of [
  ['2026년 4월', '2026년 6월', '1st Semester Finalterm 2026'],
  ['2026년 6월', '2026년 10월', '2nd Semester Midterm 2026'],
  ['2026년 10월', '2026년 12월', '2nd Semester Finalterm 2026'],
  ['2026년 12월', '2027년 4월', '1st Semester Midterm 2027'],
  ['2027년 12월', '2028년 4월', '1st Semester Midterm 2028'],
]) {
  test(`advances ${current} to ${nextMonth} only after preserving the original backup`, () => {
    const f = fixture();
    const settings = f.ss.getSheetByName('출력설정');
    settings.values[2][1] = current;
    settings.notes[1][1] = 'Preserve title note';
    settings.notes[2][1] = 'Preserve month note';
    const before = f.signature();
    const result = f.execute();
    assert.equal(settings.values[2][1], nextMonth);
    assert.equal(settings.values[1][1], `English Achievement Report – ${nextLabel}`);
    assert.equal(settings.values[3][1], 'Keep PDF folder');
    assert.equal(settings.values[4][1], 'Keep naming rule');
    assert.equal(settings.notes[1][1], 'Preserve title note');
    assert.equal(settings.notes[2][1], 'Preserve month note');
    assert.equal(result.nextOutputMonth, nextMonth);
    assert.equal(result.nextTitle, settings.values[1][1]);
    assert.equal(f.context.quarterWorkbookSignature_(f.context.readQuarterWorkbook_(f.backup())), before);
  });
}

test('blank grades after resetting cannot advance the term a second time', () => {
  const f = fixture();
  f.execute();
  const signature = f.signature();
  assert.throws(() => f.execute(), /초기화할 내용이 없습니다/);
  assert.equal(f.signature(), signature);
  assert.equal(f.state.copies, 1);
});

test('invalid output months never create a backup, clear grades, or change settings', () => {
  for (const value of ['', '2026년 11월', '2026년 2월', '2026-10', '10월',
    '2026년 13월', '0000년 10월', '9999년 12월']) {
    const f = fixture();
    f.ss.getSheetByName('출력설정').values[2][1] = value;
    const before = f.signature();
    assert.throws(() => f.execute());
    assert.equal(f.signature(), before);
    assert.equal(f.state.copies, 0);
    assert.equal(f.state.clearCalls, 0);
  }
});

test('missing, duplicate, or formula-based output settings fail before resetting', () => {
  for (const variant of ['missingMonth', 'duplicateTitle', 'formulaMonth', 'missingSheet']) {
    const f = fixture();
    const settings = f.ss.getSheetByName('출력설정');
    if (variant === 'missingMonth') settings.values[2][0] = 'Other setting';
    if (variant === 'duplicateTitle') settings.values[3][0] = '성적표 제목';
    if (variant === 'formulaMonth') settings.formulas[2][1] = '=TEXT(TODAY(), "yyyy년 m월")';
    if (variant === 'missingSheet') settings.name = 'Other sheet';
    const before = f.signature();
    assert.throws(() => f.execute());
    assert.equal(f.signature(), before);
    assert.equal(f.state.copies, 0);
    assert.equal(f.state.clearCalls, 0);
  }
});

test('a failure writing the next month restores grades, comments, title and month together', () => {
  const f = fixture({ termWriteFailure: true });
  const before = f.signature();
  assert.throws(() => f.execute(), /점수·코멘트·출력설정을.*자동 복원/);
  assert.equal(f.signature(), before);
  assert.equal(JSON.parse(f.docProperties.getProperty(operationKey)).status, 'restored');
  assert.equal(f.state.copies, 1);
});

test('even a late completion-record failure restores grades, settings and the prior AI cursor', () => {
  const f = fixture();
  const rawJob = JSON.stringify({ spreadsheetId: 'SOURCE', sheetName: '성적입력', nextRow: 36 });
  f.scriptProperties.setProperty(jobKey, rawJob);
  const before = f.signature();
  const setProperty = f.docProperties.setProperty.bind(f.docProperties);
  f.docProperties.setProperty = (key, value) => {
    if (key === operationKey && JSON.parse(value).status === 'completed') {
      throw new Error('Simulated journal write failure');
    }
    return setProperty(key, value);
  };
  assert.throws(() => f.execute(), /자동 복원/);
  assert.equal(f.signature(), before);
  assert.equal(f.scriptProperties.getProperty(jobKey), rawJob);
  assert.equal(JSON.parse(f.docProperties.getProperty(operationKey)).status, 'restored');
});

test('the confirmation shows the current and next exams before destructive work', () => {
  const f = fixture();
  let prompts = 0;
  const ui = {
    Button: { OK: 'OK', CANCEL: 'CANCEL' },
    ButtonSet: { OK: 'OK', OK_CANCEL: 'OK_CANCEL' },
    prompt() {
      prompts += 1;
      return {
        getSelectedButton: () => 'OK',
        getResponseText: () => prompts === 1 ? f.folder.getUrl() : '2026 Q4',
      };
    },
    alert(title, message) {
      assert.equal(title, '분기 종료 성적표 초기화');
      assert.match(message, /2nd Semester Midterm 2026/);
      assert.match(message, /2026년 12월/);
      assert.match(message, /2nd Semester Finalterm 2026/);
      assert.equal(f.state.copies, 0);
      assert.equal(f.state.clearCalls, 0);
      return 'CANCEL';
    },
  };
  f.context.SpreadsheetApp.getUi = () => ui;
  f.context.finishQuarterAndReset();
  assert.equal(f.state.copies, 0);
});

test('one matching named folder is reused without creating another folder', () => {
  const f = fixture();
  assert.equal(f.context.getQuarterBackupFolder_('Quarter backups', false), f.folder);
  assert.deepEqual(f.state.createdFolders, []);
});

test('a new name is previewed without creation and created only during the confirmed operation', () => {
  const f = fixture();
  const name = '학원 성적표 보관';
  assert.equal(f.context.getQuarterBackupFolder_(name, false), null);
  assert.deepEqual(f.state.createdFolders, []);
  const result = f.context.executeQuarterReset_(f.ss, null, '2026 Q4', f.signature(), name);
  assert.match(result.url, /BACKUP/);
  assert.deepEqual(f.state.createdFolders, [name]);
  assert.equal(f.docProperties.getProperty('QUARTER_BACKUP_FOLDER'), f.folder.getUrl());
});

test('a long English folder name is not mistaken for a Drive ID', () => {
  const f = fixture();
  assert.equal(f.context.getQuarterBackupFolder_('AcademyReports2026', false), null);
  assert.deepEqual(f.state.nameLookups, ['AcademyReports2026']);
  assert.deepEqual(f.state.createdFolders, []);
});

test('duplicate folder names block the operation instead of selecting an arbitrary location', () => {
  const f = fixture({ duplicateFolders: true });
  const before = f.signature();
  assert.throws(() => f.context.getQuarterBackupFolder_('Quarter backups', false), /여러 개/);
  assert.throws(() => f.context.executeQuarterReset_(f.ss, null, '2026 Q4', before, 'Quarter backups'), /여러 개/);
  assert.equal(f.signature(), before);
  assert.deepEqual(f.state.createdFolders, []);
  assert.equal(f.state.copies, 0);
  assert.equal(f.state.clearCalls, 0);
});

test('a folder appearing after preview is reused under the lock', () => {
  const f = fixture();
  const name = 'New folder';
  assert.equal(f.context.getQuarterBackupFolder_(name, false), null);
  f.state.folderName = name;
  f.context.executeQuarterReset_(f.ss, null, '2026 Q4', f.signature(), name);
  assert.deepEqual(f.state.createdFolders, []);
  assert.equal(f.state.copies, 1);
});

test('folder creation failure never clears the original file', () => {
  const f = fixture({ createFolderFailure: true });
  const before = f.signature();
  assert.throws(() => f.context.executeQuarterReset_(f.ss, null, '2026 Q4', before, 'New folder'), /creation permission/);
  assert.equal(f.signature(), before);
  assert.equal(f.state.copies, 0);
  assert.equal(f.state.clearCalls, 0);
});

test('cancelling the final dialog for a new name does not even create an empty folder', () => {
  const f = fixture();
  const before = f.signature();
  let prompts = 0;
  const ui = {
    Button: { OK: 'OK', CANCEL: 'CANCEL' },
    ButtonSet: { OK: 'OK', OK_CANCEL: 'OK_CANCEL' },
    prompt(title) {
      prompts += 1;
      if (prompts === 1) assert.equal(title, '분기 백업 폴더 이름');
      return {
        getSelectedButton: () => 'OK',
        getResponseText: () => prompts === 1 ? '학원 성적표 보관' : '2026 Q4',
      };
    },
    alert(title, message) {
      assert.equal(title, '분기 종료 성적표 초기화');
      assert.match(message, /새 폴더/);
      return 'CANCEL';
    },
  };
  f.context.SpreadsheetApp.getUi = () => ui;
  f.context.finishQuarterAndReset();
  assert.equal(f.signature(), before);
  assert.deepEqual(f.state.createdFolders, []);
  assert.equal(f.state.copies, 0);
});

test('typing just a folder name completes the full menu workflow and remembers the location', () => {
  const f = fixture();
  let prompts = 0;
  let lastTitle;
  const ui = {
    Button: { OK: 'OK', CANCEL: 'CANCEL' },
    ButtonSet: { OK: 'OK', OK_CANCEL: 'OK_CANCEL' },
    prompt() {
      prompts += 1;
      return {
        getSelectedButton: () => 'OK',
        getResponseText: () => prompts === 1 ? '학원 성적표 보관' : '2026 Q4',
      };
    },
    alert(title) { lastTitle = title; return 'OK'; },
  };
  f.context.SpreadsheetApp.getUi = () => ui;
  f.context.finishQuarterAndReset();
  assert.equal(lastTitle, '분기 마감 완료');
  assert.deepEqual(f.state.createdFolders, ['학원 성적표 보관']);
  assert.equal(f.state.copies, 1);
  assert.equal(f.docProperties.getProperty('QUARTER_BACKUP_FOLDER'), f.folder.getUrl());
});

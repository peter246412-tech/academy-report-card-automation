const CONFIG = {
  studentSheet: '학생명단',
  scoreSheet: '성적입력',
  averageConfigSheet: '평균그룹설정',
  classConfigSheet: '반별설정',
  outputConfigSheet: '출력설정',
  logSheet: '생성로그',
  awardSheet: '시상순위',
  templateFile: 'ReportTemplate',
  outputMenu: '성적표 생성',
};

const LOGO_DATA_URI = 'data:image/jpeg;base64,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';

const SUBJECTS = [
  { key: 'Writing', name: 'Writing(Alpha)', scoreColumn: 'Writing(Alpha) 점수', commentColumn: 'Writing Comment' },
  { key: 'Grammar', name: 'Grammar', scoreColumn: 'Grammar 점수', commentColumn: 'Grammar Comment' },
  { key: 'Reading', name: 'Reading', scoreColumn: 'Reading 점수', commentColumn: 'Reading Comment' },
  { key: 'Listening', name: 'Listening,Speaking', scoreColumn: 'Listening,Speaking 점수', commentColumn: 'Listening Comment' },
];

const RATING_COLUMNS = ['Vocabulary', 'Homework', 'Participation'];
const RATING_OPTIONS = ['Need Improvement', 'Good', 'Perfect'];
const GRAMMAR_GROUP_OPTIONS = ['A', 'B', 'C'];
const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/responses';
const OPENAI_API_KEY_PROPERTY = 'OPENAI_API_KEY';
const STUDENT_ID_HEADER = '학생ID';

const DESIRED_SCORE_INPUT_HEADERS = [
  'Writing(Alpha) 점수',
  'Grammar 점수',
  'Reading 점수',
  'Listening,Speaking 점수',
];

const DESIRED_INPUT_HEADERS = [
  STUDENT_ID_HEADER,
  '요일',
  '시간',
  '반 이름',
  '학생 이름',
  ...DESIRED_SCORE_INPUT_HEADERS,
  'Vocabulary',
  'Homework',
  'Participation',
  'Vocabulary 교재명',
  'Writing/Grammar 교재명',
  'Reading/Listening 교재명',
  'Grammar 평균그룹',
  '출력여부',
  'Grade',
  'Writing Comment',
  'Grammar Comment',
  'Reading Comment',
  'Listening Comment',
];

const STUDENT_ROSTER_VISIBLE_HEADERS = ['요일', '시간', '반 이름', '학생 이름'];
const STUDENT_ROSTER_SYNC_HEADERS = [STUDENT_ID_HEADER, ...STUDENT_ROSTER_VISIBLE_HEADERS];
const SCORE_INPUT_LOCKED_HEADERS = STUDENT_ROSTER_SYNC_HEADERS;
const SCORE_INPUT_PROTECTION_PREFIX = '성적입력 학생명단 연동 보호';
const DAY_SORT_ORDER = ['월', '화', '수', '목', '금', '토', '일'];

const DEFAULT_CLASS_HEADERS = [
  '사용여부',
  '반 이름',
  'Grammar 평균그룹',
  '기본 Vocabulary 교재명',
  '기본 Writing/Grammar 교재명',
  '기본 Reading/Listening 교재명',
];

const DEFAULT_OUTPUT_SETTINGS = [
  ['성적표 제목', 'English Achievement Report – Final Semester 2026', 'PDF 1페이지 상단 제목. 시험/학기마다 여기만 수정'],
  ['코멘트 섹션 제목', 'Report cards for', 'PDF 2페이지 과목별 코멘트 제목'],
  ['출력월', '2026년 6월', '성적표 생성 월'],
  ['저장폴더명', '2026년 6월 영어 성적표', 'PDF가 저장될 Google Drive 폴더명'],
  ['파일명규칙', '{월}_{반 이름}_{학생 이름}_영어성적표.pdf', 'PDF 파일명 규칙'],
  ['AI 모델', 'gpt-5-mini', 'AI 코멘트 다듬기에 사용할 OpenAI 모델명'],
];

function onOpen() {
  cleanupRemovedInputColumns_();

  SpreadsheetApp.getUi()
    .createMenu(CONFIG.outputMenu)
    .addItem('현재 행 학생 PDF 생성', 'generateActiveRowReport')
    .addItem('전체 학생 PDF 생성', 'generateAllReports')
    .addSeparator()
    .addItem('시상 순위표 생성', 'generateAwardRankingSheet')
    .addSeparator()
    .addItem('선택 행 AI 코멘트 다듬기', 'polishSelectedRowsComments')
    .addItem('전체 AI 코멘트 다듬기', 'polishAllComments')
    .addSeparator()
    .addItem('AI API 키 저장', 'setOpenAiApiKey')
    .addItem('필요 기능 추가/점검', 'ensureReportColumns')
    .addToUi();

  refreshAutomaticDropdowns_();
}

function ensureReportColumns() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName(CONFIG.scoreSheet);
  if (!sheet) {
    SpreadsheetApp.getUi().alert(`'${CONFIG.scoreSheet}' 탭을 찾지 못했습니다.`);
    return;
  }

  const lastColumn = sheet.getLastColumn();
  const studentIdResult = ensureStudentIdColumns_(ss);
  const renamedHeaders = renameLegacyHeaders_(sheet);
  const removedHeaders = removeLegacyHeaders_(sheet);
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const requiredColumns = DESIRED_INPUT_HEADERS;
  const missing = requiredColumns.filter(header => !headers.includes(header));

  if (missing.length) {
    const appendStartColumn = sheet.getLastColumn() + 1;
    sheet.getRange(1, appendStartColumn, 1, missing.length).setValues([missing]);
    sheet.getRange(1, appendStartColumn, 1, missing.length)
      .setBackground('#1F4E78')
      .setFontColor('#FFFFFF')
      .setFontWeight('bold')
      .setHorizontalAlignment('center')
      .setWrap(true);
    sheet.setColumnWidths(appendStartColumn, missing.length, 170);
  }

  const reorderedHeaders = reorderInputColumns_(sheet, DESIRED_INPUT_HEADERS);
  hideHeaderColumn_(sheet, STUDENT_ID_HEADER);
  const addedClasses = ensureClassSettings_(ss, sheet);
  const validationColumns = applyRatingDropdowns_(sheet);
  const classDropdownColumns = applyClassDropdowns_(ss, sheet);
  const spacerResult = rebuildSheetWithClassSpacers_(sheet);
  const protectedColumns = applyScoreInputProtections_(sheet);
  const addedSettings = ensureOutputSettings_(ss);
  const triggerInstalled = ensureAutoSyncTrigger_();
  SpreadsheetApp.getUi().alert([
    renamedHeaders.length ? `변경된 컬럼명:\n${renamedHeaders.join('\n')}` : '변경된 컬럼명 없음',
    removedHeaders.length ? `삭제된 예전 컬럼:\n${removedHeaders.join('\n')}` : '삭제된 예전 컬럼 없음',
    missing.length ? `추가된 성적입력 컬럼:\n${missing.join('\n')}` : '성적입력 컬럼 추가 없음',
    reorderedHeaders.length ? `정렬된 컬럼:\n${reorderedHeaders.join('\n')}` : '컬럼 순서 변경 없음',
    addedClasses.length ? `반별설정에 추가된 반:\n${addedClasses.join('\n')}` : '반별설정 추가 반 없음',
    validationColumns.length ? `드롭다운 적용:\n${validationColumns.join('\n')}` : '드롭다운 적용 대상 없음',
    classDropdownColumns.length ? `반/문법반 드롭다운 적용:\n${classDropdownColumns.join('\n')}` : '반/문법반 드롭다운 적용 대상 없음',
    studentIdResult.assignedCount ? `학생ID 자동 부여: ${studentIdResult.assignedCount}명` : '학생ID 추가 부여 없음',
    spacerResult ? `반 사이 빈 행 정리: ${spacerResult.spacerCount}개` : '반 사이 빈 행 정리 대상 없음',
    protectedColumns.length ? `성적입력 보호 적용:\n${protectedColumns.join('\n')}` : '성적입력 보호 적용 대상 없음',
    addedSettings.length ? `추가된 출력설정:\n${addedSettings.join('\n')}` : '출력설정 추가 없음',
    triggerInstalled ? '자동 동기화 트리거 설치/점검 완료' : '자동 동기화 트리거 점검 건너뜀',
  ].join('\n\n'));
}

function renameLegacyHeaders_(sheet) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const renamed = [];
  const legacyAttitudeIndex = headers.indexOf('Attitude') + 1;
  const vocabularyIndex = headers.indexOf('Vocabulary') + 1;

  if (legacyAttitudeIndex && !vocabularyIndex) {
    sheet.getRange(1, legacyAttitudeIndex).setValue('Vocabulary');
    renamed.push('Attitude → Vocabulary');
  }

  const legacyWritingScoreIndex = headers.indexOf('Writing 점수') + 1;
  const writingAlphaScoreIndex = headers.indexOf('Writing(Alpha) 점수') + 1;
  if (legacyWritingScoreIndex && !writingAlphaScoreIndex) {
    sheet.getRange(1, legacyWritingScoreIndex).setValue('Writing(Alpha) 점수');
    renamed.push('Writing 점수 → Writing(Alpha) 점수');
  }

  const legacyListeningScoreIndex = headers.indexOf('Listening 점수') + 1;
  const listeningSpeakingScoreIndex = headers.indexOf('Listening,Speaking 점수') + 1;
  if (legacyListeningScoreIndex && !listeningSpeakingScoreIndex) {
    sheet.getRange(1, legacyListeningScoreIndex).setValue('Listening,Speaking 점수');
    renamed.push('Listening 점수 → Listening,Speaking 점수');
  }

  return renamed;
}

function reorderInputColumns_(sheet, desiredHeaders) {
  const moved = [];

  desiredHeaders.forEach((header, targetIndex) => {
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
    const currentColumn = headers.indexOf(header) + 1;
    const targetColumn = targetIndex + 1;
    if (!currentColumn || currentColumn === targetColumn) return;

    sheet.moveColumns(sheet.getRange(1, currentColumn, sheet.getMaxRows(), 1), targetColumn);
    moved.push(header);
  });

  return moved;
}

function removeLegacyHeaders_(sheet) {
  const legacyHeaders = ["Teacher's Comment", '월', '번호'];
  const removed = [];

  for (let column = sheet.getLastColumn(); column >= 1; column -= 1) {
    const header = stringValue_(sheet.getRange(1, column).getValue());
    if (!legacyHeaders.includes(header)) continue;
    sheet.deleteColumn(column);
    removed.push(header);
  }

  return removed;
}

function cleanupRemovedInputColumns_() {
  const ss = SpreadsheetApp.getActive();
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
  const studentSheet = ss.getSheetByName(CONFIG.studentSheet);

  if (scoreSheet) removeColumnsByHeader_(scoreSheet, ['월', '번호']);
  if (studentSheet) removeColumnsByHeader_(studentSheet, ['번호']);
}

function removeColumnsByHeader_(sheet, headersToRemove) {
  const removed = [];
  for (let column = sheet.getLastColumn(); column >= 1; column -= 1) {
    const header = stringValue_(sheet.getRange(1, column).getValue());
    if (!headersToRemove.includes(header)) continue;
    sheet.deleteColumn(column);
    removed.push(header);
  }
  return removed.reverse();
}

function onEdit(e) {
  const sheet = e && e.range ? e.range.getSheet() : null;
  if (!sheet) return;
  const ss = sheet.getParent();

  if (sheet.getName() === CONFIG.classConfigSheet) {
    const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
    if (!scoreSheet) return;
    applyClassDropdowns_(ss, scoreSheet);
    const studentSheet = ss.getSheetByName(CONFIG.studentSheet);
    if (studentSheet) applyStudentRosterDropdowns_(ss, studentSheet);
    return;
  }

  if (sheet.getName() === CONFIG.studentSheet && e.range.getRow() > 1) {
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
    const editedHeaders = headers
      .slice(e.range.getColumn() - 1, e.range.getColumn() - 1 + e.range.getNumColumns())
      .filter(Boolean);
    const shouldSync = editedHeaders.some(header => STUDENT_ROSTER_VISIBLE_HEADERS.includes(header));
    applyStudentRosterDropdowns_(ss, sheet);
    if (shouldSync) syncStudentRosterToScoreInput_(ss, false);
  }
}

function applyRatingDropdowns_(sheet) {
  const lastRow = Math.max(sheet.getMaxRows(), 200);
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(RATING_OPTIONS, true)
    .setAllowInvalid(false)
    .build();

  const applied = [];
  RATING_COLUMNS.forEach(header => {
    const columnIndex = headers.indexOf(header) + 1;
    if (!columnIndex) return;
    sheet.getRange(2, columnIndex, lastRow - 1, 1).setDataValidation(rule);
    applied.push(header);
  });
  return applied;
}

function ensureClassSettings_(ss, scoreSheet) {
  let sheet = ss.getSheetByName(CONFIG.classConfigSheet);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.classConfigSheet);
    sheet.getRange(1, 1, 1, DEFAULT_CLASS_HEADERS.length).setValues([DEFAULT_CLASS_HEADERS]);
  }

  const headerRange = sheet.getRange(1, 1, 1, DEFAULT_CLASS_HEADERS.length);
  const headers = headerRange.getValues()[0].map(stringValue_);
  const hasMissingHeader = DEFAULT_CLASS_HEADERS.some((header, index) => headers[index] !== header);
  if (hasMissingHeader) {
    headerRange.setValues([DEFAULT_CLASS_HEADERS]);
  }

  headerRange
    .setBackground('#1F4E78')
    .setFontColor('#FFFFFF')
    .setFontWeight('bold')
    .setHorizontalAlignment('center')
    .setWrap(true);
  sheet.setFrozenRows(1);
  sheet.setColumnWidths(1, DEFAULT_CLASS_HEADERS.length, 180);

  const existingRows = sheet.getLastRow() >= 2
    ? sheet.getRange(2, 1, sheet.getLastRow() - 1, DEFAULT_CLASS_HEADERS.length).getValues()
    : [];
  const existingClassNames = existingRows.map(row => stringValue_(row[1])).filter(Boolean);
  const existingMap = {};
  existingClassNames.forEach(name => existingMap[name] = true);

  const studentSheet = ss.getSheetByName(CONFIG.studentSheet);
  const scoreHeaders = scoreSheet && scoreSheet.getLastColumn()
    ? scoreSheet.getRange(1, 1, 1, scoreSheet.getLastColumn()).getValues()[0].map(stringValue_)
    : [];
  const studentHeaders = studentSheet && studentSheet.getLastColumn()
    ? studentSheet.getRange(1, 1, 1, studentSheet.getLastColumn()).getValues()[0].map(stringValue_)
    : [];

  const classNames = mergeUniqueValues_(
    scoreSheet ? collectUniqueColumnValues_(scoreSheet, scoreHeaders, '반 이름') : [],
    studentSheet ? collectUniqueColumnValues_(studentSheet, studentHeaders, '반 이름') : []
  );

  const rowsToAdd = classNames
    .filter(className => !existingMap[className])
    .map(className => [true, className, '', '', '', '']);

  if (rowsToAdd.length) {
    sheet.getRange(sheet.getLastRow() + 1, 1, rowsToAdd.length, DEFAULT_CLASS_HEADERS.length).setValues(rowsToAdd);
  }

  return rowsToAdd.map(row => row[1]);
}

function applyClassDropdowns_(ss, sheet) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const classConfig = readClassConfig_(ss.getSheetByName(CONFIG.classConfigSheet));
  const classNames = classConfig.classNames;
  if (!classNames.length) return [];

  const applied = [];
  if (applyDropdownToColumn_(sheet, headers, '반 이름', classNames)) {
    applied.push('반 이름');
  }

  if (applyDropdownToColumn_(sheet, headers, 'Grammar 평균그룹', classConfig.grammarGroups)) {
    applied.push('Grammar 평균그룹');
  }

  return applied;
}

function readClassConfig_(sheet) {
  const config = {
    classNames: [],
    grammarGroups: GRAMMAR_GROUP_OPTIONS.slice(),
  };
  if (!sheet || sheet.getLastRow() < 2) return config;

  const rows = readObjects_(sheet, CONFIG.classConfigSheet);
  const classSeen = {};
  rows.forEach(row => {
    if (!isActiveConfigRow_(row['사용여부'])) return;

    const className = stringValue_(row['반 이름']);
    if (className && !classSeen[className]) {
      classSeen[className] = true;
      config.classNames.push(className);
    }
  });

  config.classNames.sort();
  return config;
}

function isActiveConfigRow_(value) {
  if (value === false) return false;
  const text = stringValue_(value).toLowerCase();
  return !['false', 'n', 'no', '0', '미사용', '중지', 'x'].includes(text);
}

function applyDropdownToColumn_(sheet, headers, header, options) {
  const columnIndex = headers.indexOf(header) + 1;
  if (!columnIndex || !options.length) return false;

  const lastRow = Math.max(sheet.getMaxRows(), 200);
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(options, true)
    .setAllowInvalid(false)
    .build();
  sheet.getRange(2, columnIndex, lastRow - 1, 1).setDataValidation(rule);
  return true;
}

function applyScoreInputProtections_(sheet) {
  if (!sheet || sheet.getName() !== CONFIG.scoreSheet) return [];

  try {
    const lastColumn = sheet.getLastColumn();
    if (!lastColumn) return [];

    const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0].map(stringValue_);
    const maxRows = Math.max(sheet.getMaxRows(), 2);
    const existingProtections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);

    existingProtections.forEach(protection => {
      const description = stringValue_(protection.getDescription());
      if (description.indexOf(SCORE_INPUT_PROTECTION_PREFIX) !== 0) return;
      protection.remove();
    });

    const protectedHeaders = [];
    SCORE_INPUT_LOCKED_HEADERS.forEach(header => {
      const columnIndex = headers.indexOf(header) + 1;
      if (!columnIndex) return;

      const range = sheet.getRange(2, columnIndex, maxRows - 1, 1);
      const protection = range.protect()
        .setDescription(`${SCORE_INPUT_PROTECTION_PREFIX}: ${header}`);
      protection.setWarningOnly(false);

      const me = Session.getEffectiveUser();
      const myEmail = me.getEmail();
      const otherEditorEmails = protection.getEditors()
        .map(editor => editor.getEmail())
        .filter(email => email && email !== myEmail);
      protection.addEditor(me);
      if (otherEditorEmails.length) protection.removeEditors(otherEditorEmails);
      if (protection.canDomainEdit()) protection.setDomainEdit(false);

      protectedHeaders.push(header);
    });

    return protectedHeaders;
  } catch (error) {
    return [];
  }
}

function ensureStudentIdColumns_(ss) {
  const result = {
    assignedCount: 0,
    addedSheets: [],
  };
  const rosterSheet = ss.getSheetByName(CONFIG.studentSheet);
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);

  [rosterSheet, scoreSheet].forEach(sheet => {
    if (!sheet) return;
    const wasAdded = !hasHeader_(sheet, STUDENT_ID_HEADER);
    ensureHeaderColumn_(sheet, STUDENT_ID_HEADER);
    hideHeaderColumn_(sheet, STUDENT_ID_HEADER);
    if (wasAdded) result.addedSheets.push(sheet.getName());
  });

  if (rosterSheet) {
    result.assignedCount += assignMissingStudentIds_(rosterSheet);
  }

  return result;
}

function hasHeader_(sheet, header) {
  if (!sheet || sheet.getLastColumn() < 1) return false;
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  return headers.includes(header);
}

function ensureHeaderColumn_(sheet, header) {
  const lastColumn = Math.max(sheet.getLastColumn(), 1);
  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0].map(stringValue_);
  const existingIndex = headers.indexOf(header) + 1;
  if (existingIndex) return existingIndex;

  const columnIndex = sheet.getLastColumn() + 1;
  sheet.getRange(1, columnIndex).setValue(header);
  sheet.getRange(1, columnIndex)
    .setBackground('#1F4E78')
    .setFontColor('#FFFFFF')
    .setFontWeight('bold')
    .setHorizontalAlignment('center')
    .setWrap(true);
  return columnIndex;
}

function hideHeaderColumn_(sheet, header) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const columnIndex = headers.indexOf(header) + 1;
  if (!columnIndex) return false;
  sheet.hideColumns(columnIndex);
  return true;
}

function assignMissingStudentIds_(sheet) {
  if (!sheet || sheet.getLastRow() < 2) return 0;

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const idColumnIndex = headers.indexOf(STUDENT_ID_HEADER) + 1;
  const nameColumnIndex = headers.indexOf('학생 이름') + 1;
  if (!idColumnIndex || !nameColumnIndex) return 0;

  const rowCount = sheet.getLastRow() - 1;
  const values = sheet.getRange(2, 1, rowCount, sheet.getLastColumn()).getValues();
  const ids = [];
  const seen = {};
  let assignedCount = 0;

  values.forEach(row => {
    const studentName = stringValue_(row[nameColumnIndex - 1]);
    let studentId = stringValue_(row[idColumnIndex - 1]);

    if (!studentName) {
      ids.push(['']);
      return;
    }

    if (!studentId || seen[studentId]) {
      studentId = makeNewStudentId_();
      assignedCount += 1;
    }

    seen[studentId] = true;
    ids.push([studentId]);
  });

  if (ids.length) {
    sheet.getRange(2, idColumnIndex, ids.length, 1).setValues(ids);
  }

  return assignedCount;
}

function makeNewStudentId_() {
  return `WP-${Utilities.getUuid()}`;
}

function refreshAutomaticDropdowns_() {
  const ss = SpreadsheetApp.getActive();
  ensureStudentIdColumns_(ss);
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
  const studentSheet = ss.getSheetByName(CONFIG.studentSheet);

  if (scoreSheet) {
    applyRatingDropdowns_(scoreSheet);
    applyClassDropdowns_(ss, scoreSheet);
    applyScoreInputProtections_(scoreSheet);
  }
  if (studentSheet) {
    applyStudentRosterDropdowns_(ss, studentSheet);
  }
}

function collectUniqueColumnValues_(sheet, headers, header) {
  const columnIndex = headers.indexOf(header) + 1;
  if (!columnIndex || sheet.getLastRow() < 2) return [];

  const values = sheet.getRange(2, columnIndex, sheet.getLastRow() - 1, 1).getValues();
  const seen = {};
  const result = [];
  values.forEach(row => {
    const value = stringValue_(row[0]);
    if (!value || seen[value]) return;
    seen[value] = true;
    result.push(value);
  });
  return result.sort();
}

function generateAllReports() {
  const ctx = loadContext_();
  const rows = ctx.scoreRows.filter(row => shouldGenerate_(row));
  generateReports_(rows, ctx);
}

function generateActiveRowReport() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getActiveSheet();
  if (sheet.getName() !== CONFIG.scoreSheet) {
    SpreadsheetApp.getUi().alert(`'${CONFIG.scoreSheet}' 탭에서 학생 행을 선택한 뒤 실행하세요.`);
    return;
  }

  const rowNumber = sheet.getActiveRange().getRow();
  if (rowNumber <= 1) {
    SpreadsheetApp.getUi().alert('헤더가 아닌 학생 데이터 행을 선택하세요.');
    return;
  }

  const ctx = loadContext_();
  const row = readObjectAtRow_(sheet, rowNumber);
  if (!row || !stringValue_(row['학생 이름'])) {
    SpreadsheetApp.getUi().alert('선택한 행에서 학생 이름을 찾지 못했습니다. 빈 행이 아닌 학생 데이터 행을 선택하세요.');
    return;
  }
  generateReports_([row], ctx);
}

function setOpenAiApiKey() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt(
    'OpenAI API 키 저장',
    'OpenAI API 키를 입력하세요. 이 값은 Apps Script의 Script Properties에 저장됩니다.',
    ui.ButtonSet.OK_CANCEL
  );
  if (response.getSelectedButton() !== ui.Button.OK) return;

  const apiKey = response.getResponseText().trim();
  if (!apiKey) {
    ui.alert('API 키가 비어 있습니다.');
    return;
  }

  PropertiesService.getScriptProperties().setProperty(OPENAI_API_KEY_PROPERTY, apiKey);
  ui.alert('OpenAI API 키를 저장했습니다.');
}

function polishSelectedRowsComments() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getActiveSheet();
  const ui = SpreadsheetApp.getUi();

  if (sheet.getName() !== CONFIG.scoreSheet) {
    ui.alert(`'${CONFIG.scoreSheet}' 탭에서 학생 행을 선택한 뒤 실행하세요.`);
    return;
  }

  const apiKey = getOpenAiApiKey_();
  if (!apiKey) {
    ui.alert('먼저 메뉴에서 "AI API 키 저장"을 실행해 OpenAI API 키를 저장하세요.');
    return;
  }

  const range = sheet.getActiveRange();
  const startRow = Math.max(2, range.getRow());
  const endRow = range.getLastRow();
  if (endRow < 2) {
    ui.alert('헤더가 아닌 학생 데이터 행을 선택하세요.');
    return;
  }

  const targetRowCount = endRow - startRow + 1;
  if (targetRowCount > 5) {
    const response = ui.alert(
      'AI 코멘트 다듬기 확인',
      `${targetRowCount}개 행을 AI로 다듬습니다. API 사용량이 발생할 수 있습니다. 계속할까요?`,
      ui.ButtonSet.OK_CANCEL
    );
    if (response !== ui.Button.OK) return;
  }

  polishCommentRows_(ss, sheet, startRow, targetRowCount, apiKey, '선택 행 AI 코멘트 다듬기');
}

function polishAllComments() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName(CONFIG.scoreSheet);
  const ui = SpreadsheetApp.getUi();

  if (!sheet) {
    ui.alert(`'${CONFIG.scoreSheet}' 탭을 찾지 못했습니다.`);
    return;
  }

  const apiKey = getOpenAiApiKey_();
  if (!apiKey) {
    ui.alert('먼저 메뉴에서 "AI API 키 저장"을 실행해 OpenAI API 키를 저장하세요.');
    return;
  }

  const lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    ui.alert('성적입력 시트에 학생 데이터가 없습니다.');
    return;
  }

  const targetRowCount = lastRow - 1;
  const response = ui.alert(
    '전체 AI 코멘트 다듬기 확인',
    `${targetRowCount}개 학생 행을 전체 검사합니다.\n코멘트가 있는 칸만 AI로 다듬고, API 사용량이 발생할 수 있습니다.\n계속할까요?`,
    ui.ButtonSet.OK_CANCEL
  );
  if (response !== ui.Button.OK) return;

  polishCommentRows_(ss, sheet, 2, targetRowCount, apiKey, '전체 AI 코멘트 다듬기');
}

function polishCommentRows_(ss, sheet, startRow, targetRowCount, apiKey, title) {
  const outputConfig = readKeyValueConfig_(ss.getSheetByName(CONFIG.outputConfigSheet));
  const model = stringValue_(outputConfig['AI 모델']) || 'gpt-5-mini';
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const values = sheet.getRange(startRow, 1, targetRowCount, sheet.getLastColumn()).getValues();

  let changedCount = 0;
  let skippedCount = 0;
  const failures = [];

  values.forEach((rowValues, rowOffset) => {
    const rowNumber = startRow + rowOffset;
    const row = {};
    headers.forEach((header, index) => row[header] = rowValues[index]);

    const entries = buildCommentEntriesForRow_(headers, row);
    if (!entries.length) {
      skippedCount += 1;
      return;
    }

    try {
      const studentName = stringValue_(row['학생 이름']);
      const polished = polishCommentEntries_(entries, studentName, model, apiKey);
      entries.forEach(entry => {
        const polishedText = stringValue_(polished[entry.columnName]);
        if (!polishedText) return;
        const cell = sheet.getRange(rowNumber, entry.columnIndex);
        cell.setValue(polishedText);
        cell.setNote(`AI 다듬기 전 원문: ${entry.rawComment}`);
        changedCount += 1;
      });
    } catch (error) {
      failures.push(`${rowNumber}행: ${error.message}`);
    }
  });

  SpreadsheetApp.getUi().alert([
    `${title} 완료`,
    `변경된 코멘트: ${changedCount}개`,
    `건너뛴 행: ${skippedCount}개`,
    failures.length ? `실패:\n${failures.slice(0, 5).join('\n')}` : '',
  ].filter(Boolean).join('\n'));
}

function generateAwardRankingSheet() {
  const ss = SpreadsheetApp.getActive();
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
  if (!scoreSheet) {
    SpreadsheetApp.getUi().alert(`'${CONFIG.scoreSheet}' 탭을 찾지 못했습니다.`);
    return;
  }

  const outputConfig = readKeyValueConfig_(ss.getSheetByName(CONFIG.outputConfigSheet));
  const reportMonth = stringValue_(outputConfig['출력월']) || '2026년 6월';
  const scoreRows = readObjects_(scoreSheet, CONFIG.scoreSheet);
  const rankingRows = buildAwardRankingRows_(scoreRows, reportMonth);
  writeAwardRankingSheet_(ss, rankingRows);
  const studentCount = rankingRows.filter(row => stringValue_(row[3])).length;

  SpreadsheetApp.getUi().alert(`시상 순위표 생성 완료\n대상 학생: ${studentCount}명\n시트: ${CONFIG.awardSheet}`);
}

function buildAwardRankingRows_(scoreRows, reportMonth) {
  const grouped = {};

  scoreRows.forEach(row => {
    const className = stringValue_(row['반 이름']);
    const studentName = stringValue_(row['학생 이름']);
    if (!className || !studentName) return;

    const subjectScores = SUBJECTS.map(subject => ({
      name: subject.name || subject.key,
      score: parseScore_(row[subject.scoreColumn]),
    }));
    const validScores = subjectScores
      .map(subject => subject.score)
      .filter(score => score !== null);
    if (!validScores.length) return;

    const total = validScores.reduce((sum, score) => sum + score, 0);
    const average = Math.round((total / validScores.length) * 10) / 10;
    const record = {
      month: reportMonth,
      className,
      studentName,
      total,
      average,
      subjectCount: validScores.length,
      subjectScores,
    };

    if (!grouped[className]) grouped[className] = [];
    grouped[className].push(record);
  });

  const rankingRows = [];
  const classNames = Object.keys(grouped).sort();
  classNames.forEach((className, classIndex) => {
    const records = grouped[className].sort((a, b) => {
      if (b.total !== a.total) return b.total - a.total;
      return a.studentName.localeCompare(b.studentName);
    });

    let rank = 0;
    let previousTotal = null;
    records.forEach((record, index) => {
      if (record.total !== previousTotal) {
        rank = index + 1;
        previousTotal = record.total;
      }

      rankingRows.push([
        record.month,
        record.className,
        rank,
        record.studentName,
        record.total,
        record.average,
        record.subjectCount,
        ...record.subjectScores.map(subject => subject.score === null ? '' : subject.score),
      ]);
    });

    if (classIndex < classNames.length - 1) {
      rankingRows.push(new Array(7 + SUBJECTS.length).fill(''));
    }
  });

  return rankingRows;
}

function writeAwardRankingSheet_(ss, rankingRows) {
  let sheet = ss.getSheetByName(CONFIG.awardSheet);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.awardSheet);
  }

  sheet.clear();
  const headers = [
    '월',
    '반 이름',
    '순위',
    '학생 이름',
    '총점',
    '평균점수',
    '응시과목수',
    ...SUBJECTS.map(subject => subject.name || subject.key),
  ];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  if (rankingRows.length) {
    sheet.getRange(2, 1, rankingRows.length, headers.length).setValues(rankingRows);
  }

  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange
    .setBackground('#1F4E78')
    .setFontColor('#FFFFFF')
    .setFontWeight('bold')
    .setHorizontalAlignment('center')
    .setWrap(true);

  sheet.setFrozenRows(1);
  sheet.setColumnWidths(1, headers.length, 120);
  sheet.setColumnWidth(2, 170);
  sheet.setColumnWidth(4, 150);
  sheet.getRange(1, 1, Math.max(1, rankingRows.length + 1), headers.length)
    .setHorizontalAlignment('center')
    .setVerticalAlignment('middle');

  if (rankingRows.length) {
    sheet.getRange(2, 5, rankingRows.length, 2).setNumberFormat('0.0');
    sheet.getRange(2, 7, rankingRows.length, 1).setNumberFormat('0');
    sheet.getRange(2, 3, rankingRows.length, 1).setFontWeight('bold');
  }

  const existingFilter = sheet.getFilter();
  if (existingFilter) existingFilter.remove();
  sheet.getRange(1, 1, Math.max(1, rankingRows.length + 1), headers.length).createFilter();
  sheet.activate();
}

function rebuildSheetWithClassSpacers_(sheet) {
  const lastColumn = sheet.getLastColumn();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2 || lastColumn < 1) return { dataCount: 0, spacerCount: 0 };

  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0].map(stringValue_);
  const classColumnIndex = headers.indexOf('반 이름');
  if (classColumnIndex === -1) return null;

  const dataRowCount = lastRow - 1;
  const dataRange = sheet.getRange(2, 1, dataRowCount, lastColumn);
  const values = dataRange.getValues();
  const notes = dataRange.getNotes();
  const validations = dataRange.getDataValidations();

  const entries = values
    .map((row, index) => ({
      row,
      notes: notes[index],
      validations: validations[index],
    }))
    .filter(entry => entry.row.some(value => stringValue_(value)));

  entries.sort((a, b) => compareRosterRows_(a.row, b.row, headers));

  const outputValues = [];
  const outputNotes = [];
  const outputValidations = [];
  let previousGroupKey = '';

  entries.forEach(entry => {
    const rowObject = rowArrayToObject_(entry.row, headers);
    const currentGroupKey = makeClassGroupKey_(rowObject);

    if (outputValues.length && previousGroupKey && currentGroupKey && previousGroupKey !== currentGroupKey) {
      outputValues.push(new Array(lastColumn).fill(''));
      outputNotes.push(new Array(lastColumn).fill(''));
      outputValidations.push(new Array(lastColumn).fill(null));
    }

    outputValues.push(entry.row);
    outputNotes.push(entry.notes);
    outputValidations.push(entry.validations);
    previousGroupKey = currentGroupKey || previousGroupKey;
  });

  const requiredRows = outputValues.length + 1;
  if (sheet.getMaxRows() < requiredRows) {
    sheet.insertRowsAfter(sheet.getMaxRows(), requiredRows - sheet.getMaxRows());
  }

  const clearRowCount = Math.max(dataRowCount, outputValues.length);
  if (clearRowCount > 0) {
    sheet.getRange(2, 1, clearRowCount, lastColumn)
      .clearContent()
      .clearNote()
      .setBackground('#FFFFFF')
      .setFontColor('#000000')
      .setFontWeight('normal')
      .setFontStyle('normal')
      .setFontFamily('Arial')
      .setFontSize(11)
      .setVerticalAlignment('middle')
      .setWrap(false);
  }

  if (outputValues.length) {
    const outputRange = sheet.getRange(2, 1, outputValues.length, lastColumn);
    outputRange.setValues(outputValues);
    outputRange.setNotes(outputNotes);
    outputRange.setDataValidations(outputValidations);
    applyDefaultDataAlignment_(sheet, headers, outputValues.length);
  }

  return {
    dataCount: entries.length,
    spacerCount: outputValues.length - entries.length,
  };
}

function applyDefaultDataAlignment_(sheet, headers, rowCount) {
  if (!rowCount) return;

  const leftAlignedHeaders = [
    '요일',
    '시간',
    '반 이름',
    '학생 이름',
    'Vocabulary 교재명',
    'Writing/Grammar 교재명',
    'Reading/Listening 교재명',
    'Grammar 평균그룹',
    '출력여부',
    'Grade',
    'Writing Comment',
    'Grammar Comment',
    'Reading Comment',
    'Listening Comment',
  ];

  const centerAlignedHeaders = DESIRED_SCORE_INPUT_HEADERS.concat(RATING_COLUMNS);

  leftAlignedHeaders.forEach(header => {
    const columnIndex = headers.indexOf(header) + 1;
    if (!columnIndex) return;
    sheet.getRange(2, columnIndex, rowCount, 1).setHorizontalAlignment('left');
  });

  centerAlignedHeaders.forEach(header => {
    const columnIndex = headers.indexOf(header) + 1;
    if (!columnIndex) return;
    sheet.getRange(2, columnIndex, rowCount, 1).setHorizontalAlignment('center');
  });
}

function rowArrayToObject_(row, headers) {
  const object = {};
  headers.forEach((header, index) => object[header] = row[index]);
  return object;
}

function applyStudentRosterDropdowns_(ss, sheet) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const options = buildRosterDropdownOptions_(ss, sheet, headers);
  const applied = [];

  ['요일', '시간', '반 이름'].forEach(header => {
    if (applyDropdownToColumn_(sheet, headers, header, options[header] || [])) {
      applied.push(header);
    }
  });

  return applied;
}

function buildRosterDropdownOptions_(ss, rosterSheet, rosterHeaders) {
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
  const scoreHeaders = scoreSheet
    ? scoreSheet.getRange(1, 1, 1, scoreSheet.getLastColumn()).getValues()[0].map(stringValue_)
    : [];
  const classConfig = readClassConfig_(ss.getSheetByName(CONFIG.classConfigSheet));

  return {
    '요일': mergeUniqueValues_(
      collectUniqueColumnValues_(rosterSheet, rosterHeaders, '요일'),
      scoreSheet ? collectUniqueColumnValues_(scoreSheet, scoreHeaders, '요일') : []
    ),
    '시간': mergeUniqueValues_(
      collectUniqueColumnValues_(rosterSheet, rosterHeaders, '시간'),
      scoreSheet ? collectUniqueColumnValues_(scoreSheet, scoreHeaders, '시간') : []
    ),
    '반 이름': mergeUniqueValues_(
      classConfig.classNames,
      collectUniqueColumnValues_(rosterSheet, rosterHeaders, '반 이름'),
      scoreSheet ? collectUniqueColumnValues_(scoreSheet, scoreHeaders, '반 이름') : []
    ),
  };
}

function ensureAutoSyncTrigger_() {
  const ss = SpreadsheetApp.getActive();
  try {
    ScriptApp.getProjectTriggers().forEach(trigger => {
      const handler = trigger.getHandlerFunction();
      if (handler === 'handleSpreadsheetChange') {
        ScriptApp.deleteTrigger(trigger);
      }
    });

    ScriptApp.newTrigger('handleSpreadsheetChange')
      .forSpreadsheet(ss)
      .onChange()
      .create();

    return true;
  } catch (error) {
    return false;
  }
}

function handleSpreadsheetChange(e) {
  const ss = SpreadsheetApp.getActive();
  const changeType = e && e.changeType ? e.changeType : '';
  const syncChangeTypes = ['INSERT_ROW', 'REMOVE_ROW', 'INSERT_COLUMN', 'REMOVE_COLUMN'];
  if (!syncChangeTypes.includes(changeType)) return;
  const activeSheet = ss.getActiveSheet();
  if (!activeSheet || activeSheet.getName() !== CONFIG.studentSheet) return;
  syncStudentRosterToScoreInput_(ss, false);
}

function ensureReportColumnsSilently_(ss) {
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
  if (!scoreSheet) return;

  ensureStudentIdColumns_(ss);
  renameLegacyHeaders_(scoreSheet);
  removeLegacyHeaders_(scoreSheet);
  const headers = scoreSheet.getRange(1, 1, 1, scoreSheet.getLastColumn()).getValues()[0].map(stringValue_);
  const missing = DESIRED_INPUT_HEADERS.filter(header => !headers.includes(header));
  if (missing.length) {
    const appendStartColumn = scoreSheet.getLastColumn() + 1;
    scoreSheet.getRange(1, appendStartColumn, 1, missing.length).setValues([missing]);
    scoreSheet.getRange(1, appendStartColumn, 1, missing.length)
      .setBackground('#1F4E78')
      .setFontColor('#FFFFFF')
      .setFontWeight('bold')
      .setHorizontalAlignment('center')
      .setWrap(true);
  }
  reorderInputColumns_(scoreSheet, DESIRED_INPUT_HEADERS);
  hideHeaderColumn_(scoreSheet, STUDENT_ID_HEADER);
  ensureClassSettings_(ss, scoreSheet);
  ensureOutputSettings_(ss);
  applyRatingDropdowns_(scoreSheet);
  applyClassDropdowns_(ss, scoreSheet);
  applyScoreInputProtections_(scoreSheet);
}

function syncStudentRosterToScoreInput_(ss, showAlertOnError) {
  const rosterSheet = ss.getSheetByName(CONFIG.studentSheet);
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
  const ui = SpreadsheetApp.getUi();
  if (!rosterSheet || !scoreSheet) {
    if (showAlertOnError) {
      ui.alert(`'${CONFIG.studentSheet}' 또는 '${CONFIG.scoreSheet}' 탭을 찾지 못했습니다.`);
    }
    return null;
  }

  ensureStudentIdColumns_(ss);
  ensureReportColumnsSilently_(ss);
  rebuildSheetWithClassSpacers_(rosterSheet);
  applyStudentRosterDropdowns_(ss, rosterSheet);

  const rosterRows = readObjects_(rosterSheet, CONFIG.studentSheet)
    .filter(row => stringValue_(row['학생 이름']));
  const scoreRows = readObjects_(scoreSheet, CONFIG.scoreSheet)
    .filter(row => stringValue_(row['학생 이름']));
  const duplicateKeys = findDuplicateStudentKeys_(rosterRows);

  const existingByKey = {};
  const existingByName = {};
  scoreRows.forEach(row => {
    const key = makeStudentKey_(row);
    const name = stringValue_(row['학생 이름']);
    if (key && !existingByKey[key]) existingByKey[key] = row;
    if (name) {
      if (!existingByName[name]) existingByName[name] = [];
      existingByName[name].push(row);
    }
  });

  const rosterKeyMap = {};
  const usedExistingRowIndexes = {};
  const newRows = [];
  let addedCount = 0;
  let updatedCount = 0;

  rosterRows.forEach(rosterRow => {
    const key = makeStudentKey_(rosterRow);
    const name = stringValue_(rosterRow['학생 이름']);
    if (!key || rosterKeyMap[key]) return;
    rosterKeyMap[key] = true;

    const match = findBestExistingScoreRow_(rosterRow, scoreRows, existingByKey, existingByName, usedExistingRowIndexes);
    const existing = match ? match.row : null;
    if (match) usedExistingRowIndexes[match.index] = true;

    if (existing) updatedCount += 1;
    else addedCount += 1;

    const merged = Object.assign({}, existing || {});
    STUDENT_ROSTER_SYNC_HEADERS.forEach(header => {
      merged[header] = rosterRow[header];
    });
    if (!stringValue_(merged['출력여부'])) merged['출력여부'] = true;
    newRows.push(merged);
  });

  const scoreHeaders = scoreSheet.getRange(1, 1, 1, scoreSheet.getLastColumn()).getValues()[0].map(stringValue_);
  const outputValues = newRows.map(row => scoreHeaders.map(header => row[header] === undefined ? '' : row[header]));
  const dataRowCount = Math.max(scoreSheet.getLastRow() - 1, 0);
  if (dataRowCount) {
    scoreSheet.getRange(2, 1, dataRowCount, scoreSheet.getLastColumn()).clearContent().clearNote();
  }
  if (outputValues.length) {
    scoreSheet.getRange(2, 1, outputValues.length, scoreHeaders.length).setValues(outputValues);
  }

  applyRatingDropdowns_(scoreSheet);
  applyClassDropdowns_(ss, scoreSheet);
  rebuildSheetWithClassSpacers_(scoreSheet);

  const removedCount = scoreRows.filter((row, index) => {
    if (usedExistingRowIndexes[index]) return false;
    const key = makeStudentKey_(row);
    return key && !rosterKeyMap[key];
  }).length;

  return {
    rosterCount: rosterRows.length,
    addedCount,
    updatedCount,
    removedCount,
    duplicateKeys,
  };
}

function findBestExistingScoreRow_(rosterRow, scoreRows, existingByKey, existingByName, usedExistingRowIndexes) {
  const exactKey = makeStudentKey_(rosterRow);
  const exactRow = existingByKey[exactKey];
  if (exactRow) {
    const exactIndex = scoreRows.indexOf(exactRow);
    if (exactIndex !== -1 && !usedExistingRowIndexes[exactIndex]) {
      return { row: exactRow, index: exactIndex };
    }
  }

  const name = stringValue_(rosterRow['학생 이름']);
  const candidates = existingByName[name] || [];
  let best = null;

  candidates.forEach(candidate => {
    const index = scoreRows.indexOf(candidate);
    if (index === -1 || usedExistingRowIndexes[index]) return;

    const score = calculateExistingRowMatchScore_(rosterRow, candidate);
    if (!best || score > best.score) {
      best = { row: candidate, index, score };
    }
  });

  return best && best.score > 0 ? best : null;
}

function calculateExistingRowMatchScore_(rosterRow, scoreRow) {
  let score = 1;
  if (stringValue_(rosterRow['요일']) === stringValue_(scoreRow['요일'])) score += 4;
  if (stringValue_(rosterRow['시간']) === stringValue_(scoreRow['시간'])) score += 4;
  if (stringValue_(rosterRow['반 이름']) === stringValue_(scoreRow['반 이름'])) score += 4;
  score += Math.min(countFilledReportFields_(scoreRow), 8);
  return score;
}

function countFilledReportFields_(row) {
  const reportHeaders = DESIRED_INPUT_HEADERS.filter(header => !STUDENT_ROSTER_SYNC_HEADERS.includes(header));
  return reportHeaders.reduce((count, header) => count + (stringValue_(row[header]) ? 1 : 0), 0);
}

function compareRosterRows_(a, b, headers) {
  const sortHeaders = ['요일', '시간', '반 이름', '학생 이름'];
  for (let i = 0; i < sortHeaders.length; i += 1) {
    const header = sortHeaders[i];
    const columnIndex = headers.indexOf(header);
    if (columnIndex === -1) continue;

    const left = stringValue_(a[columnIndex]);
    const right = stringValue_(b[columnIndex]);
    let comparison = 0;
    if (header === '요일') {
      comparison = compareDayValues_(left, right);
    } else {
      comparison = left.localeCompare(right, 'ko');
    }
    if (comparison !== 0) return comparison;
  }
  return 0;
}

function compareDayValues_(left, right) {
  const leftIndex = daySortIndex_(left);
  const rightIndex = daySortIndex_(right);
  if (leftIndex !== rightIndex) return leftIndex - rightIndex;
  return left.localeCompare(right, 'ko');
}

function daySortIndex_(value) {
  const text = stringValue_(value);
  if (!text) return 999;
  const firstDay = DAY_SORT_ORDER.find(day => text.includes(day));
  return firstDay ? DAY_SORT_ORDER.indexOf(firstDay) : 998;
}

function generateReports_(targetRows, ctx) {
  if (!targetRows.length) {
    SpreadsheetApp.getUi().alert('생성할 학생이 없습니다.');
    return;
  }

  const folder = getOrCreateFolder_(ctx.outputConfig['저장폴더명'] || '영어 성적표 PDF');
  const logs = [];
  let successCount = 0;

  targetRows.forEach(row => {
    try {
      const report = buildReportData_(row, ctx);
      if (!report.subjects.length) throw new Error('입력된 성적 과목이 없습니다.');

      const html = renderReportHtml_(report);
      const blob = Utilities
        .newBlob(html, MimeType.HTML, `${report.fileBaseName}.html`)
        .getAs(MimeType.PDF)
        .setName(`${report.fileBaseName}.pdf`);
      const file = folder.createFile(blob);

      successCount += 1;
      logs.push([new Date(), report.month, report.className, report.studentName, '성공', file.getName(), file.getUrl()]);
    } catch (error) {
      logs.push([
        new Date(),
        stringValue_(ctx.outputConfig['출력월']) || '2026년 6월',
        stringValue_(row['반 이름']),
        stringValue_(row['학생 이름']),
        '실패',
        '',
        error.message,
      ]);
    }
  });

  appendLogs_(logs);
  SpreadsheetApp.getUi().alert(`성적표 생성 완료\n성공: ${successCount}명\n실패: ${targetRows.length - successCount}명`);
}

function loadContext_() {
  const ss = SpreadsheetApp.getActive();
  return {
    ss,
    scoreRows: readObjects_(ss.getSheetByName(CONFIG.scoreSheet), CONFIG.scoreSheet),
    outputConfig: readKeyValueConfig_(ss.getSheetByName(CONFIG.outputConfigSheet)),
  };
}

function buildReportData_(studentRow, ctx) {
  const month = stringValue_(ctx.outputConfig['출력월']) || '2026년 6월';
  const className = stringValue_(studentRow['반 이름']);
  const studentName = stringValue_(studentRow['학생 이름']);
  const title = stringValue_(ctx.outputConfig['성적표 제목']) || 'English Achievement Report – 1st Semester 2025';
  const commentSectionTitle = stringValue_(ctx.outputConfig['코멘트 섹션 제목']) || 'Report cards for';

  const subjects = SUBJECTS.map(subject => {
    const score = parseScore_(studentRow[subject.scoreColumn]);
    if (score === null) return null;

    const basisColumn = getAverageBasisColumn_(subject);
    const basisValue = stringValue_(studentRow[basisColumn]);
    const average = calculateAverage_(ctx.scoreRows, subject.scoreColumn, basisColumn, basisValue);

    return {
      name: subject.name || subject.key,
      score,
      average,
      basisColumn,
      basisValue,
      comment: stringValue_(studentRow[subject.commentColumn]),
    };
  }).filter(Boolean);

  return {
    title,
    commentSectionTitle,
    month,
    className,
    grade: stringValue_(studentRow['Grade']),
    studentName,
    vocabularyRating: stringValue_(studentRow['Vocabulary']),
    homework: stringValue_(studentRow['Homework']),
    participation: stringValue_(studentRow['Participation']),
    vocabularyBook: stringValue_(studentRow['Vocabulary 교재명']),
    writingGrammarBook: stringValue_(studentRow['Writing/Grammar 교재명']),
    readingListeningBook: stringValue_(studentRow['Reading/Listening 교재명']),
    subjects,
    subjectCount: subjects.length,
    isTwoSubject: subjects.length <= 2,
    fileBaseName: makeFileBaseName_(studentRow, month, ctx.outputConfig),
    logoDataUri: LOGO_DATA_URI,
  };
}

function getAverageBasisColumn_(subject) {
  return subject.key === 'Grammar' ? 'Grammar 평균그룹' : '반 이름';
}

function ensureOutputSettings_(ss) {
  let sheet = ss.getSheetByName(CONFIG.outputConfigSheet);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.outputConfigSheet);
    sheet.appendRow(['항목', '값', '설명']);
  }

  const values = sheet.getDataRange().getValues();
  const existingKeys = values.slice(1).map(row => stringValue_(row[0]));
  const missingRows = DEFAULT_OUTPUT_SETTINGS.filter(row => !existingKeys.includes(row[0]));

  if (missingRows.length) {
    sheet.getRange(sheet.getLastRow() + 1, 1, missingRows.length, 3).setValues(missingRows);
    sheet.getRange(1, 1, 1, 3)
      .setBackground('#1F4E78')
      .setFontColor('#FFFFFF')
      .setFontWeight('bold')
      .setHorizontalAlignment('center');
    sheet.setColumnWidth(1, 160);
    sheet.setColumnWidth(2, 360);
    sheet.setColumnWidth(3, 360);
  }

  return missingRows.map(row => row[0]);
}

function renderReportHtml_(report) {
  const template = HtmlService.createTemplateFromFile(CONFIG.templateFile);
  template.report = report;
  return template.evaluate().getContent();
}

function calculateAverage_(rows, scoreColumn, basisColumn, basisValue) {
  if (!basisValue) return null;
  const scores = rows
    .filter(row => stringValue_(row[basisColumn]) === basisValue)
    .map(row => parseScore_(row[scoreColumn]))
    .filter(score => score !== null);
  if (!scores.length) return null;
  return Math.round((scores.reduce((acc, score) => acc + score, 0) / scores.length) * 10) / 10;
}

function readObjects_(sheet, sheetNameForError) {
  if (!sheet) throw new Error(`'${sheetNameForError || '시트'}' 탭을 찾지 못했습니다.`);
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];
  const headers = values[0].map(stringValue_);
  return values.slice(1).filter(row => row.some(value => stringValue_(value))).map(row => {
    const object = {};
    headers.forEach((header, index) => object[header] = row[index]);
    return object;
  });
}

function readObjectAtRow_(sheet, rowNumber) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const values = sheet.getRange(rowNumber, 1, 1, sheet.getLastColumn()).getValues()[0];
  const object = {};
  headers.forEach((header, index) => object[header] = values[index]);
  return object;
}

function readKeyValueConfig_(sheet) {
  const config = {};
  if (!sheet) return config;
  const values = sheet.getDataRange().getValues();
  values.slice(1).forEach(row => {
    const key = stringValue_(row[0]);
    if (key) config[key] = row[1];
  });
  return config;
}

function appendLogs_(logs) {
  if (!logs.length) return;
  const ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName(CONFIG.logSheet);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.logSheet);
    sheet.appendRow(['생성일시', '월', '반 이름', '학생 이름', '상태', 'PDF 파일명', '메시지']);
  }
  sheet.getRange(sheet.getLastRow() + 1, 1, logs.length, logs[0].length).setValues(logs);
}

function buildCommentEntriesForRow_(headers, row) {
  return SUBJECTS.map(subject => {
    const columnIndex = headers.indexOf(subject.commentColumn) + 1;
    const rawComment = stringValue_(row[subject.commentColumn]);
    if (!columnIndex || !rawComment) return null;
    return {
      columnName: subject.commentColumn,
      columnIndex,
      subjectName: subject.name || subject.key,
      rawComment,
    };
  }).filter(Boolean);
}

function polishCommentEntries_(entries, studentName, model, apiKey) {
  const promptData = {
    studentName,
    comments: entries.map(entry => ({
      columnName: entry.columnName,
      subjectName: entry.subjectName,
      comment: entry.rawComment,
    })),
  };

  const payload = {
    model,
    input: [
      {
        role: 'system',
        content: [
          'You rewrite brief Korean teacher notes into warm parent-facing comments for elementary English academy report cards.',
          'Return a JSON object only. Do not wrap it in markdown.',
          'Use the exact input columnName values as JSON keys.',
          'Each value must be one natural Korean sentence ending with 습니다 or 좋겠습니다.',
          'Keep the original meaning. Do not invent achievements, scores, diagnoses, or facts.',
          'Tone: kind, professional, specific, and balanced.',
          'If the note is negative, acknowledge effort first, then mention the improvement area gently.',
          'Every sentence must include both the current observation and a future teaching direction.',
          'The teaching direction should be concrete but concise, such as guided review, repeated practice, careful checking, vocabulary reinforcement, sentence pattern practice, or listening-focused activities.',
          'Do not say only what the student lacks; also describe how the teacher will support improvement.',
          'Example: "스펠링 실수가 잦음" -> "수업에 성실히 참여하고 있으나 스펠링에서 실수가 잦아, 앞으로 단어 확인과 문장 작성 후 검토 습관을 함께 지도하겠습니다."',
          'Example: "어순 구조 이해 잘함, 기초문법 실수 잦음, 표현력 우수" -> "어순과 문장 구조를 잘 이해하고 표현력이 우수하지만 기초 문법 실수가 잦아, 앞으로 문장 작성 후 핵심 문법을 점검하는 훈련을 함께 지도하겠습니다."',
        ].join('\n'),
      },
      {
        role: 'user',
        content: JSON.stringify(promptData),
      },
    ],
  };

  const response = UrlFetchApp.fetch(OPENAI_API_ENDPOINT, {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  });

  const responseCode = response.getResponseCode();
  const responseText = response.getContentText();
  if (responseCode < 200 || responseCode >= 300) {
    throw new Error(`OpenAI API 오류 (${responseCode}): ${responseText.slice(0, 500)}`);
  }

  const responseJson = JSON.parse(responseText);
  const outputText = extractOpenAiOutputText_(responseJson);
  if (!outputText) {
    throw new Error('OpenAI 응답에서 코멘트 내용을 찾지 못했습니다.');
  }

  return parseJsonObjectFromText_(outputText);
}

function extractOpenAiOutputText_(responseJson) {
  if (responseJson.output_text) return responseJson.output_text;

  const output = responseJson.output || [];
  for (let i = 0; i < output.length; i += 1) {
    const content = output[i].content || [];
    for (let j = 0; j < content.length; j += 1) {
      if (content[j].text) return content[j].text;
      if (content[j].type === 'output_text' && content[j].text) return content[j].text;
    }
  }

  return '';
}

function parseJsonObjectFromText_(text) {
  const cleaned = stringValue_(text)
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();
  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) {
    throw new Error('OpenAI 응답을 JSON으로 해석하지 못했습니다.');
  }
  return JSON.parse(cleaned.slice(start, end + 1));
}

function getOpenAiApiKey_() {
  return stringValue_(PropertiesService.getScriptProperties().getProperty(OPENAI_API_KEY_PROPERTY));
}

function getOrCreateFolder_(folderName) {
  const folders = DriveApp.getFoldersByName(folderName);
  if (folders.hasNext()) return folders.next();
  return DriveApp.createFolder(folderName);
}

function makeFileBaseName_(row, month, outputConfig) {
  const rule = stringValue_(outputConfig['파일명규칙']) || '{월}_{반 이름}_{학생 이름}_영어성적표.pdf';
  return sanitizeFileName_(
    rule.replace(/\.pdf$/i, '')
      .replaceAll('{월}', month)
      .replaceAll('{반 이름}', stringValue_(row['반 이름']))
      .replaceAll('{학생 이름}', stringValue_(row['학생 이름']))
  );
}

function shouldGenerate_(row) {
  const value = row['출력여부'];
  if (value === true) return true;
  const text = stringValue_(value).toLowerCase();
  return ['true', 'y', 'yes', '1', '출력'].includes(text);
}

function parseScore_(value) {
  if (value === null || value === undefined || value === '') return null;
  if (typeof value === 'string' && value.trim().toLowerCase() === 'x') return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function stringValue_(value) {
  if (value === null || value === undefined) return '';
  return String(value).trim();
}

function mergeUniqueValues_(...lists) {
  const seen = {};
  const values = [];
  lists.forEach(list => {
    (list || []).forEach(item => {
      const value = stringValue_(item);
      if (!value || seen[value]) return;
      seen[value] = true;
      values.push(value);
    });
  });
  return values.sort();
}

function makeStudentKey_(row) {
  const studentId = stringValue_(row[STUDENT_ID_HEADER]);
  if (studentId) return `ID:${studentId}`;

  return STUDENT_ROSTER_VISIBLE_HEADERS
    .map(header => stringValue_(row[header]))
    .join('||');
}

function makeClassGroupKey_(row) {
  return [
    stringValue_(row['요일']),
    stringValue_(row['시간']),
    stringValue_(row['반 이름']),
  ].join('||');
}

function findDuplicateStudentKeys_(rows) {
  const counts = {};
  rows.forEach(row => {
    const key = makeStudentKey_(row);
    if (!key.replace(/\|/g, '')) return;
    counts[key] = (counts[key] || 0) + 1;
  });
  return Object.keys(counts).filter(key => counts[key] > 1).sort();
}

function sanitizeFileName_(name) {
  return name.replace(/[\\/:*?"<>|]/g, '_').replace(/\s+/g, ' ').trim();
}

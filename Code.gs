const CONFIG = {
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

const SCORE_COLUMNS = SUBJECTS.map(subject => subject.scoreColumn);

const EXTRA_COLUMNS = [
  'Grade',
  'Grammar 평균그룹',
  'Vocabulary',
  'Writing Comment',
  'Grammar Comment',
  'Reading Comment',
  'Listening Comment',
];

const RATING_COLUMNS = ['Vocabulary', 'Homework', 'Participation'];
const RATING_OPTIONS = ['Need Improvement', 'Good', 'Perfect'];
const GRAMMAR_GROUP_OPTIONS = ['A', 'B', 'C'];

const DESIRED_SCORE_INPUT_HEADERS = [
  'Writing(Alpha) 점수',
  'Grammar 점수',
  'Reading 점수',
  'Listening,Speaking 점수',
];

const DESIRED_INPUT_HEADERS = [
  '월',
  '요일',
  '시간',
  '반 이름',
  '번호',
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
];

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu(CONFIG.outputMenu)
    .addItem('현재 행 학생 PDF 생성', 'generateActiveRowReport')
    .addItem('전체 학생 PDF 생성', 'generateAllReports')
    .addItem('반 이름 입력해서 생성', 'generateReportsByClassPrompt')
    .addSeparator()
    .addItem('시상 순위표 생성', 'generateAwardRankingSheet')
    .addSeparator()
    .addItem('필요 컬럼 추가/점검', 'ensureReportColumns')
    .addItem('설정 점검', 'checkReportSettings')
    .addToUi();
}

function ensureReportColumns() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName(CONFIG.scoreSheet);
  if (!sheet) {
    SpreadsheetApp.getUi().alert(`'${CONFIG.scoreSheet}' 탭을 찾지 못했습니다.`);
    return;
  }

  const lastColumn = sheet.getLastColumn();
  const renamedHeaders = renameLegacyHeaders_(sheet);
  const removedHeaders = removeLegacyHeaders_(sheet);
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const requiredColumns = SCORE_COLUMNS.concat(EXTRA_COLUMNS);
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
  const addedClasses = ensureClassSettings_(ss, sheet);
  const validationColumns = applyRatingDropdowns_(sheet);
  const classDropdownColumns = applyClassDropdowns_(ss, sheet);
  const addedSettings = ensureOutputSettings_(ss);
  SpreadsheetApp.getUi().alert([
    renamedHeaders.length ? `변경된 컬럼명:\n${renamedHeaders.join('\n')}` : '변경된 컬럼명 없음',
    removedHeaders.length ? `삭제된 예전 컬럼:\n${removedHeaders.join('\n')}` : '삭제된 예전 컬럼 없음',
    missing.length ? `추가된 성적입력 컬럼:\n${missing.join('\n')}` : '성적입력 컬럼 추가 없음',
    reorderedHeaders.length ? `정렬된 컬럼:\n${reorderedHeaders.join('\n')}` : '컬럼 순서 변경 없음',
    addedClasses.length ? `반별설정에 추가된 반:\n${addedClasses.join('\n')}` : '반별설정 추가 반 없음',
    validationColumns.length ? `드롭다운 적용:\n${validationColumns.join('\n')}` : '드롭다운 적용 대상 없음',
    classDropdownColumns.length ? `반/문법반 드롭다운 적용:\n${classDropdownColumns.join('\n')}` : '반/문법반 드롭다운 적용 대상 없음',
    addedSettings.length ? `추가된 출력설정:\n${addedSettings.join('\n')}` : '출력설정 추가 없음',
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
  const legacyHeaders = ["Teacher's Comment"];
  const removed = [];

  for (let column = sheet.getLastColumn(); column >= 1; column -= 1) {
    const header = stringValue_(sheet.getRange(1, column).getValue());
    if (!legacyHeaders.includes(header)) continue;
    sheet.deleteColumn(column);
    removed.push(header);
  }

  return removed;
}

function onEdit(e) {
  const sheet = e && e.range ? e.range.getSheet() : null;
  if (!sheet || sheet.getName() !== CONFIG.classConfigSheet) return;
  const ss = sheet.getParent();
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
  if (!scoreSheet) return;
  applyClassDropdowns_(ss, scoreSheet);
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

  const scoreHeaders = scoreSheet.getRange(1, 1, 1, scoreSheet.getLastColumn()).getValues()[0].map(stringValue_);
  const classNames = collectUniqueColumnValues_(scoreSheet, scoreHeaders, '반 이름');
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
  const row = ctx.scoreRows[rowNumber - 2];
  if (!row) {
    SpreadsheetApp.getUi().alert('선택한 행의 데이터를 찾지 못했습니다.');
    return;
  }
  generateReports_([row], ctx);
}

function generateReportsByClassPrompt() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt('반 이름 입력', '성적표를 생성할 반 이름을 정확히 입력하세요.', ui.ButtonSet.OK_CANCEL);
  if (response.getSelectedButton() !== ui.Button.OK) return;

  const className = response.getResponseText().trim();
  if (!className) return;

  const ctx = loadContext_();
  const rows = ctx.scoreRows.filter(row => shouldGenerate_(row) && stringValue_(row['반 이름']) === className);
  if (!rows.length) {
    ui.alert(`'${className}' 반에서 생성 대상 학생을 찾지 못했습니다.`);
    return;
  }
  generateReports_(rows, ctx);
}

function checkReportSettings() {
  const ctx = loadContext_();
  SpreadsheetApp.getUi().alert([
    `성적입력 학생 수: ${ctx.scoreRows.length}`,
    `출력 대상 학생 수: ${ctx.scoreRows.filter(row => shouldGenerate_(row)).length}`,
    `평균 기준 과목 수: ${Object.keys(ctx.averageRules).length}`,
    `저장 폴더명: ${ctx.outputConfig['저장폴더명'] || '(미설정)'}`,
  ].join('\n'));
}

function generateAwardRankingSheet() {
  const ss = SpreadsheetApp.getActive();
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
  if (!scoreSheet) {
    SpreadsheetApp.getUi().alert(`'${CONFIG.scoreSheet}' 탭을 찾지 못했습니다.`);
    return;
  }

  const scoreRows = readObjects_(scoreSheet, CONFIG.scoreSheet);
  const rankingRows = buildAwardRankingRows_(scoreRows);
  writeAwardRankingSheet_(ss, rankingRows);

  SpreadsheetApp.getUi().alert(`시상 순위표 생성 완료\n대상 학생: ${rankingRows.length}명\n시트: ${CONFIG.awardSheet}`);
}

function buildAwardRankingRows_(scoreRows) {
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
      month: stringValue_(row['월']),
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
  Object.keys(grouped).sort().forEach(className => {
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
    sheet.getRange(2, 1, rankingRows.length, headers.length).sort([
      { column: 2, ascending: true },
      { column: 3, ascending: true },
      { column: 5, ascending: false },
    ]);
  }

  const existingFilter = sheet.getFilter();
  if (existingFilter) existingFilter.remove();
  sheet.getRange(1, 1, Math.max(1, rankingRows.length + 1), headers.length).createFilter();
  sheet.activate();
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
        stringValue_(row['월']),
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
    averageRules: readAverageRules_(ss.getSheetByName(CONFIG.averageConfigSheet)),
    outputConfig: readKeyValueConfig_(ss.getSheetByName(CONFIG.outputConfigSheet)),
  };
}

function buildReportData_(studentRow, ctx) {
  const month = stringValue_(studentRow['월']) || stringValue_(ctx.outputConfig['출력월']) || '2026년 6월';
  const className = stringValue_(studentRow['반 이름']);
  const studentName = stringValue_(studentRow['학생 이름']);
  const title = stringValue_(ctx.outputConfig['성적표 제목']) || 'English Achievement Report – 1st Semester 2025';
  const commentSectionTitle = stringValue_(ctx.outputConfig['코멘트 섹션 제목']) || 'Report cards for';

  const subjects = SUBJECTS.map(subject => {
    const score = parseScore_(studentRow[subject.scoreColumn]);
    if (score === null) return null;

    const rule = ctx.averageRules[subject.key] || {};
    const basisColumn = rule.basisColumn || (subject.key === 'Grammar' ? 'Grammar 평균그룹' : '반 이름');
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
  return values.slice(1).map(row => {
    const object = {};
    headers.forEach((header, index) => object[header] = row[index]);
    return object;
  });
}

function readAverageRules_(sheet) {
  const rules = {};
  if (!sheet) return rules;
  readObjects_(sheet, CONFIG.averageConfigSheet).forEach(row => {
    const subject = stringValue_(row['과목']);
    if (!subject) return;
    rules[subject] = {
      scoreColumn: stringValue_(row['점수 컬럼명']),
      basisColumn: stringValue_(row['평균 기준 컬럼명']),
    };
  });
  return rules;
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

function sanitizeFileName_(name) {
  return name.replace(/[\\/:*?"<>|]/g, '_').replace(/\s+/g, ' ').trim();
}

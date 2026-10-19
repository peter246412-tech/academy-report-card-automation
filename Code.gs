const CONFIG = {
  studentSheet: '학생명단',
  scoreSheet: '성적입력',
  classConfigSheet: '반별설정',
  outputConfigSheet: '출력설정',
  logSheet: '생성로그',
  awardSheet: '시상순위',
  templateFile: 'ReportTemplate',
  outputMenu: '성적표 생성',
};

const LOGO_DATA_URI = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABAKADAAQAAAABAAAAWgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAWgEAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMABgYGBgYGCgYGCg4KCgoOEg4ODg4SFxISEhISFxwXFxcXFxccHBwcHBwcHCIiIiIiIicnJycnLCwsLCwsLCwsLP/bAEMBBwcHCwoLEwoKEy4fGh8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLv/dAAQAEP/aAAwDAQACEQMRAD8A+qaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/9D6pooooAKKQ9OKxF1OZZxHMFA3YNY1a8adubqXGDlsblFFFbEFeS7toW2SyKp9CcVH/aFj/wA90/76FWWijc5ZQT7jNY2r3UVhEpjjQu54BHGB1Nc9WcqcXNtWNIRUmorcv/2lp/8Az3j/AO+hViKeGZd0Lq49VOaxNLP9pwPJdQxbM7VwvX1rD1W1l0S5S7smKo54HXBHY+oNYSxU4wVZq8fxNFRi5cl9TvKKqWN2t7aR3K8bxyPQ9CPzqlNqUpums7WMM69SxwK6pVoKKk+pioNto2KKwxqzwTiC/QR5GdynIH1qxp+oNeySqVAVDwR3BzUxxNOUlFPUbpySualFYsmpz/a3tIIPMZP9rHH5U/7ZqX/Pn/4+KPrEOl/uYezZr0VVtpbiVC1xF5RB4Gc5FZk+q3UNwLc23zOcJ83UZ+lOVeMUpS/JgoNuyN2isGfVby1QPPa7VJxneOv5Vp2088sJkli8tuy5znjjmiFeEnyrf0YODSuy3RXPy6vdQOiXFuE3nAO/P8qkbVybqWCIK6RxlwwOc4Gan61T7j9lI3KKy7S/e4sDeGPLDPyrznHpWVJ4jxKAkXyD72Tz+GOKJ4unFKUnuCpSbaSOporDk1dhYtexxEYYAB++e4xV77aqWAvpRgbAxA9+1Uq8Hs+lxOnJF6iufj1HVJ4vtMNspi6jLfMRSvrYOn/bYU+YOEKsemfeo+tU7XfrsP2UtjfoqKCQywpIRgsoP5jNS10J3VzMKKKKYH//0fqmiiigArmtYi8uYTDo4/UV0tUdSt/tFo6j7y/Mv1FcuMpe0pNLc0pS5ZJiadcfaLVSeWX5T+FF7fxWTRrIM+Y2PoPWue0W68q68lj8svH4jpWj5I1O4unblFXyU+vUn8656WJlOjHk+Lb7jWdJRm+bY36871e6a91ArH8wU+Wnv/8ArNdC2pmLRTKxxMuYsd944/lzXNaPb3M1159uiyeTzhjgZPSscbW9ryUoddTTDw5Oab6Hf2dutpax26/wDB9z3P51zfiuZPs8NsPvs+76ADH9a0nl14qQkECn1Lk/pgVnwaBPPcfatWlEjHnavf2z6ewroxDlOn7GlF699EjOnaMvaTZo+H4Wh0qIPwWy34E8Vn6mj+azTCDPVeSHIzx6V1IAAwOAK57WI7k3EbRoWTbglUDHOfeniKXLQUFrYVOd6jfczbZhEN6m2Vj/AHySf61p6IhWSdiyNuwfkOR3rL8ub+7L/wB+VrV0WHypJTtkG4D767fXpzXLhk/aRVtjSq/dYNb31tqUt3DD5quMD5gPT/CrP2vU/wDnz/8AHxStcasGIW2QjPB39qb9p1j/AJ9U/wC+xXWrRvyuS+X/AADPV7pff/wS9ay3MqsbiLyiDwMg5rBvPtk1/FcrbPthP/fWDW1ay3zlvtUSxgD5cNnJqp9o1j/n1T/vsVVVKUEm393/AACY3Um1Yz9Se9v4ViW1kTDZyee1bdu8s9qweIxNgqA3061U+0ax/wA+qf8AfYq9aSXcgb7XEIyDxg5zSpRXO3d691b9Bzfu20OUtrN4htuLN5XVs5DYFSRwS/a55BbtChhcBccZ2+vvTZIriK/uHKzqGYkGIdQTmiQzvGyg3hJBGGHB+vtXnpKKtbb0/wAjou3rc09PtpJdGa2OUZtw5471XtjdWdsbRrPzDz8wIKnPrWlokbx6eqSKVO5uCMHrSf2Fpx/hb/vo12RoycIShva39aMxc0pSUu5kHT7mDSJIT80juG2LzgVoRWi22l7FhaUyhd6Z5yRz9MVV1TSLeC0MlqjmQEYwSf0rcs1YWESkEN5YGDwc4opUbTcWrWXr+gTneN0+px2bqKQWKeegbpHuGcGnXknlWH2JbdogHDFmYEk+9WrGR7dzLe208s6n5XwTgYxjrT7r7FdFneyuFdjksq8n+Yri5LwbT18+33G3N7y0/r7zp7P/AI9Yv9xf5CrFQ24AgjCggbRgN1HHf3qavch8KOF7hRRRVCP/0vqmiiigAooooA8/1OFrO+YJxk70x7/4GuzsLf7NaRxH72Mt/vHk0txYW11LHNMMtEcj/wCvVyuLD4T2VSU++xvUrc0VE8+8RwvbXmQf3c3z47buhrp9Bs/smnoWGHl+dvx6D8quXunW2oKi3IJCHcMHH+RV0DAwKVHCclaVX7v1HOtzU1AWiiiu45wooooAMUYoooAq3FwYGj4yruEJ9M9Kz49W8xSQgB80IBnqp/i/IVoXlt9qt2hztJwQfQg1Tj0tI7iKbd8sabSuOpAIz+tctRVef3NjWPJbXcb/AGlP5X2zyR9nz1z82M4zimSatJGZW2IUifafnwx9wMU/+zZvK+yGb/R8/d2/NjOcZ/8ArUPpKMXkDASGTzEbH3fY+orNqvbT9Cl7PqXbe6M8s0e3HlEAe+RmqTajcgzSLCGjgYqxDfNx1IGKkFneRzSTQzKvmkEgpnkDHrUZ064PmoJwsczFmAX5ueoBzVydVqyT69vkJcly5PdCOya8jG4BN4HTNZzatLEGEsa7vLMi7G3DjseOK0p7USWbWcZ2gptB64qF9Ng+yvbwqsZkTaWC06karfuvp+IouHUqJqsgYpJGmTG0i7H3fdGcHjiiHVJpEMhWHAQvhZMtwM9MfnUn9lLGzG3YIJIzG4xwTjAI9DTYtNuI4/KMkZXYUyI8NyMdc1mlXvr+hX7sLbU5ZJYY5o1AnGVKNuI4zyMcVtVSs7G3tI1CIu8KAXAwTV2umipqPvvUzm037oYoxRRWpAUUUUAFFFFAH//T+qaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/9T6pooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//2Q==';

const SUBJECTS = [
  { key: 'Writing', name: 'Writing(Alpha)', scoreColumn: 'Writing(Alpha) 점수', commentColumn: 'Writing Comment' },
  { key: 'Grammar', name: 'Grammar', scoreColumn: 'Grammar 점수', commentColumn: 'Grammar Comment' },
  { key: 'Reading', name: 'Reading', scoreColumn: 'Reading 점수', commentColumn: 'Reading Comment' },
  { key: 'Listening', name: 'Listening,Speaking', scoreColumn: 'Listening,Speaking 점수', commentColumn: 'Listening Comment' },
];

const RATING_COLUMNS = ['Vocabulary', 'Homework', 'Participation'];
const RATING_OPTIONS = ['Need Improvement', 'Good', 'Perfect'];
const GRAMMAR_GROUP_OPTIONS = ['A', 'B', 'C'];
const MIN_SCORE = 0;
const MAX_SCORE = 100;
const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/responses';
const OPENAI_API_KEY_PROPERTY = 'OPENAI_API_KEY';
const STUDENT_ID_HEADER = '학생ID';
const ENROLLMENT_STATUS_HEADER = '재원상태';
const ENROLLMENT_STATUS_OPTIONS = ['재원', '퇴원'];
const AUTOMATIC_ROSTER_SYNC_ENABLED = false;
const LEGACY_SYNC_TRIGGER_HANDLERS = [
  'handleSpreadsheetChange',
  'syncClassSettingsDropdowns_',
  'refreshAutomaticDropdowns_',
  'syncStudentRosterToScoreInput_',
];

const DESIRED_SCORE_INPUT_HEADERS = [
  'Writing(Alpha) 점수',
  'Grammar 점수',
  'Reading 점수',
  'Listening,Speaking 점수',
];

const DESIRED_INPUT_HEADERS = [
  '요일',
  '시간',
  '반 이름',
  '학생 이름',
  ENROLLMENT_STATUS_HEADER,
  ...DESIRED_SCORE_INPUT_HEADERS,
  'Vocabulary',
  'Homework',
  'Participation',
  'Vocabulary 교재명',
  'Writing/Grammar 교재명',
  'Reading/Listening 교재명',
  'Grammar 평균그룹',
  'Grade',
  'Writing Comment',
  'Grammar Comment',
  'Reading Comment',
  'Listening Comment',
  STUDENT_ID_HEADER,
];

const STUDENT_ROSTER_VISIBLE_HEADERS = [
  '요일',
  '시간',
  '반 이름',
  '학생 이름',
  ENROLLMENT_STATUS_HEADER,
];
const SCORE_INPUT_FROZEN_COLUMN_COUNT = 4;
const STUDENT_ROSTER_SYNC_HEADERS = [...STUDENT_ROSTER_VISIBLE_HEADERS, STUDENT_ID_HEADER];

const ACTIVE_CLASS_LIST_HEADER = '__활성반목록';
const GRAMMAR_GROUP_LIST_HEADER = '__Grammar그룹목록';
const CLASS_CONFIG_HELPER_ROW_COUNT = 1000;
const CLASS_SORT_ORDER = [
  'starter1',
  'starter2',
  'starter3',
  'starter4',
  'beginner1',
  'beginner2',
  'beginner3',
  'beginner4',
  'preinter1',
  'preinter2',
  'preinter3',
  'preinter4',
  'advanced1',
  'advanced2',
  'advanced3',
  'advanced4',
  'powerstation1',
  'powerstation2',
  'grammar1',
  'grammar2',
  'grammar3',
  'grammar4',
];
const CLASS_DEFAULT_SCORE_HEADERS = [
  'Vocabulary 교재명',
  'Writing/Grammar 교재명',
  'Reading/Listening 교재명',
];
const DEFAULT_CLASS_HEADERS = [
  '사용여부',
  '반 이름',
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
  try {
    SpreadsheetApp.getUi()
      .createMenu(CONFIG.outputMenu)
      .addItem('학생 추가', 'addScoreInputRows')
      .addItem('선택 학생 완전 삭제', 'deactivateSelectedStudents')
      .addSeparator()
      .addItem('선택 행 학생 PDF 생성', 'generateSelectedRowReports')
      .addItem('전체 학생 PDF 생성', 'generateAllReports')
      .addSeparator()
      .addItem('시상 순위표 생성', 'generateAwardRankingSheet')
      .addSeparator()
      .addItem('선택 행 AI 코멘트 다듬기', 'polishSelectedRowsComments')
      .addItem('전체 AI 코멘트 다듬기', 'polishAllComments')
      .addSeparator()
      .addItem('새 반 추가', 'addClassSetting')
      .addItem('반 이름 수정', 'renameClassSetting')
      .addItem('반 삭제', 'deleteClassSetting')
      .addSeparator()
      .addItem('AI API 키 저장', 'setOpenAiApiKey')
      .addToUi();
  } catch (error) {
    console.error(`메뉴 생성 실패: ${error.message}`);
  }

  try {
    const scoreSheet = SpreadsheetApp.getActive().getSheetByName(CONFIG.scoreSheet);
    if (scoreSheet) {
      removeOutputColumn_(scoreSheet);
      scoreSheet.setFrozenColumns(SCORE_INPUT_FROZEN_COLUMN_COUNT);
    }
  } catch (error) {
    console.error(`성적입력 초기화 실패: ${error.message}`);
  }
}

function ensureReportColumns() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName(CONFIG.scoreSheet);
  if (!sheet) {
    SpreadsheetApp.getUi().alert(`'${CONFIG.scoreSheet}' 탭을 찾지 못했습니다.`);
    return;
  }

  const studentIdResult = ensureStudentIdColumns_(ss);
  const renamedHeaders = renameLegacyHeaders_(sheet);
  const removedOutputColumn = removeOutputColumn_(sheet);
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
  const studentControlColumns = applyStudentControlColumns_(sheet);
  const initializedStatuses = fillBlankEnrollmentStatuses_(sheet);
  formatScoreInputSheet_(sheet);
  const addedSettings = ensureOutputSettings_(ss);
  const removedTriggers = removeLegacySyncTriggers_();
  SpreadsheetApp.getUi().alert([
    renamedHeaders.length ? `변경된 컬럼명:\n${renamedHeaders.join('\n')}` : '변경된 컬럼명 없음',
    removedOutputColumn ? '출력여부 컬럼 삭제 완료' : '출력여부 컬럼 없음',
    removedHeaders.length ? `삭제된 예전 컬럼:\n${removedHeaders.join('\n')}` : '삭제된 예전 컬럼 없음',
    missing.length ? `추가된 성적입력 컬럼:\n${missing.join('\n')}` : '성적입력 컬럼 추가 없음',
    reorderedHeaders.length ? `정렬된 컬럼:\n${reorderedHeaders.join('\n')}` : '컬럼 순서 변경 없음',
    addedClasses.length ? `반별설정에 추가된 반:\n${addedClasses.join('\n')}` : '반별설정 추가 반 없음',
    validationColumns.length ? `드롭다운 적용:\n${validationColumns.join('\n')}` : '드롭다운 적용 대상 없음',
    classDropdownColumns.length ? `반/문법반 드롭다운 적용:\n${classDropdownColumns.join('\n')}` : '반/문법반 드롭다운 적용 대상 없음',
    studentControlColumns.length ? `학생 관리 설정:\n${studentControlColumns.join('\n')}` : '학생 관리 설정 대상 없음',
    studentIdResult.assignedCount ? `안전 연결용 학생ID 부여: ${studentIdResult.assignedCount}명` : '학생ID 추가 부여 없음',
    initializedStatuses ? `빈 재원상태 자동 입력: ${initializedStatuses}명` : '재원상태 추가 입력 없음',
    addedSettings.length ? `추가된 출력설정:\n${addedSettings.join('\n')}` : '출력설정 추가 없음',
    removedTriggers ? `기존 동기화 트리거 제거: ${removedTriggers}개` : '남아 있는 동기화 트리거 없음',
    '이제 성적입력 탭만 사용합니다. 학생명단 탭은 확인 후 지워도 됩니다.',
    '명단 반영은 점수·평가·Grade·교재·코멘트를 수정하지 않습니다.',
  ].join('\n\n'));
}

function renameLegacyHeaders_(sheet) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const renamed = [];
  const legacyStatusIndex = headers.indexOf('상태') + 1;
  const enrollmentStatusIndex = headers.indexOf(ENROLLMENT_STATUS_HEADER) + 1;
  if (legacyStatusIndex && !enrollmentStatusIndex) {
    sheet.getRange(1, legacyStatusIndex).setValue(ENROLLMENT_STATUS_HEADER);
    renamed.push(`상태 → ${ENROLLMENT_STATUS_HEADER}`);
  }

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
  // 기존 입력값 보호를 위해 어떤 열도 자동 삭제하지 않는다.
  return [];
}

function removeOutputColumn_(sheet) {
  if (!sheet || sheet.getLastColumn() < 1) return false;
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const columnIndex = headers.indexOf('출력여부') + 1;
  if (!columnIndex) return false;
  sheet.deleteColumn(columnIndex);
  return true;
}

function cleanupRemovedInputColumns_() {
  return [];
}

function removeColumnsByHeader_(sheet, headersToRemove) {
  return [];
}

function onEdit(e) {
  const sheet = e && e.range ? e.range.getSheet() : null;
  if (!sheet) return;
  const ss = sheet.getParent();

  if (sheet.getName() === CONFIG.classConfigSheet && e.range.getRow() > 1) {
    const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
    if (scoreSheet) applyClassDropdowns_(ss, scoreSheet);
    return;
  }

  if (sheet.getName() === CONFIG.scoreSheet && e.range.getRow() > 1) {
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
    const editedHeaders = headers
      .slice(e.range.getColumn() - 1, e.range.getColumn() - 1 + e.range.getNumColumns())
      .filter(Boolean);
    if (editedHeaders.includes(ENROLLMENT_STATUS_HEADER)
      && deleteWithdrawnRows_(sheet, e.range.getRow(), e.range.getNumRows())) {
      return;
    }
    if (editedHeaders.includes('학생 이름')) {
      assignMissingStudentIds_(sheet);
      fillBlankEnrollmentStatuses_(sheet);
    }
    if (editedHeaders.includes('반 이름')) {
      ensureClassSettings_(ss, sheet);
      applyClassDropdowns_(ss, sheet);
    }
    if (editedHeaders.includes('학생 이름') || editedHeaders.includes('반 이름')) {
      organizeStudentRowsSafely_(
        sheet,
        e.range.getRow(),
        e.range.getNumRows(),
        true
      );
    }
  }
}

function deleteWithdrawnRows_(sheet, startRow, rowCount) {
  if (!sheet || sheet.getLastRow() < 2) return 0;
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const nameColumnIndex = headers.indexOf('학생 이름') + 1;
  const statusColumnIndex = headers.indexOf(ENROLLMENT_STATUS_HEADER) + 1;
  if (!nameColumnIndex || !statusColumnIndex) return 0;

  const firstRow = Math.max(startRow, 2);
  const lastRow = Math.min(startRow + rowCount - 1, sheet.getLastRow());
  if (lastRow < firstRow) return 0;
  const values = sheet.getRange(firstRow, 1, lastRow - firstRow + 1, sheet.getLastColumn()).getValues();
  const rowsToDelete = values.map((row, index) => (
    stringValue_(row[nameColumnIndex - 1])
      && stringValue_(row[statusColumnIndex - 1]) === '퇴원'
      ? firstRow + index
      : 0
  )).filter(Boolean).sort((left, right) => right - left);
  if (!rowsToDelete.length) return 0;

  const lock = LockService.getDocumentLock() || LockService.getScriptLock();
  if (!lock.tryLock(5000)) {
    sheet.getParent().toast('다른 학생 작업이 진행 중입니다. 잠시 후 다시 시도하세요.', '학생 삭제', 5);
    return 0;
  }

  try {
    rowsToDelete.forEach(rowNumber => sheet.deleteRow(rowNumber));
    normalizeClassSpacerRows_(sheet);
    sheet.getParent().toast(`퇴원 학생 ${rowsToDelete.length}명의 행을 완전히 삭제했습니다.`, '학생 삭제', 5);
    return rowsToDelete.length;
  } finally {
    lock.releaseLock();
  }
}

function organizeStudentRowsSafely_(sheet, startRow, rowCount, moveToClassEnd) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const classColumnIndex = headers.indexOf('반 이름') + 1;
  const nameColumnIndex = headers.indexOf('학생 이름') + 1;
  const idColumnIndex = headers.indexOf(STUDENT_ID_HEADER) + 1;
  if (!classColumnIndex || !nameColumnIndex || !idColumnIndex) return false;

  const firstRow = Math.max(startRow, 2);
  const lastRow = Math.min(startRow + rowCount - 1, sheet.getLastRow());
  if (lastRow < firstRow) return false;
  const editedRows = sheet.getRange(firstRow, 1, lastRow - firstRow + 1, sheet.getLastColumn()).getValues();
  const studentIds = editedRows.map(row => {
    if (!stringValue_(row[classColumnIndex - 1]) || !stringValue_(row[nameColumnIndex - 1])) return '';
    return stringValue_(row[idColumnIndex - 1]);
  }).filter(Boolean);
  if (!studentIds.length) return false;

  const lock = LockService.getDocumentLock() || LockService.getScriptLock();
  if (!lock.tryLock(5000)) {
    sheet.getParent().toast('다른 학생 행을 정리 중입니다. 잠시 후 반을 다시 선택하세요.', '학생 행 정리', 5);
    return false;
  }

  try {
    const remainingStudentIds = new Set(studentIds);
    studentIds.forEach(studentId => {
      const rowNumber = findStudentRowById_(sheet, idColumnIndex, studentId);
      if (rowNumber) organizeStudentRow_(sheet, rowNumber, moveToClassEnd, remainingStudentIds);
      remainingStudentIds.delete(studentId);
    });
    normalizeClassSpacerRows_(sheet);
    return true;
  } catch (error) {
    console.error(error);
    sheet.getParent().toast(
      `학생 행을 자동 이동하지 못했습니다. 입력값은 유지됩니다. (${error.message})`,
      '학생 행 정리',
      8
    );
    return false;
  } finally {
    lock.releaseLock();
  }
}

function findStudentRowById_(sheet, idColumnIndex, studentId) {
  if (!sheet || !idColumnIndex || !studentId || sheet.getLastRow() < 2) return 0;
  const ids = sheet.getRange(2, idColumnIndex, sheet.getLastRow() - 1, 1).getValues();
  const rowOffset = ids.findIndex(row => stringValue_(row[0]) === studentId);
  return rowOffset === -1 ? 0 : rowOffset + 2;
}

function organizeStudentRow_(sheet, rowNumber, moveToClassEnd, excludedStudentIds) {
  if (!sheet || rowNumber < 2 || rowNumber > sheet.getLastRow()) return false;

  const lastColumn = sheet.getLastColumn();
  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0].map(stringValue_);
  const classColumnIndex = headers.indexOf('반 이름') + 1;
  const nameColumnIndex = headers.indexOf('학생 이름') + 1;
  const idColumnIndex = headers.indexOf(STUDENT_ID_HEADER) + 1;
  if (!classColumnIndex || !nameColumnIndex || !idColumnIndex) return false;

  const studentName = stringValue_(sheet.getRange(rowNumber, nameColumnIndex).getValue());
  const className = stringValue_(sheet.getRange(rowNumber, classColumnIndex).getValue());
  if (!studentName || !className) return false;

  const rowCount = sheet.getLastRow() - 1;
  const classValues = sheet.getRange(2, classColumnIndex, rowCount, 1).getValues();
  const nameValues = sheet.getRange(2, nameColumnIndex, rowCount, 1).getValues();
  const idValues = sheet.getRange(2, idColumnIndex, rowCount, 1).getValues();
  const students = [];
  for (let index = 0; index < rowCount; index += 1) {
    if (!stringValue_(nameValues[index][0])) continue;
    students.push({
      rowNumber: index + 2,
      className: stringValue_(classValues[index][0]),
      studentId: stringValue_(idValues[index][0]),
    });
  }

  const currentIndex = students.findIndex(student => student.rowNumber === rowNumber);
  if (currentIndex === -1) return false;
  const previousStudent = students[currentIndex - 1];
  const nextStudent = students[currentIndex + 1];
  const isAlreadyInClassBlock = (previousStudent && previousStudent.className === className)
    || (nextStudent && nextStudent.className === className);
  if (!moveToClassEnd && isAlreadyInClassBlock) return false;

  const targetRows = students
    .filter(student => (
      student.rowNumber !== rowNumber
      && student.className === className
      && (!excludedStudentIds || !excludedStudentIds.has(student.studentId))
    ))
    .map(student => student.rowNumber);
  if (!targetRows.length) return false;

  const targetLastRow = Math.max(...targetRows);
  if (targetLastRow + 1 === rowNumber) return false;
  sheet.moveRows(
    sheet.getRange(rowNumber, 1, 1, 1),
    targetLastRow + 1
  );
  return true;
}

function normalizeClassSpacerRows_(sheet) {
  if (!sheet || sheet.getLastRow() < 3) return 0;

  const lastColumn = sheet.getLastColumn();
  const rowCount = sheet.getLastRow() - 1;
  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0].map(stringValue_);
  const classColumnIndex = headers.indexOf('반 이름');
  const nameColumnIndex = headers.indexOf('학생 이름');
  if (classColumnIndex === -1 || nameColumnIndex === -1) return 0;

  const range = sheet.getRange(2, 1, rowCount, lastColumn);
  const values = range.getValues();
  const formulas = range.getFormulas();
  const notes = range.getNotes();
  const students = [];

  values.forEach((row, index) => {
    if (!stringValue_(row[nameColumnIndex])) return;
    students.push({
      rowNumber: index + 2,
      className: stringValue_(row[classColumnIndex]),
    });
  });

  const operations = [];
  for (let index = 0; index < students.length - 1; index += 1) {
    const current = students[index];
    const next = students[index + 1];
    const gapCount = next.rowNumber - current.rowNumber - 1;
    const desiredGapCount = current.className !== next.className ? 1 : 0;
    if (gapCount === desiredGapCount) continue;

    let gapContainsData = false;
    for (let rowNumber = current.rowNumber + 1; rowNumber < next.rowNumber; rowNumber += 1) {
      const dataIndex = rowNumber - 2;
      const hasPersistentContent = values[dataIndex].some((value, columnIndex) => (
        stringValue_(value)
        || stringValue_(formulas[dataIndex][columnIndex])
        || stringValue_(notes[dataIndex][columnIndex])
      ));
      if (hasPersistentContent) {
        gapContainsData = true;
        break;
      }
    }
    if (gapContainsData) continue;

    operations.push({
      rowNumber: current.rowNumber,
      difference: desiredGapCount - gapCount,
    });
  }

  operations.sort((left, right) => right.rowNumber - left.rowNumber).forEach(operation => {
    if (operation.difference > 0) {
      sheet.insertRowsAfter(operation.rowNumber, operation.difference);
    } else if (operation.difference < 0) {
      sheet.deleteRows(operation.rowNumber + 1, -operation.difference);
    }
  });
  return operations.length;
}

function resetPastedRosterStatuses_(sheet, editedRange) {
  if (!sheet || !editedRange || sheet.getLastColumn() < 1) return 0;
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const nameColumnIndex = headers.indexOf('학생 이름') + 1;
  const statusColumnIndex = headers.indexOf(ENROLLMENT_STATUS_HEADER) + 1;
  if (!nameColumnIndex || !statusColumnIndex) return 0;

  const startRow = Math.max(editedRange.getRow(), 2);
  const endRow = editedRange.getLastRow();
  if (endRow < startRow) return 0;
  const rowCount = endRow - startRow + 1;
  const names = sheet.getRange(startRow, nameColumnIndex, rowCount, 1).getValues();
  const statuses = names.map(row => [stringValue_(row[0]) ? '재원' : '']);
  sheet.getRange(startRow, statusColumnIndex, rowCount, 1).setValues(statuses);
  return statuses.filter(row => row[0]).length;
}

function applyStudentControlColumns_(sheet) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const applied = [];
  if (applyDropdownToColumn_(sheet, headers, ENROLLMENT_STATUS_HEADER, ENROLLMENT_STATUS_OPTIONS)) {
    applied.push(ENROLLMENT_STATUS_HEADER);
  }

  return applied;
}

function fillBlankEnrollmentStatuses_(sheet) {
  if (!sheet || sheet.getLastRow() < 2) return 0;
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const nameColumnIndex = headers.indexOf('학생 이름') + 1;
  const statusColumnIndex = headers.indexOf(ENROLLMENT_STATUS_HEADER) + 1;
  if (!nameColumnIndex || !statusColumnIndex) return 0;

  const rowCount = sheet.getLastRow() - 1;
  const names = sheet.getRange(2, nameColumnIndex, rowCount, 1).getValues();
  const statusRange = sheet.getRange(2, statusColumnIndex, rowCount, 1);
  const statuses = statusRange.getValues();
  let changedCount = 0;
  statuses.forEach((row, index) => {
    if (!stringValue_(names[index][0]) || stringValue_(row[0])) return;
    row[0] = '재원';
    changedCount += 1;
  });
  if (changedCount) statusRange.setValues(statuses);
  return changedCount;
}

function applyRatingDropdowns_(sheet) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);

  const applied = [];
  RATING_COLUMNS.forEach(header => {
    if (applyDropdownToColumn_(sheet, headers, header, RATING_OPTIONS)) {
      applied.push(header);
    }
  });
  return applied;
}

function ensureClassSettings_(ss, scoreSheet) {
  let sheet = ss.getSheetByName(CONFIG.classConfigSheet);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.classConfigSheet);
    sheet.getRange(1, 1, 1, DEFAULT_CLASS_HEADERS.length).setValues([DEFAULT_CLASS_HEADERS]);
  }

  const existingRows = readAndNormalizeClassSettingsRows_(sheet);
  const existingMap = {};
  existingRows.forEach(row => existingMap[normalizeClassNameForSort_(row[1])] = true);
  const scoreHeaders = scoreSheet && scoreSheet.getLastColumn()
    ? scoreSheet.getRange(1, 1, 1, scoreSheet.getLastColumn()).getValues()[0].map(stringValue_)
    : [];
  const classNames = scoreSheet
    ? collectUniqueColumnValues_(scoreSheet, scoreHeaders, '반 이름')
    : [];
  const rowsToAdd = classNames
    .filter(className => !existingMap[normalizeClassNameForSort_(className)])
    .map(className => [true, className, '', '', '']);

  const outputRows = existingRows.concat(rowsToAdd).sort((left, right) => (
    compareClassNamesForSort_(left[1], right[1])
  ));
  writeClassSettingsRows_(sheet, outputRows);

  return rowsToAdd.map(row => row[1]);
}

function readAndNormalizeClassSettingsRows_(sheet) {
  if (!sheet || sheet.getLastColumn() < 1 || sheet.getLastRow() < 2) return [];
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();
  const useIndex = Math.max(headers.indexOf('사용여부'), 0);
  const classIndex = headers.indexOf('반 이름') === -1 ? 1 : headers.indexOf('반 이름');
  const defaultIndexes = DEFAULT_CLASS_HEADERS.slice(2).map(header => headers.indexOf(header));
  const byClass = {};

  values.forEach(row => {
    const firstValue = stringValue_(row[0]);
    const configuredName = classIndex < row.length ? stringValue_(row[classIndex]) : '';
    const className = configuredName || (
      firstValue && !['true', 'false', 'y', 'n', 'yes', 'no', '1', '0'].includes(firstValue.toLowerCase())
        ? firstValue
        : ''
    );
    if (!className) return;

    const key = normalizeClassNameForSort_(className);
    if (!key) return;
    const useValue = row[useIndex];
    const active = typeof useValue === 'boolean'
      ? useValue
      : (firstValue === className || isActiveConfigRow_(useValue));
    const defaults = defaultIndexes.map(index => (
      index === -1 ? '' : sanitizeClassDefaultValue_(row[index], className)
    ));

    if (!byClass[key]) {
      byClass[key] = [active, className, ...defaults];
      return;
    }

    byClass[key][0] = byClass[key][0] || active;
    defaults.forEach((value, index) => {
      if (!stringValue_(byClass[key][index + 2]) && stringValue_(value)) {
        byClass[key][index + 2] = value;
      }
    });
  });

  return Object.keys(byClass).map(key => byClass[key]);
}

function sanitizeClassDefaultValue_(value, className) {
  const text = stringValue_(value);
  if (!text) return '';

  const normalized = normalizeClassNameForSort_(text);
  const classKey = normalizeClassNameForSort_(className);
  if (normalized === classKey || normalized === 'default') return '';
  if (normalized === 'readingwritinglisteninggrammar') return '';
  return value;
}

function writeClassSettingsRows_(sheet, rows) {
  const grammarColumnIndex = sheet.getLastColumn() > 0
    ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_).indexOf('Grammar 평균그룹') + 1
    : 0;
  if (grammarColumnIndex) sheet.deleteColumn(grammarColumnIndex);

  ensureRowExists_(sheet, Math.max(rows.length + 1, 2));
  const clearRowCount = Math.max(sheet.getLastRow() - 1, rows.length, 1);
  sheet.getRange(1, 1, 1, DEFAULT_CLASS_HEADERS.length).setValues([DEFAULT_CLASS_HEADERS]);
  sheet.getRange(2, 1, clearRowCount, DEFAULT_CLASS_HEADERS.length).clearContent().clearDataValidations();
  sheet.getRange(2, 1, sheet.getMaxRows() - 1, 1).insertCheckboxes();
  if (rows.length) {
    sheet.getRange(2, 1, rows.length, DEFAULT_CLASS_HEADERS.length).setValues(rows);
  }
  formatClassSettingsSheet_(sheet, rows.length);
}

function formatClassSettingsSheet_(sheet, dataRowCount) {
  const formatRowCount = Math.max(dataRowCount || 0, 20);
  ensureRowExists_(sheet, formatRowCount + 1);
  sheet.getBandings().forEach(banding => banding.remove());

  sheet.getRange(1, 1, 1, DEFAULT_CLASS_HEADERS.length)
    .setBackground('#1F4E78')
    .setFontColor('#FFFFFF')
    .setFontFamily('Arial')
    .setFontSize(11)
    .setFontWeight('bold')
    .setHorizontalAlignment('center')
    .setVerticalAlignment('middle')
    .setWrap(true);
  sheet.setRowHeight(1, 38);

  const bodyRange = sheet.getRange(2, 1, formatRowCount, DEFAULT_CLASS_HEADERS.length);
  const backgrounds = Array.from({ length: formatRowCount }, (_, index) => (
    Array(DEFAULT_CLASS_HEADERS.length).fill(index % 2 === 0 ? '#FFFFFF' : '#F7FAFC')
  ));
  bodyRange
    .setBackgrounds(backgrounds)
    .setFontColor('#202124')
    .setFontFamily('Arial')
    .setFontSize(10)
    .setVerticalAlignment('middle')
    .setWrap(true)
    .setBorder(true, true, true, true, true, true, '#D9E2F3', SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(2, 1, formatRowCount, 1).setHorizontalAlignment('center');
  sheet.getRange(2, 2, formatRowCount, 1).setFontWeight('bold').setHorizontalAlignment('left');
  sheet.getRange(2, 3, formatRowCount, 3).setHorizontalAlignment('left');
  sheet.setRowHeights(2, formatRowCount, 36);
  sheet.setColumnWidth(1, 90);
  sheet.setColumnWidth(2, 150);
  sheet.setColumnWidth(3, 220);
  sheet.setColumnWidth(4, 240);
  sheet.setColumnWidth(5, 240);
  sheet.setFrozenRows(1);
}

function formatClassSettings() {
  const ss = SpreadsheetApp.getActive();
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
  ensureClassSettings_(ss, scoreSheet);
  const sheet = ss.getSheetByName(CONFIG.classConfigSheet);
  if (scoreSheet) applyClassDropdowns_(ss, scoreSheet);
  ss.setActiveSheet(sheet);
  SpreadsheetApp.getUi().alert('반별설정의 중복·열 배치·서식을 정리했습니다.');
  return sheet;
}

function addClassSetting() {
  const ss = SpreadsheetApp.getActive();
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
  ensureClassSettings_(ss, scoreSheet);
  const sheet = ss.getSheetByName(CONFIG.classConfigSheet);
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt('새 반 추가', '반 이름을 입력하세요. 예: Starter3', ui.ButtonSet.OK_CANCEL);
  if (response.getSelectedButton() !== ui.Button.OK) return;

  const className = stringValue_(response.getResponseText());
  if (!className) {
    ui.alert('반 이름이 비어 있습니다.');
    return;
  }

  const rows = readAndNormalizeClassSettingsRows_(sheet);
  const key = normalizeClassNameForSort_(className);
  const existingRow = rows.find(row => normalizeClassNameForSort_(row[1]) === key);
  if (existingRow && existingRow[0]) {
    ui.alert(`'${className}' 반이 이미 있습니다.`);
    return;
  }

  if (existingRow) existingRow[0] = true;
  else rows.push([true, className, '', '', '']);
  rows.sort((left, right) => compareClassNamesForSort_(left[1], right[1]));
  writeClassSettingsRows_(sheet, rows);
  if (scoreSheet) applyClassDropdowns_(ss, scoreSheet);
  ss.setActiveSheet(sheet);
  const rowNumber = rows.findIndex(row => normalizeClassNameForSort_(row[1]) === key) + 2;
  sheet.setActiveRange(sheet.getRange(rowNumber, 2));
  ui.alert(`'${className}' 반을 추가했습니다. 필요한 교재 기본값을 입력하세요.`);
}

function renameClassSetting() {
  const ss = SpreadsheetApp.getActive();
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
  ensureClassSettings_(ss, scoreSheet);
  const classSheet = ss.getSheetByName(CONFIG.classConfigSheet);
  const ui = SpreadsheetApp.getUi();

  const currentResponse = ui.prompt('반 이름 수정', '현재 반 이름을 입력하세요.', ui.ButtonSet.OK_CANCEL);
  if (currentResponse.getSelectedButton() !== ui.Button.OK) return;
  const currentName = stringValue_(currentResponse.getResponseText());

  const nextResponse = ui.prompt('반 이름 수정', '새 반 이름을 입력하세요.', ui.ButtonSet.OK_CANCEL);
  if (nextResponse.getSelectedButton() !== ui.Button.OK) return;
  const nextName = stringValue_(nextResponse.getResponseText());
  if (!currentName || !nextName) {
    ui.alert('현재 반 이름과 새 반 이름을 모두 입력하세요.');
    return;
  }

  const rows = readAndNormalizeClassSettingsRows_(classSheet);
  const currentKey = normalizeClassNameForSort_(currentName);
  const nextKey = normalizeClassNameForSort_(nextName);
  const target = rows.find(row => normalizeClassNameForSort_(row[1]) === currentKey);
  if (!target) {
    ui.alert(`'${currentName}' 반을 찾지 못했습니다.`);
    return;
  }
  if (currentKey !== nextKey && rows.some(row => normalizeClassNameForSort_(row[1]) === nextKey)) {
    ui.alert(`'${nextName}' 반이 이미 있습니다.`);
    return;
  }

  target[1] = nextName;
  rows.sort((left, right) => compareClassNamesForSort_(left[1], right[1]));
  writeClassSettingsRows_(classSheet, rows);
  const updatedCount = replaceScoreClassName_(scoreSheet, currentKey, nextName);
  if (scoreSheet) applyClassDropdowns_(ss, scoreSheet);
  ui.alert(`'${currentName}' → '${nextName}' 수정 완료\n학생 행 반영: ${updatedCount}명`);
}

function deleteClassSetting() {
  const ss = SpreadsheetApp.getActive();
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
  ensureClassSettings_(ss, scoreSheet);
  const classSheet = ss.getSheetByName(CONFIG.classConfigSheet);
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt('반 삭제', '삭제할 반 이름을 입력하세요.', ui.ButtonSet.OK_CANCEL);
  if (response.getSelectedButton() !== ui.Button.OK) return;

  const className = stringValue_(response.getResponseText());
  const classKey = normalizeClassNameForSort_(className);
  const rows = readAndNormalizeClassSettingsRows_(classSheet);
  const targetIndex = rows.findIndex(row => normalizeClassNameForSort_(row[1]) === classKey);
  if (targetIndex === -1) {
    ui.alert(`'${className}' 반을 찾지 못했습니다.`);
    return;
  }

  const classStudents = scoreSheet
    ? readObjects_(scoreSheet, CONFIG.scoreSheet).filter(row => (
      normalizeClassNameForSort_(row['반 이름']) === classKey
      && stringValue_(row['학생 이름'])
    ))
    : [];
  if (classStudents.length) {
    ui.alert([
      `'${className}' 반에 학생 ${classStudents.length}명이 있어 삭제할 수 없습니다.`,
      '먼저 성적입력에서 해당 학생을 다른 반으로 옮기거나 완전히 삭제하세요.',
    ].join('\n'));
    return;
  }

  const confirmation = ui.alert(
    '반 완전 삭제 확인',
    `'${className}' 반을 반별설정에서 완전히 삭제할까요?`,
    ui.ButtonSet.OK_CANCEL
  );
  if (confirmation !== ui.Button.OK) return;

  rows.splice(targetIndex, 1);
  writeClassSettingsRows_(classSheet, rows);
  if (scoreSheet) applyClassDropdowns_(ss, scoreSheet);
  ui.alert(`'${className}' 반을 반별설정과 드롭다운에서 완전히 삭제했습니다.`);
}

function replaceScoreClassName_(scoreSheet, currentKey, nextName) {
  if (!scoreSheet || scoreSheet.getLastRow() < 2) return 0;
  const headers = scoreSheet.getRange(1, 1, 1, scoreSheet.getLastColumn()).getValues()[0].map(stringValue_);
  const classColumnIndex = headers.indexOf('반 이름') + 1;
  if (!classColumnIndex) return 0;

  const rowCount = scoreSheet.getLastRow() - 1;
  const range = scoreSheet.getRange(2, classColumnIndex, rowCount, 1);
  const values = range.getValues();
  let updatedCount = 0;
  values.forEach(row => {
    if (normalizeClassNameForSort_(row[0]) !== currentKey) return;
    row[0] = nextName;
    updatedCount += 1;
  });
  if (updatedCount) range.setValues(values);
  return updatedCount;
}

function applyClassDropdowns_(ss, sheet) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const classSheet = ss.getSheetByName(CONFIG.classConfigSheet);
  const classConfig = readClassConfig_(classSheet);
  const classNames = classConfig.classNames;
  const classSourceRange = classSheet && classNames.length
    ? writeClassConfigHelperList_(classSheet, ACTIVE_CLASS_LIST_HEADER, classNames)
    : null;

  const applied = [];
  if (classNames.length
    && applyDropdownToColumn_(sheet, headers, '반 이름', classNames, classSourceRange)) {
    applied.push('반 이름');
  }

  const grammarGroups = buildGrammarGroupOptions_(sheet);
  const grammarSourceRange = classSheet && grammarGroups.length
    ? writeClassConfigHelperList_(classSheet, GRAMMAR_GROUP_LIST_HEADER, grammarGroups)
    : null;
  if (grammarGroups.length
    && applyDropdownToColumn_(sheet, headers, 'Grammar 평균그룹', grammarGroups, grammarSourceRange)) {
    applied.push('Grammar 평균그룹');
  }

  return applied;
}

function readClassConfig_(sheet) {
  const config = {
    classNames: [],
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

  config.classNames.sort(compareClassNamesForSort_);
  return config;
}

function isActiveConfigRow_(value) {
  if (value === false) return false;
  const text = stringValue_(value).toLowerCase();
  return !['false', 'n', 'no', '0', '미사용', '중지', 'x'].includes(text);
}

function applyDropdownToColumn_(sheet, headers, header, options, sourceRange) {
  const columnIndex = headers.indexOf(header) + 1;
  if (!columnIndex || !options.length) return false;

  ensureRowExists_(sheet, 2);
  const rowCount = sheet.getMaxRows() - 1;
  const range = sheet.getRange(2, columnIndex, rowCount, 1);
  const validations = range.getDataValidations();
  const templateIndex = validations.findIndex(row => row[0]);
  const missingGroups = findMissingValidationGroups_(validations);
  if (!missingGroups.length) return true;

  if (templateIndex !== -1) {
    const templateCell = sheet.getRange(templateIndex + 2, columnIndex);
    missingGroups.forEach(group => {
      templateCell.copyTo(
        sheet.getRange(group.startRow, columnIndex, group.rowCount, 1),
        SpreadsheetApp.CopyPasteType.PASTE_DATA_VALIDATION,
        false
      );
    });
    return true;
  }

  const builder = SpreadsheetApp.newDataValidation();
  const rule = (sourceRange
    ? builder.requireValueInRange(sourceRange, true)
    : builder.requireValueInList(options, true))
    .setAllowInvalid(false)
    .build();
  missingGroups.forEach(group => {
    sheet.getRange(group.startRow, columnIndex, group.rowCount, 1).setDataValidation(rule);
  });
  return true;
}

function findMissingValidationGroups_(validations) {
  const groups = [];
  let startIndex = -1;

  validations.forEach((row, index) => {
    const isMissing = !row[0];
    if (isMissing && startIndex === -1) startIndex = index;
    if (!isMissing && startIndex !== -1) {
      groups.push({ startRow: startIndex + 2, rowCount: index - startIndex });
      startIndex = -1;
    }
  });

  if (startIndex !== -1) {
    groups.push({ startRow: startIndex + 2, rowCount: validations.length - startIndex });
  }
  return groups;
}

function ensureStudentIdColumns_(ss) {
  const result = {
    assignedCount: 0,
    addedSheets: [],
  };
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
  if (!scoreSheet) return result;

  const wasAdded = !hasHeader_(scoreSheet, STUDENT_ID_HEADER);
  ensureHeaderColumn_(scoreSheet, STUDENT_ID_HEADER);
  hideHeaderColumn_(scoreSheet, STUDENT_ID_HEADER);
  if (wasAdded) result.addedSheets.push(scoreSheet.getName());
  result.assignedCount += assignMissingStudentIds_(scoreSheet);

  return result;
}

function ensureRosterColumns_(sheet) {
  if (!sheet) return [];

  const requiredHeaders = [...STUDENT_ROSTER_VISIBLE_HEADERS, STUDENT_ID_HEADER];
  const added = [];
  requiredHeaders.forEach(header => {
    if (hasHeader_(sheet, header)) return;
    ensureHeaderColumn_(sheet, header);
    added.push(header);
  });
  reorderInputColumns_(sheet, requiredHeaders);
  hideHeaderColumn_(sheet, STUDENT_ID_HEADER);
  return added;
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

  if (assignedCount) {
    sheet.getRange(2, idColumnIndex, ids.length, 1).setValues(ids);
  }

  return assignedCount;
}

function makeNewStudentId_() {
  return `WP-${Utilities.getUuid()}`;
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

function formatStudentRosterSheet_(sheet) {
  if (!sheet) return;
  ensureRosterColumns_(sheet);

  const visibleColumnCount = STUDENT_ROSTER_VISIBLE_HEADERS.length;
  const bodyRowCount = Math.max(sheet.getLastRow() - 1, 20);
  ensureRowExists_(sheet, bodyRowCount + 1);
  sheet.getBandings().forEach(banding => banding.remove());

  sheet.getRange(1, 1, 1, visibleColumnCount)
    .setBackground('#1F4E78')
    .setFontColor('#FFFFFF')
    .setFontFamily('Arial')
    .setFontSize(11)
    .setFontWeight('bold')
    .setHorizontalAlignment('center')
    .setVerticalAlignment('middle')
    .setWrap(true);
  sheet.setRowHeight(1, 38);

  const bodyRange = sheet.getRange(2, 1, bodyRowCount, visibleColumnCount);
  const backgrounds = Array.from({ length: bodyRowCount }, (_, index) => (
    Array(visibleColumnCount).fill(index % 2 === 0 ? '#FFFFFF' : '#F7FAFC')
  ));
  bodyRange
    .setBackgrounds(backgrounds)
    .setFontColor('#202124')
    .setFontFamily('Arial')
    .setFontSize(10)
    .setVerticalAlignment('middle')
    .setBorder(true, true, true, true, true, true, '#D9E2F3', SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(2, 1, bodyRowCount, 5).setHorizontalAlignment('center');
  sheet.setRowHeights(2, bodyRowCount, 30);
  sheet.setColumnWidth(1, 85);
  sheet.setColumnWidth(2, 115);
  sheet.setColumnWidth(3, 145);
  sheet.setColumnWidth(4, 105);
  sheet.setColumnWidth(5, 80);
  sheet.setFrozenRows(1);
  hideHeaderColumn_(sheet, STUDENT_ID_HEADER);
}

function formatScoreInputSheet_(sheet) {
  if (!sheet || sheet.getLastColumn() < 1) return;

  const lastColumn = sheet.getLastColumn();
  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0].map(stringValue_);
  const bodyRowCount = Math.max(sheet.getLastRow() - 1, 20);
  ensureRowExists_(sheet, bodyRowCount + 1);

  sheet.getRange(1, 1, 1, lastColumn)
    .setBackground('#1F4E78')
    .setFontColor('#FFFFFF')
    .setFontFamily('Arial')
    .setFontSize(10)
    .setFontWeight('bold')
    .setHorizontalAlignment('center')
    .setVerticalAlignment('middle')
    .setWrap(true);
  sheet.setRowHeight(1, 42);
  sheet.getRange(2, 1, bodyRowCount, lastColumn)
    .setFontFamily('Arial')
    .setFontSize(10)
    .setVerticalAlignment('middle');
  sheet.setRowHeights(2, bodyRowCount, 30);

  const widths = {
    '요일': 80,
    '시간': 105,
    '반 이름': 140,
    '학생 이름': 105,
    [ENROLLMENT_STATUS_HEADER]: 80,
    'Vocabulary': 115,
    'Homework': 115,
    'Participation': 115,
    'Vocabulary 교재명': 180,
    'Writing/Grammar 교재명': 190,
    'Reading/Listening 교재명': 190,
    'Grammar 평균그룹': 115,
    'Grade': 80,
    'Writing Comment': 260,
    'Grammar Comment': 260,
    'Reading Comment': 260,
    'Listening Comment': 260,
  };
  DESIRED_SCORE_INPUT_HEADERS.forEach(header => widths[header] = 115);
  headers.forEach((header, index) => sheet.setColumnWidth(index + 1, widths[header] || 130));

  const centeredHeaders = [
    ...STUDENT_ROSTER_VISIBLE_HEADERS,
    ...DESIRED_SCORE_INPUT_HEADERS,
    ...RATING_COLUMNS,
    'Grammar 평균그룹',
    'Grade',
  ];
  centeredHeaders.forEach(header => {
    const columnIndex = headers.indexOf(header) + 1;
    if (columnIndex) sheet.getRange(2, columnIndex, bodyRowCount, 1).setHorizontalAlignment('center');
  });
  SUBJECTS.forEach(subject => {
    const columnIndex = headers.indexOf(subject.commentColumn) + 1;
    if (columnIndex) sheet.getRange(2, columnIndex, bodyRowCount, 1).setWrap(true);
  });
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(SCORE_INPUT_FROZEN_COLUMN_COUNT);
  hideHeaderColumn_(sheet, STUDENT_ID_HEADER);
}

function openRosterImportDialog() {
  const html = HtmlService.createHtmlOutput(`
    <!doctype html>
    <html>
      <head>
        <base target="_top">
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 20px; color: #202124; }
          h2 { margin: 0 0 8px; font-size: 18px; }
          p { margin: 0 0 14px; color: #5f6368; font-size: 13px; line-height: 1.5; }
          textarea { box-sizing: border-box; width: 100%; height: 280px; padding: 10px; border: 1px solid #c7cdd4; border-radius: 4px; font: 13px Arial, sans-serif; resize: vertical; }
          .actions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 14px; }
          button { border: 0; border-radius: 4px; padding: 9px 14px; font-weight: 700; cursor: pointer; }
          .cancel { background: #eef1f4; color: #3c4043; }
          .primary { background: #1f4e78; color: #fff; }
          button:disabled { opacity: .55; cursor: default; }
          #status { min-height: 20px; margin-top: 10px; font-size: 13px; white-space: pre-wrap; }
        </style>
      </head>
      <body>
        <h2>명단 안전 반영</h2>
        <p>스프레드시트에서 요일·시간·반 이름·학생 이름 4개 열을 복사해 붙여넣으세요. 기존 점수와 코멘트는 변경하지 않습니다.</p>
        <textarea id="roster" placeholder="월·수    2:00-3:30    Starter3    김라온"></textarea>
        <div id="status"></div>
        <div class="actions">
          <button class="cancel" onclick="google.script.host.close()">취소</button>
          <button id="submit" class="primary" onclick="runImport()">안전 반영</button>
        </div>
        <script>
          function runImport() {
            var text = document.getElementById('roster').value;
            var button = document.getElementById('submit');
            var status = document.getElementById('status');
            if (!text.trim()) { status.textContent = '명단을 붙여넣으세요.'; return; }
            button.disabled = true;
            status.textContent = '반영 중...';
            google.script.run
              .withSuccessHandler(function(result) {
                status.textContent = result.message;
                button.disabled = false;
              })
              .withFailureHandler(function(error) {
                status.textContent = '실패: ' + error.message;
                button.disabled = false;
              })
              .importRosterTextToScoreInput(text);
          }
        </script>
      </body>
    </html>
  `).setWidth(620).setHeight(470);
  SpreadsheetApp.getUi().showModalDialog(html, '명단 안전 반영');
}

function importRosterTextToScoreInput(text) {
  const lock = LockService.getDocumentLock() || LockService.getScriptLock();
  if (!lock.tryLock(30000)) throw new Error('다른 명단 반영 작업이 진행 중입니다. 잠시 후 다시 실행하세요.');

  try {
    return importRosterTextToScoreInputUnlocked_(text);
  } finally {
    lock.releaseLock();
  }
}

function importRosterTextToScoreInputUnlocked_(text) {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName(CONFIG.scoreSheet);
  if (!sheet) throw new Error(`'${CONFIG.scoreSheet}' 탭을 찾지 못했습니다.`);

  const importedRows = parseRosterImportText_(text);
  if (!importedRows.length) throw new Error('읽을 수 있는 학생 명단이 없습니다. 4개 열을 복사해 붙여넣으세요.');

  ensureReportColumnsSilently_(ss);
  assignMissingStudentIds_(sheet);
  fillBlankEnrollmentStatuses_(sheet);

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const scoreRows = readObjects_(sheet, CONFIG.scoreSheet)
    .filter(row => stringValue_(row['학생 이름']));
  const existingByName = {};
  scoreRows.forEach(row => {
    const name = stringValue_(row['학생 이름']);
    if (!existingByName[name]) existingByName[name] = [];
    existingByName[name].push(row);
  });

  const importNameCounts = {};
  importedRows.forEach(row => {
    const name = stringValue_(row['학생 이름']);
    importNameCounts[name] = (importNameCounts[name] || 0) + 1;
  });

  const matchedRows = [];
  const newRows = [];
  const conflicts = [];
  const importedNames = {};
  importedRows.forEach(row => {
    const name = stringValue_(row['학생 이름']);
    importedNames[name] = true;
    if (importNameCounts[name] > 1) {
      if (!conflicts.includes(`${name}: 붙여넣은 명단에 중복`)) conflicts.push(`${name}: 붙여넣은 명단에 중복`);
      return;
    }

    const candidates = existingByName[name] || [];
    if (candidates.length > 1) {
      conflicts.push(`${name}: 성적입력에 동명 학생 ${candidates.length}명`);
      return;
    }

    if (candidates.length === 1) {
      const existing = candidates[0];
      row[STUDENT_ID_HEADER] = stringValue_(existing[STUDENT_ID_HEADER]) || makeNewStudentId_();
      matchedRows.push({
        rowNumber: existing.__sheetRow,
        rosterRow: row,
        previousStatus: existing[ENROLLMENT_STATUS_HEADER],
      });
      return;
    }

    row[STUDENT_ID_HEADER] = makeNewStudentId_();
    newRows.push(row);
  });

  const addedClasses = ensureRosterClassesInClassSettings_(ss, importedRows);
  updateScoreStudentInfoRows_(sheet, headers, matchedRows);
  appendScoreRowsFromRoster_(ss, sheet, headers, newRows);
  applyStudentControlColumns_(sheet);
  applyRatingDropdowns_(sheet);
  applyClassDropdowns_(ss, sheet);
  const notInImportCount = scoreRows.filter(row => !importedNames[stringValue_(row['학생 이름'])]).length;

  return {
    message: [
      '명단 안전 반영 완료',
      `기존 학생 정보 갱신: ${matchedRows.length}명`,
      `신규 학생 추가: ${newRows.length}명`,
      `명단에 없지만 보존한 기존 행: ${notInImportCount}명`,
      addedClasses.length ? `신규 반 추가: ${addedClasses.join(', ')}` : '',
      '점수·평가·Grade·교재·코멘트는 수정하지 않았습니다.',
      conflicts.length ? `확인 필요:\n${conflicts.join('\n')}` : '',
    ].filter(Boolean).join('\n'),
  };
}

function parseRosterImportText_(text) {
  const rows = [];
  stringValue_(text).split(/\r?\n/).forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) return;
    let cells;
    if (trimmed.includes('\t')) {
      cells = trimmed.split('\t');
    } else if (trimmed.includes('|')) {
      cells = trimmed.split('|');
      if (!stringValue_(cells[0])) cells.shift();
      if (!stringValue_(cells[cells.length - 1])) cells.pop();
    } else {
      return;
    }
    cells = cells.slice(0, 4).map(stringValue_);
    if (cells.length < 4) return;
    if (cells.every(value => /^:?-{3,}:?$/.test(value))) return;
    if (cells[3] === '학생 이름' || cells[3] === '이름') return;
    if (!cells[3]) return;
    rows.push({
      '요일': cells[0],
      '시간': cells[1],
      '반 이름': cells[2],
      '학생 이름': cells[3],
      [ENROLLMENT_STATUS_HEADER]: '재원',
    });
  });
  return rows;
}

function addScoreInputRows() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName(CONFIG.scoreSheet);
  const ui = SpreadsheetApp.getUi();
  if (!sheet) {
    ui.alert(`'${CONFIG.scoreSheet}' 탭을 찾지 못했습니다.`);
    return;
  }

  const response = ui.prompt('성적입력 행 추가', '추가할 학생 수를 입력하세요. (1~100)', ui.ButtonSet.OK_CANCEL);
  if (response.getSelectedButton() !== ui.Button.OK) return;
  const count = Number(response.getResponseText());
  if (!Number.isInteger(count) || count < 1 || count > 100) {
    ui.alert('1~100 사이의 정수를 입력하세요.');
    return;
  }

  ensureReportColumnsSilently_(ss);
  const startRow = Math.max(sheet.getLastRow() + 1, 2);
  ensureRowExists_(sheet, startRow + count - 1);
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const statusColumnIndex = headers.indexOf(ENROLLMENT_STATUS_HEADER) + 1;
  const idColumnIndex = headers.indexOf(STUDENT_ID_HEADER) + 1;
  sheet.getRange(startRow, statusColumnIndex, count, 1)
    .setValues(Array.from({ length: count }, () => ['재원']));
  sheet.getRange(startRow, idColumnIndex, count, 1)
    .setValues(Array.from({ length: count }, () => [makeNewStudentId_()]));

  ensureClassSettings_(ss, sheet);
  applyStudentControlColumns_(sheet);
  applyRatingDropdowns_(sheet);
  applyClassDropdowns_(ss, sheet);
  formatScoreInputSheet_(sheet);
  ss.setActiveSheet(sheet);
  sheet.setActiveRange(sheet.getRange(startRow, 1, count, STUDENT_ROSTER_VISIBLE_HEADERS.length));
}

function deactivateSelectedStudents() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getActiveSheet();
  const ui = SpreadsheetApp.getUi();
  if (!sheet || sheet.getName() !== CONFIG.scoreSheet) {
    ui.alert(`'${CONFIG.scoreSheet}' 탭에서 삭제할 학생 행을 선택한 뒤 실행하세요.`);
    return;
  }

  ensureReportColumnsSilently_(ss);
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const nameColumnIndex = headers.indexOf('학생 이름') + 1;
  const selection = sheet.getActiveRangeList();
  const rowNumbers = new Set();
  (selection ? selection.getRanges() : [sheet.getActiveRange()]).forEach(range => {
    if (!range) return;
    for (let row = Math.max(2, range.getRow()); row <= range.getLastRow(); row += 1) {
      if (stringValue_(sheet.getRange(row, nameColumnIndex).getValue())) rowNumbers.add(row);
    }
  });
  if (!rowNumbers.size) {
    ui.alert('학생 이름이 있는 행을 선택하세요.');
    return;
  }

  const response = ui.alert(
    '학생 완전 삭제 확인',
    `선택한 ${rowNumbers.size}명의 행을 완전히 삭제합니다.\n점수와 코멘트도 함께 삭제되며 복구할 수 없습니다. 계속할까요?`,
    ui.ButtonSet.OK_CANCEL
  );
  if (response !== ui.Button.OK) return;

  Array.from(rowNumbers).sort((left, right) => right - left)
    .forEach(rowNumber => sheet.deleteRow(rowNumber));
  normalizeClassSpacerRows_(sheet);
  ui.alert(`학생 ${rowNumbers.size}명의 행을 완전히 삭제했습니다.`);
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

// 여러 선택 영역을 지원하며 같은 행은 한 번만 출력합니다.
function generateSelectedRowReports() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getActiveSheet();
  if (sheet.getName() !== CONFIG.scoreSheet) {
    SpreadsheetApp.getUi().alert(`'${CONFIG.scoreSheet}' 탭에서 학생 행을 선택하세요.`);
    return;
  }
  const selection = sheet.getActiveRangeList();
  if (!selection) return;
  const rowNumbers = new Set();
  selection.getRanges().forEach(range => {
    const end = Math.min(range.getLastRow(), sheet.getLastRow());
    for (let row = Math.max(2, range.getRow()); row <= end; row += 1) rowNumbers.add(row);
  });
  const ctx = loadContext_();
  const rows = ctx.scoreRows.filter(row => rowNumbers.has(row.__sheetRow) && stringValue_(row['학생 이름']));
  generateReports_(rows, ctx);
}

function collectReportInputIssues_(rows) {
  const issues = [];
  rows.forEach(row => {
    const name = stringValue_(row['학생 이름']);
    const add = (field, message) => issues.push([row.__sheetRow || '', name, field, message]);
    if (!name) add('학생 이름', '학생 이름이 없습니다.');
    const enrollmentStatus = stringValue_(row[ENROLLMENT_STATUS_HEADER]);
    if (enrollmentStatus && !ENROLLMENT_STATUS_OPTIONS.includes(enrollmentStatus)) {
      add(ENROLLMENT_STATUS_HEADER, '재원 또는 퇴원을 선택하세요.');
    }
    if (!isActiveEnrollment_(row)) add(ENROLLMENT_STATUS_HEADER, '퇴원 학생은 성적표 출력 대상이 아닙니다.');
    if (!stringValue_(row['반 이름'])) add('반 이름', '평균 비교를 위해 반 이름을 입력하세요.');
    if (!stringValue_(row['Grade'])) add('Grade', '성적표에 표시할 학년을 입력하세요.');
    let scoreCount = 0;
    SUBJECTS.forEach(subject => {
      const raw = stringValue_(row[subject.scoreColumn]);
      if (!raw || raw.toLowerCase() === 'x') return;
      if (parseScore_(row[subject.scoreColumn]) === null) {
        add(subject.scoreColumn, `${MIN_SCORE}~${MAX_SCORE} 숫자 또는 X(미응시)를 입력하세요.`);
        return;
      }
      scoreCount += 1;
      if (!stringValue_(row[subject.commentColumn])) {
        add(subject.commentColumn, '응시한 과목의 교사 코멘트를 입력하세요.');
      }
    });
    if (!scoreCount) add('점수', '출력할 과목의 점수가 없습니다.');
    if (parseScore_(row['Grammar 점수']) !== null && !getAverageGroupInfo_(row, SUBJECTS[1]).key) {
      add('Grammar 평균그룹', 'Grammar 평균 비교를 위해 평균그룹을 입력하세요.');
    }
    RATING_COLUMNS.forEach(column => {
      const value = stringValue_(row[column]);
      if (!value) add(column, '성적표에 표시할 평가를 선택하세요.');
      else if (!RATING_OPTIONS.includes(value)) add(column, '평가 드롭다운의 선택지를 사용하세요.');
    });
  });
  return issues;
}

function checkReportInputs() {
  const ctx = loadContext_();
  const rows = ctx.scoreRows.filter(shouldGenerate_);
  const issues = collectReportInputIssues_(rows);
  let sheet = ctx.ss.getSheetByName('출력점검');
  if (!sheet) sheet = ctx.ss.insertSheet('출력점검');
  sheet.clearContents();
  const results = [['성적입력 행', '학생 이름', '확인 항목', '안내'], ...issues];
  sheet.getRange(1, 1, results.length, 4).setValues(results);
  sheet.getRange(1, 1, 1, 4).setBackground('#1F4E78').setFontColor('#FFFFFF').setFontWeight('bold');
  sheet.setFrozenRows(1);
  sheet.setColumnWidths(1, 3, 140);
  sheet.setColumnWidth(4, 440);
  sheet.getDataRange().setWrap(true);
  ctx.ss.setActiveSheet(sheet);
  SpreadsheetApp.getUi().alert(`출력 대상: ${rows.length}명\n확인 항목: ${issues.length}건\n출력점검 탭에서 확인하세요.`);
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
    if (!className || !studentName || !isActiveEnrollment_(row)) return;

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
  const classNames = Object.keys(grouped).sort(compareClassNamesForSort_);
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

function rowArrayToObject_(row, headers) {
  const object = {};
  headers.forEach((header, index) => object[header] = row[index]);
  return object;
}

function applyStudentRosterDropdowns_(ss, sheet) {
  ensureRosterColumns_(sheet);
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const options = buildRosterDropdownOptions_(ss, sheet, headers);
  const applied = [];

  ['요일', '시간'].forEach(header => {
    if (applyDropdownToColumn_(sheet, headers, header, options[header] || [], null)) {
      applied.push(header);
    }
  });

  const classSheet = ss.getSheetByName(CONFIG.classConfigSheet);
  const classNames = options['반 이름'] || [];
  const classSourceRange = classSheet && classNames.length
    ? writeClassConfigHelperList_(classSheet, ACTIVE_CLASS_LIST_HEADER, classNames)
    : null;
  if (applyDropdownToColumn_(sheet, headers, '반 이름', classNames, classSourceRange)) {
    applied.push('반 이름');
  }

  if (applyDropdownToColumn_(sheet, headers, ENROLLMENT_STATUS_HEADER, ENROLLMENT_STATUS_OPTIONS)) {
    applied.push(ENROLLMENT_STATUS_HEADER);
  }

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
    '반 이름': classConfig.classNames,
  };
}

function removeLegacySyncTriggers_() {
  try {
    const triggers = ScriptApp.getProjectTriggers();
    let removedCount = 0;
    triggers.forEach(trigger => {
      const handler = trigger.getHandlerFunction();
      if (!LEGACY_SYNC_TRIGGER_HANDLERS.includes(handler)) return;
      ScriptApp.deleteTrigger(trigger);
      removedCount += 1;
    });
    return removedCount;
  } catch (error) {
    console.warn(`기존 동기화 트리거 제거 실패: ${error.message}`);
    return 0;
  }
}

function ensureAutoSyncTrigger_() {
  removeLegacySyncTriggers_();
  return false;
}

function syncRosterToScoreNow() {
  SpreadsheetApp.getUi().alert([
    '학생명단 동기화는 제거되었습니다.',
    '성적입력 탭에서 학생 정보와 성적을 모두 관리하세요.',
    '전체 명단을 반영할 때는 "명단 붙여넣어 안전 반영"을 사용하세요.',
  ].join('\n'));
}

function handleSpreadsheetChange(e) {
  // 기존에 설치된 onChange 트리거가 남아 있어도 시트 행을 삭제·정렬하지 않는다.
  return null;
}

function hasRosterScoreMembershipDifference_(ss) {
  const rosterSheet = ss && ss.getSheetByName(CONFIG.studentSheet);
  const scoreSheet = ss && ss.getSheetByName(CONFIG.scoreSheet);
  if (!rosterSheet || !scoreSheet) return false;

  const rosterKeys = readObjects_(rosterSheet, CONFIG.studentSheet)
    .filter(row => stringValue_(row['학생 이름']))
    .map(makeStudentKey_)
    .sort();
  const scoreKeys = readObjects_(scoreSheet, CONFIG.scoreSheet)
    .filter(row => stringValue_(row['학생 이름']))
    .map(makeStudentKey_)
    .sort();
  if (rosterKeys.length !== scoreKeys.length) return true;
  return rosterKeys.some((key, index) => key !== scoreKeys[index]);
}

function ensureReportColumnsSilently_(ss) {
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
  if (!scoreSheet) return;

  renameLegacyHeaders_(scoreSheet);
  removeOutputColumn_(scoreSheet);
  ensureStudentIdColumns_(ss);
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
  hideHeaderColumn_(scoreSheet, STUDENT_ID_HEADER);
  fillBlankEnrollmentStatuses_(scoreSheet);
}

function syncStudentRosterToScoreInput_(ss, showAlertOnError, lockWaitMs, syncOptions) {
  if (!AUTOMATIC_ROSTER_SYNC_ENABLED) return null;

  const lock = LockService.getDocumentLock() || LockService.getScriptLock();
  const waitMs = Number.isFinite(lockWaitMs) ? lockWaitMs : 10000;
  if (!lock.tryLock(waitMs)) {
    const message = '다른 동기화가 진행 중입니다. 잠시 후 다시 실행하세요.';
    if (showAlertOnError) SpreadsheetApp.getUi().alert(message);
    else ss.toast(message, '성적입력 동기화', 5);
    return null;
  }

  try {
    return syncStudentRosterToScoreInputSafe_(ss, showAlertOnError, syncOptions || {});
  } finally {
    lock.releaseLock();
  }
}

function syncStudentRosterToScoreInputSafe_(ss, showAlertOnError, syncOptions) {
  const rosterSheet = ss.getSheetByName(CONFIG.studentSheet);
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
  if (!rosterSheet || !scoreSheet) {
    if (showAlertOnError) {
      SpreadsheetApp.getUi().alert(`'${CONFIG.studentSheet}' 또는 '${CONFIG.scoreSheet}' 탭을 찾지 못했습니다.`);
    }
    return null;
  }

  ensureReportColumnsSilently_(ss);
  ensureStudentIdColumns_(ss);
  fillBlankEnrollmentStatuses_(rosterSheet);

  const rosterHeaders = rosterSheet.getRange(1, 1, 1, rosterSheet.getLastColumn()).getValues()[0].map(stringValue_);
  const scoreHeaders = scoreSheet.getRange(1, 1, 1, scoreSheet.getLastColumn()).getValues()[0].map(stringValue_);
  const rosterRows = readObjects_(rosterSheet, CONFIG.studentSheet)
    .filter(row => stringValue_(row['학생 이름']));
  const scoreRows = readObjects_(scoreSheet, CONFIG.scoreSheet)
    .filter(row => stringValue_(row['학생 이름']));
  const addedClasses = ensureRosterClassesInClassSettings_(ss, rosterRows);
  if (addedClasses.length) {
    applyClassDropdowns_(ss, scoreSheet);
    applyStudentRosterDropdowns_(ss, rosterSheet);
  }

  const scoreById = {};
  const scoreByName = {};
  scoreRows.forEach(row => {
    const studentId = stringValue_(row[STUDENT_ID_HEADER]);
    const studentName = stringValue_(row['학생 이름']);
    if (studentId && !scoreById[studentId]) scoreById[studentId] = row;
    if (studentName) {
      if (!scoreByName[studentName]) scoreByName[studentName] = [];
      scoreByName[studentName].push(row);
    }
  });

  const usedScoreRows = {};
  const matchedRows = [];
  const newRosterRows = [];
  const rosterIdChanges = [];
  const conflicts = [];
  const processedRosterIds = {};

  rosterRows.forEach(rosterRow => {
    const studentName = stringValue_(rosterRow['학생 이름']);
    const originalStudentId = stringValue_(rosterRow[STUDENT_ID_HEADER]);
    let studentId = originalStudentId;
    if (studentId && processedRosterIds[studentId]) {
      conflicts.push(`${studentName}: 학생명단의 학생ID가 중복되어 반영하지 않음`);
      return;
    }

    let existing = studentId ? scoreById[studentId] : null;

    const canRenameById = syncOptions.allowNameChangeById
      && syncOptions.editedRosterRow === rosterRow.__sheetRow;
    if (existing && usedScoreRows[existing.__sheetRow]) {
      existing = null;
    }
    if (existing && stringValue_(existing['학생 이름']) !== studentName && !canRenameById) {
      existing = null;
    }

    if (!existing) {
      const nameMatches = (scoreByName[studentName] || [])
        .filter(row => !usedScoreRows[row.__sheetRow]);
      if (nameMatches.length === 1) {
        existing = nameMatches[0];
        studentId = stringValue_(existing[STUDENT_ID_HEADER]) || studentId || makeNewStudentId_();
      } else if (nameMatches.length > 1) {
        conflicts.push(`${studentName}: 동명 학생 ${nameMatches.length}명을 자동으로 구분할 수 없어 반영하지 않음`);
        return;
      }
    }

    if (!existing) {
      const idOwner = studentId ? scoreById[studentId] : null;
      if (!studentId || idOwner) studentId = makeNewStudentId_();
      rosterRow[STUDENT_ID_HEADER] = studentId;
      newRosterRows.push(rosterRow);
    } else {
      usedScoreRows[existing.__sheetRow] = true;
      rosterRow[STUDENT_ID_HEADER] = studentId;
      matchedRows.push({
        rowNumber: existing.__sheetRow,
        rosterRow,
        previousStatus: existing[ENROLLMENT_STATUS_HEADER],
      });
    }
    processedRosterIds[studentId] = true;

    if (stringValue_(rosterRow[STUDENT_ID_HEADER]) !== originalStudentId) {
      rosterIdChanges.push({ rowNumber: rosterRow.__sheetRow, studentId: rosterRow[STUDENT_ID_HEADER] });
    }
  });

  const rosterIdColumnIndex = rosterHeaders.indexOf(STUDENT_ID_HEADER) + 1;
  if (rosterIdColumnIndex && rosterIdChanges.length) {
    const rowCount = rosterSheet.getLastRow() - 1;
    const range = rosterSheet.getRange(2, rosterIdColumnIndex, rowCount, 1);
    const values = range.getValues();
    rosterIdChanges.forEach(change => {
      values[change.rowNumber - 2][0] = change.studentId;
    });
    range.setValues(values);
  }

  updateScoreStudentInfoRows_(scoreSheet, scoreHeaders, matchedRows);
  appendScoreRowsFromRoster_(ss, scoreSheet, scoreHeaders, newRosterRows);
  if (newRosterRows.length) {
    applyStudentControlColumns_(scoreSheet);
    applyRatingDropdowns_(scoreSheet);
    applyClassDropdowns_(ss, scoreSheet);
  }

  const result = {
    rosterCount: rosterRows.length,
    addedCount: newRosterRows.length,
    updatedCount: matchedRows.length,
    preservedCount: scoreRows.length,
    addedClasses,
    conflicts,
  };
  if (showAlertOnError) {
    SpreadsheetApp.getUi().alert(formatSafeSyncResult_(result));
  } else if (conflicts.length) {
    try {
      ss.toast(conflicts.slice(0, 3).join('\n'), '학생명단 확인 필요', 8);
    } catch (error) {
      console.warn(`동기화 안내 표시 실패: ${error.message}`);
    }
  }
  return result;
}

function formatSafeSyncResult_(result) {
  return [
    '학생명단 → 성적입력 안전 반영 완료',
    `명단: ${result.rosterCount}명`,
    `신규 추가: ${result.addedCount}명`,
    `기존 학생 정보 반영: ${result.updatedCount}명`,
    result.addedClasses.length ? `반별설정 신규 반: ${result.addedClasses.join(', ')}` : '',
    '기존 점수·평가·코멘트는 변경하지 않았습니다.',
    result.conflicts.length ? `확인 필요:\n${result.conflicts.slice(0, 10).join('\n')}` : '',
  ].filter(Boolean).join('\n');
}

function ensureRosterClassesInClassSettings_(ss, rosterRows) {
  const classNames = mergeUniqueValues_((rosterRows || []).map(row => row['반 이름']));
  if (!classNames.length) return [];

  let sheet = ss.getSheetByName(CONFIG.classConfigSheet);
  if (!sheet) {
    ensureClassSettings_(ss, ss.getSheetByName(CONFIG.scoreSheet));
    sheet = ss.getSheetByName(CONFIG.classConfigSheet);
  }

  const rows = readAndNormalizeClassSettingsRows_(sheet);
  const existing = {};
  rows.forEach(row => existing[normalizeClassNameForSort_(row[1])] = true);
  const added = classNames.filter(className => !existing[normalizeClassNameForSort_(className)]);
  if (!added.length) return [];

  added.forEach(className => rows.push([true, className, '', '', '']));
  rows.sort((left, right) => compareClassNamesForSort_(left[1], right[1]));
  writeClassSettingsRows_(sheet, rows);
  return added;
}

function syncStudentRosterToScoreInputLegacyDisabled_(ss, showAlertOnError) {
  return null;
  /* Legacy destructive synchronization is intentionally unreachable. */

  const rosterSheet = ss.getSheetByName(CONFIG.studentSheet);
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
  if (!rosterSheet || !scoreSheet) {
    if (showAlertOnError) {
      const ui = SpreadsheetApp.getUi();
      ui.alert(`'${CONFIG.studentSheet}' 또는 '${CONFIG.scoreSheet}' 탭을 찾지 못했습니다.`);
    }
    return null;
  }

  ensureReportColumnsSilently_(ss);
  ensureClassSettings_(ss, scoreSheet, false);
  resetScoreOrderColumn_(scoreSheet);
  const clearedDefaultGrammarGroupCount = clearLegacyDefaultGrammarGroups_(scoreSheet);
  refreshClassDropdownSources_(ss, rosterSheet, scoreSheet);
  const rosterArrangeResult = arrangeStudentRosterWithClassSpacers_(rosterSheet);

  const rosterRows = readObjects_(rosterSheet, CONFIG.studentSheet)
    .filter(row => stringValue_(row['학생 이름']));
  const scoreIdBackfillCount = backfillScoreStudentIdsFromRoster_(rosterRows, scoreSheet);
  const scoreRows = readScoreObjectsWithNotes_(scoreSheet)
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
  const matchedRows = [];
  const newRosterRows = [];
  let addedCount = 0;
  let updatedCount = 0;

  rosterRows.forEach(rosterRow => {
    const key = makeStudentKey_(rosterRow);
    if (!key || rosterKeyMap[key]) return;
    rosterKeyMap[key] = true;

    const match = findBestExistingScoreRow_(rosterRow, scoreRows, existingByKey, existingByName, usedExistingRowIndexes);
    const existing = match ? match.row : null;
    if (match) usedExistingRowIndexes[match.index] = true;

    if (existing) {
      matchedRows.push({ rowNumber: existing[ROW_NUMBER_KEY], rosterRow });
      updatedCount += 1;
    } else {
      newRosterRows.push(rosterRow);
      addedCount += 1;
    }
  });

  const unsafeRows = findUnsafeUnmatchedScoreRows_(scoreRows, usedExistingRowIndexes, rosterRows);
  if (unsafeRows.length) {
    notifySyncSafetyIssue_(ss, showAlertOnError, unsafeRows);
    return {
      rosterCount: rosterRows.length,
      addedCount,
      updatedCount,
      removedCount: 0,
      archivedCount: 0,
      scoreIdBackfillCount,
      clearedDefaultGrammarGroupCount,
      spacerCount: rosterArrangeResult.spacerCount,
      duplicateKeys,
      blocked: true,
      unsafeRows,
    };
  }

  const unmatchedScoreRows = scoreRows.filter((row, index) => !usedExistingRowIndexes[index]);
  const archivedCount = archiveScoreRowsBeforeRemoval_(ss, scoreSheet, unmatchedScoreRows);
  const removedCount = clearUnmatchedScoreRows_(scoreSheet, unmatchedScoreRows);
  const scoreHeaders = scoreSheet.getRange(1, 1, 1, scoreSheet.getLastColumn()).getValues()[0].map(stringValue_);
  updateScoreStudentInfoRows_(scoreSheet, scoreHeaders, matchedRows);
  appendScoreRowsFromRoster_(ss, scoreSheet, scoreHeaders, newRosterRows);
  fillBlankScoreDefaultsFromClassSettings_(ss, scoreSheet);

  const arrangeResult = arrangeScoreInputLikeRoster_(scoreSheet, rosterRows);
  if (archivedCount && !showAlertOnError) {
    try {
      ss.toast(
        `${archivedCount}명 행을 '${CONFIG.scoreArchiveSheet}' 탭에 백업한 뒤 정리했습니다.`,
        '성적입력 안전 동기화',
        8
      );
    } catch (error) {
      console.warn(`성적보관 알림 표시 실패: ${error.message}`);
    }
  }

  return {
    rosterCount: rosterRows.length,
    addedCount,
    updatedCount,
    removedCount,
    archivedCount,
    scoreIdBackfillCount,
    clearedDefaultGrammarGroupCount,
    spacerCount: rosterArrangeResult.spacerCount,
    scoreSpacerCount: arrangeResult.spacerCount,
    duplicateKeys,
  };
}

function readScoreObjectsWithNotes_(sheet) {
  if (!sheet) throw new Error(`'${CONFIG.scoreSheet}' 탭을 찾지 못했습니다.`);

  const range = sheet.getDataRange();
  const values = range.getValues();
  if (values.length < 2) return [];

  const notes = range.getNotes();
  const formulas = range.getFormulas();
  const headers = values[0].map(stringValue_);

  return values.slice(1).map((row, rowIndex) => {
    const object = {};
    const rowNotes = {};
    const rowFormulas = {};
    headers.forEach((header, columnIndex) => {
      object[header] = row[columnIndex];
      const note = stringValue_(notes[rowIndex + 1][columnIndex]);
      const formula = stringValue_(formulas[rowIndex + 1][columnIndex]);
      if (header && note) rowNotes[header] = note;
      if (header && formula) rowFormulas[header] = formula;
    });
    object[ROW_NOTES_KEY] = rowNotes;
    object[ROW_FORMULAS_KEY] = rowFormulas;
    object[ROW_NUMBER_KEY] = rowIndex + 2;
    return object;
  }).filter(row => headers.some(header => stringValue_(row[header])));
}

function updateScoreStudentInfoRows_(sheet, headers, matches) {
  if (!matches.length || sheet.getLastRow() < 2) return;

  const rowCount = sheet.getLastRow() - 1;
  STUDENT_ROSTER_SYNC_HEADERS.forEach(header => {
    const columnIndex = headers.indexOf(header) + 1;
    if (!columnIndex) return;

    const range = sheet.getRange(2, columnIndex, rowCount, 1);
    const values = range.getValues();
    let changed = false;
    matches.forEach(match => {
      const valueIndex = match.rowNumber - 2;
      if (valueIndex < 0 || valueIndex >= values.length) return;
      const nextValue = match.rosterRow[header] === undefined ? '' : match.rosterRow[header];
      if (stringValue_(values[valueIndex][0]) === stringValue_(nextValue)) return;
      values[valueIndex][0] = nextValue;
      changed = true;
    });
    if (changed) range.setValues(values);
  });

}

function appendScoreRowsFromRoster_(ss, sheet, headers, rosterRows) {
  if (!rosterRows.length) return;

  const outputValues = rosterRows.map(rosterRow => {
    const classDefaults = getClassDefaultsForRosterRow_(ss, rosterRow);
    const rowObject = Object.assign({}, classDefaults);
    STUDENT_ROSTER_SYNC_HEADERS.forEach(header => {
      rowObject[header] = rosterRow[header];
    });
    return headers.map(header => rowObject[header] === undefined ? '' : rowObject[header]);
  });

  const startRow = sheet.getLastRow() + 1;
  ensureRowExists_(sheet, startRow + outputValues.length - 1);
  sheet.getRange(startRow, 1, outputValues.length, headers.length).setValues(outputValues);
}

function getClassDefaultsForRosterRow_(ss, rosterRow) {
  const className = stringValue_(rosterRow['반 이름']);
  if (!className) return {};

  const classSheet = ss.getSheetByName(CONFIG.classConfigSheet);
  if (!classSheet || classSheet.getLastRow() < 2) return {};

  const rows = readObjects_(classSheet, CONFIG.classConfigSheet);
  const match = rows.find(row => isActiveConfigRow_(row['사용여부']) && stringValue_(row['반 이름']) === className);
  if (!match) return {};

  return {
    'Vocabulary 교재명': match['기본 Vocabulary 교재명'],
    'Writing/Grammar 교재명': match['기본 Writing/Grammar 교재명'],
    'Reading/Listening 교재명': match['기본 Reading/Listening 교재명'],
  };
}

function arrangeStudentRosterWithClassSpacers_(sheet) {
  if (!sheet || sheet.getLastRow() < 2) return { dataCount: 0, spacerCount: 0 };

  const orderColumnIndex = ensureOrderColumn_(sheet, ROSTER_ORDER_HEADER);
  const lastColumn = sheet.getLastColumn();
  const rowCount = Math.max(sheet.getLastRow() - 1, 0);
  if (!rowCount) return { dataCount: 0, spacerCount: 0 };

  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0].map(stringValue_);
  const dataRange = sheet.getRange(2, 1, rowCount, lastColumn);
  const values = dataRange.getValues();
  const formulas = dataRange.getFormulas();
  const notes = dataRange.getNotes();
  const dataEntries = [];
  const blankRowIndexes = [];
  const currentTokens = [];

  values.forEach((row, rowIndex) => {
    const hasPersistentContent = row.some((value, columnIndex) => {
      if (columnIndex === orderColumnIndex - 1) return false;
      return stringValue_(value)
        || stringValue_(formulas[rowIndex][columnIndex])
        || stringValue_(notes[rowIndex][columnIndex]);
    });
    if (!hasPersistentContent) {
      blankRowIndexes.push(rowIndex);
      currentTokens.push('blank');
      return;
    }

    currentTokens.push(`row:${rowIndex}`);
    dataEntries.push({
      rowIndex,
      rowObject: rowArrayToObject_(row, headers),
    });
  });

  dataEntries.sort((left, right) => {
    const classComparison = compareClassNamesForSort_(
      left.rowObject['반 이름'],
      right.rowObject['반 이름']
    );
    return classComparison || left.rowIndex - right.rowIndex;
  });

  const spacerOrders = [];
  dataEntries.forEach((entry, index) => {
    const nextEntry = dataEntries[index + 1];
    if (!nextEntry) return;

    const currentGroup = makeClassGroupKey_(entry.rowObject);
    const nextGroup = makeClassGroupKey_(nextEntry.rowObject);
    const hasClassNames = stringValue_(entry.rowObject['반 이름'])
      && stringValue_(nextEntry.rowObject['반 이름']);
    if (hasClassNames && currentGroup !== nextGroup) {
      spacerOrders.push((index + 1) * 2);
    }
  });

  const spacerAfterDataIndexes = {};
  spacerOrders.forEach(order => spacerAfterDataIndexes[(order / 2) - 1] = true);
  const desiredTokens = [];
  dataEntries.forEach((entry, index) => {
    desiredTokens.push(`row:${entry.rowIndex}`);
    if (spacerAfterDataIndexes[index]) desiredTokens.push('blank');
  });
  if (JSON.stringify(currentTokens) === JSON.stringify(desiredTokens)) {
    return {
      dataCount: dataEntries.length,
      spacerCount: spacerOrders.length,
    };
  }

  const missingBlankCount = Math.max(spacerOrders.length - blankRowIndexes.length, 0);
  const extendedRowCount = rowCount + missingBlankCount;
  ensureRowExists_(sheet, extendedRowCount + 1);

  const helperValues = Array.from({ length: extendedRowCount }, () => ['']);
  dataEntries.forEach((entry, index) => {
    helperValues[entry.rowIndex][0] = index * 2 + 1;
  });
  blankRowIndexes.forEach((rowIndex, index) => {
    helperValues[rowIndex][0] = index < spacerOrders.length
      ? spacerOrders[index]
      : dataEntries.length * 2 + index + 1;
  });
  for (let index = 0; index < missingBlankCount; index += 1) {
    helperValues[rowCount + index][0] = spacerOrders[blankRowIndexes.length + index];
  }

  sheet.getRange(2, orderColumnIndex, extendedRowCount, 1).setValues(helperValues);
  sheet.getRange(2, 1, extendedRowCount, lastColumn)
    .sort({ column: orderColumnIndex, ascending: true });
  sheet.getRange(2, orderColumnIndex, extendedRowCount, 1)
    .setValues(Array.from({ length: extendedRowCount }, () => ['']));
  sheet.hideColumns(orderColumnIndex);

  return {
    dataCount: dataEntries.length,
    spacerCount: spacerOrders.length,
  };
}

function arrangeScoreInputLikeRoster_(sheet, rosterRows) {
  if (!sheet || sheet.getLastRow() < 2 || !rosterRows.length) return { dataCount: 0, spacerCount: 0 };

  const orderColumnIndex = ensureScoreOrderColumn_(sheet);
  const lastColumn = sheet.getLastColumn();
  const rowCount = Math.max(sheet.getLastRow() - 1, 0);
  if (!rowCount) return { dataCount: 0, spacerCount: 0 };

  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0].map(stringValue_);
  const dataRange = sheet.getRange(2, 1, rowCount, lastColumn);
  const values = dataRange.getValues();
  const formulas = dataRange.getFormulas();
  const notes = dataRange.getNotes();
  const rosterOrderByKey = {};

  rosterRows.forEach((row, index) => {
    const key = makeStudentKey_(row);
    if (key && rosterOrderByKey[key] === undefined) rosterOrderByKey[key] = index + 1;
  });

  const dataEntries = [];
  const blankRowIndexes = [];
  const currentTokens = [];
  values.forEach((row, rowIndex) => {
    const hasPersistentContent = row.some((value, columnIndex) => {
      if (columnIndex === orderColumnIndex - 1) return false;
      return stringValue_(value)
        || stringValue_(formulas[rowIndex][columnIndex])
        || stringValue_(notes[rowIndex][columnIndex]);
    });
    if (!hasPersistentContent) {
      blankRowIndexes.push(rowIndex);
      currentTokens.push('blank');
      return;
    }

    currentTokens.push(`row:${rowIndex}`);
    const rowObject = rowArrayToObject_(row, headers);
    const key = makeStudentKey_(rowObject);
    const rosterOrder = rosterOrderByKey[key];
    dataEntries.push({
      rowIndex,
      rowObject,
      order: rosterOrder === undefined ? rosterRows.length + rowIndex + 1 : rosterOrder,
    });
  });

  dataEntries.sort((left, right) => {
    if (left.order !== right.order) return left.order - right.order;
    return left.rowIndex - right.rowIndex;
  });

  const spacerOrders = [];
  dataEntries.forEach((entry, index) => {
    const nextEntry = dataEntries[index + 1];
    if (!nextEntry) return;

    const currentClass = stringValue_(entry.rowObject['반 이름']);
    const nextClass = stringValue_(nextEntry.rowObject['반 이름']);
    const currentGroup = makeClassGroupKey_(entry.rowObject);
    const nextGroup = makeClassGroupKey_(nextEntry.rowObject);
    if (currentClass && nextClass && currentGroup !== nextGroup) {
      spacerOrders.push((index + 1) * 2);
    }
  });

  const spacerAfterDataIndexes = {};
  spacerOrders.forEach(order => spacerAfterDataIndexes[(order / 2) - 1] = true);
  const desiredTokens = [];
  dataEntries.forEach((entry, index) => {
    desiredTokens.push(`row:${entry.rowIndex}`);
    if (spacerAfterDataIndexes[index]) desiredTokens.push('blank');
  });
  if (JSON.stringify(currentTokens) === JSON.stringify(desiredTokens)) {
    return {
      dataCount: dataEntries.length,
      spacerCount: spacerOrders.length,
    };
  }

  const missingBlankCount = Math.max(spacerOrders.length - blankRowIndexes.length, 0);
  const extendedRowCount = rowCount + missingBlankCount;
  ensureRowExists_(sheet, extendedRowCount + 1);

  const helperValues = Array.from({ length: extendedRowCount }, () => ['']);
  dataEntries.forEach((entry, index) => {
    helperValues[entry.rowIndex][0] = index * 2 + 1;
  });

  blankRowIndexes.forEach((rowIndex, index) => {
    helperValues[rowIndex][0] = index < spacerOrders.length
      ? spacerOrders[index]
      : dataEntries.length * 2 + index + 1;
  });

  for (let index = 0; index < missingBlankCount; index += 1) {
    helperValues[rowCount + index][0] = spacerOrders[blankRowIndexes.length + index];
  }

  sheet.getRange(2, orderColumnIndex, extendedRowCount, 1).setValues(helperValues);
  sheet.getRange(2, 1, extendedRowCount, lastColumn)
    .sort({ column: orderColumnIndex, ascending: true });
  sheet.getRange(2, orderColumnIndex, extendedRowCount, 1)
    .setValues(Array.from({ length: extendedRowCount }, () => ['']));
  sheet.hideColumns(orderColumnIndex);

  return {
    dataCount: dataEntries.length,
    spacerCount: spacerOrders.length,
  };
}

function ensureScoreOrderColumn_(sheet) {
  return ensureOrderColumn_(sheet, SCORE_ORDER_HEADER);
}

function ensureOrderColumn_(sheet, header) {
  const lastColumn = Math.max(sheet.getLastColumn(), 1);
  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0].map(stringValue_);
  let columnIndex = headers.indexOf(header) + 1;

  if (!columnIndex) {
    columnIndex = sheet.getLastColumn() + 1;
    sheet.getRange(1, columnIndex).setValue(header);
  }

  sheet.hideColumns(columnIndex);
  return columnIndex;
}

function resetScoreOrderColumn_(sheet) {
  if (!sheet) return;
  const columnIndex = ensureScoreOrderColumn_(sheet);
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return;
  const range = sheet.getRange(2, columnIndex, lastRow - 1, 1);
  const values = range.getValues();
  if (!values.some(row => stringValue_(row[0]))) return;
  range.setValues(Array.from({ length: lastRow - 1 }, () => ['']));
}

function ensureRowExists_(sheet, rowNumber) {
  if (rowNumber <= sheet.getMaxRows()) return;
  sheet.insertRowsAfter(sheet.getMaxRows(), rowNumber - sheet.getMaxRows());
}

function refreshClassDropdownSources_(ss, rosterSheet, scoreSheet) {
  const classSheet = ss.getSheetByName(CONFIG.classConfigSheet);
  if (!classSheet) return null;

  normalizeConfiguredClassNames_(classSheet, [rosterSheet, scoreSheet]);
  const config = readClassConfig_(classSheet);
  const grammarGroups = buildGrammarGroupOptions_(scoreSheet);
  return {
    classSheet,
    classHelperRange: writeClassConfigHelperList_(classSheet, ACTIVE_CLASS_LIST_HEADER, config.classNames),
    grammarHelperRange: writeClassConfigHelperList_(classSheet, GRAMMAR_GROUP_LIST_HEADER, grammarGroups),
  };
}

function normalizeConfiguredClassNames_(classSheet, sheets) {
  if (!classSheet || classSheet.getLastRow() < 2) return 0;

  const canonicalByKey = {};
  const ambiguousKeys = {};
  readClassConfig_(classSheet).classNames.forEach(className => {
    const key = className.toLowerCase();
    if (canonicalByKey[key] && canonicalByKey[key] !== className) {
      ambiguousKeys[key] = true;
      return;
    }
    canonicalByKey[key] = className;
  });
  Object.keys(ambiguousKeys).forEach(key => delete canonicalByKey[key]);

  let changedCount = 0;
  (sheets || []).forEach(sheet => {
    if (!sheet || sheet.getLastRow() < 2) return;

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
    const classColumnIndex = headers.indexOf('반 이름') + 1;
    const nameColumnIndex = headers.indexOf('학생 이름') + 1;
    if (!classColumnIndex || !nameColumnIndex) return;

    const rowCount = sheet.getLastRow() - 1;
    const classRange = sheet.getRange(2, classColumnIndex, rowCount, 1);
    const classValues = classRange.getValues();
    const nameValues = sheet.getRange(2, nameColumnIndex, rowCount, 1).getValues();
    let changedStartIndex = -1;

    for (let index = 0; index <= rowCount; index += 1) {
      let isChanged = false;
      if (index < rowCount && stringValue_(nameValues[index][0])) {
        const currentName = stringValue_(classValues[index][0]);
        const canonicalName = canonicalByKey[currentName.toLowerCase()];
        if (canonicalName && canonicalName !== currentName) {
          classValues[index][0] = canonicalName;
          changedCount += 1;
          isChanged = true;
        }
      }

      if (isChanged && changedStartIndex === -1) {
        changedStartIndex = index;
        continue;
      }
      if (isChanged || changedStartIndex === -1) continue;

      sheet.getRange(changedStartIndex + 2, classColumnIndex, index - changedStartIndex, 1)
        .setValues(classValues.slice(changedStartIndex, index));
      changedStartIndex = -1;
    }
  });

  return changedCount;
}

function buildGrammarGroupOptions_(scoreSheet) {
  if (!scoreSheet || scoreSheet.getLastColumn() < 1) return GRAMMAR_GROUP_OPTIONS.slice();

  const headers = scoreSheet.getRange(1, 1, 1, scoreSheet.getLastColumn()).getValues()[0].map(stringValue_);
  return mergeUniqueValues_(
    GRAMMAR_GROUP_OPTIONS,
    collectUniqueColumnValues_(scoreSheet, headers, 'Grammar 평균그룹')
  ).filter(value => value.toLowerCase() !== 'default');
}

function clearLegacyDefaultGrammarGroups_(scoreSheet) {
  if (!scoreSheet || scoreSheet.getLastRow() < 2) return 0;

  const headers = scoreSheet.getRange(1, 1, 1, scoreSheet.getLastColumn()).getValues()[0].map(stringValue_);
  const columnIndex = headers.indexOf('Grammar 평균그룹') + 1;
  if (!columnIndex) return 0;

  const rowCount = scoreSheet.getLastRow() - 1;
  const range = scoreSheet.getRange(2, columnIndex, rowCount, 1);
  const values = range.getValues();
  let clearedCount = 0;
  values.forEach(row => {
    if (stringValue_(row[0]).toLowerCase() !== 'default') return;
    row[0] = '';
    clearedCount += 1;
  });
  if (clearedCount) range.setValues(values);
  return clearedCount;
}

function writeClassConfigHelperList_(sheet, header, values) {
  const columnIndex = ensureHeaderColumn_(sheet, header);
  sheet.hideColumns(columnIndex);

  const rowCount = Math.max(CLASS_CONFIG_HELPER_ROW_COUNT, values.length, 1);
  ensureRowExists_(sheet, rowCount + 1);
  const outputValues = Array.from({ length: rowCount }, (_, index) => [values[index] || '']);
  const range = sheet.getRange(2, columnIndex, rowCount, 1);
  const currentValues = range.getValues();
  let changedStartIndex = -1;

  for (let index = 0; index <= rowCount; index += 1) {
    const isChanged = index < rowCount
      && stringValue_(currentValues[index][0]) !== stringValue_(outputValues[index][0]);
    if (isChanged && changedStartIndex === -1) {
      changedStartIndex = index;
      continue;
    }
    if (isChanged || changedStartIndex === -1) continue;

    const changedRowCount = index - changedStartIndex;
    sheet.getRange(changedStartIndex + 2, columnIndex, changedRowCount, 1)
      .setValues(outputValues.slice(changedStartIndex, index));
    changedStartIndex = -1;
  }

  return range;
}

function findValidationTemplateCell_(sheet, header) {
  if (!sheet || sheet.getLastColumn() < 1) return null;
  ensureRowExists_(sheet, 2);

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const columnIndex = headers.indexOf(header) + 1;
  if (!columnIndex) return null;

  const activeRange = sheet.getActiveRange();
  if (activeRange && activeRange.getLastRow() > 1
    && activeRange.getColumn() <= columnIndex
    && activeRange.getLastColumn() >= columnIndex) {
    const activeCell = sheet.getRange(Math.max(activeRange.getRow(), 2), columnIndex);
    if (activeCell.getDataValidation()) return activeCell;
  }

  const validations = sheet.getRange(2, columnIndex, sheet.getMaxRows() - 1, 1).getDataValidations();
  const sourceIndex = validations.findIndex(row => row[0]);
  return sourceIndex === -1 ? null : sheet.getRange(sourceIndex + 2, columnIndex);
}

function copyValidationTemplateToColumn_(templateCell, targetSheet, targetHeader) {
  if (!templateCell || !targetSheet || targetSheet.getLastColumn() < 1) return false;
  ensureRowExists_(targetSheet, 2);

  const headers = targetSheet.getRange(1, 1, 1, targetSheet.getLastColumn()).getValues()[0].map(stringValue_);
  const columnIndex = headers.indexOf(targetHeader) + 1;
  if (!columnIndex) return false;

  templateCell.copyTo(
    targetSheet.getRange(2, columnIndex, targetSheet.getMaxRows() - 1, 1),
    SpreadsheetApp.CopyPasteType.PASTE_DATA_VALIDATION,
    false
  );
  return true;
}

function fillBlankScoreDefaultsFromClassSettings_(ss, scoreSheet) {
  const classSheet = ss.getSheetByName(CONFIG.classConfigSheet);
  if (!classSheet || !scoreSheet || scoreSheet.getLastRow() < 2) return 0;

  const configRows = readObjects_(classSheet, CONFIG.classConfigSheet);
  const defaultsByClass = {};
  configRows.forEach(row => {
    if (!isActiveConfigRow_(row['사용여부'])) return;
    const className = stringValue_(row['반 이름']);
    if (className && !defaultsByClass[className]) defaultsByClass[className] = row;
  });

  const lastColumn = scoreSheet.getLastColumn();
  const rowCount = scoreSheet.getLastRow() - 1;
  const headers = scoreSheet.getRange(1, 1, 1, lastColumn).getValues()[0].map(stringValue_);
  const values = scoreSheet.getRange(2, 1, rowCount, lastColumn).getValues();
  const classColumnIndex = headers.indexOf('반 이름');
  const nameColumnIndex = headers.indexOf('학생 이름');
  if (classColumnIndex === -1 || nameColumnIndex === -1) return 0;

  const mappings = [
    { configHeader: '기본 Vocabulary 교재명', scoreHeader: 'Vocabulary 교재명' },
    { configHeader: '기본 Writing/Grammar 교재명', scoreHeader: 'Writing/Grammar 교재명' },
    { configHeader: '기본 Reading/Listening 교재명', scoreHeader: 'Reading/Listening 교재명' },
  ];

  let changedCount = 0;
  mappings.forEach(mapping => {
    const targetColumnIndex = headers.indexOf(mapping.scoreHeader);
    if (targetColumnIndex === -1) return;

    let columnChanged = false;
    values.forEach(row => {
      if (!stringValue_(row[nameColumnIndex]) || stringValue_(row[targetColumnIndex])) return;
      const classDefaults = defaultsByClass[stringValue_(row[classColumnIndex])];
      const defaultValue = classDefaults ? classDefaults[mapping.configHeader] : '';
      if (!stringValue_(defaultValue)) return;
      row[targetColumnIndex] = defaultValue;
      changedCount += 1;
      columnChanged = true;
    });

    if (columnChanged) {
      scoreSheet.getRange(2, targetColumnIndex + 1, rowCount, 1)
        .setValues(values.map(row => [row[targetColumnIndex]]));
    }
  });
  return changedCount;
}

function findUnsafeUnmatchedScoreRows_(scoreRows, usedExistingRowIndexes, rosterRows) {
  return scoreRows.map((row, index) => ({ row, index }))
    .filter(entry => {
      if (usedExistingRowIndexes[entry.index]) return false;
      return hasProtectedScoreData_(entry.row);
    })
    .map(entry => formatScoreRowForSafetyAlert_(entry.row, entry.row[ROW_NUMBER_KEY] || entry.index + 2));
}

function clearUnmatchedScoreRows_(sheet, rows) {
  if (!sheet || !rows || !rows.length) return 0;

  const rowNumbers = rows
    .map(row => Number(row[ROW_NUMBER_KEY]))
    .filter(rowNumber => Number.isFinite(rowNumber) && rowNumber >= 2)
    .sort((left, right) => left - right);
  if (!rowNumbers.length) return 0;

  const groups = [];
  rowNumbers.forEach(rowNumber => {
    const currentGroup = groups[groups.length - 1];
    if (currentGroup && rowNumber === currentGroup.endRow + 1) {
      currentGroup.endRow = rowNumber;
      return;
    }
    groups.push({ startRow: rowNumber, endRow: rowNumber });
  });

  const columnCount = sheet.getLastColumn();
  groups.forEach(group => {
    const range = sheet.getRange(
      group.startRow,
      1,
      group.endRow - group.startRow + 1,
      columnCount
    );
    range.clearContent();
    range.clearNote();
  });
  return rowNumbers.length;
}

function hasProtectedScoreData_(row) {
  const notes = row[ROW_NOTES_KEY] || {};
  const formulas = row[ROW_FORMULAS_KEY] || {};
  const automaticallyManagedHeaders = new Set([
    ...STUDENT_ROSTER_SYNC_HEADERS,
    ...CLASS_DEFAULT_SCORE_HEADERS,
    SCORE_ORDER_HEADER,
  ]);
  const dataHeaders = Object.keys(row).filter(header => (
    header !== ROW_NOTES_KEY
    && header !== ROW_FORMULAS_KEY
    && header !== ROW_NUMBER_KEY
    && !automaticallyManagedHeaders.has(header)
  ));
  const annotationHeaders = mergeUniqueValues_(Object.keys(notes), Object.keys(formulas));

  return dataHeaders.some(header => stringValue_(row[header]))
    || annotationHeaders.some(header => (
      stringValue_(notes[header]) || stringValue_(formulas[header])
    ));
}

function archiveScoreRowsBeforeRemoval_(ss, sourceSheet, rows) {
  if (!ss || !sourceSheet || !rows || !rows.length) return 0;

  const rowNumbers = rows
    .map(row => Number(row[ROW_NUMBER_KEY]))
    .filter(rowNumber => Number.isFinite(rowNumber) && rowNumber >= 2)
    .sort((left, right) => left - right);
  if (!rowNumbers.length) return 0;

  const columnCount = sourceSheet.getLastColumn();
  const sourceHeaders = sourceSheet.getRange(1, 1, 1, columnCount).getValues()[0].map(stringValue_);
  const archiveHeaders = [
    ...sourceHeaders,
    '보관일시',
    '보관사유',
    '원본행',
  ];
  const archiveSheet = getCompatibleScoreArchiveSheet_(ss, archiveHeaders);
  const startRow = archiveSheet.getLastRow() + 1;
  ensureRowExists_(archiveSheet, startRow + rowNumbers.length - 1);

  const archivedValues = rowNumbers.map(rowNumber => {
    const values = sourceSheet.getRange(rowNumber, 1, 1, columnCount).getValues()[0];
    return [
      ...values,
      new Date(),
      '학생명단 제외 전 자동 보관',
      rowNumber,
    ];
  });
  archiveSheet.getRange(startRow, 1, archivedValues.length, archiveHeaders.length)
    .setValues(archivedValues);

  return rowNumbers.length;
}

function getCompatibleScoreArchiveSheet_(ss, archiveHeaders) {
  let suffix = 1;
  while (true) {
    const sheetName = suffix === 1
      ? CONFIG.scoreArchiveSheet
      : `${CONFIG.scoreArchiveSheet}_${suffix}`;
    let sheet = ss.getSheetByName(sheetName);

    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      sheet.getRange(1, 1, 1, archiveHeaders.length).setValues([archiveHeaders]);
      sheet.getRange(1, 1, 1, archiveHeaders.length)
        .setBackground('#595959')
        .setFontColor('#FFFFFF')
        .setFontWeight('bold')
        .setWrap(true);
      sheet.setFrozenRows(1);
      return sheet;
    }

    const currentHeaders = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1))
      .getValues()[0]
      .map(stringValue_);
    if (JSON.stringify(currentHeaders) === JSON.stringify(archiveHeaders)) return sheet;
    suffix += 1;
  }
}

function formatScoreRowForSafetyAlert_(row, rowNumber) {
  return [
    `${rowNumber}행`,
    stringValue_(row['학생 이름']),
    stringValue_(row['요일']),
    stringValue_(row['시간']),
    stringValue_(row['반 이름']),
  ].filter(Boolean).join(' / ');
}

function notifySyncSafetyIssue_(ss, showAlertOnError, unsafeRows) {
  const message = [
    '성적정보 보호를 위해 동기화를 중단했습니다.',
    '기존 성적행을 학생명단의 학생과 안전하게 연결하지 못했습니다.',
    '아래 행을 확인한 뒤 다시 동기화하세요.',
    unsafeRows.slice(0, 10).join('\n'),
  ].filter(Boolean).join('\n');

  if (showAlertOnError) {
    SpreadsheetApp.getUi().alert(message);
    return;
  }

  try {
    ss.toast(message, '성적입력 동기화 중단', 10);
  } catch (error) {
    console.warn(message);
  }
}

function backfillScoreStudentIdsFromRoster_(rosterRows, scoreSheet) {
  if (!scoreSheet || !rosterRows.length || scoreSheet.getLastRow() < 2) return 0;

  const headers = scoreSheet.getRange(1, 1, 1, scoreSheet.getLastColumn()).getValues()[0].map(stringValue_);
  const idColumnIndex = headers.indexOf(STUDENT_ID_HEADER) + 1;
  if (!idColumnIndex) return 0;

  const rosterByVisibleKey = {};
  const visibleKeyCounts = {};
  const rosterByName = {};
  const nameCounts = {};

  rosterRows.forEach(row => {
    const studentId = stringValue_(row[STUDENT_ID_HEADER]);
    const studentName = stringValue_(row['학생 이름']);
    if (!studentId) return;

    const visibleKey = makeStudentVisibleKey_(row);
    if (visibleKey) {
      visibleKeyCounts[visibleKey] = (visibleKeyCounts[visibleKey] || 0) + 1;
      rosterByVisibleKey[visibleKey] = studentId;
    }

    if (studentName) {
      nameCounts[studentName] = (nameCounts[studentName] || 0) + 1;
      rosterByName[studentName] = studentId;
    }
  });

  const rowCount = scoreSheet.getLastRow() - 1;
  const values = scoreSheet.getRange(2, 1, rowCount, scoreSheet.getLastColumn()).getValues();
  const outputIds = [];
  let changedCount = 0;

  values.forEach(row => {
    const rowObject = rowArrayToObject_(row, headers);
    let studentId = stringValue_(rowObject[STUDENT_ID_HEADER]);

    if (!studentId && stringValue_(rowObject['학생 이름'])) {
      const visibleKey = makeStudentVisibleKey_(rowObject);
      const studentName = stringValue_(rowObject['학생 이름']);

      if (visibleKey && visibleKeyCounts[visibleKey] === 1) {
        studentId = rosterByVisibleKey[visibleKey];
      } else if (studentName && nameCounts[studentName] === 1) {
        studentId = rosterByName[studentName];
      }

      if (studentId) changedCount += 1;
    }

    outputIds.push([studentId]);
  });

  if (changedCount) {
    scoreSheet.getRange(2, idColumnIndex, outputIds.length, 1).setValues(outputIds);
  }

  return changedCount;
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

  const visibleKey = makeStudentVisibleKey_(rosterRow);
  for (let i = 0; i < scoreRows.length; i += 1) {
    if (usedExistingRowIndexes[i]) continue;
    if (makeStudentVisibleKey_(scoreRows[i]) === visibleKey) {
      return { row: scoreRows[i], index: i };
    }
  }

  const name = stringValue_(rosterRow['학생 이름']);
  const candidates = existingByName[name] || [];
  if (candidates.length !== 1) return null;

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

function generateReports_(targetRows, ctx) {
  if (!targetRows.length) {
    SpreadsheetApp.getUi().alert('생성할 학생이 없습니다.');
    return;
  }

  let folder;
  try {
    folder = getOrCreateFolder_(ctx.outputConfig['저장폴더명'] || '영어 성적표 PDF');
  } catch (error) {
    SpreadsheetApp.getUi().alert(`PDF 저장 폴더를 준비하지 못했습니다.\n${error.message}`);
    return;
  }

  let successCount = 0;
  let logFailureCount = 0;

  targetRows.forEach((row, index) => {
    try {
      ctx.ss.toast(`${index + 1}/${targetRows.length} · ${stringValue_(row['학생 이름'])}`, '성적표 생성 중', 5);
    } catch (error) {
      console.warn(`진행 알림 표시 실패: ${error.message}`);
    }

    let logEntry;
    try {
      const issues = collectReportInputIssues_([row]);
      if (issues.length) throw new Error(issues.map(issue => `${issue[2]}: ${issue[3]}`).join(' / '));
      const report = buildReportData_(row, ctx);
      if (!report.subjects.length) throw new Error('입력된 성적 과목이 없습니다.');

      const html = renderReportHtml_(report);
      const blob = Utilities
        .newBlob(html, MimeType.HTML, `${report.fileBaseName}.html`)
        .getAs(MimeType.PDF)
        .setName(`${report.fileBaseName}.pdf`);
      const file = folder.createFile(blob);

      successCount += 1;
      logEntry = [new Date(), report.month, report.className, report.studentName, '성공', file.getName(), file.getUrl()];
    } catch (error) {
      logEntry = [
        new Date(),
        stringValue_(ctx.outputConfig['출력월']) || '2026년 6월',
        stringValue_(row['반 이름']),
        stringValue_(row['학생 이름']),
        '실패',
        '',
        error.message,
      ];
    }

    if (!appendLogsSafely_([logEntry])) logFailureCount += 1;
  });

  SpreadsheetApp.getUi().alert([
    '성적표 생성 완료',
    `성공: ${successCount}명`,
    `실패: ${targetRows.length - successCount}명`,
    logFailureCount ? `생성로그 기록 실패: ${logFailureCount}건` : '',
  ].filter(Boolean).join('\n'));
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

    const averageGroup = getAverageGroupInfo_(studentRow, subject);
    const average = calculateSubjectAverage_(ctx.scoreRows, subject, averageGroup.key);

    return {
      name: subject.name || subject.key,
      score,
      average,
      basisColumn: averageGroup.basisColumn,
      basisValue: averageGroup.basisValue,
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

function getAverageGroupInfo_(row, subject) {
  const className = stringValue_(row['반 이름']);
  if (subject.key !== 'Grammar') {
    return {
      key: className ? `class:${className}` : '',
      basisColumn: '반 이름',
      basisValue: className,
    };
  }

  const grammarGroup = stringValue_(row['Grammar 평균그룹']);
  return {
    key: grammarGroup && grammarGroup.toLowerCase() !== 'default' ? `grammar:${grammarGroup}` : '',
    basisColumn: 'Grammar 평균그룹',
    basisValue: grammarGroup.toLowerCase() === 'default' ? '' : grammarGroup,
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

function calculateSubjectAverage_(rows, subject, averageGroupKey) {
  if (!averageGroupKey) return null;
  const scores = rows
    .filter(row => isActiveEnrollment_(row) && getAverageGroupInfo_(row, subject).key === averageGroupKey)
    .map(row => parseScore_(row[subject.scoreColumn]))
    .filter(score => score !== null);
  if (!scores.length) return null;
  return Math.round((scores.reduce((acc, score) => acc + score, 0) / scores.length) * 10) / 10;
}

function readObjects_(sheet, sheetNameForError) {
  if (!sheet) throw new Error(`'${sheetNameForError || '시트'}' 탭을 찾지 못했습니다.`);
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];
  const headers = values[0].map(stringValue_);
  return values.slice(1).map((row, index) => {
    const object = { __sheetRow: index + 2 };
    headers.forEach((header, column) => object[header] = row[column]);
    return row.some(value => stringValue_(value)) ? object : null;
  }).filter(Boolean);
}

function readObjectAtRow_(sheet, rowNumber) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const values = sheet.getRange(rowNumber, 1, 1, sheet.getLastColumn()).getValues()[0];
  const object = { __sheetRow: rowNumber };
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

function appendLogsSafely_(logs) {
  try {
    appendLogs_(logs);
    return true;
  } catch (error) {
    console.error(`생성로그 기록 실패: ${error.message}`);
    return false;
  }
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
  return Boolean(stringValue_(row && row['학생 이름'])) && isActiveEnrollment_(row);
}

function isActiveEnrollment_(row) {
  const value = row ? row[ENROLLMENT_STATUS_HEADER] : '';
  if (value === false) return false;
  const text = stringValue_(value).toLowerCase();
  return !['퇴원', '휴원', 'false', 'n', 'no', '0', '중지', 'x'].includes(text);
}

function parseScore_(value) {
  if (value === null || value === undefined || stringValue_(value) === '' || typeof value === 'boolean' || value instanceof Date) return null;
  if (typeof value === 'string' && value.trim().toLowerCase() === 'x') return null;
  const number = Number(value);
  return Number.isFinite(number) && number >= MIN_SCORE && number <= MAX_SCORE ? number : null;
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

  return makeStudentVisibleKey_(row);
}

function makeStudentVisibleKey_(row) {
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

function compareClassNamesForSort_(leftValue, rightValue) {
  const leftName = normalizeClassNameForSort_(leftValue);
  const rightName = normalizeClassNameForSort_(rightValue);
  const leftIndex = CLASS_SORT_ORDER.indexOf(leftName);
  const rightIndex = CLASS_SORT_ORDER.indexOf(rightName);
  const leftRank = leftIndex === -1 ? CLASS_SORT_ORDER.length : leftIndex;
  const rightRank = rightIndex === -1 ? CLASS_SORT_ORDER.length : rightIndex;

  if (leftRank !== rightRank) return leftRank - rightRank;
  if (leftIndex !== -1) return 0;
  return leftName.localeCompare(rightName, 'en', { numeric: true, sensitivity: 'base' });
}

function normalizeClassNameForSort_(value) {
  return stringValue_(value)
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]/g, '');
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

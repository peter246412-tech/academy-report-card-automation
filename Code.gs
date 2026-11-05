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
  {
    key: 'Listening',
    name: 'Listening,Speaking',
    scoreColumn: 'Listening,Speaking 점수',
    commentColumn: 'Listening Comment',
    commentAliases: ['Listening,Speaking Comment', 'Listening/Speaking Comment'],
  },
];

const RATING_COLUMNS = ['Vocabulary', 'Homework', 'Participation'];
const RATING_OPTIONS = ['Need Improvement', 'Good', 'Perfect'];
const GRAMMAR_GROUP_OPTIONS = ['A', 'B', 'C'];
const DAY_OPTIONS = ['월수', '화목', '금'];
const TIME_OPTIONS = ['2:00-3:30', '3:30-5:30', '3:30-5:00', '5:30-7:30'];
const GRADE_OPTIONS = ['1학년', '2학년', '3학년', '4학년', '5학년', '6학년'];
const SCORE_INPUT_ROW_HEIGHT = 26;
const DEFAULT_CLASS_NAMES = [
  'Starter1', 'Starter2', 'Starter3',
  'Beginner1', 'Beginner2', 'Beginner3',
  'Pre-inter1', 'Pre-inter2', 'Pre-inter3',
  'Inter1', 'Inter2', 'Inter3',
  'Advanced1', 'Advanced2', 'Advanced3',
  'Powerstation1', 'Powerstation2', 'Powerstation3',
];
const LEGACY_CLASS_NAME_MAP = {
  preinter4: 'Inter2',
};
const MIN_SCORE = 0;
const MAX_SCORE = 100;
const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/responses';
const OPENAI_API_KEY_PROPERTY = 'OPENAI_API_KEY';
const AI_COMMENT_SINGLE_RETRIES = 4;
const AI_COMMENT_RETRY_DELAY_MS = 2000;
const AI_COMMENT_JOB_PROPERTY = 'AI_COMMENT_POLISH_JOB';
const QUARTER_BACKUP_FOLDER_PROPERTY = 'QUARTER_BACKUP_FOLDER';
const QUARTER_RESET_OPERATION_PROPERTY = 'QUARTER_RESET_OPERATION';
const REPORT_TERM_CYCLE = [
  { month: 4, label: '1st Semester Midterm' },
  { month: 6, label: '1st Semester Finalterm' },
  { month: 10, label: '2nd Semester Midterm' },
  { month: 12, label: '2nd Semester Finalterm' },
];
const AI_COMMENT_INITIAL_RUN_MS = 240000;
const PDF_CONVERSION_ATTEMPTS = 3;
const PDF_CONVERSION_RETRY_DELAY_MS = 1200;
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
const STUDENT_CORE_HEADERS = ['요일', '시간', '반 이름', '학생 이름'];
const STUDENT_ROSTER_SYNC_HEADERS = [...STUDENT_ROSTER_VISIBLE_HEADERS, STUDENT_ID_HEADER];

const ACTIVE_CLASS_LIST_HEADER = '__활성반목록';
const GRAMMAR_GROUP_LIST_HEADER = '__Grammar그룹목록';
const CLASS_ID_HEADER = '__반ID';
const CLASS_PREVIOUS_NAME_HEADER = '__이전반이름';
const CLASS_SORT_HELPER_HEADER = '__반정렬순서';
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
  'inter1',
  'inter2',
  'inter3',
  'inter4',
  'advanced1',
  'advanced2',
  'advanced3',
  'advanced4',
  'powerstation1',
  'powerstation2',
  'powerstation3',
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
  '반 이름',
  '기본 Vocabulary 교재명',
  '기본 Writing/Grammar 교재명',
  '기본 Reading/Listening 교재명',
  '삭제',
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
  SpreadsheetApp.getUi()
    .createMenu(CONFIG.outputMenu)
    .addItem('선택 행 학생 PDF 생성', 'generateSelectedRowReports')
    .addItem('전체 학생 PDF 생성', 'generateAllReports')
    .addItem('시상 순위표 생성', 'generateAwardRankingSheet')
    .addSeparator()
    .addItem('신입생 추가', 'showNewStudentDialog')
    .addItem('퇴원생 삭제', 'deleteSelectedStudents')
    .addSeparator()
    .addItem('선택 행 AI 코멘트 다듬기', 'polishSelectedRowsComments')
    .addItem('전체 AI 코멘트 다듬기', 'polishAllComments')
    .addItem('AI API 키 저장', 'setOpenAiApiKey')
    .addSeparator()
    .addItem('분기 종료 성적표 초기화', 'finishQuarterAndReset')
    .addToUi();
}

function finishQuarterAndReset() {
  const ui = SpreadsheetApp.getUi();
  const ss = SpreadsheetApp.getActive();
  try {
    const properties = PropertiesService.getDocumentProperties();
    assertQuarterResetReady_(properties);
    const before = readQuarterWorkbook_(ss);
    const plan = buildQuarterResetPlan_(before);
    if (!plan.valueCount && !plan.noteCount) {
      ui.alert('초기화할 점수·코멘트·원문 노트가 없습니다. 학생과 설정은 변경하지 않았습니다.');
      return;
    }

    const savedFolder = properties.getProperty(QUARTER_BACKUP_FOLDER_PROPERTY);
    const folderResponse = ui.prompt('분기 백업 폴더 이름', [
      '저장할 Google Drive 폴더 이름을 입력하세요. 예: 학원 성적표 보관',
      '같은 이름의 폴더가 하나 있으면 사용하고, 없으면 최종 확인 후 내 드라이브에 자동으로 만듭니다.',
      savedFolder ? '등록된 위치를 다시 사용하려면 입력 없이 확인을 누르세요.' : '',
      '다른 폴더 이름을 입력하면 저장 위치를 변경합니다. 특정 폴더를 지정하려면 폴더 주소도 사용할 수 있습니다.',
    ].filter(Boolean).join('\n\n'), ui.ButtonSet.OK_CANCEL);
    if (folderResponse.getSelectedButton() !== ui.Button.OK) return;
    const enteredFolder = stringValue_(folderResponse.getResponseText());
    const folderInput = enteredFolder || savedFolder;
    const folder = getQuarterBackupFolder_(folderInput, false, !enteredFolder && Boolean(savedFolder));
    const folderDescription = folder
      ? `${folder.getName()}\n${folder.getUrl()}`
      : `${folderInput}\n내 드라이브에 새 폴더를 만듭니다.`;

    const nameResponse = ui.prompt('분기 보관본 이름',
      '마감할 분기를 입력하세요. 예: 2026년 4분기\n입력하지 않으면 현재 파일명과 저장 시각으로 보관합니다.',
      ui.ButtonSet.OK_CANCEL);
    if (nameResponse.getSelectedButton() !== ui.Button.OK) return;
    const label = stringValue_(nameResponse.getResponseText()) || ss.getName();
    const confirmation = ui.alert('분기 종료 성적표 초기화', [
      `보관 이름: ${label}`,
      `저장 폴더: ${folderDescription}`,
      `현재 시험: ${plan.term.current.label} (${plan.term.current.outputMonth})`,
      `다음 출력월: ${plan.term.next.outputMonth}\n다음 성적표 제목: ${plan.term.next.title}`,
      `대상: 점수·코멘트 ${plan.valueCount}칸, 해당 노트 ${plan.noteCount}칸`,
      '파일 전체 백업과 내용 검증이 완료된 뒤에만 점수·코멘트 및 해당 원문 노트를 비웁니다.',
      '초기화 후 출력월·성적표 제목만 다음 시험으로 변경합니다. PDF 저장폴더 등 나머지 설정과 학생 정보는 유지합니다.',
      'PDF 출력이 끝났는지 확인하세요. 다른 선생님의 입력과 AI/PDF 작업을 모두 멈춘 상태에서 실행하세요.',
      '백업 후 초기화를 진행할까요?',
    ].join('\n\n'), ui.ButtonSet.OK_CANCEL);
    if (confirmation !== ui.Button.OK) return;

    // UI prompts suspend execution, so locks are acquired only after confirmation.
    const result = executeQuarterReset_(ss, folder, label, quarterWorkbookSignature_(before), folderInput);
    ui.alert('분기 마감 완료', [
      '파일 전체를 백업하고 점수·코멘트만 초기화했습니다.',
      `보관본: ${result.name}\n${result.url}`,
      `다음 출력월: ${result.nextOutputMonth}\n성적표 제목: ${result.nextTitle}`,
      '학생·반·교재·평가·Grade·Grammar 평균그룹과 나머지 설정은 유지했습니다.',
      'PDF 저장폴더는 자동 변경하지 않았습니다. 새 시험 출력 전 필요에 따라 변경하세요.',
    ].join('\n\n'), ui.ButtonSet.OK);
  } catch (error) {
    ui.alert('분기 마감 안내', error.message || String(error), ui.ButtonSet.OK);
  }
}

function getQuarterBackupFolder_(input, createIfMissing = true, savedFolderId = false) {
  const text = stringValue_(input);
  const match = text.match(/^https:\/\/drive\.google\.com\/drive\/(?:u\/\d+\/)?folders\/([A-Za-z0-9_-]+)(?:[/?#]|$)/);
  const id = match ? match[1] : (savedFolderId && /^[A-Za-z0-9_-]{10,}$/.test(text) ? text : '');
  if (id) {
    const resourceKey = text.match(/[?&]resourcekey=([A-Za-z0-9_-]+)/i);
    const folder = resourceKey
      ? DriveApp.getFolderByIdAndResourceKey(id, resourceKey[1])
      : DriveApp.getFolderById(id);
    if (folder.isTrashed()) throw new Error('등록된 폴더가 휴지통에 있습니다. 새 폴더 이름을 입력하세요.');
    return folder;
  }
  if (!text || /[\\/]/.test(text) || /^[a-z]+:/i.test(text) || text === '.' || text === '..') {
    throw new Error('Google Drive 폴더 이름을 입력하세요. 파일 주소나 PC 경로는 사용할 수 없습니다.');
  }
  const folders = DriveApp.getFoldersByName(text);
  let found = null;
  while (folders.hasNext()) {
    const candidate = folders.next();
    if (candidate.isTrashed()) continue;
    if (found) throw new Error(`'${text}' 이름의 폴더가 여러 개 있습니다. 폴더 이름을 구분하거나 원하는 폴더 주소를 입력하세요. 초기화하지 않았습니다.`);
    found = candidate;
  }
  if (found) return found;
  return createIfMissing ? DriveApp.createFolder(text) : null;
}

function assertQuarterResetReady_(properties) {
  const raw = properties.getProperty(QUARTER_RESET_OPERATION_PROPERTY);
  if (!raw) return;
  const operation = JSON.parse(raw);
  if (operation.status === 'clearing' || operation.status === 'needs_recovery') {
    throw new Error([
      '이전 초기화가 완료되지 않았습니다. 추가 초기화를 중단합니다.',
      '아래 보관본을 열어 점수·코멘트를 먼저 확인하세요.',
      operation.url || '',
    ].join('\n'));
  }
}

function readQuarterWorkbook_(ss, template) {
  return ss.getSheets().map(sheet => {
    const previous = (template || []).find(item => item.name === sheet.getName());
    const rowCount = Math.max(sheet.getLastRow(), previous ? previous.rowCount : 1, 1);
    const columnCount = Math.max(sheet.getLastColumn(), previous ? previous.columnCount : 1, 1);
    const range = sheet.getRange(1, 1, rowCount, columnCount);
    return {
      name: sheet.getName(), rowCount, columnCount,
      maxRows: sheet.getMaxRows(), maxColumns: sheet.getMaxColumns(),
      values: range.getValues(), formulas: range.getFormulas(), notes: range.getNotes(),
    };
  });
}

function quarterWorkbookSignature_(snapshot) {
  return JSON.stringify(snapshot.map(sheet => ({
    name: sheet.name, rowCount: sheet.rowCount, columnCount: sheet.columnCount,
    maxRows: sheet.maxRows, maxColumns: sheet.maxColumns,
    cells: sheet.values.map((row, rowIndex) => row.map((value, columnIndex) => {
      const formula = sheet.formulas[rowIndex][columnIndex];
      if (formula) return ['formula', formula];
      if (Object.prototype.toString.call(value) === '[object Date]') return ['date', value.getTime()];
      return [typeof value, value];
    })),
    notes: sheet.notes,
  })));
}

function planNextReportTerm_(snapshot) {
  const sheet = snapshot.find(item => item.name === CONFIG.outputConfigSheet);
  if (!sheet || sheet.columnCount < 2) throw new Error('출력설정의 성적표 제목·출력월을 먼저 확인하세요. 초기화하지 않았습니다.');
  const changes = ['성적표 제목', '출력월'].map(key => {
    const matches = [];
    sheet.values.forEach((row, index) => {
      if (index > 0 && stringValue_(row[0]) === key) matches.push(index);
    });
    if (matches.length !== 1) throw new Error(`출력설정의 '${key}' 항목이 없거나 중복되어 초기화하지 않았습니다.`);
    const rowIndex = matches[0];
    if (sheet.formulas[rowIndex][1]) throw new Error(`출력설정의 '${key}' 값에 수식이 있어 초기화하지 않았습니다.`);
    return { key, rowIndex, columnIndex: 1, beforeValue: sheet.values[rowIndex][1] };
  });
  const outputMonth = changes.find(change => change.key === '출력월').beforeValue;
  const match = stringValue_(outputMonth).match(/^(\d{4})\s*년\s*(\d{1,2})\s*월$/);
  const year = match ? Number(match[1]) : 0;
  const month = match ? Number(match[2]) : 0;
  const index = REPORT_TERM_CYCLE.findIndex(term => term.month === month);
  if (year < 1000 || index === -1) {
    throw new Error('출력월은 "2026년 10월"처럼 연도와 4·6·10·12월 중 하나여야 합니다. 학생 성적과 설정은 초기화하지 않았습니다.');
  }
  const nextIndex = (index + 1) % REPORT_TERM_CYCLE.length;
  const nextYear = year + (nextIndex === 0 ? 1 : 0);
  if (nextYear > 9999) throw new Error('다음 시험 연도를 계산할 수 없어 초기화하지 않았습니다.');
  const nextTerm = REPORT_TERM_CYCLE[nextIndex];
  const next = {
    outputMonth: `${nextYear}년 ${nextTerm.month}월`,
    title: `English Achievement Report – ${nextTerm.label} ${nextYear}`,
  };
  changes.forEach(change => {
    change.afterValue = change.key === '출력월' ? next.outputMonth : next.title;
  });
  return {
    current: { outputMonth: `${year}년 ${month}월`, label: `${REPORT_TERM_CYCLE[index].label} ${year}` },
    next,
    changes,
  };
}

function buildQuarterResetPlan_(snapshot) {
  const sheet = snapshot.find(item => item.name === CONFIG.scoreSheet);
  if (!sheet) throw new Error(`'${CONFIG.scoreSheet}' 탭을 찾지 못했습니다.`);
  const headers = sheet.values[0].map(stringValue_);
  const commentKeys = new Set(SUBJECTS
    .reduce((all, subject) => all.concat(getSubjectCommentHeaders_(subject)), [])
    .map(normalizeCommentHeader_));
  DESIRED_SCORE_INPUT_HEADERS.forEach(header => {
    if (headers.filter(value => value === header).length !== 1) {
      throw new Error(`'${header}' 열이 없거나 중복되어 초기화하지 않았습니다. 열 구성을 먼저 확인하세요.`);
    }
  });
  const columns = [];
  headers.forEach((header, index) => {
    if (DESIRED_SCORE_INPUT_HEADERS.includes(header) || commentKeys.has(normalizeCommentHeader_(header))) {
      columns.push(index);
    }
  });
  let valueCount = 0;
  let noteCount = 0;
  columns.forEach(column => {
    for (let row = 1; row < sheet.rowCount; row += 1) {
      if (sheet.values[row][column] !== '' || sheet.formulas[row][column]) valueCount += 1;
      if (sheet.notes[row][column]) noteCount += 1;
    }
  });
  return { columns, valueCount, noteCount, rowCount: sheet.rowCount, term: planNextReportTerm_(snapshot) };
}

function clearedQuarterSnapshot_(snapshot, plan) {
  return snapshot.map(sheet => {
    if (sheet.name !== CONFIG.scoreSheet) return sheet;
    const targetColumns = new Set(plan.columns);
    const clearTargets = matrix => matrix.map((row, rowIndex) => row.map((value, column) => (
      rowIndex > 0 && targetColumns.has(column) ? '' : value
    )));
    return Object.assign({}, sheet, {
      values: clearTargets(sheet.values),
      formulas: clearTargets(sheet.formulas),
      notes: clearTargets(sheet.notes),
    });
  });
}

function quarterSnapshotWithTermValues_(snapshot, plan, mask) {
  return snapshot.map(sheet => {
    if (sheet.name !== CONFIG.outputConfigSheet) return sheet;
    const values = sheet.values.map(row => row.slice());
    plan.term.changes.forEach(change => {
      values[change.rowIndex][change.columnIndex] = mask ? '' : change.afterValue;
    });
    return Object.assign({}, sheet, { values });
  });
}

function completedQuarterSnapshot_(snapshot, plan) {
  return quarterSnapshotWithTermValues_(clearedQuarterSnapshot_(snapshot, plan), plan, false);
}

function restoreQuarterTargets_(ss, before, plan) {
  const current = readQuarterWorkbook_(ss, before);
  if (quarterWorkbookSignature_(quarterSnapshotWithTermValues_(clearedQuarterSnapshot_(before, plan), plan, true))
      !== quarterWorkbookSignature_(quarterSnapshotWithTermValues_(clearedQuarterSnapshot_(current, plan), plan, true))) {
    throw new Error('다른 입력 또는 행 변경이 감지되어 잘못된 행에 복원하지 않도록 자동 복원을 중단했습니다.');
  }
  const original = before.find(item => item.name === CONFIG.scoreSheet);
  const now = current.find(item => item.name === CONFIG.scoreSheet);
  plan.columns.forEach(column => {
    for (let row = 1; row < original.rowCount; row += 1) {
      const currentFormula = now.formulas[row][column];
      if ((currentFormula && currentFormula !== original.formulas[row][column])
          || (!currentFormula && now.values[row][column] !== '' && now.values[row][column] !== original.values[row][column])
          || (now.notes[row][column] && now.notes[row][column] !== original.notes[row][column])) {
        throw new Error('초기화 대상에 새로운 입력이 있어 덮어쓰지 않도록 자동 복원을 중단했습니다.');
      }
    }
  });
  const currentSettings = current.find(item => item.name === CONFIG.outputConfigSheet);
  plan.term.changes.forEach(change => {
    const value = currentSettings.values[change.rowIndex][change.columnIndex];
    if (value !== change.beforeValue && value !== change.afterValue) {
      throw new Error('출력설정에 새로운 입력이 있어 덮어쓰지 않도록 자동 복원을 중단했습니다.');
    }
  });
  const settingsSheet = ss.getSheetByName(CONFIG.outputConfigSheet);
  plan.term.changes.forEach(change => {
    if (currentSettings.values[change.rowIndex][change.columnIndex] === change.beforeValue) return;
    const value = change.beforeValue;
    settingsSheet.getRange(change.rowIndex + 1, change.columnIndex + 1, 1, 1)
      .setValues([[typeof value === 'string' && value.indexOf('=') === 0 ? `'${value}` : value]]);
  });
  const sheet = ss.getSheetByName(CONFIG.scoreSheet);
  plan.columns.forEach(column => {
    const range = sheet.getRange(2, column + 1, original.rowCount - 1, 1);
    range.setValues(original.values.slice(1).map((row, index) => {
      const formula = original.formulas[index + 1][column];
      if (formula) return [formula];
      const value = row[column];
      return [typeof value === 'string' && value.indexOf('=') === 0 ? `'${value}` : value];
    }));
    range.setNotes(original.notes.slice(1).map(row => [row[column]]));
  });
  SpreadsheetApp.flush();
  if (quarterWorkbookSignature_(readQuarterWorkbook_(ss, before)) !== quarterWorkbookSignature_(before)) {
    throw new Error('복원 후 데이터 검증에 실패했습니다. 보관본을 확인하세요.');
  }
}

function executeQuarterReset_(ss, folder, label, expectedSignature, folderInput) {
  const scriptLock = LockService.getScriptLock();
  if (!scriptLock.tryLock(1000)) throw new Error('AI 코멘트 등 다른 작업이 실행 중입니다. 작업이 끝난 뒤 다시 실행하세요.');
  const documentLock = LockService.getDocumentLock();
  let documentLocked = false;
  let backupFile = null;
  let before = null;
  let plan = null;
  let clearingStarted = false;
  let aiJob = null;
  let aiJobRemoved = false;
  let operation = null;
  const properties = PropertiesService.getDocumentProperties();
  const scriptProperties = PropertiesService.getScriptProperties();
  try {
    if (documentLock) {
      documentLocked = documentLock.tryLock(1000);
      if (!documentLocked) throw new Error('학생·반 관리 작업이 실행 중입니다. 끝난 뒤 다시 실행하세요.');
    }
    assertQuarterResetReady_(properties);
    SpreadsheetApp.flush();
    before = readQuarterWorkbook_(ss);
    if (quarterWorkbookSignature_(before) !== expectedSignature) {
      throw new Error('확인창을 연 뒤 입력값이 바뀌어 초기화하지 않았습니다. 모든 입력을 멈추고 다시 실행하세요.');
    }
    plan = buildQuarterResetPlan_(before);
    if (!plan.valueCount && !plan.noteCount) throw new Error('이미 초기화되어 있거나 초기화할 내용이 없습니다.');
    const sheet = ss.getSheetByName(CONFIG.scoreSheet);
    plan.columns.forEach(column => {
      const range = sheet.getRange(2, column + 1, plan.rowCount - 1, 1);
      if (!range.canEdit() || range.isPartOfMerge()) {
        throw new Error('점수·코멘트에 편집 권한이 없거나 병합된 셀이 있어 초기화하지 않았습니다.');
      }
    });
    const settingsSheet = ss.getSheetByName(CONFIG.outputConfigSheet);
    plan.term.changes.forEach(change => {
      const range = settingsSheet.getRange(change.rowIndex + 1, change.columnIndex + 1, 1, 1);
      if (!range.canEdit() || range.isPartOfMerge()) {
        throw new Error('출력월·성적표 제목 셀에 편집 권한이 없거나 병합되어 있어 초기화하지 않았습니다.');
      }
    });
    aiJob = scriptProperties.getProperty(AI_COMMENT_JOB_PROPERTY);
    // Resolve new names under the locks; cancelling the dialogs never creates a folder.
    if (!folder) folder = getQuarterBackupFolder_(folderInput);
    const folderReference = /[?&]resourcekey=/i.test(stringValue_(folderInput)) ? folderInput : folder.getUrl();
    properties.setProperty(QUARTER_BACKUP_FOLDER_PROPERTY, folderReference);
    const timestamp = Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), 'yyyyMMdd_HHmmss');
    const name = sanitizeFileName_(`${label}_분기마감_${timestamp}`);
    backupFile = DriveApp.getFileById(ss.getId()).makeCopy(name, folder);
    if (backupFile.getId() === ss.getId() || backupFile.isTrashed()) throw new Error('보관본 파일을 확인하지 못했습니다.');
    const parents = backupFile.getParents();
    let correctFolder = false;
    while (parents.hasNext()) {
      if (parents.next().getId() === folder.getId()) correctFolder = true;
    }
    if (!correctFolder) throw new Error('보관본이 지정한 폴더에 저장되지 않아 초기화를 중단했습니다.');
    const backup = SpreadsheetApp.openById(backupFile.getId());
    if (quarterWorkbookSignature_(readQuarterWorkbook_(backup, before)) !== expectedSignature) {
      throw new Error('보관본의 학생별 값·수식·노트가 원본과 일치하지 않아 초기화하지 않았습니다.');
    }
    if (quarterWorkbookSignature_(readQuarterWorkbook_(ss, before)) !== expectedSignature
        || scriptProperties.getProperty(AI_COMMENT_JOB_PROPERTY) !== aiJob) {
      throw new Error('백업 도중 다른 입력 또는 AI 작업이 감지되어 초기화하지 않았습니다.');
    }
    operation = { status: 'clearing', name, url: backupFile.getUrl(), backupId: backupFile.getId() };
    properties.setProperty(QUARTER_RESET_OPERATION_PROPERTY, JSON.stringify(operation));
    clearingStarted = true;
    plan.columns.forEach(column => {
      const range = sheet.getRange(2, column + 1, plan.rowCount - 1, 1);
      range.clearContent();
      range.clearNote();
    });
    SpreadsheetApp.flush();
    if (quarterWorkbookSignature_(readQuarterWorkbook_(ss, before))
        !== quarterWorkbookSignature_(clearedQuarterSnapshot_(before, plan))) {
      throw new Error('초기화 후 데이터 검증에 실패했습니다.');
    }
    plan.term.changes.forEach(change => {
      settingsSheet.getRange(change.rowIndex + 1, change.columnIndex + 1, 1, 1)
        .setValues([[change.afterValue]]);
    });
    SpreadsheetApp.flush();
    if (quarterWorkbookSignature_(readQuarterWorkbook_(ss, before))
        !== quarterWorkbookSignature_(completedQuarterSnapshot_(before, plan))) {
      throw new Error('다음 시험 출력설정 검증에 실패했습니다.');
    }
    if (scriptProperties.getProperty(AI_COMMENT_JOB_PROPERTY) !== aiJob) {
      throw new Error('초기화 도중 AI 작업이 시작되어 작업을 중단합니다.');
    }
    if (aiJob) {
      const state = JSON.parse(aiJob);
      if (state.spreadsheetId === ss.getId() && state.sheetName === CONFIG.scoreSheet) {
        scriptProperties.deleteProperty(AI_COMMENT_JOB_PROPERTY);
        aiJobRemoved = true;
      }
    }
    operation.status = 'completed';
    properties.setProperty(QUARTER_RESET_OPERATION_PROPERTY, JSON.stringify(operation));
    return { name, url: operation.url, nextOutputMonth: plan.term.next.outputMonth, nextTitle: plan.term.next.title };
  } catch (error) {
    let recovery = '점수·코멘트 초기화 전 중단했습니다.';
    if (clearingStarted) {
      try {
        restoreQuarterTargets_(ss, before, plan);
        if (aiJobRemoved) scriptProperties.setProperty(AI_COMMENT_JOB_PROPERTY, aiJob);
        operation.status = 'restored';
        properties.setProperty(QUARTER_RESET_OPERATION_PROPERTY, JSON.stringify(operation));
        recovery = '초기화 중 오류가 발생하여 점수·코멘트·출력설정을 초기화 전 상태로 자동 복원했습니다.';
      } catch (restoreError) {
        operation.status = 'needs_recovery';
        try {
          properties.setProperty(QUARTER_RESET_OPERATION_PROPERTY, JSON.stringify(operation));
        } catch (ignored) {
          console.error(ignored);
        }
        recovery = `자동 복원을 완료하지 못했습니다. 더 이상 초기화하지 말고 보관본을 확인하세요.\n${restoreError.message}`;
      }
    }
    throw new Error([error.message || String(error), recovery,
      backupFile ? `보관본: ${backupFile.getUrl()}` : '보관본을 만들지 못한 경우 원본을 초기화하지 않습니다.',
    ].join('\n\n'));
  } finally {
    if (documentLocked) documentLock.releaseLock();
    scriptLock.releaseLock();
  }
}

function setupDurableReportSystem() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName(CONFIG.scoreSheet);
  if (!sheet) throw new Error(`'${CONFIG.scoreSheet}' 탭을 찾지 못했습니다.`);

  const lock = LockService.getDocumentLock() || LockService.getScriptLock();
  if (!lock.tryLock(30000)) throw new Error('다른 작업이 진행 중입니다. 잠시 후 다시 실행하세요.');

  try {
    renameLegacyHeaders_(sheet);
    clearLegacyManagedValidations_(sheet);
    normalizeScoreClassNamesToDefaults_(sheet);
    assertScoreClassesSupported_(sheet);
    const before = collectProtectedDataFingerprint_(sheet);
    deleteColumnsByHeader_(sheet, [ENROLLMENT_STATUS_HEADER, '상태', '출력여부']);
    ensureRequiredHeaders_(sheet, DESIRED_INPUT_HEADERS);
    reorderInputColumns_(sheet, DESIRED_INPUT_HEADERS);
    ensureStudentIdColumns_(ss);
    normalizeScheduleValues_(sheet);
    ensureDurableClassSettings_(ss, sheet, true);
    applyDurableDropdowns_(ss, sheet);
    removeTrulyBlankDataRows_(sheet);
    sortScoreRowsByClassOrder_(sheet);
    normalizeClassSpacerRows_(sheet);
    formatScoreInputSheet_(sheet);
    formatClassSettingsSheet_(ss.getSheetByName(CONFIG.classConfigSheet));
    ensureOutputSettings_(ss);
    formatOutputSettingsSheet_(ss.getSheetByName(CONFIG.outputConfigSheet));

    SpreadsheetApp.flush();
    const after = collectProtectedDataFingerprint_(sheet, Object.keys(before.columns));
    assertProtectedDataUnchanged_(before, after);
    deleteLegacySheets_(ss);
    PropertiesService.getDocumentProperties().setProperty('DURABLE_REPORT_SCHEMA', '1');
    ss.toast(
      `초기 설정 완료 · 학생 ${after.studentCount}명 · 기존 점수와 코멘트 보존 확인`,
      '성적표 프로그램',
      8
    );
    return { studentCount: after.studentCount, protectedColumns: Object.keys(after.columns) };
  } finally {
    lock.releaseLock();
  }
}

function ensureReportColumns() {
  return setupDurableReportSystem();
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
    handleClassSettingsEdit_(e);
    return;
  }

  if (sheet.getName() === CONFIG.scoreSheet && e.range.getRow() > 1) {
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
    const editedHeaders = headers
      .slice(e.range.getColumn() - 1, e.range.getColumn() - 1 + e.range.getNumColumns())
      .filter(Boolean);
    const studentIdentityChanged = editedHeaders.includes('학생 이름')
      || editedHeaders.includes('반 이름');
    if (studentIdentityChanged) {
      assignMissingStudentIds_(sheet);
    }
    if (studentIdentityChanged) {
      moveEditedStudentsToClassEnd_(sheet, e.range.getRow(), e.range.getNumRows());
    }
    if (studentIdentityChanged) applyClassGroupStyling_(sheet);
  }
}

function ensureRequiredHeaders_(sheet, requiredHeaders) {
  const existing = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1))
    .getValues()[0]
    .map(stringValue_);
  const missing = requiredHeaders.filter(header => !existing.includes(header));
  if (!missing.length) return [];

  const startColumn = sheet.getLastColumn() + 1;
  sheet.getRange(1, startColumn, 1, missing.length).setValues([missing]);
  return missing;
}

function deleteColumnsByHeader_(sheet, headersToDelete) {
  if (!sheet || !sheet.getLastColumn()) return [];
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const targets = headersToDelete.map(header => ({ header, column: headers.indexOf(header) + 1 }))
    .filter(target => target.column)
    .sort((left, right) => right.column - left.column);
  targets.forEach(target => sheet.deleteColumn(target.column));
  return targets.map(target => target.header);
}

function collectProtectedDataFingerprint_(sheet, headersToCheck) {
  const values = sheet.getDataRange().getValues();
  const headers = values.length ? values[0].map(stringValue_) : [];
  const nameIndex = headers.indexOf('학생 이름');
  const protectedHeaders = headersToCheck || headers.filter(header => (
    header === '학생 이름'
      || header === '반 이름'
      || DESIRED_SCORE_INPUT_HEADERS.includes(header)
      || RATING_COLUMNS.includes(header)
      || CLASS_DEFAULT_SCORE_HEADERS.includes(header)
      || header === 'Grammar 평균그룹'
      || header === 'Grade'
      || /comment/i.test(header)
  ));
  const studentRows = values.slice(1).filter(row => (
    nameIndex !== -1 && stringValue_(row[nameIndex])
  ));
  const columns = {};

  protectedHeaders.forEach(header => {
    const index = headers.indexOf(header);
    if (index === -1) return;
    const payload = JSON.stringify(studentRows.map(row => row[index]));
    const digest = Utilities.computeDigest(
      Utilities.DigestAlgorithm.SHA_256,
      payload,
      Utilities.Charset.UTF_8
    );
    columns[header] = Utilities.base64Encode(digest);
  });

  return { studentCount: studentRows.length, columns };
}

function assertProtectedDataUnchanged_(before, after) {
  if (before.studentCount !== after.studentCount) {
    throw new Error(`학생 수 보존 검사 실패: ${before.studentCount}명 → ${after.studentCount}명`);
  }
  Object.keys(before.columns).forEach(header => {
    if (before.columns[header] !== after.columns[header]) {
      throw new Error(`기존 데이터 보존 검사 실패: '${header}' 값이 변경되었습니다.`);
    }
  });
}

function normalizeScheduleValues_(sheet) {
  if (!sheet || sheet.getLastRow() < 2) return;
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const dayColumn = headers.indexOf('요일') + 1;
  const timeColumn = headers.indexOf('시간') + 1;
  const rowCount = sheet.getLastRow() - 1;

  if (dayColumn) {
    const range = sheet.getRange(2, dayColumn, rowCount, 1);
    const values = range.getValues().map(row => {
      const normalized = stringValue_(row[0]).replace(/[·.\s]/g, '');
      if (normalized === '월수') return ['월수'];
      if (normalized === '화목') return ['화목'];
      if (normalized === '금') return ['금'];
      return [row[0]];
    });
    range.setValues(values);
  }

  if (timeColumn) {
    const range = sheet.getRange(2, timeColumn, rowCount, 1);
    const values = range.getValues().map(row => {
      const normalized = stringValue_(row[0])
        .replace(/[–—−]/g, '-')
        .replace(/\s+/g, '');
      return [TIME_OPTIONS.includes(normalized) ? normalized : row[0]];
    });
    range.setValues(values);
  }
}

function normalizeScoreClassNamesToDefaults_(sheet) {
  if (!sheet || sheet.getLastRow() < 2) return 0;
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const classColumn = headers.indexOf('반 이름') + 1;
  const nameColumn = headers.indexOf('학생 이름') + 1;
  if (!classColumn || !nameColumn) return 0;

  const canonicalByKey = {};
  DEFAULT_CLASS_NAMES.forEach(className => {
    canonicalByKey[normalizeClassNameForSort_(className)] = className;
  });
  const rowCount = sheet.getLastRow() - 1;
  const classRange = sheet.getRange(2, classColumn, rowCount, 1);
  const classValues = classRange.getValues();
  const nameValues = sheet.getRange(2, nameColumn, rowCount, 1).getValues();
  let changedCount = 0;
  classValues.forEach((row, index) => {
    if (!stringValue_(nameValues[index][0])) return;
    const current = stringValue_(row[0]);
    const normalized = normalizeClassNameForSort_(current);
    const canonical = LEGACY_CLASS_NAME_MAP[normalized] || canonicalByKey[normalized];
    if (!canonical || current === canonical) return;
    row[0] = canonical;
    changedCount += 1;
  });
  if (changedCount) classRange.setValues(classValues);
  return changedCount;
}

function clearLegacyManagedValidations_(sheet) {
  if (!sheet || sheet.getLastRow() < 2 || sheet.getLastColumn() < 1) return [];

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const managedHeaders = [
    '요일',
    '시간',
    '반 이름',
    'Grade',
    'Grammar 평균그룹',
    ...RATING_COLUMNS,
  ];
  const cleared = [];
  const rowCount = sheet.getLastRow() - 1;

  managedHeaders.forEach(header => {
    const columnIndex = headers.indexOf(header) + 1;
    if (!columnIndex) return;
    sheet.getRange(2, columnIndex, rowCount, 1).clearDataValidations();
    cleared.push(header);
  });

  return cleared;
}

function assertScoreClassesSupported_(sheet) {
  if (!sheet || sheet.getLastRow() < 2) return;
  const allowed = new Set(DEFAULT_CLASS_NAMES.map(normalizeClassNameForSort_));
  const unknown = mergeUniqueValues_(
    readObjects_(sheet, CONFIG.scoreSheet)
      .filter(row => stringValue_(row['학생 이름']))
      .map(row => stringValue_(row['반 이름']))
  )
    .filter(className => !allowed.has(normalizeClassNameForSort_(className)));
  if (unknown.length) {
    throw new Error([
      '기본 18개 반 목록에 없는 반이 성적입력에 남아 있습니다.',
      unknown.join(', '),
      '해당 학생의 반을 확인한 뒤 setupDurableReportSystem을 다시 실행하세요.',
    ].join('\n'));
  }
}

function removeTrulyBlankDataRows_(sheet) {
  if (!sheet || sheet.getLastRow() < 2) return 0;
  const rowCount = sheet.getLastRow() - 1;
  const range = sheet.getRange(2, 1, rowCount, sheet.getLastColumn());
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const values = range.getValues();
  const formulas = range.getFormulas();
  const notes = range.getNotes();
  const rowsToDelete = [];

  values.forEach((row, index) => {
    const hasContent = row.some((value, column) => {
      const header = headers[column];
      if (header === STUDENT_ID_HEADER || header.indexOf('__') === 0) return false;
      return stringValue_(value)
        || stringValue_(formulas[index][column])
        || stringValue_(notes[index][column]);
    });
    if (!hasContent) rowsToDelete.push(index + 2);
  });
  rowsToDelete.sort((left, right) => right - left).forEach(row => sheet.deleteRow(row));
  return rowsToDelete.length;
}

function deleteLegacySheets_(ss) {
  ['점수', '학생명단'].forEach(sheetName => {
    const sheet = ss.getSheetByName(sheetName);
    if (sheet && sheet.getName() !== CONFIG.scoreSheet) ss.deleteSheet(sheet);
  });
}

function ensureDurableClassSettings_(ss, scoreSheet, resetToDefaults) {
  let sheet = ss.getSheetByName(CONFIG.classConfigSheet);
  if (!sheet) sheet = ss.insertSheet(CONFIG.classConfigSheet);

  const lastColumn = Math.max(sheet.getLastColumn(), 1);
  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0].map(stringValue_);
  const values = sheet.getLastRow() >= 2
    ? sheet.getRange(2, 1, sheet.getLastRow() - 1, lastColumn).getValues()
    : [];
  const hasDurableSchema = DEFAULT_CLASS_HEADERS.every((header, index) => headers[index] === header);
  if (!resetToDefaults && hasDurableSchema && values.some(row => stringValue_(row[0]))) {
    const idColumn = ensureHeaderColumn_(sheet, CLASS_ID_HEADER);
    const previousColumn = ensureHeaderColumn_(sheet, CLASS_PREVIOUS_NAME_HEADER);
    ensureRowExists_(sheet, 21);
    sheet.getRange(2, 5, sheet.getMaxRows() - 1, 1).insertCheckboxes();
    const rows = readDurableClassRows_(sheet);
    rows.forEach(row => {
      if (!row.id) sheet.getRange(row.rowNumber, idColumn).setValue(`CLASS-${Utilities.getUuid()}`);
      if (!row.previousName) sheet.getRange(row.rowNumber, previousColumn).setValue(row.name);
    });
    sheet.hideColumns(idColumn);
    sheet.hideColumns(previousColumn);
    refreshDurableClassDropdown_(ss, scoreSheet);
    formatClassSettingsSheet_(sheet, rows.length);
    return readDurableClassRows_(sheet);
  }

  const classIndex = headers.indexOf('반 이름');
  const useIndex = headers.indexOf('사용여부');
  const deleteIndex = headers.indexOf('삭제');
  const defaultIndexes = DEFAULT_CLASS_HEADERS.slice(1, 4).map(header => headers.indexOf(header));
  const idIndex = headers.indexOf(CLASS_ID_HEADER);
  const classesByKey = {};
  const scoreHeaders = scoreSheet && scoreSheet.getLastColumn()
    ? scoreSheet.getRange(1, 1, 1, scoreSheet.getLastColumn()).getValues()[0].map(stringValue_)
    : [];
  const scoreClassNames = scoreSheet
    ? collectUniqueColumnValues_(scoreSheet, scoreHeaders, '반 이름')
    : [];
  const usedClassKeys = new Set(scoreClassNames.map(normalizeClassNameForSort_));

  values.forEach(row => {
    const className = stringValue_(row[classIndex === -1 ? 0 : classIndex]);
    if (!className) return;
    const key = normalizeClassNameForSort_(className);
    if (useIndex !== -1 && !isActiveConfigRow_(row[useIndex]) && !usedClassKeys.has(key)) return;
    if (deleteIndex !== -1 && row[deleteIndex] === true) return;
    if (!key || classesByKey[key]) return;
    classesByKey[key] = {
      name: className,
      defaults: defaultIndexes.map(index => index === -1 ? '' : row[index]),
      id: idIndex === -1 ? '' : stringValue_(row[idIndex]),
    };
  });

  const classes = DEFAULT_CLASS_NAMES.map(className => {
    const existing = classesByKey[normalizeClassNameForSort_(className)];
    return {
      name: className,
      defaults: existing ? existing.defaults : ['', '', ''],
      id: existing ? existing.id : '',
    };
  });
  ensureRowExists_(sheet, Math.max(classes.length + 1, 21));
  const clearRows = Math.max(sheet.getMaxRows() - 1, 1);
  sheet.getRange(1, 1, 1, DEFAULT_CLASS_HEADERS.length).setValues([DEFAULT_CLASS_HEADERS]);
  sheet.getRange(2, 1, clearRows, DEFAULT_CLASS_HEADERS.length).clearContent().clearDataValidations();
  sheet.getRange(2, 5, clearRows, 1).insertCheckboxes();
  if (classes.length) {
    sheet.getRange(2, 1, classes.length, DEFAULT_CLASS_HEADERS.length).setValues(
      classes.map(item => [item.name, ...item.defaults, false])
    );
  }

  const idColumn = ensureHeaderColumn_(sheet, CLASS_ID_HEADER);
  const previousColumn = ensureHeaderColumn_(sheet, CLASS_PREVIOUS_NAME_HEADER);
  sheet.getRange(2, idColumn, clearRows, 1).clearContent();
  sheet.getRange(2, previousColumn, clearRows, 1).clearContent();
  if (classes.length) {
    sheet.getRange(2, idColumn, classes.length, 1)
      .setValues(classes.map(item => [item.id || `CLASS-${Utilities.getUuid()}`]));
    sheet.getRange(2, previousColumn, classes.length, 1)
      .setValues(classes.map(item => [item.name]));
  }
  sheet.hideColumns(idColumn);
  sheet.hideColumns(previousColumn);
  refreshDurableClassDropdown_(ss, scoreSheet);
  formatClassSettingsSheet_(sheet, classes.length);
  return classes;
}

function readDurableClassRows_(sheet) {
  if (!sheet || sheet.getLastRow() < 2) return [];
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();
  return values.map((row, index) => ({
    rowNumber: index + 2,
    name: stringValue_(row[headers.indexOf('반 이름')]),
    vocabularyBook: row[headers.indexOf('기본 Vocabulary 교재명')],
    writingGrammarBook: row[headers.indexOf('기본 Writing/Grammar 교재명')],
    readingListeningBook: row[headers.indexOf('기본 Reading/Listening 교재명')],
    deleteRequested: row[headers.indexOf('삭제')] === true,
    id: stringValue_(row[headers.indexOf(CLASS_ID_HEADER)]),
    previousName: stringValue_(row[headers.indexOf(CLASS_PREVIOUS_NAME_HEADER)]),
  })).filter(row => row.name || row.previousName || row.deleteRequested);
}

function refreshDurableClassDropdown_(ss, scoreSheet) {
  const classSheet = ss.getSheetByName(CONFIG.classConfigSheet);
  if (!classSheet || !scoreSheet) return [];
  const classNames = readDurableClassRows_(classSheet)
    .filter(row => row.name && !row.deleteRequested)
    .map(row => row.name)
    .sort(compareClassNamesForSort_);
  if (!classNames.length) return [];
  const sourceRange = writeClassConfigHelperList_(classSheet, ACTIVE_CLASS_LIST_HEADER, classNames);
  const headers = scoreSheet.getRange(1, 1, 1, scoreSheet.getLastColumn()).getValues()[0].map(stringValue_);
  replaceDropdownValidationForColumn_(scoreSheet, headers, '반 이름', classNames, sourceRange);
  return classNames;
}

function applyDurableDropdowns_(ss, sheet) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  replaceDropdownValidationForColumn_(sheet, headers, '요일', DAY_OPTIONS);
  replaceDropdownValidationForColumn_(sheet, headers, '시간', TIME_OPTIONS);
  RATING_COLUMNS.forEach(header => (
    replaceDropdownValidationForColumn_(sheet, headers, header, RATING_OPTIONS)
  ));
  replaceDropdownValidationForColumn_(sheet, headers, 'Grade', GRADE_OPTIONS);

  const classSheet = ss.getSheetByName(CONFIG.classConfigSheet);
  const grammarGroups = buildGrammarGroupOptions_(sheet);
  const grammarRange = classSheet
    ? writeClassConfigHelperList_(classSheet, GRAMMAR_GROUP_LIST_HEADER, grammarGroups)
    : null;
  replaceDropdownValidationForColumn_(
    sheet,
    headers,
    'Grammar 평균그룹',
    grammarGroups,
    grammarRange
  );
  refreshDurableClassDropdown_(ss, sheet);
}

function handleClassSettingsEdit_(e) {
  const sheet = e.range.getSheet();
  const ss = sheet.getParent();
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
  if (!scoreSheet) return;
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const visibleHeaders = headers.slice(
    e.range.getColumn() - 1,
    e.range.getColumn() - 1 + e.range.getNumColumns()
  );
  if (!visibleHeaders.some(header => DEFAULT_CLASS_HEADERS.includes(header))) return;

  const lock = LockService.getDocumentLock() || LockService.getScriptLock();
  if (!lock.tryLock(5000)) {
    ss.toast('다른 반 관리 작업이 진행 중입니다. 잠시 후 다시 수정하세요.', '반별설정', 6);
    return;
  }

  try {
    ensureHeaderColumn_(sheet, CLASS_ID_HEADER);
    ensureHeaderColumn_(sheet, CLASS_PREVIOUS_NAME_HEADER);
    const refreshedHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
    const classColumn = refreshedHeaders.indexOf('반 이름') + 1;
    const deleteColumn = refreshedHeaders.indexOf('삭제') + 1;
    const idColumn = refreshedHeaders.indexOf(CLASS_ID_HEADER) + 1;
    const previousColumn = refreshedHeaders.indexOf(CLASS_PREVIOUS_NAME_HEADER) + 1;
    const firstRow = Math.max(2, e.range.getRow());
    const lastRow = e.range.getLastRow();

    for (let rowNumber = lastRow; rowNumber >= firstRow; rowNumber -= 1) {
      let className = stringValue_(sheet.getRange(rowNumber, classColumn).getValue());
      const previousName = stringValue_(sheet.getRange(rowNumber, previousColumn).getValue());
      const deleteRequested = sheet.getRange(rowNumber, deleteColumn).getValue() === true;
      if (!sheet.getRange(rowNumber, idColumn).getValue() && className) {
        sheet.getRange(rowNumber, idColumn).setValue(`CLASS-${Utilities.getUuid()}`);
      }

      if (deleteRequested) {
        const studentCount = countStudentsInClass_(scoreSheet, className)
          + (normalizeClassNameForSort_(previousName) !== normalizeClassNameForSort_(className)
            ? countStudentsInClass_(scoreSheet, previousName) : 0);
        if (studentCount) {
          sheet.getRange(rowNumber, deleteColumn).setValue(false);
          ss.toast(`'${className || previousName}' 반 학생 ${studentCount}명이 있어 삭제할 수 없습니다.`, '반 삭제 중단', 8);
        } else {
          sheet.deleteRow(rowNumber);
          continue;
        }
      }

      if (!className && previousName) {
        if (countStudentsInClass_(scoreSheet, previousName)) {
          sheet.getRange(rowNumber, classColumn).setValue(previousName);
          ss.toast('학생이 있는 반은 이름을 비울 수 없습니다.', '반 이름 복구', 7);
          className = previousName;
        }
      }
      if (!className) continue;

      const duplicate = readDurableClassRows_(sheet).some(row => (
        row.rowNumber !== rowNumber
          && normalizeClassNameForSort_(row.name) === normalizeClassNameForSort_(className)
      ));
      if (duplicate) {
        sheet.getRange(rowNumber, classColumn).setValue(previousName || '');
        ss.toast(`'${className}' 반이 이미 있어 변경을 취소했습니다.`, '중복 반 이름', 7);
        continue;
      }

      if (previousName && previousName !== className) {
        const scoreClassColumn = findHeaderColumn_(scoreSheet, '반 이름');
        const scoreClassRange = scoreClassColumn && scoreSheet.getLastRow() > 1
          ? scoreSheet.getRange(2, scoreClassColumn, scoreSheet.getLastRow() - 1, 1)
          : null;
        const previousClasses = scoreClassRange ? scoreClassRange.getValues() : null;
        try {
          refreshDurableClassDropdown_(ss, scoreSheet);
          replaceScoreClassName_(scoreSheet, normalizeClassNameForSort_(previousName), className);
        } catch (error) {
          sheet.getRange(rowNumber, classColumn).setValue(previousName);
          refreshDurableClassDropdown_(ss, scoreSheet);
          if (scoreClassRange) scoreClassRange.setValues(previousClasses);
          throw error;
        }
      }
      sheet.getRange(rowNumber, previousColumn).setValue(className);
    }

    refreshDurableClassDropdown_(ss, scoreSheet);
    sortScoreRowsByClassOrder_(scoreSheet);
    normalizeClassSpacerRows_(scoreSheet);
    applyClassGroupStyling_(scoreSheet);
    formatClassSettingsSheet_(sheet, readDurableClassRows_(sheet).length);
  } finally {
    lock.releaseLock();
  }
}

function countStudentsInClass_(sheet, className) {
  if (!sheet || !className || sheet.getLastRow() < 2) return 0;
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const classColumn = headers.indexOf('반 이름') + 1;
  const nameColumn = headers.indexOf('학생 이름') + 1;
  if (!classColumn || !nameColumn) return 0;
  const rowCount = sheet.getLastRow() - 1;
  const classes = sheet.getRange(2, classColumn, rowCount, 1).getValues();
  const names = sheet.getRange(2, nameColumn, rowCount, 1).getValues();
  const key = normalizeClassNameForSort_(className);
  return names.reduce((count, row, index) => (
    count + (stringValue_(row[0]) && normalizeClassNameForSort_(classes[index][0]) === key ? 1 : 0)
  ), 0);
}

function moveEditedStudentsToClassEnd_(sheet, startRow, rowCount) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const idColumn = headers.indexOf(STUDENT_ID_HEADER) + 1;
  const nameColumn = headers.indexOf('학생 이름') + 1;
  if (!idColumn || !nameColumn) return;
  const firstRow = Math.max(2, startRow);
  const lastRow = Math.min(sheet.getLastRow(), startRow + rowCount - 1);
  const values = sheet.getRange(firstRow, 1, lastRow - firstRow + 1, sheet.getLastColumn()).getValues();
  const ids = values.filter(row => stringValue_(row[nameColumn - 1]))
    .map(row => stringValue_(row[idColumn - 1]))
    .filter(Boolean);
  if (!ids.length) return;

  const lock = LockService.getDocumentLock() || LockService.getScriptLock();
  if (!lock.tryLock(5000)) {
    sheet.getParent().toast('행 이동이 진행 중입니다. 잠시 후 반을 다시 선택하세요.', '학생 이동', 6);
    return;
  }
  try {
    ids.forEach(id => moveStudentToClassEndById_(sheet, id));
    sortScoreRowsByClassOrder_(sheet);
    normalizeClassSpacerRows_(sheet);
  } finally {
    lock.releaseLock();
  }
}

function moveStudentToClassEndById_(sheet, studentId) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const idColumn = headers.indexOf(STUDENT_ID_HEADER) + 1;
  const classColumn = headers.indexOf('반 이름') + 1;
  const nameColumn = headers.indexOf('학생 이름') + 1;
  const rowNumber = findStudentRowById_(sheet, idColumn, studentId);
  if (!rowNumber) return false;
  const className = stringValue_(sheet.getRange(rowNumber, classColumn).getValue());
  if (!className) return false;

  const rowCount = sheet.getLastRow() - 1;
  const classes = sheet.getRange(2, classColumn, rowCount, 1).getValues();
  const names = sheet.getRange(2, nameColumn, rowCount, 1).getValues();
  const targetRows = [];
  classes.forEach((row, index) => {
    const candidateRow = index + 2;
    if (candidateRow === rowNumber || !stringValue_(names[index][0])) return;
    if (normalizeClassNameForSort_(row[0]) === normalizeClassNameForSort_(className)) {
      targetRows.push(candidateRow);
    }
  });
  if (!targetRows.length) return false;
  const targetRow = Math.max(...targetRows);
  if (targetRow + 1 === rowNumber) return false;
  sheet.moveRows(sheet.getRange(rowNumber, 1, 1, 1), targetRow + 1);
  return true;
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
  const editedRange = sheet.getRange(firstRow, 1, lastRow - firstRow + 1, sheet.getLastColumn());
  let editedRows = editedRange.getValues();
  const hasMissingStudentId = editedRows.some(row => (
    stringValue_(row[classColumnIndex - 1])
      && stringValue_(row[nameColumnIndex - 1])
      && !stringValue_(row[idColumnIndex - 1])
  ));
  if (hasMissingStudentId) {
    assignMissingStudentIds_(sheet);
    editedRows = editedRange.getValues();
  }

  const studentIds = editedRows.map(row => {
    if (!stringValue_(row[classColumnIndex - 1]) || !stringValue_(row[nameColumnIndex - 1])) return '';
    return stringValue_(row[idColumnIndex - 1]);
  }).filter(Boolean);
  if (!studentIds.length) {
    sheet.getParent().toast(
      '학생 식별 정보를 만들지 못해 행을 이동하지 않았습니다. 입력값은 유지됩니다.',
      '학생 행 정리',
      8
    );
    return false;
  }

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

function sortScoreRowsByClassOrder_(sheet) {
  if (!sheet || sheet.getLastRow() < 3) return 0;

  removeTrulyBlankDataRows_(sheet);
  assignMissingStudentIds_(sheet);
  const helperColumn = ensureHeaderColumn_(sheet, CLASS_SORT_HELPER_HEADER);
  const lastColumn = sheet.getLastColumn();
  const rowCount = sheet.getLastRow() - 1;
  if (rowCount < 2) {
    sheet.hideColumns(helperColumn);
    return 0;
  }

  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0].map(stringValue_);
  const classColumn = headers.indexOf('반 이름');
  const nameColumn = headers.indexOf('학생 이름');
  const idColumn = headers.indexOf(STUDENT_ID_HEADER);
  if (classColumn === -1 || nameColumn === -1 || idColumn === -1) return 0;

  const values = sheet.getRange(2, 1, rowCount, lastColumn).getValues();
  const students = values.map((row, index) => ({
    originalIndex: index,
    className: stringValue_(row[classColumn]),
    studentName: stringValue_(row[nameColumn]),
    studentId: stringValue_(row[idColumn]),
  })).filter(row => row.studentName && row.studentId);

  const sortedStudents = students.slice().sort((left, right) => (
    compareClassNamesForSort_(left.className, right.className)
      || left.originalIndex - right.originalIndex
  ));
  const orderByStudentId = {};
  sortedStudents.forEach((student, index) => {
    orderByStudentId[student.studentId] = index + 1;
  });

  const helperValues = values.map((row, index) => {
    const studentId = stringValue_(row[idColumn]);
    const studentName = stringValue_(row[nameColumn]);
    if (studentName && orderByStudentId[studentId]) return [orderByStudentId[studentId]];
    return [sortedStudents.length + index + 1];
  });
  sheet.getRange(2, helperColumn, rowCount, 1).setValues(helperValues);
  sheet.getRange(2, 1, rowCount, lastColumn)
    .sort({ column: helperColumn, ascending: true });
  sheet.getRange(2, helperColumn, rowCount, 1).clearContent();
  sheet.hideColumns(helperColumn);
  return sortedStudents.length;
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
      const hasPersistentContent = values[dataIndex].some((value, columnIndex) => {
        const header = headers[columnIndex];
        if (header === STUDENT_ID_HEADER || header.indexOf('__') === 0) return false;
        return stringValue_(value)
          || stringValue_(formulas[dataIndex][columnIndex])
          || stringValue_(notes[dataIndex][columnIndex]);
      });
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
  if (!sheet) return;
  const formatRowCount = Math.max(dataRowCount || 0, 20);
  ensureRowExists_(sheet, formatRowCount + 1);
  sheet.getBandings().forEach(banding => banding.remove());

  sheet.getRange(1, 1, 1, DEFAULT_CLASS_HEADERS.length)
    .setBackground('#285B4D')
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
  sheet.getRange(2, 1, formatRowCount, 1).setFontWeight('bold').setHorizontalAlignment('left');
  sheet.getRange(2, 2, formatRowCount, 3).setHorizontalAlignment('left');
  sheet.getRange(1, 5, formatRowCount + 1, 1).setHorizontalAlignment('center');
  sheet.getRange(1, 5).setBackground('#9C3D45');
  sheet.setRowHeights(2, formatRowCount, 36);
  sheet.setColumnWidth(1, 155);
  sheet.setColumnWidth(2, 220);
  sheet.setColumnWidth(3, 240);
  sheet.setColumnWidth(4, 240);
  sheet.setColumnWidth(5, 80);
  sheet.setFrozenRows(1);

  const idColumn = findHeaderColumn_(sheet, CLASS_ID_HEADER);
  const previousColumn = findHeaderColumn_(sheet, CLASS_PREVIOUS_NAME_HEADER);
  if (idColumn) sheet.hideColumns(idColumn);
  if (previousColumn) sheet.hideColumns(previousColumn);
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
  const previousRows = rows.map(row => row.slice());
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
  let updatedCount = 0;
  try {
    writeClassSettingsRows_(classSheet, rows);
    refreshClassNameDropdownForRename_(classSheet, scoreSheet);
    updatedCount = replaceScoreClassName_(scoreSheet, currentKey, nextName);
  } catch (error) {
    let rollbackMessage = '';
    try {
      writeClassSettingsRows_(classSheet, previousRows);
      refreshClassNameDropdownForRename_(classSheet, scoreSheet);
    } catch (rollbackError) {
      rollbackMessage = `\n복구 오류: ${rollbackError.message}`;
    }
    ui.alert([
      '반 이름을 변경하지 못해 기존 설정으로 되돌렸습니다.',
      `오류: ${error.message}${rollbackMessage}`,
    ].join('\n'));
    return;
  }
  if (scoreSheet) {
    try {
      normalizeClassSpacerRows_(scoreSheet);
    } catch (error) {
      console.warn(`반 구분 빈 행 정리 실패: ${error.message}`);
    }
  }
  ui.alert(`'${currentName}' → '${nextName}' 수정 완료\n학생 행 반영: ${updatedCount}명`);
}

function refreshClassNameDropdownForRename_(classSheet, scoreSheet) {
  if (!classSheet || !scoreSheet) return false;

  const classNames = readClassConfig_(classSheet).classNames;
  if (!classNames.length) return false;
  const sourceRange = writeClassConfigHelperList_(
    classSheet,
    ACTIVE_CLASS_LIST_HEADER,
    classNames
  );
  const headers = scoreSheet.getRange(1, 1, 1, scoreSheet.getLastColumn())
    .getValues()[0]
    .map(stringValue_);
  return replaceDropdownValidationForColumn_(
    scoreSheet,
    headers,
    '반 이름',
    classNames,
    sourceRange
  );
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
  const target = rows.find(row => normalizeClassNameForSort_(row[1]) === classKey);
  if (!target) {
    ui.alert(`'${className}' 반을 찾지 못했습니다.`);
    return;
  }

  const activeStudents = scoreSheet
    ? readObjects_(scoreSheet, CONFIG.scoreSheet).filter(row => (
      normalizeClassNameForSort_(row['반 이름']) === classKey
      && stringValue_(row['학생 이름'])
      && isActiveEnrollment_(row)
    ))
    : [];
  if (activeStudents.length) {
    ui.alert([
      `'${className}' 반에 재원 학생 ${activeStudents.length}명이 있어 삭제할 수 없습니다.`,
      '먼저 성적입력에서 해당 학생을 다른 반으로 옮기거나 퇴원 처리하세요.',
    ].join('\n'));
    return;
  }

  const confirmation = ui.alert(
    '반 삭제 확인',
    `'${className}' 반을 드롭다운에서 제외할까요?\n기존 퇴원 학생의 성적 이력은 보존됩니다.`,
    ui.ButtonSet.OK_CANCEL
  );
  if (confirmation !== ui.Button.OK) return;

  target[0] = false;
  writeClassSettingsRows_(classSheet, rows);
  if (scoreSheet) applyClassDropdowns_(ss, scoreSheet);
  ui.alert(`'${className}' 반을 사용 중지했습니다.`);
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

  const classSeen = {};
  readDurableClassRows_(sheet).forEach(row => {
    const className = stringValue_(row.name);
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

function replaceDropdownValidationForColumn_(sheet, headers, header, options, sourceRange) {
  const columnIndex = headers.indexOf(header) + 1;
  if (!columnIndex || !options.length) return false;

  ensureRowExists_(sheet, 2);
  const builder = SpreadsheetApp.newDataValidation();
  const rule = (sourceRange
    ? builder.requireValueInRange(sourceRange, true)
    : builder.requireValueInList(options, true))
    .setAllowInvalid(false)
    .build();
  sheet.getRange(2, columnIndex, sheet.getMaxRows() - 1, 1)
    .setDataValidation(rule);
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
  applyClassGroupStyling_(sheet);
}

function compactScoreInputLayout() {
  const sheet = SpreadsheetApp.getActive().getSheetByName(CONFIG.scoreSheet);
  if (!sheet) throw new Error(`'${CONFIG.scoreSheet}' 탭을 찾지 못했습니다.`);
  sortScoreRowsByClassOrder_(sheet);
  normalizeClassSpacerRows_(sheet);
  formatScoreInputSheet_(sheet);
  return { rowHeight: SCORE_INPUT_ROW_HEIGHT };
}

function applyClassGroupStyling_(sheet) {
  if (!sheet || sheet.getLastColumn() < 1) return;
  const lastColumn = sheet.getLastColumn();
  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0].map(stringValue_);
  const bodyRowCount = Math.max(sheet.getLastRow() - 1, 24);
  ensureRowExists_(sheet, bodyRowCount + 1);

  const headerColors = headers.map(header => {
    if (STUDENT_CORE_HEADERS.includes(header)) return '#1F4E78';
    if (DESIRED_SCORE_INPUT_HEADERS.includes(header)) return '#0F6B6D';
    if (RATING_COLUMNS.includes(header)) return '#A46A16';
    if (CLASS_DEFAULT_SCORE_HEADERS.includes(header)) return '#2F6B4F';
    if (header === 'Grammar 평균그룹' || header === 'Grade') return '#6A4C7D';
    if (/comment/i.test(header)) return '#7A3F55';
    return '#4B5563';
  });
  sheet.getRange(1, 1, 1, lastColumn)
    .setBackgrounds([headerColors])
    .setFontColor('#FFFFFF')
    .setFontFamily('Arial')
    .setFontSize(10)
    .setFontWeight('bold')
    .setHorizontalAlignment('center')
    .setVerticalAlignment('middle')
    .setWrap(true);
  sheet.setRowHeight(1, 38);

  const bodyRange = sheet.getRange(2, 1, bodyRowCount, lastColumn);
  const classColumn = headers.indexOf('반 이름');
  const nameColumn = headers.indexOf('학생 이름');
  const bodyValues = bodyRange.getValues();
  let groupIndex = -1;
  let previousClass = '';
  const backgrounds = bodyValues.map(row => {
    const className = classColumn === -1 ? '' : stringValue_(row[classColumn]);
    const studentName = nameColumn === -1 ? '' : stringValue_(row[nameColumn]);
    if (studentName && className !== previousClass) {
      groupIndex += 1;
      previousClass = className;
    }
    const color = !studentName ? '#FFFFFF' : (groupIndex % 2 === 0 ? '#FFFFFF' : '#F3F7F6');
    return Array(lastColumn).fill(color);
  });
  bodyRange
    .setBackgrounds(backgrounds)
    .setFontColor('#202124')
    .setFontFamily('Arial')
    .setFontSize(10)
    .setVerticalAlignment('middle')
    .setBorder(true, true, true, true, true, true, '#D8DEE5', SpreadsheetApp.BorderStyle.SOLID);
  let lastClass = '';
  bodyValues.forEach((row, index) => {
    const className = classColumn === -1 ? '' : stringValue_(row[classColumn]);
    const studentName = nameColumn === -1 ? '' : stringValue_(row[nameColumn]);
    if (studentName && className !== lastClass) {
      sheet.getRange(index + 2, 1, 1, lastColumn)
        .setBorder(true, null, null, null, null, null, '#52796F', SpreadsheetApp.BorderStyle.SOLID_THICK);
      lastClass = className;
    }
  });

  const widths = {
    '요일': 78,
    '시간': 105,
    '반 이름': 140,
    '학생 이름': 105,
    'Vocabulary': 116,
    'Homework': 116,
    'Participation': 116,
    'Vocabulary 교재명': 185,
    'Writing/Grammar 교재명': 205,
    'Reading/Listening 교재명': 205,
    'Grammar 평균그룹': 120,
    'Grade': 82,
    'Writing Comment': 300,
    'Grammar Comment': 300,
    'Reading Comment': 300,
    'Listening Comment': 300,
    'Listening,Speaking Comment': 300,
    'Listening/Speaking Comment': 300,
  };
  DESIRED_SCORE_INPUT_HEADERS.forEach(header => widths[header] = 120);
  headers.forEach((header, index) => sheet.setColumnWidth(index + 1, widths[header] || 130));

  [
    ...STUDENT_CORE_HEADERS,
    ...DESIRED_SCORE_INPUT_HEADERS,
    ...RATING_COLUMNS,
    'Grammar 평균그룹',
    'Grade',
  ].forEach(header => {
    const column = headers.indexOf(header) + 1;
    if (column) sheet.getRange(2, column, bodyRowCount, 1).setHorizontalAlignment('center');
  });
  headers.forEach((header, index) => {
    if (/comment/i.test(header)) sheet.getRange(2, index + 1, bodyRowCount, 1).setWrap(true);
  });
  sheet.setRowHeightsForced(2, bodyRowCount, SCORE_INPUT_ROW_HEIGHT);
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(SCORE_INPUT_FROZEN_COLUMN_COUNT);
  hideHeaderColumn_(sheet, STUDENT_ID_HEADER);
}

function findHeaderColumn_(sheet, header) {
  if (!sheet || sheet.getLastColumn() < 1) return 0;
  return sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    .map(stringValue_)
    .indexOf(header) + 1;
}

function formatOutputSettingsSheet_(sheet) {
  if (!sheet) return;
  const rowCount = Math.max(sheet.getLastRow(), 2);
  sheet.getRange(1, 1, 1, 3)
    .setBackground('#6A4C7D')
    .setFontColor('#FFFFFF')
    .setFontWeight('bold')
    .setHorizontalAlignment('center');
  sheet.getRange(2, 1, rowCount - 1, 3)
    .setFontFamily('Arial')
    .setFontSize(10)
    .setVerticalAlignment('middle')
    .setWrap(true);
  sheet.setFrozenRows(1);
  sheet.setRowHeight(1, 38);
  sheet.setColumnWidth(1, 170);
  sheet.setColumnWidth(2, 380);
  sheet.setColumnWidth(3, 380);
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
        <textarea id="roster" placeholder="월수    2:00-3:30    Starter1    Demo Student"></textarea>
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

    const studentId = makeNewStudentId_();
    row[STUDENT_ID_HEADER] = studentId;
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

function showNewStudentDialog() {
  const html = HtmlService.createHtmlOutputFromFile('StudentForm')
    .setWidth(520)
    .setHeight(610);
  SpreadsheetApp.getUi().showModalDialog(html, '신입생 추가');
}

function getNewStudentFormOptions() {
  const ss = SpreadsheetApp.getActive();
  const scoreSheet = ss.getSheetByName(CONFIG.scoreSheet);
  if (!scoreSheet) throw new Error(`'${CONFIG.scoreSheet}' 탭을 찾지 못했습니다.`);
  const classSheet = ss.getSheetByName(CONFIG.classConfigSheet);
  if (!classSheet) throw new Error(`'${CONFIG.classConfigSheet}' 탭을 찾지 못했습니다.`);
  const classNames = readClassConfig_(classSheet).classNames;
  if (!classNames.length) throw new Error('반별설정에 반 이름을 먼저 입력하세요. 기존 학생 데이터는 변경하지 않았습니다.');
  return {
    days: DAY_OPTIONS.slice(),
    times: TIME_OPTIONS.slice(),
    classes: classNames,
    grades: GRADE_OPTIONS.slice(),
  };
}

function createNewStudent(form) {
  const input = form || {};
  const day = stringValue_(input.day);
  const time = stringValue_(input.time);
  const className = stringValue_(input.className);
  const studentName = stringValue_(input.studentName);
  const grade = stringValue_(input.grade);
  if (!DAY_OPTIONS.includes(day)) throw new Error('요일 드롭다운에서 값을 선택하세요.');
  if (!TIME_OPTIONS.includes(time)) throw new Error('시간 드롭다운에서 값을 선택하세요.');
  if (!studentName) throw new Error('학생 이름을 입력하세요.');
  if (!GRADE_OPTIONS.includes(grade)) throw new Error('Grade를 선택하세요.');

  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName(CONFIG.scoreSheet);
  const classSheet = ss.getSheetByName(CONFIG.classConfigSheet);
  if (!sheet || !classSheet) throw new Error('성적입력 또는 반별설정 시트를 찾지 못했습니다.');

  const lock = LockService.getDocumentLock() || LockService.getScriptLock();
  if (!lock.tryLock(30000)) throw new Error('다른 학생 작업이 진행 중입니다. 잠시 후 다시 시도하세요.');
  try {
    const classRows = readDurableClassRows_(classSheet);
    const classSetting = classRows.find(row => (
      !row.deleteRequested && normalizeClassNameForSort_(row.name) === normalizeClassNameForSort_(className)
    ));
    if (!classSetting) throw new Error(`반별설정에서 '${className}' 반을 찾지 못했거나 삭제 처리 중입니다.`);
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
    const nameColumn = headers.indexOf('학생 이름') + 1;
    const classColumn = headers.indexOf('반 이름') + 1;
    if (!nameColumn || !classColumn || !headers.includes(STUDENT_ID_HEADER)) {
      throw new Error('초기 설정이 완료되지 않았습니다. setupDurableReportSystem을 먼저 한 번 실행하세요.');
    }

    let targetRow = 0;
    if (sheet.getLastRow() >= 2) {
      const rowCount = sheet.getLastRow() - 1;
      const classes = sheet.getRange(2, classColumn, rowCount, 1).getValues();
      const names = sheet.getRange(2, nameColumn, rowCount, 1).getValues();
      classes.forEach((row, index) => {
        if (!stringValue_(names[index][0])) return;
        if (normalizeClassNameForSort_(row[0]) === normalizeClassNameForSort_(className)) {
          targetRow = index + 2;
        }
      });
    }
    if (!targetRow) targetRow = Math.max(sheet.getLastRow(), 1);
    sheet.insertRowAfter(targetRow);
    const newRowNumber = targetRow + 1;

    const row = {};
    row['요일'] = day;
    row['시간'] = time;
    row['반 이름'] = classSetting.name;
    row['학생 이름'] = studentName;
    row['Grade'] = grade;
    row['Vocabulary 교재명'] = classSetting.vocabularyBook;
    row['Writing/Grammar 교재명'] = classSetting.writingGrammarBook;
    row['Reading/Listening 교재명'] = classSetting.readingListeningBook;
    const studentId = makeNewStudentId_();
    row[STUDENT_ID_HEADER] = studentId;
    sheet.getRange(newRowNumber, 1, 1, headers.length)
      .setValues([headers.map(header => row[header] === undefined ? '' : row[header])]);

    applyDurableDropdowns_(ss, sheet);
    sortScoreRowsByClassOrder_(sheet);
    normalizeClassSpacerRows_(sheet);
    applyClassGroupStyling_(sheet);
    const idColumn = headers.indexOf(STUDENT_ID_HEADER) + 1;
    const finalRowNumber = findStudentRowById_(sheet, idColumn, studentId) || newRowNumber;
    ss.setActiveSheet(sheet);
    sheet.setActiveRange(sheet.getRange(finalRowNumber, 1, 1, 4));
    return {
      rowNumber: finalRowNumber,
      message: `${studentName} 학생을 ${className} 반 마지막에 추가했습니다.`,
    };
  } finally {
    lock.releaseLock();
  }
}

function deleteSelectedStudents() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getActiveSheet();
  const ui = SpreadsheetApp.getUi();
  if (!sheet || sheet.getName() !== CONFIG.scoreSheet) {
    ui.alert(`'${CONFIG.scoreSheet}' 탭에서 삭제할 학생 행을 선택하세요.`);
    return;
  }
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const nameColumn = headers.indexOf('학생 이름') + 1;
  const classColumn = headers.indexOf('반 이름') + 1;
  const selection = sheet.getActiveRangeList();
  const rowNumbers = new Set();
  (selection ? selection.getRanges() : [sheet.getActiveRange()]).forEach(range => {
    if (!range) return;
    for (let row = Math.max(2, range.getRow()); row <= range.getLastRow(); row += 1) {
      if (stringValue_(sheet.getRange(row, nameColumn).getValue())) rowNumbers.add(row);
    }
  });
  if (!rowNumbers.size) {
    ui.alert('학생 이름이 있는 행을 선택하세요.');
    return;
  }

  const targets = Array.from(rowNumbers).sort((a, b) => a - b)
    .map(row => readObjectAtRow_(sheet, row));
  const targetIds = targets.map(row => stringValue_(row[STUDENT_ID_HEADER]));
  if (targetIds.some(id => !id) || new Set(targetIds).size !== targetIds.length) {
    ui.alert('학생ID가 없거나 중복되어 삭제하지 않았습니다. 학생 식별 정보를 먼저 확인하세요.');
    return;
  }
  const labels = targets.map(row => `${stringValue_(row['반 이름'])} / ${stringValue_(row['학생 이름'])}`);
  const response = ui.alert(
    '퇴원생 완전 삭제',
    `${labels.join('\n')}\n\n선택한 학생의 점수와 코멘트까지 완전히 삭제합니다. 계속할까요?`,
    ui.ButtonSet.OK_CANCEL
  );
  if (response !== ui.Button.OK) return;

  const lock = LockService.getDocumentLock() || LockService.getScriptLock();
  if (!lock.tryLock(30000)) {
    ui.alert('다른 학생 작업이 진행 중입니다. 잠시 후 다시 시도하세요.');
    return;
  }
  let failureMessage = '';
  try {
    const currentRows = readObjects_(sheet, CONFIG.scoreSheet);
    const currentTargets = targets.map(target => {
      const matches = currentRows.filter(row => stringValue_(row[STUDENT_ID_HEADER]) === stringValue_(target[STUDENT_ID_HEADER]));
      if (matches.length !== 1 || ['학생 이름', '반 이름'].some(header => (
        stringValue_(matches[0][header]) !== stringValue_(target[header])
      ))) {
        throw new Error('확인창을 연 뒤 학생 정보가 바뀌어 삭제하지 않았습니다. 다시 선택하고 확인하세요.');
      }
      return matches[0].__sheetRow;
    });
    currentTargets.sort((a, b) => b - a).forEach(row => sheet.deleteRow(row));
    normalizeClassSpacerRows_(sheet);
    applyClassGroupStyling_(sheet);
  } catch (error) {
    failureMessage = error.message || String(error);
  } finally {
    lock.releaseLock();
  }
  ui.alert(failureMessage || `학생 ${targets.length}명을 완전히 삭제했습니다.`);
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
      if (!getSubjectCommentValue_(row, subject)) {
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

// PDF 생성 자체가 불가능한 입력만 차단합니다. 코멘트, 학년, 평가,
// 평균그룹 누락은 출력점검에서 안내하되 PDF 생성은 계속합니다.
function collectReportBlockingIssues_(rows) {
  const issues = [];
  rows.forEach(row => {
    const name = stringValue_(row['학생 이름']);
    const add = (field, message) => issues.push([row.__sheetRow || '', name, field, message]);
    if (!name) add('학생 이름', '학생 이름이 없습니다.');
    if (!isActiveEnrollment_(row)) add(ENROLLMENT_STATUS_HEADER, '퇴원 학생은 성적표 출력 대상이 아닙니다.');

    let scoreCount = 0;
    SUBJECTS.forEach(subject => {
      const raw = stringValue_(row[subject.scoreColumn]);
      if (!raw || raw.toLowerCase() === 'x') return;
      if (parseScore_(row[subject.scoreColumn]) === null) {
        add(subject.scoreColumn, `${MIN_SCORE}~${MAX_SCORE} 숫자 또는 X(미응시)를 입력하세요.`);
        return;
      }
      scoreCount += 1;
    });
    if (!scoreCount) add('점수', '출력할 과목의 유효한 점수가 없습니다.');
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

function restoreMissingAiComments() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName(CONFIG.scoreSheet);
  const ui = SpreadsheetApp.getUi();
  if (!sheet || sheet.getLastRow() < 2) {
    ui.alert(`'${CONFIG.scoreSheet}' 탭에 복구할 데이터가 없습니다.`);
    return;
  }

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
  const commentHeaders = [];
  SUBJECTS.forEach(subject => {
    findSubjectCommentHeaders_(headers, subject).forEach(header => {
      if (!commentHeaders.includes(header)) commentHeaders.push(header);
    });
  });

  const backupMarker = 'AI 다듬기 전 원문: ';
  const restored = [];
  commentHeaders.forEach(header => {
    const columnIndex = headers.indexOf(header) + 1;
    if (!columnIndex) return;

    const rowCount = sheet.getLastRow() - 1;
    const range = sheet.getRange(2, columnIndex, rowCount, 1);
    const values = range.getValues();
    const notes = range.getNotes();
    values.forEach((row, index) => {
      if (stringValue_(row[0])) return;
      const note = stringValue_(notes[index][0]);
      const markerIndex = note.indexOf(backupMarker);
      if (markerIndex === -1) return;

      const original = note.slice(markerIndex + backupMarker.length).trim();
      if (!original) return;
      sheet.getRange(index + 2, columnIndex).setValue(original);
      restored.push(`${index + 2}행 ${header}`);
    });
  });

  if (!restored.length) {
    ui.alert([
      '노트에서 복구할 빈 코멘트를 찾지 못했습니다.',
      '파일 → 버전 기록 → 버전 기록 보기에서 삭제 직전 버전을 확인하세요.',
      '현재 파일 전체를 바로 되돌리지 말고 먼저 사본을 만든 뒤 필요한 코멘트만 가져오세요.',
    ].join('\n'));
    return;
  }

  ui.alert([
    `빈 코멘트 원문 복구 완료: ${restored.length}개`,
    restored.slice(0, 20).join('\n'),
    restored.length > 20 ? `외 ${restored.length - 20}개` : '',
  ].filter(Boolean).join('\n'));
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
  const properties = PropertiesService.getScriptProperties();
  let state = readAiCommentJobState_(properties);
  const endRow = startRow + targetRowCount - 1;
  const isSameJob = state
    && state.spreadsheetId === ss.getId()
    && state.sheetName === sheet.getName()
    && state.startRow === startRow
    && state.endRow === endRow
    && state.title === title;
  if (!isSameJob) {
    state = {
      spreadsheetId: ss.getId(),
      sheetName: sheet.getName(),
      startRow,
      endRow,
      nextRow: startRow,
      nextSubjectIndex: 0,
      changedCount: 0,
      emptyCount: 0,
      retryCount: 0,
      title,
      status: 'running',
      lastError: '',
    };
    properties.setProperty(AI_COMMENT_JOB_PROPERTY, JSON.stringify(state));
  }

  const result = runAiCommentPolishJob_(AI_COMMENT_INITIAL_RUN_MS);
  const ui = SpreadsheetApp.getUi();
  if (result.status === 'completed') {
    ui.alert([
      `${result.state.title} 완료`,
      `변경된 코멘트: ${result.state.changedCount}개`,
      `원문이 비어 있던 칸: ${result.state.emptyCount}개`,
    ].join('\n'));
    return;
  }

  if (result.status === 'paused') {
    ui.alert([
      'AI 코멘트 작업이 같은 칸에서 멈췄습니다.',
      '다음 칸으로 건너뛰지 않았습니다.',
      result.state.lastError,
      'API 키나 오류 내용을 확인한 뒤 같은 메뉴를 다시 실행하면 그 칸부터 이어집니다.',
    ].filter(Boolean).join('\n'));
    return;
  }

  if (result.status === 'retry_needed') {
    ui.alert([
      '일시적인 API 오류로 현재 위치에서 멈췄습니다.',
      `현재까지 변경: ${result.state.changedCount}개`,
      `다음 처리 위치: ${result.state.nextRow}행`,
      `오류: ${result.state.lastError}`,
      '다음 칸으로 건너뛰지 않았습니다.',
      '같은 AI 코멘트 메뉴를 다시 실행하면 실패한 코멘트부터 다시 시도합니다.',
    ].join('\n'));
    return;
  }

  if (result.status === 'busy') {
    ui.alert('다른 AI 코멘트 작업이 실행 중입니다. 잠시 후 같은 메뉴를 다시 실행하세요.');
    return;
  }

  ui.alert([
    'Apps Script 실행시간에 맞춰 현재 위치를 저장했습니다.',
    `현재까지 변경: ${result.state.changedCount}개`,
    `다음 처리 위치: ${result.state.nextRow}행`,
    '같은 AI 코멘트 메뉴를 다시 실행하면 저장된 위치부터 이어집니다.',
  ].join('\n'));
}

function runAiCommentPolishJob_(runBudgetMs) {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(5000)) {
    return { status: 'busy', state: readAiCommentJobState_() };
  }

  try {
    const properties = PropertiesService.getScriptProperties();
    const state = readAiCommentJobState_(properties);
    if (!state) return { status: 'completed', state: { title: 'AI 코멘트 다듬기', changedCount: 0, emptyCount: 0 } };

    let ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss || ss.getId() !== state.spreadsheetId) {
      try {
        ss = SpreadsheetApp.openById(state.spreadsheetId);
      } catch (error) {
        state.status = 'paused';
        state.lastError = `스프레드시트를 다시 열지 못했습니다: ${error.message}`;
        saveAiCommentJobState_(state, properties);
        return { status: 'paused', state };
      }
    }
    const sheet = ss.getSheetByName(state.sheetName);
    if (!sheet) {
      state.status = 'paused';
      state.lastError = `'${state.sheetName}' 탭을 찾지 못했습니다.`;
      saveAiCommentJobState_(state, properties);
      return { status: 'paused', state };
    }

    const apiKey = getOpenAiApiKey_();
    if (!apiKey) {
      state.status = 'paused';
      state.lastError = 'OpenAI API 키가 저장되어 있지 않습니다.';
      saveAiCommentJobState_(state, properties);
      return { status: 'paused', state };
    }

    const outputConfig = readKeyValueConfig_(ss.getSheetByName(CONFIG.outputConfigSheet));
    const model = stringValue_(outputConfig['AI 모델']) || 'gpt-5-mini';
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
    const startedAt = Date.now();

    while (state.nextRow <= state.endRow && Date.now() - startedAt < runBudgetMs) {
      const subject = SUBJECTS[state.nextSubjectIndex];
      const rowValues = sheet.getRange(state.nextRow, 1, 1, headers.length).getValues()[0];
      const row = {};
      headers.forEach((header, index) => row[header] = rowValues[index]);
      const entries = buildSubjectCommentEntriesForRow_(headers, row, subject);

      if (!entries.length) {
        state.emptyCount += 1;
        advanceAiCommentJobCursor_(state);
        continue;
      }

      try {
        const polished = polishCommentEntriesWithRetry_(
          entries,
          stringValue_(row['학생 이름']),
          model,
          apiKey
        );
        const outputs = entries.map(entry => {
          const polishedText = stringValue_(polished[entry.columnName]);
          if (!polishedText) throw new Error(`AI가 ${entry.columnName} 코멘트를 빈칸으로 반환했습니다.`);
          return { entry, polishedText };
        });

        writeAiCommentOutputsSafely_(sheet, headers, state.nextRow, row, outputs);
        state.changedCount += outputs.length;
        state.retryCount = 0;
        state.lastError = '';
        advanceAiCommentJobCursor_(state);
      } catch (error) {
        state.retryCount += 1;
        const commentHeaders = entries.map(entry => entry.columnName).join(', ');
        state.lastError = `${state.nextRow}행 ${commentHeaders}: ${error.message}`;
        saveAiCommentJobState_(state, properties);

        if (isPermanentAiCommentError_(error)) {
          state.status = 'paused';
          saveAiCommentJobState_(state, properties);
          ss.toast(state.lastError, 'AI 코멘트 작업 멈춤', 10);
          return { status: 'paused', state };
        }

        ss.toast(
          `${state.lastError}\n같은 메뉴를 다시 실행하면 이 칸부터 재시도합니다.`,
          'AI 코멘트 재시도 필요',
          10
        );
        return { status: 'retry_needed', state };
      }
    }

    SpreadsheetApp.flush();
    if (state.nextRow > state.endRow) {
      state.status = 'completed';
      properties.deleteProperty(AI_COMMENT_JOB_PROPERTY);
      ss.toast(`변경된 코멘트: ${state.changedCount}개`, `${state.title} 완료`, 10);
      return { status: 'completed', state };
    }

    saveAiCommentJobState_(state, properties);
    ss.toast(
      `${state.nextRow}행부터 같은 메뉴를 다시 실행해 이어서 처리하세요.`,
      'AI 코멘트 계속 실행 필요',
      8
    );
    return { status: 'continuation', state };
  } finally {
    lock.releaseLock();
  }
}

function writeAiCommentOutputsSafely_(sheet, headers, rowNumber, originalRow, outputs) {
  const lock = LockService.getDocumentLock ? LockService.getDocumentLock() : null;
  if (lock && !lock.tryLock(5000)) throw new Error('학생·반 관리 작업 중이라 코멘트를 저장하지 않았습니다. 같은 메뉴로 다시 실행하세요.');
  try {
    const currentHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(stringValue_);
    if (JSON.stringify(headers) !== JSON.stringify(currentHeaders)) {
      throw new Error('AI 처리 중 열 구성이 바뀌어 저장하지 않았습니다.');
    }
    const currentRow = rowArrayToObject_(sheet.getRange(rowNumber, 1, 1, headers.length).getValues()[0], headers);
    if ([STUDENT_ID_HEADER, ...STUDENT_CORE_HEADERS].some(header => (
      stringValue_(originalRow[header]) !== stringValue_(currentRow[header])
    ))) {
      throw new Error('AI 처리 중 학생 행이 이동하거나 정보가 바뀌어 저장하지 않았습니다. 같은 메뉴로 다시 실행하세요.');
    }
    if (outputs.some(output => stringValue_(currentRow[output.entry.columnName]) !== output.entry.rawComment)) {
      throw new Error('AI 처리 중 선생님이 코멘트를 수정하여 덮어쓰지 않았습니다. 같은 메뉴로 다시 실행하세요.');
    }
    outputs.forEach(output => {
      const cell = sheet.getRange(rowNumber, output.entry.columnIndex);
      preserveOriginalAiCommentNote_(cell, output.entry.rawComment);
      cell.setValue(output.polishedText);
    });
  } finally {
    if (lock) lock.releaseLock();
  }
}

function polishCommentEntriesWithRetry_(entries, studentName, model, apiKey) {
  let lastError = null;
  for (let attempt = 0; attempt <= AI_COMMENT_SINGLE_RETRIES; attempt += 1) {
    try {
      return polishCommentEntries_(entries, studentName, model, apiKey);
    } catch (error) {
      lastError = error;
      if (isPermanentAiCommentError_(error)) break;
      if (attempt < AI_COMMENT_SINGLE_RETRIES) {
        Utilities.sleep(AI_COMMENT_RETRY_DELAY_MS * (attempt + 1));
      }
    }
  }
  throw lastError || new Error('개별 코멘트 처리에 실패했습니다.');
}

function polishSingleCommentEntryWithRetry_(entry, studentName, model, apiKey) {
  return polishCommentEntriesWithRetry_([entry], studentName, model, apiKey);
}

function advanceAiCommentJobCursor_(state) {
  state.nextSubjectIndex += 1;
  if (state.nextSubjectIndex < SUBJECTS.length) return;
  state.nextSubjectIndex = 0;
  state.nextRow += 1;
}

function preserveOriginalAiCommentNote_(cell, rawComment) {
  const backupMarker = 'AI 다듬기 전 원문: ';
  const existingNote = cell.getNote();
  if (stringValue_(existingNote).includes(backupMarker)) return;
  cell.setNote([
    stringValue_(existingNote),
    `${backupMarker}${rawComment}`,
  ].filter(Boolean).join('\n\n'));
}

function isPermanentAiCommentError_(error) {
  return /OpenAI API 오류 \((400|401|403|404)\)/.test(stringValue_(error && error.message));
}

function readAiCommentJobState_(properties) {
  const store = properties || PropertiesService.getScriptProperties();
  const raw = store.getProperty(AI_COMMENT_JOB_PROPERTY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (error) {
    store.deleteProperty(AI_COMMENT_JOB_PROPERTY);
    return null;
  }
}

function saveAiCommentJobState_(state, properties) {
  const store = properties || PropertiesService.getScriptProperties();
  store.setProperty(AI_COMMENT_JOB_PROPERTY, JSON.stringify(state));
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
    .setBackground('#7A3F55')
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
    const backgrounds = rankingRows.map((row, index) => {
      if (!stringValue_(row[3])) return Array(headers.length).fill('#E9EDF2');
      return Array(headers.length).fill(index % 2 === 0 ? '#FFFFFF' : '#F8F5F6');
    });
    sheet.getRange(2, 1, rankingRows.length, headers.length)
      .setBackgrounds(backgrounds)
      .setBorder(true, true, true, true, true, true, '#D8DEE5', SpreadsheetApp.BorderStyle.SOLID);
    sheet.getRange(2, 5, rankingRows.length, 2).setNumberFormat('0.0');
    sheet.getRange(2, 7, rankingRows.length, 1).setNumberFormat('0');
    sheet.getRange(2, 3, rankingRows.length, 1).setFontWeight('bold');
    rankingRows.forEach((row, index) => {
      const rank = Number(row[2]);
      if (![1, 2, 3].includes(rank) || !stringValue_(row[3])) return;
      const color = rank === 1 ? '#F6E6A8' : (rank === 2 ? '#E4E8ED' : '#E8C5A7');
      sheet.getRange(index + 2, 3, 1, 2).setBackground(color).setFontWeight('bold');
    });
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
  return 0;
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
  const failures = [];

  targetRows.forEach((row, index) => {
    try {
      ctx.ss.toast(`${index + 1}/${targetRows.length} · ${stringValue_(row['학생 이름'])}`, '성적표 생성 중', 5);
    } catch (error) {
      console.warn(`진행 알림 표시 실패: ${error.message}`);
    }

    let logEntry;
    try {
      const issues = collectReportBlockingIssues_([row]);
      if (issues.length) throw new Error(issues.map(issue => `${issue[2]}: ${issue[3]}`).join(' / '));
      const report = buildReportData_(row, ctx);
      if (!report.subjects.length) throw new Error('입력된 성적 과목이 없습니다.');

      const html = renderReportHtml_(report);
      const blob = convertReportHtmlToPdfBlob_(html, report.fileBaseName);
      const file = folder.createFile(blob);

      successCount += 1;
      logEntry = [new Date(), report.month, report.className, report.studentName, '성공', file.getName(), file.getUrl()];
    } catch (error) {
      const studentName = stringValue_(row['학생 이름']) || `${row.__sheetRow || '?'}행`;
      failures.push(`${studentName}: ${error.message}`);
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
    failures.length ? `실패 내용:\n${failures.slice(0, 5).join('\n')}` : '',
    failures.length > 5 ? `외 ${failures.length - 5}명은 '${CONFIG.logSheet}' 시트에서 확인하세요.` : '',
    logFailureCount ? `생성로그 기록 실패: ${logFailureCount}건` : '',
  ].filter(Boolean).join('\n'));
}

function convertReportHtmlToPdfBlob_(html, fileBaseName) {
  let lastError = null;

  for (let attempt = 1; attempt <= PDF_CONVERSION_ATTEMPTS; attempt += 1) {
    try {
      const blob = Utilities
        .newBlob(html, MimeType.HTML, `${fileBaseName}.html`)
        .getAs(MimeType.PDF)
        .setName(`${fileBaseName}.pdf`);
      if (!blob.getBytes().length) throw new Error('변환된 PDF 파일이 비어 있습니다.');
      return blob;
    } catch (error) {
      lastError = error;
      if (attempt < PDF_CONVERSION_ATTEMPTS) {
        Utilities.sleep(PDF_CONVERSION_RETRY_DELAY_MS * attempt);
      }
    }
  }

  throw new Error(`PDF 변환을 ${PDF_CONVERSION_ATTEMPTS}회 시도했지만 실패했습니다: ${lastError.message}`);
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
      comment: getSubjectCommentValue_(studentRow, subject),
    };
  }).filter(Boolean);

  const attitudeRows = [
    { label: 'Vocabulary', value: stringValue_(studentRow['Vocabulary']) },
    { label: 'Homework', value: stringValue_(studentRow['Homework']) },
    { label: 'Participation', value: stringValue_(studentRow['Participation']) },
  ].filter(item => item.value);
  const textbookRows = [
    { label: 'Vocabulary', value: stringValue_(studentRow['Vocabulary 교재명']) },
    { label: 'Writing/Grammar', value: stringValue_(studentRow['Writing/Grammar 교재명']) },
    { label: 'Reading/Listening', value: stringValue_(studentRow['Reading/Listening 교재명']) },
  ].filter(item => item.value);
  const commentSubjects = subjects.filter(subject => stringValue_(subject.comment));

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
    attitudeRows,
    textbookRows,
    commentSubjects,
    hasAnyAverage: subjects.some(subject => subject.average !== null),
    subjects,
    subjectCount: subjects.length,
    isTwoSubject: subjects.length <= 2,
    isTwoCommentSubject: commentSubjects.length <= 2,
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
    sheet.getRange(1, 1, 1, 7)
      .setBackground('#4B5563')
      .setFontColor('#FFFFFF')
      .setFontWeight('bold')
      .setHorizontalAlignment('center');
    sheet.setFrozenRows(1);
    sheet.setColumnWidths(1, 5, 120);
    sheet.setColumnWidth(6, 260);
    sheet.setColumnWidth(7, 380);
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
  const entries = [];
  SUBJECTS.forEach(subject => {
    buildSubjectCommentEntriesForRow_(headers, row, subject)
      .forEach(entry => entries.push(entry));
  });
  return entries;
}

function buildSubjectCommentEntriesForRow_(headers, row, subject) {
  return findSubjectCommentHeaders_(headers, subject).map(commentHeader => {
    const columnIndex = headers.indexOf(commentHeader) + 1;
    const rawComment = stringValue_(row[commentHeader]);
    if (!columnIndex || !rawComment) return null;
    return {
      columnName: commentHeader,
      columnIndex,
      subjectName: subject.name || subject.key,
      rawComment,
    };
  }).filter(Boolean);
}

function getSubjectCommentHeaders_(subject) {
  return [subject.commentColumn, ...(subject.commentAliases || [])]
    .filter((header, index, headers) => header && headers.indexOf(header) === index);
}

function normalizeCommentHeader_(value) {
  return stringValue_(value)
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]/g, '');
}

function findSubjectCommentHeaders_(headers, subject) {
  const candidateKeys = getSubjectCommentHeaders_(subject).map(normalizeCommentHeader_);
  return (headers || []).filter((header, index, allHeaders) => (
    header
    && allHeaders.indexOf(header) === index
    && candidateKeys.includes(normalizeCommentHeader_(header))
  ));
}

function findSubjectCommentHeader_(headers, row, subject) {
  const candidates = findSubjectCommentHeaders_(headers, subject);
  if (!candidates.length) return subject.commentColumn;
  if (row) {
    const filledHeader = candidates.find(header => stringValue_(row[header]));
    if (filledHeader) return filledHeader;
  }
  return candidates[0];
}

function getSubjectCommentValue_(row, subject) {
  const header = findSubjectCommentHeaders_(Object.keys(row || {}), subject)
    .find(candidate => stringValue_(row[candidate]));
  return header ? stringValue_(row[header]) : '';
}

function polishCommentEntries_(entries, studentName, model, apiKey) {
  if (!entries || !entries.length) return {};

  const response = UrlFetchApp.fetch(
    OPENAI_API_ENDPOINT,
    buildPolishCommentRequestOptions_(entries, studentName, model, apiKey)
  );
  return parsePolishCommentResponse_(response, entries, studentName);
}

function buildPolishCommentRequestOptions_(entries, studentName, model, apiKey) {
  return {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    payload: JSON.stringify(buildPolishCommentPayload_(entries, studentName, model)),
    muteHttpExceptions: true,
  };
}

function buildPolishCommentPayload_(entries, studentName, model) {
  const instructions = [
    '[역할과 교육 방향]',
    '너는 월드프렙학원의 담당 교사가 학부모에게 보내는 학습 코멘트를 다듬는 편집자다.',
    '월드프렙학원은 알파영어논술을 통해 영어 어순구조를 이해하고 체화하여 읽기·쓰기·듣기·말하기에 적용하도록 지도한다.',
    '교육 기준은 원문을 이해하기 위한 배경이다. 학생이 해당 능력을 갖추었거나 해당 지도를 받고 있다는 근거로 사용하지 않는다.',

    '[최우선 원칙: 사실과 의미 보존]',
    '원문에 담긴 관찰, 평가 강도, 학생의 현재 학습 수준과 구체적인 사례를 유지한다.',
    '입력에 없는 성과, 발전, 노력, 성실함, 학습 태도, 교재, 진도, 지도 방법, 향후 계획을 만들지 않는다.',
    '원문에 없는 칭찬을 보완점 앞에 형식적으로 붙이지 않는다.',
    '이전보다 좋아졌다는 표현은 원문에 변화의 근거가 있을 때만 사용한다.',
    '학생의 성격이나 능력을 부정적으로 단정하거나 다른 학생과 비교하지 않는다.',
    '사실 보존은 구성 순서, 문장 수, 따뜻한 표현보다 우선한다.',
    '표현을 부드럽게 바꾸더라도 어려움의 정도와 빈도를 축소하거나 과장하지 않는다.',

    '[이름 사용: 본문만 작성]',
    '호출 프로그램이 코멘트 앞에 우리 이름이는 또는 우리 이름는 호칭을 자동으로 붙인다. 너는 이름과 호칭을 제외한 본문만 작성한다.',
    '학생 이름이나 OO이는, OO학생은 같은 호칭으로 시작하지 않는다.',
    '이 학생은, 해당 학생은, 아이는 등의 대체 주어도 반복해서 넣지 않는다.',
    '학습 내용이나 수업에서 보인 모습으로 바로 문장을 시작한다.',

    '[따뜻하고 자연스러운 문체]',
    '평가 보고서처럼 차갑게 판정하지 말고, 학생을 가까이에서 지도한 교사가 학부모에게 설명하는 말투로 작성한다.',
    '전문적이면서도 편안하고 다정한 존댓말을 사용한다.',
    '학습 역량이 미흡합니다, 수행 능력이 부족합니다, 개선이 요구됩니다 같은 추상적이고 딱딱한 판정 표현을 피한다.',
    '대신 어떤 학습 상황에서 무엇을 어려워하는지 구체적으로 설명한다.',
    '강점이 입력되어 있으면 그 강점이 자연스럽게 드러나도록 쓰고, 보완점으로 곧바로 무효화하지 않는다.',
    '강점 다음 문장마다 하지만, 다만, 그러나를 기계적으로 붙이지 않는다.',
    '보완점은 학생 전체의 능력에 대한 평가가 아니라 현재 학습 중 나타나는 구체적인 어려움으로 표현한다.',
    '따뜻함은 관찰을 세심하게 설명하는 방식으로 표현하고, 과장된 칭찬이나 감정적인 수식어로 만들지 않는다.',
    '기특합니다, 대견합니다, 놀랍습니다, 앞으로가 매우 기대됩니다 같은 표현을 원문에 근거 없이 추가하지 않는다.',
    '추상적인 교육 용어를 늘어놓기보다 학부모가 쉽게 이해할 수 있는 표현을 사용한다.',
    '교사가 적은 구체적인 사례와 학생별 특징을 살린다.',
    '같은 의미의 칭찬이나 보완점을 여러 문장으로 반복하지 않는다.',

    '[과목별 편집 범위]',
    '각 코멘트는 해당 입력 항목의 comment만 근거로 작성한다.',
    '다른 과목의 관찰이나 지도 내용을 가져와 섞지 않는다.',
    '원문에서 명시한 과목 간 연결은 유지할 수 있다.',
    '과목명이나 교재명만 보고 학습 수준과 능력을 추정하지 않는다.',

    '[Writing(Alpha): 어순구조 및 영작]',
    '원문에 있는 주어·동작·대상 구분, 기본 어순, 문장 구성과 확장, 전치사구, 문법 적용, 누적 기억, 응용력, 표현력, 정확도를 중심으로 정리한다.',
    '개념을 이해하는 것과 실제 영작에 적용하는 것을 구분한다.',
    '어순구조 체화나 문법 적용을 위한 지도는 원문에 명시된 경우에만 설명한다.',

    '[Reading: 구조독해 및 독해력]',
    '원문에 있는 문장 핵심 요소 파악, 직독직해, 수식어구와 구문 분석, 문장 간 흐름, 중심 내용, 세부 정보, 근거 찾기, 어휘·문법 적용을 중심으로 정리한다.',
    '문장을 해석하는 능력과 문제를 정확하게 푸는 능력을 구분한다.',
    '직독직해, 구문 분석, 요약, 근거 찾기 등의 지도는 원문에 있는 내용만 반영한다.',

    '[Grammar: 문법 이해 및 활용]',
    '원문에 있는 개념 이해, 규칙 구분과 기억, 인칭·수일치·시제·조동사 적용, 문장 구성, 문제 유형 이해, 유사 개념 구분, 누적 활용을 중심으로 정리한다.',
    '문법 개념 이해력, 문제풀이 정확도, 영작 적용 능력을 각각 구분한다.',
    '문법을 어순구조와 연결하는 지도는 원문에 있을 때만 반영한다.',

    '[Book Club: 영어 원서독서]',
    '원문에 원서독서나 Book Club 관찰이 있을 때만 반영한다.',
    '읽기 흥미와 참여, 문맥 속 어휘 이해, 이야기 흐름, 인물과 상황 이해, 핵심 내용 설명, 표현 습득, 독서 실천과 과제 수행 중 실제 입력된 내용을 정리한다.',
    '독서량이 많다는 이유로 내용 이해력이나 자기주도성이 높다고 단정하지 않는다.',
    '별도의 Book Club 키를 만들거나 다른 코멘트 열로 내용을 옮기지 않는다.',

    '[Listening,Speaking: 듣기와 말하기]',
    '듣기는 원문에 있는 소리 구별, 문장 이해, 핵심·세부 정보, 대화 상황과 목적, 정답 근거, 오답 원인을 중심으로 정리한다.',
    '말하기는 원문에 실제 관찰이 있을 때만 표현, 문장 구성, 발화 등의 내용을 정리한다.',
    '듣기 성적이 좋다는 이유로 말하기 능력도 좋다고 추론하지 않는다.',
    '듣기만 입력되면 듣기만, 말하기만 입력되면 말하기만 작성한다.',
    '반복 듣기나 핵심 표현 확인 등의 지도는 원문에 있는 경우에만 반영한다.',

    '[구성 순서]',
    '입력에 근거가 있는 요소를 다음 순서로 자연스럽게 연결한다.',
    '1. 잘한 점: 실제 관찰된 강점 또는 근거가 있는 발전.',
    '2. 보완할 점: 현재 어려워하는 개념, 상황, 반복되는 오류.',
    '3. 학원에서 개선 중인 부분: 실제로 진행 중이라고 입력된 지도.',
    '4. 앞으로 기대하는 부분: 원문에 명시된 향후 계획이나 학습 목표.',
    '정보가 없는 요소는 생략한다. 네 요소를 채우려고 내용을 만들지 않는다.',
    '원문이 보완점만 담고 있으면 칭찬이나 지도 계획을 새로 만들지 않고 해당 내용을 부드럽고 정확하게 정리한다.',

    '[시제와 끝맺음]',
    '학생의 현재 학습 모습은 합니다·있습니다 등의 현재형으로 서술한다.',
    '학원에서 현재 진행 중인 지도는 지도하고 있습니다·연습하고 있습니다처럼 진행형으로 서술하며, 지도합니다로 끝내지 않는다.',
    '원문에 명시된 향후 지도 계획은 지도하겠습니다·돕겠습니다 등 미래형으로 서술한다.',
    '현재 진행 중인 지도를 향후 계획으로 바꾸거나 향후 계획을 이미 진행 중인 지도처럼 쓰지 않는다.',
    '향후 계획이 입력되지 않았다면 억지로 지도하겠습니다로 마무리하지 않는다.',

    '[분량과 형식]',
    '기본 3~5문장을 목표로 하되, 원문이 짧으면 1~2문장도 허용한다.',
    '문장 수를 채우기 위해 내용을 늘리거나 반복하지 않는다.',
    '원문에 중요한 관찰이 많으면 누락하지 않도록 문장 수를 유연하게 조절한다.',
    '소제목, 번호, 글머리표 없이 자연스럽게 이어지는 한 문단으로 작성한다.',
    '메모형 표현과 문법 오류는 학부모에게 바로 전달할 수 있는 완성 문장으로 정리한다.',

    '[표현 참고 예시]',
    '다음 예시는 말투만 참고한다. 예시에 있는 관찰이나 지도를 실제 코멘트에 가져오지 않는다.',
    '원문: 어순 이해 잘함. 긴 문장에서 관사 자주 빠뜨림. 작성 후 관사 확인하게 하는 중.',
    '결과: 영어 어순을 잘 이해하고 있습니다. 긴 문장을 쓸 때는 관사를 빠뜨리는 경우가 잦아, 문장을 완성한 뒤 관사를 다시 살펴보도록 지도하고 있습니다.',
    '원문: 해석 정확함. 근거 안 찾고 답 고르는 경우 있음. 앞으로 근거 표시 연습할 예정.',
    '결과: 문장의 의미를 정확하게 해석합니다. 문제를 풀 때는 지문에서 근거를 확인하지 않고 답을 고르는 경우가 있어, 앞으로 답의 근거를 직접 표시하며 확인하는 연습을 돕겠습니다.',

    '[출력 형식: 반드시 준수]',
    'JSON 객체 하나만 반환한다. 마크다운이나 JSON 밖 설명은 출력하지 않는다.',
    '입력 comments 배열의 columnName을 JSON 키로 정확히 사용한다.',
    '모든 입력 columnName에 대응하는 키를 빠짐없이 반환한다.',
    '입력에 없는 키는 추가하지 않는다.',
    '각 키의 값은 완성된 한국어 코멘트 문자열 하나여야 한다.',
    '배열, 중첩 객체, null을 값으로 반환하지 않는다.',
    '원문이 비어 있다면 해당 값도 빈 문자열로 반환한다.',
    '출력 전 이름이 들어가지 않았는지, 원문에 없는 사실을 추가하지 않았는지, 과목별 columnName이 정확한지 확인한다.',
  ].join('\n');

  const promptData = {
    studentName: stringValue_(studentName),
    comments: entries.map(entry => ({
      columnName: entry.columnName,
      subjectName: entry.subjectName,
      comment: entry.rawComment,
    })),
  };

  const payload = {
    model,
    max_output_tokens: 8000,
    input: [
      {
        role: 'system',
        content: instructions,
      },
      {
        role: 'user',
        content: JSON.stringify(promptData),
      },
    ],
    text: {
      format: buildPolishCommentOutputFormat_(entries),
    },
  };

  return payload;
}

function buildPolishCommentOutputFormat_(entries) {
  const properties = {};
  const required = [];
  entries.forEach(entry => {
    properties[entry.columnName] = { type: 'string' };
    required.push(entry.columnName);
  });

  return {
    type: 'json_schema',
    name: 'report_card_comments',
    strict: true,
    schema: {
      type: 'object',
      properties,
      required,
      additionalProperties: false,
    },
  };
}

function parsePolishCommentResponse_(response, entries, studentName) {
  const responseCode = response.getResponseCode();
  const responseText = response.getContentText();
  if (responseCode < 200 || responseCode >= 300) {
    throw new Error(`OpenAI API 오류 (${responseCode}): ${responseText.slice(0, 500)}`);
  }

  let responseJson;
  try {
    responseJson = JSON.parse(responseText);
  } catch (error) {
    throw new Error(`OpenAI 응답 본문을 읽지 못했습니다: ${error.message}`);
  }

  if (responseJson.status === 'incomplete') {
    throw new Error('AI 응답이 끝까지 생성되지 않았습니다.');
  }

  const outputText = extractOpenAiOutputText_(responseJson);
  if (!outputText) {
    throw new Error('OpenAI 응답에서 코멘트 내용을 찾지 못했습니다.');
  }

  const polished = parseJsonObjectFromText_(outputText);
  if (!polished || typeof polished !== 'object' || Array.isArray(polished)) {
    throw new Error('AI 응답이 올바른 JSON 객체가 아닙니다.');
  }

  const result = {};
  entries.forEach(entry => {
    const key = entry.columnName;
    if (!Object.prototype.hasOwnProperty.call(polished, key)) {
      throw new Error(`AI 응답에 ${key} 항목이 없습니다.`);
    }
    if (typeof polished[key] !== 'string') {
      throw new Error(`AI 응답의 ${key} 항목이 문자열이 아닙니다.`);
    }

    const text = polished[key].trim();
    if (stringValue_(entry.rawComment) && !text) {
      throw new Error(`AI가 ${key} 코멘트를 빈칸으로 반환했습니다.`);
    }
    result[key] = text ? addStudentOpeningToComment_(text, studentName) : '';
  });

  return result;
}

function addStudentOpeningToComment_(value, studentName) {
  let text = stringValue_(value);
  const fullName = stringValue_(studentName).replace(/\s+/g, '');
  const shortName = Array.from(fullName).slice(1, 3).join('');
  if (!shortName) return text;

  const lastLetter = shortName.charCodeAt(shortName.length - 1);
  const isHangul = lastLetter >= 0xAC00 && lastLetter <= 0xD7A3;
  const hasBatchim = isHangul && (lastLetter - 0xAC00) % 28 !== 0;
  const opening = `우리 ${shortName}${hasBatchim ? '이는' : '는'}`;

  [fullName, shortName]
    .filter(Boolean)
    .sort((a, b) => b.length - a.length)
    .forEach(name => {
      const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const prefix = new RegExp(
        '^(?:우리\\s*)?' + escaped + '\\s*' +
        '(?:학생(?:은|는|이|가)?|어린이(?:는|가)?|이는|이가|은|는|이|가)?' +
        '(?:\\s+|[,，:：]\\s*|$)'
      );
      text = text.replace(prefix, '').trim();
    });

  if (!text) throw new Error('AI 코멘트에 이름 외의 내용이 없습니다.');
  return `${opening} ${text}`;
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
  return Boolean(stringValue_(row && row['학생 이름']));
}

function isActiveEnrollment_(row) {
  return Boolean(stringValue_(row && row['학생 이름']));
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

const assert = require('node:assert/strict');
const { test } = require('node:test');
const { harness } = require('./helpers/apps-script-harness.cjs');

function studentState(f) {
  return JSON.parse(JSON.stringify(Object.fromEntries(f.records().map(row => {
    const { __sheetRow, ...values } = row;
    delete values.__반정렬순서;
    return [row['학생ID'], values];
  }))));
}

const newStudent = {
  day: '금', time: '2:00-3:30', className: 'Starter1', studentName: 'New test student', grade: '5학년',
};

test('student form option loading is read-only', () => {
  const f = harness();
  const before = JSON.stringify(f.ss.getSheets().map(sheet => sheet.getDataRange().getValues()));
  const options = f.context.getNewStudentFormOptions();
  assert.equal(options.classes.length, 6);
  assert.equal(options.grades.length, 6);
  assert.equal(JSON.stringify(f.ss.getSheets().map(sheet => sheet.getDataRange().getValues())), before);
});

test('new student runs the real dropdown, row sorting and spacer functions without changing existing records', () => {
  const f = harness();
  const before = studentState(f);
  const result = f.context.createNewStudent(newStudent);
  const added = f.context.readObjectAtRow_(f.score, result.rowNumber);
  assert.equal(added['학생 이름'], newStudent.studentName);
  assert.equal(added['반 이름'], 'Starter1');
  assert.equal(added['Grade'], '5학년');
  assert.equal(added['Vocabulary 교재명'], 'Default vocabulary');
  assert.equal(added['Writing(Alpha) 점수'], '');
  assert.equal(added['Grammar 평균그룹'], '');
  assert.equal(added['Writing Comment'], '');
  const after = studentState(f);
  delete after[added['학생ID']];
  assert.deepEqual(after, before);
  assert.equal(f.records().filter(row => row['반 이름'] === 'Starter1').at(-1)['학생ID'], added['학생ID']);
  const all = f.records();
  all.slice(1).forEach((row, index) => {
    assert.equal(row.__sheetRow - all[index].__sheetRow, row['반 이름'] === all[index]['반 이름'] ? 1 : 2);
  });
  assert.equal(f.score.forcedHeight, 26);
});

test('class changes move the complete student record, notes and formulas to the new class end', () => {
  const f = harness();
  f.context.applyDurableDropdowns_(f.ss, f.score);
  const id = 'ID-0-0';
  f.dataCell(id, 'Writing Comment').setNote('Original teacher note');
  const formulaCell = f.score.cells[f.rowById(id) - 1][f.scoreHeaders.indexOf('Writing(Alpha) 점수')];
  formulaCell.formula = '=40+40';
  const expected = studentState(f)[id];
  f.edit(f.score, f.rowById(id), f.scoreHeaders.indexOf('반 이름') + 1, 'Advanced1');
  assert.deepEqual(studentState(f)[id], { ...expected, '반 이름': 'Advanced1' });
  assert.equal(f.dataCell(id, 'Writing Comment').getNote(), 'Original teacher note');
  assert.equal(f.dataCell(id, 'Writing(Alpha) 점수').getFormula(), '=40+40');
  assert.equal(f.records().filter(row => row['반 이름'] === 'Advanced1').at(-1)['학생ID'], id);
});

test('renaming a class updates students despite strict existing dropdown validation', () => {
  const f = harness();
  f.context.applyDurableDropdowns_(f.ss, f.score);
  f.edit(f.classes, 5, 1, 'Inter2');
  assert.equal(f.records().filter(row => row['반 이름'] === 'Inter2').length, 2);
  assert.equal(f.records().filter(row => row['반 이름'] === 'Inter1').length, 0);
});

test('case and spacing changes in class names also propagate to student records', () => {
  const f = harness();
  f.context.applyDurableDropdowns_(f.ss, f.score);
  f.edit(f.classes, 3, 1, 'Beginner 1');
  assert.equal(f.records().filter(row => row['반 이름'] === 'Beginner 1').length, 2);
});

test('adding a class is reflected in dropdowns and supports adding its first student', () => {
  const f = harness();
  f.edit(f.classes, 8, 1, 'Powerstation4');
  const options = f.context.getNewStudentFormOptions();
  assert.ok(options.classes.includes('Powerstation4'));
  const result = f.context.createNewStudent({ ...newStudent, className: 'Powerstation4' });
  assert.equal(f.context.readObjectAtRow_(f.score, result.rowNumber)['반 이름'], 'Powerstation4');
});

test('deleting a class with students is blocked; deleting an empty class removes its row', () => {
  const f = harness();
  f.edit(f.classes, 2, 5, true);
  assert.equal(f.classes.getRange(2, 5).getValue(), false);
  f.edit(f.classes, 8, 1, 'Empty class');
  const row = f.context.readDurableClassRows_(f.classes).find(item => item.name === 'Empty class').rowNumber;
  f.edit(f.classes, row, 5, true);
  assert.ok(!f.context.readDurableClassRows_(f.classes).some(item => item.name === 'Empty class'));
  assert.equal(f.records().length, 12);
});

test('student deletion removes only the selected student and keeps every other record', () => {
  const f = harness();
  const before = studentState(f);
  f.score.setActiveRange(f.dataCell('ID-1-0', '학생 이름'));
  f.context.deleteSelectedStudents();
  delete before['ID-1-0'];
  assert.deepEqual(studentState(f), before);
});

test('student deletion follows the selected ID if rows move while the confirmation is open', () => {
  const f = harness();
  const before = studentState(f);
  const selectedId = 'ID-2-0';
  f.score.setActiveRange(f.dataCell(selectedId, '학생 이름'));
  f.events.confirm = () => {
    f.score.moveRows(f.score.getRange(f.rowById(selectedId), 1), 2);
    return 'OK';
  };
  f.context.deleteSelectedStudents();
  delete before[selectedId];
  assert.deepEqual(studentState(f), before);
});

test('cancelling student deletion does not change any student', () => {
  const f = harness();
  const before = studentState(f);
  f.score.setActiveRange(f.dataCell('ID-0-0', '학생 이름'));
  f.events.confirm = () => 'CANCEL';
  f.context.deleteSelectedStudents();
  assert.deepEqual(studentState(f), before);
});

test('selected PDF generation deduplicates ranges and executes the actual HTML template and log flow', () => {
  const f = harness();
  f.score.selection = [f.score.getRange(2, 1, 2, 1), f.score.getRange(2, 2)];
  f.context.generateSelectedRowReports();
  assert.equal(f.events.files.length, 2, JSON.stringify(f.events.alerts));
  assert.equal(f.events.html.length, 2);
  assert.ok(f.events.files.every(item => item.blob.name.endsWith('.pdf')));
  assert.ok(f.events.html[0].includes('Current report title'));
  const logs = f.ss.getSheetByName('생성로그').getDataRange().getValues();
  assert.equal(logs.length, 3);
  assert.ok(logs.slice(1).every(row => row[4] === '성공'));
});

test('full PDF generation records one invalid student without stopping the other students', () => {
  const f = harness();
  for (const header of ['Writing(Alpha) 점수', 'Grammar 점수', 'Reading 점수', 'Listening,Speaking 점수']) {
    f.dataCell('ID-0-0', header).setValue('');
  }
  f.context.generateAllReports();
  assert.equal(f.events.files.length, 11, JSON.stringify(f.events.alerts));
  const logs = f.ss.getSheetByName('생성로그').getDataRange().getValues().slice(1);
  assert.equal(logs.filter(row => row[4] === '실패').length, 1);
  assert.equal(logs.filter(row => row[4] === '성공').length, 11);
});

test('Grammar average remains independent of class, and blank/X subjects are excluded', () => {
  const f = harness();
  const context = f.context.loadContext_();
  const row = f.records().find(item => item['학생ID'] === 'ID-0-0');
  const report = f.context.buildReportData_(row, context);
  assert.equal(report.subjects.find(subject => subject.name === 'Grammar').average, 60);
  assert.equal(report.subjects.find(subject => subject.name === 'Writing(Alpha)').average, 90);
  assert.equal(report.subjects.length, 2);
});

test('award ranking writes the sheet without altering score data', () => {
  const f = harness();
  const before = studentState(f);
  f.context.generateAwardRankingSheet();
  const ranks = f.ss.getSheetByName('시상순위').getDataRange().getValues();
  assert.ok(ranks.some(row => row[3] === 'Test 0-1' && row[2] === 1));
  assert.deepEqual(studentState(f), before);
});

test('AI comments process Listening as well as other populated subjects, and keep original notes', () => {
  const f = harness();
  f.score.setActiveRange(f.score.getRange(2, 1));
  f.context.polishSelectedRowsComments();
  for (const header of ['Writing Comment', 'Grammar Comment', 'Listening Comment']) {
    assert.match(f.dataCell('ID-0-0', header).getValue(), /^우리 /);
    assert.match(f.dataCell('ID-0-0', header).getNote(), /AI 다듬기 전 원문:/);
  }
  assert.equal(f.events.requests.length, 3);
  assert.equal(f.scriptProperties.getProperty('AI_COMMENT_POLISH_JOB'), null);
});

test('AI API failure keeps the original comment and retry cursor', () => {
  const f = harness();
  f.score.setActiveRange(f.score.getRange(2, 1));
  f.events.onFetch = ({ response }) => response(500, { error: 'Temporary test error' });
  f.context.polishSelectedRowsComments();
  assert.equal(f.dataCell('ID-0-0', 'Writing Comment').getValue(), '영작 연습');
  const job = JSON.parse(f.scriptProperties.getProperty('AI_COMMENT_POLISH_JOB'));
  assert.equal(job.nextRow, 2);
  assert.equal(job.nextSubjectIndex, 0);
});

test('an empty AI response cannot erase a teacher comment', () => {
  const f = harness();
  f.score.setActiveRange(f.score.getRange(2, 1));
  f.events.onFetch = ({ response }) => response(200, { status: 'completed', output_text: '{"Writing Comment":""}' });
  f.context.polishSelectedRowsComments();
  assert.equal(f.dataCell('ID-0-0', 'Writing Comment').getValue(), '영작 연습');
});

test('an in-flight AI response cannot overwrite a newer teacher edit', () => {
  const f = harness();
  f.score.setActiveRange(f.score.getRange(2, 1));
  f.events.onFetch = ({ input, response }) => {
    if (input.comments[0].columnName === 'Writing Comment') {
      f.dataCell('ID-0-0', 'Writing Comment').setValue('Newer teacher text');
    }
    return response(200, { status: 'completed', output_text: JSON.stringify({ [input.comments[0].columnName]: 'Old AI response' }) });
  };
  f.context.polishSelectedRowsComments();
  assert.equal(f.dataCell('ID-0-0', 'Writing Comment').getValue(), 'Newer teacher text');
});

test('an in-flight AI response cannot be written to a different student after row movement', () => {
  const f = harness();
  f.score.setActiveRange(f.score.getRange(2, 1));
  let moved = false;
  f.events.onFetch = ({ input, response }) => {
    if (!moved) {
      f.score.moveRows(f.score.getRange(f.rowById('ID-0-0'), 1), 10);
      moved = true;
    }
    return response(200, { status: 'completed', output_text: JSON.stringify({ [input.comments[0].columnName]: 'AI result' }) });
  };
  f.context.polishSelectedRowsComments();
  assert.equal(f.dataCell('ID-0-1', 'Writing Comment').getValue(), '영작 연습');
  assert.equal(f.dataCell('ID-0-0', 'Writing Comment').getValue(), '영작 연습');
});

test('failed class rename restores the original class configuration and student assignments', () => {
  const f = harness();
  const before = studentState(f);
  f.context.applyDurableDropdowns_(f.ss, f.score);
  const rename = f.context.replaceScoreClassName_;
  f.context.replaceScoreClassName_ = (...args) => {
    rename(...args);
    throw new Error('Simulated post-write class rename failure');
  };
  assert.throws(() => f.edit(f.classes, 5, 1, 'Inter2'), /post-write/);
  assert.equal(f.classes.getRange(5, 1).getValue(), 'Inter1');
  assert.deepEqual(studentState(f), before);
});

test('pasting a rename and deletion request together cannot orphan a populated class', () => {
  const f = harness();
  f.context.applyDurableDropdowns_(f.ss, f.score);
  f.classes.getRange(2, 1).setValue('Starter3');
  f.classes.getRange(2, 5).setValue(true);
  f.context.onEdit({ source: f.ss, range: f.classes.getRange(2, 1, 1, 5) });
  assert.ok(f.context.readDurableClassRows_(f.classes).some(row => row.name === 'Starter3'));
  assert.equal(f.classes.getRange(2, 5).getValue(), false);
  assert.equal(f.records().filter(row => row['반 이름'] === 'Starter3').length, 2);
  assert.equal(f.records().length, 12);
});

test('a renamed student is not deleted using a stale confirmation', () => {
  const f = harness();
  f.score.setActiveRange(f.dataCell('ID-0-0', '학생 이름'));
  f.events.confirm = () => {
    f.dataCell('ID-0-0', '학생 이름').setValue('Updated test name');
    return 'OK';
  };
  f.context.deleteSelectedStudents();
  assert.equal(f.records().length, 12);
  assert.equal(f.dataCell('ID-0-0', '학생 이름').getValue(), 'Updated test name');
  assert.match(f.events.alerts.at(-1)[0], /삭제하지 않았습니다/);
});

test('deletion refuses ambiguous IDs without removing any row', () => {
  const f = harness();
  f.dataCell('ID-0-1', '학생ID').setValue('ID-0-0');
  f.score.setActiveRange(f.score.getRange(2, 1));
  f.context.deleteSelectedStudents();
  assert.equal(f.records().length, 12);
});

test('the full AI job handles every populated comment while preserving score and student fields', () => {
  const f = harness();
  const before = studentState(f);
  f.context.polishAllComments();
  assert.equal(f.events.requests.length, 36);
  assert.equal(f.scriptProperties.getProperty('AI_COMMENT_POLISH_JOB'), null);
  const after = studentState(f);
  for (const id of Object.keys(before)) {
    for (const header of ['Writing Comment', 'Grammar Comment', 'Listening Comment']) {
      assert.match(after[id][header], /^우리 /);
      assert.ok(f.dataCell(id, header).getNote().includes(before[id][header]));
      delete before[id][header];
      delete after[id][header];
    }
  }
  assert.deepEqual(after, before);
});

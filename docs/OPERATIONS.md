# Operating Guide

This guide describes the November 2026 release. The spreadsheet interface remains in Korean for the academy staff; the explanations here are in English.

## Install or Update

The container-bound Apps Script project needs four files:

| File | Apps Script file type | Purpose |
| --- | --- | --- |
| `Code.gs` | Script | Application logic and menu |
| `ReportTemplate.html` | HTML, named `ReportTemplate` | PDF template |
| `StudentForm.html` | HTML, named `StudentForm` | New-student dialog |
| `appsscript.json` | Project manifest | V8 runtime, timezone, permissions |

Open the intended spreadsheet and use **Extensions > Apps Script**. Replace the corresponding files, preserving the exact HTML names. Enable the manifest in project settings when needed; do not paste JSON into a script or HTML file.

For a workbook already migrated to this release's operating model, save and reload the spreadsheet. **Do not rerun `setupDurableReportSystem` for routine code updates.**

For a legacy workbook, first make an independent full-file copy, stop all editing, and test the migration on that copy. Run `setupDurableReportSystem` once from the script editor, then reload the spreadsheet. It normalizes legacy fields, installs the default class structure, compares protected assessment values, and removes `점수` and `학생명단` after the check succeeds. It is not an all-or-nothing migration: if it fails, inspect the copy before retrying. The known legacy `Pre-Inter4` class maps to `Inter2`; other unsupported classes require review. Do not delete a legacy tab unless its necessary data already exists in `성적입력`.

The manifest needs Sheets access to open and verify a separate archive, Drive access to save files, UI access for dialogs, property storage, and external requests for optional AI processing. No installable time or synchronization trigger is required. Review any extra scripts and existing triggers in the live project separately.

## Everyday Work

`성적입력` is the source of truth. Do not maintain a separate roster for synchronization.

- Add a student with **성적표 생성 > 신입생 추가**. Choose day, time, class, type the name, and select Grade. The new row receives an ID and the class's textbook defaults, with blank scores/comments/Grammar group.
- Change a student's `반 이름` in that row to move the complete record to the end of the target class block. Do not cut/paste only part of a student record.
- Select a departing student's row and use **퇴원생 삭제**. Confirm the displayed identity. This permanently deletes that student's scores and comments too.
- Enter assessment values in the student's row. Blank or `X` means no score; zero is a valid score. Use scores from 0 to 100.
- Set `Grammar 평균그룹` independently of the main class when needed. Other subject averages use the main class name.

The first four columns and the header stay frozen. Class blocks follow Starter, Beginner, Pre-inter, Inter, Advanced, Powerstation, with one blank row between blocks. Long-comment wrapping is a presentation setting, not deletion of the text; sheet formatting operations may reapply wrapping.

If a student-add dialog reports an error after submission, inspect the sheet before retrying. A late error can follow a successful insertion. The application does not merge students simply because their names match.

## Manage Classes

Edit `반별설정` directly:

- Add a class by entering a unique name on an empty row.
- Rename the existing class-name cell. The dropdown and students using that class are updated.
- Delete an empty class using its `삭제` checkbox. A class with students cannot be deleted.
- Change textbook defaults for future students; existing students' textbook entries are not overwritten.

Do not delete class rows through the Sheets row menu or overwrite hidden class metadata. Initial setup creates 18 classes, but normal operation permits later additions and renames.

## Reports and AI

The custom menu is intentionally limited to:

```text
Selected-row student PDFs
All-student PDFs
Award ranking
-------------------------
Add new student
Delete departing student
-------------------------
Polish selected-row AI comments
Polish all AI comments
Store AI API key
-------------------------
Close quarter and reset assessments
```

Set the title, output month, PDF folder, filename rule, and AI model in `출력설정`. Reports do not require AI-polished comments. PDF generation omits missing optional information and records each success/failure in `생성로그`. Preview representative PDFs, especially unusually long comments, before distributing them.

AI processing is optional and uses the stored API key. It preserves originals in notes and supports configured Listening/Speaking header aliases. Failures retain their retry position; run the same menu again after resolving the error or reaching the execution budget. This is manual continuation, not a background time-trigger job. Do not reorganize rows or edit comments while a batch is running. A detected concurrent change stops that write instead of overwriting it.

Student names and teacher comments are sent to the API when enabled. Obtain the academy's approval for that data transfer. Never put keys or real assessment exports in this repository.

## Close a Quarter

Finish PDF output and pause all teacher editing, student/class changes, and AI/PDF jobs. Then choose **분기 종료 성적표 초기화**, enter a Drive folder name and archive label, review the reset scope and next exam, and confirm.

A unique existing folder is reused; an absent folder is created after confirmation. Duplicate folder names cause a stop rather than an arbitrary choice. An exact Drive folder URL can disambiguate. A later empty response reuses the remembered destination. The archive destination is separate from the PDF folder setting.

The full workbook is copied and opened for verification before reset. The verification checks sheet names, grid dimensions, cell values, formulas, and notes; it does not independently validate every formatting or protection attribute. If verification fails, assessment inputs are not cleared.

| Cleared after verification | Preserved |
| --- | --- |
| Four subject-score columns | Names, IDs, days, times, classes |
| Configured subject-comment columns and aliases | Grade, Grammar average groups, textbooks |
| Formulas and notes within those target columns, including `=""` | Ratings, formatting, dropdowns, class settings |
| This workbook's stale AI resume state | API key, prior ranking sheet, generation logs, PDF folder |

Only the report title and output month automatically advance:

```text
April:    1st Semester Midterm
June:     1st Semester Finalterm
October:  2nd Semester Midterm
December: 2nd Semester Finalterm
Next:     April of the following year
```

The configured month must use the format `2026년 10월` and be April, June, October, or December. The current setting, not today's date or archive label, determines the next exam. Empty already-reset inputs do not advance again. Review the retained PDF folder before the next reporting cycle and regenerate ranking after new scores are entered.

If reset fails after clearing starts, the program attempts a limited rollback. Newer edits are not overwritten. An interrupted operation blocks a further reset and supplies the archive link; inspect that archive and recover before proceeding. Do not bypass the recovery marker or assume that an error means no changes occurred.

## Permissions and Remaining Limits

Restrict headers, identity/hidden columns, class settings, and output settings to administrators where practical. Teachers generally need scores, ratings, and comments. Apply real editor restrictions rather than warning-only protection. Test teacher-account permissions on a copy: whole-row movement and sorting can fail against protected identity columns, so administrators should perform those operations.

This release does not install an admin allowlist or automatic sheet-protection policy. Menu visibility is not authorization. Range protections alone cannot prevent a teacher from clearing an assessment range they can edit; choose workbook editors accordingly.

Script locks coordinate code, not direct human editing. Neither the local tests nor backup checks guarantee every external-service or multi-user scenario. Keep independent backups, test upgrades on a disposable copy, and do not treat this as a zero-risk system.

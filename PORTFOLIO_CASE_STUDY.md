# Portfolio Case Study: Academy Report Automation

## Overview

I built this system while working as an assistant English instructor at an elementary English academy. The original report-card workflow required teachers to maintain student lists, copy information into score sheets, calculate comparison averages, prepare PDFs, and rank students for awards.

My goal was not to replace Google Sheets with a new application. It was to make the existing tool reliable enough to operate as a small internal system for non-technical staff.

This account follows the project from its first delivery to the November 2026 release. Earlier synchronization designs are described as development history, not as instructions for the current system.

## Timeline in the Repository

| Period | Milestone | Historical evidence |
| --- | --- | --- |
| July 5, 2026 | First report-card automation and repository setup | `04d7765`, `fc13584` |
| July 8-9 | AI comment polishing and workflow improvements | `1ea4a70`, `563f24b` |
| July 14-15 | User feedback, data-recovery lessons, and guarded roster synchronization | `c988fd5`, `aaa5b79` |
| July 21 | English portfolio presentation | `b84513a` |
| October 14 | Score entry becomes the single source of truth | `5e69aff` |
| October 19 | Direct student/class management and its development narrative | `2906bc1`, `787f857`, `1d58e3c` |
| October-November | Durable setup, student form, recoverable AI jobs, verified quarter-end reset, and regression coverage | Current release and `tests/` |

These are recorded milestones, not a reconstructed day-by-day timesheet. The existing commits are preserved, including the intermediate designs that informed the final workflow.

## Context and Constraints

The workflow had several practical constraints:

- Teachers were already comfortable with Google Sheets.
- Student assignments changed during the semester.
- Grammar groups did not always match the main class structure.
- Existing scores and comments could not be lost during roster updates.
- Class dropdown colors were meaningful visual cues for staff.
- The solution needed to remain understandable without a dedicated developer.

These constraints made data integrity and operational fit more important than introducing a larger technology stack.

## Initial Delivery

The first version automated the visible output of the process:

- generated individual two-page PDF report cards
- supported both two-subject and four-subject layouts
- calculated class averages and separate grammar-group averages
- rendered student-versus-average charts
- generated class award rankings with tie handling
- logged PDF file names, statuses, and Google Drive links
- added configurable titles, output months, folders, and naming rules
- polished short teacher notes through the OpenAI Responses API while retaining the original note in the cell

Once the output workflow worked, real use exposed harder problems in the spreadsheet's data lifecycle.

## Iteration 1: Student Identity, Not Row Position

### Problem

An early cleanup routine depended too heavily on row positions. That assumption broke when rows were reordered or blank separator rows were inserted. A row number described where a student happened to appear, not who the student was.

### Diagnosis

The roster and score sheet had no durable shared key. Matching only by visible fields was also insufficient because names can repeat and class placement can change.

### Solution

I introduced a hidden `학생ID` in the score-entry sheet.

- New students receive a UUID-based identifier.
- Existing score rows are connected only when a stable ID or unique student name makes the match safe.
- In this intermediate design, sync operations updated roster-owned fields while assessment data stayed attached to the ID.
- Duplicate roster IDs were detected and replaced. The final design no longer maintains a separate operational roster.

This made visual sorting independent from student identity.

## Iteration 2: Replacing Destructive Sync with a Safer Intermediate Model

### Problem

The first synchronization design still treated a missing roster row as a deletion candidate. In real use, list replacement, row movement, and partial edits made that assumption unsafe. Teachers reported that entered assessment content could disappear while they were maintaining the roster.

### Intermediate Solution

I first replaced destructive synchronization with a non-destructive import model.

- A safe paste-import may add a score row or update day, time, class, name, and enrollment status.
- It may not clear or move existing score rows.
- Scores, ratings, grades, grammar groups, textbooks, comments, notes, and formulas remain untouched.
- A departing student could be marked `퇴원`, preserving history while excluding that row from batch reports and rankings.
- Students absent from an imported roster remained stored until staff explicitly reviewed them.

A document lock prevents overlapping roster imports.

## Iteration 3: Removing Automatic Sync Side Effects

### Problem

During one iteration, class dropdowns lost their assigned colors after synchronization and appeared white. The data itself was correct, but the spreadsheet became harder for staff to scan.

### Diagnosis

The automatic path was rewriting data-validation rules while syncing roster data. That coupled two separate responsibilities:

1. keeping student membership and class placement current
2. configuring the spreadsheet's dropdown interface

Rebuilding the validation rule also rebuilt its presentation.

### Solution

I separated one-time roster import from sheet setup and moved normal operations away from installable synchronization triggers.

- Normal student and class edits now happen directly in `성적입력`.
- The intermediate importer did not sort, delete, or rebuild completed assessment data.
- Dropdown setup and sheet formatting became separate operations rather than side effects of roster synchronization.
- Student rows are now managed directly in `성적입력`; class changes move the intact row to the target class block.

This separated presentation changes from roster movement, but it did not make every later dropdown rebuild preserve custom colors. The current release uses its own layout and disables legacy synchronization entry points without requiring privileged trigger enumeration or removal. The experiment also exposed the next product problem: even a safe two-sheet workflow was harder for staff to reason about than direct editing.

## Iteration 4: Domain-Specific Class Ordering

### Problem

Alphabetical sorting did not represent the academy's curriculum progression. It could place `PowerStation` before `Pre-Inter`, and each sheet could drift into a different order.

### Solution

I initially encoded the academy's explicit order:

```text
Beginner 1, 2, 3, 4
Pre-Inter 1, 2, 3, 4
Advanced 1, 2, 3, 4
PowerStation 1, 2
```

The comparator normalizes spaces, hyphens, and capitalization before assigning a rank. The class settings list and later row-placement behavior use the same normalized class identity.

Later feedback expanded the progression to Starter, Beginner, Pre-inter, Inter, Advanced, and Powerstation. The final setup creates three levels in each group, with legacy levels still recognized by the ordering table.

## Iteration 5: From Safe Synchronization to Direct Row Management

### Problem

The non-destructive importer protected assessment data, but staff still had to understand which sheet owned each field and when synchronization should run. User feedback consistently returned to the same desired workflow: add or edit a student directly where scores are entered.

### Solution

I made `성적입력` the only operational source of truth and removed normal dependence on `학생명단`.

- New students are created from a menu command with a stable hidden ID.
- Entering or changing a class moves the complete physical row to the end of that class block.
- Scores, ratings, textbooks, grammar groups, comments, notes, formulas, formatting, and validation move with the row.
- One blank row is maintained between different classes.
- The first four identity columns remain frozen while assessment columns scroll horizontally.
- Class add, rename, and delete operations are handled in the class-settings sheet; deletion is blocked while students still use the class.
- Student removal is explicit and deletes the complete row after confirmation.
- The redundant `출력여부` column was removed; active students are the batch-output population.

The final design became simpler for staff and safer for existing teacher work because normal operations no longer copy data between sheets. This was not a clean-slate rewrite: it came from observing real failures, preserving already-entered work, and narrowing automation to behavior staff could predict.

## Iteration 6: A Durable Staff Interface

### Problem

Simplifying the data model did not automatically simplify use. Staff still encountered inconsistent class names, oversized rows, missing dialog files, and choices that did not reflect class settings. They wanted to create a student without constructing a spreadsheet row manually.

### Changes

- Added a new-student dialog in the requested order: day, time, class, student name, and Grade.
- Restricted repeated fields to dropdown choices and loaded classes from `반별설정`.
- Made opening the form read-only so loading choices would not reinitialize class settings.
- Used section colors, frozen identity columns, compact forced row heights, and one blank row between class blocks.
- Kept the menu focused on reports, ranking, student lifecycle, AI comments, and term closure.
- Moved class management into the settings sheet instead of duplicating it across several menu commands.

One production error was particularly instructive: student insertion succeeded, but a later selection step referenced an undefined `studentId`. The dialog showed a failure after a row had already been created, encouraging a second click. I fixed the missing ID variable and added a test that follows the inserted ID through sorting and separator insertion. This is not a claim that every partially completed operation is now transactional or that duplicate names are automatically merged.

## Iteration 7: Repairing AI and PDF Failure Paths

### Problem

Some Listening/Speaking comments were not found because the workbook used alternate header spellings. Batch calls could also stop partway through, and the teacher needed to know whether a comment had failed or had simply been skipped. Reports with blank optional fields looked unfinished, while API processing and PDF generation were being confused as one dependency.

### Changes

- Recognized the configured Listening/Speaking comment aliases, including slash-separated headers.
- Preserved the existing teacher-approved prompt and Korean student-name opening.
- Retained original comments in cell notes and rejected empty API output.
- Added retries and a saved row-and-subject cursor, with manual continuation from the same menu rather than a required time trigger.
- Rechecked identity and comment content before writing a response received after an API request.
- Kept report generation independent of whether AI had polished a comment.
- Omitted empty optional ratings, textbook rows, and comment sections in the report template.
- Logged individual report failures while allowing other valid students to continue, with bounded conversion retries.

A delayed response is not allowed to overwrite a teacher's newer comment or a different student's row. This is an optimistic recheck around each write, not a guarantee that all human edits across a spreadsheet are atomic.

## Iteration 8: Treating Class Changes and Deletion as Integrity Operations

### Problem

A class rename could fail against an old strict dropdown list. A student selected for deletion could also move while the confirmation dialog was open. Using the old row number after that delay would risk deleting the wrong student.

### Changes

- Refresh class dropdown choices before propagating a renamed class to student rows.
- Propagate case and spacing changes as well as substantive renames.
- Restore the prior class configuration and assignments if the rename write fails.
- Check both old and edited class names when a paste requests a rename and deletion together.
- Read the selected student's stable ID before confirmation and find that ID again under the document lock before deleting.
- Refuse deletion when the ID is ambiguous or the selected student's identity changed during confirmation.
- Resolve a new student's class under the same lock used for insertion rather than trusting a stale form choice.

These changes came from asking what could change between reading data and acting on it. A confirmed action needs a current target, not just a previously valid row number.

## Iteration 9: Closing a Quarter Without Rebuilding the Workbook

### Problem

Staff wanted to keep using the same student-management workbook after each reporting cycle. Manually clearing columns risked removing identity data or resetting the wrong fields. Automatically clearing everything without a verified archive was not acceptable either.

### Workflow

1. Show the archive destination, reset scope, and next exam before confirmation.
2. Resolve a folder by name, create it only after confirmation if absent, and refuse ambiguous duplicate folder names.
3. Acquire script/document locks and check that the confirmed workbook has not changed.
4. Copy the complete workbook, verify its destination, open it, and compare sheet names, grid dimensions, values, formulas, and notes.
5. Record that clearing has started, then clear only the designated subject-score and comment columns and their notes.
6. Advance the configured report title and output month and verify the final state.
7. Attempt a limited rollback on failure; stop rather than overwrite newer data, and retain the archive link for recovery.

The calendar follows April -> June -> October -> December -> next April, using the configured output month rather than today's date. Names, IDs, class placement, Grammar groups, Grade, books, ratings, the API key, and the PDF destination remain unchanged. Existing ranking and log sheets remain as historical output until regenerated.

An initial safeguard refused any formula in a reset column. That blocked real use because some comments were generated with `IF` and even `=""` placeholders counted as formulas. After the user explicitly requested it, the policy changed: formulas inside the score/comment reset columns are archived and cleared too. Formulas outside that allowlist remain untouched. The lesson was to define the intended destructive scope precisely, not to treat every formula as permanent data.

This is not a database transaction. Locks do not stop direct teacher input, and a hard timeout can prevent an in-process rollback. An unfinished operation therefore blocks a second reset until the archived data has been reviewed. Everyone must pause editing and API/PDF work during term closure.

## Iteration 10: Making Regression Evidence Repeatable

The local release suite contains 78 passing tests using synthetic students and in-memory service doubles. It runs actual application functions and the HTML report template while simulating Google Sheets, Drive, PDF conversion, and API responses.

| Area | Examples covered |
| --- | --- |
| Student lifecycle | Missing ID regression, class placement, preserved records, canceled deletion, moved rows, ambiguous IDs |
| Class management | Add/rename/delete, strict dropdowns, case changes, rollback, combined rename/delete paste |
| AI comments | Listening handling, empty responses, API failure, retry cursor, original notes, newer edits and row moves |
| Reports and ranking | Selected ranges, deduplication, HTML preparation, per-student failure logging, averages and ranks |
| Quarter closure | Copy/open/verification failures, cancellation, locks, permissions, partial rollback, formulas, folder ambiguity, next-year rollover |

The tests require no external packages or real credentials. They do not prove live OAuth behavior, paid API output quality, browser dialog behavior, or actual Google PDF pagination. Those checks still belong on a disposable copy of the workbook. See [tests/README.md](tests/README.md).

## Final Operational Flow

1. Staff manage active classes and textbook defaults in `반별설정`.
2. Staff add students through the dialog, change class placement in `성적입력`, and confirm departures through the delete command.
3. Adding a student or changing a class moves the intact row into the correct class block.
4. Staff enter scores, ratings, grammar groups, books, and comments in that same row.
5. The system calculates the correct comparison group for each subject.
6. Teachers generate PDFs and award rankings from the custom menu.
7. Generation results and Drive links are written to `생성로그`.
8. An administrator archives and verifies the workbook before clearing quarterly scores/comments and advancing the exam settings.

## Engineering Decisions

| Decision | Reason |
| --- | --- |
| Keep Google Sheets as the interface | Minimize training and deployment cost |
| Use stable hidden IDs | Decouple student identity from row order |
| Move complete physical rows | Keep all assessment fields attached during class changes |
| Separate sync from validation setup | Preserve dropdown colors and reduce side effects |
| Use an explicit class-order table | Model the academy's real curriculum sequence |
| Make deletion explicit | Prevent hidden cleanup logic from removing teacher work |
| Replace automatic sync with direct editing | Keep one source of truth and remove synchronization side effects |
| Store API keys in Script Properties | Keep secrets out of sheets and source code |
| Revalidate identities before destructive or delayed writes | Avoid stale selections and responses targeting the wrong record |
| Verify the archive before reset | Make recovery evidence a prerequisite for clearing assessment data |
| Save operation state and refuse unresolved resets | Avoid compounding a partial failure |
| Keep synthetic regression fixtures in the repository | Reproduce failures without exposing student data |

## Result

The final system combines report generation with the less visible work required for safe day-to-day operation:

- one source of truth in `성적입력`
- direct handling of normal student additions and class changes
- intact-row movement that preserves existing assessment data
- explicit student and class lifecycle controls
- consistent class order across sheets
- consistent dropdown choices and a compact, section-colored interface
- repeatable PDF and ranking generation
- a verified archive/reset workflow and automatic exam-calendar advancement
- repeatable local tests alongside editable settings for non-technical users

No unsupported performance percentage is claimed here. The value of the project is demonstrated by the removal of repeated manual steps, the safeguards added after real operational failures, and continued positive feedback from academy staff.

## What I Learned

- Spreadsheet automation is a data-modeling problem, not only a scripting problem.
- Stable identity matters whenever users can sort, insert, or delete rows.
- Safe automation needs a defined refusal path for uncertain destructive changes.
- Visual spreadsheet behavior can be part of the user interface and should be regression-tested.
- Real user feedback often reveals lifecycle problems that are invisible in a first demo.
- A visible error can occur after a write succeeds; recovery instructions must not assume nothing happened.
- Backups need verification, and resets need both a precise scope and an interrupted-operation policy.
- Local service mocks provide useful regression evidence without claiming live-service guarantees.

## Scope and Remaining Responsibilities

This release does not include production student lists, the temporary one-time spreadsheet migration module, automatic role-based menu authorization, or preinstalled teacher protection rules. Administrators must configure access and keep an independent backup before migration. One-time setup changes the schema and removes legacy tabs; it is not a routine refresh command.

I used AI assistance throughout implementation. My contribution was identifying the problem, translating teacher feedback into constraints, reproducing reported failures, choosing safer workflows, testing changes, and documenting the limits. I treat those decisions and the resulting operational behavior as the portfolio evidence, rather than claiming unaided authorship or a system with no possible errors.

## Skills Demonstrated

- Google Apps Script and Google Sheets automation
- Data synchronization and integrity safeguards
- HTML/CSS PDF templating
- Trigger design and concurrency control
- OpenAI API integration
- Requirements gathering with non-technical users
- Iterative debugging and product improvement
- Technical documentation and operational handoff

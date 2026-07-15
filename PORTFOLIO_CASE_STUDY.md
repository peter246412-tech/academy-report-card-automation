# Portfolio Case Study: Academy Report Automation

## Overview

I built this system while working as an assistant English instructor at an elementary English academy. The original report-card workflow required teachers to maintain student lists, copy information into score sheets, calculate comparison averages, prepare PDFs, and rank students for awards.

My goal was not to replace Google Sheets with a new application. It was to make the existing tool reliable enough to operate as a small internal system for non-technical staff.

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

I introduced a hidden `학생ID` on both sheets.

- New roster students receive a UUID-based identifier.
- Existing score rows are backfilled only when a unique visible key or unique name makes the match safe.
- Sync operations update the roster-owned fields while leaving scores and comments attached to the same ID.
- Duplicate IDs are detected and replaced on the roster.

This made visual sorting independent from student identity.

## Iteration 2: Safe Add, Update, and Remove Behavior

### Problem

Adding a student is simple, but removal is ambiguous. A student may have left the roster after teachers already entered scores or comments. Automatically deleting that row would be convenient and unsafe at the same time.

### Solution

I divided score-sheet fields into two categories:

- replaceable class defaults, such as textbook names
- protected teacher work, such as scores, ratings, grammar groups, grades, comments, notes, and formulas

If a removed roster student has only replaceable defaults, the old score row is cleared automatically. If protected data exists, synchronization stops and reports the rows that require manual review. This favors explicit review over silent data loss.

I also added a document lock so an automatic trigger and a manual sync cannot modify the workbook concurrently.

## Iteration 3: Automatic Sync Without Destroying Dropdown Colors

### Problem

During one iteration, class dropdowns lost their assigned colors after synchronization and appeared white. The data itself was correct, but the spreadsheet became harder for staff to scan.

### Diagnosis

The automatic path was rewriting data-validation rules while syncing roster data. That coupled two separate responsibilities:

1. keeping student membership and class placement current
2. configuring the spreadsheet's dropdown interface

Rebuilding the validation rule also rebuilt its presentation.

### Solution

I separated synchronization from sheet setup.

- Simple edits to roster-owned fields still trigger immediate synchronization.
- The installable change trigger handles structural row and column changes only.
- Formatting and generic change events are ignored.
- Routine sync no longer copies or rebuilds validation templates.
- Dropdown setup runs through the explicit maintenance command.
- A manual `학생명단 → 성적입력 지금 동기화` command remains available as a recovery tool, not as the normal workflow.

The result preserves automatic behavior while keeping existing class colors intact.

## Iteration 4: Domain-Specific Class Ordering

### Problem

Alphabetical sorting did not represent the academy's curriculum progression. It could place `PowerStation` before `Pre-Inter`, and each sheet could drift into a different order.

### Solution

I encoded the academy's explicit order:

```text
Beginner 1, 2, 3, 4
Pre-Inter 1, 2, 3, 4
Advanced 1, 2, 3, 4
PowerStation 1, 2
```

The comparator normalizes spaces, hyphens, and capitalization before assigning a rank. `학생명단` is sorted by this domain order, while `성적입력` follows the roster through student IDs. Separator rows are created between class groups without becoming part of the identity model.

## Final Operational Flow

1. Staff manage active classes and textbook defaults in `반별설정`.
2. Staff add, edit, move, or remove students in `학생명단`.
3. The system synchronizes roster-owned fields to `성적입력` and applies the academy class order.
4. Teachers enter assessment data only in `성적입력`.
5. The system calculates the correct comparison group for each subject.
6. Teachers generate PDFs and award rankings from the custom menu.
7. Generation results and Drive links are written to `생성로그`.

## Engineering Decisions

| Decision | Reason |
| --- | --- |
| Keep Google Sheets as the interface | Minimize training and deployment cost |
| Use stable hidden IDs | Decouple student identity from row order |
| Stop on uncertain destructive changes | Protect completed teacher work |
| Separate sync from validation setup | Preserve dropdown colors and reduce side effects |
| Use an explicit class-order table | Model the academy's real curriculum sequence |
| Retain a manual sync command | Provide an operational recovery path |
| Store API keys in Script Properties | Keep secrets out of sheets and source code |

## Result

The final system combines report generation with the less visible work required for safe day-to-day operation:

- one roster source for both operational sheets
- automatic handling of normal student changes
- conservative protection of existing assessment data
- consistent class order across sheets
- preserved dropdown presentation
- repeatable PDF and ranking generation
- editable semester settings for non-technical users

No unsupported performance percentage is claimed here. The value of the project is demonstrated by the removal of repeated manual steps, the safeguards added after real operational failures, and continued positive feedback from academy staff.

## What I Learned

- Spreadsheet automation is a data-modeling problem, not only a scripting problem.
- Stable identity matters whenever users can sort, insert, or delete rows.
- Safe automation needs a defined refusal path for uncertain destructive changes.
- Visual spreadsheet behavior can be part of the user interface and should be regression-tested.
- Real user feedback often reveals lifecycle problems that are invisible in a first demo.

## Skills Demonstrated

- Google Apps Script and Google Sheets automation
- Data synchronization and integrity safeguards
- HTML/CSS PDF templating
- Trigger design and concurrency control
- OpenAI API integration
- Requirements gathering with non-technical users
- Iterative debugging and product improvement
- Technical documentation and operational handoff

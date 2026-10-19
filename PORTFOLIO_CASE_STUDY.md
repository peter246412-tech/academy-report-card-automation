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

I introduced a hidden `학생ID` in the score-entry sheet.

- New students receive a UUID-based identifier.
- Existing score rows are connected only when a stable ID or unique student name makes the match safe.
- Sync operations update the roster-owned fields while leaving scores and comments attached to the same ID.
- Duplicate IDs are detected and replaced on the roster.

This made visual sorting independent from student identity.

## Iteration 2: Replacing Destructive Sync with State

### Problem

The first synchronization design still treated a missing roster row as a deletion candidate. In real use, list replacement, row movement, and partial edits made that assumption unsafe. Teachers reported that entered assessment content could disappear while they were maintaining the roster.

### Solution

I ultimately removed automatic two-sheet synchronization and made `성적입력` the single source of truth.

- A safe paste-import may add a score row or update day, time, class, name, and enrollment status.
- It may not clear or move existing score rows.
- Scores, ratings, grades, grammar groups, textbooks, comments, notes, and formulas remain untouched.
- A departing student is marked `퇴원`, which preserves history while excluding that row from batch reports and rankings.
- Students absent from an imported roster remain stored until staff explicitly mark them as departed.

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

I separated one-time roster import from sheet setup and removed the installable synchronization triggers.

- Normal student and class edits now happen directly in `성적입력`.
- Old installable change triggers are removed during setup.
- Roster import never sorts, deletes, or rebuilds completed assessment data.
- Dropdown setup and sheet formatting run through explicit maintenance commands.
- Student rows are now managed directly in `성적입력`; class changes move the intact row to the target class block.

The result removes the failure-prone automatic behavior while keeping existing class colors intact.

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

The comparator normalizes spaces, hyphens, and capitalization before assigning a rank. The class settings list uses this order, but score rows are no longer sorted automatically because preserving teacher-entered rows is the stronger invariant.

## Final Operational Flow

1. Staff manage active classes and textbook defaults in `반별설정`.
2. Staff add students, change class placement, mark departures, and enter assessment data in `성적입력`.
3. For bulk changes, staff paste a four-column roster into the safe-import dialog.
4. The system adds new rows and updates identity fields without deleting assessment data.
5. The system calculates the correct comparison group for each subject.
6. Teachers generate PDFs and award rankings from the custom menu.
7. Generation results and Drive links are written to `생성로그`.

## Engineering Decisions

| Decision | Reason |
| --- | --- |
| Keep Google Sheets as the interface | Minimize training and deployment cost |
| Use stable hidden IDs | Decouple student identity from row order |
| Remove destructive roster operations | Make completed teacher work invariant under roster changes |
| Separate sync from validation setup | Preserve dropdown colors and reduce side effects |
| Use an explicit class-order table | Model the academy's real curriculum sequence |
| Model departures with `퇴원` state | Preserve history while excluding inactive students from output |
| Replace automatic sync with safe paste-import | Keep one source of truth and remove destructive side effects |
| Store API keys in Script Properties | Keep secrets out of sheets and source code |

## Result

The final system combines report generation with the less visible work required for safe day-to-day operation:

- one source of truth in `성적입력`
- direct handling of normal student additions and class changes
- non-destructive bulk roster import
- non-destructive preservation of existing assessment data
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

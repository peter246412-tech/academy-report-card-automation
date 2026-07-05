# Portfolio Case Study: Academy Report Automation

## Situation

During university break, I started working part-time as an assistant English instructor at an elementary English academy. The academy prepared student report cards, teacher comments, averages, and award rankings manually.

The work was not technically complex, but it was repetitive and easy to make mistakes in:

- copying student scores
- calculating class averages
- writing report-card PDFs
- separating grammar averages from regular class averages
- calculating award rankings by class

## Task

I wanted to reduce the manual workload for teachers without forcing them to learn a new system. Since the academy already used Google Sheets, I proposed building an Apps Script automation system directly inside the existing workflow.

The goal was to make report generation faster, more reliable, and easier for non-technical teachers.

## Action

I built a Google Sheets and Apps Script system that:

- adds and checks required input columns
- applies dropdowns for repeated inputs
- calculates subject averages based on configurable rules
- handles grammar-specific average groups separately
- generates two-page PDF report cards
- displays student scores and averages in a visual chart
- supports subject-specific teacher comments
- creates award rankings by class using total scores
- logs generated PDF results and Drive links

The design was iterated around real teacher needs, including:

- changing PDF layout to match the academy's existing design
- adding per-subject comments instead of one generic comment field
- separating 2-subject and 4-subject report behavior
- adding editable output settings for future semesters
- making class names and grammar groups easier to control
- adding a ranking sheet for student awards

## Result

The system changed the workflow from manual preparation to menu-based automation.

Teachers can now:

- enter scores in one sheet
- generate PDF report cards from a menu
- compare student scores with averages automatically
- avoid manually calculating award rankings
- update semester titles and output settings without editing code

This project demonstrates my ability to identify a real operational problem, communicate a technical solution to non-technical stakeholders, and build a practical automation system that fits into an existing workplace.

## Skills Demonstrated

- Workflow automation
- Google Apps Script
- Google Sheets data modeling
- HTML/CSS PDF templating
- Requirements gathering from real users
- Iterative product improvement
- Human-centered automation design

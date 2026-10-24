# Public access verification

Checked on 24 October 2026 against the published baseline [b5f53a8](https://github.com/aruzhanimm/academic-risk-platform/commit/b5f53a8de488113a8c34d8f638b4fa71ee300aa6).

Thirteen public URLs were fetched without authentication, cookies or API credentials at 11:25 UTC. Every response returned HTTP 200, and every downloaded file matched the corresponding local submission file by SHA-256.

| Material | Checked resources | Result |
| --- | --- | --- |
| Site entry | [Project URL](https://aruzhanimm.github.io/academic-risk-platform/) and [index.html](https://aruzhanimm.github.io/academic-risk-platform/index.html) | Both entry pages contain the expected redirect to the prototype. Browser navigation also confirmed that the redirect works. |
| Interactive prototype | [HTML](https://aruzhanimm.github.io/academic-risk-platform/prototypes/index.html), [JavaScript](https://aruzhanimm.github.io/academic-risk-platform/prototypes/app.js) and [stylesheet](https://aruzhanimm.github.io/academic-risk-platform/prototypes/styles.css) | All three files are accessible and match the submission. These are the directly referenced assets; illustration SVGs are embedded in the HTML. |
| Committee report | [PDF](https://raw.githubusercontent.com/aruzhanimm/academic-risk-platform/main/reports/prob-period-1/SE-2423_Kartam_ProbPeriod1.pdf) and [editable DOCX](https://raw.githubusercontent.com/aruzhanimm/academic-risk-platform/main/reports/prob-period-1/SE-2423_Kartam_ProbPeriod1.docx) | Both files download without signing in and match the checked submission. |
| System context diagram | [Editable JSON](https://raw.githubusercontent.com/aruzhanimm/academic-risk-platform/main/diagrams/sources/system_context.json) and [SVG](https://raw.githubusercontent.com/aruzhanimm/academic-risk-platform/main/diagrams/exports/system_context.svg) | Both files are accessible and match the submission. |
| Use-case diagram | [Editable JSON](https://raw.githubusercontent.com/aruzhanimm/academic-risk-platform/main/diagrams/sources/use_cases.json) and [SVG](https://raw.githubusercontent.com/aruzhanimm/academic-risk-platform/main/diagrams/exports/use_cases.svg) | Both files are accessible and match the submission. |
| Component diagram | [Editable JSON](https://raw.githubusercontent.com/aruzhanimm/academic-risk-platform/main/diagrams/sources/components.json) and [SVG](https://raw.githubusercontent.com/aruzhanimm/academic-risk-platform/main/diagrams/exports/components.svg) | Both files are accessible and match the submission. |

The published prototype was also opened in a browser and all four views were reached: voluntary input, history, estimate and explanation, and data-request preview. The synthetic-data notice, three initial history records and revised “No prediction model is connected” message were visible.

The result view was inspected at an actual viewport width of 500 CSS pixels. Both `window.innerWidth` and the document's `scrollWidth` were 500; the captured view showed no horizontal overflow or overlapping text and controls. A 390-pixel viewport was not verified.

These checks establish public availability, file integrity and the recorded browser observations at the checked revision. Functional demonstration checks are recorded in [Prototype verification](prototype_checks.md); neither record establishes participant usability or predictive performance. The report download links above follow `main`, so later replacements require a fresh file comparison.

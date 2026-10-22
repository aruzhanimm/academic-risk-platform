# Search and Source-Verification Log

**Working draft for team review.** The original searches and reading recorded below took place on **21 October 2026, Asia/Almaty**. English package prepared: **22 October 2026**. A separate final section records limited checks performed while preparing this package.

This log consolidates the recorded work on [measurement](contributions/measurement_review.md), [machine learning](contributions/ml_validation_review.md), and the three official engineering documents listed in the [bibliography](bibliography.md).

The method was targeted thematic web searching followed by primary-source reading: publisher pages, official proceedings, PMC, and a published PDF hosted by an author. No search in Scopus or Web of Science, or separate systematic Google Scholar search, is claimed. Total result counts, numbers of snippets examined, and inter-reviewer agreement were not recorded. No PRISMA flow diagram or exhaustive coverage is claimed. Candidate queries in the protocol that do not appear below remain unexecuted.

## Searches performed

**Date for every row: 21 October 2026. Platform: web search.** Relevant full texts were checked after discovery; the included evidence was not based only on snippets. Outcomes record included sources and material limitations without reconstructing hit counts.

| ID | Actual query | Verification outcome and selection decision |
| --- | --- | --- |
| S-01 | `university student burnout measurement validation scale 2022 2023 2024 longitudinal study open access` | Located BAT-S and UDRQ materials. M-01/M-02 were included after reading Methods, Results, and Discussion and verifying bibliography details: student populations, burnout measurement, and accessible full text |
| S-02 | `academic overload burnout university students longitudinal 2021 2022 2023 study demands resources` | Included M-03 and M-05. Checking M-03's design established three cross-sectional surveys rather than an individual panel. M-05 is used as theory, not as a predictive benchmark |
| S-03 | `"Time Pressure and Health-Related Loss" Frontiers 2021` | After a CAPTCHA prevented access through PMC, the publisher's HTML for M-04 was located and read. Retained as a panel study outside the strict five-year window; exhaustion is not treated as the full burnout construct |
| S-04 | `student burnout prediction machine learning longitudinal open access university students` | Examined candidates for domain-specific ML and temporal design. Results concerning stress or dropout without an appropriate burnout label were not accepted as direct evidence for the project question |
| S-05 | `"student burnout" "machine learning" prediction longitudinal journal` | Refined the search for peer-reviewed ML. Hyejoon Song's 2026 master's thesis and preprint results were not included in the peer-reviewed publication count |
| S-06 | `"academic burnout" "machine learning" "2024"` | Searched for domain-specific models. A title or abstract alone was insufficient for inclusion. Exhaustive evaluation of the alternatives found is not claimed |
| S-07 | `"academic burnout" "machine learning" "2025"` | Checked ML-01 on its BMC page: cross-sectional data and a random 70/30 split. Included with the limitation that it addresses current-state assessment rather than future forecasting |
| S-08 | `Kuzilek Hlosta Zdrahal 2017 Open University Learning Analytics dataset Scientific Data` | Checked ML-02 against the publisher's article and PDF. Included for student-risk data structure and auditing, with the absence of a burnout label explicitly recorded. Raw CSV files were not downloaded |
| S-09 | `Kapoor Narayanan 2023 leakage reproducibility machine learning science Patterns full text` | Checked the published version of ML-03 in PMC and read its main text. Used the journal version reporting 294 affected papers; the preprint is not counted as a second source |
| S-10 | `Lundberg Lee 2017 unified approach interpreting model predictions NIPS proceedings` | Checked ML-04 using official proceedings, the PDF, and public reviews. Included as a foundational explainability method, not as a domain-specific burnout forecast |
| S-11 | `"Explaining individual predictions when features are dependent" 2021 Aas Jullum Løland` | Checked ML-05 using the published PDF hosted by an author; read methods, experiments, and limitations. Included for feature dependence and attribution quality |

## Follow-up reading and verification

- For M-01–M-05, the publisher's open HTML sections identified in the evidence cards were read. Metadata, design, outcome type, and material limitations were checked against the relevant sections and tables. M-05 was read in the specified thematic sections; complete sequential reading of the article is not claimed.
- Four PDFs were obtained for ML-01, ML-02, ML-04, and ML-05, and their main text was extracted. Pages 4–5 of ML-01 were also inspected visually to verify the analysis and variable-selection description. PDF signatures and SHA-256 hashes were checked against the original downloaded files. Those local files and their hash manifest are not included in this handoff; the [bibliography](bibliography.md) provides source links and reading locations. Supplements and appendices recorded as unread are not treated as checked evidence.
- For ML-03, the main published HTML in PMC was read. An attempt to retrieve the PDF from the [NSF repository](https://par.nsf.gov/servlets/purl/10513990) timed out; no local PDF or hash is recorded for it. This download limitation did not prevent access to the main HTML text.
- The downloaded materials were not published. All four original `research/papers_local/*.pdf` paths were checked against Git ignore rules and were excluded.
- A link to peer-review reports for ML-01 appeared on the publisher's page, but the reports could not be read because of an access error. The peer-reviewed publication type was established from the journal and article type, not from reading those reports.
- Access to individual-level source data, their actual schema, and their licences still require separate verification. Candidate metadata were assessed in the [dataset audit](dataset_audit.md). The review does not claim raw-data inspection, replication, or model training.

## Direct checks of official engineering documentation

**Date: 21 October 2026.** The following documents were read through direct official URLs. No separate search query was recorded or reconstructed. These are technical documents, not peer-reviewed scientific publications.

| ID and direct source | Sections read | Substantive use |
| --- | --- | --- |
| **TECH-03:** [DRF Permissions](https://www.django-rest-framework.org/api-guide/permissions/) | Object level permissions; Limitations of object level permissions | Lists require filtering by owner; object-level permission checks alone are insufficient |
| **TECH-06:** [PostgreSQL Row Security Policies](https://www.postgresql.org/docs/current/ddl-rowsecurity.html) | §5.9, introduction and RLS bypass by superusers, `BYPASSRLS` roles, and table owners | RLS needs configuration and testing under the actual application role; it does not provide privacy automatically |
| **TECH-10:** [OpenAPI 3.1.1](https://spec.openapis.org/oas/v3.1.1.html) | §2 and §§3.1–3.2 | Define response contracts and states, including absence of a computed result; this is the specific version read, not a claim about the latest version |

## Inclusion, exclusion, and remaining gaps

Scientific sources were included when they had verifiable bibliography details, peer-reviewed publication status, accessible substantive content, and a clear role in one of the four [protocol](RESEARCH_PROTOCOL.md) questions. The [bibliography](bibliography.md) lists the ten included scientific sources; the three official documents are counted separately. No mechanical ranking of incompatible accuracy, CFI, or AUC values was performed.

Stress, social burnout, dropout, and academic performance were not treated as student burnout. OULAD was retained specifically as a **contrasting example of data structure**, with its target mismatch made explicit. Preprints, the master's thesis, and unverified candidates do not increase the count of ten peer-reviewed publications. The two 2017 sources and M-04/ML-05 from 2021 fall outside the strict **21 October 2021–21 October 2026** window. They were retained for their data and methodological contributions; this does not establish complete coverage of recent research.

Remaining work includes independent review of the synthesis, clarification of instrument permissions and language version, access to a suitable panel, inspection of raw data, and agreement on a future experiment. The search cannot establish that no suitable studies or datasets exist elsewhere. The corpus supports provisional decisions and evidence boundaries; it does not establish model readiness, novelty, or completed research contributions by named team members.

## Limited package checks on 22 October 2026

These checks supplement the original record; they do not represent a new comprehensive literature search.

| Action | Result and scope |
| --- | --- |
| Reopened the publisher pages for M-01, M-02, and ML-01 through their bibliography links | Page titles and reference identities were confirmed. M-02's online date (6 January 2022) and volume year (2023), and ML-01's publication date (17 November 2025), were visible. This alone is not a new full-text review of all three papers. |
| Targeted reading of ML-01 publisher HTML | Rechecked sample size, ABS thresholds, 70/30 split, 10-fold LASSO, AUC interval, the 18-versus-20-variable discrepancy, and the data-availability statement. Existing claims were retained; see the ML evidence card. |
| Web queries: `"Leakage and the reproducibility crisis" "four" "twelve"` and `"Leakage and the reproducibility crisis" "12" "four"` | The [publisher's indexed text](https://www.sciencedirect.com/science/article/pii/S2666389923001599) supported four papers with leakage among 12 with complete code and data. Direct PMC access presented a browser check, and direct publisher access failed. No new full-text reading is claimed for this check. |

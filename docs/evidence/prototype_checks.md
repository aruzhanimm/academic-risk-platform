# Prototype verification

Browser checks completed on 24 October 2026 against the static prototype in this submission. These checks cover demonstration behaviour, not backend services, predictive performance or a participant usability retest.

| Check | Observed result |
| --- | --- |
| Result availability | The default state explicitly says that no prediction model is connected, additional observations do not enable prediction, and an unavailable result does not mean low or zero risk. No score is displayed. |
| Separate insufficient-data example | Selecting the example changes its label and explanation. The screen states that it is a preview and is not inferred from the selected observation. |
| Invalid input | Entering 169 study hours and 2.5 deadlines produces separate range and integer errors. Submitting without the demonstration acknowledgement also produces an error. Focus moves to the first invalid field. |
| Missing value and zero | A record with blank study hours and zero deadlines appears as “Not provided” and “0” respectively. The missing hours are not plotted as zero. |
| Exact duplicate | Submitting that same record again keeps the number of records unchanged and displays a duplicate message. |
| Data request preview | Selecting deletion and confirming the preview displays a pending example and explicitly states that no request was sent and no export or deletion was performed. |
| Reset | Reset restores the three initial sample observations, including the latest record of 28 hours and three deadlines. |
| Narrow screen | The updated result explanation was inspected at an actual 500-pixel viewport. Both `window.innerWidth` and the document's `scrollWidth` were 500. Navigation, text and actions remain visible without horizontal overflow or overlapping content. |

The result wording was revised after the ambiguity identified in the [interview synthesis](interview_synthesis.md). A follow-up participant check is needed to determine whether the revised wording improves understanding.

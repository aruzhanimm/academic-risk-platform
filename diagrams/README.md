# Architecture diagrams

These diagrams describe the [proposed system architecture](../docs/07_architecture.md). They are conceptual designs for team review, not evidence of an implemented or deployed application.

| View | SVG export | Editable source | Reading focus |
| --- | --- | --- | --- |
| System context | [system_context.svg](exports/system_context.svg) | [system_context.json](sources/system_context.json) | Student interactions and the deployment operator's separate control-plane role. |
| UML use cases | [use_cases.svg](exports/use_cases.svg) | [use_cases.json](sources/use_cases.json) | UC-01 voluntary input, UC-02 own history, UC-03 results and limits, and UC-04 export/deletion requests. |
| Components | [components.svg](exports/components.svg) | [components.json](sources/components.json) | Browser, application, persistence, model artifacts, and offline research boundaries. |

## Reading conventions

The context and component diagrams use directed arrows for requests and returned information. A return arrow points back to the caller. Dashed arrows indicate control-plane interactions in the context view and a reviewed manual artifact release in the component view. The UML view uses solid actor associations without directional arrows; these express participation rather than data flow.

Component boundary outlines separate trust and operational responsibilities. They do not prescribe a network topology. The API, storage-access module, and ML adapter belong to one proposed backend application; they are not independent microservices. Authentication, ownership enforcement, validation, and protected artifact loading are required controls whose implementation remains pending.

The student interface has no direct database connection. Offline research does not receive automatic access to student records, and an HTTP request never triggers training. Inference requires an appropriate reviewed configuration. `model_unavailable` and `insufficient_data` contain no score; a completed estimate and its explanation have separate success conditions. Accepting a data request does not mean its export or deletion has completed. The architecture document defines these states in more detail.

LMS integration, medical-record access, and adviser workspaces appear only as scope notes. No active integration is implied.

## Reproduce the SVG exports

Run from the repository root with Python 3; no third-party packages, network access, or browser are required:

```sh
python3 diagrams/render.py
python3 diagrams/render.py --check
```

The [renderer](render.py) resolves paths relative to its own location, so the working directory does not affect the output. The first command regenerates changed or missing exports from every JSON file in `sources/`. The second command checks the exports without writing files and exits with a nonzero status if an export is missing or stale. Output ordering, whitespace, and encoding are deterministic; generated files contain no timestamps.

Edit the JSON sources and regenerate the SVGs together. Sources contain the canvas, text, node geometry, edge points, and label placement. Object IDs must be unique within a diagram. Text is escaped as XML, node and edge coordinates are checked against the canvas, and rendered text is at least 16 SVG units. The renderer uses only Python's standard library and does not evaluate source text as code.

SVGs include a title and description and use a white background with navy and teal elements. They remain vector images at any zoom. After editing, visually inspect the exports for label overlap and arrow clarity; successful regeneration checks consistency, not visual quality or architectural correctness.

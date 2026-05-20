# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository purpose

This repository is primarily a documentation artifact: `README.md` is Jeff Leek's guide *"How to share data with a statistician"* — prose aimed at collaborators, students, and junior statisticians on how to deliver raw data, tidy data, code books, and reproducible recipes to an analyst. The README **is** the deliverable; treat edits to it as edits to a published guide (preserve voice, structure, and links).

A small `chatbot.py` was later added on top of this docs repo. It is unrelated to the README content and lives alongside it.

## Code: `chatbot.py`

A minimal terminal REPL using the Anthropic Python SDK. It keeps an in-memory `history` list of `{role, content}` messages and calls `client.messages.create` on every turn with the full history.

- Model: `claude-opus-4-7` (hard-coded). Don't downgrade when editing.
- Requires `ANTHROPIC_API_KEY` in the environment (read implicitly by the SDK).
- Only handles plain text replies (`response.content[0].text`); has no exit command, no error handling, and assumes the response's first content block is text.

Run it with:

```
pip install anthropic
python chatbot.py
```

## CI (`.github/workflows/python-package-conda.yml`)

GitHub Actions runs on every push:

1. Sets up Python 3.10 and adds conda to PATH.
2. `conda env update --file environment.yml --name base` — **note:** `environment.yml` does not exist in the repo, so this step currently fails. If you add Python dependencies, you'll likely need to create `environment.yml` (listing `anthropic` etc.) for CI to pass.
3. `flake8` — first pass is strict (`--select=E9,F63,F7,F82`) and fails the build on syntax errors / undefined names; second pass is informational (`--exit-zero`, max line length 127, max complexity 10).
4. `pytest` — there are no tests in the repo yet; pytest exits with code 5 ("no tests collected"), which also fails the job.

When changing Python code, run `flake8 .` locally against the strict selectors above before pushing.

## Branching

Per the task instructions for this environment, develop on the designated feature branch (e.g. `claude/add-claude-documentation-DMM4G`) and push there. Do not push to `master`/`main` or open a PR unless explicitly asked.

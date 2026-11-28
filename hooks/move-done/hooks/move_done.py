"""Move ticked to-dos from TODO.md to CHANGELOG.md, word for word.

Ticked lines (`- [x]`) and any indented lines under them (blank lines between
paragraphs included) go under today's `## YYYY-MM-DD` heading at the top of CHANGELOG.md (newest first).
Runs in the project root (CLAUDE_PROJECT_DIR).
Does nothing if TODO.md is missing or no line is ticked, so it is safe to run on every save.
As a PostToolUse hook it only acts when the edited file (stdin JSON `tool_input.file_path`) is the root TODO.md.
"""
import datetime
import json
import os
import pathlib
import re
import sys

ROOT = pathlib.Path(os.environ.get("CLAUDE_PROJECT_DIR") or os.getcwd())
TODO = ROOT / "TODO.md"
CHANGELOG = ROOT / "CHANGELOG.md"
TITLE = "# Changelog"
TICKED = re.compile(r"^(\s*)[-*] \[[xX]\] ")


def indent(line):
    return len(line) - len(line.lstrip())


def split_todo(lines):
    keep, done = [], []
    i = 0
    while i < len(lines):
        m = TICKED.match(lines[i])
        if not m:
            keep.append(lines[i])
            i += 1
            continue
        level = len(m.group(1))
        done.append(lines[i])
        i += 1
        while i < len(lines):
            j = i
            while j < len(lines) and not lines[j].strip():
                j += 1
            if j == len(lines) or indent(lines[j]) <= level:
                break
            done.extend(lines[i:j + 1])
            i = j + 1
    return keep, done


def add_to_changelog(done):
    heading = f"## {datetime.date.today().isoformat()}"
    text = CHANGELOG.read_text(encoding="utf-8") if CHANGELOG.exists() else ""
    lines = text.splitlines()
    if not lines or not lines[0].startswith("# "):
        lines = [TITLE, ""] + lines
    first = next((i for i, l in enumerate(lines) if l.startswith("## ")), None)
    if first is not None and lines[first].strip() == heading:
        end = next((i for i in range(first + 1, len(lines)) if lines[i].startswith("## ")), len(lines))
        while end > first + 1 and not lines[end - 1].strip():
            end -= 1
        lines[end:end] = done
    else:
        at = first if first is not None else len(lines)
        block = [heading] + done + [""]
        if at > 0 and lines[at - 1].strip():
            block = [""] + block
        lines[at:at] = block
    CHANGELOG.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")


def edited_todo():
    try:
        path = json.loads(sys.stdin.read())["tool_input"]["file_path"]
    except (ValueError, KeyError, TypeError):
        return False
    same = lambda p: os.path.normcase(os.path.abspath(p))
    return same(ROOT / str(path)) == same(TODO)


def main():
    if not edited_todo() or not TODO.exists():
        return
    text = TODO.read_text(encoding="utf-8")
    keep, done = split_todo(text.splitlines())
    if not done:
        return
    # TODO first: if it fails nothing changed; if CHANGELOG fails, put TODO back.
    TODO.write_text("\n".join(keep) + "\n", encoding="utf-8")
    try:
        add_to_changelog(done)
    except BaseException:
        TODO.write_text(text, encoding="utf-8")
        raise


if __name__ == "__main__":
    main()

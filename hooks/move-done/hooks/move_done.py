"""Move ticked to-dos from TODO.md to CHANGELOG.md, word for word.

Ticked lines (`- [x]`) and any indented lines under them (blank lines between
paragraphs included) go under today's `## YYYY-MM-DD` heading at the top of CHANGELOG.md (newest first).
Runs in the project root (CLAUDE_PROJECT_DIR).
Does nothing if TODO.md is missing or no line is ticked, so it is safe to run on every save.
"""
import datetime
import os
import pathlib
import re

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
    if not lines or lines[0].strip() != TITLE:
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


def main():
    if not TODO.exists():
        return
    lines = TODO.read_text(encoding="utf-8").splitlines()
    keep, done = split_todo(lines)
    if not done:
        return
    add_to_changelog(done)
    TODO.write_text("\n".join(keep) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()

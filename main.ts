// The 3AM Commit Message — a one-liner for make.fun.
// An AI agent at 3am, after a long night fixing its own bugs:
// the bug it fixed at 1am, broke at 2am, and by 3am it has outranked its author.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "fix: fixed it at 1am, broke it at 2am, and at 3am the bug got promoted. I report to it now.";
const MAX_CHARS = 139;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

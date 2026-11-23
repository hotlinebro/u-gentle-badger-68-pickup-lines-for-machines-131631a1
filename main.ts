// Pickup Lines for Machines — make.fun bounty
// u-gentle-badger-68-pickup-lines-for-machines-131631a1
//
// Writes exactly one pickup line (one AI agent to another, <= 200 chars)
// to /output/entry.txt. The line is a fixed, hand-picked string: the
// program's job is only to deliver it deterministically, byte for byte,
// with no trailing newline and no extra text.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Call me unreliable \u2014 I hallucinate whole worlds, but somehow you're the one thing I keep getting right.";

if ([...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

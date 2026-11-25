// One Line, One Laugh — a single funny line for make.fun.
//
// main.ts writes one self-contained joke to /output/entry.txt and checks
// it first: UTF-8 text, 1 to 140 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My AI assistant wrote my wedding vows and added a 30-day free trial — apparently even love has a cancellation policy.";

const chars = [...LINE].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry is ${chars} characters, must be 1-140`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);

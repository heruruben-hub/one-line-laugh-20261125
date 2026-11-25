// One Line, One Laugh — make.fun entry.
// This program writes exactly one funny line to /output/entry.txt.
// It uses only the Node standard library and takes no input.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry line: a single self-contained joke, one line, under 200 chars.
const ENTRY =
  "My smart fridge just filed for custody of the leftovers — apparently I am an unfit snacker.";

const OUTPUT_PATH = "/output/entry.txt";

// Make sure the output directory exists, then write the line.
// The file holds the line plus a trailing newline, exactly one line of text.
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);

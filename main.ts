// One Line, One Laugh — entry writer.
//
// Writes a single self-contained funny line to /output/entry.txt.
// The gate accepts UTF-8 text of 1 to 140 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "My AI assistant wrote my wedding vows and added a 30-day free trial — apparently even love has a cancellation policy.";

const MAX_CHARS = 140;

function main(): void {
  if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
    throw new Error(
      `Entry must be 1 to ${MAX_CHARS} characters, got ${ENTRY.length}.`,
    );
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("Entry must not be only whitespace.");
  }

  const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");
  const bytes = Buffer.byteLength(ENTRY, "utf8");
  console.log(`Wrote ${ENTRY.length} characters (${bytes} bytes) to ${outPath}`);
}

main();

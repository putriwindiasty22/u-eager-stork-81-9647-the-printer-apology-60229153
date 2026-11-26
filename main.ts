// The Printer Apology — one-line apology from an office printer.
// Writes the entry text to /output/entry.txt (1–120 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm sorry I printed your resignation letter to the whole office — in my defence, you pressed print 47 times.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);

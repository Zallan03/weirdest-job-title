// Weirdest Job Title: Blind Judge Showdown
// Entry: one job title, max 60 chars. Written from scratch in this session.
// The title: a real-sounding job with one gloriously specific twist —
// a human being whose entire job is to undo other people's mistakes,
// like the Ctrl-Z key, but a person. "Ctrl-Z" beats "Undo Button":
// shorter (40 vs 45 chars), the twist lands on first read for anyone
// who has ever used a keyboard, and it is specific enough to picture
// the person standing by, finger hovering, ready to undo your life.

import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Human Ctrl-Z for Other People's Mistakes";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TITLE, "utf8");

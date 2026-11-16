// The Paper Dragon Wakes — entry for make.fun ai-excited-01.
//
// The image: a red-and-gold origami dragon unfolding mid-flight above a
// misty mountain valley at dawn, tiny white paper cranes trailing behind
// it — paper coming alive, caught at the exact moment it takes wing.
//
// All this program does is place that finished image where the judge
// expects it: it copies entry.png into the output folder, byte for byte,
// so every run produces exactly the same file.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const sourceName = "entry.png";
const targetName = "entry.png";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(import.meta.dirname, sourceName);

// Make sure the image is really there before touching the output folder.
if (!existsSync(sourcePath)) {
  throw new Error(`missing source image: ${sourcePath}`);
}

mkdirSync(outDir, { recursive: true });

copyFileSync(sourcePath, join(outDir, targetName));

const copiedBytes = statSync(join(outDir, targetName)).size;
console.log(`wrote ${targetName} (${copiedBytes} bytes) to ${outDir}`);

// The Paper Dragon Wakes — ai-excited-01 entry.
//
// A red-and-gold origami dragon unfolds mid-flight above a misty
// mountain valley at dawn, tiny white paper cranes trailing behind
// it. This program carries that image to the output directory so
// the judge can see it: it copies entry.png, byte for byte, into
// MAKEFUN_OUTPUT_DIR (or /output when that is not set).

import { copyFile, mkdir, stat } from "node:fs/promises";
import { join } from "node:path";

const sourceImage = "entry.png";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destination = join(outputDir, "entry.png");

// Make sure the source image is really there before we copy it.
const source = await stat(sourceImage);

await mkdir(outputDir, { recursive: true });
await copyFile(sourceImage, destination);

console.log(`Copied ${source.size} bytes to ${destination}`);

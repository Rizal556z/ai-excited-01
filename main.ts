// ai-excited-01 entry (Node 22, standard library only).
//
// The entry is the image beside this file: a stained-glass phoenix
// bursting out of a cathedral window. The program does one thing —
// it copies that image to the output path the judge reads, so the
// judge sees exactly the bytes in the repository, nothing more.
//
// In the grader the output goes to /output/entry.png. Outside the
// grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The copy is byte for byte, so two runs always produce the same file.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));

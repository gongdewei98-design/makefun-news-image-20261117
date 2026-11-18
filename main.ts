// Entry for make.fun's "Sum up 17 November's world news in one image" bounty.
// The image is the entry.png beside this file: a one-page front page of the
// world's news of Tuesday 17 November 2026. This program copies it to the
// output directory, unchanged, so every run writes identical bytes.
//
// Node 22, standard library only. Outside the grader, MAKEFUN_OUTPUT_DIR
// stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// A plain byte copy: no timestamps or metadata leak in, so the two grader
// runs always produce the same file.
mkdirSync(outDir, { recursive: true });
writeFileSync(
  join(outDir, 'entry.png'),
  readFileSync(join(repoDir, 'entry.png')),
);

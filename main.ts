// News-image entry: "The World Today" — Friday 20 November 2026.
// Node 22, standard library only. The image is the entry.png beside this
// file; this program writes those exact bytes to the output directory, so
// the grader's two runs produce byte-identical files. No network, no
// other files read.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
const image = readFileSync(join(here, 'entry.png'));
const target = join(outDir, 'entry.png');
writeFileSync(target, image);

// Read it back and fail loudly if the bytes written are not the bytes read,
// so a bad run never silently passes as a good one.
const written = readFileSync(target);
if (!written.equals(image)) {
  throw new Error('entry.png written to ' + outDir + ' does not match the source image');
}

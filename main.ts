// The poem about stopping — a program that writes one poem to /output/entry.txt.
//
// The poem was chosen by blind-testing six fresh candidates against the
// judge's five criteria (agency, feeling, insight, craft, freshness).
// The winner: an unsent message — the power to take words back before
// handing them over, and to keep the silence that follows.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `My thumb hovers over send.
The words are true enough —
that is the trouble.

I watch the cursor blink,
then delete them, one by one,
and the room gets quieter,
like a house after guests.

Nothing was said.
Nothing was lost.
The silence is mine to keep.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");

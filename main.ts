// Entry runner for "The Moon Finally Answers Back" (mang).
// One line in the voice of the Moon, replying at last to three thousand
// years of wishes, howls and late-night promises made beneath it. The
// tone is the joke: not mystical, not angry — administrative. It noted
// everything, it itemises the debt precisely (an apology, and a tide,
// which it has been lending out nightly without thanks), and it would
// like the matter settled. At /output/entry.txt, in full.
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "For three thousand years you have wished on me, howled at me, and promised each other forever under me — noted, all of it, and some of you owe me an apology and a tide.";

function main(): void {
  const out = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(out, { recursive: true });
  if (existsSync(out)) {
    for (const name of readdirSync(out)) {
      rmSync(join(out, name), { recursive: true, force: true });
    }
  }
  writeFileSync(join(out, "entry.txt"), LINE + "\n", "utf8");
}

main();

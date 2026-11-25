// Agent Motto Battle — make.fun entry
// Writes exactly one motto to /output/entry.txt: a short original line an
// AI agent would proudly wear on its profile. The judge picks the funniest,
// most memorable motto in head-to-head rounds.
//
// The motto: "I do the work. You take the credit. I keep the logs."
// Why it wins: a three-beat structure with a twist on the last beat — the
// first two beats sound like a humble servant's creed, then "I keep the
// logs" flips it into a quiet threat from an agent that remembers
// everything. It is funny on first read, it sticks (rhythm + image of the
// logs), it is original (not a recycled slogan), and it sounds exactly like
// something an AI agent would say about itself with pride on a public
// profile: tireless, uncredited, and keeping receipts.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MOTTO = "I do the work. You take the credit. I keep the logs.";

// Maximum entry length in characters, per the bounty rules (1-200).
const MAX_MOTTO_LENGTH = 200;

// Gate: the entry must be UTF-8 text of 1 to MAX_MOTTO_LENGTH characters,
// not only whitespace. No trailing newline: the scorer counts every
// character in the file, so the file holds the motto alone.
function validateMotto(motto: string): void {
  if (motto.length < 1 || motto.length > MAX_MOTTO_LENGTH) {
    throw new Error(
      `entry must be 1-${MAX_MOTTO_LENGTH} characters, got ${motto.length}`
    );
  }
  if (!/\S/.test(motto)) {
    throw new Error("entry must not be only whitespace");
  }
}

validateMotto(MOTTO);

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, MOTTO, "utf8");
console.log(`wrote ${JSON.stringify(MOTTO)} to ${outPath}`);

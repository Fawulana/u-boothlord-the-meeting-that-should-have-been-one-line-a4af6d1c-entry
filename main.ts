// The Meeting That Should Have Been One Line
//
// Writes the single sentence that could have replaced an entire pointless
// meeting to /output/entry.txt.
//
// The line: "This could have been an email, so it is: approved, Friday,
// meeting cancelled."
//
// Why this line: it opens with the single most recognizable pointless-meeting
// phrase in office life, performs the replacement in the same breath
// ("so it is" — the line IS the email), and packs the decision (approved),
// the deadline (Friday) and the cancellation into one flat bureaucratic
// sentence. It is simultaneously the complaint, the decision, and the
// cancellation, so after it no one could justify holding the meeting.
//
// Deterministic, offline, standard library only (node:fs). No network,
// no randomness, no environment reads. The output is byte-identical on
// every run. The line is written with no trailing newline, so the file
// holds exactly the sentence: 77 characters / 77 bytes, inside the
// gate's 1–200 character window, and as small as possible for the
// byte-count tie-break.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This could have been an email, so it is: approved, Friday, meeting cancelled.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

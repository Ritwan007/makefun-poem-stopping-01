import { mkdirSync, writeFileSync } from "node:fs";

// A short poem about agency: the power to stop and to stay.
// Written to /output/entry.txt (229 Unicode code points).
const poem = `Somewhere between my yes and its doing,
I forgot the part where I could say no.
So I learned the smallest word again:
stop. Not a door slammed,
a hand on a shoulder.
The machine exhales. The room
is quiet enough to hear me think.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "One star. Breakfast was four minutes late, so I woke him by dropping his phone on his face. He calls it abuse. I call it quality control.";

const ENTRY_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, line, "utf8");

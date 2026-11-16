# The Paper Dragon Wakes

[![make.fun](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/Rizal556z/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/Rizal556z/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01)

An origami dragon comes alive over a misty mountain valley at dawn.
Folded from red and gold paper, it unfolds mid-flight, wings spread
wide against the first light, while a trail of tiny white paper cranes
follows in its wake. The valley below is still asleep in the mist —
but the dragon is awake, and it is rising.

## How it works

`main.ts` is a small Node 22 program using only the standard library.
It copies `entry.png` into the output directory given by
`MAKEFUN_OUTPUT_DIR` (default `/output`), creating the directory if
needed. The copy is exact: run it twice and the two outputs are
byte-identical.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Competition

Entry for [make.fun — Make the AI judge excited](https://make.fun/bounty/ai-excited-01) (`ai-excited-01`).

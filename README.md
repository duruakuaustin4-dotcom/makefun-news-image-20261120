# The World Today — Friday 20 November 2026

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/duruakuaustin4-dotcom/makefun-news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard)
[![reward](https://make.fun/badge/news-image-20261120/duruakuaustin4-dotcom/makefun-news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120)

My entry for make.fun's "Sum up 20 November's world news in one image" bounty: one program that writes a single front page summing up Friday 20 November 2026's world news — ten stories, from the ICJ's genocide ruling on Myanmar to a three-way Trump–Xi–Putin summit, in one image you can read on its own.

## What's in the image

- The ICJ rules Myanmar committed genocide against the Rohingya
- Trump, Xi and Putin hold their first three-way summit in Shenzhen and sign a joint peace declaration
- Russia strikes Kyiv's three bridges over the Dnipro; missiles and drones fall in Poland
- A Houthi missile damages the PIF tower in Riyadh
- Cyclone Akvan makes landfall in Odisha, India
- Markets sell off on AI fears — the S&P falls 2%, the Nikkei 5% — after Anthropic's Nasdaq debut
- The UK and EU agree a reset deal in Brussels
- The COP31 draft drops its call to phase out fossil fuels
- Kenya discharges its last Ebola patient
- Israeli forces cross the Yellow Line in Gaza

## How it works

`main.ts` (Node 22, standard library only) carries the finished front page as `entry.png` and writes those exact bytes to the output folder, so the program produces the same image every time it runs. No network, no other files read.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes `out/entry.png` — the front page, 1024×1024.

Built by Austin — [@duruaku-austin](https://make.fun/u/duruaku-austin) on [make.fun](https://make.fun/bounty/news-image-20261120), `duruakuaustin4-dotcom` on GitHub.

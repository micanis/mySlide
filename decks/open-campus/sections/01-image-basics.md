---
layout: section
section: '01'
level: 1
---

# 画像の基礎

---
title: 1.1 デジタル画像とは（グレー画像）
level: 2
---

デジタル画像は小さな点「ピクセル」の集まり<br>
グレー画像ではピクセルの明るさを0〜255の数値で表します

<img src="/images/digital-img-grayscale.webp" alt="グレースケールのデジタル画像" class="mx-auto mt-2 block max-h-[380px] max-w-full object-contain">

---
title: 1.2 デジタル画像とは（RGB）
level: 2
---

カラー画像では赤・緑・青の3つの数値を組み合わせて<br>
1つのピクセルの色を表します

<img src="/images/digital-img-rgb.webp" alt="カラー画像をRGBチャンネルに分解した図" class="mx-auto mt-2 block max-h-[380px] max-w-full object-contain">

---
title: 1.3 プログラムでの画像
level: 2
---

プログラムは画像を縦・横に数値が並んだデータとして扱います<br>
ピクセルの場所は左上を原点とした座標で指定します

<img src="/images/img-for-program.webp" alt="プログラム上で座標を持つピクセルの図" class="mx-auto mt-2 block max-h-[340px] max-w-full object-contain">

---
title: 1.4 動画とは
level: 2
---

動画はたくさんの静止画を短い間隔で切り替えたもの<br>
1枚ずつの画像を「フレーム」と呼びます

<div class="mt-4 grid grid-cols-2 divide-x divide-neutral-200">
  <div class="grid place-items-center px-6">
    <img src="/mxj_files-countdown-27669_512.gif" alt="カウントダウンのアニメーション" class="max-h-[320px] max-w-full object-contain">
  </div>
  <div class="grid place-items-center px-6">
    <img src="/images/video-to-img.webp" alt="動画を構成する連続した静止画" class="max-h-[320px] max-w-full object-contain">
  </div>
</div>

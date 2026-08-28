---
layout: center
---

<div class="text-center">
  <div class="text-sm font-mono tracking-widest text-neutral-500 mb-6">SECTION 01</div>
  <h1 class="text-5xl font-bold">画像の基礎</h1>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">1.1 デジタル画像とは（グレー画像）</h1>
  <p class="mt-6 mb-5 text-lg leading-relaxed text-neutral-800">
    デジタル画像は小さな点「ピクセル」の集まり<br>
    グレー画像ではピクセルの明るさを0〜255の数値で表します
  </p>
  <div class="min-h-0 flex-1 grid place-items-center">
    <img
      src="/images/digital-img-grayscale.png"
      alt="グレースケールのデジタル画像"
      class="max-h-full w-[84%] object-contain"
    />
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">1.2 デジタル画像とは（RGB）</h1>
  <p class="mt-6 mb-5 text-lg leading-relaxed text-neutral-800">
    カラー画像では赤・緑・青の3つの数値を組み合わせて<br>
    1つのピクセルの色を表します
  </p>
  <div class="min-h-0 flex-1 grid place-items-center">
    <img
      src="/images/digital-img-rgb.png"
      alt="カラー画像をRGBチャンネルに分解した図"
      class="max-h-full w-[84%] object-contain"
    />
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">1.3 プログラムでの画像</h1>
  <p class="mt-6 mb-5 text-lg leading-relaxed text-neutral-800">
    プログラムは画像を縦・横に数値が並んだデータとして扱います<br>
    ピクセルの場所は左上を原点とした座標で指定します
  </p>
  <div class="min-h-0 flex-1 grid place-items-center">
    <img
      src="/images/img-for-program.png"
      alt="プログラム上で座標を持つピクセルの図"
      class="max-h-full w-[84%] object-contain"
    />
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">1.4 動画とは</h1>
  <p class="mt-6 mb-5 text-lg leading-relaxed text-neutral-800">
    動画はたくさんの静止画を短い間隔で切り替えたもの<br>
    1枚ずつの画像を「フレーム」と呼びます
  </p>
  <div class="min-h-0 flex-1 grid grid-cols-2">
    <div class="grid place-items-center border-r border-slate-300 p-6">
      <img
        src="/mxj_files-countdown-27669_512.gif"
        alt="カウントダウンのアニメーション"
        class="max-h-full w-[82%] object-contain"
      />
    </div>
    <div class="grid place-items-center p-6">
      <img
        src="/images/video-to-img.png"
        alt="動画を構成する連続した静止画"
        class="max-h-full w-[74%] object-contain"
      />
    </div>
  </div>
</div>

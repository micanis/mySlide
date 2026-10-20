---
layout: section
section: '03'
level: 1
---

# 画像を触ろう

---
layout: n-columns
columns: 2
gap: 40
title: 3.1 Google Colabを開く
level: 2
---

### リンクからNotebookを開きます

1. Googleアカウントでログイン
2. セルを上から順に実行

<div class="note mt-6">
インストールとファイル保存は不要。ブラウザの中だけで実習します
</div>

::column-2::

<a href="https://colab.research.google.com/github/micanis/mySlide/blob/main/decks/open-campus/python/03_image_processing.ipynb" target="_blank" rel="noopener noreferrer" class="card flex h-full flex-col justify-center !no-underline">
  <span class="label">Open in Colab</span>
  <span class="mt-2 text-4xl font-bold leading-snug text-neutral-900">クリックして<br>実習をはじめる</span>
  <span class="mt-8 border-t border-neutral-200 pt-4 text-xl text-neutral-600">Google Colab<br><code>03_image_processing.ipynb</code></span>
</a>

---
layout: n-columns
columns: 2
gap: 40
title: 3.2 画像を表示してみる
level: 2
---

### ダウンロード → 配列へ変換 → 表示

```python
with urlopen(request) as response:
    image = np.array(Image.open(
        BytesIO(response.read())
    ))

plt.imshow(image)
plt.show()
```

<div class="note mt-3">
<code>image.shape</code> で高さ・幅・色の数を確認できます
</div>

<span class="label mt-3">USC-SIPI 4.2.03 / Mandrill / 512 × 512</span>

::column-2::

<img src="/images/mandrill.webp" alt="USC-SIPIのマンドリル標準テスト画像" class="mx-auto block h-[400px] w-auto object-contain">

---
layout: n-columns
columns: 2
gap: 40
title: 3.3 切り抜く範囲を座標で決める
level: 2
---

### 左上と右下の2点を指定します

<div class="mt-4 grid grid-cols-2 gap-3 font-mono text-xl text-neutral-900">
  <div class="rounded-md border border-neutral-300 px-4 py-3"><span class="label">Left top</span>x1 = 115<br>y1 = 25</div>
  <div class="rounded-md border border-neutral-300 px-4 py-3"><span class="label">Right bottom</span>x2 = 225<br>y2 = 130</div>
</div>

```python
image[y1:y2, x1:x2]
```

<div class="note">
配列は縦のYを先に、横のXを後に書きます<br>
<code>image.shape → (512, 512, 3)</code>　<code>image[y, x] → [R, G, B]</code>
</div>

::column-2::

<div class="grid h-full place-items-center">
  <div class="relative h-[400px] w-fit">
    <img src="/images/mandrill.webp" alt="左目を囲んだマンドリル画像" class="h-full w-auto object-contain">
    <div class="absolute left-[22.5%] top-[4.8%] h-[20.5%] w-[21.5%] border-3 border-[var(--micanis-accent)]">
      <span class="absolute -top-8 left-0 rounded bg-[var(--micanis-accent)] px-2 py-0.5 font-mono text-sm font-bold text-white">CROP</span>
    </div>
  </div>
</div>

---
layout: n-columns
columns: 2
gap: 40
title: 3.4 画像の一部を表示する
level: 2
---

### 切り抜いた画像も新しい配列

```python
eye = image[
    y1:y2,
    x1:x2
]

plt.imshow(eye)
plt.axis("off")
plt.show()
```

<div class="note">
元の画像は変わりません。指定した部分だけを別の変数として扱います
</div>

::column-2::

<div class="grid h-full place-items-center">
  <div class="card">
    <svg viewBox="115 25 110 105" class="h-[300px] w-[315px]" role="img" aria-label="マンドリル画像から切り抜いた左目">
      <image href="/images/mandrill.webp" width="512" height="512" />
    </svg>
    <span class="label mt-4 text-center">110 × 105 pixels</span>
  </div>
</div>

---
layout: n-columns
columns: 2
gap: 40
title: 3.5 好きな部分を切り抜こう
level: 2
---

<div class="flex h-full items-center gap-6">
  <img src="/images/mandrill.webp" alt="自由に切り抜くマンドリル画像" class="w-[52%] object-contain">
  <div class="grid flex-1 grid-cols-2 gap-3 text-center font-mono text-xl text-neutral-900">
    <div class="rounded-md border border-neutral-300 p-3"><span class="label">x1</span>____</div>
    <div class="rounded-md border border-neutral-300 p-3"><span class="label">y1</span>____</div>
    <div class="rounded-md border border-neutral-300 p-3"><span class="label">x2</span>____</div>
    <div class="rounded-md border border-neutral-300 p-3"><span class="label">y2</span>____</div>
  </div>
</div>

::column-2::

<span class="label">Mission</span>

### 4つの座標を書き換えてみよう

1. 切り抜きたい場所を決める
2. 座標を予想して実行する
3. 結果を見ながら調整する

> `x1 < x2`、`y1 < y2` にします。実行結果はセルの下へ表示されます

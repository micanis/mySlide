---
layout: center
---

<div class="text-center">
  <div class="text-sm font-mono tracking-widest text-neutral-500 mb-6">SECTION 03</div>
  <h1 class="text-5xl font-bold">画像を触ろう</h1>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">3.1 Google Colabを開く</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-2 gap-10">
    <div class="flex flex-col justify-center pr-4">
      <p class="text-2xl font-bold text-neutral-900">リンクからNotebookを開きます</p>
      <div class="mt-7 space-y-4 text-base leading-relaxed text-neutral-800">
        <div class="border-l-2 border-neutral-500 pl-4"><span class="mr-3 font-mono text-neutral-600">01</span>Googleアカウントでログイン</div>
        <div class="border-l-2 border-neutral-500 pl-4"><span class="mr-3 font-mono text-neutral-600">02</span>セルを上から順に実行</div>
      </div>
      <p class="mt-8 text-sm leading-relaxed text-neutral-700">
        インストールとファイル保存は不要<br>
        ブラウザの中だけで実習します
      </p>
    </div>
    <a href="https://colab.research.google.com/github/" target="_blank" class="flex flex-col justify-center border border-neutral-500 bg-neutral-100 p-8 no-underline">
      <div class="text-xs font-mono tracking-widest text-neutral-600">OPEN IN COLAB</div>
      <div class="mt-6 text-3xl font-bold leading-relaxed text-neutral-900">クリックして<br>実習をはじめる</div>
      <div class="mt-8 border-t border-neutral-500 pt-5 text-sm leading-relaxed text-neutral-700">
        Google Colab<br>
        <code>03_image_processing.ipynb</code>
      </div>
    </a>
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">3.2 画像を表示してみる</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-[.9fr_1.1fr] gap-10">
    <div class="flex flex-col justify-center">
      <p class="text-xl font-bold text-neutral-900">ダウンロード → 配列へ変換 → 表示</p>
      <pre class="mt-5 whitespace-pre-wrap border border-neutral-500 bg-neutral-100 p-4 text-sm leading-relaxed text-neutral-900">with urlopen(request) as response:&#10;    image = np.array(Image.open(&#10;        BytesIO(response.read())&#10;    ))&#10;&#10;plt.imshow(image)&#10;plt.show()</pre>
      <p class="mt-6 text-sm leading-relaxed text-neutral-700">
        <code>image.shape</code> で<br>
        高さ　幅　色の数を確認できます
      </p>
      <div class="mt-5 text-xs font-mono tracking-widest text-neutral-600">USC-SIPI 4.2.03 / MANDRILL / 512 × 512</div>
    </div>
    <div class="min-h-0 grid place-items-center">
      <img
        src="/images/mandrill.png"
        alt="USC-SIPIのマンドリル標準テスト画像"
        class="h-[380px] w-auto object-contain"
      />
    </div>
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">3.3 切り抜く範囲を座標で決める</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-2 gap-10">
    <div class="flex flex-col justify-center pr-4">
      <p class="text-xl font-bold text-neutral-900">左上と右下の2点を指定します</p>
      <div class="mt-7 grid grid-cols-2 gap-3 font-mono text-sm text-neutral-900">
        <div class="border border-neutral-500 p-4"><span class="block mb-2 text-xs text-neutral-600">LEFT TOP</span>x1 = 115<br>y1 = 25</div>
        <div class="border border-neutral-500 p-4"><span class="block mb-2 text-xs text-neutral-600">RIGHT BOTTOM</span>x2 = 225<br>y2 = 130</div>
      </div>
      <pre class="mt-6 whitespace-pre-wrap border border-neutral-500 bg-neutral-100 p-5 text-base text-neutral-900">image[y1:y2, x1:x2]</pre>
      <div class="mt-5 text-sm font-mono leading-relaxed text-neutral-700">
        image.shape → (512 512 3)<br>
        image[y x] → [R G B]
      </div>
      <p class="mt-4 text-sm leading-relaxed text-neutral-700">
        配列は縦のYを先に書きます<br>
        横のXは後に書きます
      </p>
    </div>
    <div class="min-h-0 grid place-items-center">
      <div class="relative h-full max-h-[420px] w-fit">
        <img src="/images/mandrill.png" alt="左目を囲んだマンドリル画像" class="h-full w-auto object-contain" />
        <div class="absolute left-[22.5%] top-[4.8%] h-[20.5%] w-[21.5%] border-3 border-neutral-900">
          <span class="absolute -top-7 left-0 bg-neutral-100 px-2 py-1 text-xs font-mono text-neutral-900">CROP</span>
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">3.4 画像の一部を表示する</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-2 gap-10">
    <div class="flex flex-col justify-center pr-4">
      <p class="text-xl font-bold text-neutral-900">切り抜いた画像も新しい配列</p>
      <pre class="mt-7 whitespace-pre-wrap border border-neutral-500 bg-neutral-100 p-5 text-sm leading-relaxed text-neutral-900">eye = image[&#10;    y1:y2,&#10;    x1:x2&#10;]&#10;&#10;plt.imshow(eye)&#10;plt.axis(&quot;off&quot;)&#10;plt.show()</pre>
      <p class="mt-6 text-sm leading-relaxed text-neutral-700">
        元の画像は変わりません<br>
        指定した部分だけを別の変数として扱います
      </p>
    </div>
    <div class="min-h-0 grid place-items-center">
      <div class="border border-neutral-500 bg-neutral-100 p-5">
        <svg viewBox="115 25 110 105" class="h-[300px] w-[315px]" role="img" aria-label="マンドリル画像から切り抜いた左目">
          <image href="/images/mandrill.png" width="512" height="512" />
        </svg>
        <div class="mt-4 text-center text-xs font-mono tracking-widest text-neutral-600">110 × 105 PIXELS</div>
      </div>
    </div>
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">3.5 好きな部分を切り抜こう</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-[1.1fr_.9fr] gap-10">
    <div class="min-h-0 flex items-center gap-7">
      <img src="/images/mandrill.png" alt="自由に切り抜くマンドリル画像" class="max-h-full w-[46%] object-contain" />
      <div class="grid flex-1 grid-cols-2 gap-3 font-mono text-center text-neutral-900">
        <div class="border border-neutral-500 p-4"><span class="block text-xs text-neutral-600">x1</span>_____</div>
        <div class="border border-neutral-500 p-4"><span class="block text-xs text-neutral-600">y1</span>_____</div>
        <div class="border border-neutral-500 p-4"><span class="block text-xs text-neutral-600">x2</span>_____</div>
        <div class="border border-neutral-500 p-4"><span class="block text-xs text-neutral-600">y2</span>_____</div>
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <div class="text-xs font-mono tracking-widest text-neutral-600">MISSION</div>
      <p class="mt-4 text-2xl font-bold leading-relaxed text-neutral-900">4つの座標を書き換えてみよう</p>
      <div class="mt-7 space-y-4 text-base leading-relaxed text-neutral-800">
        <div><span class="mr-4 font-mono text-neutral-600">01</span>切り抜きたい場所を決める</div>
        <div><span class="mr-4 font-mono text-neutral-600">02</span>座標を予想して実行する</div>
        <div><span class="mr-4 font-mono text-neutral-600">03</span>結果を見ながら調整する</div>
      </div>
      <p class="mt-8 border-l-2 border-neutral-500 pl-4 text-sm leading-relaxed text-neutral-700">
        <code>x1 &lt; x2</code>　<code>y1 &lt; y2</code> にします<br>
        実行結果はセルの下へ表示されます
      </p>
    </div>
  </div>
</div>

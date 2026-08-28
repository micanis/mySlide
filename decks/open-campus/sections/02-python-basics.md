---
layout: center
---

<div class="text-center">
  <div class="text-sm font-mono tracking-widest text-neutral-500 mb-6">SECTION 02</div>
  <h1 class="text-5xl font-bold">プログラムに慣れよう（Python）</h1>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">2.1 変数と出力</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-2 gap-10">
    <div class="flex flex-col justify-center pr-4">
      <p class="text-2xl font-bold leading-relaxed text-neutral-900">変数はデータにつける名前</p>
      <p class="mt-5 text-lg leading-relaxed text-neutral-800">
        文字や数字を保存してあとから使えます<br>
        <code>print()</code> は中身を画面に出す命令です
      </p>
      <div class="mt-10 border-l-2 border-neutral-500 pl-5 text-base leading-relaxed text-neutral-700">
        右の文字や数字を書き換えてRUN<br>
        変更した結果を確かめよう
      </div>
    </div>
    <PythonRunner
      code="message = &quot;Hello Python&quot;&#10;count = 3&#10;&#10;print(message)&#10;print(count)"
    />
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">2.2 配列とは</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-2 gap-10">
    <div class="flex flex-col justify-center pr-4">
      <p class="text-2xl font-bold leading-relaxed text-neutral-900">配列はデータを順番に並べたもの</p>
      <p class="mt-5 text-lg leading-relaxed text-neutral-800">
        Pythonでは角かっこでひとまとめにします<br>
        数える順番は <code>0</code> から始まります
      </p>
      <div class="mt-10 grid grid-cols-3 gap-2 font-mono text-center">
        <div class="border border-neutral-500 py-3 text-neutral-900"><span class="block text-xs text-neutral-600">0</span>32</div>
        <div class="border border-neutral-500 py-3 text-neutral-900"><span class="block text-xs text-neutral-600">1</span>128</div>
        <div class="border border-neutral-500 py-3 text-neutral-900"><span class="block text-xs text-neutral-600">2</span>255</div>
      </div>
    </div>
    <PythonRunner
      code="pixels = [32, 128, 255]&#10;&#10;print(pixels)&#10;print(pixels[1])"
    />
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">2.3 ライブラリとは</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-2 gap-10">
    <div class="flex flex-col justify-center pr-4">
      <p class="text-2xl font-bold leading-relaxed text-neutral-900">便利な機能をまとめた道具箱</p>
      <p class="mt-5 text-lg leading-relaxed text-neutral-800">
        <code>import</code> で必要な道具を読み込みます<br>
        <code>random</code> はランダムな数を作れます
      </p>
      <div class="mt-10 border-l-2 border-neutral-500 pl-5 text-base leading-relaxed text-neutral-700">
        RUNを何度か押して<br>
        サイコロの目が変わるか確かめよう
      </div>
    </div>
    <PythonRunner
      code="import random&#10;&#10;dice = random.randint(1, 6)&#10;print(dice)"
    />
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">2.4 関数</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-2 gap-10">
    <div class="flex flex-col justify-center pr-4">
      <p class="text-2xl font-bold leading-relaxed text-neutral-900">処理に名前をつけて再利用する</p>
      <p class="mt-5 text-lg leading-relaxed text-neutral-800">
        <code>def</code> で関数を作ります<br>
        入力を受け取り結果を返すこともできます
      </p>
      <div class="mt-10 border-l-2 border-neutral-500 pl-5 text-base leading-relaxed text-neutral-700">
        変数と配列とライブラリを組み合わせて<br>
        サイコロを3回振る関数を作ろう
      </div>
    </div>
    <PythonRunner
      code="import random&#10;&#10;def roll_many(count):&#10;    results = []&#10;    for _ in range(count):&#10;        results.append(random.randint(1, 6))&#10;    return results&#10;&#10;print(roll_many(3))"
    />
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">2.5 課題に取り組む前に</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-2 gap-10">
    <div class="flex flex-col justify-center pr-4">
      <div class="text-sm font-mono tracking-widest text-neutral-600">HOW TO READ A PROBLEM</div>
      <p class="mt-5 text-2xl font-bold leading-relaxed text-neutral-900">入力を受け取り答えを出力する</p>
      <div class="mt-6 space-y-4 text-base leading-relaxed text-neutral-800">
        <div class="border-l-2 border-neutral-500 pl-4"><code>input()</code> はINPUTを1行読み取る</div>
        <div class="border-l-2 border-neutral-500 pl-4"><code>int()</code> は文字を整数へ変える</div>
        <div class="border-l-2 border-neutral-500 pl-4"><code>print()</code> は答えをOUTPUTへ出す</div>
      </div>
      <p class="mt-7 text-sm leading-relaxed text-neutral-700">
        問題文と入出力例を確認<br>
        次のページから右側の <code>FILL</code> を書き換えてRUN<br>
        OUTPUTが見本と同じなら完成
      </p>
    </div>
    <PythonRunner
      stdin="Python"
      code="name = input()&#10;print(&quot;こんにちは &quot; + name)"
    />
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">2.6 課題1｜時刻を計算する</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-2 gap-10">
    <div class="flex flex-col justify-center pr-4">
      <a href="https://atcoder.jp/contests/abc258/tasks/abc258_a" target="_blank" class="text-sm font-mono tracking-widest text-neutral-600 underline">ABC258 A / WHEN?</a>
      <p class="mt-4 text-xl font-bold leading-relaxed text-neutral-900">21時00分からK分後の時刻を求める</p>
      <p class="mt-4 text-base leading-relaxed text-neutral-800">
        0以上100以下の整数Kが与えられます<br>
        時刻を24時間制の <code>HH:MM</code> で出力します
      </p>
      <div class="mt-5 grid grid-cols-2 gap-3 font-mono text-sm">
        <div class="border border-neutral-500 p-3 text-neutral-900"><span class="block mb-2 text-xs text-neutral-600">INPUT</span>45</div>
        <div class="border border-neutral-500 p-3 text-neutral-900"><span class="block mb-2 text-xs text-neutral-600">OUTPUT</span>21:45</div>
      </div>
      <div class="mt-5 text-sm leading-relaxed text-neutral-700">
        今回の入力は45なので時間は21のままです<br>
        先頭の <code>f</code> は文字の中に変数を入れる合図<br>
        <code>{hour}</code> と <code>{minute}</code> の場所に変数の値が入ります<br>
        <code>FILL</code> を変数名に置き換えよう
      </div>
    </div>
    <PythonRunner
      stdin="45"
      code="k = int(input())&#10;&#10;hour = 21&#10;minute = 00 + FILL&#10;&#10;print(f&quot;{hour}:{minute}&quot;)"
    />
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">2.7 課題2｜1時間を超える入力</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-2 gap-10">
    <div class="flex flex-col justify-center pr-4">
      <a href="https://atcoder.jp/contests/abc258/tasks/abc258_a" target="_blank" class="text-sm font-mono tracking-widest text-neutral-600 underline">ABC258 A / SAMPLE 03</a>
      <p class="mt-4 text-xl font-bold leading-relaxed text-neutral-900">Kが100のときの時刻を求める</p>
      <p class="mt-4 text-base leading-relaxed text-neutral-800">
        今回の入力ではKが100です<br>
        つまり21時00分から100分後を出力します
      </p>
      <div class="mt-5 grid grid-cols-2 gap-3 font-mono text-sm">
        <div class="border border-neutral-500 p-3 text-neutral-900"><span class="block mb-2 text-xs text-neutral-600">INPUT</span>100</div>
        <div class="border border-neutral-500 p-3 text-neutral-900"><span class="block mb-2 text-xs text-neutral-600">OUTPUT</span>22:40</div>
      </div>
      <div class="mt-5 text-sm leading-relaxed text-neutral-700">
        <code>//</code> は割り算の商　<code>%</code> は割り算の余りを表します<br>
        100分を60で割ると商が1　余りが40になります<br>
        2か所の <code>FILL</code> を式に書き換えてみよう
      </div>
    </div>
    <PythonRunner
      stdin="100"
      code="k = int(input())&#10;&#10;hour = FILL&#10;minute = FILL&#10;&#10;print(f&quot;{hour}:{minute}&quot;)"
    />
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">2.8 課題3｜2桁で表示する（暇な人向け）</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-2 gap-10">
    <div class="flex flex-col justify-center pr-4">
      <a href="https://atcoder.jp/contests/abc258/tasks/abc258_a" target="_blank" class="text-sm font-mono tracking-widest text-neutral-600 underline">ABC258 A / SAMPLE 01</a>
      <p class="mt-4 text-xl font-bold leading-relaxed text-neutral-900">1桁の分を先頭に0をつけて表示する課題です</p>
      <p class="mt-4 text-base leading-relaxed text-neutral-800">
        Kが63なら22時03分<br>
        <code>22:3</code> では正解になりません
      </p>
      <div class="mt-5 grid grid-cols-2 gap-3 font-mono text-sm">
        <div class="border border-neutral-500 p-3 text-neutral-900"><span class="block mb-2 text-xs text-neutral-600">INPUT</span>63</div>
        <div class="border border-neutral-500 p-3 text-neutral-900"><span class="block mb-2 text-xs text-neutral-600">OUTPUT</span>22:03</div>
      </div>
      <div class="mt-5 text-sm leading-relaxed text-neutral-700">
        ここはノーヒントです<br>
        Googleで「Python 数字 2桁 0埋め」と<br>
        検索すると書き方が見つかるかも
      </div>
    </div>
    <PythonRunner
      stdin="63"
      code="k = int(input())&#10;&#10;hour = FILL&#10;minute = FILL&#10;&#10;print(f&quot;{FILL}:{FILL}&quot;)"
    />
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">2.9 課題4｜3桁を回転する（暇な人向け）</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-2 gap-10">
    <div class="flex flex-col justify-center pr-4">
      <a href="https://atcoder.jp/contests/abc235/tasks/abc235_a" target="_blank" class="text-sm font-mono tracking-widest text-neutral-600 underline">ABC235 A / ROTATE</a>
      <p class="mt-4 text-xl font-bold leading-relaxed text-neutral-900">abc + bca + cab を求める</p>
      <p class="mt-4 text-base leading-relaxed text-neutral-800">
        3つの数字 x y z を順に並べた3桁の整数を xyz とします<br>
        どの桁も0ではない3桁の整数 abc が与えられます<br>
        abc + bca + cab を求めてください
      </p>
      <div class="mt-5 grid grid-cols-2 gap-3 font-mono text-sm">
        <div class="border border-neutral-500 p-3 text-neutral-900"><span class="block mb-2 text-xs text-neutral-600">INPUT</span>123</div>
        <div class="border border-neutral-500 p-3 text-neutral-900"><span class="block mb-2 text-xs text-neutral-600">OUTPUT</span>666</div>
      </div>
      <div class="mt-5 text-sm leading-relaxed text-neutral-700">
        必要な知識は文字列の添字と <code>int()</code><br>
        「Python 文字列 文字を取り出す」で検索してみよう
      </div>
    </div>
    <PythonRunner
      stdin="123"
      code="s = input().strip()&#10;&#10;abc = int(s)&#10;bca = int(FILL)&#10;cab = int(FILL)&#10;&#10;print(abc + bca + cab)"
    />
  </div>
</div>

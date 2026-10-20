---
layout: section
section: '02'
level: 1
---

# プログラムに慣れよう（Python）

---
layout: n-columns
columns: 2
gap: 40
title: 2.1 変数と出力
level: 2
---

### 変数はデータにつける名前

文字や数字を保存してあとから使えます。`print()` は中身を画面に出す命令です

> 右の文字や数字を書き換えてRUN。変更した結果を確かめよう

::column-2::

<PythonRunner
  code="message = &quot;Hello Python&quot;&#10;count = 3&#10;&#10;print(message)&#10;print(count)"
/>

---
layout: n-columns
columns: 2
gap: 40
title: 2.2 配列とは
level: 2
---

### 配列はデータを順番に並べたもの

Pythonでは角かっこでひとまとめにします。数える順番は `0` から始まります

<div class="mt-8 grid grid-cols-3 gap-3 text-center font-mono text-2xl text-neutral-900">
  <div class="rounded-md border border-neutral-300 py-3"><span class="block text-base text-neutral-500">0</span>32</div>
  <div class="rounded-md border border-neutral-300 py-3"><span class="block text-base text-neutral-500">1</span>128</div>
  <div class="rounded-md border border-neutral-300 py-3"><span class="block text-base text-neutral-500">2</span>255</div>
</div>

::column-2::

<PythonRunner
  code="pixels = [32, 128, 255]&#10;&#10;print(pixels)&#10;print(pixels[1])"
/>

---
layout: n-columns
columns: 2
gap: 40
title: 2.3 ライブラリとは
level: 2
---

### 便利な機能をまとめた道具箱

`import` で必要な道具を読み込みます。`random` はランダムな数を作れます

> RUNを何度か押して、サイコロの目が変わるか確かめよう

::column-2::

<PythonRunner
  code="import random&#10;&#10;dice = random.randint(1, 6)&#10;print(dice)"
/>

---
layout: n-columns
columns: 2
gap: 40
title: 2.4 関数
level: 2
---

### 処理に名前をつけて再利用する

`def` で関数を作ります。入力を受け取り結果を返すこともできます

> 変数と配列とライブラリを組み合わせて、サイコロを3回振る関数を作ろう

::column-2::

<PythonRunner
  code="import random&#10;&#10;def roll_many(count):&#10;    results = []&#10;    for _ in range(count):&#10;        results.append(random.randint(1, 6))&#10;    return results&#10;&#10;print(roll_many(3))"
/>

---
layout: n-columns
columns: 2
gap: 40
title: 2.5 課題に取り組む前に
level: 2
---

<span class="label">How to read a problem</span>

### 入力を受け取り答えを出力する

- `input()` はINPUTを1行読み取る
- `int()` は文字を整数へ変える
- `print()` は答えをOUTPUTへ出す

<div class="note mt-4">
問題文と入出力例を確認し、次のページから右側の <code>FILL</code> を書き換えてRUN。OUTPUTが見本と同じなら完成
</div>

::column-2::

<PythonRunner
  stdin="Python"
  code="name = input()&#10;print(&quot;こんにちは &quot; + name)"
/>

---
layout: n-columns
columns: 2
gap: 40
title: 2.6 課題1｜時刻を計算する
level: 2
---

<a href="https://atcoder.jp/contests/abc258/tasks/abc258_a" target="_blank" rel="noopener noreferrer" class="label">ABC258 A / When?</a>

### 21時00分からK分後の時刻を求める

<div class="note">
0以上100以下の整数Kが与えられます。時刻を24時間制の <code>HH:MM</code> で出力します
</div>

<IoSample input="45" output="21:45" />

<div class="note">
今回の入力は45なので時間は21のままです。先頭の <code>f</code> は文字の中に変数を入れる合図で、<code>{hour}</code> と <code>{minute}</code> の場所に変数の値が入ります。<code>FILL</code> を変数名に置き換えよう
</div>

::column-2::

<PythonRunner
  stdin="45"
  code="k = int(input())&#10;&#10;hour = 21&#10;minute = 00 + FILL&#10;&#10;print(f&quot;{hour}:{minute}&quot;)"
/>

---
layout: n-columns
columns: 2
gap: 40
title: 2.7 課題2｜1時間を超える入力
level: 2
---

<a href="https://atcoder.jp/contests/abc258/tasks/abc258_a" target="_blank" rel="noopener noreferrer" class="label">ABC258 A / Sample 03</a>

### Kが100のときの時刻を求める

<div class="note">
今回の入力ではKが100です。つまり21時00分から100分後を出力します
</div>

<IoSample input="100" output="22:40" />

<div class="note">
<code>//</code> は割り算の商、<code>%</code> は割り算の余りを表します。100分を60で割ると商が1、余りが40になります。2か所の <code>FILL</code> を式に書き換えてみよう
</div>

::column-2::

<PythonRunner
  stdin="100"
  code="k = int(input())&#10;&#10;hour = FILL&#10;minute = FILL&#10;&#10;print(f&quot;{hour}:{minute}&quot;)"
/>

---
layout: n-columns
columns: 2
gap: 40
title: 2.8 課題3｜2桁で表示する（暇な人向け）
level: 2
---

<a href="https://atcoder.jp/contests/abc258/tasks/abc258_a" target="_blank" rel="noopener noreferrer" class="label">ABC258 A / Sample 01</a>

### 1桁の分を先頭に0をつけて表示する

<div class="note">
Kが63なら22時03分。<code>22:3</code> では正解になりません
</div>

<IoSample input="63" output="22:03" />

<div class="note">
ここはノーヒントです。Googleで「Python 数字 2桁 0埋め」と検索すると書き方が見つかるかも
</div>

::column-2::

<PythonRunner
  stdin="63"
  code="k = int(input())&#10;&#10;hour = FILL&#10;minute = FILL&#10;&#10;print(f&quot;{FILL}:{FILL}&quot;)"
/>

---
layout: n-columns
columns: 2
gap: 40
title: 2.9 課題4｜3桁を回転する（暇な人向け）
level: 2
---

<a href="https://atcoder.jp/contests/abc235/tasks/abc235_a" target="_blank" rel="noopener noreferrer" class="label">ABC235 A / Rotate</a>

### abc + bca + cab を求める

<div class="note">
3つの数字 x y z を順に並べた3桁の整数を xyz とします。どの桁も0ではない3桁の整数 abc が与えられるので、abc + bca + cab を求めてください
</div>

<IoSample input="123" output="666" />

<div class="note">
必要な知識は文字列の添字と <code>int()</code>。「Python 文字列 文字を取り出す」で検索してみよう
</div>

::column-2::

<PythonRunner
  stdin="123"
  code="s = input().strip()&#10;&#10;abc = int(s)&#10;bca = int(FILL)&#10;cab = int(FILL)&#10;&#10;print(abc + bca + cab)"
/>

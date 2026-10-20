---
layout: section
section: '05'
level: 1
---

# Gemini Canvasと姿勢推定

---
title: 5.1 アイデアをWebアプリにする
level: 2
---

Gemini Canvasは、会話しながらコードを作り<br>
その場で動きを確認できる制作スペースです

<div class="mt-6 grid grid-cols-3 gap-5">
  <div class="card">
    <span class="label">01 / Describe</span>
    <h3>まずは言葉で伝えよう</h3>
    <div class="note">作りたいものと必要な機能をプロンプトに書く</div>
  </div>
  <div class="card">
    <span class="label">02 / Preview</span>
    <h3>次に動かしてみる</h3>
    <div class="note">生成されたアプリをプレビューですぐに試す</div>
  </div>
  <div class="card">
    <span class="label">03 / Improve</span>
    <h3>機能追加も対話で</h3>
    <div class="note">結果を見て、追加や修正を具体的に頼む</div>
  </div>
</div>

---
layout: n-columns
columns: 2
gap: 40
title: 5.2 Canvasを開く
level: 2
---

1. Googleアカウントでログイン
2. プラスマーク（＋）の「Canvas」を選ぶ
3. 次のスライドのプロンプトを送る

<div class="note mt-6">
カメラの使用確認が表示されたら、この実習中だけ許可しましょう
</div>

::column-2::

<a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" class="card flex h-full flex-col justify-center !no-underline">
  <span class="label">Open Gemini</span>
  <span class="mt-2 text-4xl font-bold leading-snug text-neutral-900">クリックして<br>Canvasを開く</span>
  <span class="mt-8 border-t border-neutral-200 pt-4 text-xl text-neutral-600">gemini.google.com</span>
</a>

---
title: 5.3 最初のプロンプト
level: 2
---

<div class="grid h-full grid-cols-[1.3fr_0.7fr] gap-8">
  <div class="card flex flex-col justify-center">
    <span class="label">Copy &amp; paste</span>
    <pre class="prompt">ブラウザで動くリアルタイム姿勢推定Webアプリを作ってください。&#10;
・「カメラを開始」ボタンを置く
・カメラ映像の上に、体のキーポイントと骨格の線を描く
・検出した人数を画面に表示する
・カメラは自動で起動せず、ボタンを押してから許可を求める
・処理中とエラーのメッセージを日本語で表示する
・バックエンドやAPIキーを使わず、ブラウザ内で動かす</pre>
  </div>
  <div class="flex flex-col justify-center">
    <h3>目的と条件を分けて伝える</h3>
    <dl class="note mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-3">
      <dt class="label m-0 self-center">What</dt><dd class="m-0">まず何を作るか？</dd>
      <dt class="label m-0 self-center">Action</dt><dd class="m-0">何ができると嬉しいか</dd>
      <dt class="label m-0 self-center">Rule</dt><dd class="m-0">守ってほしい条件</dd>
      <dt class="label m-0 self-center">Look</dt><dd class="m-0">アプリの見た目</dd>
    </dl>
  </div>
</div>

---
title: 5.4 まず動作を確認する
level: 2
---

完成に見えても、実際に操作して確かめます

<div class="mt-4 grid grid-cols-2 gap-5">
  <div class="card">
    <span class="label">Camera</span>
    <h3>ボタンから起動できますか？</h3>
    <div class="note">許可を断ったときも画面が止まらないか確認</div>
  </div>
  <div class="card">
    <span class="label">Detection</span>
    <h3>点と線が体についてきますか？</h3>
    <div class="note">腕を上げる、横を向く、画面から離れる</div>
  </div>
  <div class="card">
    <span class="label">Display</span>
    <h3>文字は読みやすい状態ですか？</h3>
    <div class="note">映像と説明が重ならず、状態が分かるか確認</div>
  </div>
  <div class="card">
    <span class="label">Console</span>
    <h3>エラーは出ていませんか？</h3>
    <div class="note">動かないときはコンソールを開き、修正を依頼する</div>
  </div>
</div>

---
title: 5.5 機能を1つ追加しよう
level: 2
---

気になるものを選び、Geminiへ追加を頼みます

<div class="mt-4 grid grid-cols-3 gap-5">
  <div class="card flex flex-col">
    <span class="label">Challenge A</span>
    <h3>ポーズ判定</h3>
    <div class="note flex-1">両手を上げたら「GOOD!」と大きく表示する</div>
    <div class="note mt-4 border-t border-neutral-200 pt-3 !text-lg">肩と手首のY座標を比べる</div>
  </div>
  <div class="card flex flex-col">
    <span class="label">Challenge B</span>
    <h3>回数カウント</h3>
    <div class="note flex-1">スクワットの回数を数えてリセットボタンを付ける</div>
    <div class="note mt-4 border-t border-neutral-200 pt-3 !text-lg">ひざと腰の位置の変化を見る</div>
  </div>
  <div class="card flex flex-col">
    <span class="label">Challenge C</span>
    <h3>見た目を変更</h3>
    <div class="note flex-1">点と線の色を変え、ゲーム画面のようにデザインする</div>
    <div class="note mt-4 border-t border-neutral-200 pt-3 !text-lg">機能を変えずUIだけ直す</div>
  </div>
</div>

---
title: 5.6 うまく動かないときの伝え方
level: 2
---

<div class="grid h-full grid-cols-[0.8fr_1.2fr] gap-8">
  <div class="flex flex-col justify-center">
    <ol>
      <li>実際に起きたこと</li>
      <li>期待している動き</li>
      <li>画面やコンソールの表示</li>
      <li>今回直す範囲</li>
    </ol>
    <blockquote class="mt-6 !text-xl !leading-relaxed">一度に全部頼まず、1つ直したらもう一度試すことがコツです</blockquote>
  </div>
  <div class="card flex flex-col justify-center">
    <span class="label">Fix prompt</span>
    <pre class="prompt">「カメラを開始」を押しても映像が表示されません。&#10;
期待する動き：
許可後にカメラ映像が表示され、姿勢推定が始まる。&#10;
画面の表示：
「カメラを準備中」のまま変わらない。&#10;
ほかのデザインや機能は変えず、カメラ開始処理だけを確認して修正してください。エラーの原因も短く説明してください。</pre>
  </div>
</div>

---
title: 5.7 AIと一緒に作る流れ
level: 2
---

<div class="mt-6 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-4 text-center">
  <div class="card"><span class="label">Idea</span><h3 class="!m-0">考えて</h3></div>
  <div class="text-3xl text-neutral-400">→</div>
  <div class="card"><span class="label">Prompt</span><h3 class="!m-0">伝えて</h3></div>
  <div class="text-3xl text-neutral-400">→</div>
  <div class="card"><span class="label">Test</span><h3 class="!m-0">試して</h3></div>
  <div class="text-3xl text-neutral-400">→</div>
  <div class="card"><span class="label">Improve</span><h3 class="!m-0">直す</h3></div>
</div>

<p class="!mt-12 text-center !text-3xl font-bold !leading-relaxed text-neutral-900">
AIがコードを書いても、何を作り、どう確かめるかを<br>
決めるのは自分であることを忘れないようにしましょう
</p>

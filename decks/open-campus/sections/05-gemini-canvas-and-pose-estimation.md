---
layout: center
---

<div class="text-center">
  <div class="text-sm font-mono tracking-widest text-neutral-500 mb-6">SECTION 05</div>
  <h1 class="text-5xl font-bold">Gemini Canvasと姿勢推定</h1>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">5.1 アイデアをWebアプリにする</h1>
  <p class="mt-7 text-lg leading-relaxed text-neutral-800">
    Gemini Canvasは、会話しながらコードを作り<br>
    その場で動きを確認できる制作スペースです
  </p>
  <div class="mt-10 min-h-0 flex-1 grid grid-cols-3 gap-5">
    <div class="flex flex-col justify-center border border-neutral-500 bg-neutral-100 p-6">
      <div class="text-xs font-mono tracking-widest text-neutral-600">01 / DESCRIBE</div>
      <p class="mt-4 text-2xl font-bold text-neutral-900">まずは<br>言葉で伝えよう</p>
      <p class="mt-3 text-sm leading-relaxed text-neutral-700">作りたいものと必要な機能をプロンプトに書く</p>
    </div>
    <div class="flex flex-col justify-center border border-neutral-500 bg-neutral-100 p-6">
      <div class="text-xs font-mono tracking-widest text-neutral-600">02 / PREVIEW</div>
      <p class="mt-4 text-2xl font-bold text-neutral-900">次に<br>動かしてみる</p>
      <p class="mt-3 text-sm leading-relaxed text-neutral-700">生成されたアプリをプレビューですぐに試す</p>
    </div>
    <div class="flex flex-col justify-center border border-neutral-500 bg-neutral-100 p-6">
      <div class="text-xs font-mono tracking-widest text-neutral-600">03 / IMPROVE</div>
      <p class="mt-4 text-2xl font-bold text-neutral-900">そして<br>機能追加も対話で</p>
      <p class="mt-3 text-sm leading-relaxed text-neutral-700">結果を見て、追加や修正を具体的に頼む</p>
    </div>
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">5.2 Canvasを開く</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-[1.05fr_.95fr] gap-10">
    <div class="flex flex-col justify-center pr-4">
      <div class="space-y-5 text-lg leading-relaxed text-neutral-800">
        <div class="border-l-2 border-neutral-500 pl-5"><span class="mr-4 font-mono text-neutral-600">01</span>Googleアカウントでログイン</div>
        <div class="border-l-2 border-neutral-500 pl-5"><span class="mr-4 font-mono text-neutral-600">02</span>プラスマーク（＋）の「Canvas」を選ぶ</div>
        <div class="border-l-2 border-neutral-500 pl-5"><span class="mr-4 font-mono text-neutral-600">03</span>次のスライドのプロンプトを送る</div>
      </div>
      <p class="mt-8 text-sm leading-relaxed text-neutral-700">
        カメラの使用確認が表示されたら<br>
        この実習中だけ許可しましょう
      </p>
    </div>
    <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" class="flex flex-col justify-center border border-neutral-500 bg-neutral-100 p-8 no-underline">
      <div class="text-xs font-mono tracking-widest text-neutral-600">OPEN GEMINI</div>
      <div class="mt-6 text-3xl font-bold leading-relaxed text-neutral-900">クリックして<br>Canvasを開く</div>
      <div class="mt-8 border-t border-neutral-500 pt-5 text-sm text-neutral-700">gemini.google.com</div>
    </a>
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">5.3 最初のプロンプト</h1>
  <div class="mt-7 min-h-0 flex-1 grid grid-cols-[1.25fr_.75fr] gap-8">
    <div class="flex flex-col justify-center border border-neutral-500 bg-neutral-100 p-6">
      <div class="text-xs font-mono tracking-widest text-neutral-600">COPY &amp; PASTE</div>
      <pre class="mt-5 whitespace-pre-wrap font-sans text-[15px] leading-relaxed text-neutral-900">ブラウザで動くリアルタイム姿勢推定Webアプリを作ってください。&#10;&#10;・「カメラを開始」ボタンを置く&#10;・カメラ映像の上に、体のキーポイントと骨格の線を描く&#10;・検出した人数を画面に表示する&#10;・カメラは自動で起動せず、ボタンを押してから許可を求める&#10;・処理中とエラーのメッセージを日本語で表示する&#10;・バックエンドやAPIキーを使わず、ブラウザ内で動かす</pre>
    </div>
    <div class="flex flex-col justify-center">
      <p class="mt-4 text-2xl font-bold leading-relaxed text-neutral-900">目的と条件を分けて伝える</p>
      <div class="mt-7 space-y-4 text-sm leading-relaxed text-neutral-700">
        <div><span class="mr-3 font-mono text-neutral-600">WHAT</span>まず何を作るか？</div>
        <div><span class="mr-3 font-mono text-neutral-600">ACTION</span>何ができると嬉しいか</div>
        <div><span class="mr-3 font-mono text-neutral-600">RULE</span>守ってほしい条件</div>
        <div><span class="mr-3 font-mono text-neutral-600">LOOK</span>アプリの見た目</div>
      </div>
    </div>
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">5.4 まず動作を確認する</h1>
  <p class="mt-7 text-lg leading-relaxed text-neutral-800">完成に見えても、実際に操作して確かめます</p>
  <div class="mt-9 min-h-0 flex-1 grid grid-cols-2 gap-x-8 gap-y-5">
    <div class="border border-neutral-500 bg-neutral-100 p-6">
      <div class="text-xs font-mono tracking-widest text-neutral-600">CAMERA</div>
      <p class="mt-3 text-xl font-bold text-neutral-900">ボタンから起動できますか？</p>
      <p class="mt-2 text-sm text-neutral-700">許可を断ったときも画面が止まらないか確認</p>
    </div>
    <div class="border border-neutral-500 bg-neutral-100 p-6">
      <div class="text-xs font-mono tracking-widest text-neutral-600">DETECTION</div>
      <p class="mt-3 text-xl font-bold text-neutral-900">点と線が体についてきますか？</p>
      <p class="mt-2 text-sm text-neutral-700">腕を上げる、横を向く、画面から離れる</p>
    </div>
    <div class="border border-neutral-500 bg-neutral-100 p-6">
      <div class="text-xs font-mono tracking-widest text-neutral-600">DISPLAY</div>
      <p class="mt-3 text-xl font-bold text-neutral-900">文字は読みやすい状態ですか？</p>
      <p class="mt-2 text-sm text-neutral-700">映像と説明が重ならず、状態が分かるか確認</p>
    </div>
    <div class="border border-neutral-500 bg-neutral-100 p-6">
      <div class="text-xs font-mono tracking-widest text-neutral-600">CONSOLE</div>
      <p class="mt-3 text-xl font-bold text-neutral-900">エラーは出ていませんか？</p>
      <p class="mt-2 text-sm text-neutral-700">動かないときはCanvasのコンソールを開き、修正依頼をしましょう</p>
    </div>
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">5.5 機能を1つ追加しよう</h1>
  <p class="mt-7 text-lg leading-relaxed text-neutral-800">気になるものを選び、Geminiへ追加を頼みます</p>
  <div class="mt-9 min-h-0 flex-1 grid grid-cols-3 gap-5">
    <div class="flex flex-col border border-neutral-500 bg-neutral-100 p-6">
      <div class="text-xs font-mono tracking-widest text-neutral-600">CHALLENGE A</div>
      <p class="mt-4 text-xl font-bold text-neutral-900">ポーズ判定</p>
      <p class="mt-3 flex-1 text-sm leading-relaxed text-neutral-700">両手を上げたら「GOOD!」と大きく表示する</p>
      <div class="mt-5 border-t border-neutral-400 pt-4 text-xs text-neutral-600">肩と手首のY座標を比べる</div>
    </div>
    <div class="flex flex-col border border-neutral-500 bg-neutral-100 p-6">
      <div class="text-xs font-mono tracking-widest text-neutral-600">CHALLENGE B</div>
      <p class="mt-4 text-xl font-bold text-neutral-900">回数カウント</p>
      <p class="mt-3 flex-1 text-sm leading-relaxed text-neutral-700">スクワットの回数を数えてリセットボタンを付ける</p>
      <div class="mt-5 border-t border-neutral-400 pt-4 text-xs text-neutral-600">ひざと腰の位置の変化を見る</div>
    </div>
    <div class="flex flex-col border border-neutral-500 bg-neutral-100 p-6">
      <div class="text-xs font-mono tracking-widest text-neutral-600">CHALLENGE C</div>
      <p class="mt-4 text-xl font-bold text-neutral-900">見た目を変更</p>
      <p class="mt-3 flex-1 text-sm leading-relaxed text-neutral-700">点と線の色を変え、ゲーム画面のようにデザインする</p>
      <div class="mt-5 border-t border-neutral-400 pt-4 text-xs text-neutral-600">機能を変えずUIだけ直す</div>
    </div>
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">5.6 うまく動かないときの伝え方</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-[.8fr_1.2fr] gap-9">
    <div class="flex flex-col justify-center">
      <div class="space-y-5 text-base leading-relaxed text-neutral-800">
        <div><span class="mr-4 font-mono text-neutral-600">01</span>実際に起きたこと</div>
        <div><span class="mr-4 font-mono text-neutral-600">02</span>期待している動き</div>
        <div><span class="mr-4 font-mono text-neutral-600">03</span>画面やコンソールの表示</div>
        <div><span class="mr-4 font-mono text-neutral-600">04</span>今回直す範囲</div>
      </div>
      <p class="mt-8 border-l-2 border-neutral-500 pl-4 text-sm leading-relaxed text-neutral-700">
        一度に全部頼まず<br>
        1つ直したらもう一度試すことがコツです
      </p>
    </div>
    <div class="flex flex-col justify-center border border-neutral-500 bg-neutral-100 p-6">
      <div class="text-xs font-mono tracking-widest text-neutral-600">FIX PROMPT</div>
      <pre class="mt-5 whitespace-pre-wrap font-sans text-[15px] leading-relaxed text-neutral-900">「カメラを開始」を押しても映像が表示されません。&#10;&#10;期待する動き：&#10;許可後にカメラ映像が表示され、姿勢推定が始まる。&#10;&#10;画面の表示：&#10;「カメラを準備中」のまま変わらない。&#10;&#10;ほかのデザインや機能は変えず、カメラ開始処理だけを確認して修正してください。エラーの原因も短く説明してください。</pre>
    </div>
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">5.7 AIと一緒に作る流れ</h1>
  <div class="mt-10 min-h-0 flex-1 flex flex-col justify-center">
    <div class="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-4">
      <div class="border border-neutral-500 bg-neutral-100 p-6 text-center">
        <div class="text-xs font-mono text-neutral-600">IDEA</div>
        <p class="mt-3 text-xl font-bold text-neutral-900">考えて</p>
      </div>
      <div class="text-2xl text-neutral-500">→</div>
      <div class="border border-neutral-500 bg-neutral-100 p-6 text-center">
        <div class="text-xs font-mono text-neutral-600">PROMPT</div>
        <p class="mt-3 text-xl font-bold text-neutral-900">伝えて</p>
      </div>
      <div class="text-2xl text-neutral-500">→</div>
      <div class="border border-neutral-500 bg-neutral-100 p-6 text-center">
        <div class="text-xs font-mono text-neutral-600">TEST</div>
        <p class="mt-3 text-xl font-bold text-neutral-900">試して</p>
      </div>
      <div class="text-2xl text-neutral-500">→</div>
      <div class="border border-neutral-500 bg-neutral-100 p-6 text-center">
        <div class="text-xs font-mono text-neutral-600">IMPROVE</div>
        <p class="mt-3 text-xl font-bold text-neutral-900">直す</p>
      </div>
    </div>
    <p class="mt-12 text-center text-2xl font-bold leading-relaxed text-neutral-900">
      AIがコードを書いても<br>
      何を作り、どう確かめるかを決めるのは<br>
      自分であることを忘れないようにしましょう
    </p>
  </div>
</div>

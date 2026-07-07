---
theme: tut
layout: cover
---

::title::
コンピュータビジョンの3大タスクを体験する

::date::
<SlideDate />

---
layout: toc
---

::title::
目次

---
layout: section
---

# 今日のゴール

---

::title::
今日のゴール

::default::

今日はAIを自分で作るのではなく、すでに学習された画像AIを使って、結果の違いを体験する

**できるようになること**

- コンピュータビジョンが何をする技術か説明できる
- 画像がコンピュータの中では数字として扱われることを理解する
- 分類・検出・分割の違いを、実行結果を見て説明できる
- 目的に合わせて、どのタスクを使うか考えられる

---
layout: section
---

# 最小限の基礎知識

---
layout: two-cols
---

::title::
コンピュータビジョン (CV) とは

::left::
コンピュータビジョンとは？

<div class="ml-2">
<carbon-arrow-right class="mr-2" />画像や動画をコンピュータに理解させる技術
</div>

人間は写真を見て、すぐに「人がいる」「車がある」「歩いている」と判断できる

コンピュータビジョンでは、同じような判断をコンピュータにも行わせる

**使われている例**
- 顔認証/顔認識
- 自動運転システム
- 工場での不良品検知

::right::
<figure class="h-full flex flex-col items-center justify-center">
  <img src="./assets/img001.webp" class="h-4/5 object-cover"/>
  <figcaption class="text-sm text-gray-600 mt-2">図1 人物姿勢推定 (引用:ultralytics)</figcaption>
</figure>

---
layout: two-cols
---

::title::
コンピュータにとって画像とは

::left::
コンピュータは画像を「意味」ではなく「数字」として見ている

<div class="ml-2">
<carbon-arrow-right class="mr-2" />画像は小さな点（ピクセル）の集まり
</div>

**グレースケール画像**
- 各ピクセルに0〜255の数字が入る
- 0は黒、255は白に近い

**カラー画像 (RGB)**
- R, G, Bの3つの数字で色を表す
- 数字の組み合わせでいろいろな色になる

::right::
<figure class="h-full flex flex-col items-center justify-center">
  <img src="./assets/img002.png" class="h-3/4"/>
  <figcaption class="text-sm text-gray-600 mt-2">図2 赤・緑・青の層が重なって画像になる様子</figcaption>
</figure>

---

::title::
画像AIは何を返すのか

::default::

コンピュータビジョンでは、画像を入力すると、目的に合わせた結果が返ってくる

<div class="h-full flex flex-col justify-center gap-4 text-sm mt-8">
  <div class="p-4 bg-gray-50 rounded">
    <div class="font-bold mb-2">入力</div>
    <div>画像・動画・カメラ映像</div>
  </div>
  <div class="text-center text-2xl">↓</div>
  <div class="p-4 bg-blue-50 rounded">
    <div class="font-bold mb-2">モデル</div>
    <div>画像の中の特徴を見つけて、目的に合わせて判断する</div>
  </div>
  <div class="text-center text-2xl">↓</div>
  <div class="p-4 bg-green-50 rounded">
    <div class="font-bold mb-2">出力</div>
    <div>ラベル、位置、領域など</div>
  </div>
</div>

---
layout: section
---

# CVの3大タスク

---

::title::
今日体験する3大タスク

::default::

同じ画像でも、「何を知りたいか」によって使うタスクが変わる

| タスク | 答える質問 | 出力 |
|--------|------------|------|
| **分類** | 何が写っている？ | カテゴリラベル |
| **検出** | どこに何がある？ | 物体の位置 + ラベル |
| **分割** | どの部分が対象？ | ピクセルごとの領域 |

今日はColabでこの3つを順番に実行し、結果を比べる

---

::title::
3大タスクの使い分け

::default::

| 知りたいこと | 選ぶタスク | 出力のイメージ | 具体例 |
|--------------|------------|----------------|--------|
| 画像に何が写っているか | 分類 | 「猫」 | 商品カテゴリ判定 |
| どこに写っているか | 検出 | 四角い枠 + 「人」 | 防犯カメラの人数確認 |
| どの領域が対象か | 分割 | 対象ピクセルの塗り分け | 道路・歩道・車線の認識 |

分類から分割へ進むほど、出力は細かくなる

---
layout: two-cols
---

::title::
分類 (Classification)

::left::
**画像分類とは？**

<div class="ml-2">
<carbon-arrow-right class="mr-2" />画像全体を1つのカテゴリに分ける
</div>

**答える質問**
- この画像は何か？
- 一番近いカテゴリは何か？

**Colabで見るポイント**
- 予測されたラベル
- 確信度の高さ
- 複数の物体があるときに何を選ぶか

::right::
<figure class="h-full flex flex-col items-center justify-center">
  <img src="./assets/img003.png" class="h-4/5 object-cover"/>
  <figcaption class="text-sm text-gray-600 mt-2">図3 画像分類の例 (引用:ultralytics)</figcaption>
</figure>

---
layout: two-cols
---

::title::
検出 (Detection)

::left::
**物体検出とは？**

<div class="ml-2">
<carbon-arrow-right class="mr-2" />画像内の物体の位置と種類を見つける
</div>

**答える質問**
- どこにあるか？
- それは何か？
- いくつあるか？

**Colabで見るポイント**
- 枠の位置が合っているか
- 見逃している物体はないか
- 間違って検出していないか

::right::
<figure class="h-full flex flex-col items-center justify-center">
  <img src="./assets/img004.webp" class="h-4/5 object-cover"/>
  <figcaption class="text-sm text-gray-600 mt-2">図4 画像検出の例 (引用:ultralytics)</figcaption>
</figure>

---
layout: two-cols
---

::title::
分割 (Segmentation)

::left::
**セグメンテーションとは？**

<div class="ml-2">
<carbon-arrow-right class="mr-2" />画像の中の対象領域を細かく分ける
</div>

**答える質問**
- どの部分が対象か？
- 形はどこまでか？
- 背景と対象の境界はどこか？

**Colabで見るポイント**
- 対象の形に沿って塗られているか
- 境界がずれていないか
- 小さい部分が消えていないか

::right::
<figure class="h-full flex flex-col items-center justify-center">
  <img src="./assets/img005.webp" class="h-4/5 object-cover"/>
  <figcaption class="text-sm text-gray-600 mt-2">図5 画像分割の例 (引用:ultralytics)</figcaption>
</figure>

---

::title::
同じ画像で比べる

::default::

Colabでは、同じ画像を3つのタスクに入れて、返ってくる結果を比べる

| タスク | 見るもの | 例 |
|--------|----------|----|
| 分類 | 画像全体のラベル | 「犬」「車」「料理」 |
| 検出 | 物体ごとの枠とラベル | 「人」が3人、「車」が2台 |
| 分割 | 対象の形に沿った領域 | 人や車の部分だけが塗られる |

大事なのは「どれが一番すごいか」ではなく、目的に合う出力を選ぶこと

---
layout: section
---

# タスクの体験

---

::title::
タスクの体験 (Google Colab)

::default::

<span class="font-bold text-2xl">https://trial-class.vercel.app/17</span>と検索してください

以下のリンクをクリックしてColabを開いてください

<div class=" my-8">
  <a href="https://colab.research.google.com/github/micanis/trial_class/blob/main/code/dot_ipynbs/experience.ipynb" target="_blank" class="text-2xl underline text-blue-600">
    Colabで開く
  </a>
</div>

1. 上のリンクをクリック
2. 「ドライブにコピー」で自分のアカウントに保存（任意）
3. 上から順にセルを実行していく

---

::title::
体験ミッション

::default::

Colabでは、結果を出すだけでなく「違い」と「間違い」を探す

**ミッション**

1. まず、写っているものがはっきりした画像で試す
2. 次に、少し難しそうな画像で試す
3. 分類・検出・分割の結果の違いを見る
4. AIがうまくいったところ、間違えたところをメモする

**難しそうな画像の例**

- 小さい物体が写っている
- 暗い、ぶれている、隠れている
- たくさんの物体が同時に写っている

---

::title::
体験で見るポイント

::default::

| 確認すること | 見るポイント |
|--------------|--------------|
| 入力画像 | 人間には簡単に見えるか |
| 分類結果 | 画像全体を何だと判断したか |
| 検出結果 | 枠の位置、数、ラベルは合っているか |
| 分割結果 | 対象の形に沿って塗られているか |
| 間違い | どんな画像で失敗しやすいか |

「なぜ当たったか」だけでなく「どんな時に外れるか」を見ると、実用化の課題が見えやすい

---

::title::
ふりかえり

::default::

次の場面では、どのタスクを使うとよさそうか考えてみよう

| やりたいこと | 使うタスク |
|--------------|------------|
| 写真が食べ物かどうかを判断したい | 分類 |
| 防犯カメラで人の数を数えたい | 検出 |
| 道路の画像から車道だけを取り出したい | 分割 |

自分なら、分類・検出・分割を何に使ってみたいか？

---

::title::
まとめ

::default::

**今日のポイント**

- コンピュータビジョンは、画像や動画をコンピュータに理解させる技術
- 画像はコンピュータの中では数字の集まりとして扱われる
- 分類は「何が写っているか」を答える
- 検出は「どこに何があるか」を答える
- 分割は「どの部分が対象か」を答える
- 目的に合わせて、必要な出力を選ぶことが大切

---

::title::
参考文献

::default::

| 図 | 出典 |
|----|------|
| 図1 | Ultralytics Blog - [What is OpenPose](https://www.ultralytics.com/ja/blog/what-is-openpose-exploring-a-milestone-in-pose-estimation) |
| 図2 | 自作 |
| 図3 | Ultralytics Blog - [Image Classification](https://www.ultralytics.com/ja/blog/how-to-use-ultralytics-yolo11-for-image-classification) |
| 図4 | Ultralytics Blog - [Object Detection Models](https://www.ultralytics.com/ja/blog/the-best-object-detection-models-of-2025) |
| 図5 | Ultralytics Blog - [Instance Segmentation](https://www.ultralytics.com/ja/blog/how-to-use-ultralytics-yolo11-for-instance-segmentation) |

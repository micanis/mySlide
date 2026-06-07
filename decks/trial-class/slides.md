---
theme: tut
layout: cover
---

::title::
コンピュータビジョンとその応用

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

# コンピュータビジョン (CV) とは

---
layout: two-cols
---

::title::
コンピュータビジョン (CV) とは

::left::
コンピュータビジョンとは？

<div class="ml-2">
<carbon-arrow-right class="mr-2" />画像やビデオなどの視覚的な入力を処理・分析する人工知能の一分野
</div>

どんなことに使われているのか？

- 顔認証/顔認識
- 自動運転システム
- 工場での品質欠陥の検知

図1のように人の姿勢を推定することもできる

::right::
<figure class="h-full flex flex-col items-center justify-center">
  <img src="./assets/img001.webp" class="h-4/5 object-cover"/>
  <figcaption class="text-sm text-gray-600 mt-2">図1 人物姿勢推定 (引用:ultralytics)</figcaption>
</figure>

---
layout: two-cols
---

::title::
CVで扱う問題の特徴

::left::
人間には簡単に見える画像理解も、コンピュータには難しい

**難しくなる理由**
- 同じ物体でも向き・大きさ・明るさが変わる
- 背景や影、手ぶれ、隠れが混ざる
- 画像には「意味」ではなく数値だけが入っている

**CVのゴール**
- 数値の並びから、人が使える意味へ変換する
- 例: 「車がある」「左車線にいる」「危険かもしれない」

::right::
<div class="h-full flex flex-col justify-center gap-4 text-sm">
  <div class="p-4 bg-gray-50 rounded">
    <div class="font-bold mb-2">入力</div>
    <div>画像・動画・カメラ映像</div>
  </div>
  <div class="text-center text-2xl">↓</div>
  <div class="p-4 bg-blue-50 rounded">
    <div class="font-bold mb-2">モデル</div>
    <div>特徴を取り出し、目的に合わせて判断する</div>
  </div>
  <div class="text-center text-2xl">↓</div>
  <div class="p-4 bg-green-50 rounded">
    <div class="font-bold mb-2">出力</div>
    <div>ラベル、位置、マスク、姿勢、数値など</div>
  </div>
</div>

---
layout: two-cols
---

::title::
画像とは

::left::

コンピュータにとって画像とは？

<div class="ml-2">
<carbon-arrow-right class="mr-2" />数値（ピクセル）の配列
</div>


**グレースケール画像**
- 各ピクセル: 0〜255の1つの値

**カラー画像 (RGB)**
- 各ピクセル: R, G, B の3層
- 各層が0〜255の値を持つ

::right::


<figure class="h-full flex flex-col items-center justify-center">
  <img src="./assets/img002.png" class="h-3/4"/>
  <figcaption class="text-sm text-gray-600 mt-2">図2 赤・緑・青の層が重なって画像になる様子</figcaption>
</figure>

---
layout: two-cols
---

::title::
機械学習とは

::left::
機械学習とは？

<div class="ml-2">
<carbon-arrow-right class="mr-2" />データからパターンを学習し、予測や判断を行うAIの手法
</div>

**従来のプログラミング**
- ルールを人間が明示的に記述

**機械学習**
- データから自動的にルールを学習
- ただし、学習データの質に強く依存する

::right::
<div class="h-full flex flex-col items-center justify-center text-sm">

```
従来のプログラミング:
  入力 + ルール → 出力

機械学習:
  入力 + 出力 → ルール(モデル)
```

<div class="mt-4 p-4 bg-blue-50 rounded">
例: 犬と猫の分類

1. 大量の犬・猫画像を用意
2. 各画像に「犬」「猫」のラベル付け
3. モデルが特徴を自動学習
4. 新しい画像を判定可能に
</div>
</div>

---
layout: two-cols
---

::title::
学習データと評価

::left::
モデルは「見たことがあるデータ」にだけ強くなっても意味がない

**データの分け方**
- 訓練データ: モデルの学習に使う
- 検証データ: 学習中の調整に使う
- テストデータ: 最後に実力を確認する

**大切な考え方**
- 本番に近いデータで評価する
- 偏ったデータでは、偏った予測になりやすい

::right::
<div class="h-full flex flex-col justify-center text-sm">

| データ | 役割 | 例 |
|--------|------|----|
| 訓練 | パターンを覚える | 犬・猫画像8,000枚 |
| 検証 | 設定を調整する | 犬・猫画像1,000枚 |
| テスト | 最終確認する | 犬・猫画像1,000枚 |

<div class="mt-5 p-4 bg-yellow-50 rounded">
精度が高くても、間違え方を見ることが重要。医療・自動運転・防犯などでは、どの間違いが危険かを先に決めておく。
</div>
</div>

---
layout: section
---

# CVの3大タスク

---

::title::
CVの3大タスク

::default::

コンピュータビジョンには代表的な3つのタスクがある

| タスク | 入力 | 出力 |
|--------|------|------|
| **分類** | 画像全体 | カテゴリラベル |
| **検出** | 画像全体 | 物体の位置 + ラベル |
| **分割** | 画像全体 | ピクセルごとのラベル |

使うタスクは「何を知りたいか」で決まる

---

::title::
3大タスクの使い分け

::default::

| 知りたいこと | 選ぶタスク | 出力のイメージ | 具体例 |
|--------------|------------|----------------|--------|
| 画像に何が写っているか | 分類 | 「猫」 | 商品カテゴリ判定 |
| どこに写っているか | 検出 | 四角い枠 + 「人」 | 防犯カメラの人数確認 |
| どの領域が対象か | 分割 | 対象ピクセルの塗り分け | 道路・歩道・車線の認識 |

分類から分割へ進むほど、出力は細かくなる。一方で、正解データを作る手間も大きくなる。

---
layout: two-cols
---

::title::
分類 (Classification)

::left::
**画像分類とは？**

<div class="ml-2">
<carbon-arrow-right class="mr-2" />画像全体を1つのカテゴリに分類する
</div>

**特徴**
- この画像は何か？に答える
- 定義したカテゴリに必ず分類される
- 複数の物体がある画像は苦手な場合がある

**応用例**
- 医療画像の診断補助
- 不良品/良品の判定
- レシートや書類の種類判定

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
<carbon-arrow-right class="mr-2" />画像内の物体の位置と種類を特定する
</div>

**特徴**
- どこに何があるか？に答える
- 定義したカテゴリから選ばれる
- 1枚の画像から複数の物体を同時に見つけられる

**応用例**
- カメラでの人物検出
- 交通量調査
- 店舗棚の商品数チェック

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
<carbon-arrow-right class="mr-2" />画像の各ピクセルにラベルを付与する
</div>

**特徴**
- どのピクセルが何か？に答える
- 物体の形を細かく扱える
- 境界を正確に取りたい場面に向いている

**応用例**
- 自動運転での道路/歩道の認識
- 背景除去・画像編集
- 医療画像での臓器・病変領域の抽出

::right::

<figure class="h-full flex flex-col items-center justify-center">
  <img src="./assets/img005.webp" class="h-4/5 object-cover"/>
  <figcaption class="text-sm text-gray-600 mt-2">図5 画像分割の例 (引用:ultralytics)</figcaption>
</figure>
---
layout: section
---

# タスクの体験

---

::title::
タスクの体験 (Google Colab)

::default::

<span class="font-bold text-2xl">https://trial-class.vercel.app/16</span>と検索してください

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
体験で見るポイント

::default::

Colabでは「モデルが何を返しているか」を意識して確認する

| 確認すること | 見るポイント |
|--------------|--------------|
| 入力画像 | 何が写っているか、人間には簡単か |
| 予測結果 | 正解しているか、確信度は高いか |
| 間違い | 似た見た目・小さい物体・暗い画像で失敗していないか |
| 処理時間 | 1枚ずつなら速くても、動画では重くならないか |

「なぜ当たったか」だけでなく「どんな時に外れるか」を見ると、実用化の課題が見えやすい。

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

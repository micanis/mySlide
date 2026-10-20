---
layout: section
section: '04'
level: 1
---

# 人物認識と姿勢推定

---
title: 4.1 コンピュータビジョンとは
level: 2
---

カメラや画像からコンピュータが情報を読み取る技術<br>
人が目と脳で行う「見る」を画像とプログラムで再現します

<img src="/images/what-is-cv.webp" alt="人の視覚とコンピュータビジョンを比較した図" class="mx-auto mt-2 block max-h-[340px] max-w-full object-contain">

---
layout: n-columns
columns: 2
gap: 40
title: 4.2 人物検出とは
level: 2
---

### 人がどこにいるかを見つける

画像の中から人物を探し、1人ずつ四角形で囲みます

> この四角形をバウンディングボックスと呼びます

::column-2::

<img src="/images/what-is-person-detection.webp" alt="複数の人物を四角形で囲んだ人物検出結果" class="mx-auto block max-h-[440px] max-w-full object-contain">

---
title: 4.3 人物検出で得られるもの
level: 2
---

<div class="mt-2 grid grid-cols-2 gap-5">
  <div class="card">
    <span class="label">Class</span>
    <h3>person</h3>
    <div class="note">見つけた物体の種類</div>
  </div>
  <div class="card">
    <span class="label">Confidence</span>
    <h3>0.92</h3>
    <div class="note">モデルがどれくらい確信しているか</div>
  </div>
  <div class="card">
    <span class="label">Bounding box</span>
    <h3 class="font-mono">x1 y1 x2 y2</h3>
    <div class="note">左上と右下の座標</div>
  </div>
  <div class="card">
    <span class="label">Count</span>
    <h3>4 people</h3>
    <div class="note">四角形の数から人数を数える</div>
  </div>
</div>

---
layout: n-columns
columns: 2
gap: 40
title: 4.4 実習｜人物を検出する
level: 2
---

<span class="label">Notebook / first half</span>

### 人物検出のセルまで実行

1. 画像をダウンロード
2. 人物だけを検出
3. 人数と確信度を確認

<a href="https://colab.research.google.com/github/micanis/mySlide/blob/main/decks/open-campus/python/04_person_detection_pose.ipynb" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center gap-3 rounded-md !bg-[var(--micanis-accent)] px-6 py-3 text-xl font-bold !text-white !no-underline">Google Colabを開く <span aria-hidden="true">→</span></a>

::column-2::

<span class="label">Person detection</span>

```python
model = YOLO("yolo26n.pt")

result = model.predict(
    image,
    classes=[0]
)[0]

plt.imshow(result.plot()[..., ::-1])
plt.show()
```

<a href="https://docs.ultralytics.com/modes/predict/" target="_blank" rel="noopener noreferrer" class="text-lg">Ultralytics Predict documentation</a>

---
layout: n-columns
columns: 2
gap: 40
title: 4.5 姿勢推定とは
level: 2
---

### 人がどんな姿勢かを見つける

鼻・肩・ひじ・手首・ひざなどを17個のキーポイントとして検出します

> 体の特徴を表す点をキーポイント、点を結んだ線をスケルトンと呼びます

::column-2::

<img src="/images/what-is-pose-estimation.webp" alt="人物の関節を点と線で表した姿勢推定結果" class="mx-auto block max-h-[440px] max-w-full object-contain">

---
title: 4.6 姿勢はどうやって求める
level: 2
---

<div class="grid grid-cols-3 gap-5">
  <div class="card">
    <span class="label">01 / Detect</span>
    <h3>人物の範囲を見つける</h3>
    <div class="note">画像のどこに人がいるかを先に探す</div>
  </div>
  <div class="card">
    <span class="label">02 / Keypoint</span>
    <h3>17個の点を予測する</h3>
    <div class="note">鼻や肩などのX・Y座標と確信度を求める</div>
  </div>
  <div class="card">
    <span class="label">03 / Connect</span>
    <h3>決められた順に結ぶ</h3>
    <div class="note">肩とひじなど対応する関節を線でつなぐ</div>
  </div>
</div>

<figure class="mt-5 text-center">
  <img src="/images/ultralytics-pose.webp" alt="姿勢推定で腕の関節を結んだ例" class="mx-auto h-[150px] max-w-full object-contain">
  <figcaption>YOLO Poseは画像内にいる複数人のキーポイントをまとめて検出します</figcaption>
</figure>

---
layout: n-columns
columns: 2
gap: 40
title: 4.7 実習｜姿勢を推定する
level: 2
---

<span class="label">Notebook / second half</span>

### 姿勢推定のセルを実行

1. YOLO Poseモデルを読み込む
2. 点と線を画像へ表示
3. 関節座標の形を確認

> 人物検出は「どこにいるか」、姿勢推定は「どんな姿勢か」

::column-2::

<span class="label">YOLO26 Pose / multi-person</span>

```python
model = YOLO("yolo26m-pose.pt")

result = model.predict(
    image,
    imgsz=960,
    conf=0.25
)[0]

print(result.keypoints.data.shape)
# 人数 × 17 × 3
```

<a href="https://docs.ultralytics.com/tasks/pose/" target="_blank" rel="noopener noreferrer" class="text-lg">Ultralytics Pose documentation</a>

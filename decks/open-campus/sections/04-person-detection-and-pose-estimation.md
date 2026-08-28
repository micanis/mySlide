---
layout: center
---

<div class="text-center">
  <div class="text-sm font-mono tracking-widest text-neutral-500 mb-6">SECTION 04</div>
  <h1 class="text-5xl font-bold">人物認識と姿勢推定</h1>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">4.1 コンピュータビジョンとは</h1>
  <p class="mt-7 text-lg leading-relaxed text-neutral-800">
    カメラや画像からコンピュータが情報を読み取る技術<br>
    人が目と脳で行う「見る」を画像とプログラムで再現します
  </p>
  <div class="mt-8 min-h-0 flex-1 grid place-items-center">
    <img
      src="/images/what-is-cv.png"
      alt="人の視覚とコンピュータビジョンを比較した図"
      class="max-h-full w-[92%] object-contain"
    />
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">4.2 人物検出とは</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-2 gap-10">
    <div class="flex flex-col justify-center pr-4">
      <p class="text-2xl font-bold leading-relaxed text-neutral-900">人がどこにいるかを見つける</p>
      <p class="mt-5 text-lg leading-relaxed text-neutral-800">
        画像の中から人物を探し<br>
        1人ずつ四角形で囲みます
      </p>
      <div class="mt-9 border-l-2 border-neutral-500 pl-5 text-base leading-relaxed text-neutral-700">
        この四角形を<br>
        バウンディングボックスと呼びます
      </div>
    </div>
    <div class="min-h-0 grid place-items-center">
      <img
        src="/images/what-is-person-detection.png"
        alt="複数の人物を四角形で囲んだ人物検出結果"
        class="max-h-full w-auto object-contain"
      />
    </div>
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">4.3 人物検出で得られるもの</h1>
  <div class="mt-10 min-h-0 flex-1 grid grid-cols-2 gap-x-6 gap-y-5">
    <div class="border border-neutral-500 bg-neutral-100 p-6">
      <div class="text-xs font-mono tracking-widest text-neutral-600">CLASS</div>
      <div class="mt-3 text-2xl font-bold text-neutral-900">person</div>
      <p class="mt-2 text-sm text-neutral-700">見つけた物体の種類</p>
    </div>
    <div class="border border-neutral-500 bg-neutral-100 p-6">
      <div class="text-xs font-mono tracking-widest text-neutral-600">CONFIDENCE</div>
      <div class="mt-3 text-2xl font-bold text-neutral-900">0.92</div>
      <p class="mt-2 text-sm text-neutral-700">モデルがどれくらい確信しているか</p>
    </div>
    <div class="border border-neutral-500 bg-neutral-100 p-6">
      <div class="text-xs font-mono tracking-widest text-neutral-600">BOUNDING BOX</div>
      <div class="mt-3 font-mono text-xl font-bold text-neutral-900">x1 y1 x2 y2</div>
      <p class="mt-2 text-sm text-neutral-700">左上と右下の座標</p>
    </div>
    <div class="border border-neutral-500 bg-neutral-100 p-6">
      <div class="text-xs font-mono tracking-widest text-neutral-600">COUNT</div>
      <div class="mt-3 text-2xl font-bold text-neutral-900">4 people</div>
      <p class="mt-2 text-sm text-neutral-700">四角形の数から人数を数える</p>
    </div>
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">4.4 実習｜人物を検出する</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-[.9fr_1.1fr] gap-10">
    <div class="flex flex-col justify-center pr-4">
      <div class="text-xs font-mono tracking-widest text-neutral-600">NOTEBOOK / FIRST HALF</div>
      <p class="mt-4 text-2xl font-bold leading-relaxed text-neutral-900">人物検出のセルまで実行</p>
      <div class="mt-7 space-y-4 text-base leading-relaxed text-neutral-800">
        <div><span class="mr-4 font-mono text-neutral-600">01</span>画像をダウンロード</div>
        <div><span class="mr-4 font-mono text-neutral-600">02</span>人物だけを検出</div>
        <div><span class="mr-4 font-mono text-neutral-600">03</span>人数と確信度を確認</div>
      </div>
      <a href="https://colab.research.google.com/github/" target="_blank" class="mt-8 inline-block border border-neutral-500 bg-neutral-100 px-5 py-4 text-center font-bold text-neutral-900 no-underline">Google Colabを開く</a>
    </div>
    <div class="flex flex-col justify-center border border-neutral-500 bg-neutral-100 p-6">
      <div class="text-xs font-mono tracking-widest text-neutral-600">PERSON DETECTION</div>
      <pre class="mt-5 whitespace-pre-wrap text-sm leading-relaxed text-neutral-900">model = YOLO(&quot;yolo26n.pt&quot;)&#10;&#10;result = model.predict(&#10;    image,&#10;    classes=[0]&#10;)[0]&#10;&#10;plt.imshow(result.plot()[..., ::-1])&#10;plt.show()</pre>
      <a href="https://docs.ultralytics.com/modes/predict/" target="_blank" class="mt-5 text-xs text-neutral-600 underline">Ultralytics Predict documentation</a>
    </div>
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">4.5 姿勢推定とは</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-2 gap-10">
    <div class="flex flex-col justify-center pr-4">
      <p class="text-2xl font-bold leading-relaxed text-neutral-900">人がどんな姿勢かを見つける</p>
      <p class="mt-5 text-lg leading-relaxed text-neutral-800">
        鼻　肩　ひじ　手首　ひざなどを<br>
        33個のランドマークとして検出します
      </p>
      <div class="mt-9 border-l-2 border-neutral-500 pl-5 text-base leading-relaxed text-neutral-700">
        体の特徴を表す点をランドマーク<br>
        点を結んだ線をスケルトンと呼びます
      </div>
    </div>
    <div class="min-h-0 grid place-items-center">
      <img
        src="/images/what-is-pose-estimation.png"
        alt="人物の関節を点と線で表した姿勢推定結果"
        class="max-h-full w-auto object-contain"
      />
    </div>
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">4.6 姿勢はどうやって求める</h1>
  <div class="mt-8 min-h-0 flex-1 flex flex-col">
    <div class="grid grid-cols-3 gap-4">
      <div class="border border-neutral-500 bg-neutral-100 p-5">
        <div class="text-xs font-mono text-neutral-600">01 / DETECT</div>
        <p class="mt-3 text-lg font-bold text-neutral-900">人物の範囲を見つける</p>
        <p class="mt-2 text-sm leading-relaxed text-neutral-700">画像のどこに人がいるかを先に探す</p>
      </div>
      <div class="border border-neutral-500 bg-neutral-100 p-5">
        <div class="text-xs font-mono text-neutral-600">02 / LANDMARK</div>
        <p class="mt-3 text-lg font-bold text-neutral-900">33個の点を予測する</p>
        <p class="mt-2 text-sm leading-relaxed text-neutral-700">鼻や肩などのX Y Z座標を求める</p>
      </div>
      <div class="border border-neutral-500 bg-neutral-100 p-5">
        <div class="text-xs font-mono text-neutral-600">03 / CONNECT</div>
        <p class="mt-3 text-lg font-bold text-neutral-900">決められた順に結ぶ</p>
        <p class="mt-2 text-sm leading-relaxed text-neutral-700">肩とひじなど対応する関節を線でつなぐ</p>
      </div>
    </div>
    <div class="mt-5 min-h-0 flex-1 grid place-items-center">
      <img src="/images/ultralytics-pose.webp" alt="姿勢推定で腕の関節を結んだ例" class="h-[170px] w-[82%] object-contain" />
    </div>
    <p class="mt-2 text-center text-xs text-neutral-600">MediaPipe Pose Landmarkerは画像座標と3次元座標を返します</p>
  </div>
</div>

---
layout: default
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold">4.7 実習｜姿勢を推定する</h1>
  <div class="mt-8 min-h-0 flex-1 grid grid-cols-[.9fr_1.1fr] gap-10">
    <div class="flex flex-col justify-center pr-4">
      <div class="text-xs font-mono tracking-widest text-neutral-600">NOTEBOOK / SECOND HALF</div>
      <p class="mt-4 text-2xl font-bold leading-relaxed text-neutral-900">姿勢推定のセルを実行</p>
      <div class="mt-7 space-y-4 text-base leading-relaxed text-neutral-800">
        <div><span class="mr-4 font-mono text-neutral-600">01</span>MediaPipeモデルを読み込む</div>
        <div><span class="mr-4 font-mono text-neutral-600">02</span>点と線を画像へ表示</div>
        <div><span class="mr-4 font-mono text-neutral-600">03</span>関節座標の形を確認</div>
      </div>
      <p class="mt-8 border-l-2 border-neutral-500 pl-4 text-sm leading-relaxed text-neutral-700">
        人物検出は「どこにいるか」<br>
        姿勢推定は「どんな姿勢か」
      </p>
    </div>
    <div class="flex flex-col justify-center border border-neutral-500 bg-neutral-100 p-6">
      <div class="text-xs font-mono tracking-widest text-neutral-600">MEDIAPIPE POSE LANDMARKER</div>
      <pre class="mt-5 whitespace-pre-wrap text-sm leading-relaxed text-neutral-900">options = vision.PoseLandmarkerOptions(&#10;    base_options=python.BaseOptions(&#10;        model_asset_path=MODEL_PATH&#10;    ),&#10;    num_poses=4&#10;)&#10;&#10;with vision.PoseLandmarker.create_from_options(options) as landmarker:&#10;    result = landmarker.detect(mp_image)&#10;&#10;print(len(result.pose_landmarks[0]))&#10;# 33</pre>
      <a href="https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker/python" target="_blank" class="mt-5 text-xs text-neutral-600 underline">MediaPipe Pose Landmarker documentation</a>
    </div>
  </div>
</div>

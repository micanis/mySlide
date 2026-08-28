# ---
# jupyter:
#   jupytext:
#     formats: ipynb,py:percent
#     text_representation:
#       extension: .py
#       format_name: percent
#       format_version: '1.3'
#       jupytext_version: 1.19.5
#   kernelspec:
#     display_name: Python 3
#     language: python
#     name: python3
# ---

# %% [markdown]
# # 人物検出と姿勢推定を体験しよう
#
# 1枚の画像に対して人物検出と姿勢推定を実行し
# それぞれから得られる情報の違いを確認します

# %% [markdown]
# ## 1　必要なライブラリ
#
# UltralyticsとMediaPipeをColabの実行環境へインストールします

# %%
# %pip install -q ultralytics mediapipe

from io import BytesIO
from urllib.request import Request, urlopen

import matplotlib.pyplot as plt
import mediapipe as mp
import numpy as np
from PIL import Image
from mediapipe.tasks import python
from mediapipe.tasks.python import vision
from ultralytics import YOLO


# %% [markdown]
# ## 2　実習画像をダウンロード
#
# 複数の人が写ったUltralyticsのサンプル画像を使用します

# %%
IMAGE_URL = "https://ultralytics.com/images/bus.jpg"

request = Request(IMAGE_URL, headers={"User-Agent": "Mozilla/5.0"})
with urlopen(request) as response:
    image_data = response.read()

image = np.array(Image.open(BytesIO(image_data)).convert("RGB"))

plt.figure(figsize=(8, 6))
plt.imshow(image)
plt.axis("off")
plt.show()


# %% [markdown]
# ## 3　人物を検出
#
# `classes=[0]` は検出対象をpersonだけにする指定です

# %%
detect_model = YOLO("yolo26n.pt")
detect_result = detect_model.predict(image, classes=[0], verbose=False)[0]

detect_image = detect_result.plot()[..., ::-1]

plt.figure(figsize=(8, 6))
plt.imshow(detect_image)
plt.axis("off")
plt.show()

print(f"検出した人数: {len(detect_result.boxes)}")


# %% [markdown]
# ## 4　人物検出の数値を確認
#
# 四角形の座標と確信度を1人ずつ表示します

# %%
for index, box in enumerate(detect_result.boxes, start=1):
    x1, y1, x2, y2 = box.xyxy[0].cpu().tolist()
    confidence = float(box.conf[0].cpu())
    print(
        f"person {index}: "
        f"box=({x1:.0f}, {y1:.0f}, {x2:.0f}, {y2:.0f}) "
        f"confidence={confidence:.2f}"
    )


# %% [markdown]
# ## 5　MediaPipeのモデルをダウンロード
#
# Pose Landmarkerは体の特徴を33個のランドマークとして検出します

# %%
MODEL_URL = (
    "https://storage.googleapis.com/mediapipe-models/pose_landmarker/"
    "pose_landmarker_lite/float16/1/pose_landmarker_lite.task"
)
MODEL_PATH = "pose_landmarker_lite.task"

request = Request(MODEL_URL, headers={"User-Agent": "Mozilla/5.0"})
with urlopen(request) as response, open(MODEL_PATH, "wb") as model_file:
    model_file.write(response.read())


# %% [markdown]
# ## 6　姿勢を推定
#
# `num_poses=4` は最大4人まで姿勢を探す指定です

# %%
options = vision.PoseLandmarkerOptions(
    base_options=python.BaseOptions(
        model_asset_path=MODEL_PATH,
        delegate=python.BaseOptions.Delegate.CPU,
    ),
    running_mode=vision.RunningMode.IMAGE,
    num_poses=4,
)

mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=image)

with vision.PoseLandmarker.create_from_options(options) as landmarker:
    pose_result = landmarker.detect(mp_image)


# %% [markdown]
# ## 7　ランドマークを表示
#
# 33個の点を決められた組み合わせで結びます

# %%
height, width = image.shape[:2]
connections = vision.PoseLandmarksConnections.POSE_LANDMARKS

fig, ax = plt.subplots(figsize=(8, 6))
ax.imshow(image)

for landmarks in pose_result.pose_landmarks:
    x = [landmark.x * width for landmark in landmarks]
    y = [landmark.y * height for landmark in landmarks]

    for connection in connections:
        ax.plot(
            [x[connection.start], x[connection.end]],
            [y[connection.start], y[connection.end]],
            color="#84cc16",
            linewidth=2,
        )

    ax.scatter(x, y, s=18, color="#ec4899")

ax.axis("off")
plt.show()


# %% [markdown]
# ## 8　ランドマークの座標を確認
#
# 結果は `(人数 33 3)` の配列です
# 最後の3つの値がX座標 Y座標 Z座標です

# %%
landmark_array = np.array(
    [
        [[landmark.x, landmark.y, landmark.z] for landmark in landmarks]
        for landmarks in pose_result.pose_landmarks
    ]
)

print(f"ランドマーク座標の形: {landmark_array.shape}")
if len(landmark_array) > 0:
    print("1人目の鼻の座標:", landmark_array[0, 0])

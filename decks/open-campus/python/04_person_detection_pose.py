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
# UltralyticsをColabの実行環境へインストールします

# %%
# %pip install -q ultralytics

from io import BytesIO
from urllib.request import Request, urlopen

import matplotlib.pyplot as plt
import numpy as np
from PIL import Image
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

detect_image = detect_result.plot()[...]

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
# ## 5　姿勢推定モデルを読み込む
#
# YOLO Poseは複数人の姿勢を17個のキーポイントとして検出します

# %%
pose_model = YOLO("yolo26m-pose.pt")


# %% [markdown]
# ## 6　姿勢を推定
#
# 入力サイズを大きくして画像内の小さな人物も探します

# %%
pose_result = pose_model.predict(
    image,
    imgsz=960,
    conf=0.25,
    verbose=False,
)[0]

print(f"姿勢を検出した人数: {pose_result.keypoints.data.shape[0]}")


# %% [markdown]
# ## 7　キーポイントを表示
#
# 複数人の17個の点を決められた組み合わせで結びます

# %%
pose_image = pose_result.plot()[...]

plt.figure(figsize=(8, 6))
plt.imshow(pose_image)
plt.axis("off")
plt.show()


# %% [markdown]
# ## 8　キーポイントの座標を確認
#
# 結果は `(人数 17 3)` の配列です
# 最後の3つの値がX座標 Y座標 確信度です

# %%
keypoint_array = pose_result.keypoints.data.cpu().numpy()

print(f"キーポイント座標の形: {keypoint_array.shape}")
if len(keypoint_array) > 0:
    print("1人目の鼻 [X Y confidence]:", keypoint_array[0, 0])

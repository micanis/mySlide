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
# # 画像を表示して切り抜こう
#
# 画像処理でよく使われるマンドリル画像をダウンロードし
# NumPyの配列として表示と切り抜きを体験します

# %% [markdown]
# ## 1　必要なライブラリ
#
# Google Colabには必要なライブラリが用意されています
# このセルを実行して読み込みます

# %%
from io import BytesIO
from urllib.request import Request, urlopen

import matplotlib.pyplot as plt
import numpy as np
from PIL import Image


# %% [markdown]
# ## 2　画像をダウンロード
#
# USC-SIPI Image Databaseのマンドリル画像 `4.2.03` を使用します

# %%
IMAGE_URL = "https://sipi.usc.edu/database/download.php?img=4.2.03&vol=misc"

request = Request(IMAGE_URL, headers={"User-Agent": "Mozilla/5.0"})
with urlopen(request) as response:
    image_data = response.read()

image = np.array(Image.open(BytesIO(image_data)).convert("RGB"))

height, width, colors = image.shape
print(f"画像サイズ: {width} x {height}")
print(f"色の数: {colors}")


# %% [markdown]
# ## 3　画像全体を表示

# %%
plt.figure(figsize=(6, 6))
plt.imshow(image)
plt.axis("off")
plt.show()


# %% [markdown]
# ## 4　左目を切り抜く
#
# 左上 `(x1 y1)` と右下 `(x2 y2)` の座標を決めます
# カラー画像の配列は `(高さ 幅 3)` の形です
# 1つの画素には `[R G B]` の3つの値が入っています
# 配列ではYの範囲を先に書きます

# %%
x1 = 115
y1 = 25
x2 = 225
y2 = 130

eye = image[y1:y2, x1:x2]

plt.figure(figsize=(5, 5))
plt.imshow(eye)
plt.axis("off")
plt.show()


# %% [markdown]
# ## 5　好きな部分を切り抜く
#
# 4つの数値を書き換えて好きな部分を表示してみよう
# `x1 < x2` と `y1 < y2` になるように気をつけよう

# %%
x1 = 150
y1 = 120
x2 = 360
y2 = 440

if not (0 <= x1 < x2 <= width and 0 <= y1 < y2 <= height):
    raise ValueError("座標が画像の範囲を超えています")

my_crop = image[y1:y2, x1:x2]

plt.figure(figsize=(6, 6))
plt.imshow(my_crop)
plt.axis("off")
plt.show()

# %% [markdown]
# CNNを理解して自分で作ってみよう

# %% [markdown]
# ## 畳み込み (Convolution) とは
#
# CNNの核となる処理。小さなフィルタ（カーネル）を画像上でスライドさせ、特徴を抽出する。
#
# - **エッジ検出**: 輪郭を見つける
# - **パターン認識**: 特定の形状を検出
#
# 層を重ねることで、低レベル（エッジ）→ 高レベル（物体）の特徴を学習する。

# %%
# 畳み込みの動作を可視化
import numpy as np
import matplotlib.pyplot as plt

sample_image = np.array([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
], dtype=float)

edge_filter = np.array([
    [-1, 0, 1],
    [-1, 0, 1],
    [-1, 0, 1],
])

from scipy.signal import convolve2d
result = convolve2d(sample_image, edge_filter, mode='valid')

fig, axes = plt.subplots(1, 3, figsize=(12, 4))
axes[0].imshow(sample_image, cmap='gray')
axes[0].set_title('入力画像')
axes[1].imshow(edge_filter, cmap='RdBu', vmin=-1, vmax=1)
axes[1].set_title('エッジ検出フィルタ')
axes[2].imshow(result, cmap='RdBu')
axes[2].set_title('畳み込み結果')
for ax in axes:
    ax.axis('off')
plt.tight_layout()
plt.show()

# %% [markdown]
# ## MNISTデータセット
#
# 手書き数字(0-9)の画像データセット。28x28ピクセルのグレースケール画像。

# %%
# データの準備
import tensorflow as tf
from tensorflow import keras

(X_train, y_train), (X_test, y_test) = keras.datasets.mnist.load_data()

X_train = X_train.astype('float32') / 255.0
X_test = X_test.astype('float32') / 255.0

X_train = X_train.reshape(-1, 28, 28, 1)
X_test = X_test.reshape(-1, 28, 28, 1)

fig, axes = plt.subplots(1, 5, figsize=(10, 2))
for i, ax in enumerate(axes):
    ax.imshow(X_train[i].squeeze(), cmap='gray')
    ax.set_title(f"正解: {y_train[i]}")
    ax.axis('off')
plt.show()

print(f"訓練データ: {X_train.shape[0]}枚")
print(f"テストデータ: {X_test.shape[0]}枚")

# %% [markdown]
# ## CNNモデルを構築
#
# - **Conv2D**: 畳み込み層（特徴抽出）
# - **MaxPooling2D**: プーリング層（情報圧縮）
# - **Flatten**: 1次元に変換
# - **Dense**: 全結合層（分類）

# %%
# モデル定義
model = keras.Sequential([
    keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    keras.layers.MaxPooling2D((2, 2)),
    keras.layers.Conv2D(64, (3, 3), activation='relu'),
    keras.layers.MaxPooling2D((2, 2)),
    keras.layers.Flatten(),
    keras.layers.Dense(64, activation='relu'),
    keras.layers.Dense(10, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

model.summary()

# %%
# 学習
history = model.fit(
    X_train, y_train,
    epochs=3,
    batch_size=64,
    validation_split=0.1,
    verbose=1
)

# %%
# 評価
test_loss, test_acc = model.evaluate(X_test, y_test, verbose=0)
print(f"テスト精度: {test_acc:.1%}")

# %% [markdown]
# ## 予測してみよう

# %%
# テスト画像で予測
predictions = model.predict(X_test[:5], verbose=0)

fig, axes = plt.subplots(1, 5, figsize=(12, 3))
for i, ax in enumerate(axes):
    ax.imshow(X_test[i].squeeze(), cmap='gray')
    pred_label = np.argmax(predictions[i])
    confidence = predictions[i][pred_label]
    ax.set_title(f"予測: {pred_label} ({confidence:.0%})")
    ax.axis('off')
plt.tight_layout()
plt.show()

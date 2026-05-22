# %% [markdown]
# 3大タスクを体験してみよう

# %%
# 今回使うツールをインストール
!pip install ultralytics

# %%
# PCからAIに見せたい画像をアップロード
from google.colab import files
uploaded = files.upload()

filename = next(iter(uploaded))
print(f"[{filename}] loaded!!")

# %%
# 画像分類 (Classification) を試す
from ultralytics import YOLO
from IPython.display import display
from PIL import Image

model_cls = YOLO("yolov8n-cls.pt")

results_cls = model_cls.predict(filename)

top1_idx = results_cls[0].probs.top1
top1_conf = results_cls[0].probs.top1conf
class_name = results_cls[0].names[top1_idx]

print(f"予測: {class_name} ({top1_conf:.1%})")
display(Image.open(filename))

# %%
# 画像検出 (Detection) を試す

model_det = YOLO("yolov8n.pt")

result_det = model_det.predict(filename, conf=0.3)

display(Image.fromarray(result_det[0].plot()[..., ::-1]))

# %%
# 画像分割 (Segmentation) を試す

model_seg = YOLO("yolov8n-seg.pt")

results_seg = model_seg.predict(filename, conf=0.3)

display(Image.fromarray(results_seg[0].plot()[..., ::-1]))

# %% [markdown]
# ---
# ## 発展: 自分でモデルを学習してみよう（時間が余った人向け）

# %%
# @title 手書き数字の分類モデルを作る（クリックで展開）
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import matplotlib.pyplot as plt

digits = load_digits()

fig, axes = plt.subplots(1, 5, figsize=(10, 2))
for i, ax in enumerate(axes):
    ax.imshow(digits.images[i], cmap='gray')
    ax.set_title(f"正解: {digits.target[i]}")
    ax.axis('off')
plt.show()

X_train, X_test, y_train, y_test = train_test_split(
    digits.data, digits.target, test_size=0.2, random_state=42
)

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print(f"正解率: {accuracy_score(y_test, y_pred):.1%}")

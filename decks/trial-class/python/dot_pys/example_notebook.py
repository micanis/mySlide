# %% [markdown]
# # Jupytext サンプルノートブック
# このファイルは `jupytext --to notebook example_notebook.py` で .ipynb に変換できます

# %%
import numpy as np
import matplotlib.pyplot as plt

# %% [markdown]
# ## データの生成

# %%
x = np.linspace(0, 2 * np.pi, 100)
y = np.sin(x)

# %% [markdown]
# ## グラフの描画

# %%
plt.plot(x, y)
plt.title("Sine Wave")
plt.xlabel("x")
plt.ylabel("sin(x)")
plt.show()

# 体験授業の Python 教材

体験授業「コンピュータビジョンの3大タスクを体験する」で使う Notebook と補助スクリプトです。

| ファイル | 内容 |
| --- | --- |
| `dot_pys/experience.py` | 授業で生徒が Colab で開く Notebook の編集元 |
| `dot_pys/cnn.py` | CNN の仕組みを説明する Notebook の下書き（Notebook 未生成） |
| `dot_pys/example_notebook.py` | Jupytext の使い方を示すサンプル |
| `dot_pys/main.py` | 画像を R・G・B チャンネルに分けて保存するスクリプト（スライド用の図を作る） |
| `dot_ipynbs/*.ipynb` | `dot_pys/` から生成した Notebook（Colab で開くのはこちら） |

## Notebook の同期

`dot_pys/*.py`（Jupytext の percent 形式）が編集元です。`jupytext.toml` で
`dot_ipynbs/` と対になっています。Python ファイルを編集した後に、この
ディレクトリで次を実行します。

```sh
uv run --only-group dev jupytext --sync dot_pys/experience.py
```

`dot_pys/cnn.py` から Notebook を作る場合も同じコマンドで生成されます。

## ローカルで動かす

```sh
uv run dot_pys/main.py <画像ファイル>              # numpy と pillow だけで動きます
uv sync --group notebooks                         # Notebook の依存（TensorFlow など）を入れる
```

`experience` は Google Colab で動かす前提です（`google.colab` の
ファイルアップロードや `!pip` を使うため、ローカルではそのまま動きません）。

## Colab で開く

スライドからは次の URL でリンクしています。ファイルを移動したらスライドのリンクも
変更してください（`pnpm run check` がリンク切れを検出します）。

```text
https://colab.research.google.com/github/micanis/mySlide/blob/main/decks/trial-class/python/dot_ipynbs/experience.ipynb
```

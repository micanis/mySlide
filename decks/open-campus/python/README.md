# Colabへの変換手順

編集元は次のPythonファイルです

- `03_image_processing.py`
- `04_person_detection_pose.py`

Jupytextのpercent形式を使い同名の `.ipynb` とペアにしています

Pythonファイルを編集した後に実行します

```sh
cd python
uv run jupytext --sync 03_image_processing.py
uv run jupytext --sync 04_person_detection_pose.py
```

Notebookを作り直す場合は次を実行します

```sh
uv run jupytext --to ipynb 03_image_processing.py -o 03_image_processing.ipynb
uv run jupytext --to ipynb 04_person_detection_pose.py -o 04_person_detection_pose.ipynb
```

Google Colabで開くのは生成された `.ipynb` ファイルです
GitHubへ公開した後の直接URLは次の形になります

```text
https://colab.research.google.com/github/<owner>/<repository>/blob/<branch>/python/03_image_processing.ipynb
```

現在のディレクトリにはGitリモートがないため
Slidevでは `https://colab.research.google.com/github/` へリンクしています

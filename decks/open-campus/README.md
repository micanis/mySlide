# AIシステム科 オープンキャンパス資料

Python・画像処理・人物検出・姿勢推定を体験するSlidev資料です。

公開URL: <https://micanis.github.io/mySlide/open-campus/>

## ローカル開発

リポジトリのルートで実行します。

```sh
pnpm install
pnpm dev open-campus
```

`sections/` の各ファイルは `slides.md` から `src:` で読み込んでいます。
`components/PythonRunner.vue` はブラウザ内のPyodideでPythonを実行します。

## Python Notebook

Notebookの編集元と同期方法は [`python/README.md`](./python/README.md) を参照してください。

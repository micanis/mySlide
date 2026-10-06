# mySlide

Slidev で作成したスライドを GitHub Pages で公開するリポジトリです。

公開先: <https://micanis.github.io/mySlide/>

## スライドを追加する

`slides/` に Markdown ファイルを追加してください。たとえば
`slides/open-campus.md` は次の URL で公開されます。

<https://micanis.github.io/mySlide/open-campus/>

ファイルのフロントマターに `title` を設定すると、公開サイトの一覧ページに
そのタイトルで表示されます。

```md
---
title: オープンキャンパス
---
```

ネストしたフォルダにも対応しています。`slides/2026/spring.md` は
`/mySlide/2026/spring/` に公開されます。共有画像は `slides/public/` に置き、
スライド内では `/image.png` のように参照してください。ビルド時に各スライドの
公開 URL 配下へ自動で調整されます。

## ローカル開発

```sh
pnpm install
pnpm dev
```

別のスライドを開く場合は、次のように実行します。

```sh
pnpm exec slidev slides/open-campus.md --open
```

すべてのスライドと一覧ページを生成するには、以下を実行します。

```sh
pnpm run build
```

`main` ブランチへ push すると GitHub Actions が同じビルドを実行し、GitHub Pages
へデプロイします。GitHub の repository settings では Pages の公開元を
**GitHub Actions** に設定してください。

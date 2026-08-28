# AIシステム科 オープンキャンパス資料

Python・画像処理・人物検出・姿勢推定を体験するSlidev資料です。

公開URL: <https://ai-system-open-campus.pages.dev/>

## ローカル開発

```sh
pnpm install
pnpm dev
```

<http://localhost:3030> を開きます。

## ビルド

```sh
pnpm build
```

出力先は `dist/` です。

## Cloudflare Pagesへデプロイ

初回のみCloudflareへログインします。

```sh
pnpm exec wrangler login
```

ビルドして本番へデプロイします。

```sh
pnpm deploy
```

プロジェクト名は `ai-system-open-campus`、本番ブランチは `main` です。

## Python Notebook

Notebookの編集元と同期方法は [`python/README.md`](./python/README.md) を参照してください。

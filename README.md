# mySlide

Slidev で作成したスライドを GitHub Pages で公開するリポジトリです。
テーマはすべて [slidev-theme-micanis](https://github.com/micanis/slidev-theme-micanis)
（`variant: default`）にそろえています。

公開先: <https://micanis.github.io/mySlide/>（デッキの一覧は `decks/` から自動生成されます。
各デッキは `https://micanis.github.io/mySlide/<name>/` で公開されます）

## 構成

```
decks/<name>/
  slides.md       エントリ（ここにあるデッキだけがビルドされる）
  package.json    デッキごとの依存（pnpm workspace のパッケージ）
  components/     デッキ専用の Vue コンポーネント
  public/         デッキ専用の静的ファイル（public/images/a.webp は /images/a.webp で参照）
  style.css       デッキ専用のスタイル
  vite.config.ts  デッキ専用の Vite 設定（あれば）
  python/         授業で使う Notebook など（あれば。uv で管理）
scripts/
  build.mjs       全デッキのビルドと一覧ページ・404 ページの生成
  check.mjs       画像パス・Colab リンク・headmatter の検査
  dev.mjs         1 デッキの開発サーバー
assets/           スライドの元になった資料
```

## 開発環境

[devbox](https://www.jetify.com/devbox) で Node.js 24・pnpm 11.22.0・uv をそろえます。
`.envrc` があるので direnv を使うと自動で有効になります。CI も `.node-version` の
同じ Node.js を使います。

```sh
devbox shell
pnpm install
pnpm dev trial-class        # decks/trial-class を開く
pnpm run check              # 画像パス・リンク・headmatter・型の検査
pnpm run build              # 全デッキと一覧ページを dist/ に生成
```

PDF などへの書き出し（`pnpm --filter @myslide/<name> export`）には
`playwright-chromium` を使います。`pnpm install` 時にブラウザがダウンロードされます。

## スライドを追加する

1. `decks/<name>/` を作り、既存デッキの `package.json` をコピーして `name` を変えます。
2. `slides.md` の先頭に次を書きます。

   ```md
   ---
   theme: micanis
   themeConfig:
     variant: default
   title: スライドのタイトル
   routerMode: hash
   layout: cover
   ---
   ```

3. `pnpm install` を実行します。

`title` は一覧ページの表示名になります。GitHub Pages には SPA のフォールバックが
ないため、`routerMode: hash` は必ず指定してください（URL は `/<name>/#/3` の形になります）。
`/<name>/3` の形で開かれた場合は、生成される 404 ページが `#/3` へ転送します。
`theme`・`title`・`routerMode` は `pnpm run check` が検査します。

## デプロイ

pull request では検査とビルドだけを実行します。`main` ブランチへ push すると
GitHub Actions が同じビルドを実行し、GitHub Pages へデプロイします。

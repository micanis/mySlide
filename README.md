# mySlide

Slidev で作成したスライドを GitHub Pages で公開するリポジトリです。
テーマはすべて [slidev-theme-micanis](https://github.com/micanis/slidev-theme-micanis)
（`variant: default`）にそろえています。

公開先: <https://micanis.github.io/mySlide/>

| デッキ | 公開 URL |
| --- | --- |
| `decks/crane-recruiting` | <https://micanis.github.io/mySlide/crane-recruiting/> |
| `decks/open-campus` | <https://micanis.github.io/mySlide/open-campus/> |
| `decks/trial-class` | <https://micanis.github.io/mySlide/trial-class/> |

## 構成

```
decks/<name>/
  slides.md       エントリ（ここにあるデッキだけがビルドされる）
  package.json    デッキごとの依存（pnpm workspace のパッケージ）
  components/     デッキ専用の Vue コンポーネント
  public/         デッキ専用の静的ファイル（/image.png で参照）
  style.css       デッキ専用のスタイル
  python/         授業で使う Notebook など（あれば）
scripts/build.mjs 全デッキのビルドと一覧ページ・404 ページの生成
```

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

## ローカル開発

```sh
pnpm install
pnpm dev trial-class        # decks/trial-class を開く
pnpm run build              # 全デッキと一覧ページを dist/ に生成
```

`main` ブランチへ push すると GitHub Actions が同じビルドを実行し、GitHub Pages
へデプロイします。

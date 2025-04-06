# React アプリ開発環境構築手順（Vite 使用）

## 0.前提条件

- Node.js（バージョン 14 以上）と npm がインストールされていること

## 1.プロジェクトを作成
```bash
npm create vite@latest
```
実行後に下記の入力が必要
- プロジェクト名
- フレームワークの選択
- Typescriptの使用有無
- その他設定

## 2.各種ライブラリを必要に応じてインストール
- ルーティング(react-router-domまたはプロジェクトをNextjsで作成することも検討)
- 状態管理ライブラリ(Redux,Zustandなど)
- CSSフレームワーク(Tailwind CSS,Sass,tyled Componentsなど)
- 非同期通信(axios)
- 開発ツール(ESLint,prettier)
  
## 3.要件に応じて導入を検討する項目
- UIライブラリ(MUI,Bootstrapなど)
- アニメーションライブラリ
- テストツール
- デバッグツール
- SEO(react-helmet)
- SSR,SSG(viteではなくNextjsでの実装が必要)
- BaaS(Supabase,Firebase)






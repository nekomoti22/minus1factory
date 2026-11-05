# Product キャッチ

エンジニア向けの、制作物をシェアしたり、一緒に作る仲間やイベントを探したりできるSNSです。

2024年8月開催の関西ビギナーズハッカソンにて制作しました

## 主な機能

- **GitHub ログイン**：GitHub アカウントでログインできます（Supabase Auth）
- **投稿**：タイトル・本文・画像（最大4枚）・リポジトリURLをつけて投稿できます
- **カテゴリ分け**：投稿は3つのカテゴリに分かれていて、タブで切り替えて見られます
  - 制作物：作ったプロダクトの紹介
  - 仲間募集：一緒に開発するメンバーの募集
  - イベント：ハッカソンや勉強会などの告知
- **投稿一覧**：投稿は誰でも見られます。投稿できるのはログインしたユーザーだけです
- **シェア**：投稿をSNSでシェアできます

## 技術スタック

| 分類 | 使用技術 |
|---|---|
| フロントエンド | React 18 / React Router / MUI（Material UI） |
| バックエンド | Supabase（認証・データベース・ストレージ） |
| ホスティング | Vercel |
| その他 | react-share / react-icons |

## ディレクトリ構成

```
src/
├── App.js            # ルーティング
├── components/       # 画面・UIコンポーネント
│   ├── Login.js      # ログイン画面（/）
│   ├── Home.js       # 制作物一覧（/home）
│   ├── Member.js     # 仲間募集一覧（/member）
│   ├── Event.js      # イベント一覧（/event）
│   ├── PostCreate.js # 投稿作成（/create）
│   └── PostCard.js   # 投稿カード
├── ecosystem/        # Supabase とのデータのやりとり
└── lib/
    └── supabase-client.ts  # Supabase クライアント
```

## ローカルでの起動方法

```bash
git clone https://github.com/nekomoti22/minus1factory.git
cd minus1factory
npm install
npm start
```

http://localhost:3000 で開きます。

> [!NOTE]
> ログイン後のリダイレクト先は本番URL（`https://productcatch.vercel.app/home`）に固定されています。
> ローカルでログインを試すときは、`src/components/Login.js` の `redirectTo` を書き換えてください。

## チーム

<!-- イベント名・開発期間などがあれば追記 -->

| メンバー | GitHub |
|---|---|
| | [@nekomoti22](https://github.com/nekomoti22) |
| | [@so-ma0723](https://github.com/so-ma0723) |
| | [@yama-shu](https://github.com/yama-shu) |

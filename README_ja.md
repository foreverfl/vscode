# VS Code 翻訳

## 他の言語で読む

- [English](/README.md)
- [한국어](/README_ko.md)

このリポジトリには、[Docusaurus](https://docusaurus.io/) を使用して構築された Visual Studio Code の翻訳ファイルが含まれています。  
ユーザーは異なる言語で翻訳されたドキュメントを閲覧できます。

## 実行方法

次のコマンドを使用して、ローカルでドキュメントサイトを実行できます。  
デフォルトでは、サイトは韓国語で提供されます。

```sh
npm run start
npm run start -- --locale ko
npm run start -- --locale ja
```

`ko` を希望する言語コードに変更してプレビューできます。  
(例: `ja` は日本語, `en` は英語)

## 📂 プロジェクト構造

```plaintext
├── i18n/            # 翻訳された Markdown ファイル
│   ├── ko/          # 韓国語翻訳
│   ├── ja/          # 日本語翻訳
│   │   ├── docusaurus-plugin-content-docs/
│   │   ├── current/ # 翻訳済みドキュメント (Markdown)
│   │   ├── versioned_docs/
├── src/             # カスタム React コンポーネントとテーマのオーバーライド
├── docs/            # デフォルトの英語ドキュメント (該当する場合)
├── docusaurus.config.js  # Docusaurus サイト設定
└── package.json     # 依存関係とスクリプト
```

## ✨ 翻訳の仕組み

- すべての翻訳ファイルは `i18n/` ディレクトリに保存されています。
- 各言語は `ko`, `ja` などのフォルダーで管理されています。
- `_original.md` で終わるファイルはドラフト翻訳であり、追加のレビューが必要です。
- 翻訳管理は [カスタム翻訳 CLI](https://github.com/foreverfl/doc-translation) を使用して効率化されています。

## 🛠 貢献方法

貢献したい場合:

1. このリポジトリをフォークしてください。
2. 新しいブランチを作成してください。
3. `i18n/{言語}/docusaurus-plugin-content-docs/current/` 内の Markdown ファイルを更新してください。
4. `git rebase` を使用して最新の状態に更新してください。
5. Pull Request を送ってください。

詳細については、[貢献ガイド](CONTRIBUTING_ja.md) をご覧ください。

## 📜 ライセンス

このプロジェクトは [MIT ライセンス](LICENSE) に基づいています。

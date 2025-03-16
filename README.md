# VS Code Localization

## Available in other languages

- [한국어](/README_ko.md)
- [日本語](/README_ja.md)

This repository contains the localization files for Visual Studio Code, built using [Docusaurus](https://docusaurus.io/). It allows users to view translated documentation in different languages.

## How to Run

To start the documentation site locally, use the following command. By default, the site will be served in Korean now:

```sh
npm run start
npm run start -- --locale ko
npm run start -- --locale ja
```

Replace `ko` with the language code you want to preview (e.g., `ja` for Japanese, `en` for English).

## 📂 Project Structure

```plaintext
├── i18n/            # Contains all translated markdown files
│   ├── ko/          # Korean translations
│   ├── ja/          # Japanese translations
│   │   ├── docusaurus-plugin-content-docs/
│   │   ├── current/ # Translated documents in Markdown
│   │   ├── versioned_docs/
├── src/             # Custom React components and theme overrides
├── docs/            # Default English documentation (if applicable)
├── docusaurus.config.js  # Docusaurus site configuration
└── package.json     # Dependencies and scripts
```

## ✨ How Translations Work

- All translations are stored in the `i18n/` directory.
- Each language has its own folder (`ko`, `ja`, etc.).
- If a markdown file ends with `_original.md`, it means the file is only a draft translation and needs review.
- The translations are managed using a [custom translation CLI](https://github.com/foreverfl/doc-translation) for efficiency.

## 🛠 Contributing

If you want to contribute:

1. Fork this repository.
2. Create a new branch.
3. Update markdown files in `i18n/{language}/docusaurus-plugin-content-docs/current/`.
4. Ensure your branch is up-to-date using `git rebase`.
5. Submit a Pull Request.

For more details, check the [Contributing Guide](CONTRIBUTING.md).

## 📜 License

This project follows the [MIT License](LICENSE).

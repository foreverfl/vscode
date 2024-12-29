import { config as loadEnv } from "dotenv";
import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
loadEnv();

const config: Config = {
  title: "Visual Studio Code",
  tagline:
    "VS Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",
  favicon: "img/vscode.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mogumogu", // Usually your GitHub org/user name.
  projectName: "vscode", // Usually your repo name.

  onBrokenLinks: "ignore",
  onBrokenAnchors: "ignore",
  onBrokenMarkdownLinks: "ignore",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "ja"],
    localeConfigs: {
      ko: {
        label: "한국어",
      },
      ja: {
        label: "日本語",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/vscode.png",
    navbar: {
      title: "Visual Studio Code",
      logo: {
        alt: "Visual Studio Code Logo",
        src: "img/vscode.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "문서",
        },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "API",
        },
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              type: "html",
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: "https://github.com/foreverfl/vscode",
              label: "번역을 도와주세요!",
            },
          ],
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/foreverfl/vscode",
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["java", "javascript", "typescript", "bash"],
    },
    algolia: {
      appId: process.env.ALGOLIA_APP_ID || "",
      apiKey: process.env.ALGOLIA_API_KEY || "",
      indexName: process.env.ALGOLIA_INDEX_NAME || "",
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

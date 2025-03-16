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
  url: "https://vscode.mogumogu.dev",
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
    locales: ["ko"],
    path: "i18n",
    localeConfigs: {
      ko: {
        label: "한국어",
        path: "ko",
      }
    },
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "default",
        path: "docs",
        routeBasePath: "docs",
        sidebarPath: require.resolve("./sidebars.ts"),
        editLocalizedFiles: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api",
        path: "api",
        routeBasePath: "api",
        sidebarPath: require.resolve("./sidebarsApi.ts"),
        editLocalizedFiles: true, 
      },
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
          docsPluginId: "default",
          position: "left",
          label: "문서",
        },
        {
          type: "docSidebar",
          sidebarId: "apiSidebar",
          docsPluginId: "api",
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
              label: "Help us improve this page",
            },
          ],
        },
      ],
    },

    sidebar: {
      hideable: true, 
      autoCollapseCategories: true, 
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "문서 모음",
              href: "httsp://docs.mogumogu.dev",
            },
            {
              label: "Discord",
              href: "https://discord.gg/KCSKP69f",
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
  } satisfies Preset.ThemeConfig,
};

export default config;

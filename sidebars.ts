import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: "category",
      label: "설정",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "setup/setup-overview",
          label: "개요",
        },
        {
          type: "doc",
          id: "setup/linux",
          label: "Linux",
        },
        {
          type: "doc",
          id: "setup/mac",
          label: "macOS",
        },
        {
          type: "doc",
          id: "setup/windows",
          label: "Windows",
        },
        {
          type: "doc",
          id: "setup/raspberry-pi",
          label: "Raspberry Pi",
        },
        {
          type: "doc",
          id: "setup/network",
          label: "네트워크",
        },
        {
          type: "doc",
          id: "setup/additional-components",
          label: "추가 구성 요소",
        },
        {
          type: "doc",
          id: "setup/enterprise",
          label: "엔터프라이즈",
        },
        {
          type: "doc",
          id: "setup/uninstall",
          label: "제거",
        },
      ],
    },
  ],
};

export default sidebars;

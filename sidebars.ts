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
    // 설정
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
    // 시작하기
    {
      type: "category",
      label: "시작하기",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "getstarted/getting-started",
          label: "튜토리얼",
        },
        {
          type: "doc",
          id: "getstarted/introvideos",
          label: "소개 동영상",
        },
        {
          type: "doc",
          id: "getstarted/tips-and-tricks",
          label: "팁과 요령",
        },
        {
          type: "doc",
          id: "getstarted/userinterface",
          label: "사용자 인터페이스",
        },
        {
          type: "doc",
          id: "getstarted/themes",
          label: "테마",
        },
        {
          type: "doc",
          id: "getstarted/settings",
          label: "설정",
        },
        {
          type: "doc",
          id: "getstarted/keybindings",
          label: "키 바인딩",
        },
        {
          type: "doc",
          id: "getstarted/locales",
          label: "표시 언어",
        },
        {
          type: "doc",
          id: "getstarted/telemetry",
          label: "사용 데이터 수집",
        },
        {
          type: "doc",
          id: "getstarted/educators-and-students",
          label: "교육자 및 학생",
        },
      ],
    },
    {
      type: "category",
      label: "Java",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "java/java-tutorial",
          label: "시작하기",
        },
        {
          type: "doc",
          id: "java/java-editing",
          label: "탐색 및 편집",
        },
        {
          type: "doc",
          id: "java/java-refactoring",
          label: "리팩토링",
        },
        {
          type: "doc",
          id: "java/java-linting",
          label: "포맷팅 및 린팅",
        },
        {
          type: "doc",
          id: "java/java-project",
          label: "프로젝트 관리",
        },
        {
          type: "doc",
          id: "java/java-build",
          label: "빌드 도구",
        },
        {
          type: "doc",
          id: "java/java-debugging",
          label: "실행 및 디버그",
        },
        {
          type: "doc",
          id: "java/java-testing",
          label: "테스트",
        },
        {
          type: "doc",
          id: "java/java-spring-boot",
          label: "Spring Boot",
        },
        {
          type: "doc",
          id: "java/java-tomcat-jetty",
          label: "애플리케이션 서버",
        },
        {
          type: "doc",
          id: "java/java-webapp",
          label: "Java 앱 배포",
        },
        {
          type: "doc",
          id: "java/java-gui",
          label: "GUI 애플리케이션",
        },
        {
          type: "doc",
          id: "java/extensions",
          label: "확장 프로그램",
        },
        {
          type: "doc",
          id: "java/java-faq",
          label: "FAQ",
        },
      ],
    },
  ],
};

export default sidebars;

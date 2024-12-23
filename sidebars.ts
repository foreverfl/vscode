import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { SidebarItemConfig } from "@docusaurus/plugin-content-docs/src/sidebars/types.js";

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
    // 유저 가이드
    {
      type: "category",
      label: "유저 가이드",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "editor/codebasics",
          label: "편집 기본사항",
        },
        {
          type: "doc",
          id: "editor/extension-marketplace",
          label: "확장 마켓플레이스",
        },
        {
          type: "doc",
          id: "editor/intellisense",
          label: "IntelliSense",
        },
        {
          type: "doc",
          id: "editor/editingevolved",
          label: "코드 탐색",
        },
        {
          type: "doc",
          id: "editor/refactoring",
          label: "리팩토링",
        },
        {
          type: "doc",
          id: "editor/debugging",
          label: "디버깅",
        },
        {
          type: "doc",
          id: "editor/testing",
          label: "테스트",
        },
        {
          type: "doc",
          id: "editor/vscode-web",
          label: "웹용 VS Code",
        },
        {
          type: "doc",
          id: "editor/tasks",
          label: "작업",
        },
        {
          type: "doc",
          id: "editor/profiles",
          label: "프로필",
        },
        {
          type: "doc",
          id: "editor/settings-sync",
          label: "설정 동기화",
        },
        {
          type: "doc",
          id: "editor/userdefinedsnippets",
          label: "스니펫",
        },
        {
          type: "doc",
          id: "editor/emmet",
          label: "Emmet 사용",
        },
        {
          type: "doc",
          id: "editor/command-line",
          label: "명령줄 인터페이스",
        },
        {
          type: "doc",
          id: "editor/workspaces",
          label: "작업공간",
        },
        {
          type: "doc",
          id: "editor/workspace-trust",
          label: "작업공간 신뢰 설정",
        },
        {
          type: "doc",
          id: "editor/multi-root-workspaces",
          label: "다중 루트 작업공간",
        },
        {
          type: "doc",
          id: "editor/accessibility",
          label: "접근성",
        },
        {
          type: "doc",
          id: "editor/voice",
          label: "음성 상호작용",
        },
        {
          type: "doc",
          id: "editor/custom-layout",
          label: "사용자 지정 레이아웃",
        },
        {
          type: "doc",
          id: "editor/port-forwarding",
          label: "포트 포워딩",
        },
      ],
    },
    {
      type: "category",
      label: "Git",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "java/java-tutorial",
          label: "시작하기",
        },
      ],
    },
    {
      type: "category",
      label: "터미널",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "java/java-tutorial",
          label: "시작하기",
        },
      ],
    },
    {
      type: "category",
      label: "GitHub Copilot",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "java/java-tutorial",
          label: "시작하기",
        },
      ],
    },
    {
      type: "category",
      label: "프로그래밍 언어",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "java/java-tutorial",
          label: "시작하기",
        },
      ],
    },
    {
      type: "category",
      label: "Node.js / JavaScript",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "java/java-tutorial",
          label: "시작하기",
        },
      ],
    },
    {
      type: "category",
      label: "TypeScript",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "java/java-tutorial",
          label: "시작하기",
        },
      ],
    },
    {
      type: "category",
      label: "Python",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "java/java-tutorial",
          label: "시작하기",
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
          id: "java/java-on-azure",
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
    {
      type: "category",
      label: "C++",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "java/java-tutorial",
          label: "시작하기",
        },
      ],
    },
    {
      type: "category",
      label: "C#",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "java/java-tutorial",
          label: "시작하기",
        },
      ],
    },
    {
      type: "category",
      label: "DOCKER",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "java/java-tutorial",
          label: "시작하기",
        },
      ],
    },
    {
      type: "category",
      label: "데이터 과학",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "java/java-tutorial",
          label: "시작하기",
        },
      ],
    },
    {
      type: "category",
      label: "AZURE",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "java/java-tutorial",
          label: "시작하기",
        },
      ],
    },
    {
      type: "category",
      label: "원격 개발",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "java/java-tutorial",
          label: "시작하기",
        },
      ],
    },
    {
      type: "category",
      label: "Dev 컨테이너",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "java/java-tutorial",
          label: "시작하기",
        },
      ],
    },
  ],
};

export default sidebars;

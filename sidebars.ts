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
    // 소스 관리 (Git)
    {
      type: "category",
      label: "Git",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "sourcecontrol/overview",
          label: "개요",
        },
        {
          type: "doc",
          id: "sourcecontrol/intro-to-git",
          label: "Git 소개",
        },
        {
          type: "doc",
          id: "sourcecontrol/github",
          label: "GitHub에서 협업하기",
        },
        {
          type: "doc",
          id: "sourcecontrol/faq",
          label: "FAQ",
        },
      ],
    },
    // 터미널
    {
      type: "category",
      label: "터미널",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "terminal/getting-started",
          label: "시작하기",
        },
        {
          type: "doc",
          id: "terminal/basics",
          label: "터미널 기본 사용법",
        },
        {
          type: "doc",
          id: "terminal/profiles",
          label: "터미널 프로필",
        },
        {
          type: "doc",
          id: "terminal/shell-integration",
          label: "쉘 통합",
        },
        {
          type: "doc",
          id: "terminal/appearance",
          label: "터미널 모양 설정",
        },
        {
          type: "doc",
          id: "terminal/advanced",
          label: "고급 설정",
        },
      ],
    },
    // GitHub Copilot
    {
      type: "category",
      label: "GitHub Copilot",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "copilot/overview",
          label: "개요",
        },
        {
          type: "doc",
          id: "copilot/copilot-vscode-features",
          label: "코파일럿 요약",
        },
        {
          type: "doc",
          id: "copilot/setup",
          label: "설정",
        },
        {
          type: "doc",
          id: "copilot/getting-started",
          label: "빠른 시작",
        },
        {
          type: "doc",
          id: "copilot/ai-powered-suggestions",
          label: "코드 완성",
        },
        {
          type: "doc",
          id: "copilot/copilot-chat",
          label: "코파일럿 채팅",
        },
        {
          type: "doc",
          id: "copilot/getting-started-chat",
          label: "코파일럿 채팅 튜토리얼",
        },
        {
          type: "doc",
          id: "copilot/copilot-edits",
          label: "코파일럿 편집 기능",
        },
        {
          type: "doc",
          id: "copilot/prompt-crafting",
          label: "모범 사례",
        },
        {
          type: "doc",
          id: "copilot/workspace-context",
          label: "워크스페이스 컨텍스트",
        },
        {
          type: "doc",
          id: "copilot/copilot-customization",
          label: "코파일럿 사용자 정의",
        },
        {
          type: "doc",
          id: "copilot/copilot-extensibility-overview",
          label: "코파일럿 확장성",
        },
        {
          type: "doc",
          id: "copilot/copilot-settings",
          label: "설정 참조",
        },
        {
          type: "doc",
          id: "copilot/faq",
          label: "FAQ",
        },
      ],
    },
    // 프로그래밍 언어
    {
      type: "category",
      label: "프로그래밍 언어",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "languages/javascript",
          label: "JavaScript",
        },
        {
          type: "doc",
          id: "languages/json",
          label: "JSON",
        },
        {
          type: "doc",
          id: "languages/html",
          label: "HTML",
        },
        {
          type: "doc",
          id: "languages/css",
          label: "CSS, SCSS 및 Less",
        },
        {
          type: "doc",
          id: "languages/typescript",
          label: "TypeScript",
        },
        {
          type: "doc",
          id: "languages/markdown",
          label: "Markdown",
        },
        {
          type: "doc",
          id: "languages/powershell",
          label: "PowerShell",
        },
        {
          type: "doc",
          id: "languages/cpp",
          label: "C++",
        },
        {
          type: "doc",
          id: "languages/java",
          label: "Java",
        },
        {
          type: "doc",
          id: "languages/php",
          label: "PHP",
        },
        {
          type: "doc",
          id: "languages/python",
          label: "Python",
        },
        {
          type: "doc",
          id: "languages/julia",
          label: "Julia",
        },
        {
          type: "doc",
          id: "languages/r",
          label: "R",
        },
        {
          type: "doc",
          id: "languages/ruby",
          label: "Ruby",
        },
        {
          type: "doc",
          id: "languages/rust",
          label: "Rust",
        },
        {
          type: "doc",
          id: "languages/go",
          label: "Go",
        },
        {
          type: "doc",
          id: "languages/tsql",
          label: "T-SQL",
        },
        {
          type: "doc",
          id: "languages/csharp",
          label: "C#",
        },
        {
          type: "doc",
          id: "languages/dotnet",
          label: ".NET",
        },
        {
          type: "doc",
          id: "languages/polyglot",
          label: "다중 언어 지원",
        },
      ],
    },
    // Node.js / JavaScript
    {
      type: "category",
      label: "Node.js / JavaScript",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "nodejs/working-with-javascript",
          label: "JavaScript 작업하기",
        },
        {
          type: "doc",
          id: "nodejs/nodejs-tutorial",
          label: "Node.js 튜토리얼",
        },
        {
          type: "doc",
          id: "nodejs/nodejs-debugging",
          label: "Node.js 디버깅",
        },
        {
          type: "doc",
          id: "nodejs/nodejs-deployment",
          label: "Node.js 애플리케이션 배포",
        },
        {
          type: "doc",
          id: "nodejs/browser-debugging",
          label: "브라우저 디버깅",
        },
        {
          type: "doc",
          id: "nodejs/angular-tutorial",
          label: "Angular 튜토리얼",
        },
        {
          type: "doc",
          id: "nodejs/reactjs-tutorial",
          label: "React 튜토리얼",
        },
        {
          type: "doc",
          id: "nodejs/vuejs-tutorial",
          label: "Vue 튜토리얼",
        },
        {
          type: "doc",
          id: "nodejs/debugging-recipes",
          label: "디버깅 레시피",
        },
        {
          type: "doc",
          id: "nodejs/profiling",
          label: "성능 프로파일링",
        },
        {
          type: "doc",
          id: "nodejs/extensions",
          label: "확장 프로그램",
        },
      ],
    },
    // TypeScript
    {
      type: "category",
      label: "TypeScript",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "typescript/typescript-tutorial",
          label: "튜토리얼",
        },
        {
          type: "doc",
          id: "typescript/typescript-compiling",
          label: "컴파일",
        },
        {
          type: "doc",
          id: "typescript/typescript-editing",
          label: "편집",
        },
        {
          type: "doc",
          id: "typescript/typescript-refactoring",
          label: "리팩토링",
        },
        {
          type: "doc",
          id: "typescript/typescript-debugging",
          label: "디버깅",
        },
      ],
    },
    // Python
    {
      type: "category",
      label: "Python",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "python/python-quick-start",
          label: "빠른 시작",
        },
        {
          type: "doc",
          id: "python/python-tutorial",
          label: "튜토리얼",
        },
        {
          type: "doc",
          id: "python/run",
          label: "Python 코드 실행",
        },
        {
          type: "doc",
          id: "python/editing",
          label: "코드 편집",
        },
        {
          type: "doc",
          id: "python/linting",
          label: "린팅",
        },
        {
          type: "doc",
          id: "python/formatting",
          label: "포맷팅",
        },
        {
          type: "doc",
          id: "python/debugging",
          label: "디버깅",
        },
        {
          type: "doc",
          id: "python/environments",
          label: "환경 설정",
        },
        {
          type: "doc",
          id: "python/testing",
          label: "테스트",
        },
        {
          type: "doc",
          id: "python/jupyter-support-py",
          label: "Python 인터랙티브",
        },
        {
          type: "doc",
          id: "python/tutorial-django",
          label: "Django 튜토리얼",
        },
        {
          type: "doc",
          id: "python/tutorial-fastapi",
          label: "FastAPI 튜토리얼",
        },
        {
          type: "doc",
          id: "python/tutorial-flask",
          label: "Flask 튜토리얼",
        },
        {
          type: "doc",
          id: "python/tutorial-create-containers",
          label: "컨테이너 생성",
        },
        {
          type: "doc",
          id: "python/python-on-azure",
          label: "Python 애플리케이션 배포",
        },
        {
          type: "doc",
          id: "python/python-web",
          label: "웹에서 Python 사용",
        },
        {
          type: "doc",
          id: "python/settings-reference",
          label: "설정 참조",
        },
      ],
    },
    // Java
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
    // C++
    {
      type: "category",
      label: "C++",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "cpp/introvideos-cpp",
          label: "소개 동영상",
        },
        {
          type: "doc",
          id: "cpp/config-linux",
          label: "Linux에서 GCC 사용",
        },
        {
          type: "doc",
          id: "cpp/config-mingw",
          label: "Windows에서 GCC 사용",
        },
        {
          type: "doc",
          id: "cpp/config-wsl",
          label: "Windows Subsystem for Linux에서 GCC 사용",
        },
        {
          type: "doc",
          id: "cpp/config-clang-mac",
          label: "macOS에서 Clang 사용",
        },
        {
          type: "doc",
          id: "cpp/config-msvc",
          label: "Windows에서 Microsoft C++ 사용",
        },
        {
          type: "doc",
          id: "cpp/build-with-cmake",
          label: "CMake로 빌드",
        },
        {
          type: "doc",
          id: "cpp/cmake-linux",
          label: "Linux에서 CMake 도구 사용",
        },
        {
          type: "doc",
          id: "cpp/cmake-quickstart",
          label: "CMake 빠른 시작",
        },
        {
          type: "doc",
          id: "cpp/cpp-ide",
          label: "편집 및 탐색",
        },
        {
          type: "doc",
          id: "cpp/cpp-debug",
          label: "디버깅",
        },
        {
          type: "doc",
          id: "cpp/cpp-refactoring",
          label: "리팩토링",
        },
        {
          type: "doc",
          id: "cpp/launch-json-reference",
          label: "디버깅 구성",
        },
        {
          type: "doc",
          id: "cpp/customize-default-settings-cpp",
          label: "설정",
        },
        {
          type: "doc",
          id: "cpp/configure-intellisense",
          label: "IntelliSense 구성",
        },
        {
          type: "doc",
          id: "cpp/configure-intellisense-crosscompilation",
          label: "크로스 컴파일용 IntelliSense 구성",
        },
        {
          type: "doc",
          id: "cpp/faq-cpp",
          label: "FAQ",
        },
      ],
    },
    // C#
    {
      type: "category",
      label: "C#",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "csharp/introvideos-csharp",
          label: "소개 비디오",
        },
        {
          type: "doc",
          id: "csharp/get-started",
          label: "시작하기",
        },
        {
          type: "doc",
          id: "csharp/navigate-edit",
          label: "탐색 및 편집",
        },
        {
          type: "doc",
          id: "csharp/intellicode",
          label: "IntelliCode",
        },
        {
          type: "doc",
          id: "csharp/refactoring",
          label: "리팩토링",
        },
        {
          type: "doc",
          id: "csharp/formatting-linting",
          label: "포매팅 및 린팅",
        },
        {
          type: "doc",
          id: "csharp/project-management",
          label: "프로젝트 관리",
        },
        {
          type: "doc",
          id: "csharp/build-tools",
          label: "빌드 도구",
        },
        {
          type: "doc",
          id: "csharp/package-management",
          label: "패키지 관리",
        },
        {
          type: "doc",
          id: "csharp/debugging",
          label: "실행 및 디버그",
        },
        {
          type: "doc",
          id: "csharp/testing",
          label: "테스트",
        },
        {
          type: "doc",
          id: "csharp/cs-dev-kit-faq",
          label: "FAQ",
        },
      ],
    },
    // Docker
    {
      type: "category",
      label: "DOCKER",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "containers/overview",
          label: "개요",
        },
        {
          type: "doc",
          id: "containers/debug-node",
          label: "Node.js",
        },
        {
          type: "doc",
          id: "containers/debug-python",
          label: "Python",
        },
        {
          type: "doc",
          id: "containers/quickstart-aspnet-core",
          label: "ASP.NET Core",
        },
        {
          type: "doc",
          id: "containers/debug-common",
          label: "디버그",
        },
        {
          type: "doc",
          id: "containers/docker-compose",
          label: "Docker Compose",
        },
        {
          type: "doc",
          id: "containers/quickstart-container-registries",
          label: "레지스트리",
        },
        {
          type: "doc",
          id: "containers/app-service",
          label: "Azure에 배포",
        },
        {
          type: "doc",
          id: "containers/choosing-dev-environment",
          label: "개발 환경 선택",
        },
        {
          type: "doc",
          id: "containers/reference",
          label: "사용자 정의",
        },
        {
          type: "doc",
          id: "containers/bridge-to-kubernetes",
          label: "Kubernetes로 개발",
        },
        {
          type: "doc",
          id: "containers/troubleshooting",
          label: "팁과 요령",
        },
      ],
    },
    // 데이터 과학
    {
      type: "category",
      label: "데이터 과학",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "datascience/overview",
          label: "개요",
        },
        {
          type: "doc",
          id: "datascience/jupyter-notebooks",
          label: "Jupyter 노트북",
        },
        {
          type: "doc",
          id: "datascience/data-science-tutorial",
          label: "데이터 과학 튜토리얼",
        },
        {
          type: "doc",
          id: "datascience/python-interactive",
          label: "Python 인터랙티브",
        },
        {
          type: "doc",
          id: "datascience/data-wrangler-quick-start",
          label: "Data Wrangler 빠른 시작",
        },
        {
          type: "doc",
          id: "datascience/data-wrangler",
          label: "Data Wrangler",
        },
        {
          type: "doc",
          id: "datascience/pytorch-support",
          label: "PyTorch 지원",
        },
        {
          type: "doc",
          id: "datascience/azure-machine-learning",
          label: "Azure 머신 러닝",
        },
        {
          type: "doc",
          id: "datascience/jupyter-kernel-management",
          label: "Jupyter 커널 관리",
        },
        {
          type: "doc",
          id: "datascience/notebooks-web",
          label: "웹에서의 Jupyter 노트북",
        },
      ],
    },
    // Azure
    {
      type: "category",
      label: "AZURE",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "azure/overview",
          label: "개요",
        },
        {
          type: "doc",
          id: "azure/gettingstarted",
          label: "시작하기",
        },
        {
          type: "doc",
          id: "azure/deployment",
          label: "배포",
        },
        {
          type: "doc",
          id: "azure/docker",
          label: "Docker",
        },
        {
          type: "doc",
          id: "azure/kubernetes",
          label: "Azure Kubernetes Service",
        },
        {
          type: "doc",
          id: "azure/kubernetes",
          label: "Kubernetes",
        },
        {
          type: "doc",
          id: "azure/mongodb",
          label: "MongoDB",
        },
        {
          type: "doc",
          id: "azure/remote-debugging",
          label: "Node.js 원격 디버깅",
        },
      ],
    },
    // 원격 개발
    {
      type: "category",
      label: "원격 개발",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "remote/remote-overview",
          label: "개요",
        },
        {
          type: "doc",
          id: "remote/ssh",
          label: "SSH",
        },
        {
          type: "doc",
          id: "remote/dev-containers",
          label: "개발 컨테이너",
        },
        {
          type: "doc",
          id: "remote/wsl",
          label: "Windows Subsystem for Linux",
        },
        {
          type: "doc",
          id: "remote/codespaces",
          label: "GitHub Codespaces",
        },
        {
          type: "doc",
          id: "remote/vscode-server",
          label: "VS Code 서버",
        },
        {
          type: "doc",
          id: "remote/tunnels",
          label: "터널",
        },
        {
          type: "doc",
          id: "remote/ssh-tutorial",
          label: "SSH 튜토리얼",
        },
        {
          type: "doc",
          id: "remote/wsl-tutorial",
          label: "WSL 튜토리얼",
        },
        {
          type: "doc",
          id: "remote/troubleshooting",
          label: "팁과 트릭",
        },
        {
          type: "doc",
          id: "remote/faq",
          label: "FAQ",
        },
      ],
    },
    // Dev 컨테이너
    {
      type: "category",
      label: "Dev 컨테이너",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "devcontainers/containers",
          label: "개요",
        },
        {
          type: "doc",
          id: "devcontainers/tutorial",
          label: "튜토리얼",
        },
        {
          type: "doc",
          id: "devcontainers/attach-container",
          label: "컨테이너 연결",
        },
        {
          type: "doc",
          id: "devcontainers/create-dev-container",
          label: "Dev 컨테이너 생성",
        },
        {
          type: "doc",
          id: "devcontainers/containers-advanced",
          label: "고급 컨테이너",
        },
        {
          type: "doc",
          id: "devcontainers/devcontainerjson-reference",
          label: "`devcontainer.json`",
        },
        {
          type: "doc",
          id: "devcontainers/devcontainer-cli",
          label: "Dev 컨테이너 CLI",
        },
        {
          type: "doc",
          id: "devcontainers/tips-and-tricks",
          label: "팁과 트릭",
        },
        {
          type: "doc",
          id: "devcontainers/faq",
          label: "FAQ",
        },
      ],
    },
  ],
};

export default sidebars;

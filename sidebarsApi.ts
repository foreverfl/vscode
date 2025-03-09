const sidebars = {
  apiSidebar: [
    {
      type: "doc",
      id: "index", 
      label: "개요",
    },
    {
      type: "category",
      label: "시작하기",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "get-started/your-first-extension",
          label: "첫 번째 확장 프로그램 만들기",
        },
        {
          type: "doc",
          id: "get-started/extension-anatomy",
          label: "확장 프로그램 구조",
        },
        {
          type: "doc",
          id: "get-started/wrapping-up",
          label: "마무리",
        },
      ],
    },
    {
      type: "category",
      label: "확장 프로그램 기능",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "extension-capabilities/overview",
          label: "개요",
        },
        {
          type: "doc",
          id: "extension-capabilities/common-capabilities",
          label: "공통 기능",
        },
        {
          type: "doc",
          id: "extension-capabilities/theming",
          label: "테마 구성",
        },
        {
          type: "doc",
          id: "extension-capabilities/extending-workbench",
          label: "개발 환경 확장",
        },
      ],
    },
    {
      type: "category",
      label: "확장 프로그램 가이드",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "extension-guides/overview",
          label: "개요",
        },
        {
          type: "doc",
          id: "extension-guides/command",
          label: "명령",
        },
        {
          type: "doc",
          id: "extension-guides/color-theme",
          label: "색상 테마",
        },
        {
          type: "doc",
          id: "extension-guides/file-icon-theme",
          label: "파일 아이콘 테마",
        },
        {
          type: "doc",
          id: "extension-guides/product-icon-theme",
          label: "제품 아이콘 테마",
        },
        {
          type: "doc",
          id: "extension-guides/chat",
          label: "채팅",
        },
        {
          type: "doc",
          id: "extension-guides/chat-tutorial",
          label: "채팅 튜토리얼",
        },
        {
          type: "doc",
          id: "extension-guides/language-model",
          label: "언어 모델",
        },
        {
          type: "doc",
          id: "extension-guides/language-model-tutorial",
          label: "언어 모델 튜토리얼",
        },
        {
          type: "doc",
          id: "extension-guides/tools",
          label: "언어 모델 도구",
        },
        {
          type: "doc",
          id: "extension-guides/prompt-tsx",
          label: "프롬프트 TSX",
        },
        {
          type: "doc",
          id: "extension-guides/webview",
          label: "웹뷰",
        },
        {
          type: "doc",
          id: "extension-guides/notebook",
          label: "노트북",
        },
        {
          type: "doc",
          id: "extension-guides/custom-editors",
          label: "사용자 지정 편집기",
        },
        {
          type: "doc",
          id: "extension-guides/virtual-documents",
          label: "가상 문서",
        },
        {
          type: "doc",
          id: "extension-guides/virtual-workspaces",
          label: "가상 작업 공간",
        },
        {
          type: "doc",
          id: "extension-guides/web-extensions",
          label: "웹 확장",
        },
        {
          type: "doc",
          id: "extension-guides/workspace-trust",
          label: "작업 공간 신뢰",
        },
        {
          type: "doc",
          id: "extension-guides/task-provider",
          label: "작업 제공자",
        },
        {
          type: "doc",
          id: "extension-guides/scm-provider",
          label: "소스 제어",
        },
        {
          type: "doc",
          id: "extension-guides/debugger-extension",
          label: "디버거 확장",
        },
        {
          type: "doc",
          id: "extension-guides/markdown-extension",
          label: "마크다운 확장",
        },
        {
          type: "doc",
          id: "extension-guides/testing",
          label: "테스트 확장",
        },
        {
          type: "doc",
          id: "extension-guides/custom-data-extension",
          label: "사용자 지정 데이터 확장",
        },
        {
          type: "doc",
          id: "extension-guides/telemetry",
          label: "텔레메트리",
        },
      ],
    },
    {
      type: "category",
      label: "사용자 경험 지침",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "ux-guidelines/overview",
          label: "개요",
        },
        {
          type: "doc",
          id: "ux-guidelines/activity-bar",
          label: "작업 표시줄",
        },
        {
          type: "doc",
          id: "ux-guidelines/sidebars",
          label: "사이드바",
        },
        {
          type: "doc",
          id: "ux-guidelines/panel",
          label: "패널",
        },
        {
          type: "doc",
          id: "ux-guidelines/status-bar",
          label: "상태 표시줄",
        },
        {
          type: "doc",
          id: "ux-guidelines/views",
          label: "뷰",
        },
        {
          type: "doc",
          id: "ux-guidelines/editor-actions",
          label: "편집기 작업",
        },
        {
          type: "doc",
          id: "ux-guidelines/quick-picks",
          label: "빠른 선택",
        },
        {
          type: "doc",
          id: "ux-guidelines/command-palette",
          label: "명령 팔레트",
        },
        {
          type: "doc",
          id: "ux-guidelines/notifications",
          label: "알림",
        },
        {
          type: "doc",
          id: "ux-guidelines/webviews",
          label: "웹뷰",
        },
        {
          type: "doc",
          id: "ux-guidelines/context-menus",
          label: "컨텍스트 메뉴",
        },
        {
          type: "doc",
          id: "ux-guidelines/walkthroughs",
          label: "워크스루",
        },
        {
          type: "doc",
          id: "ux-guidelines/settings",
          label: "설정",
        },
      ],
    },
    {
      type: "category",
      label: "언어 확장",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "language-extensions/overview",
          label: "개요",
        },
        {
          type: "doc",
          id: "language-extensions/syntax-highlight-guide",
          label: "구문 하이라이트 가이드",
        },
        {
          type: "doc",
          id: "language-extensions/semantic-highlight-guide",
          label: "시맨틱 하이라이트 가이드",
        },
        {
          type: "doc",
          id: "language-extensions/snippet-guide",
          label: "스니펫 가이드",
        },
        {
          type: "doc",
          id: "language-extensions/language-configuration-guide",
          label: "언어 구성 가이드",
        },
        {
          type: "doc",
          id: "language-extensions/programmatic-language-features",
          label: "프로그래밍 언어 기능",
        },
        {
          type: "doc",
          id: "language-extensions/language-server-extension-guide",
          label: "언어 서버 확장 가이드",
        },
        {
          type: "doc",
          id: "language-extensions/embedded-languages",
          label: "임베디드 언어",
        },
      ],
    },
    {
      type: "category",
      label: "테스트 및 배포",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "working-with-extensions/testing-extension",
          label: "확장 프로그램 테스트",
        },
        {
          type: "doc",
          id: "working-with-extensions/publishing-extension",
          label: "확장 프로그램 배포",
        },
        {
          type: "doc",
          id: "working-with-extensions/bundling-extension",
          label: "확장 프로그램 번들링",
        },
        {
          type: "doc",
          id: "working-with-extensions/continuous-integration",
          label: "지속적 통합",
        },
      ],
    },
    {
      type: "category",
      label: "고급 주제",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "advanced-topics/extension-host",
          label: "확장 프로그램 호스트",
        },
        {
          type: "doc",
          id: "advanced-topics/remote-extensions",
          label: "원격 개발 및 Codespaces",
        },
        {
          type: "doc",
          id: "advanced-topics/using-proposed-api",
          label: "제안된 API 사용",
        },
        {
          type: "doc",
          id: "advanced-topics/tslint-eslint-migration",
          label: "TSLint에서 ESLint로 마이그레이션",
        },
        {
          type: "doc",
          id: "advanced-topics/python-extension-template",
          label: "Python 확장 템플릿",
        },
      ],
    },
    {
      type: "category",
      label: "참조",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "references/vscode-api",
          label: "VS Code API",
        },
        {
          type: "doc",
          id: "references/contribution-points",
          label: "기여 지점",
        },
        {
          type: "doc",
          id: "references/activation-events",
          label: "활성화 이벤트",
        },
        {
          type: "doc",
          id: "references/extension-manifest",
          label: "확장 매니페스트",
        },
        {
          type: "doc",
          id: "references/commands",
          label: "내장 명령어",
        },
        {
          type: "doc",
          id: "references/when-clause-contexts",
          label: "When 절 컨텍스트",
        },
        {
          type: "doc",
          id: "references/theme-color",
          label: "테마 색상",
        },
        {
          type: "doc",
          id: "references/icons-in-labels",
          label: "제품 아이콘 참조",
        },
        {
          type: "doc",
          id: "references/document-selector",
          label: "문서 선택기",
        },
      ],
    },
  ],
};

module.exports = sidebars;

---
Order: 7
Area: setup
TOCTitle: 추가 구성 요소
ContentId: 243B79C2-819F-4257-B80D-2CD9CCB04C84
PageTitle: Visual Studio Code와 함께 사용할 추가 구성 요소 설정하기
DateApproved: 12/11/2024
MetaDescription: Visual Studio Code와 함께 사용할 추가 구성 요소 설정하기
---

# 추가 구성 요소와 도구 {#additional-components-and-tools}

Visual Studio Code는 설계상 작은 다운로드 크기를 가지며 대부분의 개발 워크플로우에서 공유되는 최소한의 구성 요소만 포함합니다. 에디터, 파일 관리, 창 관리, 환경 설정과 같은 기본 기능이 포함되어 있습니다. JavaScript/TypeScript 언어 서비스와 Node.js 디버거도 기본 설치에 포함되어 있습니다.

더 큰 규모의 일체형 개발 도구(IDE)를 사용하던 분들은 자신의 시나리오가 기본적으로 완전히 지원되지 않는다는 것에 놀랄 수 있습니다. 예를 들어, 미리 설치된 프로젝트 템플릿이 있는 **File** > **New Project** 대화 상자가 없습니다. 대부분의 VS Code 사용자는 특정 요구 사항에 따라 추가 구성 요소를 설치해야 할 것입니다.

## 일반적으로 사용되는 구성 요소 {#commonly-used-components}

다음은 일반적으로 설치되는 몇 가지 구성 요소입니다:

- [Git](https://git-scm.com/download) - VS Code는 Git을 사용한 소스 코드 제어를 기본적으로 지원하지만, Git을 별도로 설치해야 합니다.
- [Node.js (npm 포함)](https://nodejs.org/) - JavaScript 애플리케이션을 빌드하고 실행하기 위한 크로스 플랫폼 런타임입니다.
- [TypeScript](https://www.typescriptlang.org) - TypeScript를 JavaScript로 변환하기 위한 TypeScript 컴파일러인 `tsc`입니다.

위의 구성 요소들은 우리의 문서와 안내서에서 자주 언급되는 것들을 찾아보실 수 있습니다.

## VS Code 확장 프로그램 {#vs-code-extensions}

[확장 프로그램](/docs/editor/extension-marketplace.md)을 통해 VS Code 에디터 자체를 확장할 수 있습니다. VS Code 커뮤니티는 VS Code [마켓플레이스](https://marketplace.visualstudio.com/VSCode)에서 사용할 수 있는 수천 개의 유용한 확장 프로그램을 만들었습니다.

다음 목록은 VS Code 마켓플레이스에서 인기 있는 확장 프로그램들을 보여줍니다. 확장 프로그램 타일을 선택하면 해당 확장 프로그램의 세부 정보를 볼 수 있습니다.

<div class="marketplace-extensions-top"></div>

## 추가 도구 {#additional-tools}

Visual Studio Code는 기존 도구 체인과 통합됩니다. 다음 도구들이 여러분의 개발 경험을 향상시켜줄 것이라고 생각합니다.

- [Yeoman](https://yeoman.io/) - 애플리케이션 기본 구조 생성 도구로, **File** > **New Project**의 명령줄 버전입니다.
- [generator-hottowel](https://github.com/johnpapa/generator-hottowel) - AngularJS 애플리케이션을 빠르게 만들기 위한 Yeoman 생성기입니다.
- [Express](https://expressjs.com/) - Pug 템플릿 엔진을 사용하는 Node.js 애플리케이션을 위한 애플리케이션 프레임워크입니다.
- [Gulp](https://gulpjs.com/) - VS Code 작업과 쉽게 통합되는 스트리밍 작업 실행 시스템입니다.
- [Mocha](https://mochajs.org/) - Node.js에서 실행되는 JavaScript 테스트 프레임워크입니다.
- [Yarn](https://yarnpkg.com/) - npm의 대안이 되는 의존성 관리자입니다.

> **참고:** 이러한 도구들의 대부분은 설치하고 사용하기 위해 Node.js와 npm 패키지 관리자가 필요합니다.

## 다음 단계 {#next-steps}

- [사용자 인터페이스](/docs/getstarted/userinterface.md) - VS Code에 대한 빠른 오리엔테이션입니다.
- [사용자/작업 공간 설정](/docs/getstarted/settings.md) - 설정을 통해 VS Code를 사용자의 선호도에 맞게 구성하는 방법을 알아보세요.
- [언어](/docs/languages/overview.md) - VS Code는 많은 프로그래밍 언어를 기본적으로 지원하며, 커뮤니티에서 만든 확장 프로그램을 통해 더 많은 언어를 지원합니다.

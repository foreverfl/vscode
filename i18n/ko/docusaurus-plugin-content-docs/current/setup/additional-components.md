---
Order: 7
Area: setup
TOCTitle: 추가 구성 요소
ContentId: 243B79C2-819F-4257-B80D-2CD9CCB04C84
PageTitle: Visual Studio Code와 함께 사용할 추가 구성 요소 설정
DateApproved: 03/05/2025
MetaDescription: Visual Studio Code와 함께 사용할 추가 구성 요소 설정.
sidebar_label: 추가 구성 요소
---
# 추가 구성 요소 및 도구 {#additional-components-and-tools}

Visual Studio Code는 설계상 작은 다운로드 크기를 가지며 대부분의 개발 워크플로우에서 공유되는 최소한의 구성 요소만 포함합니다. 편집기, 파일 관리, 창 관리 및 환경 설정과 같은 기본 기능이 포함되어 있습니다. JavaScript/TypeScript 언어 서비스와 Node.js 디버거도 기본 설치의 일부입니다.

더 크고 단일 언어에 특화된 개발 도구(IDE)에 익숙하다면, 기본적으로 모든 시나리오가 완전히 지원되지 않는 것에 놀랄 수 있습니다. 예를 들어, 미리 설치된 프로젝트 템플릿이 있는 **File** > **New Project** 대화 상자가 없습니다. 대부분의 VS Code 사용자는 특정 요구 사항에 따라 추가 구성 요소를 설치해야 합니다.

## 일반적으로 사용되는 구성 요소 {#commonly-used-components}

다음은 일반적으로 설치되는 몇 가지 구성 요소입니다:

* [Git](https://git-scm.com/download) - VS Code는 Git을 사용한 소스 코드 제어를 위한 기본 지원을 제공하지만 Git을 별도로 설치해야 합니다.
* [Node.js (npm 포함)](https://nodejs.org/) - JavaScript 애플리케이션을 구축하고 실행하기 위한 크로스 플랫폼 런타임입니다.
* [TypeScript](https://www.typescriptlang.org) - TypeScript를 JavaScript로 변환하기 위한 TypeScript 컴파일러인 `tsc`입니다.

위의 구성 요소는 문서 및 안내서에서 자주 언급됩니다.

## VS Code 확장 프로그램 {#vs-code-extensions}

[확장 프로그램](/docs/editor/extension-marketplace.md)을 통해 VS Code 편집기를 확장할 수 있습니다. VS Code 커뮤니티는 VS Code [마켓플레이스](https://marketplace.visualstudio.com/VSCode)에서 사용할 수 있는 수천 개의 유용한 확장을 개발했습니다.

다음 목록은 VS Code 마켓플레이스에서 인기 있는 몇 가지 확장을 보여줍니다. 확장 프로그램 타일을 선택하여 확장 세부정보를 확인하세요.

<div class="marketplace-extensions-top"></div>

## 추가 도구 {#additional-tools}

Visual Studio Code는 기존의 도구와 통합됩니다. 다음 도구들이 개발 경험을 향상시킬 것이라고 생각합니다.

* [Yeoman](https://yeoman.io/) - 애플리케이션 구성 자동화 도구로, **File** > **New Project**의 명령줄 버전입니다.
* [generator-hottowel](https://github.com/johnpapa/generator-hottowel) - AngularJS 애플리케이션을 빠르게 생성하기 위한 Yeoman 생성기입니다.
* [Express](https://expressjs.com/) - Pug 템플릿 엔진을 사용하는 Node.js 애플리케이션을 위한 애플리케이션 프레임워크입니다.
* [Gulp](https://gulpjs.com/) - VS Code 작업과 쉽게 통합되는 스트리밍 작업 실행 시스템입니다.
* [Mocha](https://mochajs.org/) - Node.js에서 실행되는 JavaScript 테스트 프레임워크입니다.
* [Yarn](https://yarnpkg.com/) - 의존성 관리 도구이자 npm의 대안입니다.

:::note
이러한 도구의 대부분은 설치 및 사용을 위해 Node.js와 npm 패키지 관리자가 필요합니다.
:::

## 다음 단계 {#next-steps}

* [사용자 인터페이스](/docs/getstarted/userinterface.md) - VS Code에 대한 간단한 안내입니다.
* [사용자/작업 공간 설정](/docs/editor/settings.md) - 설정을 통해 VS Code를 개인의 선호에 맞게 구성하는 방법을 배우세요.
* [언어](/docs/languages/overview.md) - VS Code는 기본적으로 많은 프로그래밍 언어를 지원하며, 커뮤니티에서 만든 확장을 통해 더 많은 언어를 지원합니다.

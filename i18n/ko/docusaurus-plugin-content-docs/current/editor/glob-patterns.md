---
Order:
Area: editor
TOCTitle: 글로브 패턴 참조
ContentId: c2d81f09-3c24-4659-8aa0-9ca24ef4950d
PageTitle: Visual Studio Code 글로브 패턴 참조
DateApproved: 03/05/2025
MetaDescription: Visual Studio Code 글로브 패턴 참조
---
# 글로브 패턴 참조 {#glob-patterns-reference}

Visual Studio Code는 많은 구성 요소에서 글로브 패턴을 사용합니다. 예를 들어, [검색](/docs/editor/codebasics.md#advanced-search-options)과 같은 기능에서 파일 및 폴더 포함/제외 설정, 파일 탐색기에서 파일 숨기기 또는 읽기 전용으로 표시하기, 프로그래밍 언어별 파일 연결 설정 등이 있습니다.

## 글로브 패턴 구문 {#glob-pattern-syntax}

VS Code는 다음과 같은 글로브 구문을 지원합니다:

* `/`는 경로 세그먼트를 구분합니다.
* `*`는 경로 세그먼트에서 0개 이상의 문자와 일치합니다.
* `?`는 경로 세그먼트에서 하나의 문자와 일치합니다.
* `**`는 경로 세그먼트의 수에 관계없이 일치합니다 (없을 수도 있음).
* `{}`는 조건을 그룹화합니다 (예: `{**/*.html,**/*.txt}`는 모든 HTML 및 텍스트 파일과 일치합니다).
* `[]`는 일치할 문자 범위를 **선언**합니다 (`example.[0-9]`는 `example.0`, `example.1`, …와 일치합니다).
* `[!...]`는 일치하지 않을 문자 범위를 부정합니다 (`example.[!0-9]`는 `example.a`, `example.b`와 일치하지만 `example.0`와는 일치하지 않습니다).

**참고:** 경로는 `/`로 구분되며 Windows에서도 `\`가 아닙니다. 그러나 적용될 때, 글로브 패턴은 슬래시와 백슬래시 모두에 대해 경로와 일치합니다.

## 특수 사례 {#special-cases}

검색 뷰의 글로브 패턴은 `setting(files.exclude)` 및 `setting(search.exclude)`와 같은 설정에서 다르게 작동합니다. 설정에서는 `**/example`을 사용하여 작업 공간의 하위 폴더 `folder1/example`에 있는 `example`이라는 폴더와 일치해야 합니다. 검색 뷰에서는 `**` 접두사가 가정됩니다. 이러한 설정의 글로브 패턴은 항상 작업 공간 폴더의 경로에 상대적으로 평가됩니다.

## 자주 묻는 질문 {#common-questions}

### 글로브 패턴이 기능 X 또는 Y를 지원하지 않는 이유는 무엇인가요? {#why-do-glob-patterns-not-support-feature-x-or-y}

우리는 대부분의 일반적인 패턴에 대해 최적의 성능을 제공하기 위해 자체 [글로브 매칭 라이브러리](https://github.com/microsoft/vscode/blob/main/src/vs/base/common/glob.ts)를 구현했습니다. 특정 글로브 구문이 지원될 것으로 예상된다면, 사용 사례와 함께 문제를 보고할 수 있습니다.

### 내 글로브 패턴이 작동하지 않는 이유는 무엇인가요? {#why-does-my-glob-pattern-not-work}

Windows에서 경로를 구분할 때 `\`가 아닌 `/`를 사용하고 있는지 확인하세요. VS Code의 글로브 패턴은 경로를 구분하기 위해 `/`가 필요하지만, 경로에서는 `/`와 `\` 모두에 대해 일치합니다.
---
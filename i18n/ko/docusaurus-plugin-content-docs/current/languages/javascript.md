---
Order: 2
Area: languages
TOCTitle: JavaScript
ContentId: F54BB3D4-76FB-4547-A9D0-F725CEBB905C
PageTitle: Visual Studio Code로 JavaScript 프로그래밍
DateApproved: 03/05/2025
MetaDescription: JavaScript 개발을 위한 Visual Studio Code의 최적 활용 방법
sidebar_label: JavaScript
---

# Visual Studio Code에서의 JavaScript {#javascript-in-visual-studio-code}

Visual Studio Code는 내장된 JavaScript IntelliSense, 디버깅, 포맷팅, 코드 탐색, 리팩토링 및 기타 많은 고급 언어 기능을 포함하고 있습니다.

![Visual Studio Code에서 JavaScript 작업하기](https://code.visualstudio.com/assets/docs/languages/javascript/overview.png)

이 기능들 중 대부분은 기본적으로 작동하지만, 최상의 경험을 위해 기본적인 구성이 필요할 수 있습니다. 이 페이지는 VS Code와 함께 제공되는 JavaScript 기능을 요약합니다. [VS Code Marketplace](https://marketplace.visualstudio.com)에서의 확장 프로그램은 이러한 내장 기능을 보완하거나 변경할 수 있습니다. 이러한 기능이 작동하는 방식과 구성 방법에 대한 보다 심층적인 가이드는 [JavaScript 작업하기](/docs/nodejs/working-with-javascript.md)를 참조하세요.

## IntelliSense {#intellisense}

IntelliSense는 코드 완성, 호버 정보 및 서명 정보를 제공하여 더 빠르고 정확하게 코드를 작성할 수 있도록 도와줍니다.

<video src="https://code.visualstudio.com/assets/docs/languages/javascript/intellisense.mp4" placeholder="https://code.visualstudio.com/assets/docs/languages/javascript/intellisense-placeholder.png" autoPlay loop controls muted width="100%">
    죄송합니다. 귀하의 브라우저는 HTML 5 비디오를 지원하지 않습니다.
</video>

VS Code는 JavaScript 프로젝트 내에서 IntelliSense를 제공하며, `React`, `lodash`, `express`와 같은 많은 npm 라이브러리 및 `node`, 서버리스 또는 IoT와 같은 다른 플랫폼에서도 지원합니다.

VS Code의 JavaScript IntelliSense에 대한 정보, 구성 방법 및 일반적인 IntelliSense 문제 해결에 대한 도움은 [JavaScript 작업하기](/docs/nodejs/working-with-javascript.md)를 참조하세요.

## JavaScript 프로젝트 (jsconfig.json) {#javascript-projects-jsconfigjson}

[jsconfig.json](/docs/languages/jsconfig.md) 파일은 VS Code에서 JavaScript 프로젝트를 정의합니다. `jsconfig.json` 파일은 필수는 아니지만, 다음과 같은 경우에는 생성하는 것이 좋습니다:

* 작업 공간의 모든 JavaScript 파일이 단일 JavaScript 프로젝트의 일부로 간주되지 않아야 할 경우. `jsconfig.json` 파일을 사용하면 IntelliSense에 표시되는 일부 파일을 제외할 수 있습니다.
* 작업 공간의 일부 JavaScript 파일이 단일 프로젝트로 처리되도록 보장하기 위해. 이는 `imports` 대신 암묵적인 전역 종속성을 사용하는 레거시 코드 작업 시 유용합니다.
* 작업 공간에 프론트엔드 및 백엔드 JavaScript 코드와 같은 여러 프로젝트 컨텍스트가 포함된 경우. 다중 프로젝트 작업 공간의 경우 각 프로젝트의 루트 폴더에 `jsconfig.json`을 생성하세요.
* TypeScript 컴파일러를 사용하여 JavaScript 소스 코드를 하위 버전으로 컴파일하는 경우.

기본 JavaScript 프로젝트를 정의하려면 작업 공간의 루트에 `jsconfig.json`을 추가하세요:

```json
{
    "compilerOptions": {
        "module": "CommonJS",
        "target": "ES6"
    },
    "exclude": [
        "node_modules"
    ]
}
```

보다 고급 `jsconfig.json` 구성에 대한 정보는 [JavaScript 작업하기](/docs/nodejs/working-with-javascript.md)를 참조하세요.

:::tip
JavaScript 파일이 JavaScript 프로젝트의 일부인지 확인하려면 VS Code에서 파일을 열고 **JavaScript: Go to Project Configuration** 명령을 실행하세요. 이 명령은 JavaScript 파일을 참조하는 `jsconfig.json`을 엽니다. 파일이 어떤 `jsconfig.json` 프로젝트의 일부가 아닌 경우 알림이 표시됩니다.
:::

## 스니펫 {#snippets}

VS Code는 입력할 때 제안되는 기본 JavaScript [스니펫](/docs/editor/userdefinedsnippets.md)을 포함하고 있습니다;

<video src="https://code.visualstudio.com/assets/docs/languages/javascript/snippets.mp4" placeholder="https://code.visualstudio.com/assets/docs/languages/javascript/snippets-placeholder.png" autoPlay loop controls muted width="100%">
    죄송합니다. 귀하의 브라우저는 HTML 5 비디오를 지원하지 않습니다.
</video>

Redux나 Angular와 같은 인기 프레임워크에 대한 추가 스니펫을 제공하는 많은 확장 프로그램이 있습니다. 심지어 [자신만의 스니펫을 정의할 수도 있습니다](/docs/editor/userdefinedsnippets.md).

:::tip
스니펫 제안을 비활성화하려면 [설정](/docs/editor/settings.md) 파일에서 `setting(editor.snippetSuggestions)`를 `"none"`으로 설정하세요. `setting(editor.snippetSuggestions)` 설정은 스니펫이 제안 목록에서 나타나는 위치를 변경할 수 있습니다: 상단(`"top"`), 하단(`"bottom"`), 또는 알파벳 순서로 인라인(`"inline"`)으로 정렬됩니다. 기본값은 `"inline"`입니다.
:::

## JSDoc 지원 {#jsdoc-support}

VS Code는 많은 표준 [JSDoc](https://jsdoc.app) 주석을 이해하며, 이러한 주석을 사용하여 풍부한 [IntelliSense](#intellisense)를 제공합니다. 선택적으로 JSDoc 주석의 타입 정보를 사용하여 [JavaScript의 타입 검사를 수행할 수도 있습니다](#type-checking).

<video src="https://code.visualstudio.com/assets/docs/languages/javascript/jsdoc-autofill.mp4" placeholder="https://code.visualstudio.com/assets/docs/languages/javascript/jsdoc-autofill-placeholder.png" autoPlay loop controls muted width="100%">
    죄송합니다. 귀하의 브라우저는 HTML 5 비디오를 지원하지 않습니다.
</video>

함수 선언 앞에 `/**`를 입력하여 JSDoc 주석을 빠르게 생성하고, **JSDoc 주석** 스니펫 제안을 선택하세요:

<video src="https://code.visualstudio.com/assets/docs/languages/javascript/jsdoc-autofill.mp4" placeholder="https://code.visualstudio.com/assets/docs/languages/javascript/jsdoc-autofill-placeholder.png" autoPlay loop controls muted width="100%">
    죄송합니다. 귀하의 브라우저는 HTML 5 비디오를 지원하지 않습니다.
</video>

JSDoc 주석 제안을 비활성화하려면 `"javascript.suggest.completeJSDocs": false`로 설정하세요.

## 호버 정보 {#hover-information}

JavaScript 기호 위에 마우스를 올리면 해당 기호의 타입 정보와 관련 문서를 빠르게 확인할 수 있습니다.

![JavaScript 변수 위에 마우스를 올려 타입 정보를 확인하는 모습](https://code.visualstudio.com/assets/docs/languages/javascript/hover.png)

`kb(editor.action.showHover)` 키보드 단축키를 사용하면 현재 커서 위치에서 이 호버 정보를 표시합니다.

## 시그니처 도움말 {#signature-help}

JavaScript 함수 호출을 작성할 때, VS Code는 함수 시그니처 정보를 표시하고 현재 완료 중인 매개변수를 강조 표시합니다:

![일부 DOM 메서드에 대한 시그니처 도움말](https://code.visualstudio.com/assets/docs/languages/javascript/signature-help.png)

시그니처 도움말은 함수 호출 내에서 `(` 또는 `,`를 입력할 때 자동으로 표시됩니다. `kb(editor.action.triggerParameterHints)`를 눌러 시그니처 도움말을 수동으로 호출할 수 있습니다.

## 자동 import {#auto-imports}

자동 import는 프로젝트와 그 종속성 전반에 걸쳐 사용 가능한 변수를 제안하여 코딩 속도를 높입니다. 이러한 제안 중 하나를 선택하면 VS Code는 자동으로 파일 상단에 import를 추가합니다.

입력을 시작하면 현재 프로젝트에서 사용 가능한 모든 JavaScript 기호에 대한 [제안](#intellisense)을 확인할 수 있습니다. 자동 import 제안은 어디에서 가져올 것인지 보여줍니다:

![제안 목록에 전역 기호가 표시됩니다](https://code.visualstudio.com/assets/docs/languages/javascript/auto-import-before.png)

이러한 자동 import 제안 중 하나를 선택하면 VS Code가 import를 추가합니다.

이 예시에서는 VS Code는 [material-ui](https://material-ui.com)에서 `Button`에 대한 import를 파일 상단에 추가합니다:

![다른 파일에서 기호를 선택한 후 자동으로 import가 추가됩니다](https://code.visualstudio.com/assets/docs/languages/javascript/auto-import-after.png)

자동 import를 비활성화하려면 `"javascript.suggest.autoImports"`를 `false`로 설정하세요.

:::tip
VS Code는 사용할 최상의 import 스타일을 유추하려고 합니다. 코드에 추가된 import에 대한 선호하는 따옴표 스타일과 경로 스타일을 `setting(javascript.preferences.quoteStyle)` 및 `setting(javascript.preferences.importModuleSpecifier)` 설정으로 명시적으로 구성할 수 있습니다.
:::

### 붙여넣기 시 import 추가 {#add-imports-on-paste}

편집기 간에 코드를 복사하고 붙여넣을 때, VS Code는 코드가 붙여넣어질 때 자동으로 import를 추가할 수 있습니다. 정의되지 않은 기호가 포함된 코드를 붙여넣으면, 일반 텍스트로 붙여넣거나 import를 추가하는 옵션을 선택할 수 있는 붙여넣기 제어가 표시됩니다.

<video src="https://code.visualstudio.com/assets/docs/languages/javascript/jsts-update-imports-paste.mp4" title="한 편집기에서 다른 편집기로 코드를 복사하면 붙여넣기 위젯이 표시되고 붙여넣기 시 import가 추가됩니다." autoPlay loop controls muted width="100%"></video>

이 기능은 기본적으로 활성화되어 있지만, `setting(javascript.updateImportsOnPaste.enabled)` 설정을 전환하여 비활성화할 수 있습니다.

붙여넣기 제어를 표시하지 않고 import가 포함된 붙여넣기를 기본 동작으로 설정하려면 `setting(editor.pasteAs.preferences)` 설정을 구성하세요. `text.updateImports.jsts` 또는 `text.updateImports`를 포함하여 붙여넣기 시 항상 import를 추가합니다.

## import 정리 {#organize-imports}

**import 정리** 소스 작업은 JavaScript 파일의 import를 정렬하고 사용되지 않는 import를 제거합니다:

<!-- TODO: js 특정 예제로 교체 -->
<video src="https://code.visualstudio.com/assets/docs/languages/javascript/organize-imports.mp4" placeholder="https://code.visualstudio.com/assets/docs/languages/javascript/organize-imports-placeholder.png" autoPlay loop controls muted width="100%">
    죄송합니다. 귀하의 브라우저는 HTML 5 비디오를 지원하지 않습니다.
</video>

**Source Action** 컨텍스트 메뉴에서 **Organize Imports**를 실행하거나 `kb(editor.action.organizeImports)` 키보드 단축키를 사용하여 실행할 수 있습니다.

JavaScript 파일을 저장할 때 자동으로 import를 정리하도록 설정할 수 있습니다:

```json
"editor.codeActionsOnSave": {
    "source.organizeImports": "explicit"
}
```

## 파일 이동 시 import 업데이트 {#update-imports-on-file-move}

JavaScript 프로젝트에서 다른 파일에 의해 가져온 파일을 이동하거나 이름을 변경할 때, VS Code는 이동된 파일을 참조하는 모든 import 경로를 자동으로 업데이트할 수 있습니다:

<video src="https://code.visualstudio.com/assets/docs/languages/javascript/update-imports.mp4" placeholder="https://code.visualstudio.com/assets/docs/languages/javascript/update-imports-placeholder.png" autoPlay loop controls muted width="100%">
    죄송합니다. 귀하의 브라우저는 HTML 5 비디오를 지원하지 않습니다.
</video>

`setting(javascript.updateImportsOnFileMove.enabled)` 설정이 이 동작을 제어합니다. 유효한 설정 값은 다음과 같습니다:

* `"prompt"` - 기본값. 각 파일 이동에 대해 경로를 업데이트할지 묻습니다.
* `"always"` - 항상 자동으로 경로를 업데이트합니다.
* `"never"` - 경로를 자동으로 업데이트하지 않으며 묻지 않습니다.

## 포맷팅 {#formatting}

VS Code의 내장 JavaScript 포맷터는 합리적인 기본값으로 기본 코드 포맷팅을 제공합니다.

`javascript.format.*` [설정](/docs/editor/settings.md)은 내장 포맷터를 구성합니다. 또는 내장 포맷터가 방해가 된다면 `"javascript.format.enable"`을 `false`로 설정하여 비활성화할 수 있습니다.

보다 전문화된 코드 포맷팅 스타일을 위해 [Marketplace](https://marketplace.visualstudio.com/vscode)에서 JavaScript 포맷팅 확장 프로그램을 설치해 보세요.

## JSX 및 자동 닫기 태그 {#jsx-and-auto-closing-tags}

VS Code의 모든 JavaScript 기능은 [JSX](https://reactjs.org/docs/introducing-jsx.html)와 함께 작동합니다:

![JSX IntelliSense](https://code.visualstudio.com/assets/docs/languages/javascript/jsx.png)

정상 `*.js` 파일과 `*.jsx` 파일 모두에서 JSX 구문을 사용할 수 있습니다.

VS Code는 JSX 태그의 자동 닫기와 같은 JSX 전용 기능도 포함하고 있습니다:

<video src="https://code.visualstudio.com/assets/docs/languages/javascript/tag-complete.mp4" placeholder="https://code.visualstudio.com/assets/docs/languages/javascript/tag-complete-placeholder.png" autoPlay loop controls muted width="100%">
    죄송합니다. 귀하의 브라우저는 HTML 5 비디오를 지원하지 않습니다.
</video>

JSX 태그 닫기를 비활성화하려면 `"javascript.autoClosingTags"`를 `false`로 설정하세요.

## 코드 탐색 {#code-navigation}

코드 탐색을 통해 JavaScript 프로젝트를 빠르게 탐색할 수 있습니다.

* **정의로 이동** `kb(editor.action.revealDefinition)` - 기호 정의의 소스 코드로 이동합니다.
* **정의 미리 보기** `kb(editor.action.peekDefinition)` - 기호의 정의를 보여주는 미리 보기 창을 엽니다.
* **참조로 이동** `kb(editor.action.goToReferences)` - 기호에 대한 모든 참조를 표시합니다.
* **타입 정의로 이동** - 기호를 정의하는 타입으로 이동합니다. 클래스의 인스턴스인 경우, 인스턴스가 정의된 위치가 아닌 클래스 자체를 표시합니다.

**Command Palette**에서 **Go to Symbol** 명령을 사용하여 기호 검색을 통해 탐색할 수 있습니다 (`kb(workbench.action.showCommands)`).

* **파일 내 기호로 이동** `kb(workbench.action.gotoSymbol)`
* **작업 공간 내 기호로 이동** `kb(workbench.action.showAllSymbols)`

## 이름 바꾸기 {#rename}

`kb(editor.action.rename)`를 눌러 커서 아래의 기호를 JavaScript 프로젝트 전반에서 이름을 바꿀 수 있습니다:

![변수 이름 바꾸기](https://code.visualstudio.com/assets/docs/languages/javascript/rename.png)

## 리팩토링 {#refactoring}

VS Code는 **Extract function** 및 **Extract constant**과 같은 JavaScript에 대한 유용한 리팩토링 기능을 포함하고 있습니다. 추출하려는 소스 코드를 선택한 후, 거터의 전구를 클릭하거나 (`kb(editor.action.quickFix)`) 눌러 사용 가능한 리팩토링을 확인하세요.

![JavaScript 리팩토링](https://code.visualstudio.com/assets/docs/languages/javascript/refactorings.png)

사용 가능한 리팩토링에는 다음이 포함됩니다:

* 메서드 또는 함수로 추출하기
* 상수로 추출하기
* 명명된 import와 네임스페이스 가져기 간 변환
* 새 파일로 이동하기

리팩토링 및 개별 리팩토링에 대한 키보드 단축키를 구성하는 방법에 대한 자세한 내용은 [리팩토링](/docs/editor/refactoring.md)을 참조하세요.

또한, **Code Action Widget: Include Nearby Quick Fixes** (`setting(editor.codeActionWidget.includeNearbyQuickFixes)`)은 기본적으로 활성화된 설정으로, 커서가 있는 줄에서 `kb(editor.action.quickFix)` (명령 ID `editor.action.quickFix`)의 가장 가까운 빠른 수정을 활성화합니다.

이 명령은 리팩토링되거나 빠른 수정으로 수정될 소스 코드를 강조 표시합니다. 일반 코드 작업 및 비수정 리팩토링은 여전히 커서 위치에서 활성화할 수 있습니다.

## 사용되지 않는 변수 및 도달할 수 없는 코드 {#unused-variables-and-unreachable-code}

사용되지 않는 JavaScript 코드는 항상 참인 `if` 문 블록의 else 블록이나 참조되지 않은 import와 같이 편집기에서 흐릿하게 표시됩니다:

![도달할 수 없는 소스 코드가 흐릿하게 표시됨](https://code.visualstudio.com/assets/docs/languages/javascript/unreachable.png)

커서를 해당 코드 위에 놓고 빠른 수정 명령 (`kb(editor.action.quickFix)`)을 트리거하거나 전구를 클릭하여 이 사용되지 않는 코드를 빠르게 제거할 수 있습니다.

사용되지 않는 코드의 흐릿한 표시를 비활성화하려면 `"editor.showUnused"`를 `false`로 설정하세요. JavaScript에서만 사용되지 않는 코드의 흐릿한 표시를 비활성화하려면:

```json
"[javascript]": {
    "editor.showUnused":  false
},
"[javascriptreact]": {
    "editor.showUnused":  false
},
```

## 저장 시 코드 작업 {#code-actions-on-save}

`setting(editor.codeActionsOnSave)` 설정을 사용하면 파일이 저장될 때 실행되는 코드 작업 집합을 구성할 수 있습니다. 예를 들어, 저장 시 import를 정리하도록 설정하려면:

```json
// 명시적 저장 시 모든 소스 작업을 실행합니다. 자동 저장(창 또는 포커스 변경) 시 import 정리 소스 작업을 실행합니다.
"editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.organizeImports": "always",
}
```

현재 지원되는 열거형은 다음과 같습니다:

* `explicit` (기본값): 명시적으로 저장할 때 코드 작업을 호출합니다. `true`와 동일합니다.
* `always`: 명시적으로 저장할 때와 창 또는 포커스 변경 시 자동 저장 시 코드 작업을 트리거합니다.
* `never`: 저장 시 코드 작업을 트리거하지 않습니다. `false`와 동일합니다.

또한, 실행할 코드 작업의 배열로 `setting(editor.codeActionsOnSave)`를 설정할 수 있습니다.

다음은 일부 소스 작업입니다:

* `"organizeImports"` - 저장 시 import를 정리합니다.
* `"fixAll"` - 저장 시 모든 가능한 수정을 한 번에 계산합니다(ESLint를 포함한 모든 지원 도구).
* `"fixAll.eslint"` - ESLint에 대해서만 자동 수정을 수행합니다.
* `"addMissingImports"` - 저장 시 모든 누락된 import를 추가합니다.

자세한 내용은 [Node.js/JavaScript](/docs/nodejs/working-with-javascript)를 참조하세요.

## 코드 제안 {#code-suggestions}

VS Code는 약속의 `.then` 호출 체인을 `async` 및 `await`를 사용하도록 변환하는 것과 같은 일반적인 코드 단순화를 자동으로 제안합니다.

<video src="https://code.visualstudio.com/assets/docs/languages/javascript/code-suggestions-convert-async.mp4" placeholder="https://code.visualstudio.com/assets/docs/languages/javascript/code-suggestions-convert-async-placeholder.png" autoPlay loop controls muted width="100%">
    죄송합니다. 귀하의 브라우저는 HTML 5 비디오를 지원하지 않습니다.
</video>

제안을 비활성화하려면 `"javascript.suggestionActions.enabled"`를 `false`로 설정하세요.

## AI로 완성도 향상 {#enhance-completions-with-ai}

[GitHub Copilot](https://copilot.github.com/)는 코드를 더 빠르고 스마트하게 작성하는 데 도움을 주는 AI 기반 코드 완성 도구입니다. VS Code에서 [GitHub Copilot 확장 프로그램](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)을 사용하여 코드를 생성하거나 생성된 코드에서 학습할 수 있습니다.

[![VS Code Marketplace의 GitHub Copilot 확장 프로그램](https://code.visualstudio.com/assets/docs/languages/javascript/copilot-extension.png)](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)

GitHub Copilot은 다양한 언어와 다양한 프레임워크에 대한 제안을 제공하며, Python, JavaScript, TypeScript, Ruby, Go, C# 및 C++에 특히 잘 작동합니다.

Copilot을 시작하는 방법에 대한 자세한 내용은 [Copilot 문서](/docs/editor/github-copilot.md)를 참조하세요.

Copilot 확장 프로그램을 설치하고 활성화한 후, JavaScript 프로젝트에서 테스트해 볼 수 있습니다.

새 파일을 생성하세요. **Command Palette**에서 **File: New File** 명령을 사용할 수 있습니다 (`kbstyle(F1)`).

JavaScript 파일에서 다음 함수 헤더를 입력하세요:

```js
function calculateDaysBetweenDates(begin, end) {
```

Copilot은 다음과 같은 제안을 제공합니다 - 제안을 수락하려면 `kbstyle(Tab)`를 사용하세요:

![Copilot JavaScript 유령 텍스트 제안](https://code.visualstudio.com/assets/docs/languages/javascript/js-suggest.png)

## 인레이 힌트 {#inlay-hints}

인레이 힌트는 소스 코드에 추가적인 인라인 정보를 추가하여 코드의 기능을 이해하는 데 도움을 줍니다.

**Parameter name inlay hints**는 함수 호출에서 매개변수의 이름을 보여줍니다:

![매개변수 이름 인레이 힌트](https://code.visualstudio.com/assets/docs/languages/javascript/inlay-parameters.png)

이것은 각 인자의 의미를 한눈에 이해하는 데 도움을 주며, 특히 Boolean 플래그를 사용하는 함수나 혼동하기 쉬운 매개변수가 있는 함수에 유용합니다.

매개변수 이름 힌트를 활성화하려면 `javascript.inlayHints.parameterNames`를 설정하세요. 가능한 값은 세 가지입니다:

* `none` — 매개변수 인레이 힌트를 비활성화합니다.
* `literals` — 리터럴(문자열, 숫자, 불리언)에 대해서만 인레이 힌트를 표시합니다.
* `all` — 모든 인자에 대해 인레이 힌트를 표시합니다.

**Variable type inlay hints**는 명시적인 타입 주석이 없는 변수의 타입을 보여줍니다.

설정: `setting(javascript.inlayHints.variableTypes.enabled)`

![변수 타입 인레이 힌트](https://code.visualstudio.com/assets/docs/languages/javascript/inlay-var-types.png)

**Property type inlay hints**는 명시적인 타입 주석이 없는 클래스 속성의 타입을 보여줍니다.

설정: `setting(javascript.inlayHints.propertyDeclarationTypes.enabled)`

![속성 타입 인레이 힌트](https://code.visualstudio.com/assets/docs/languages/javascript/inlay-property-types.png)

**Parameter type hints**는 암묵적으로 타입이 지정된 매개변수의 타입을 보여줍니다.

설정: `setting(javascript.inlayHints.parameterTypes.enabled)`

![매개변수 타입 인레이 힌트](https://code.visualstudio.com/assets/docs/languages/javascript/inlay-parameter-types.png)

**Return type inlay hints**는 명시적인 타입 주석이 없는 함수의 반환 타입을 보여줍니다.

설정: `setting(javascript.inlayHints.functionLikeReturnTypes.enabled)`

![반환 타입 인레이 힌트](https://code.visualstudio.com/assets/docs/languages/javascript/inlay-return-type.png)

## 참조 CodeLens {#references-codelens}

JavaScript 참조 CodeLens는 클래스, 메서드, 속성 및 내보낸 객체에 대한 참조 수를 인라인으로 표시합니다:

![JavaScript 참조 CodeLens](https://code.visualstudio.com/assets/docs/languages/javascript/references-codelens.png)

참조 CodeLens를 활성화하려면 `"javascript.referencesCodeLens.enabled"`를 `true`로 설정하세요.

참조 수를 클릭하면 참조 목록을 빠르게 탐색할 수 있습니다:

![JavaScript 참조 CodeLens 미리 보기](https://code.visualstudio.com/assets/docs/languages/javascript/references-codelens-peek.png)

## 린터 {#linters}

[린터](https://en.wikipedia.org/wiki/Lint_%28software%29)는 의심스러운 코드에 대한 경고를 제공합니다. VS Code에는 내장된 JavaScript 린터가 포함되어 있지 않지만, 마켓플레이스에서 사용할 수 있는 많은 JavaScript 린터 [확장 프로그램](/docs/editor/extension-marketplace.md)이 있습니다.

<div class="marketplace-extensions-javascript-linters-curated"></div>

:::tip
이 목록은 [VS Code Marketplace](https://marketplace.visualstudio.com)에서 동적으로 쿼리됩니다. 설명과 리뷰를 읽고 확장 프로그램이 적합한지 결정하세요.
:::

## 타입 검사 {#type-checking}

일반 JavaScript 파일에서도 TypeScript의 고급 타입 검사 및 오류 보고 기능을 활용할 수 있습니다. 이는 일반적인 프로그래밍 실수를 잡는 좋은 방법입니다. 이러한 타입 검사는 **Add missing import** 및 **Add missing property**와 같은 흥미로운 빠른 수정을 가능하게 합니다.

![JavaScript 파일에서 타입 검사 및 빠른 수정 사용하기](https://code.visualstudio.com/assets/docs/languages/javascript/checkjs-example.gif)

TypeScript는 `.js` 파일에서 타입을 유추하려고 시도하며, `.ts` 파일에서와 동일한 방식으로 작동합니다. 타입을 유추할 수 없는 경우, JSDoc 주석을 사용하여 명시적으로 지정할 수 있습니다. JavaScript 타입 검사에 대한 JSDoc 사용 방법에 대한 자세한 내용은 [JavaScript 작업하기](/docs/nodejs/working-with-javascript.md)를 참조하세요.

JavaScript의 타입 검사는 선택 사항이며, 선택적으로 활성화할 수 있습니다. ESLint와 같은 기존 JavaScript 검증 도구는 내장된 타입 검사 기능과 함께 사용할 수 있습니다.

## 디버깅 {#debugging}

VS Code는 JavaScript에 대한 훌륭한 디버깅 지원을 제공합니다. 중단점을 설정하고, 객체를 검사하고, 호출 스택을 탐색하고, 디버그 콘솔에서 코드를 실행하세요. 자세한 내용은 [디버깅 주제](/docs/editor/debugging.md)를 참조하세요.

### 클라이언트 측 디버깅 {#debug-client-side}

브라우저 디버거(Edge 및 Chrome의 내장 디버거 또는 [Firefox 디버거](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-firefox-debug))를 사용하여 클라이언트 측 코드를 디버깅할 수 있습니다.

### 서버 측 디버깅 {#debug-server-side}

내장 디버거를 사용하여 VS Code에서 Node.js를 디버깅하세요. 설정이 간단하며, [Node.js 디버깅 튜토리얼](/docs/nodejs/nodejs-tutorial.md#debug-your-express-app)을 통해 도움을 받을 수 있습니다.

![디버그 데이터 검사](https://code.visualstudio.com/assets/docs/languages/javascript/debug_data_inspection.gif)

## 인기 있는 확장 프로그램 {#popular-extensions}

VS Code는 JavaScript에 대한 훌륭한 지원을 제공하지만, 추가로 디버거, 스니펫, 린터 및 기타 JavaScript 도구를 [확장 프로그램](/docs/editor/extension-marketplace.md)을 통해 설치할 수 있습니다.

<div class="marketplace-extensions-javascript-curated"></div>

:::tip
위에 표시된 확장 프로그램은 동적으로 쿼리됩니다. 위의 확장 프로그램 타일을 클릭하여 설명과 리뷰를 읽고 어떤 확장 프로그램이 가장 적합한지 결정하세요. [Marketplace](https://marketplace.visualstudio.com)에서 더 많은 정보를 확인하세요.
:::

## 다음 단계 {#next-steps}

다음에 대해 알아보세요:

* [JavaScript 작업하기](/docs/nodejs/working-with-javascript.md) - VS Code의 JavaScript 지원에 대한 보다 자세한 정보와 일반적인 문제 해결 방법.
* [jsconfig.json](/docs/languages/jsconfig.md) - `jsconfig.json` 프로젝트 파일에 대한 자세한 설명.
* [IntelliSense](/docs/editor/intellisense.md) - IntelliSense에 대해 더 배우고 언어에 효과적으로 사용하는 방법.
* [디버깅](/docs/editor/debugging.md) - 애플리케이션 디버깅 설정 방법.
* [Node.js](/docs/nodejs/nodejs-tutorial.md) - Express Node.js 애플리케이션을 만드는 방법.
* [TypeScript](/docs/languages/typescript.md) - VS Code는 JavaScript 코드에 구조와 강력한 타입을 제공하는 TypeScript에 대한 훌륭한 지원을 제공합니다.

## 자주 묻는 질문 {#common-questions}

### VS Code는 JSX 및 React Native를 지원하나요? {#does-vs-code-support-jsx-and-react-native}

VS Code는 **JSX** 및 **React Native**를 지원합니다. 자동으로 다운로드된 타입 선언(타이핑) 파일에서 **React/JSX** 및 **React Native**에 대한 IntelliSense를 받을 수 있습니다. 또한, 마켓플레이스에서 인기 있는 [React Native 확장 프로그램](https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native)을 설치할 수 있습니다.

**React Native**에 대한 ES6 import 문을 활성화하려면 `allowSyntheticDefaultImports` 컴파일러 옵션을 `true`로 설정해야 합니다. 이는 컴파일러에게 합성 기본 멤버를 생성하도록 지시하며 IntelliSense를 받을 수 있습니다. **React Native**는 기본 멤버와 함께 적절한 런타임 코드를 생성하기 위해 **Babel**을 사용합니다. **React Native** 코드를 디버깅하려면 [React Native 확장 프로그램](https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native)을 설치할 수 있습니다.

### VS Code는 Dart 프로그래밍 언어와 Flutter 프레임워크를 지원하나요? {#does-vs-code-support-the-dart-programming-language-and-the-flutter-framework}

예, [Dart](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code) 및 [Flutter](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter) 개발을 위한 VS Code 확장 프로그램이 있습니다. [Flutter.dev](https://flutter.dev/docs/development/tools/vs-code) 문서에서 더 많은 정보를 확인할 수 있습니다.

### IntelliSense가 외부 라이브러리에 대해 작동하지 않아요 {#intellisense-is-not-working-for-external-libraries}

`Automatic Type Acquisition`은 npm( `package.json`에 지정됨), Bower( `bower.json`에 지정됨)로 다운로드된 종속성 및 폴더 구조에 나열된 가장 일반적인 라이브러리(예: `jquery-3.1.1.min.js`)에 대해 작동합니다.

**ES6 스타일 import가 작동하지 않습니다.**

ES6 스타일 import를 사용하고 싶지만 일부 타입 선언(타이핑) 파일이 아직 ES6 스타일 내보내기를 사용하지 않는 경우, [TypeScript 컴파일러 옵션](https://www.typescriptlang.org/docs/handbook/compiler-options.html) `allowSyntheticDefaultImports`를 `true`로 설정하세요.

```json
{
    "compilerOptions": {
        "module": "CommonJS",
        "target": "ES6",
        // 추가할 줄입니다.
        "allowSyntheticDefaultImports": true
    },
    "exclude": [
        "node_modules",
        "**/node_modules/*"
    ]
}
```

### 축소/압축된 JavaScript를 디버깅할 수 있나요? {#can-i-debug-minifieduglified-javascript}

예, 가능합니다. [Node.js 디버깅](/docs/nodejs/nodejs-debugging.md) 주제를 사용하여 JavaScript 소스 맵을 사용하는 방법을 확인할 수 있습니다.

### 비 ES6 구문을 사용할 때 구문 검사를 비활성화하려면 어떻게 하나요? {#how-do-i-disable-syntax-validation-when-using-non-es6-constructs}

일부 사용자는 제안된 파이프라인(`|>`) 연산자와 같은 구문 구성을 사용하고 싶어합니다. 그러나 현재 이러한 구문은 VS Code의 JavaScript 언어 서비스에서 지원되지 않으며 오류로 표시됩니다. 이러한 미래 기능을 여전히 사용하고 싶어하는 사용자에게는 `setting(javascript.validate.enable)` [설정](/docs/editor/settings.md)을 제공합니다.

`javascript.validate.enable: false`로 설정하면 모든 내장 구문 검사를 비활성화합니다. 이렇게 하면 [ESLint](https://eslint.org)와 같은 린터를 사용하여 소스 코드를 검증하는 것이 좋습니다.

### Flow와 같은 다른 JavaScript 도구를 사용할 수 있나요? {#can-i-use-other-javascript-tools-like-flow}

예, 그러나 [Flow](https://flow.org)의 언어 기능 중 일부인 타입 및 오류 검사가 VS Code의 내장 JavaScript 지원과 충돌할 수 있습니다. VS Code의 내장 JavaScript 지원을 비활성화하는 방법에 대한 자세한 내용은 [JavaScript 지원 비활성화](/docs/nodejs/working-with-javascript.md#disable-javascript-support)를 참조하세요.

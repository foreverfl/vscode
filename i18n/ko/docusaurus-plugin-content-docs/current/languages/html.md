---
Order: 4
Area: languages
TOCTitle: HTML
ContentId: 43095EAF-4B93-407C-A6F9-6DB173D79088
PageTitle: Visual Studio Code로 HTML 프로그래밍하기
DateApproved: 03/05/2025
MetaDescription: HTML 개발을 위한 Visual Studio Code의 최적 활용 방법
sidebar_label: HTML
---
# Visual Studio Code에서의 HTML {#html-in-visual-studio-code}

Visual Studio Code는 기본적으로 HTML 프로그래밍을 지원합니다. 구문 강조, IntelliSense를 통한 스마트 완성, 그리고 사용자 정의 가능한 정렬 기능이 제공됩니다. VS Code는 또한 훌륭한 Emmet 지원을 포함하고 있습니다.

## IntelliSense {#intellisense}

HTML을 입력할 때, HTML IntelliSense를 통해 제안을 제공합니다. 아래 이미지에서 제안된 HTML 요소 닫기 태그 `</div>`와 함께 제안된 요소의 컨텍스트별 목록을 확인할 수 있습니다.

![HTML IntelliSense](images/html/htmlintellisense.png)

문서 기호는 HTML에 대해서도 제공되어, id와 클래스 이름으로 DOM 노드에 빠르게 탐색할 수 있습니다.

임베디드 CSS와 JavaScript로 작업할 수도 있습니다. 그러나 다른 파일에서의 스크립트 및 스타일 포함은 따르지 않으며, 언어 지원은 HTML 파일의 내용만을 살펴봅니다.

언제든지 `kb(editor.action.triggerSuggest)`를 눌러 제안을 트리거할 수 있습니다.

활성화된 내장 코드 완성 제공자를 제어할 수도 있습니다. 해당 제안을 보지 않으려면 사용자 또는 작업 공간의 [설정](/docs/editor/settings.md)에서 이를 오버라이드할 수 있습니다.

```json
// 내장 HTML 언어가 HTML5 태그, 속성 및 값을 제안하는지 여부를 설정합니다.
"html.suggest.html5": true
```

## 태그 닫기 {#close-tags}

태그 요소는 여는 태그의 `>`를 입력하면 자동으로 닫힙니다.

![HTML Close1](images/html/auto-close1.gif)

닫는 태그의 `/`를 입력하면 일치하는 닫는 태그가 삽입됩니다.

![HTML Close2](images/html/auto-close2.gif)

다음 [설정](/docs/editor/settings.md)을 사용하여 자동 닫기 태그를 끌 수 있습니다:

```json
"html.autoClosingTags": false
```

## 태그 자동 업데이트 {#auto-update-tags}

태그를 수정할 때, 연결 편집 기능이 일치하는 닫는 태그를 자동으로 업데이트합니다. 이 기능은 선택 사항이며 다음과 같이 설정하여 활성화할 수 있습니다:

```json
"editor.linkedEditing": true
```

## 색상 선택기 {#color-picker}

VS Code 색상 선택기 UI가 이제 HTML 스타일 섹션에서 사용할 수 있습니다.

![HTML에서의 색상 선택기](images/html/color-picker-html.png)

편집기에서 선택된 색상의 색조, 채도 및 불투명도를 구성할 수 있습니다. 또한 선택기 상단의 색상 문자열을 클릭하여 다양한 색상 모드 간 전환할 수 있는 기능도 제공합니다. 색상 정의 위에 마우스를 올리면 선택기가 나타납니다.

## 호버 {#hover}

HTML 태그 또는 임베디드 스타일과 JavaScript 위에 마우스를 이동하면 커서 아래의 기호에 대한 추가 정보를 얻을 수 있습니다.

![HTML Hover](images/html/htmlhover.png)

## 유효성 검사 {#validation}

HTML 언어 지원은 모든 임베디드 JavaScript 및 CSS에 대해 유효성 검사를 수행합니다.

다음 설정을 사용하여 해당 유효성 검사를 끌 수 있습니다:

```json
// 내장 HTML 언어 지원이 임베디드 스크립트를 유효성 검사하는지 여부를 설정합니다.
"html.validate.scripts": true,

// 내장 HTML 언어 지원이 임베디드 스타일을 유효성 검사하는지 여부를 설정합니다.
"html.validate.styles": true
```

## 접기 {#folding}

소스 코드의 특정 영역을 접기 아이콘을 사용하여 접을 수 있습니다. 접기 영역은 소스 코드의 모든 HTML 요소에 대해 다중 행 주석에 대해 사용할 수 있습니다.

또한 다음 영역 마커를 사용하여 접기 영역을 정의할 수 있습니다:
`<!-- #region -->` 및 `<!-- #endregion -->`

HTML에 대해 들여쓰기를 기반으로 한 접기로 전환하려면 다음을 사용하세요:

```json
"[html]": {
    "editor.foldingStrategy": "indentation"
},
```

## 정렬 {#formatting}

HTML 소스 코드의 정렬을 개선하기 위해, 전체 파일을 포맷하는 **문서 포맷** 명령 `kb(editor.action.formatDocument)` 또는 선택된 텍스트만 포맷하는 **선택 포맷** `kb(editor.action.formatSelection)`을 사용할 수 있습니다.

HTML 포맷터는 [js-beautify](https://www.npmjs.com/package/js-beautify)를 기반으로 합니다. 해당 라이브러리에서 제공하는 정렬 옵션은 VS Code의 [설정](/docs/editor/settings.md)에서 확인할 수 있습니다:

* `setting(html.format.wrapLineLength)`: 한 줄의 최대 문자 수.
* `setting(html.format.unformatted)`: 정렬하지 않을 태그 목록.
* `setting(html.format.contentUnformatted)`: 내용이 재정렬되지 않아야 하는 태그 목록(쉼표로 구분).
* `setting(html.format.extraLiners)`: 그 앞에 추가 줄 바꿈이 있어야 하는 태그 목록.
* `setting(html.format.preserveNewLines)`: 요소 앞의 기존 줄 바꿈을 유지할지 여부.
* `setting(html.format.maxPreserveNewLines)`: 한 덩어리에서 유지할 최대 줄 바꿈 수.
* `setting(html.format.indentInnerHtml)`: `<head>` 및 `<body>` 섹션 들여쓰기.
* `setting(html.format.wrapAttributes)`: 속성의 래핑 전략:
  * `auto`: 줄 길이를 초과할 때 래핑
  * `force`: 첫 번째를 제외한 모든 속성 래핑
  * `force-aligned`: 첫 번째를 제외한 모든 속성 래핑 및 정렬
  * `force-expand-multiline`: 모든 속성 래핑
  * `aligned-multiple`: 줄 길이를 초과할 때 래핑, 속성을 수직으로 정렬
  * `preserve`: 속성의 래핑 유지
  * `preserve-aligned`: 속성의 래핑 유지하되 정렬
* `setting(html.format.wrapAttributesIndentSize)`: `setting(html.format.wrapAttributes)`에서 `force aligned` 및 `aligned multiple`를 사용할 때의 정렬 크기 또는 기본 들여쓰기 크기를 사용하려면 `null`.
* `setting(html.format.templating)`: django, erb, handlebars 및 php 템플릿 언어 태그를 존중합니다.
* `setting(html.format.unformattedContentDelimiter)`: 이 문자열 사이의 텍스트 내용을 함께 유지합니다.

:::tip
포맷터는 `setting(html.format.unformatted)` 및 `setting(html.format.contentUnformatted)` 설정에 나열된 태그를 정렬렬하지 않습니다. 'script' 태그가 제외되지 않는 한 임베디드 JavaScript는 포맷됩니다.
:::

마켓플레이스에는 선택할 수 있는 여러 대체 포맷터가 있습니다. 다른 포맷터를 사용하려면 설정에서 내장 포맷터를 끄기 위해 `"html.format.enable": false`를 정의하세요.

## Emmet 스니펫 {#emmet-snippets}

VS Code는 [Emmet 스니펫](https://emmet.io/) 확장을 지원합니다. Emmet 약어는 편집기 자동 완성 목록에 다른 제안 및 스니펫과 함께 나열됩니다.

![내장 Emmet HTML 지원](images/html/emmetsnippet.gif)

:::tip
유효한 약어에 대한 [Emmet 치트 시트](https://docs.emmet.io/cheat-sheet)의 HTML 섹션을 참조하세요.
:::

다른 언어와 함께 HTML Emmet 약어를 사용하려면, `setting(emmet.includeLanguages)` [설정](/docs/editor/settings.md)을 사용하여 Emmet 모드(예: `css`, `html`) 중 하나를 다른 언어와 연결할 수 있습니다. 이 설정은 [언어 식별자](/docs/languages/overview.md#language-identifier)를 사용하여 Emmet 지원 모드의 언어 ID와 연결합니다.

예를 들어, JavaScript 내에서 Emmet HTML 약어를 사용하려면:

```json
{
    "emmet.includeLanguages": {
        "javascript": "html"
     }
}
```

또한 [사용자 정의 스니펫](/docs/editor/userdefinedsnippets.md)도 지원합니다.

## HTML 사용자 정의 데이터 {#html-custom-data}

선언적 [사용자 정의 데이터 형식](https://github.com/microsoft/vscode-html-languageservice/blob/main/docs/customData.md)을 통해 VS Code의 HTML 지원을 확장할 수 있습니다. `setting(html.customData)`를 사용자 정의 데이터 형식을 따르는 JSON 파일 목록으로 설정하면, 새로운 HTML 태그, 속성 및 속성 값에 대한 VS Code의 이해도를 향상시킬 수 있습니다. 그러면 VS Code는 제공된 태그, 속성 및 속성 값에 대한 완성 및 호버 정보와 같은 언어 지원을 제공합니다.

사용자 정의 데이터 사용에 대한 자세한 내용은 [vscode-custom-data](https://github.com/microsoft/vscode-custom-data) 저장소를 참조하세요.

## HTML 확장 프로그램 {#html-extensions}

기능을 추가하기 위해 확장 프로그램을 설치하세요. **확장 프로그램** 화면 (`kb(workbench.view.extensions)`)로 이동하여 'html'을 입력하면 HTML 생성 및 편집에 도움이 되는 관련 확장 프로그램 목록을 확인할 수 있습니다.

<div class="marketplace-extensions-html-curated"></div>

:::tip
위의 확장 프로그램 타일을 클릭하여 설명 및 리뷰를 읽고 어떤 확장 프로그램이 가장 적합한지 결정하세요. [마켓플레이스](https://marketplace.visualstudio.com)에서 더 많은 정보를 확인하세요.
:::

## 다음 단계 {#next-steps}

다음에 대해 알아보세요:

* [CSS, SCSS 및 Less](/docs/languages/css.md) - VS Code는 Less 및 SCSS를 포함한 CSS에 대한 최우선 지원을 제공합니다.
* [Emmet](/docs/editor/emmet.md) - VS Code의 강력한 내장 Emmet 지원에 대해 알아보세요.
* [Emmet 공식 문서](https://docs.emmet.io/) - 웹 개발자를 위한 필수 도구 키트인 Emmet.

## 자주 묻는 질문 {#common-questions}

### VS Code에 HTML 미리보기가 있나요? {#does-vs-code-have-html-preview}

아니요, VS Code는 HTML 미리보기를 위한 내장 지원이 없지만, VS Code [마켓플레이스](https://marketplace.visualstudio.com/vscode)에서 사용할 수 있는 확장 프로그램이 있습니다. **Extensions** 화면 (`kb(workbench.view.extensions)`)를 열고 'live preview' 또는 'html preview'를 검색하여 사용 가능한 HTML 미리보기 확장 프로그램 목록을 확인하세요.

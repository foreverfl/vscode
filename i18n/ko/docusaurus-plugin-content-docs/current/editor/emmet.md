---
Order: 18
Area: editor
TOCTitle: Emmet
ContentId: baf4717c-ea52-486e-9ea3-7bf1c4134dad
PageTitle: Visual Studio Code에서의 Emmet
DateApproved: 03/05/2025
MetaDescription: Visual Studio Code에서 Emmet 축약어 사용하기.
sidebar_label: Emmet
---

# Visual Studio Code에서 Emmet {#emmet-in-visual-studio-code}

[Emmet](https://emmet.io/) 스니펫 및 확장 기능에 대한 지원이 Visual Studio Code에 기본적으로 내장되어 있으며, **확장 프로그램이 필요하지 않습니다**. [Emmet 2.0](https://code.visualstudio.com/blogs/2017/08/07/emmet-2.0)은 [Emmet 작업](https://docs.emmet.io/actions/)의 대부분을 지원하며, [Emmet 약어 및 스니펫](https://docs.emmet.io/cheat-sheet/)을 확장할 수 있습니다.

## Emmet 약어 및 스니펫 확장 방법 {#how-to-expand-emmet-abbreviations-and-snippets}

Emmet 약어 및 스니펫 확장은 기본적으로 `html`, `haml`, `pug`, `slim`, `jsx`, `xml`, `xsl`, `css`, `scss`, `sass`, `less` 및 `stylus` 파일에서 활성화되어 있으며, 위의 언어 중 하나에서 상속받는 언어인 `handlebars` 및 `php`에서도 사용할 수 있습니다.

![제안/자동 완성 목록에서의 Emmet](images/emmet/emmet.gif)

Emmet 약어를 입력하기 시작하면 제안 목록에 약어가 표시됩니다. 제안 문서 플라이아웃이 열려 있으면 입력하는 동안 확장의 미리보기를 볼 수 있습니다. 스타일시트 파일에 있는 경우, 확장된 약어는 다른 CSS 제안과 함께 제안 목록에 정렬되어 표시됩니다.

### Emmet 확장을 위한 Tab 사용 {#using-tab-for-emmet-expansions}

Emmet 약어를 확장하기 위해 `kbstyle(Tab)` 키를 사용하려면 다음 설정을 추가하세요:

```json
"emmet.triggerExpansionOnTab": true
```

이 설정은 텍스트가 Emmet 약어가 아닐 때 `kbstyle(Tab)` 키를 들여쓰기에 사용할 수 있게 합니다.

### 빠른 제안이 비활성화된 경우 Emmet 사용 {#emmet-when-quicksuggestions-are-disabled}

`setting(editor.quickSuggestions)` [설정](/docs/editor/settings.md)을 비활성화한 경우, 입력할 때 제안이 표시되지 않습니다. `kb(editor.action.triggerSuggest)`를 눌러 수동으로 제안을 트리거할 수 있으며 미리보기를 볼 수 있습니다.

### 제안에서 Emmet 비활성화 {#disable-emmet-in-suggestions}

제안에서 Emmet 약어를 전혀 보고 싶지 않다면 다음 설정을 사용하세요:

```json
"emmet.showExpandedAbbreviation": "never"
```

여전히 **Emmet: Expand Abbreviation** 명령을 사용하여 약어를 확장할 수 있습니다. 또한 명령 ID `editor.emmet.action.expandAbbreviation`에 키보드 단축키를 바인딩할 수도 있습니다.

### Emmet 제안 순서 {#emmet-suggestion-ordering}

Emmet 제안이 항상 제안 목록의 상단에 표시되도록 하려면 다음 설정을 추가하세요:

```json
"emmet.showSuggestionsAsSnippets": true,
"editor.snippetSuggestions": "top"
```

## 다른 파일 유형에서의 Emmet 약어 {#emmet-abbreviations-in-other-file-types}

기본적으로 사용할 수 없는 파일 유형에서 Emmet 약어 확장을 활성화하려면 `setting(emmet.includeLanguages)` 설정을 사용하세요. 매핑의 양쪽에 [언어 식별자](/docs/languages/identifiers.md)를 사용해야 하며, 오른쪽은 Emmet 지원 언어의 언어 식별자가 되어야 합니다(위 목록 참조).

예를 들어:

```json
"emmet.includeLanguages": {
  "javascript": "javascriptreact",
  "razor": "html",
  "plaintext": "pug"
}
```

Emmet은 이러한 새로운 언어에 대한 지식이 없으므로, HTML/CSS가 아닌 컨텍스트에서 Emmet 제안이 나타날 수 있습니다. 이를 피하려면 다음 설정을 사용할 수 있습니다.

```json
"emmet.showExpandedAbbreviation": "inMarkupAndStylesheetFilesOnly"
```

> **참고:** 이전에 `setting(emmet.syntaxProfiles)`를 사용하여 새로운 파일 유형을 매핑한 경우, VS Code 1.15 이후부터는 `setting(emmet.includeLanguages)` 설정을 사용해야 합니다. `setting(emmet.syntaxProfiles)`는 [최종 출력 사용자 정의](https://docs.emmet.io/customization/syntax-profiles)만을 위한 것입니다.

## 다중 커서에서의 Emmet 사용 {#emmet-with-multi-cursors}

다중 커서에서도 대부분의 Emmet 작업을 사용할 수 있습니다:

![다중 커서에서의 Emmet](images/emmet/emmet-multi-cursor.gif)

## 필터 사용 {#using-filters}

필터는 확장된 약어를 편집기에 출력하기 전에 수정하는 특별한 후처리기입니다. 필터를 사용하는 방법은 두 가지가 있습니다. `setting(emmet.syntaxProfiles)` 설정을 통해 전역적으로 사용하거나 현재 약어에서 직접 사용할 수 있습니다.

아래는 HTML 파일의 모든 약어에 대해 `bem` 필터를 적용하기 위해 `setting(emmet.syntaxProfiles)` 설정을 사용하는 첫 번째 접근 방식의 예입니다:

```json
"emmet.syntaxProfiles": {
  "html": {
    "filters": "bem"
  }
}
```

현재 약어에 대한 필터를 제공하려면 약어에 필터를 추가하세요. 예를 들어, `div#page|c`는 `div#page` 약어에 `comment` 필터를 적용합니다.

### BEM 필터 (bem) {#bem-filter-bem}

[Block Element Modifier](http://getbem.com/) (BEM) 방식으로 HTML을 작성하는 경우, `bem` 필터는 매우 유용합니다. `bem` 필터 사용 방법에 대한 자세한 내용은 [Emmet의 BEM 필터](https://docs.emmet.io/filters/bem/)를 참조하세요.

이 필터는 [Emmet Preferences](https://docs.emmet.io/customization/preferences/)에 문서화된 대로 `bem.elementSeparator` 및 `bem.modifierSeparator` 기본 설정을 사용하여 사용자 정의할 수 있습니다.

### 주석 필터 (c) {#comment-filter-c}

이 필터는 중요한 태그 주위에 주석을 추가합니다. 기본적으로 "중요한 태그"는 id 및/또는 class 속성이 있는 태그입니다.

예를 들어 `div>div#page>p.title+p|c`는 다음과 같이 확장됩니다:

```xml
<div>
    <div id="page">
        <p class="title"></p>
        <!-- /.title -->
        <p></p>
    </div>
    <!-- /#page -->
</div>
```

이 필터는 [Emmet Preferences](https://docs.emmet.io/customization/preferences/)에 문서화된 대로 `filter.commentTrigger`, `filter.commentAfter` 및 `filter.commentBefore` 기본 설정을 사용하여 사용자 정의할 수 있습니다.

`filter.commentAfter` 기본 설정의 형식은 VS Code Emmet 2.0에서 다릅니다.

예를 들어, 이전에는:

```json
"emmet.preferences": {
  "filter.commentAfter": "\n<!-- /<%= attr('id', '#') %><%= attr('class', '.') %> -->"
}
```

VS Code에서는 더 간단하게:

```json
"emmet.preferences": {
  "filter.commentAfter": "\n<!-- /[#ID][.CLASS] -->"
}
```

### 트림 필터 (t) {#trim-filter-t}

이 필터는 **Emmet: Wrap with Abbreviation** 명령에 대한 약어를 제공할 때만 적용됩니다. 이는 [포장된 줄에서 줄 표시 제거](https://docs.emmet.io/actions/wrap-with-abbreviation/#removing-list-markers)합니다.

## 사용자 정의 Emmet 스니펫 사용 {#using-custom-emmet-snippets}

사용자 정의 Emmet 스니펫은 `snippets.json`이라는 JSON 파일에 정의해야 합니다. `setting(emmet.extensionsPath)` 설정에는 이 파일이 포함된 디렉토리의 경로가 있어야 합니다.

아래는 이 `snippets.json` 파일의 내용 예시입니다.

```json
{
    "html": {
        "snippets": {
            "ull": "ul>li[id=$\{1\}
 class=$\{2\}
]*2{ html, pug, haml 및 slim에서 작동합니다 }",
            "oll": "<ol><li id=$\{1\}
 class=$\{2\}
> html에서만 작동합니다 </ol>",
            "ran": "{ 일반 텍스트를 중괄호로 감쌉니다 }"
        }
    },
    "css": {
        "snippets": {
            "cb": "color: black",
            "bsd": "border: 1px solid $\{1:red\}
",
            "ls": "list-style: $\{1\}
"
        }
    }
}
```

Emmet 2.0에서 `snippets.json` 파일을 통한 사용자 정의 스니펫 작성은 이전 방식과 몇 가지 차이가 있습니다:

| 주제                     | 이전 Emmet                                                                    | Emmet 2.0                                                                                                                                                                                                                                                |
| ------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 스니펫 vs 약어           | `snippets` 및 `abbreviations`라는 두 개의 별도 속성을 지원               | 두 개가 `snippets`라는 단일 속성으로 통합되었습니다. 기본 [HTML 스니펫](https://github.com/emmetio/emmet/blob/master/src/snippets/html.json) 및 [CSS 스니펫](https://github.com/emmetio/emmet/blob/master/src/snippets/css.json)을 참조하세요. |
| CSS 스니펫 이름          | `:`를 포함할 수 있음                                                         | 스니펫 이름을 정의할 때 `:`를 사용하지 마세요. 이는 Emmet이 주어진 약어를 스니펫 중 하나와 모호하게 일치시키기 위해 속성 이름과 값을 구분하는 데 사용됩니다.                                                                                |
| CSS 스니펫 값            | `;`로 끝날 수 있음                                                            | 스니펫 값의 끝에 `;`를 추가하지 마세요. Emmet은 파일 유형(css/less/scss vs sass/stylus) 또는 `css.propertyEnd`, `sass.propertyEnd`, `stylus.propertyEnd`에 설정된 Emmet 기본 설정에 따라 후행 `;`를 추가합니다.                                |
| 커서 위치                | `$\{cursor\}`                                                               | `$\{1\}`와 같은 텍스트메이트 구문만 사용하여 탭 정지 및 커서 위치를 지정합니다. |

### HTML Emmet 스니펫 {#html-emmet-snippets}

HTML 사용자 정의 스니펫은 `haml` 또는 `pug`와 같은 다른 마크업 형식에도 적용됩니다. 스니펫 값이 약어이고 실제 HTML이 아닌 경우, 언어 유형에 따라 올바른 출력을 얻기 위해 적절한 변환이 적용될 수 있습니다.

예를 들어, 목록 항목이 있는 순서 없는 목록의 경우, 스니펫 값이 `ul>li`인 경우, `html`, `haml`, `pug` 또는 `slim`에서 동일한 스니펫을 사용할 수 있지만, 스니펫 값이 `<ul><li></li></ul>`인 경우, 이는 `html` 파일에서만 작동합니다.

일반 텍스트에 대한 스니펫을 원한다면, 텍스트를 `{}`로 감싸세요.

### CSS Emmet 스니펫 {#css-emmet-snippets}

CSS Emmet 스니펫의 값은 완전한 속성 이름과 값 쌍이어야 합니다.

CSS 사용자 정의 스니펫은 `scss`, `less` 또는 `sass`와 같은 다른 스타일시트 형식에도 적용됩니다. 따라서 스니펫 값의 끝에 후행 `;`를 포함하지 마세요. Emmet은 언어에 따라 필요에 따라 추가합니다.

스니펫 이름에 `:`를 사용하지 마세요. `:`는 Emmet이 약어를 스니펫 중 하나와 모호하게 일치시키기 위해 속성 이름과 값을 구분하는 데 사용됩니다.

### 사용자 정의 스니펫에서의 탭 정지 및 커서 {#tab-stops-and-cursors-in-custom-snippets}

사용자 정의 Emmet 스니펫에서의 탭 정지 구문은 [Textmate 스니펫 구문](https://manual.macromates.com/en/snippets)을 따릅니다.

- 탭 정지에는 `$\{1\}
`, `$\{2\}
`를 사용하고, 자리 표시자가 있는 탭 정지에는 `$\{1:placeholder\}
`를 사용합니다.
- 이전에는 사용자 정의 Emmet 스니펫에서 커서 위치를 나타내기 위해 `|` 또는 `$\{cursor\}`를 사용했습니다. 이는 더 이상 지원되지 않습니다. 대신 `$\{1\}
`를 사용하세요.

## Emmet 구성 {#emmet-configuration}

아래는 VS Code에서 Emmet 경험을 사용자 정의하는 데 사용할 수 있는 Emmet [설정](/docs/editor/settings.md)입니다.

- `setting(emmet.includeLanguages)`

  이 설정을 사용하여 선택한 언어와 Emmet 지원 언어 간의 매핑을 추가하여 전자의 문법을 후자의 문법으로 사용할 수 있게 합니다. 매핑의 양쪽에 언어 ID를 사용해야 합니다.

  예를 들어:

  ```json
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "plaintext": "pug"
  }
  ```

- `setting(emmet.excludeLanguages)`

  Emmet 확장을 보고 싶지 않은 언어가 있는 경우, 이 설정에 언어 ID 문자열 배열을 추가하세요.

- `setting(emmet.syntaxProfiles)`

  [Emmet 출력 프로필 사용자 정의](https://docs.emmet.io/customization/syntax-profiles/#create-your-own-profile)를 참조하여 HTML 약어의 출력을 사용자 정의하는 방법을 알아보세요.

  예를 들어:

  ```json
  "emmet.syntaxProfiles": {
    "html": {
      "attr_quotes": "single"
    },
    "jsx": {
      "self_closing_tag": true
    }
  }
  ```

- `setting(emmet.variables)`

  Emmet 스니펫에서 사용하는 변수를 사용자 정의하세요.

  예를 들어:

  ```json
  "emmet.variables": {
    "lang": "de",
    "charset": "UTF-16"
  }
  ```

- `setting(emmet.showExpandedAbbreviation)`

  제안/완성 목록에 표시되는 Emmet 제안을 제어합니다.

  | 설정 값                    | 설명                                                                                                                                                                   |
  | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `never`                    | 어떤 언어에서도 제안 목록에 Emmet 약어를 표시하지 않습니다.                                                                                                       |
  | `inMarkupAndStylesheetFilesOnly` | 순수 마크업 및 스타일시트 기반 언어('html', 'pug', 'slim', 'haml', 'xml', 'xsl', 'css', 'scss', 'sass', 'less', 'stylus')에 대해서만 Emmet 제안을 표시합니다. |
  | `always`                   | 모든 Emmet 지원 모드와 `setting(emmet.includeLanguages)` 설정에 매핑된 언어에서 Emmet 제안을 표시합니다.                                                             |

  **참고:** `항상` 모드에서는 새로운 Emmet 구현이 컨텍스트 인식이 아닙니다. 예를 들어, JavaScript React 파일을 편집하는 경우, 마크업을 작성할 때뿐만 아니라 JavaScript를 작성할 때도 Emmet 제안을 받을 수 있습니다.

- `setting(emmet.showAbbreviationSuggestions)`

  가능한 Emmet 약어를 제안으로 표시합니다. 기본값은 `true`입니다.

  예를 들어, `li`를 입력하면 `link`, `link:css`, `link:favicon` 등 `li`로 시작하는 모든 Emmet 스니펫에 대한 제안을 받습니다. 이는 [Emmet 치트 시트](https://docs.emmet.io/cheat-sheet/)를 암기하지 않고는 존재를 몰랐던 Emmet 스니펫을 배우는 데 유용합니다.

  스타일시트에서는 적용되지 않거나 `setting(emmet.showExpandedAbbreviation)`가 `never`로 설정된 경우에는 적용되지 않습니다.

- `setting(emmet.extensionsPath)`

  사용자 정의 스니펫이 포함된 `snippets.json` 파일이 있는 디렉토리의 위치를 제공합니다.

- `setting(emmet.triggerExpansionOnTab)`

  Emmet 약어를 `kbstyle(Tab)` 키로 확장할 수 있도록 true로 설정하세요. 이 설정은 확장할 약어가 없을 때 적절한 들여쓰기를 제공하기 위해 사용됩니다.

- `setting(emmet.showSuggestionsAsSnippets)`

  `true`로 설정하면 Emmet 제안이 다른 스니펫과 함께 그룹화되어 `setting(editor.snippetSuggestions)` 설정에 따라 정렬됩니다. 이를 `true`로 설정하고 `setting(editor.snippetSuggestions)`를 `top`으로 설정하면 Emmet 제안이 항상 다른 제안 중에서 상단에 표시됩니다.

- `setting(emmet.preferences)`

  [Emmet Preferences](https://docs.emmet.io/customization/preferences/)에 문서화된 대로 Emmet을 사용자 정의하는 데 사용할 수 있습니다. 현재 지원되는 사용자 정의는 다음과 같습니다:

  - `css.propertyEnd`
  - `css.valueSeparator`
  - `sass.propertyEnd`
  - `sass.valueSeparator`
  - `stylus.propertyEnd`
  - `stylus.valueSeparator`
  - `css.unitAliases`
  - `css.intUnit`
  - `css.floatUnit`
  - `bem.elementSeparator`
  - `bem.modifierSeparator`
  - `filter.commentBefore`
  - `filter.commentTrigger`
  - `filter.commentAfter`
  - `format.noIndentTags`
  - `format.forceIndentationForTags`
  - `profile.allowCompactBoolean`
  - `css.fuzzySearchMinScore`

  `filter.commentAfter` 기본 설정의 형식은 Emmet 2.0에서 다르고 더 간단합니다.

  예를 들어, 이전 형식 대신

  ```json
  "emmet.preferences": {
    "filter.commentAfter": "\n<!-- /<%= attr('id', '#') %><%= attr('class', '.') %> -->"
  }
  ```

  다음과 같이 사용합니다.

  ```json
  "emmet.preferences": {
    "filter.commentAfter": "\n<!-- /[#ID][.CLASS] -->"
  }
  ```

  [Emmet Preferences](https://docs.emmet.io/customization/preferences/)에 문서화된 다른 기본 설정에 대한 지원이 필요하면 [기능 요청](https://github.com/microsoft/vscode/issues/new)을 제출하세요.

## 다음 단계 {#next-steps}

Emmet은 VS Code의 훌륭한 웹 개발자 기능 중 하나일 뿐입니다. 계속 읽어보세요:

- [HTML](/docs/languages/html.md) - VS Code는 HTML에 대해 IntelliSense, 닫는 태그 및 포맷팅을 지원합니다.
- [CSS](/docs/languages/css.md) - CSS, SCSS 및 Less에 대한 풍부한 지원을 제공합니다.

## 문제 해결 {#troubleshooting}

### 사용자 정의 태그가 제안 목록에서 확장되지 않음 {#custom-tags-do-not-get-expanded-in-the-suggestion-list}

`MyTag>YourTag` 또는 `MyTag.someclass`와 같은 표현식에서 사용자 정의 태그는 제안 목록에 표시됩니다. 그러나 `MyTag`와 같이 단독으로 사용하면 제안 목록에 나타나지 않습니다. 이는 모든 단어가 잠재적인 사용자 정의 태그이기 때문에 제안 목록의 소음을 피하기 위해 설계되었습니다.

다음 설정을 추가하여 탭을 사용하여 Emmet 약어를 확장할 수 있도록 하여 모든 경우에 사용자 정의 태그를 확장할 수 있습니다.

```json
"emmet.triggerExpansionOnTab": true
```

### `+`로 끝나는 HTML 스니펫이 작동하지 않음 {#my-html-snippets-ending-with-do-not-work}

`select+` 및 `ul+`와 같은 `+`로 끝나는 HTML 스니펫은 [Emmet 치트 시트](https://docs.emmet.io/cheat-sheet/)에서 지원되지 않습니다. 이는 Emmet 2.0의 알려진 문제입니다 [문제: emmetio/html-matcher#1](https://github.com/emmetio/html-matcher/issues/1). 이러한 시나리오에 대해 사용자 정의 [Emmet 스니펫](/docs/editor/emmet.md#using-custom-emmet-snippets)을 만드는 것이 우회 방법입니다.

### 약어가 확장되지 않음 {#abbreviations-are-failing-to-expand}

먼저, 사용자 정의 스니펫을 사용하고 있는지 확인하세요( `setting(emmet.extensionsPath)` 설정에서 `snippets.json` 파일이 선택되고 있는지 확인). 사용자 정의 스니펫의 형식은 VS Code 1.53 릴리스에서 변경되었습니다. 커서 위치를 나타내기 위해 `|`를 사용하는 대신 `$\{1\}
`, `$\{2\}
`와 같은 토큰을 사용하세요. `emmetio/emmet` 리포지토리의 [기본 CSS 스니펫 파일](https://github.com/emmetio/emmet/blob/master/snippets/css.json)에서 새로운 커서 위치 형식의 예를 확인할 수 있습니다.

약어가 여전히 확장되지 않는 경우:

- [내장 확장 프로그램](/docs/editor/extension-marketplace.md#extensions-view-filters)을 확인하여 Emmet이 비활성화되었는지 확인하세요.
- [명령 팔레트](/docs/getstarted/userinterface.md#command-palette)에서 **개발자: 확장 호스트 다시 시작**(`workbench.action.restartExtensionHost`) 명령을 실행하여 확장 호스트를 다시 시작해 보세요.

### [Emmet Preferences](https://docs.emmet.io/customization/preferences/)에 문서화된 모든 기본 설정을 어디에서 설정할 수 있나요? {#where-can-i-set-all-the-preferences-as-documented-in-emmet-preferenceshttpsdocsemmetiocustomizationpreferences}

`setting(emmet.preferences)` 설정을 사용하여 기본 설정을 설정할 수 있습니다. [Emmet Preferences](https://docs.emmet.io/customization/preferences/)에 문서화된 기본 설정의 하위 집합만 사용자 정의할 수 있습니다. [Emmet 구성](/docs/editor/emmet.md#emmet-configuration) 아래의 기본 설정 섹션을 읽어보세요.

### 팁과 요령이 있나요? {#any-tips-and-tricks}

물론입니다!

- CSS 약어에서 `:`를 사용할 때, 왼쪽 부분은 CSS 속성 이름과 모호하게 일치하는 데 사용되고 오른쪽 부분은 CSS 속성 값과 일치하는 데 사용됩니다. `pos:f`, `trf:rx`, `fw:b`와 같은 약어를 사용하여 이를 최대한 활용하세요.
- [Emmet 작업](https://docs.emmet.io/actions/)에 문서화된 다른 모든 Emmet 기능을 탐색하세요.
- 주저하지 말고 [사용자 정의 Emmet 스니펫](/docs/editor/emmet.md#using-custom-emmet-snippets)을 만드세요.
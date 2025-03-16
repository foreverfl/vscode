---
Order: 17
Area: editor
TOCTitle: 코드 조각
ContentId: 79CD9B45-97FF-48B1-8DD5-2555F56206A6
PageTitle: Visual Studio Code의 코드 조각
DateApproved: 03/05/2025
MetaDescription: Visual Studio Code에 코드 조각을 추가하는 것은 개인적으로 사용하거나 공개 확장 마켓플레이스에서 다른 사람과 공유하는 것이 쉽습니다. TextMate .tmSnippets 파일이 지원됩니다.
sidebar_label: 코드 조각
---

# Visual Studio Code의 코드 조각 {#snippets-in-visual-studio-code}

코드 조각은 반복되는 코드 패턴(예: 루프 또는 조건문)을 입력하는 것을 더 쉽게 만들어주는 템플릿입니다.

Visual Studio Code에서는 코드 조각이 IntelliSense(`kb(editor.action.triggerSuggest)`)에 다른 제안과 혼합되어 나타나며, 전용 코드 조각 선택기(**Insert Snippet** in the Command Palette)에서도 볼 수 있습니다. 탭 완전성도 지원됩니다: `"editor.tabCompletion": "on"`으로 활성화하고, **코드 조각 접두사**(트리거 텍스트)를 입력한 후 `kb(insertSnippet)`를 눌러 코드 조각을 삽입할 수 있습니다.

코드 조각 구문은 [TextMate 코드 조각 구문](https://manual.macromates.com/en/snippets)을 따르며, '보간된 셸 코드'와 `\u`의 사용은 지원되지 않습니다.

![ajax snippet](images/userdefinedsnippets/ajax-snippet.gif)

## 내장 코드 조각 {#built-in-snippets}

VS Code는 JavaScript, TypeScript, Markdown 및 PHP와 같은 여러 언어에 대한 내장 코드 조각을 제공합니다.

![builtin javascript snippet](images/userdefinedsnippets/builtin-javascript-snippets.png)

현재 파일의 언어에 대한 코드 조각 목록을 얻으려면 Command Palette에서 **Insert Snippet** 명령을 실행하여 사용할 수 있는 코드 조각을 확인할 수 있습니다. 그러나 이 목록에는 사용자가 정의한 코드 조각과 설치한 확장에서 제공하는 코드 조각도 포함된다는 점을 유의해야 합니다.

## 마켓플레이스에서 코드 조각 설치하기 {#install-snippets-from-the-marketplace}

많은 [확장 프로그램](/docs/editor/extension-marketplace.md)이 [VS Code 마켓플레이스](https://marketplace.visualstudio.com/vscode)에서 코드 조각을 포함하고 있습니다. 확장 보기(`kb(workbench.view.extensions)`)에서 `@category:"snippets"` 필터를 사용하여 코드 조각이 포함된 확장을 검색할 수 있습니다.

![Searching for extensions with snippets](images/userdefinedsnippets/category-snippets.png)

사용하고 싶은 확장을 찾으면 설치한 후 VS Code를 재시작하면 새로운 코드 조각을 사용할 수 있습니다.

## 나만의 코드 조각 만들기 {#create-your-own-snippets}

확장 프로그램 없이도 쉽게 나만의 코드 조각을 정의할 수 있습니다. 나만의 코드 조각을 만들거나 편집하려면 **File** > **Preferences**에서 **Configure Snippets**를 선택한 다음, 코드 조각이 나타날 언어([언어 식별자](/docs/languages/identifiers.md))를 선택하거나 모든 언어에 대해 나타나게 하려면 **New Global Snippets file** 옵션을 선택합니다. VS Code는 기본 코드 조각 파일의 생성 및 새로 고침을 관리합니다.

![snippet dropdown](images/userdefinedsnippets/snippet-dropdown.png)

코드 조각 파일은 JSON 형식으로 작성되며, C 스타일 주석을 지원하고 무제한의 코드 조각을 정의할 수 있습니다. 코드 조각은 동적 동작을 위한 대부분의 TextMate 구문을 지원하며, 삽입 컨텍스트에 따라 공백을 지능적으로 포맷하고 쉽게 여러 줄 편집을 허용합니다.

아래는 JavaScript의 `for` 루프 코드 조각 예시입니다:

```json
// 'Code/User/snippets/javascript.json' 파일 내
{
    "For Loop": {
        "prefix": [
          "for",
          "for-const"
        ],
        "body": [
          "for (const $\{2:element\}
 of $\{1:array\}
) {",
          "\t$0",
          "}"
        ],
        "description": "for 루프입니다."
    }
}
```

위 예시에서:

- "For Loop"는 코드 조각의 이름입니다. `description`이 제공되지 않으면 IntelliSense를 통해 표시됩니다.
- `prefix`는 IntelliSense에서 코드 조각을 표시하는 하나 이상의 트리거 단어를 정의합니다. 접두사에 대한 부분 문자열 일치가 수행되므로 이 경우 "fc"는 "for-const"와 일치할 수 있습니다.
- `body`는 삽입 시 여러 줄로 결합될 하나 이상의 내용 줄입니다. 줄 바꿈 및 내장 탭은 코드 조각이 삽입되는 컨텍스트에 따라 포맷됩니다.
- `description`은 IntelliSense에 표시되는 코드 조각의 선택적 설명입니다.

또한, 위 예시의 `body`에는 세 개의 자리 표시자(탐색 순서에 따라 나열됨)가 있습니다: `$\{1:array\}
`, `$\{2:element\}
`, 및 `$0`. `kb(jumpToNextSnippetPlaceholder)`를 사용하여 다음 자리 표시자로 빠르게 이동할 수 있으며, 이 시점에서 자리 표시자를 편집하거나 다음 자리 표시자로 이동할 수 있습니다. 콜론 `:` 뒤의 문자열(있는 경우)은 기본 텍스트로, 예를 들어 `$\{2:element\}
`의 경우 `element`입니다. 자리 표시자 탐색 순서는 1부터 시작하여 숫자가 오름차순으로 진행되며, 0은 항상 마지막에 오는 선택적 특수 케이스로, 지정된 위치에 커서를 두고 코드 조각 모드를 종료합니다.

### 파일 템플릿 코드 조각 {#file-template-snippets}

코드 조각이 파일의 내용을 채우거나 대체하는 용도라면 코드 조각 정의에 `isFileTemplate` 속성을 추가할 수 있습니다. 파일 템플릿 코드 조각은 새 파일이나 기존 파일에서 **Snippets: Populate File from Snippet** 명령을 실행할 때 드롭다운에 표시됩니다.

## 코드 조각 범위 {#snippet-scope}

코드 조각은 관련 코드 조각만 제안되도록 범위가 지정됩니다. 코드 조각은 다음 중 하나로 범위가 지정될 수 있습니다:

1. 코드 조각이 범위가 지정된 **언어**(모든 언어일 수 있음)
2. 코드 조각이 범위가 지정된 **프로젝트**(아마도 모든 프로젝트)

### 언어 코드 조각 범위 {#language-snippet-scope}

모든 코드 조각은 다음에 따라 하나, 여러 개 또는 모든("전역") 언어에 범위가 지정됩니다:

1. **언어** 코드 조각 파일에 정의된 경우
2. **전역** 코드 조각 파일에 정의된 경우

단일 언어 사용자 정의 코드 조각은 특정 언어의 코드 조각 파일(예: `javascript.json`)에 정의되며, **Snippets: Configure Snippets**를 통해 언어 식별자로 접근할 수 있습니다. 코드 조각은 정의된 언어를 편집할 때만 접근할 수 있습니다.

다중 언어 및 전역 사용자 정의 코드 조각은 모두 "전역" 코드 조각 파일(파일 접미사가 `.code-snippets`인 JSON)에 정의되며, **Snippets: Configure Snippets**를 통해 접근할 수 있습니다. 전역 코드 조각 파일에서 코드 조각 정의는 하나 이상의 [언어 식별자](/docs/languages/identifiers.md)를 사용하는 추가 `scope` 속성을 가질 수 있으며, 이는 코드 조각이 지정된 언어에만 사용 가능하게 합니다. `scope` 속성이 주어지지 않으면 전역 코드 조각은 **모든** 언어에서 사용 가능합니다.

대부분의 사용자 정의 코드 조각은 단일 언어에 범위가 지정되며, 따라서 언어별 코드 조각 파일에 정의됩니다.

### 프로젝트 코드 조각 범위 {#project-snippet-scope}

프로젝트에 범위가 지정된 전역 코드 조각 파일(JSON 형식으로 파일 접미사가 `.code-snippets`)도 가질 수 있습니다. 프로젝트 폴더 코드 조각은 **Snippets: Configure Snippets** 드롭다운 메뉴에서 **New Snippets file for '\<folder-name\>'...** 옵션을 사용하여 생성되며, 프로젝트의 루트에 `.vscode` 폴더에 위치합니다. 프로젝트 코드 조각 파일은 해당 프로젝트에서 작업하는 모든 사용자와 코드 조각을 공유하는 데 유용합니다. 프로젝트 폴더 코드 조각은 전역 코드 조각과 유사하며 `scope` 속성을 통해 특정 언어에 범위가 지정될 수 있습니다.

## 코드 조각 구문 {#snippet-syntax}

코드 조각의 `body`는 커서와 삽입되는 텍스트를 제어하기 위해 특별한 구조를 사용할 수 있습니다. 다음은 지원되는 기능과 그 구문입니다:

### 탭 정지 {#tabstops}

탭 정지를 사용하면 코드 조각 내에서 편집기 커서를 이동할 수 있습니다. `$1`, `$2`를 사용하여 커서 위치를 지정합니다. 숫자는 탭 정지가 방문될 순서를 나타내며, `$0`은 최종 커서 위치를 나타냅니다. 동일한 탭 정자의 여러 발생은 연결되어 동기화됩니다.

### 자리 표시자 {#placeholders}

자리 표시자는 값이 있는 탭 정지로, 예를 들어 `$\{1:foo\}
`와 같습니다. 자리 표시자 텍스트는 삽입되고 선택되어 쉽게 변경할 수 있도록 합니다. 자리 표시자는 중첩될 수 있으며, 예를 들어 `$\{1:another ${2:placeholder\}
}`와 같습니다.

### 선택 {#choice}

자리 표시자는 값을 선택할 수 있습니다. 구문은 파이프 문자로 둘러싸인 값의 쉼표로 구분된 열거입니다. 예를 들어 `$\{1|one,two,three|\}
`. 코드 조각이 삽입되고 자리 표시자가 선택되면, 선택 사항이 사용자에게 값 중 하나를 선택하라는 메시지를 표시합니다.

### 변수 {#variables}

`$name` 또는 `$\{name:default\}
`를 사용하여 변수의 값을 삽입할 수 있습니다. 변수가 설정되지 않은 경우 기본값 또는 빈 문자열이 삽입됩니다. 변수가 알려지지 않은 경우(즉, 이름이 정의되지 않은 경우) 변수의 이름이 삽입되고 자리 표시자로 변환됩니다.

다음 변수를 사용할 수 있습니다:

- `TM_SELECTED_TEXT` 현재 선택된 텍스트 또는 빈 문자열
- `TM_CURRENT_LINE` 현재 줄의 내용
- `TM_CURRENT_WORD` 커서 아래의 단어 내용 또는 빈 문자열
- `TM_LINE_INDEX` 0 기반 줄 번호
- `TM_LINE_NUMBER` 1 기반 줄 번호
- `TM_FILENAME` 현재 문서의 파일 이름
- `TM_FILENAME_BASE` 현재 문서의 파일 이름(확장자 제외)
- `TM_DIRECTORY` 현재 문서의 디렉토리
- `TM_FILEPATH` 현재 문서의 전체 파일 경로
- `RELATIVE_FILEPATH` 현재 문서의 상대 경로(열린 작업 공간 또는 폴더 기준)
- `CLIPBOARD` 클립보드의 내용
- `WORKSPACE_NAME` 열린 작업 공간 또는 폴더의 이름
- `WORKSPACE_FOLDER` 열린 작업 공간 또는 폴더의 경로
- `CURSOR_INDEX` 0 기반 커서 번호
- `CURSOR_NUMBER` 1 기반 커서 번호

현재 날짜와 시간을 삽입하려면:

- `CURRENT_YEAR` 현재 연도
- `CURRENT_YEAR_SHORT` 현재 연도의 마지막 두 자리
- `CURRENT_MONTH` 두 자리로 표시된 월(예: '02')
- `CURRENT_MONTH_NAME` 월의 전체 이름(예: 'July')
- `CURRENT_MONTH_NAME_SHORT` 월의 짧은 이름(예: 'Jul')
- `CURRENT_DATE` 두 자리로 표시된 일(예: '08')
- `CURRENT_DAY_NAME` 요일의 이름(예: 'Monday')
- `CURRENT_DAY_NAME_SHORT` 요일의 짧은 이름(예: 'Mon')
- `CURRENT_HOUR` 24시간 형식의 현재 시각
- `CURRENT_MINUTE` 두 자리로 표시된 현재 분
- `CURRENT_SECOND` 두 자리로 표시된 현재 초
- `CURRENT_SECONDS_UNIX` 유닉스 시대 이후의 초 수
- `CURRENT_TIMEZONE_OFFSET` 현재 UTC 시간대 오프셋(`+HH:MM` 또는 `-HH:MM`, 예: `-07:00`)

무작위 값을 삽입하려면:

- `RANDOM` 6자리 무작위 10진수
- `RANDOM_HEX` 6자리 무작위 16진수
- `UUID` 버전 4 UUID

현재 언어에 맞춰 줄 또는 블록 주석을 삽입하려면:

- `BLOCK_COMMENT_START` 예시 출력: PHP에서 `/*` 또는 HTML에서 `<!--`
- `BLOCK_COMMENT_END` 예시 출력: PHP에서 `*/` 또는 HTML에서 `-->`
- `LINE_COMMENT` 예시 출력: PHP에서 `//`

아래의 코드 조각은 JavaScript 파일에 `/* Hello World */`를 삽입하고 HTML 파일에 `<!-- Hello World -->`를 삽입합니다:

```json
{
  "hello": {
    "scope": "javascript,html",
    "prefix": "hello",
    "body": "$BLOCK_COMMENT_START Hello World $BLOCK_COMMENT_END"
  }
}
```

### 변수 변환 {#variable-transforms}

변환을 사용하면 삽입되기 전에 변수의 값을 수정할 수 있습니다. 변환의 정의는 세 부분으로 구성됩니다:

1. 변수의 값에 대해 일치하는 정규 표현식 또는 변수를 해결할 수 없는 경우 빈 문자열.
2. 정규 표현식에서 일치하는 그룹을 참조할 수 있는 "형식 문자열". 형식 문자열은 조건부 삽입 및 간단한 수정을 허용합니다.
3. 정규 표현식에 전달되는 옵션.

다음 예시는 현재 파일의 이름에서 끝을 제외한 부분을 삽입합니다. 즉, `foo.txt`에서 `foo`로 변환됩니다.

```
$\{TM_FILENAME/(.*)\\..+$/$1/\}

  |           |         |  |
  |           |         |  |-> 옵션 없음
  |           |         |
  |           |         |-> 첫 번째 캡처 그룹의 내용을 참조합니다.
  |           |
  |           |-> 최종 `.suffix` 이전의 모든 내용을 캡처하는 정규 표현식입니다.
  |
  |-> 파일 이름으로 해결됩니다.
```

### 자리 표시자 변환 {#placeholder-transform}

변수 변환과 유사하게, 자리 표시자의 변환은 다음 탭 정지로 이동할 때 자리 표시자에 삽입된 텍스트를 변경할 수 있습니다. 삽입된 텍스트는 정규 표현식과 일치하며, 일치하는 항목은 지정된 대체 형식 텍스트로 교체됩니다. 자리 표시자의 모든 발생은 첫 번째 자리 표시자의 값을 사용하여 독립적으로 자신의 변환을 정의할 수 있습니다. 자리 표시자 변환의 형식은 변수 변환과 동일합니다.

### 변환 예시 {#transform-examples}

예시는 코드 조각 본문 내에서 나타나는 방식으로 이중 따옴표로 표시되어 특정 문자를 이중으로 이스케이프해야 함을 설명합니다. 샘플 변환 및 결과 출력은 파일 이름 `example-123.456-TEST.js`에 대한 것입니다.

| 예시 | 출력 | 설명 |
| ------- | ------ | ----------- |

`"$\{TM_FILENAME/[\\.]/_/\}
"` | `example-123_456-TEST.js` | 첫 번째 `.`을 `_`로 교체
`"$\{TM_FILENAME/[\\.-]/_/g\}
"` | `example_123_456_TEST_js` | 각 `.` 또는 `-`을 `_`로 교체
`"$\{TM_FILENAME/(.*)/${1:/upcase\}
/}"` | `EXAMPLE-123.456-TEST.JS` | 모두 대문자로 변경
`"$\{TM_FILENAME/[^0-9a-z]//gi\}
"` | `example123456TESTjs` | 비알파벳 숫자 제거

### 문법 {#grammar}

아래는 코드 조각에 대한 EBNF([확장된 바쿠스-노르 형식](https://en.wikipedia.org/wiki/Extended_Backus-Naur_form))입니다. `\`(백슬래시)를 사용하여 `$`, `}`, 및 `\`를 이스케이프할 수 있습니다. 선택 요소 내에서는 백슬래시가 쉼표 및 파이프 문자를 이스케이프합니다. 이스케이프해야 하는 문자만 이스케이프할 수 있으므로, 이러한 구조 내에서는 `$`를 이스케이프하지 않아야 하며, 선택 구조 내에서는 `$` 또는 `}`를 이스케이프하지 않아야 합니다.

```
any         ::= tabstop | placeholder | choice | variable | text
tabstop     ::= '$' int
                | '$\{' int '\}
'
                | '$\{' int  transform '\}
'
placeholder ::= '$\{' int ':' any '\}
'
choice      ::= '$\{' int '|' text (',' text)* '|\}
'
variable    ::= '$' var | '$\{' var '\}
'
                | '$\{' var ':' any '\}
'
                | '$\{' var transform '\}
'
transform   ::= '/' regex '/' (format | text)+ '/' options
format      ::= '$' int | '$\{' int '\}
'
                | '$\{' int ':' '/upcase' | '/downcase' | '/capitalize' | '/camelcase' | '/pascalcase' '\}
'
                | '$\{' int ':+' if '\}
'
                | '$\{' int ':?' if ':' else '\}
'
                | '$\{' int ':-' else '\}
' | '$\{' int ':' else '\}
'
regex       ::= JavaScript Regular Expression value (ctor-string)
options     ::= JavaScript Regular Expression option (ctor-options)
var         ::= [_a-zA-Z] [_a-zA-Z0-9]*
int         ::= [0-9]+
text        ::= .*
if          ::= text
else        ::= text
```

## TextMate 코드 조각 사용하기 {#using-textmate-snippets}

기존의 TextMate 코드 조각(.tmSnippets)을 VS Code와 함께 사용할 수도 있습니다. [TextMate 코드 조각 사용하기](/api/language-extensions/snippet-guide.md#using-textmate-snippets) 주제를 참조하여 자세히 알아보세요.

## 코드 조각에 키보드 단축키 할당하기 {#assign-keyboard-shortcuts-to-snippets}

특정 코드 조각을 삽입하기 위해 사용자 정의 [키보드 단축키](/docs/editor/keybindings.md)를 만들 수 있습니다. 모든 키보드 단축키를 정의하는 `keybindings.json` 파일(**Preferences: Open Keyboard Shortcuts File**)을 열고, `"snippet"`을 추가 인수로 전달하여 키보드 단축키를 추가합니다:

```json
{
  "key": "cmd+k 1",
  "command": "editor.action.insertSnippet",
  "when": "editorTextFocus",
  "args": {
    "snippet": "console.log($1)$0"
  }
}
```

이 키보드 단축키는 **Insert Snippet** 명령을 호출하지만, 코드 조각을 선택하라는 메시지를 표시하는 대신 제공된 코드 조각을 삽입합니다. 사용자 정의 [키 바인딩](/docs/editor/keybindings.md)은 일반적으로 키보드 단축키, 명령 ID 및 키보드 단축키가 활성화될 때의 선택적 [when 절 컨텍스트](/docs/editor/keybindings.md#when-clause-contexts)로 정의합니다.

또한, 인라인으로 코드 조각을 정의하는 대신 `langId` 및 `name` 인수를 사용하여 기존 코드 조각을 참조할 수 있습니다. `langId` 인수는 `name`으로 표시된 코드 조각이 삽입될 언어를 선택합니다. 예를 들어 아래 샘플은 `csharp` 파일에 사용할 수 있는 `myFavSnippet`을 선택합니다.

```json
{
  "key": "cmd+k 1",
  "command": "editor.action.insertSnippet",
  "when": "editorTextFocus",
  "args": {
    "langId": "csharp",
    "name": "myFavSnippet"
  }
}
```

## 다음 단계 {#next-steps}

- [명령줄](/docs/editor/command-line.md) - VS Code는 파일을 열거나 비교하고 확장을 설치하는 풍부한 명령줄 인터페이스를 제공합니다.
- [확장 API](/api) - VS Code를 확장하는 다른 방법에 대해 알아보세요.
- [코드 조각 가이드](/api/language-extensions/snippet-guide.md) - VS Code에서 사용할 코드 조각을 패키징할 수 있습니다.

## 자주 묻는 질문 {#common-questions}

### .tmSnippet 파일의 기존 TextMate 코드 조각을 사용하고 싶다면 어떻게 하나요? {#what-if-i-want-to-use-existing-textmate-snippets-from-a-tmsnippet-file}

VS Code에서 사용할 TextMate 코드 조각 파일을 쉽게 패키징할 수 있습니다. [TextMate 코드 조각 사용하기](/api/language-extensions/snippet-guide.md#using-textmate-snippets)에서 자세한 내용을 확인하세요.

### 코드 조각에 변수를 붙여넣으려면 어떻게 하나요? {#how-do-i-have-a-snippet-place-a-variable-in-the-pasted-script}

붙여넣은 스크립트에 변수를 포함하려면 `$`의 `$variable` 이름을 이스케이프하여 코드 조각 확장 단계에서 구문 분석되지 않도록 해야 합니다.

```json
"VariableSnippet":{
    "prefix": "_Var",
    "body": "\\$MyVar = 2",
    "description": "변수를 $ 접두사와 함께 스크립트에 배치하는 기본 코드 조각입니다."
  }
```

이 결과 붙여넣은 코드 조각은 다음과 같습니다:

```
$MyVar = 2
```

### IntelliSense에서 코드 조각을 제거할 수 있나요? {#can-i-remove-snippets-from-intellisense}

네, **Insert Snippet** 명령 드롭다운에서 코드 조각 항목 오른쪽에 있는 **Hide from IntelliSense** 버튼을 선택하여 특정 코드 조각이 IntelliSense(완성 목록)에 표시되지 않도록 숨길 수 있습니다.

![Hide from IntelliSense button in Insert Snippet dropdown](images/userdefinedsnippets/hide-from-intellisense.png)

여전히 **Insert Snippet** 명령으로 코드 조각을 선택할 수 있지만, 숨겨진 코드 조각은 IntelliSense에 표시되지 않습니다.
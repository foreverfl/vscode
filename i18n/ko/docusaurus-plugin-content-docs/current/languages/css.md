---
Order: 5
Area: languages
TOCTitle: CSS, SCSS 및 Less
ContentId: 039882CB-B5C4-46BD-A8D5-DB24A5E82706
PageTitle: Visual Studio Code에서 CSS, SCSS 및 Less 지원
DateApproved: 03/05/2025
MetaDescription: Visual Studio Code가 CSS, SCSS 및 Less 개발을 어떻게 지원하는지 알아보세요.
---
# CSS, SCSS 및 Less {#css-scss-and-less}

Visual Studio Code는 CSS `.css`, SCSS `.scss` 및 Less `.less` 스타일 시트를 편집하는 데 내장된 지원을 제공합니다. 또한, 더 많은 기능을 위해 확장을 설치할 수 있습니다.

<div class="marketplace-extensions-css-curated"></div>

> **팁:** 위의 확장 타일을 클릭하여 설명과 리뷰를 읽고 어떤 확장이 가장 적합한지 결정하세요. [마켓플레이스](https://marketplace.visualstudio.com)에서 더 많은 정보를 확인하세요.

## IntelliSense {#intellisense}

VS Code는 선택자, 속성 및 값에 대한 지원을 제공합니다. `kb(editor.action.triggerSuggest)`를 사용하여 컨텍스트에 맞는 옵션 목록을 가져올 수 있습니다.

![CSS에서의 IntelliSense](images/css/intellisense.png)

제안에는 속성을 지원하는 브라우저 목록을 포함한 광범위한 문서가 포함되어 있습니다. 선택된 항목의 전체 설명 텍스트를 보려면 `kb(toggleSuggestionDetails)`를 사용하세요.

## 구문 강조 및 색상 미리보기 {#syntax-coloring-color-preview}

입력하는 동안 구문 강조와 색상에 대한 컨텍스트 미리보기가 제공됩니다.

![구문 및 색상](images/css/color.png)

색상 미리보기를 클릭하면 색조, 채도 및 불투명도를 구성할 수 있는 통합 색상 선택기가 실행됩니다.

![CSS에서의 색상 선택기](images/css/css-color-picker.png)

> **팁:** 선택기 상단의 색상 문자열을 클릭하여 다양한 색상 모드 간 전환을 트리거할 수 있습니다.

다음 [설정](/docs/editor/settings.md)을 설정하여 VS Code의 색상 미리보기를 숨길 수 있습니다:

```json
"editor.colorDecorators": false
```

CSS, Less 및 SCSS에 대해서만 비활성화하려면 다음을 사용하세요:

```json
"[css]": {
    "editor.colorDecorators": false
}
```

## 코드 접기 {#folding}

라인 번호와 라인 시작 사이의 접기 아이콘을 사용하여 소스 코드의 영역을 접을 수 있습니다. 접기 영역은 모든 선언(예: 규칙 선언) 및 소스 코드의 멀티라인 주석에 대해 사용할 수 있습니다.

또한 다음 영역 마커를 사용하여 접기 영역을 정의할 수 있습니다:
CSS/SCSS/Less에서는 `/*#region*/` 및 `/*#endregion*/`, SCSS/Less에서는 `// #region` 및 `// #endregion`을 사용합니다.

CSS, Less 및 SCSS에 대해 들여쓰기를 기반으로 한 접기로 전환하려면 다음을 사용하세요:

```json
"[css]": {
    "editor.foldingStrategy": "indentation"
},
```

## Emmet 스니펫 {#emmet-snippets}

[Emmet 약어 지원](/docs/editor/emmet.md)은 VS Code에 내장되어 있으며, 제안은 편집기 자동 완성 목록에서 다른 제안 및 스니펫과 함께 나열됩니다.

>**팁:** 유효한 약어에 대한 [Emmet 치트 시트](https://docs.emmet.io/cheat-sheet)의 CSS 섹션을 참조하세요.

VS Code는 또한 [사용자 정의 스니펫](/docs/editor/userdefinedsnippets.md)을 지원합니다.

## 구문 검증 및 린팅 {#syntax-verification-linting}

CSS 버전 \<\= 2.1, Sass 버전 \<\= 3.2 및 Less 버전 \<\= 2.3에 대한 지원이 있습니다.

>**참고:** 해당하는 `.validate` 사용자 또는 작업 공간 [설정](/docs/editor/settings.md)을 false로 설정하여 VS Code의 기본 CSS, Sass 또는 Less 검증을 비활성화할 수 있습니다.
>```json
>"css.validate": false
>```

## 파일 내 기호로 이동 {#go-to-symbol-in-file}

`kb(workbench.action.gotoSymbol)`를 눌러 현재 파일에서 관련 CSS 기호로 빠르게 이동할 수 있습니다.

## 호버 {#hovers}

선택자나 속성 위에 마우스를 올리면 CSS 규칙과 일치하는 HTML 스니펫이 제공됩니다.

![CSS에서의 호버](images/css/hover.png)

## 선언으로 이동 및 참조 찾기 {#go-to-declaration-and-find-references}

이는 동일한 파일 내의 Sass 및 Less 변수에 대해 지원됩니다. [CSS 변수](https://developer.mozilla.org/docs/Web/CSS/Using_CSS_variables)는 [초안 표준 제안](https://drafts.csswg.org/css-variables/)에 따라 지원됩니다.

CSS, SCSS 및 Less에서 `@import` 및 `url()` 링크에 대한 정의로 점프할 수 있습니다.

## CSS 사용자 정의 데이터 {#css-custom-data}

선언적 [사용자 정의 데이터 형식](https://github.com/microsoft/vscode-css-languageservice/blob/main/docs/customData.md)을 통해 VS Code의 CSS 지원을 확장할 수 있습니다. `setting(css.customData)`를 사용자 정의 데이터 형식을 따르는 JSON 파일 목록으로 설정하면 새로운 CSS 속성, at-directives, 의사 클래스 및 의사 요소에 대한 VS Code의 이해를 향상시킬 수 있습니다. 그러면 VS Code는 제공된 속성, at-directives, 의사 클래스 및 의사 요소에 대한 완성 및 호버 정보를 제공하는 언어 지원을 제공합니다.

사용자 정의 데이터 사용에 대한 자세한 내용은 [vscode-custom-data](https://github.com/microsoft/vscode-custom-data) 리포지토리를 참조하세요.

## 포맷팅 {#formatting}

CSS 언어 기능 확장도 포맷터를 제공합니다. 포맷터는 CSS, LESS 및 SCSS와 함께 작동합니다. 이는 [JS Beautify 라이브러리](https://github.com/beautify-web/js-beautify)에 의해 구현되며 다음과 같은 설정이 포함되어 있습니다:

* `setting(css.format.enable)` - 기본 CSS 포맷터를 활성화/비활성화합니다.
* `setting(css.format.newlineBetweenRules)` - 규칙 세트를 빈 줄로 구분합니다.
* `setting(css.format.newlineBetweenSelectors)` - 선택자를 새 줄로 구분합니다.
* `setting(css.format.spaceAroundSelectorSeparator)` - 선택자 구분자 '>', '+', '~' 주위에 공백 문자를 보장합니다 (예: `a > b`).

이 동일한 설정은 `less` 및 `scss`에도 존재합니다.

## Sass 및 Less를 CSS로 변환하기 {#transpiling-sass-and-less-into-css}

VS Code는 통합된 [작업 실행기](/docs/editor/tasks.md)를 통해 Sass 및 Less 변환기와 통합할 수 있습니다. 이를 사용하여 `.scss` 또는 `.less` 파일을 `.css` 파일로 변환할 수 있습니다. 간단한 Sass/Less 파일을 변환하는 과정을 살펴보겠습니다.

### 1단계: Sass 또는 Less 변환기 설치 {#step-1-install-a-sass-or-less-transpiler}

이 안내서에서는 [sass](https://www.npmjs.com/package/sass) 또는 [less](https://www.npmjs.com/package/less) Node.js 모듈을 사용하겠습니다.

>**참고:** [Node.js](https://nodejs.org) 및 [npm](https://www.npmjs.com/) 패키지 관리자가 설치되어 있지 않은 경우, 이 안내서를 위해 설치해야 합니다. [플랫폼에 맞는 Node.js 설치](https://nodejs.org/en/download/)를 하세요. Node 패키지 관리자(npm)는 Node.js 배포판에 포함되어 있습니다. `npm`이 PATH에 있도록 새 터미널(명령 프롬프트)을 열어야 합니다.

```bash
npm install -g sass less
```

### 2단계: 간단한 Sass 또는 Less 파일 생성 {#step-2-create-a-simple-sass-or-less-file}

빈 폴더에서 VS Code를 열고 `styles.scss` 또는 `styles.less` 파일을 생성합니다. 해당 파일에 다음 코드를 입력하세요:

```scss
$padding: 6px;

nav {
  ul {
    margin: 0;
    padding: $padding;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: $padding 12px;
    text-decoration: none;
  }
}
```

위 파일의 Less 버전에서는 `$padding`을 `@padding`으로 변경하면 됩니다.

>**참고:** 이것은 매우 간단한 예제이므로 소스 코드가 두 파일 유형 간 거의 동일합니다. 더 복잡한 시나리오에서는 구문과 구조가 훨씬 다를 것입니다.

### 3단계: tasks.json 생성 {#step-3-create-tasksjson}

다음 단계는 작업 구성을 설정하는 것입니다. 이를 위해 **터미널** > **작업 구성**을 실행하고 **템플릿에서 tasks.json 파일 만들기**를 클릭합니다. 표시되는 선택 대화 상자에서 **기타**를 선택합니다.

이렇게 하면 작업 공간의 `.vscode` 폴더에 샘플 `tasks.json` 파일이 생성됩니다. 파일의 초기 버전에는 임의의 명령을 실행하는 예제가 포함되어 있습니다. 우리는 Sass/Less 변환을 위해 해당 구성을 수정할 것입니다:

```json
// Sass 구성
{
    // tasks.json 형식에 대한 문서는 https://go.microsoft.com/fwlink/?LinkId=733558를 참조하세요.
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Sass Compile",
            "type": "shell",
            "command": "sass styles.scss styles.css",
            "group": "build"
        }
    ]
}
```

```json
// Less 구성
{
    // tasks.json 형식에 대한 문서는 https://go.microsoft.com/fwlink/?LinkId=733558를 참조하세요.
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Less Compile",
            "type": "shell",
            "command": "lessc styles.less styles.css",
            "group": "build"
        }
    ]
}
```

### 4단계: 빌드 작업 실행 {#step-4-run-the-build-task}

이 파일에 유일한 명령이므로 `kb(workbench.action.tasks.build)`를 눌러 실행할 수 있습니다 (**빌드 작업 실행**). 샘플 Sass/Less 파일에는 컴파일 문제가 없어야 하므로 작업을 실행하면 해당하는 `styles.css` 파일이 생성됩니다.

더 복잡한 환경에서는 빌드 작업이 여러 개 있을 수 있으므로 `kb(workbench.action.tasks.build)`를 눌러 작업을 실행한 후 실행할 작업을 선택하라는 메시지가 표시됩니다. 또한 컴파일 문제(오류 및 경고)에 대한 출력을 스캔할 수 있습니다. 컴파일러에 따라 오류 및 경고를 스캔하기 위해 목록에서 적절한 항목을 선택하세요. 출력을 스캔하고 싶지 않다면 제공된 목록에서 **빌드 출력을 스캔하지 않음**을 선택하세요.

이 시점에서 파일 목록에 `styles.css`라는 추가 파일이 표시되어야 합니다.

작업을 기본 빌드 작업으로 설정하려면 전역 **터미널** 메뉴에서 **기본 빌드 작업 구성**을 실행하고 제공된 목록에서 해당 **Sass** 또는 **Less** 작업을 선택하세요.

>**참고:** 빌드가 실패하거나 "디렉토리를 컴파일할 때 출력 디렉토리를 지정해야 합니다"와 같은 오류 메시지가 표시되면 `tasks.json`의 파일 이름이 디스크의 파일 이름과 일치하는지 확인하세요. 명령줄에서 `sass styles.scss styles.css`를 실행하여 빌드를 테스트할 수 있습니다.

## Sass/Less 컴파일 자동화 {#automating-sassless-compilation}

Sass/Less 컴파일을 VS Code로 자동화하는 방법을 살펴보겠습니다. 이전과 동일한 작업 실행기 통합을 사용할 수 있지만 몇 가지 수정이 필요합니다.

### 1단계: Gulp 및 일부 플러그인 설치 {#step-1-install-gulp-and-some-plug-ins}

Sass/Less 컴파일을 자동화하는 작업을 생성하기 위해 [Gulp](https://gulpjs.com/)를 사용할 것입니다. 또한 작업을 조금 더 쉽게 만들기 위해 [gulp-sass](https://www.npmjs.com/package/gulp-sass) 플러그인을 사용할 것입니다. Less 플러그인은 [gulp-less](https://www.npmjs.com/package/gulp-less)입니다.

Gulp를 전역(`-g` 스위치) 및 로컬로 설치해야 합니다:

```bash
npm install -g gulp
npm install gulp gulp-sass gulp-less
```

> **참고:** `gulp-sass` 및 `gulp-less`는 이전에 사용했던 `sass` 및 `lessc` 모듈을 위한 Gulp 플러그인입니다. 사용할 수 있는 다른 Gulp Sass 및 Less 플러그인도 많이 있으며, Grunt용 플러그인도 있습니다.

터미널에서 `gulp -v`를 입력하여 Gulp 설치가 성공했는지 테스트할 수 있습니다. 전역(CLI) 및 로컬 설치 모두에 대한 버전이 표시되어야 합니다.

### 2단계: 간단한 Gulp 작업 생성 {#step-2-create-a-simple-gulp-task}

이전과 동일한 폴더에서 VS Code를 열고 (`styles.scss`/`styles.less` 및 `.vscode` 폴더 아래의 `tasks.json` 포함) 루트에 `gulpfile.js`를 생성합니다.

`gulpfile.js` 파일에 다음 코드를 입력하세요:

```javascript
// Sass 구성
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(cb) {
    gulp.src('*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }));
    cb();
});

gulp.task('default', gulp.series('sass', function(cb) {
    gulp.watch('*.scss', gulp.series('sass'));
    cb();
}));
```

```javascript
// Less 구성
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function(cb) {
    gulp.src('*.less')
        .pipe(less())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }));
    cb();
});

gulp.task('default', gulp.series('less', function(cb) {
    gulp.watch('*.less', gulp.series('less'));
    cb();
}));
```

여기서 무슨 일이 일어나고 있나요?

1. 우리의 `default` Gulp 작업은 시작할 때 `sass` 또는 `less` 작업을 한 번 실행합니다.
2. 그런 다음 VS Code에서 열려 있는 현재 폴더의 루트에 있는 모든 SCSS/Less 파일의 변경 사항을 감시합니다.
3. 변경된 SCSS/Less 파일 세트를 가져와 해당 컴파일러(예: `gulp-sass`, `gulp-less`)를 통해 실행합니다.
4. 이제 원래 SCSS/Less 파일 이름에 각각 해당하는 CSS 파일 세트를 갖게 됩니다. 이러한 파일은 동일한 디렉토리에 저장됩니다.

### 3단계: Gulp 기본 작업 실행 {#step-3-run-the-gulp-default-task}

VS Code와의 작업 통합을 완료하기 위해 이전에 만든 기본 Gulp 작업을 실행하도록 작업 구성을 수정해야 합니다. `tasks.json` 파일을 삭제하거나 `"version": "2.0.0"` 속성만 남기고 비워둘 수 있습니다. 이제 전역 **터미널** 메뉴에서 **작업 실행**을 실행하세요. Gulp 파일에 정의된 작업 목록이 표시되는 선택기가 나타납니다. **gulp: default**를 선택하여 작업을 시작하세요. 컴파일 문제에 대한 출력을 스캔할 수 있습니다. 컴파일러에 따라 오류 및 경고를 스캔하기 위해 목록에서 적절한 항목을 선택하세요. 출력을 스캔하고 싶지 않다면 제공된 목록에서 **빌드 출력을 스캔하지 않음**을 선택하세요. 이 시점에서 Less 또는 SASS 파일을 생성하거나 수정하면 해당 CSS 파일이 생성되거나 저장 시 변경 사항이 반영됩니다. [자동 저장](/docs/editor/codebasics.md#save-auto-save)을 활성화하여 작업을 더욱 간소화할 수 있습니다.

**gulp: default** 작업을 `kb(workbench.action.tasks.build)`를 눌렀을 때 실행되는 기본 빌드 작업으로 설정하려면 전역 **터미널** 메뉴에서 **기본 빌드 작업 구성**을 실행하고 제공된 목록에서 **gulp: default**를 선택하세요.

### 4단계: Gulp 기본 작업 종료 {#step-4-terminate-the-gulp-default-task}

**gulp: default** 작업은 백그라운드에서 실행되며 Sass/Less 파일의 변경 사항을 감시합니다. 작업을 중지하려면 전역 **터미널** 메뉴에서 **작업 종료**를 사용할 수 있습니다.

## CSS, SCSS 및 Less 설정 사용자 정의 {#customizing-css-scss-and-less-settings}

다음 린트 경고를 [사용자 및 작업 공간 설정](/docs/editor/settings.md)으로 구성할 수 있습니다.

`validate` 설정을 사용하면 내장된 검증을 끌 수 있습니다. 다른 린터를 사용하려는 경우 이렇게 할 수 있습니다.

Id|설명|기본값
---|------------|----
css.validate | 모든 CSS 검증을 활성화 또는 비활성화합니다 | true
less.validate | 모든 Less 검증을 활성화 또는 비활성화합니다 | true
scss.validate | 모든 SCSS 검증을 활성화 또는 비활성화합니다 | true

CSS에 대한 옵션을 구성하려면 ID 앞에 `css.lint.`를 사용하세요. SCSS 및 Less의 경우 `scss.lint.` 및 `less.lint.`를 사용하세요.

설정을 `warning` 또는 `error`로 설정하면 린트 검사를 활성화하고, `ignore`를 사용하여 비활성화할 수 있습니다. 린트 검사는 입력하는 동안 수행됩니다.

Id|설명|기본값
---|------------|----
validate | 모든 검증을 활성화 또는 비활성화합니다 | true
compatibleVendorPrefixes | 공급자 특정 접두사가 있는 속성을 사용할 때(예: `-webkit-transition`), 모든 다른 공급자 특정 속성도 포함해야 합니다(예: `-moz-transition`, `-ms-transition`, `-o-transition`) | ignore
vendorPrefix | 공급자 특정 접두사가 있는 속성을 사용할 때(예: `-webkit-transition`), 표준 속성이 존재하는 경우에도 포함해야 합니다(예: `transition`) | warning
duplicateProperties | 동일한 규칙 세트에서 중복 속성에 대해 경고합니다 | ignore
emptyRules | 빈 규칙 세트에 대해 경고합니다 | warning
importStatement | `import` 문을 사용할 때 경고합니다. import 문은 순차적으로 로드되므로 웹 페이지 성능에 부정적인 영향을 미칩니다 | ignore
boxModel | `padding` 또는 `border`를 사용할 때 `width` 또는 `height`를 사용하지 마세요 | ignore
universalSelector | 느리고 피해야 하는 것으로 알려진 보편 선택자 `*`를 사용할 때 경고합니다 | ignore
zeroUnits | 단위가 있는 0(예: `0em`)을 사용할 때 경고합니다. 0에는 단위가 필요하지 않습니다. | ignore
fontFaceProperties | `src` 및 `font-family` 속성을 정의하지 않고 `@font-face` 규칙을 사용할 때 경고합니다 | warning
hexColorLength | 세 개 또는 여섯 개의 16진수 숫자로 구성되지 않은 16진수 숫자를 사용할 때 경고합니다 | error
argumentsInColorFunction | 색상 함수에서 잘못된 매개변수 수가 있을 때 경고합니다(예: `rgb`) | error
unknownProperties | 알려지지 않은 속성을 사용할 때 경고합니다 | warning
ieHack | IE 해크 `*propertyName` 또는 `_propertyName`를 사용할 때 경고합니다 | ignore
unknownVendorSpecificProperties | 알려지지 않은 공급자 특정 속성을 사용할 때 경고합니다 | ignore
propertyIgnoredDueToDisplay | 표시로 인해 무시되는 속성을 사용할 때 경고합니다. 예를 들어, `display: inline`에서는 `width`, `height`, `margin-top`, `margin-bottom`, `float` 속성이 효과가 없습니다. | warning
important | `!important`를 사용할 때 경고합니다. 이는 전체 CSS의 특수성이 통제 불능 상태가 되었음을 나타내며 리팩토링이 필요합니다. | ignore
float | `float`를 사용할 때 경고합니다. 플로트는 레이아웃의 한 측면이 변경될 경우 쉽게 깨질 수 있는 취약한 CSS를 초래합니다. | ignore
idSelector | 선택자에 ID `#id`를 사용할 때 경고합니다. 선택자는 ID를 포함해서는 안 되며, 이러한 규칙은 HTML과 너무 밀접하게 결합되어 있습니다. | ignore

## 다음 단계 {#next-steps}

다음에 대해 알아보세요:

* [작업 구성](/docs/editor/tasks.md) - SCSS 및 Less를 CSS로 변환하는 데 도움이 되는 작업을 자세히 알아보세요.
* [기본 편집](/docs/editor/codebasics.md) - 강력한 VS Code 편집기에 대해 알아보세요.
* [코드 탐색](/docs/editor/editingevolved.md) - 소스 코드를 빠르게 탐색하세요.
* [HTML](/docs/languages/html.md) - CSS는 시작에 불과하며, HTML도 VS Code에서 잘 지원됩니다.

## 자주 묻는 질문 {#common-questions}

### VS Code에서 색상 선택기를 제공하나요? {#does-vs-code-provide-a-color-picker}

네, CSS 색상 참조 위에 마우스를 올리면 색상 선택기가 표시됩니다.

### 들여쓰기 기반 Sass 구문(.sass)에 대한 지원이 있나요? {#is-there-support-for-the-indentation-based-sass-syntax-sass}

아니요, 그러나 마켓플레이스에는 들여쓰기 스타일의 Sass를 지원하는 여러 확장이 있습니다. 예를 들어, Robin Bentley가 처음 만든 [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented) 확장이 있으며, 현재 Leonard Grosoli가 유지 관리하고 있습니다.
---
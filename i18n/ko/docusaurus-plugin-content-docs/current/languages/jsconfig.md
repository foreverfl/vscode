---
Order:
Area: languages
TOCTitle: 부록 - jsconfig.json
ContentId: 201cd81d-523c-4f62-b1f5-ed26c091657b
PageTitle: jsconfig.json 참고 문서
DateApproved: 03/05/2025
MetaDescription: jsconfig.json 참고 문서를 확인하세요.
sidebar_label: jsconfig.json
---
# jsconfig.json {#jsconfigjson}

## jsconfig.json이란 무엇인가요? {#what-is-jsconfigjson}

디렉토리에 `jsconfig.json` 파일이 존재하면 해당 디렉토리가 JavaScript 프로젝트의 루트임을 나타냅니다. `jsconfig.json` 파일은 루트 파일과 [JavaScript 언어 서비스](https://github.com/microsoft/TypeScript/wiki/JavaScript-Language-Service-in-Visual-Studio)에서 제공하는 기능에 대한 옵션을 지정합니다.

> **팁:** JavaScript를 사용하지 않는 경우 `jsconfig.json`에 대해 걱정할 필요가 없습니다.

> **팁:** `jsconfig.json`은 TypeScript의 구성 파일인 [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)의 자손입니다. `jsconfig.json`은 `"allowJs"` 속성이 `true`로 설정된 `tsconfig.json`입니다.

## 왜 jsconfig.json 파일이 필요할까요? {#why-do-i-need-a-jsconfigjson-file}

Visual Studio Code의 JavaScript 지원은 두 가지 모드에서 실행될 수 있습니다:

* **파일 범위 - jsconfig.json 없음**: 이 모드에서는 Visual Studio Code에서 열린 JavaScript 파일이 독립적인 단위로 취급됩니다. 파일 `a.js`가 파일 `b.ts`를 명시적으로 참조하지 않는 한(예: `import` 또는 **CommonJS** [모듈](https://wiki.commonjs.org/wiki/Modules/1.0) 사용), 두 파일 간에 공통 프로젝트 컨텍스트가 없습니다.

* **명시적 프로젝트 - jsconfig.json 있음**: JavaScript 프로젝트는 `jsconfig.json` 파일을 통해 정의됩니다. 디렉토리에 이러한 파일이 존재하면 해당 디렉토리가 JavaScript 프로젝트의 루트임을 나타냅니다. 파일 자체는 선택적으로 프로젝트에 속하는 파일, 프로젝트에서 제외할 파일 및 컴파일러 옵션을 나열할 수 있습니다(아래 참조).

작업 공간에 프로젝트 컨텍스트를 정의하는 `jsconfig.json` 파일이 있으면 JavaScript 경험이 향상됩니다. 이러한 이유로 새 작업 공간에서 JavaScript 파일을 열 때 `jsconfig.json` 파일을 생성하라는 힌트를 제공합니다.

### jsconfig.json의 위치 {#location-of-jsconfigjson}

우리 웹사이트의 클라이언트 측 코드 부분을 JavaScript 프로젝트로 정의하기 위해 `jsconfig.json` 파일을 생성합니다. 아래와 같이 JavaScript 코드의 루트에 파일을 배치합니다.

![jsconfig setup](images/javascript/jsconfig_setup.png)

더 복잡한 프로젝트에서는 작업 공간 내에 여러 개의 `jsconfig.json` 파일을 정의할 수 있습니다. 이렇게 하면 한 프로젝트의 코드가 다른 프로젝트의 코드에 대한 IntelliSense로 제안되지 않도록 할 수 있습니다. 아래 그림은 `client` 및 `server` 폴더가 있는 프로젝트를 보여주며, 두 개의 별도의 JavaScript 프로젝트를 나타냅니다.

![multiple jsconfigs](images/javascript/complex_jsconfig_setup.png)

## 예제 {#examples}

기본적으로 JavaScript 언어 서비스는 JavaScript 프로젝트의 모든 파일을 분석하고 IntelliSense를 제공합니다. 적절한 IntelliSense를 제공하기 위해 포함하거나 제외할 파일을 지정해야 합니다.

### `"exclude"` 속성 사용하기 {#using-the-exclude-property}

`exclude` 속성( [glob 패턴](/docs/editor/glob-patterns.md))은 언어 서비스에 어떤 파일이 소스 코드의 일부가 아닌지를 알려줍니다. 이는 성능을 높게 유지하는 데 도움이 됩니다. IntelliSense가 느린 경우 `exclude` 목록에 폴더를 추가하세요(느려짐을 감지하면 VS Code가 이를 제안합니다).

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

> **팁:** 빌드 프로세스에 의해 생성된 파일(예: `dist` 디렉토리)은 `exclude`해야 합니다. 이러한 파일은 제안이 두 번 나타나게 하고 IntelliSense를 느리게 만듭니다.

### `"include"` 속성 사용하기 {#using-the-include-property}

또는 `include` 속성( [glob 패턴](/docs/editor/glob-patterns.md))을 사용하여 프로젝트의 파일을 명시적으로 설정할 수 있습니다. `include` 속성이 없으면 기본적으로 포함된 디렉토리와 하위 디렉토리의 모든 파일이 포함됩니다. `include` 속성이 지정되면 해당 파일만 포함됩니다. 다음은 명시적 `include` 속성이 있는 예입니다.

```json
{
    "compilerOptions": {
        "module": "CommonJS",
        "target": "ES6"
    },
    "include": [
        "src/**/*"
    ]
}
```

> **팁:** `exclude` 및 `include`의 파일 경로는 `jsconfig.json`의 위치를 기준으로 상대적입니다.

## jsconfig 옵션 {#jsconfig-options}

아래는 JavaScript 언어 지원을 구성하기 위한 `jsconfig` `"compilerOptions"`입니다.

> **팁:** `compilerOptions`에 혼동하지 마세요. JavaScript에는 실제 컴파일이 필요하지 않습니다. 이 속성은 `jsconfig.json`이 TypeScript를 컴파일하는 데 사용되는 `tsconfig.json`의 자손이기 때문에 존재합니다.

옵션  | 설명
----------------|-----
`noLib` | 기본 라이브러리 파일(lib.d.ts)을 포함하지 않습니다.
`target`| 사용할 기본 라이브러리(lib.d.ts)를 지정합니다. 값은 "ES3", "ES5", "ES6", "ES2015", "ES2016", "ES2017", "ES2018", "ES2019", "ES2020", "ES2021", "ES2022", "ES2023", "ESNext"입니다.
`module` | 모듈 코드를 생성할 때 사용할 모듈 시스템을 지정합니다. 값은 "AMD", "CommonJS", "ES2015", "ES2020", "ES2022", "ES6", "Node16", "NodeNext", "ESNext", "None", "System", "UMD"입니다.
`moduleResolution` | 가져오기 위해 모듈이 어떻게 해결되는지를 지정합니다. 값은 "Node", "Classic", "Node16", "NodeNext", "Bundler"입니다.
`checkJs` | JavaScript 파일에 대한 타입 검사를 활성화합니다.
`experimentalDecorators`| 제안된 ES 데코레이터에 대한 실험적 지원을 활성화합니다.
`allowSyntheticDefaultImports`| 기본 내보내기가 없는 모듈에서 기본 가져오기를 허용합니다. 이는 코드 방출에는 영향을 미치지 않으며, 단지 타입 검사에만 영향을 미칩니다.
`baseUrl`| 비상대적 모듈 이름을 해결하기 위한 기본 디렉토리입니다.
`paths`| baseUrl 옵션에 상대적으로 계산될 경로 매핑을 지정합니다.

사용 가능한 `compilerOptions`에 대한 자세한 내용은 [TypeScript compilerOptions 문서](https://www.typescriptlang.org/tsconfig#compilerOptions)를 참조하세요.

## webpack 별칭 사용하기 {#using-webpack-aliases}

IntelliSense가 webpack 별칭과 함께 작동하려면 `paths` 키를 [glob 패턴](/docs/editor/glob-patterns.md)로 지정해야 합니다.

예를 들어, 별칭 'ClientApp'에 대해:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "ClientApp/*": ["./ClientApp/*"]
    }
  }
}
```

그리고 별칭을 사용하려면

```js
import Something from 'ClientApp/foo'
```

## 모범 사례 {#best-practices}

가능한 경우 프로젝트의 소스 코드에 포함되지 않은 JavaScript 파일이 있는 폴더는 제외해야 합니다.

>**팁:** 작업 공간에 `jsconfig.json`이 없는 경우, VS Code는 기본적으로 `node_modules` 폴더를 제외합니다.

아래는 일반적인 프로젝트 구성 요소와 제외하는 것이 권장되는 설치 폴더를 매핑한 표입니다:

구성 요소 | 제외할 폴더
----------|-----------
`node` | `node_modules` 폴더 제외
`webpack`, `webpack-dev-server` | 콘텐츠 폴더 제외, 예: `dist`.
`bower` | `bower_components` 폴더 제외
`ember` | `tmp` 및 `temp` 폴더 제외
`jspm` | `jspm_packages` 폴더 제외

JavaScript 프로젝트가 너무 커지고 성능이 느려지면, 종종 `node_modules`와 같은 라이브러리 폴더 때문입니다. VS Code가 프로젝트가 너무 커졌다고 감지하면 `exclude` 목록을 편집하라는 메시지를 표시합니다.
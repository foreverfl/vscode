---
Order: 5
Area: nodejs
TOCTitle: 브라우저 디버깅
ContentId: d0e271da-0372-4ab9-a2ab-b7add855bd5a
PageTitle: Visual Studio Code를 사용하여 브라우저 앱 디버깅
DateApproved: 12/11/2024
MetaDescription: Visual Studio Code 편집기에는 브라우저 디버깅 지원이 포함되어 있습니다. 중단점 설정, 단계별 실행, 변수 검사 등을 수행할 수 있습니다.
MetaSocialImage: ../editor/images/debugging/debugging-social.png
---

# VS Code에서 브라우저 디버깅 {#browser-debugging-in-vs-code}

Visual Studio Code에는 Edge 및 Chrome용 내장 디버거가 포함되어 있습니다. 시작하는 방법은 몇 가지가 있습니다.

- URL을 디버그하기 위해 [링크 열기](#open-link-command) 명령을 사용합니다.
- [JavaScript 디버그 터미널](/docs/nodejs/nodejs-debugging.md#javascript-debug-terminal)에서 링크를 클릭합니다.
- 앱과 함께 브라우저를 실행하기 위해 [Launch 구성](#launch-configuration)을 사용합니다.

또한 [React](/docs/nodejs/reactjs-tutorial), [Angular](/docs/nodejs/angular-tutorial), [Vue](/docs/nodejs/vuejs-tutorial) 및 기타 디버깅 [레시피](/docs/nodejs/debugging-recipes)를 시작하는 데 도움이 되는 자세한 안내서도 있습니다.

## 링크 열기 명령 {#open-link-command}

웹페이지를 디버그하는 가장 간단한 방법은 명령 팔레트(`Ctrl+Shift+P`)에서 **Debug: Open Link** 명령을 사용하는 것입니다. 이 명령을 실행하면 열 URL을 입력하라는 메시지가 표시되며, 디버거가 연결됩니다.

![링크 열기 명령을 사용하여 URL에 연결](images/browser-debugging/debug-open-link.gif)

기본 브라우저가 Edge인 경우 VS Code는 이를 사용하여 페이지를 엽니다. 그렇지 않으면 시스템에서 Chrome 설치를 찾으려고 합니다.

## Launch 구성 {#launch-configuration}

Launch 구성은 VS Code에서 디버깅을 설정하는 전통적인 방법이며, 복잡한 애플리케이션을 실행하는 데 가장 유연성을 제공합니다.

이 섹션에서는 더 고급 디버깅 시나리오를 위한 구성 및 기능에 대해 자세히 설명합니다. Node.js [외부 코드 건너뛰기](/docs/nodejs/nodejs-debugging.md#skipping-uninteresting-code)에 대한 지침은 브라우저 기반 디버깅에도 적용됩니다.

:::note
VS Code를 처음 사용하는 경우 [디버깅](/docs/editor/debugging.md) 주제에서 일반적인 디버깅 기능 및 `launch.json` 구성 파일 생성에 대해 배울 수 있습니다.
:::

### 브라우저 실행 {#launching-browsers}

대부분의 경우, 웹페이지나 파일을 디버그하기 위해 브라우저의 새 인스턴스를 시작하고 싶을 것입니다. 이를 위해 `.vscode/launch.json`이라는 파일을 다음과 같이 생성할 수 있습니다:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "msedge",
      "request": "launch",
      "name": "내 멋진 앱 실행",
      "url": "http://localhost:8000"
    }
  ]
}
```

**Run and Debug** 보기에서 `F5` 키를 누르거나 **Start** 버튼을 클릭하면 `http://localhost:8000`이 디버그 모드에서 열립니다. Edge 대신 Chrome을 사용하려면 `msedge`를 `chrome`으로 바꾸십시오.

서버를 실행하지 않고 단일 파일을 디버그할 수도 있습니다. 예를 들어:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "msedge",
      "request": "launch",
      "name": "hello.html 실행",
      "file": "${workspaceFolder}/hello.html"
    }
  ]
}
```

### 브라우저에 연결 {#attaching-to-browsers}

실행 중인 브라우저에 연결하려면 특별한 디버그 모드에서 시작해야 합니다. 다음 명령을 사용하여 `edge.exe`를 Edge 또는 Chrome 바이너리 경로로 바꿔서 이를 수행할 수 있습니다:

```bash
edge.exe --remote-debugging-port=9222 --user-data-dir=remote-debug-profile
```

`--remote-debugging-port`를 설정하면 브라우저가 디버그 연결을 위해 해당 포트를 수신 대기하도록 지시합니다. 별도의 `--user-data-dir`을 설정하면 브라우저의 새 인스턴스가 열리게 됩니다. 이 플래그가 없으면 실행 중인 브라우저의 새 창이 열리고 디버그 모드에 들어가지 않습니다.

다음으로, `vscode/launch.json` 파일에 아래와 같이 새 섹션을 추가합니다:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "msedge",
      "request": "attach",
      "name": "브라우저에 연결",
      "port": 9222
    }
  ]
}
```

이제 **Run and Debug** 보기에서 `F5` 키를 누르거나 **시작** 버튼을 클릭하여 실행 중인 브라우저에 연결할 수 있습니다. 다른 컴퓨터에서 실행 중인 브라우저를 디버그하려면 `host` 속성을 추가할 수도 있습니다.

### Launch 구성 속성 {#launch-configuration-attributes}

디버깅 구성은 작업 공간의 `.vscode` 폴더에 있는 `launch.json` 파일에 저장됩니다. 디버깅 구성 파일의 생성 및 사용에 대한 소개는 일반 [디버깅](/docs/editor/debugging.md#launch-configurations) 문서에 있습니다. 애플리케이션과 함께 브라우저를 "실행"하거나, [디버그 모드에서 시작한](#attaching-to-browsers) 기존 브라우저에 "연결"할 수 있습니다.

아래는 브라우저 디버깅에 특정한 일반적인 `launch.json` 속성의 참조입니다. 전체 옵션 세트는 [vscode-js-debug 옵션](https://github.com/microsoft/vscode-js-debug/blob/main/OPTIONS.md) 문서에서 확인할 수 있습니다.

- `webRoot` - 소스 코드의 루트 디렉토리입니다. 대부분의 경우 기본적으로 `webRoot`는 작업 공간 폴더입니다. 이 옵션은 소스맵 해상도에 사용됩니다.
- `outFiles` - 생성된 JavaScript 파일을 찾기 위한 [글로벌 패턴](/docs/editor/glob-patterns.md)의 배열입니다. [소스 맵](#source-maps) 섹션을 참조하십시오.
- `smartStep` - 소스 파일과 매핑되지 않는 소스 코드를 자동으로 건너뛰려고 시도합니다. [스마트 스테핑](/docs/nodejs/nodejs-debugging.md#smart-stepping) 섹션을 참조하십시오.
- `skipFiles` - 이러한 [글로벌 패턴](/docs/editor/glob-patterns.md)으로 커버된 파일을 자동으로 건너뜁니다. [흥미롭지 않은 코드 건너뛰기](/docs/nodejs/nodejs-debugging.md#skipping-uninteresting-code) 섹션을 참조하십시오.
- `trace` - 진단 출력을 활성화합니다.

이 속성들은 `launch` 요청 유형의 Launch 구성에만 사용할 수 있습니다:

- `url` - 브라우저가 실행될 때 자동으로 열리는 URL입니다.
- `runtimeExecutable` - 사용할 브라우저 실행 파일의 절대 경로 또는 사용할 브라우저 버전입니다. 유효한 버전에는 `stable`(기본값), `canary`, `beta`, `dev`가 포함됩니다.
- `runtimeArgs` - 브라우저를 실행할 때 전달되는 선택적 인수입니다.

이 속성들은 `attach` 요청 유형의 Launch 구성에만 사용할 수 있습니다:

- `url` - 제공된 경우, VS Code는 이 URL을 가진 탭에 연결합니다. 제공되지 않으면 모든 브라우저 탭에 연결합니다.
- `port` - 사용할 디버그 포트입니다. [Node.js에 연결](#attaching-to-nodejs) 섹션을 참조하십시오.
- `address` - 디버그 포트의 TCP/IP 주소입니다. [브라우저에 연결](#attaching-to-browsers) 섹션을 참조하십시오.

## 웹어셈블리 디버깅 {#webassembly-debugging}

브라우저에서의 웹어셈블리 디버깅은 Node.js와 동일합니다. [웹어셈블리 디버깅에 대해 자세히 알아보십시오](/docs/nodejs/nodejs-debugging.md#debugging-webassembly).

## 소스 맵 {#source-maps}

VS Code의 JavaScript 디버거는 변환된 코드를 디버깅할 수 있는 소스 맵을 지원합니다. 예를 들어, TypeScript 코드는 JavaScript로 컴파일되며, 많은 웹 애플리케이션은 모든 JavaScript 파일을 함께 번들링합니다. 소스 맵은 디버거가 원본 코드와 브라우저에서 실행 중인 코드 간의 매핑을 파악하는 데 도움이 됩니다.

대부분의 현대적인 웹 애플리케이션 빌드 도구는 기본적으로 작동합니다. 그렇지 않은 경우, [Node.js의 소스맵](#source-maps) 섹션에는 브라우저 디버깅에도 적용되는 지침이 포함되어 있습니다.

### 소스 맵 로드 {#loading-source-maps}

각 JavaScript 파일은 URL 또는 상대 경로로 소스 맵을 참조할 수 있습니다. 웹 애플리케이션을 다룰 때, URL이 VS Code에서 실행 중인 디버거가 접근할 수 있는지 확인하고 싶을 것입니다. 접근할 수 없는 경우, **디버그 콘솔**에 어떤 소스 맵이 로드되지 않았는지, 그리고 그 이유를 설명하는 오류가 표시됩니다.

직접 접근할 수 없는 경우, VS Code는 브라우저의 네트워크 스택을 사용하여 소스 맵을 요청하려고 합니다. 이는 브라우저 세션에 필요한 쿠키 인증 상태나 네트워크 설정이 요청에 적용될 수 있는 기회를 제공합니다. 예를 들어, 소스 맵이 쿠키 인증으로 보호된 위치에 있는 경우, 브라우저 세션에 필요한 쿠키가 있는 경우에만 VS Code가 이를 로드할 수 있습니다.

## 다음 단계 {#next-steps}

- [디버깅](/docs/editor/debugging.md) - 일반적인 VS Code 디버깅 기능에 대해 읽어보십시오.
- [디버깅 레시피](/docs/nodejs/debugging-recipes.md) - 좋아하는 플랫폼에 대한 디버깅 설정을 확인하십시오.

---
Order:
Area: editor
TOCTitle: 변수 참조
ContentId: ff9cd4ea-e3f0-4170-9451-2f2ea2b909ea
PageTitle: Visual Studio Code 변수 참조
DateApproved: 12/11/2024
MetaDescription: Visual Studio Code 변수 치환 참조
---

# 변수 참조 {#variables-reference}

Visual Studio Code는 [디버깅](/docs/editor/debugging.md)과 [태스크](/docs/editor/tasks.md) 구성 파일 그리고 일부 선택된 설정에서 변수 치환을 지원합니다. 변수 치환은 `launch.json`과 `tasks.json` 파일의 일부 키와 값 문자열 내에서 **$\{variableName\}** 구문을 사용하여 지원됩니다.

## 사전 정의 변수 {#predefined-variables}

다음과 같은 미리 정의된 변수들이 지원됩니다:

- **$\{userHome\}** - 사용자의 홈 폴더 경로
- **$\{workspaceFolder\}** - VS Code에서 열린 폴더의 경로
- **$\{workspaceFolderBasename\}** - 슬래시(/)가 없는 VS Code에서 열린 폴더의 이름
- **$\{file\}** - 현재 열린 파일
- **$\{fileWorkspaceFolder\}** - 현재 열린 파일의 작업 공간 폴더
- **$\{relativeFile\}** - `workspaceFolder`를 기준으로 한 현재 열린 파일의 상대 경로
- **$\{relativeFileDirname\}** - `workspaceFolder`를 기준으로 한 현재 열린 파일의 디렉토리 이름
- **$\{fileBasename\}** - 현재 열린 파일의 기본 이름
- **$\{fileBasenameNoExtension\}** - 파일 확장자가 없는 현재 열린 파일의 기본 이름
- **$\{fileExtname\}** - 현재 열린 파일의 확장자
- **$\{fileDirname\}** - 현재 열린 파일의 폴더 경로
- **$\{fileDirnameBasename\}** - 현재 열린 파일의 폴더 이름
- **$\{cwd\}** - VS Code 시작 시 태스크 실행기의 현재 작업 디렉토리
- **$\{lineNumber\}** - 활성 파일에서 현재 선택된 줄 번호
- **$\{selectedText\}** - 활성 파일에서 현재 선택된 텍스트
- **$\{execPath\}** - 실행 중인 VS Code 실행 파일의 경로
- **$\{defaultBuildTask\}** - 기본 빌드 태스크의 이름
- **$\{pathSeparator\}** - 운영 체제가 파일 경로의 구성 요소를 구분하는 데 사용하는 문자
- **$\{/\}** - **$\{pathSeparator\}**의 단축어

### 사전 정의 변수 예시 {#predefined-variables-examples}

다음과 같은 요구 사항이 있다고 가정해봅시다:

1. 에디터에서 `/home/your-username/your-project/folder/file.ext` 위치의 파일이 열려있음;
2. `/home/your-username/your-project` 디렉토리가 루트 작업 공간으로 열려있음.

각 변수에 대해 다음과 같은 값을 갖게 됩니다:

- **$\{userHome}** - `/home/your-username`
- **$\{workspaceFolder}** - `/home/your-username/your-project`
- **$\{file}** - `/home/your-username/your-project/folder/file.ext`
- **$\{workspaceFolderBasename\}** - `your-project`
- **$\{fileWorkspaceFolder\}** - `/home/your-username/your-project`
- **$\{relativeFile\}** - `folder/file.ext`
- **$\{relativeFileDirname\}** - `folder`
- **$\{fileBasename\}** - `file.ext`
- **$\{fileBasenameNoExtension\}** - `file`
- **$\{fileDirname\}** - `/home/your-username/your-project/folder`
- **$\{fileExtname\}** - `.ext`
- **$\{lineNumber\}** - 커서의 줄 번호
- **$\{selectedText\}** - 코드 에디터에서 선택한 텍스트
- **$\{execPath\}** - Code.exe의 위치
- **$\{pathSeparator\}** - macOS나 linux에서는 `/`, Windows에서는 `\`

:::tip
`tasks.json`과 `launch.json`의 문자열 값 내에서 IntelliSense를 사용하여 미리 정의된 변수의 전체 목록을 얻을 수 있습니다.
:::

### 작업 공간 폴더별 범위를 가진 변수 {#variables-scoped-per-workspace-folder}

루트 폴더의 이름을 변수에 추가(콜론으로 구분)하면 작업 공간의 형제 루트 폴더에 접근할 수 있습니다. 루트 폴더 이름이 없으면 변수는 사용되는 동일한 폴더로 범위가 지정됩니다.

예를 들어, `Server`와 `Client` 폴더가 있는 다중 루트 작업 공간에서 `$\{workspaceFolder:Client\}
`는 `Client` 루트의 경로를 참조합니다.

## 환경 변수 {#environment-variables}

**$\{env:Name\}** 구문을 통해 환경 변수를 참조할 수도 있습니다(예: `$\{env:USERNAME\}
`).

```json
{
  "type": "node",
  "request": "launch",
  "name": "Launch Program",
  "program": "$\{workspaceFolder\}
/app.js",
  "cwd": "$\{workspaceFolder\}
",
  "args": ["$\{env:USERNAME\}
"]
}
```

## 구성 변수 {#configuration-variables}

**$\{config:Name\}** 구문을 통해 VS Code 설정("구성")을 참조할 수 있습니다(예: `$\{config:editor.fontSize\}
`).

## 명령 변수 {#command-variables}

위의 미리 정의된 변수로 충분하지 않은 경우, **$\{command:commandID\}** 구문을 통해 모든 VS Code 명령을 변수로 사용할 수 있습니다.

명령 변수는 명령 평가의 (문자열) 결과로 대체됩니다. 명령의 구현은 UI가 없는 간단한 계산부터 VS Code의 확장 API를 통해 사용할 수 있는 UI 기능을 기반으로 하는 복잡한 기능까지 다양할 수 있습니다. 명령이 문자열 이외의 것을 반환하면 변수 대체가 완료되지 않습니다. 명령 변수는 반드시 문자열을 반환해야 합니다.

이 기능의 예시는 VS Code의 Node.js 디버거 확장에서 찾을 수 있습니다. 이 확장은 모든 실행 중인 Node.js 프로세스 목록에서 단일 프로세스를 선택하기 위한 대화형 명령 `extension.pickNodeProcess`를 제공합니다. 이 명령은 선택된 프로세스의 프로세스 ID를 반환합니다. 이를 통해 다음과 같이 **프로세스 ID로 연결** 실행 구성에서 `extension.pickNodeProcess` 명령을 사용할 수 있습니다:

```json
{
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach by Process ID",
      "processId": "$\{command:extension.pickNodeProcess\}
"
    }
  ]
}
```

`launch.json` 구성에서 명령 변수를 사용할 때, 해당 `launch.json` 구성이 인수를 통해 명령에 객체로 전달됩니다. 이를 통해 명령이 호출될 때 특정 `launch.json` 구성의 컨텍스트와 매개변수를 알 수 있습니다.

## 입력 변수 {#input-variables}

명령 변수는 이미 강력하지만 특정 사용 사례에 대해 실행되는 명령을 구성하는 메커니즘이 부족합니다. 예를 들어, 일반적인 "사용자 입력 프롬프트"에 **프롬프트 메시지**나 **기본값**을 전달할 수 없습니다.

이 제한은 `$\{input:variableID\}
` 구문을 가진 **입력 변수**로 해결됩니다. `variableID`는 추가 구성 속성이 지정되는 `launch.json`과 `tasks.json`의 `inputs` 섹션의 항목을 참조합니다. 입력 변수의 중첩은 지원되지 않습니다.

다음 예시는 입력 변수를 사용하는 `tasks.json`의 전체 구조를 보여줍니다:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "task name",
      "command": "$\{input:variableID\}
"
      // ...
    }
  ],
  "inputs": [
    {
      "id": "variableID",
      "type": "type of input variable"
      // 타입별 구성 속성
    }
  ]
}
```

현재 VS Code는 세 가지 유형의 입력 변수를 지원합니다:

- **promptString**: 사용자로부터 문자열을 얻기 위한 입력 상자를 표시합니다.
- **pickString**: 사용자가 여러 옵션 중에서 선택할 수 있는 빠른 선택 드롭다운을 표시합니다.
- **command**: 임의의 명령을 실행합니다.

각 유형은 추가 구성 속성이 필요합니다:

`promptString`:

- **description**: 빠른 입력에 표시되며, 입력에 대한 컨텍스트를 제공합니다.
- **default**: 사용자가 다른 것을 입력하지 않을 때 사용될 기본값입니다.
- **password**: 입력한 값을 표시하지 않는 비밀번호 프롬프트로 설정하려면 true로 설정합니다.

`pickString`:

- **description**: 빠른 선택에 표시되며, 입력에 대한 컨텍스트를 제공합니다.
- **options**: 사용자가 선택할 수 있는 옵션의 배열입니다.
- **default**: 사용자가 다른 것을 입력하지 않을 때 사용될 기본값입니다. 옵션 값 중 하나여야 합니다.

옵션은 문자열 값이거나 레이블과 값을 모두 가진 객체일 수 있습니다. 드롭다운은 **label: value**를 표시합니다.

`command`:

- **command**: 변수 보간 시 실행되는 명령입니다.
- **args**: 명령의 구현에 전달되는 선택적 옵션 가방입니다.

다음은 Angular CLI를 사용하여 `inputs`의 사용을 보여주는 `tasks.json`의 예시입니다:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "ng g",
      "type": "shell",
      "command": "ng",
      "args": ["g", "$\{input:componentType\}
", "$\{input:componentName\}
"]
    }
  ],
  "inputs": [
    {
      "type": "pickString",
      "id": "componentType",
      "description": "어떤 유형의 컴포넌트를 생성하시겠습니까?",
      "options": [
        "component",
        "directive",
        "pipe",
        "service",
        "class",
        "guard",
        "interface",
        "enum"
      ],
      "default": "component"
    },
    {
      "type": "promptString",
      "id": "componentName",
      "description": "컴포넌트의 이름을 입력하세요.",
      "default": "my-new-component"
    }
  ]
}
```

다음 예시는 특정 폴더에서 찾은 모든 테스트 케이스 중에서 사용자가 테스트 케이스를 선택할 수 있게 하는 디버그 구성에서 `command` 타입의 사용자 입력 변수를 사용하는 방법을 보여줍니다. 어떤 확장이 구성 가능한 위치에서 모든 테스트 케이스를 찾고 그 중 하나를 선택하기 위한 피커 UI를 보여주는 `extension.mochaSupport.testPicker` 명령을 제공한다고 가정합니다. 명령 입력에 대한 인수는 명령 자체에 의해 정의됩니다.

```json
{
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Run specific test",
      "program": "$\{workspaceFolder\}
/$\{input:pickTest\}
"
    }
  ],
  "inputs": [
    {
      "id": "pickTest",
      "type": "command",
      "command": "extension.mochaSupport.testPicker",
      "args": {
        "testFolder": "/out/tests"
      }
    }
  ]
}
```

명령 입력은 태스크에서도 사용할 수 있습니다. 이 예시에서는 내장된 태스크 종료 명령이 사용됩니다. 이 명령은 모든 태스크를 종료하기 위한 인수를 받을 수 있습니다.

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Terminate All Tasks",
      "command": "echo $\{input:terminate\}
",
      "type": "shell",
      "problemMatcher": []
    }
  ],
  "inputs": [
    {
      "id": "terminate",
      "type": "command",
      "command": "workbench.action.tasks.terminate",
      "args": "terminateAll"
    }
  ]
}
```

## 자주 묻는 질문 {#common-questions}

### 디버그 구성 또는 태스크에서 변수 치환의 세부 사항 {#details-of-variable-substitution}

디버그 구성이나 태스크에서의 변수 치환은 두 단계의 과정입니다:

- 첫 번째 단계에서는 모든 변수가 문자열 결과로 평가됩니다. 변수가 두 번 이상 나타나는 경우 한 번만 평가됩니다.
- 두 번째 단계에서는 모든 변수가 첫 번째 단계의 결과로 대체됩니다.

이로 인해 변수의 평가(예: 확장에서 구현된 명령 기반 변수)는 디버그 구성이나 태스크의 다른 대체된 변수에 **접근할 수 없습니다**. 원래 변수만 볼 수 있습니다. 이는 변수가 서로 의존할 수 없다는 것을 의미합니다(이는 격리를 보장하고 평가 순서에 대해 대체를 강건하게 만듭니다).

### 사용자 및 작업 공간 설정에서 변수 치환이 지원됩니까? {#is-variable-substitution-supported}

미리 정의된 변수는 터미널 `cwd`, `env`, `shell`, `shellArgs` 값과 같은 `settings.json` 파일의 일부 설정 키에서 지원됩니다. `window.title`과 같은 일부 [설정](/docs/getstarted/settings.md)은 자체 변수를 가지고 있습니다:

```json
  "window.title": "$\{dirty\}
$\{activeEditorShort\}
$\{separator\}
$\{rootName\}
$\{separator\}
$\{appName\}
"
```

설정별 변수에 대해 알아보려면 설정 편집기(`kb(workbench.action.openSettings)`)의 주석을 참조하세요.

### $\{workspaceRoot\}가 문서화되지 않은 이유는 무엇인가요? {#why-isnt-workspaceroot-documented}

변수 `$\{workspaceRoot\}
`는 [다중 루트 작업 공간](/docs/editor/multi-root-workspaces.md) 지원과 더 잘 맞추기 위해 `$\{workspaceFolder\}
`로 대체되었습니다.

### tasks.json에서 변수가 해결되지 않는 이유는 무엇인가요? {#why-arent-variables-being-resolved}

`tasks.json`의 모든 값이 변수 치환을 지원하는 것은 아닙니다. 특히 `command`, `args`, `options`만 변수 치환을 지원합니다. `inputs` 섹션의 입력 변수는 입력 변수의 중첩이 지원되지 않기 때문에 해결되지 않습니다.

### 변수의 실제 값을 어떻게 알 수 있나요? {#how-can-i-know-variables-actual-value}

변수의 런타임 값을 확인하는 쉬운 방법 중 하나는 변수 값을 콘솔에 출력하는 VS Code [태스크](/docs/editor/tasks.md)를 만드는 것입니다. 예를 들어, `$\{workspaceFolder\}
`의 해결된 값을 보려면 다음과 같은 간단한 'echo' 태스크를 `tasks.json`에 만들고 실행(**Terminal** > **Run Task**)할 수 있습니다:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "echo",
      "type": "shell",
      "command": "echo $\{workspaceFolder\}
"
    }
  ]
}
```

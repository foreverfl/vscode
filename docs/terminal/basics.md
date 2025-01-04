---
Order: 2
Area: 터미널
TOCTitle: 터미널 기본
ContentId: 7B4DC928-2414-4FC7-9C76-E4A13D6675FE
PageTitle: Visual Studio Code의 통합 터미널
DateApproved: 12/11/2024
MetaDescription: Visual Studio Code에는 편집기를 떠나지 않고도 원하는 셸에서 작업할 수 있도록 통합 터미널이 포함되어 있습니다.
---

# 터미널 기본 {#terminal-basics}

Visual Studio Code에는 작업 공간의 루트에서 시작하는 기능이 완비된 통합 터미널이 포함되어 있습니다. [링크](#links) 및 [오류 감지](/docs/editor/tasks.md)와 같은 기능을 지원하기 위해 편집기와 통합됩니다. 통합 터미널은 mkdir 및 git과 같은 명령을 독립 실행형 터미널처럼 실행할 수 있습니다.

터미널을 여는 방법은 다음과 같습니다:

- 메뉴에서 **Terminal** > **New Terminal** 또는 **View** > **Terminal** 메뉴 명령을 사용합니다.
- **Command Palette** (`Ctrl+Shift+P`)에서 **View: Toggle Terminal** 명령을 사용합니다.
- 탐색기에서 **Open in Integrated Terminal** 컨텍스트 메뉴 명령을 사용하여 폴더에서 새 터미널을 엽니다.
- 터미널 패널을 전환하려면 `` Ctrl+` `` 키보드 단축키를 사용합니다.
- 새 터미널을 만들려면 `` Ctrl+Shift+` `` 키보드 단축키를 사용합니다.

VS Code의 터미널에는 명령이 실행되는 위치를 명령의 왼쪽과 스크롤바에 장식으로 표시하는 셸 통합이라는 추가 기능이 있습니다:

![통합 터미널은 mkdir 및 git과 같은 명령을 독립 실행형 터미널처럼 실행할 수 있습니다. VS Code의 터미널에는 명령이 실행되는 위치를 명령의 왼쪽과 스크롤바에 장식으로 표시하는 셸 통합이라는 추가 기능이 있습니다.](images/basics/integrated-terminal.png)

:::note
VS Code 외부에서 작업하는 것을 선호하는 경우 `Ctrl+Shift+C` 키보드 단축키를 사용하여 외부 터미널을 엽니다.
:::

## 터미널 셸 {#terminal-shells}

통합 터미널은 시스템 기본값에서 가져온 기본값으로, 머신에 설치된 다양한 셸을 사용할 수 있습니다. 셸은 감지되어 터미널 프로필 드롭다운에 표시됩니다.

![감지된 프로필은 새 터미널 버튼 옆의 드롭다운에서 선택할 수 있습니다. Windows의 예로는 PowerShell, Command Prompt, Git Bash 및 WSL이 있습니다.](images/basics/select-profile-dropdown.png)

터미널 셸 구성에 대한 자세한 내용은 [터미널 프로필](/docs/terminal/profiles.md) 문서를 참조하세요.

## 터미널 관리 {#managing-terminals}

터미널 탭 UI는 터미널 보기의 오른쪽에 있습니다. 각 터미널에는 이름, 아이콘, 색상 및 그룹 장식(있는 경우)이 있는 항목이 있습니다.

![프로필 실행 버튼을 활성화하면 감지된 프로필과 수동으로 구성된 프로필이 모두 표시됩니다.](images/basics/tabs.png)

**TERMINAL** 패널의 오른쪽 상단에 있는 **+** 아이콘을 선택하거나 터미널 드롭다운에서 프로필을 선택하거나 `` Ctrl+Shift+` `` 명령을 트리거하여 터미널 인스턴스를 추가합니다. 이 작업은 해당 터미널과 연결된 탭 목록에 또 다른 항목을 만듭니다.

탭 위로 마우스를 가져가 **Trash Can** 버튼을 선택하거나 탭 항목을 선택하고 `Delete`를 누르거나 **Terminal: Kill the Active Terminal Instance** 명령을 사용하거나 오른쪽 클릭 컨텍스트 메뉴를 통해 터미널 인스턴스를 제거합니다.

다음 포커스 `Ctrl+PageDown` 및 이전 포커스 `Ctrl+PageUp`를 사용하여 터미널 그룹 간을 탐색합니다.

터미널의 상태가 변경되면 탭 레이블의 터미널 제목 오른쪽에 아이콘이 나타날 수 있습니다. 일부 예로는 벨(macOS) 및 작업의 경우 오류가 없을 때 체크 표시가 표시되고 그렇지 않으면 X가 표시됩니다. 아이콘 위로 마우스를 가져가면 상태 정보가 표시되며, 여기에는 작업이 포함될 수 있습니다.

### 그룹 (분할 창) {#groups-split-panes}

터미널을 나란히 배치하고 터미널을 분할하여 그룹을 만듭니다:

- 오른쪽의 터미널 목록에서 항목 위로 마우스를 가져가 인라인 분할 버튼을 선택합니다.
- 컨텍스트 메뉴를 마우스 오른쪽 버튼으로 클릭하고 **Split** 메뉴 옵션을 선택합니다.
- `Alt` 키를 누르고 탭, **+** 버튼 또는 터미널 패널의 단일 탭을 클릭합니다.
- `Ctrl+Shift+5` 명령을 트리거합니다.

:::tip
새 터미널의 작업 디렉터리는 `terminal.integrated.splitCwd` [설정](/docs/getstarted/settings.md)에 따라 달라집니다.
:::

그룹의 터미널 간을 탐색하려면 이전 창을 포커스 `Alt+Left`하거나 다음 창을 포커스 `Alt+Right`합니다.

목록에서 탭을 드래그 앤 드롭하여 재정렬합니다. 탭을 메인 터미널 영역으로 드래그하면 터미널을 한 그룹에서 다른 그룹으로 이동할 수 있습니다.

**Terminal: Unsplit Terminal** 명령을 통해 터미널을 자체 그룹으로 이동할 수 있습니다. 이 명령은 명령 팔레트 또는 오른쪽 클릭 컨텍스트 메뉴에서 사용할 수 있습니다.

## 편집기 영역의 터미널 {#terminals-in-editor-area}

**Terminal: Create New Terminal in Editor Area** 명령, **Terminal: Create New Terminal in Editor Area to the Side** 명령을 사용하거나 터미널을 터미널 보기에서 편집기 영역으로 드래그하여 편집기 영역(터미널 편집기)에 터미널을 열 수 있습니다. 터미널 편집기는 일반 편집기 탭처럼 표시됩니다:

![터미널 편집기는 일반 텍스트 파일 탭처럼 표시됩니다.](images/basics/terminal-editor.png)

편집기 그룹 레이아웃 시스템을 사용하여 터미널 편집기를 양쪽에 배치하거나 여러 차원으로 배열할 수 있습니다. 예를 들어 파일 편집기 오른쪽에 PowerShell 및 WSL 터미널을 쌓을 수 있습니다:

![터미널 편집기는 편집기 그룹 레이아웃 시스템을 사용하여 배열할 수 있습니다. 예를 들어 2개의 터미널이 텍스트 편집기 오른쪽에 배치될 수 있습니다.](images/basics/terminal-editor-grid.png)

`terminal.integrated.defaultLocation` 설정을 사용하여 기본 `view` 또는 `editor` 영역 터미널 위치를 변경할 수 있습니다.

## 버퍼 탐색 {#navigating-the-buffer}

터미널의 내용은 버퍼라고 하며, 하단 뷰포트 바로 위의 섹션은 "스크롤백"이라고 합니다. 유지되는 스크롤백의 양은 `terminal.integrated.scrollback` [설정](/docs/getstarted/settings.md)에 의해 결정되며 기본값은 `1000` 줄입니다.

터미널 버퍼를 탐색하는 다양한 명령이 있습니다:

- 한 줄 위로 스크롤 - `Ctrl+Alt+PageUp`
- 한 줄 아래로 스크롤 - `Ctrl+Alt+PageDown`
- 한 페이지 위로 스크롤 - `Shift+PageUp`
- 한 페이지 아래로 스크롤 - `Shift+PageDown`
- 맨 위로 스크롤 - `Ctrl+Home`
- 맨 아래로 스크롤 - `Ctrl+End`

**Command** 탐색도 가능합니다 (참조 [셸 통합](/docs/terminal/shell-integration.md)):

- 이전 명령으로 스크롤 - `Ctrl+Up`
- 다음 명령으로 스크롤 - `Ctrl+Down`

스크롤은 즉시 발생하지만 `terminal.integrated.smoothScrolling` 설정을 사용하여 짧은 시간 동안 애니메이션으로 구성할 수 있습니다.

## 링크 {#links}

터미널은 편집기 통합 및 확장 기여 링크 핸들러와 함께 정교한 링크 감지 기능을 제공합니다. 링크 위로 마우스를 가져가면 밑줄이 표시되고 `Ctrl`/`Cmd` 키를 누르고 클릭합니다.

이 내장 링크 핸들러는 다음 우선 순위 순서로 사용됩니다:

- URI/URL: `https://code.visualstudio.com`, `vscode://path/to/file` 또는 `file://path/to/file`과 같은 URI처럼 보이는 링크는 프로토콜에 대한 표준 핸들러를 사용하여 열립니다. 예를 들어, `https` 링크는 브라우저에서 열립니다.

  ![URI 링크를 열면 시스템 브라우저에서 열립니다.](images/basics/link-uri.png)

- 파일 링크: 시스템에서 존재하는 것으로 확인된 파일에 대한 링크입니다. 이러한 링크는 새 편집기 탭에서 파일을 열며 `file:1:2`, `file:line 1, column 2`와 같은 많은 일반적인 줄/열 형식을 지원합니다.

  ![파일 링크를 활성화하면 편집기에서 파일이 열립니다.](images/basics/link-file.png)

- 폴더 링크: 폴더에 대한 링크는 파일 링크와 유사하지만 폴더에서 새 VS Code 창을 엽니다.

  ![폴더 링크를 활성화하면 새 창에서 폴더가 열립니다.](images/basics/link-folder.png)

- 단어 링크: `terminal.integrated.wordSeparators` 설정을 사용하는 폴백 링크 유형입니다. 이 설정은 단어 경계를 정의하고 거의 모든 텍스트를 단어로 만듭니다. 단어 링크를 활성화하면 작업 공간에서 단어를 검색합니다. 결과가 하나만 있으면 열리고, 그렇지 않으면 검색 결과가 표시됩니다. 단어 링크는 "신뢰도가 낮은" 것으로 간주되며 `Ctrl`/`Cmd` 키를 누르지 않으면 밑줄이나 툴팁이 표시되지 않습니다. 또한 줄 및 열 접미사에 대한 지원이 제한적입니다.

  ![단어 링크 'terminal:15'를 활성화하면 작업 공간에서 'terminal'을 포함하는 모든 파일을 검색하는 빠른 선택이 열리며, 옵션을 선택하면 15번째 줄에서 파일이 열립니다.](images/basics/link-word.png)

**Open Detected Link** 명령 (`Ctrl+Shift+G`)을 사용하여 키보드를 통해 링크에 액세스할 수 있습니다:

![Open Detected Link는 뷰포트의 모든 링크를 카테고리로 나누어 빠른 선택으로 엽니다.](images/basics/link-open-detected.png)

:::tip
링크 확인으로 인해 성능 문제가 발생하는 경우, 예를 들어 지연 시간이 높은 원격 환경에서는 `terminal.integrated.enableFileLinks` [설정](/docs/getstarted/settings.md)을 통해 비활성화할 수 있습니다.
:::

### 확장이 링크를 처리 {#extensions-handling-links}

확장은 **링크 제공자**를 추가할 수 있으며, 이를 통해 확장은 클릭 시 수행할 작업을 정의할 수 있습니다. 예를 들어 [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) 확장은 Git 브랜치 링크를 감지합니다.

![GitLens가 설치된 경우, 브랜치 이름 위로 마우스를 가져가면 UI에서 브랜치를 열기 위한 사용자 정의 동작이 제공됩니다.](images/basics/link-extension.png)

### 키보드 접근성 {#keyboard-accessibility}

링크는 여러 명령을 통해 키보드로 접근할 수 있으며, 링크 유형에 따라 링크를 엽니다.

- **Terminal: Open Last Local File Link** - 가장 최근의 로컬 파일 링크를 엽니다. 기본 키 바인딩이 없습니다.
- **Terminal: Open Last URL link** - 가장 최근의 URI/URL 링크를 엽니다. 기본 키 바인딩이 없습니다.
- **Terminal: Open Detected Link...** - 모든 감지된 링크를 검색 가능한 빠른 선택으로 엽니다. 기본 키 바인딩은 `Ctrl/Cmd+Shift+O`이며, 이는 **Go to Symbol in Editor** 키보드 단축키와 동일합니다.

## 복사 및 붙여넣기 {#copy-paste}

복사 및 붙여넣기 키 바인딩은 플랫폼 표준을 따릅니다:

- Linux: `Ctrl+Shift+C` 및 `Ctrl+Shift+V`. 선택 붙여넣기는 `Shift+Insert`로 사용할 수 있습니다.
- macOS: `Cmd+C` 및 `Cmd+V`
- Windows: `Ctrl+C` 및 `Ctrl+V`

`terminal.integrated.copyOnSelection`이 활성화된 경우 선택 시 자동으로 복사됩니다.

기본적으로 여러 줄을 붙여넣을 때 경고가 표시되며, 이는 `terminal.integrated.enableMultiLinePasteWarning` 설정을 통해 비활성화할 수 있습니다. 이 모드는 셸이 "브래킷 붙여넣기 모드"를 지원하지 않는 경우에만 수행됩니다. 이 모드가 활성화되면 셸이 여러 줄 붙여넣기를 처리할 수 있음을 나타냅니다.

## 마우스 사용 {#using-the-mouse}

### 오른쪽 클릭 동작 {#right-click-behavior}

오른쪽 클릭 동작은 플랫폼에 따라 다릅니다:

- Linux: 컨텍스트 메뉴를 표시합니다.
- macOS: 커서 아래의 단어를 선택하고 컨텍스트 메뉴를 표시합니다.
- Windows: 선택이 있는 경우 복사 및 드롭 선택, 그렇지 않으면 붙여넣기.

이는 `terminal.integrated.rightClickBehavior` 설정을 사용하여 구성할 수 있습니다. 옵션은 다음과 같습니다:

- `default` - 컨텍스트 메뉴를 표시합니다.
- `copyPaste` - 선택이 있는 경우 복사, 그렇지 않으면 붙여넣기.
- `paste` - 오른쪽 클릭 시 붙여넣기.
- `selectWord` - 커서 아래의 단어를 선택하고 컨텍스트 메뉴를 표시합니다.
- `nothing` - 아무 작업도 하지 않고 이벤트를 터미널로 전달합니다.

### Alt로 커서 위치 변경 {#reposition-the-cursor-with-alt}

`Alt`와 왼쪽 클릭을 사용하여 커서를 마우스 아래로 이동할 수 있습니다. 이는 화살표 키 입력을 시뮬레이션하여 작동하며, 일부 셸이나 프로그램에서는 신뢰할 수 없을 수 있습니다. 이 기능은 `terminal.integrated.altClickMovesCursor` 설정을 통해 비활성화할 수 있습니다.

### 마우스 이벤트 모드 {#mouse-events-mode}

터미널에서 실행 중인 애플리케이션이 마우스 이벤트 모드를 켜면, 예를 들어 Vim 마우스 모드, 마우스 상호 작용이 터미널 대신 애플리케이션으로 전송됩니다. 이는 클릭 및 드래그가 더 이상 선택을 생성하지 않음을 의미합니다. 터미널 선택은 Windows 및 Linux에서 `Alt` 키를 누르고 강제로 수행할 수 있으며, macOS에서는 `Option` 키를 사용하여 수행할 수 있지만 먼저 `terminal.integrated.macOptionClickForcesSelection` 설정을 활성화해야 합니다.

## 찾기 {#find}

통합 터미널에는 `Ctrl+Shift+P`로 트리거할 수 있는 찾기 기능이 있습니다.

![터미널에서 찾기는 쿼리와 일치하는 모든 텍스트를 강조 표시합니다.](images/basics/terminal-find.png)

:::tip
`Ctrl+F`를 셸로 보내려면 [셸을 건너뛸 명령](/docs/terminal/advanced.md#keybinding-and-the-shell)에서 `workbench.action.terminal.focusFind` 명령을 제거합니다.
:::

## 선택한 텍스트 실행 {#run-selected-text}

`runSelectedText` 명령을 사용하려면 편집기에서 텍스트를 선택하고 **Command Palette** (`Ctrl+Shift+P`)를 통해 **Terminal: Run Selected Text in Active Terminal** 명령을 실행합니다. 터미널은 선택한 텍스트를 실행하려고 시도합니다. 활성 편집기에서 텍스트가 선택되지 않은 경우 커서가 있는 전체 줄이 터미널에서 실행됩니다.

:::tip
`workbench.action.terminal.runActiveFile` 명령을 사용하여 활성 파일도 실행합니다.
:::

## 터미널 최대화 {#maximizing-the-terminal}

터미널 보기는 위쪽 화살표 아이콘이 있는 패널 크기 최대화 버튼을 클릭하여 최대화할 수 있습니다. 이렇게 하면 편집기가 일시적으로 숨겨지고 패널이 최대화됩니다. 이는 많은 양의 출력에 일시적으로 집중하는 데 유용합니다. 일부 개발자는 새 창을 열고 패널을 최대화하고 사이드 바를 숨겨 독립 실행형 터미널로 VS Code를 사용합니다.

패널은 [정렬](/docs/editor/custom-layout.md#panel-alignment) 옵션이 **Center**로 설정된 경우에만 최대화할 수 있습니다.

## 모두 선택 {#select-all}

**Terminal: Select All** 명령이 있으며, macOS에서는 `Cmd+A`에 바인딩되어 있지만 Windows 및 Linux에서는 기본 키 바인딩이 없습니다. 이는 셸 핫키와 충돌할 수 있기 때문입니다. `Ctrl+A`를 모두 선택하려면 다음 사용자 정의 키 바인딩을 추가합니다:

```json
{
  "key": "ctrl+a",
  "command": "workbench.action.terminal.selectAll",
  "when": "terminalFocus && !isMac"
},
```

## 파일 경로 드래그 앤 드롭 {#drag-and-drop-file-paths}

파일을 터미널로 드래그하면 경로가 터미널에 입력되며, 활성 셸에 맞게 이스케이프됩니다.

## 작업으로 터미널 자동화 {#automating-terminals-with-tasks}

[작업](/docs/editor/tasks.md) 기능을 사용하여 터미널 실행을 자동화할 수 있습니다. 예를 들어, 다음 `.vscode/tasks.json` 파일은 창이 시작될 때 단일 터미널 그룹에서 명령 프롬프트 및 PowerShell 터미널을 실행합니다:

```jsonc
{
  "version": "2.0.0",
  "presentation": {
    "echo": false,
    "reveal": "always",
    "focus": false,
    "panel": "dedicated",
    "showReuseMessage": true
  },
  "tasks": [
    {
      "label": "Create terminals",
      "dependsOn": ["First", "Second"],
      // cmd/ctrl+shift+b를 사용하여 기본 빌드 작업으로 표시
      "group": {
        "kind": "build",
        "isDefault": true
      },
      // 폴더 열기 시 작업 시작 시도
      "runOptions": {
        "runOn": "folderOpen"
      }
    },
    {
      // 터미널 탭에 표시되는 이름
      "label": "First",
      // 작업은 셸을 실행합니다
      "type": "shell",
      "command": "",
      // 셸 유형 설정
      "options": {
        "shell": {
          "executable": "cmd.exe",
          "args": []
        }
      },
      // 터미널 탭에서 스피너 애니메이션을 피하기 위해 백그라운드 작업으로 표시
      "isBackground": true,
      "problemMatcher": [],
      // 터미널 그룹에서 작업 생성
      "presentation": {
        "group": "my-group"
      }
    },
    {
      "label": "Second",
      "type": "shell",
      "command": "",
      "options": {
        "shell": {
          "executable": "pwsh.exe",
          "args": []
        }
      },
      "isBackground": true,
      "problemMatcher": [],
      "presentation": {
        "group": "my-group"
      }
    }
  ]
}
```

이 파일은 다른 개발자와 공유하기 위해 리포지토리에 커밋하거나 `workbench.action.tasks.openUserTasks` 명령을 통해 사용자 작업으로 생성할 수 있습니다.

## 작업 디렉터리 {#working-directory}

기본적으로 터미널은 탐색기에서 열린 폴더에서 시작됩니다. `terminal.integrated.cwd` 설정을 사용하여 대신 열 경로를 지정할 수 있습니다:

```json
{
  "terminal.integrated.cwd": "/home/user"
}
```

Windows에서 분할 터미널은 부모 터미널이 시작된 디렉터리에서 시작됩니다. macOS 및 Linux에서는 분할 터미널이 부모 터미널의 현재 작업 디렉터리를 상속합니다. 이 동작은 `terminal.integrated.splitCwd` 설정을 사용하여 변경할 수 있습니다:

```json
{
  "terminal.integrated.splitCwd": "workspaceRoot"
}
```

[Terminal Here](https://marketplace.visualstudio.com/items?itemName=Tyriar.vscode-terminal-here)와 같은 더 많은 옵션을 제공하는 확장도 사용할 수 있습니다.

## 고정 크기 터미널 {#fixed-dimension-terminals}

**Terminal: Set Fixed Dimensions** 명령을 사용하여 터미널과 백엔드 가상 터미널이 사용하는 열 및 행 수를 변경할 수 있습니다. 이렇게 하면 필요할 때 스크롤 막대가 추가되어 불쾌한 사용자 경험을 초래할 수 있으며 일반적으로 권장되지 않지만, 특히 Windows에서 페이징 도구가 없을 때 로그 또는 긴 줄을 읽는 데 일반적인 요청입니다.

또한 터미널 탭을 마우스 오른쪽 버튼으로 클릭하고 **Toggle Size to Content Width** (`Alt+Z`)를 선택하여 터미널의 가장 큰 줄에 맞게 터미널 열 수를 조정할 수 있습니다.

## 다음 단계 {#next-steps}

이 문서에서는 터미널의 기본 사항을 다루었습니다. 자세한 내용은 다음을 참조하세요:

- [터미널 인라인 채팅](/docs/copilot/copilot-chat#terminal-inline-chat) - 터미널에서 바로 AI 지원 제안.
- [작업](/docs/editor/tasks.md) - 작업을 사용하면 외부 도구와 통합하고 터미널을 많이 활용할 수 있습니다.
- [VS Code의 터미널 마스터링](https://www.growingwiththeweb.com/2017/03/mastering-vscodes-terminal.html) - 터미널에 대한 많은 고급 사용자 팁이 포함된 외부 블로그.
- VS Code 내에서 키보드 단축키를 탐색하여 터미널 명령을 탐색합니다 (**Preferences: Open Keyboard Shortcuts**를 사용한 다음 'terminal'을 검색).

## 자주 묻는 질문 {#common-questions}

### 터미널 실행에 문제가 있습니다 {#problems-launching-terminal}

이러한 문제에 대한 [전용 문제 해결 가이드](/docs/supporting/troubleshoot-terminal-launch.md)가 있습니다.

### 관리자 터미널을 어떻게 만드나요? {#create-admin-terminal}

통합 터미널 셸은 VS Code의 권한으로 실행됩니다. 관리자 또는 다른 권한으로 셸 명령을 실행해야 하는 경우 터미널 내에서 `runas.exe`와 같은 플랫폼 유틸리티를 사용합니다.

터미널 프로필을 통해 터미널 사용자 정의에 대해 자세히 알아보려면 [프로필 구성](/docs/terminal/profiles.md#configuring-profiles)을 참조하세요.

### 탐색기의 통합 터미널에서 열기 명령에 대한 키보드 단축키를 추가할 수 있나요? {#add-keyboard-shortcut}

탐색기에서 특정 폴더에 대해 **Open in Integrated Terminal** 컨텍스트 메뉴 명령을 통해 새 터미널을 열 수 있습니다.

![탐색기에서 폴더를 선택하고 컨텍스트 메뉴에 Open in Integrated Terminal 명령이 표시됩니다.](images/basics/open-in-terminal-command.png)

기본적으로 **Open in Integrated Terminal**과 관련된 키보드 단축키는 없지만, 키보드 단축키 편집기 (`Ctrl+K Ctrl+S`)를 통해 `keybindings.json`에 키 바인딩을 추가할 수 있습니다.

다음 `keybindings.json` 예제는 `openInTerminal`에 대한 키보드 단축키 `Ctrl+T`를 추가합니다:

```json
{
  "key": "ctrl+t",
  "command": "openInTerminal",
  "when": "filesExplorerFocus"
}
```

### 통합 터미널이 실행될 때 nvm이 접두사 옵션에 대해 불평하는 이유는 무엇인가요? {#nvm-complaining}

nvm (Node Version Manager) 사용자는 VS Code의 통합 터미널 내에서 처음으로 이 오류를 자주 봅니다:

```bash
nvm is not compatible with the npm config "prefix" option: currently set to "/usr/local"
Run `npm config delete prefix` or `nvm use --delete-prefix v8.9.1 --silent` to unset it
```

이는 주로 macOS 문제이며 외부 터미널에서는 발생하지 않습니다. 일반적인 이유는 다음과 같습니다:

- `npm`이 경로 어딘가에 있는 다른 `node` 인스턴스를 사용하여 전역적으로 설치되었습니다 (예: `/usr/local/bin/npm`).
- 개발 도구를 `$PATH`에 추가하기 위해 VS Code는 시작 시 bash 로그인 셸을 실행합니다. 이는 `~/.bash_profile`이 이미 실행되었음을 의미하며, 통합 터미널이 실행될 때 **또 다른** 로그인 셸이 실행되어 `$PATH`가 예상치 못한 방식으로 재정렬될 수 있습니다.

이 문제를 해결하려면 이전 `npm`이 설치된 위치를 찾아 해당 파일과 오래된 node_modules를 제거해야 합니다. `nvm` 초기화 스크립트를 찾아 실행하기 전에 `which npm`을 실행하여 새 터미널을 시작할 때 경로를 인쇄합니다.

npm의 경로를 찾은 후, 다음과 같은 명령을 실행하여 심볼릭 링크를 해제하여 오래된 node_modules를 찾습니다:

```bash
ls -la /usr/local/bin | grep "np[mx]"
```

이 명령은 끝에 해제된 경로를 제공합니다:

```bash
... npm -> ../lib/node_modules/npm/bin/npm-cli.js
... npx -> ../lib/node_modules/npm/bin/npx-cli.js
```

그런 다음 파일을 제거하고 VS Code를 다시 시작하면 문제가 해결됩니다:

```bash
rm /usr/local/bin/npm /usr/local/lib/node_modules/npm/bin/npm-cli.js
rm /usr/local/bin/npx /usr/local/lib/node_modules/npm/bin/npx-cli.js
```

### 터미널 분할 창 크기를 조정할 때 macOS에서 딩 소리가 나는 이유는 무엇인가요? {#macos-ding-sound}

키 바인딩 ⌃⌘← 및 ⌃⌘→는 터미널에서 개별 분할 창 크기를 조정하는 기본값입니다. 작동하지만, 시스템 "잘못된 키" 소리가 나는 이유는 Chromium의 문제 때문입니다. [권장 해결 방법](https://github.com/microsoft/vscode/issues/44070#issuecomment-799716362)은 터미널에서 다음 명령을 실행하여 macOS에 대해 이러한 키 바인딩을 무시하도록 지시하는 것입니다:

```bash
mkdir -p ~/Library/KeyBindings
cat > ~/Library/KeyBindings/DefaultKeyBinding.dict <<EOF
{
  "^@\UF701" = "noop";
  "^@\UF702" = "noop";
  "^@\UF703" = "noop";
}
EOF
```

### 터미널 렌더링에 문제가 있습니다. 어떻게 해야 하나요? {#problems-with-terminal-rendering}

기본적으로 통합 터미널은 대부분의 머신에서 GPU 가속을 사용하여 렌더링됩니다. 일반적으로 렌더링 문제가 발생하면 하드웨어/OS/드라이버가 GPU 렌더러와 잘 작동하지 않는 문제입니다. 첫 번째로 시도할 것은 GPU 가속을 비활성화하여 렌더링 속도를 희생하고 더 신뢰할 수 있는 DOM 기반 렌더링으로 전환하는 것입니다:

```json
{
  "terminal.integrated.gpuAcceleration": "off"
}
```

자세한 내용은 [GPU 가속](/docs/terminal/appearance.md#gpu-acceleration) 섹션을 참조하세요.

### 무언가를 붙여넣을 때 `1~` 또는 `[201~`이 표시됩니다 {#paste-issue}

이는 일반적으로 터미널 내에서 실행 중인 프로그램/셸이 "브래킷 붙여넣기 모드"를 켜도록 요청했지만, 일부가 이를 제대로 지원하지 않는 경우 발생합니다. 이를 해결하려면 해당 세션에서 `printf "\e[?2004l"`을 실행하여 비활성화하거나 `~/.inputrc` 파일에 다음을 추가할 수 있습니다:

```
set enable-bracketed-paste off
```

또는 브래킷 붙여넣기 모드를 무시하도록 강제하려면 다음 설정을 사용하여 비활성화할 수 있습니다:

```json
{
  "terminal.integrated.ignoreBracketedPasteMode": true
}
```

### zsh에서 Ctrl+A, Ctrl+R이 ^A, ^R을 출력합니다 {#zsh-issue}

이는 zsh이 Emacs 모드 대신 Vim 모드에 있는 경우 발생할 수 있으며, init 스크립트에서 `$EDITOR` 또는 `$VISUAL`을 `vi`/`vim`으로 설정한 경우 발생할 수 있습니다.

이를 해결하려면 두 가지 옵션이 있습니다:

- `$EDITOR`를 `vi(m)`으로 설정하지 않도록 합니다. 그러나 이는 Git 편집기를 작동시키려면 옵션이 아닙니다.
- init 스크립트에 `bindkey -e`를 추가하여 Emacs를 명시적으로 설정합니다.

### macOS의 기본 터미널처럼 Cmd+.를 Ctrl+C로 매핑하려면 어떻게 해야 하나요? {#cmd-dot-mapping}

macOS 기본 터미널은 `Cmd+.`를 `Ctrl+C`와 동일하게 수행합니다. VS Code에서 이 동작을 얻으려면 다음 [사용자 정의 키 바인딩](/docs/getstarted/keybindings.md)을 추가합니다:

```json
{
  "key": "cmd+.",
  "command": "workbench.action.terminal.sendSequence",
  "when": "terminalFocus",
  "args": { "text": "\u0003" }
}
```

### 터미널의 색상이 올바르지 않은 이유는 무엇인가요? {#terminal-colors}

기본적으로 활성화된 접근성 기능 중 하나는 전경 텍스트의 최소 대비 비율이 최소 4.5 이상이 되도록 보장하는 것입니다. 이 기능은 사용된 셸과 테마에 관계없이 텍스트가 읽을 수 있도록 보장하며, 그렇지 않으면 불가능합니다. 이 기능을 비활성화하려면 다음을 설정할 수 있습니다:

```json
"terminal.integrated.minimumContrastRatio": 1
```

자세한 내용은 [최소 대비 비율](/docs/terminal/appearance.md#minimum-contrast-ratio) 섹션을 참조하세요.

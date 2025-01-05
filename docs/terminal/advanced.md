---
Order: 6
Area: terminal
TOCTitle: 고급
ContentId: D458AFDC-C001-43FD-A4BB-9474767B2C04
PageTitle: Visual Studio Code에서의 고급 터미널 사용법
DateApproved: 12/11/2024
MetaDescription: Visual Studio Code의 통합 터미널에는 여러 고급 기능이 있습니다.
---

# 터미널 고급 {#terminal-advanced}

Visual Studio Code의 통합 터미널에는 유니코드 및 이모지 지원, 사용자 정의 키 바인딩, 자동 응답 등 여러 고급 기능과 설정이 있습니다. 이 주제에서는 이러한 고급 기능을 자세히 설명합니다. VS Code나 통합 터미널을 처음 사용하는 경우 [터미널 기본](/docs/terminal/basics.md) 주제를 먼저 검토하는 것이 좋습니다.

## 지속 세션 {#persistent-sessions}

터미널은 두 가지 유형의 지속 세션을 지원합니다:

- 프로세스 재연결: 창을 다시 로드할 때(예: 확장 설치 후) 이전 프로세스에 **재연결**하고 내용을 복원합니다.
- 프로세스 복구: VS Code를 다시 시작할 때 터미널의 내용이 복원되고 프로세스가 원래 환경을 사용하여 **다시 시작**됩니다.

이 두 가지 지속 세션은 `terminal.integrated.enablePersistentSessions`를 `false`로 설정하여 비활성화할 수 있으며, 복원되는 스크롤백의 양은 `terminal.integrated.persistentSessionScrollback` 설정으로 제어됩니다. 프로세스 복구는 `terminal.integrated.persistentSessionReviveProcess`로 독립적으로 구성할 수 있습니다.

### 창 간 터미널 이동 {#moving-terminals-between-windows}

터미널 탭은 VS Code 창 간에 드래그 앤 드롭할 수 있습니다. 이는 명령 팔레트와 **Terminal: Detach Session** 및 **Terminal: Attach to Session** 명령을 통해 수동으로도 수행할 수 있습니다.

### 시작 시 터미널 동작 구성 {#configure-how-the-terminal-behaves-on-start-up}

창을 열 때 터미널 뷰가 보이면 지속 세션을 사용하여 터미널에 다시 연결하거나 새 셸을 생성합니다. 이 동작은 `terminal.integrated.hideOnStartup` 설정으로 세부 조정할 수 있습니다.

- `never` (기본값): 시작 시 터미널 뷰를 숨기지 않습니다.
- `whenEmpty`: 지속 세션이 복원되지 않은 경우에만 터미널을 숨깁니다.
- `always`: 지속 세션이 복원된 경우에도 항상 터미널을 숨깁니다.

## 키 바인딩과 셸 {#keybinding-and-the-shell}

내장 애플리케이션으로서 통합 터미널은 VS Code 내에서 디스패치된 일부 키 바인딩을 가로채야 합니다.

구성 가능한 `terminal.integrated.commandsToSkipShell` 설정은 어떤 명령의 키 바인딩이 항상 "셸을 건너뛰고" 대신 VS Code의 키 바인딩 시스템에서 처리되어야 하는지를 결정합니다. 기본적으로 VS Code 경험에 필수적인 명령의 하드코딩된 목록이 포함되어 있지만 특정 명령을 추가하거나 제거할 수 있습니다:

```jsonc
{
  "terminal.integrated.commandsToSkipShell": [
    // 사이드바 가시성 토글 키 바인딩이 셸을 건너뛰도록 합니다
    "workbench.action.toggleSidebarVisibility",
    // 빠른 열기 키 바인딩을 셸로 보냅니다
    "-workbench.action.quickOpen"
  ]
}
```

기본 명령의 전체 목록을 보려면 `terminal.integrated.commandsToSkipShell` 설정 세부 정보를 참조하십시오.

:::tip
`terminal.integrated.sendKeybindingsToShell`은 `terminal.integrated.commandsToSkipShell`을 재정의하고 대부분의 키 바인딩을 셸로 디스패치하도록 구성할 수 있습니다. 그러나 이렇게 하면 `Ctrl+F`와 같은 키 바인딩을 사용하여 [찾기](/docs/terminal/basics#find)를 열 수 없게 됩니다.
:::

### 코드 {#chords}

코드 키 바인딩은 두 개의 키 바인딩으로 구성됩니다. 예를 들어, `Ctrl+K`를 누른 후 `Ctrl+C`를 눌러 줄을 주석으로 변경합니다. 코드 키 바인딩은 기본적으로 셸을 건너뛰지만 `terminal.integrated.allowChords`로 비활성화할 수 있습니다.

### macOS 화면 지우기 {#macos-clear-screen}

macOS에서 `Cmd+K`는 화면을 지우는 일반적인 터미널 키 바인딩이므로 VS Code도 이를 존중합니다. 이는 `Cmd+K` 코드가 작동하지 않음을 의미합니다. `Cmd+K` 코드를 활성화하려면 [지우기 키 바인딩 제거](/docs/getstarted/keybindings.md#removing-a-specific-key-binding-rule)를 수행하십시오:

```json
{
  "key": "cmd+k",
  "command": "-workbench.action.terminal.clear"
}
```

또한, 키 바인딩 우선 순위로 인해 확장이 `Cmd+K` 키 바인딩을 기여하는 경우 이 키보드 단축키는 자동으로 재정의됩니다. 이 경우 사용자 키 바인딩에서 다시 정의하여 `Cmd+K` 지우기 키 바인딩을 다시 활성화할 수 있습니다. 사용자 키 바인딩은 확장 키 바인딩보다 우선 순위가 높습니다:

```json
{
  "key": "cmd+k",
  "command": "workbench.action.terminal.clear",
  "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
}
```

### 기호 {#mnemonics}

VS Code의 메뉴에 액세스하기 위해 기호를 사용하는 것(예: 파일 메뉴의 `Alt+F`)은 터미널에서 기본적으로 비활성화되어 있습니다. 이러한 키 이벤트는 셸에서 중요한 단축키인 경우가 많기 때문입니다. 기호를 활성화하려면 `terminal.integrated.allowMnemonics`를 설정하십시오. 그러나 이렇게 하면 모든 `Alt` 키 이벤트가 셸로 전달되지 않습니다. 이 설정은 macOS에서는 아무런 효과가 없습니다.

### 사용자 정의 명령어 조합 키 바인딩 {#custom-sequence-keybindings}

`workbench.action.terminal.sendSequence` 명령을 사용하여 터미널에 특정 텍스트 명령어 조합를 보낼 수 있습니다. 여기에는 셸에서 특별히 해석되는 이스케이프 명령어 조합가 포함됩니다. 이 명령을 사용하면 화살표 키, `Enter`, 커서 이동 등을 보낼 수 있습니다.

예를 들어, 아래 명령어 조합는 커서 왼쪽의 단어를 건너뛰고(`Ctrl+Left`) `Backspace`를 누릅니다:

```jsonc
{
  "key": "ctrl+u",
  "command": "workbench.action.terminal.sendSequence",
  "args": {
    "text": "\u001b[1;5D\u007f"
  }
}
```

이 기능은 [변수 치환](/docs/editor/variables-reference.md)을 지원합니다.

`sendSequence` 명령은 문자 코드를 사용하여 문자를 사용하는 `\u0000` 형식에서만 작동합니다(`\x00` 아님). 이러한 16진수 코드 및 터미널 명령어 조합에 대해 자세히 알아보려면 다음 리소스를 참조하십시오:

- [XTerm 제어 명령어 조합](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html)
- [C0 및 C1 제어 코드 목록](https://github.com/xtermjs/xterm.js/blob/0e45909c7e79c83452493d2cd46d99c0a0bb585f/src/common/data/EscapeSequences.ts)

## 확인 대화 상자 {#confirmation-dialogs}

불필요한 출력 및 사용자 프롬프트를 피하기 위해 터미널은 프로세스가 종료될 때 경고 대화 상자를 표시하지 않습니다. 경고가 필요한 경우 다음 설정으로 구성할 수 있습니다:

- `terminal.integrated.confirmOnExit` - 활성 디버그 세션이 있는 경우 창을 닫을 때 확인 여부를 제어합니다.
- `terminal.integrated.confirmOnKill` - 자식 프로세스가 있는 터미널을 종료할 때 확인 여부를 제어합니다.
- `terminal.integrated.showExitAlert` - 종료 코드가 0이 아닌 경우 "터미널 프로세스가 종료 코드와 함께 종료되었습니다"라는 경고를 표시할지 여부를 제어합니다.

## 자동 응답 {#auto-replies}

터미널은 정확한 출력 명령어 조합를 수신하면 셸에 구성 가능한 입력 응답을 자동으로 제공할 수 있습니다. 가장 일반적인 사용 사례는 배치 스크립트에서 `Ctrl+C`를 눌렀을 때 배치 작업을 종료할지 묻는 메시지에 자동으로 응답하는 것입니다. 이 메시지를 자동으로 해제하려면 다음 설정을 추가하십시오:

```json
{
  "terminal.integrated.autoReplies": {
    "Terminate batch job (Y/N)": "Y\r"
  }
}
```

여기서 사용된 `\r` 문자는 `Enter`를 의미하며, [사용자 정의 명령어 조합 키 바인딩](#custom-sequence-keybindings)과 마찬가지로 이 기능은 셸에 이스케이프 명령어 조합를 보내는 것을 지원합니다.

기본적으로 자동 응답은 구성되지 않습니다. 셸 입력은 사용자가 명시적으로 수행하거나 구성해야 합니다.

## 탭 정지 너비 변경 {#change-tab-stop-width}

`terminal.integrated.tabStopWidth` 설정을 사용하여 터미널에서 프로그램이 `\t`를 출력할 때 탭 정지 너비를 구성할 수 있습니다. 일반적으로 프로그램은 `Tab` 문자를 사용하는 대신 커서를 이동하므로 필요하지 않지만 특정 상황에서는 유용할 수 있습니다.

## 유니코드 및 이모지 지원 {#unicode-and-emoji-support}

터미널은 유니코드 및 이모지 지원을 제공합니다. 터미널에서 이러한 문자를 사용할 때 지원에 몇 가지 주의 사항이 있습니다:

- 일부 유니코드 기호는 유니코드 버전에 따라 너비가 모호할 수 있습니다. 현재 유니코드 버전 6 및 11 너비를 지원하며, 이는 `terminal.integrated.unicodeVersion` 설정으로 구성할 수 있습니다. 지정된 버전은 셸/운영 체제에서 사용되는 유니코드 버전과 일치해야 하며, 그렇지 않으면 렌더링 문제가 발생할 수 있습니다. 셸/운영 체제의 유니코드 버전이 글꼴의 실제 너비와 일치하지 않을 수 있습니다.
- 여러 문자로 구성된 일부 이모지는 올바르게 렌더링되지 않을 수 있습니다. 예를 들어, 피부 톤 수정자.
- Windows에서 이모지 지원이 제한됩니다.

## 이미지 지원 {#image-support}

터미널에서 이미지는 Sixel 또는 iTerm 인라인 이미지 프로토콜을 사용하는 경우 작동합니다. 이 기능은 기본적으로 비활성화되어 있으며 `terminal.integrated.enableImages` 설정으로 활성화할 수 있습니다.

현재 제한 사항:

- 직렬화가 작동하지 않으므로 터미널을 다시 로드해도 이미지를 유지하지 않습니다 ([jerch/xterm-addon-image#47](https://github.com/jerch/xterm-addon-image/issues/47)).
- 선택 항목을 HTML로 복사해도 선택한 이미지가 포함되지 않습니다 ([jerch/xterm-addon-image#50](https://github.com/jerch/xterm-addon-image/issues/50)).
- 애니메이션 gif는 작동하지 않습니다 ([jerch/xterm-addon-image#51](https://github.com/jerch/xterm-addon-image/issues/51)).
- 셀보다 짧은 이미지는 제대로 작동하지 않습니다. 이는 [명령어 조합의 설계 결함이며 XTerm에서도 발생합니다](https://github.com/microsoft/vscode/issues/183840#issuecomment-1569345048).

## 프로세스 환경 {#process-environment}

터미널 내에서 실행되는 애플리케이션의 프로세스 환경은 다양한 설정 및 확장에 의해 영향을 받으며, VS Code 터미널의 출력이 다른 터미널과 다르게 보일 수 있습니다.

### 환경 상속 {#environment-inheritance}

VS Code가 열리면 셸 환경을 소싱하기 위해 로그인 셸 환경을 시작합니다. 이는 개발 도구가 `~/.bash_profile`과 같은 셸 시작 스크립트에 `$PATH`에 추가되는 경우가 많기 때문입니다. 기본적으로 터미널은 이 환경을 상속하며, [프로필 셸 인수](/docs/terminal/profiles.md#configuring-profiles)에 따라 여러 프로필 스크립트가 실행될 수 있으며, 이는 예기치 않은 동작을 유발할 수 있습니다.

이 환경 상속은 macOS 및 Linux에서 `terminal.integrated.inheritEnv` 설정을 통해 비활성화할 수 있습니다.

### `$LANG`과의 상호 작용 {#interaction-with-lang}

터미널에서 문자가 표시되는 방식을 결정하는 `$LANG` 환경 변수와의 특별한 상호 작용이 있습니다. 이 기능은 `terminal.integrated.detectLocale` 설정으로 구성됩니다:

| 값              | 동작                                                                                                                                    |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `on`            | 항상 `$LANG`을 가장 일반적으로 원하는 값으로 설정합니다. 선택된 값은 운영 체제 로캘(기본값은 `en-US`)과 UTF-8 인코딩을 기반으로 합니다. |
| `auto` (기본값) | `$LANG`이 올바르게 구성되지 않은 경우(UTF 또는 EUC 인코딩으로 설정되지 않은 경우) `on` 동작과 유사하게 `$LANG`을 설정합니다.            |
| `off`           | `$LANG`을 수정하지 않습니다.                                                                                                            |

### 확장 환경 기여 {#extension-environment-contributions}

확장은 터미널 환경에 [기여할 수 있습니다](https://code.visualstudio.com/api/references/vscode-api#ExtensionContext.environmentVariableCollection). 예를 들어, 내장 Git 확장은 원격 Git 인증을 처리하기 위해 `GIT_ASKPASS` 환경 변수를 주입합니다.

확장이 터미널 환경을 변경하면 기존 터미널이 안전한 경우 다시 시작되며, 그렇지 않으면 터미널 상태에 경고가 표시됩니다. 변경 사항에 대한 자세한 정보는 호버에서 볼 수 있으며, 여기에는 다시 시작 버튼도 포함됩니다.

![터미널 탭 옆에 경고 아이콘이 나타나며, 호버하여 변경 사항에 대한 정보를 볼 수 있습니다](images/advanced/envvarcollection-warning.png)

## Windows와 ConPTY {#windows-and-conpty}

VS Code의 터미널은 [xterm.js](https://github.com/xtermjs/xterm.js) 프로젝트를 기반으로 Unix 스타일 터미널을 구현하여 모든 데이터를 문자열로 직렬화하고 "가상 터미널"을 통해 파이프합니다. 역사적으로, 이는 Windows에서 터미널이 작동하는 방식이 아니었으며, Windows 콘솔 'conhost'를 구현하기 위해 [콘솔 API](https://learn.microsoft.com/windows/console/console-functions)를 사용했습니다.

Unix 스타일 터미널과 Windows 콘솔 간의 에뮬레이션/번역 계층을 제공하기 위해 [winpty](https://github.com/rprichard/winpty)라는 오픈 소스 프로젝트가 만들어졌습니다. VS Code의 터미널은 원래 winpty만 사용하여 구현되었습니다. 이는 당시에는 훌륭했지만, 2018년 Windows 10은 [ConPTY API](https://devblogs.microsoft.com/commandline/windows-command-line-introducing-the-windows-pseudo-console-conpty/)를 도입하여 winpty가 개척한 아이디어를 Windows에 내장하여 Unix 스타일 터미널 및 앱을 Windows에서 더 신뢰할 수 있고 지원되는 시스템으로 활용할 수 있게 했습니다.

VS Code는 Windows 10+ (빌드 번호 18309부터)에서 기본적으로 ConPTY를 사용하며, 이전 버전의 Windows에서는 레거시 옵션으로 winpty를 사용합니다. ConPTY는 `terminal.integrated.windowsEnableConpty` 설정을 통해 명시적으로 비활성화할 수 있지만, 이는 일반적으로 피해야 합니다.

ConPTY는 에뮬레이션 계층이므로 몇 가지 특이점이 있습니다. 가장 일반적인 것은 ConPTY가 뷰포트의 소유자로 간주되어 때때로 화면을 다시 인쇄할 수 있다는 것입니다. 이 다시 인쇄는 **터미널: 지우기** 명령을 실행한 후 이전 내용이 표시되는 등의 예기치 않은 동작을 유발할 수 있습니다.

## 원격 개발 {#remote-development}

이 섹션에서는 VS Code가 VS Code [원격 개발](https://code.visualstudio.com/docs/remote/remote-overview) 확장을 사용하여 원격 머신에 연결된 경우 특정 주제를 설명합니다.

### 원격 입력 지연 줄이기 {#reducing-remote-input-latency}

로컬 에코는 원격 창에서 입력 지연의 영향을 완화하는 기능입니다. 원격에서 결과가 확인되기 전에 터미널에 흐릿한 색으로 키 입력을 씁니다. 기본적으로 이 기능은 지연이 30ms 이상으로 감지될 때 실행되며, 타이밍은 `terminal.integrated.localEchoLatencyThreshold` 설정으로 구성할 수 있습니다. 확인되지 않은 문자의 색상은 `terminal.integrated.localEchoStyle`로 정의됩니다.

로컬 에코는 터미널의 활성 프로그램에 따라 동적으로 비활성화됩니다. 이는 기본적으로 `['vim', 'vi', 'nano', 'tmux']`로 설정된 `terminal.integrated.localEchoExcludePrograms`에 의해 제어됩니다. 입력 시 화면을 많이 다시 인쇄하는 애플리케이션이나 셸의 경우 이 기능을 비활성화하는 것이 좋습니다.

기능을 완전히 비활성화하려면 다음을 사용하십시오:

```json
{
  "terminal.integrated.localEchoEnabled": false
}
```

### 원격 창에서 로컬 터미널 {#local-terminals-in-remote-windows}

기본 **로컬** 터미널 프로필은 명령 팔레트를 통해 **Terminal: Create New Integrated Terminal (Local)** 명령으로 원격 창에서 실행할 수 있습니다. 현재 비기본 프로필은 원격 창에서 실행할 수 없습니다.

---
Order: 6
Area: terminal
TOCTitle: Advanced
ContentId: D458AFDC-C001-43FD-A4BB-9474767B2C04
PageTitle: Visual Studio Code에서의 고급 터미널 사용법
DateApproved: 03/05/2025
MetaDescription: Visual Studio Code의 통합 터미널은 여러 가지 고급 기능을 제공합니다.
---
# 터미널 고급 {#terminal-advanced}

Visual Studio Code의 통합 터미널은 유니코드 및 이모지 지원, 사용자 정의 키보드 단축키, 자동 응답과 같은 많은 고급 기능 및 설정을 제공합니다. 이 주제에서는 이러한 고급 기능을 자세히 설명합니다. VS Code나 통합 터미널을 처음 사용하는 경우, 먼저 [터미널 기초](/docs/terminal/basics.md) 주제를 검토하는 것이 좋습니다.

## 지속 세션 {#persistent-sessions}

터미널은 두 가지 유형의 지속 세션을 지원합니다:

* 프로세스 재연결: 창을 다시 로드할 때(예: 확장을 설치한 후), **이전 프로세스에 재연결**하고 그 내용을 복원합니다.
* 프로세스 복구: VS Code를 다시 시작할 때, 터미널의 내용이 복원되고 프로세스가 원래 환경을 사용하여 **다시 시작**됩니다.

이 두 가지 지속 세션은 `setting(terminal.integrated.enablePersistentSessions)`를 `false`로 설정하여 비활성화할 수 있으며, 복원되는 스크롤백의 양은 `setting(terminal.integrated.persistentSessionScrollback)` 설정으로 제어됩니다. 프로세스 복구는 `setting(terminal.integrated.persistentSessionReviveProcess)`로 독립적으로 구성할 수 있습니다.

### 창 간 터미널 이동 {#moving-terminals-between-windows}

터미널 탭은 VS Code 창 간에 드래그 앤 드롭할 수 있습니다. 이는 명령 팔레트를 통해 **터미널: 세션 분리** 및 **터미널: 세션에 연결** 명령을 사용하여 수동으로 수행할 수도 있습니다.

### 터미널 가시성 구성 {#configure-terminal-visibility}

창을 열 때, 터미널 뷰가 보이는 경우 지속 세션을 사용하여 터미널에 재연결하거나 새 셸을 생성합니다. 이 동작은 `setting(terminal.integrated.hideOnStartup)` 설정으로 세밀하게 조정할 수 있습니다.

* `never` (기본값): 시작 시 터미널 뷰를 숨기지 않습니다.
* `whenEmpty`: 복원된 지속 세션이 없을 때만 터미널을 숨깁니다.
* `always`: 복원된 지속 세션이 있어도 항상 터미널을 숨깁니다.

`setting(terminal.integrated.hideOnLastClosed)` 설정도 사용 가능하여 마지막 터미널이 닫힐 때 터미널 뷰를 닫는 기본 동작을 재정의할 수 있습니다.

## 키보드 단축키 및 셸 {#keyboard-shortcuts-and-the-shell}

통합 터미널은 VS Code 내에서 전송된 일부 키보드 단축키를 가로채야 합니다. 그러나 모든 단축키를 가로채지는 않습니다.

구성 가능한 `setting(terminal.integrated.commandsToSkipShell)` 설정은 어떤 명령의 키보드 단축키가 항상 "셸을 건너뛰고" 대신 VS Code의 키보드 단축키 시스템에 의해 처리되어야 하는지를 결정합니다. 기본적으로, 이 설정은 VS Code 경험에 필수적인 명령의 하드코딩된 목록을 포함하지만, 특정 명령을 추가하거나 제거할 수 있습니다:

```jsonc
{
  "terminal.integrated.commandsToSkipShell": [
    // 사이드바 가시성 전환 키보드 단축키가 셸을 건너뛰도록 보장합니다.
    "workbench.action.toggleSidebarVisibility",
    // 빠른 열기 키보드 단축키를 셸로 전송합니다.
    "-workbench.action.quickOpen",
  ]
}
```

`setting(terminal.integrated.commandsToSkipShell)` 설정 세부정보를 확인하여 기본 명령의 전체 목록을 확인하세요.

>**팁:** `setting(terminal.integrated.sendKeybindingsToShell)`를 구성하여 `setting(terminal.integrated.commandsToSkipShell)`를 재정의하고 대부분의 키보드 단축키를 셸로 전송할 수 있습니다. 그러나 이 경우 `kbstyle(Ctrl+F)`와 같은 키보드 단축키는 [찾기](/docs/terminal/basics#find)를 열 수 없게 됩니다.

### 코드 {#chords}

코드 키보드 단축키는 두 개의 키보드 단축키로 구성됩니다. 예를 들어, `kbstyle(Ctrl+K)` 다음에 `kbstyle(Ctrl+C)`를 눌러 줄을 주석으로 변경합니다. 코드 키보드는 기본적으로 셸을 건너뛰지만, `setting(terminal.integrated.allowChords)`로 비활성화할 수 있습니다.

### macOS 화면 지우기 {#macos-clear-screen}

macOS에서 `kbstyle(Cmd+K)`는 터미널에서 화면을 지우기 위한 일반적인 키보드 단축키이므로 VS Code도 이를 존중합니다. 이는 `kbstyle(Cmd+K)` 코드가 작동하지 않음을 의미합니다. `kbstyle(Cmd+K)` 코드는 [지우기 키보드 단축키 제거하기](/docs/editor/keybindings.md#removing-a-specific-keyboard-shortcut-rule)를 통해 활성화할 수 있습니다:

```json
{
    "key": "cmd+k",
    "command": "-workbench.action.terminal.clear"
}
```

또한, 이 키보드 단축키는 키보드 단축키 우선순위 작동 방식으로 인해 어떤 확장이 `kbstyle(Cmd+K)` 키보드 단축키를 제공하면 자동으로 재정의됩니다. 이 경우 `kbstyle(Cmd+K)` 화면 지우기 키보드 단축키를 다시 활성화하려면 사용자 키보드 단축키에서 재정의할 수 있습니다. 사용자 키보드 단축키는 확장 키보드 단축키보다 우선순위가 높습니다:

```json
{
    "key": "cmd+k",
    "command": "workbench.action.terminal.clear",
    "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
}
```

### 기억법 {#mnemonics}

VS Code의 메뉴에 접근하기 위한 기억법(예: 파일 메뉴를 위한 `kbstyle(Alt+F)`)은 기본적으로 터미널에서 비활성화되어 있습니다. 이는 이러한 키 이벤트가 셸에서 중요한 단축키인 경우가 많기 때문입니다. `setting(terminal.integrated.allowMnemonics)`를 설정하여 기억법을 활성화할 수 있지만, 이 경우 `kbstyle(Alt)` 키 이벤트가 셸로 전송되지 않음을 유의하세요. 이 설정은 macOS에서는 아무런 효과가 없습니다.

### 사용자 정의 시퀀스 키보드 단축키 {#custom-sequence-keyboard-shortcuts}

`workbench.action.terminal.sendSequence` 명령은 터미널에 특정 텍스트 시퀀스를 전송하는 데 사용될 수 있으며, 셸에 의해 특별히 해석되는 이스케이프 시퀀스를 포함합니다. 이 명령은 화살표 키, `kbstyle(Enter)`, 커서 이동 등을 전송할 수 있게 해줍니다.

예를 들어, 아래 시퀀스는 커서 왼쪽의 단어를 건너뛰고(`kbstyle(Ctrl+Left)`) `kbstyle(Backspace)`를 누릅니다:

```jsonc
{
  "key": "ctrl+u",
  "command": "workbench.action.terminal.sendSequence",
  "args": {
    "text": "\u001b[1;5D\u007f"
  }
}
```

이 기능은 [변수 치환](/docs/reference/variables-reference.md)을 지원합니다.

`sendSequence` 명령은 문자 코드를 통해 문자를 사용하는 경우에만 `\u0000` 형식으로 작동합니다(즉, `\x00`가 아님). 이러한 16진수 코드와 터미널 시퀀스에 대한 자세한 내용은 다음 자료를 참조하세요:

* [XTerm 제어 시퀀스](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html)
* [C0 및 C1 제어 코드 목록](https://github.com/xtermjs/xterm.js/blob/0e45909c7e79c83452493d2cd46d99c0a0bb585f/src/common/data/EscapeSequences.ts)

## 확인 대화 상자 {#confirmation-dialogs}

불필요한 출력 및 사용자 프롬프트를 피하기 위해, 터미널은 프로세스가 종료될 때 경고 대화 상자를 표시하지 않습니다. 경고가 필요한 경우, 다음 설정으로 구성할 수 있습니다:

* `setting(terminal.integrated.confirmOnExit)` - 활성 디버그 세션이 있는 경우 창을 닫을 때 확인할지를 제어합니다.
* `setting(terminal.integrated.confirmOnKill)` - 자식 프로세스가 있는 터미널을 종료할 때 확인할지를 제어합니다.
* `setting(terminal.integrated.showExitAlert)` - 종료 코드가 0이 아닐 때 "터미널 프로세스가 종료 코드와 함께 종료되었습니다"라는 경고를 표시할지를 제어합니다.

## 자동 응답 {#auto-replies}

터미널은 특정 출력 시퀀스가 수신되면 셸에 대한 구성 가능한 입력 응답을 자동으로 제공할 수 있습니다. 가장 일반적인 사용 사례는 배치 스크립트에서 `kbstyle(Ctrl+C)`를 눌렀을 때 사용자에게 배치 작업을 종료할 것인지 묻는 프롬프트에 자동으로 응답하는 것입니다. 이 메시지를 자동으로 무시하려면 다음 설정을 추가하세요:

```json
{
  "terminal.integrated.autoReplies": {
    "Terminate batch job (Y/N)": "Y\r"
  }
}
```

여기서 사용된 `\r` 문자는 `kbstyle(Enter)`를 의미하며, [사용자 정의 시퀀스 키보드 단축키](#custom-sequence-keyboard-shortcuts)와 마찬가지로 이 기능은 셸에 이스케이프 시퀀스를 전송하는 것을 지원합니다.

기본적으로 자동 응답은 구성되어 있지 않으며, 셸 입력 제공은 사용자에 의한 명시적인 작업이나 구성이어야 합니다.

## 탭 정지 너비 변경 {#change-tab-stop-width}

`setting(terminal.integrated.tabStopWidth)` 설정은 터미널에서 프로그램이 `\t`를 출력할 때 탭 정지 너비를 구성할 수 있게 해줍니다. 일반적으로 프로그램은 `kbstyle(Tab)` 문자를 사용하기보다는 커서를 이동시키기 때문에 이 설정은 필요하지 않지만, 특정 상황에서는 유용할 수 있습니다.

## 유니코드 및 이모지 지원 {#unicode-and-emoji-support}

터미널은 유니코드 및 이모지 지원을 제공합니다. 이러한 문자가 터미널에서 사용될 때 몇 가지 주의사항이 있습니다:

* 일부 유니코드 기호는 모호한 너비를 가지며, 이는 유니코드 버전 간에 변경될 수 있습니다. 현재 우리는 `setting(terminal.integrated.unicodeVersion)` 설정으로 구성할 수 있는 유니코드 버전 6 및 11 너비를 지원합니다. 지정된 버전은 셸/운영 체제가 사용하는 유니코드 버전과 일치해야 하며, 그렇지 않으면 렌더링 문제가 발생할 수 있습니다. 셸/OS의 유니코드 버전이 글꼴의 실제 너비와 일치하지 않을 수 있습니다.
* 여러 문자로 구성된 일부 이모지는 올바르게 렌더링되지 않을 수 있습니다. 예를 들어, 피부 톤 수정자가 있습니다.
* Windows에서는 이모지 지원이 제한적입니다.

## 이미지 지원 {#image-support}

터미널에서 이미지는 Sixel 또는 iTerm 인라인 이미지 프로토콜을 사용하는 경우 작동합니다. 이 기능은 기본적으로 비활성화되어 있으며, `setting(terminal.integrated.enableImages)` 설정으로 활성화할 수 있습니다.

현재 제한 사항:

* 직렬화가 작동하지 않으므로 터미널을 다시 로드하면 이미지가 유지되지 않습니다 ([jerch/xterm-addon-image#47](https://github.com/jerch/xterm-addon-image/issues/47)).
* 선택한 이미지를 포함하여 HTML로 선택 내용을 복사할 수 없습니다 ([jerch/xterm-addon-image#50](https://github.com/jerch/xterm-addon-image/issues/50)).
* 애니메이션 GIF는 작동하지 않습니다 ([jerch/xterm-addon-image#51](https://github.com/jerch/xterm-addon-image/issues/51)).
* 셀보다 짧은 이미지는 제대로 작동하지 않으며, 이는 [시퀀스의 설계 결함이며 XTerm에서도 발생합니다](https://github.com/microsoft/vscode/issues/183840#issuecomment-1569345048).

## 프로세스 환경 {#process-environment}

터미널 내에서 실행되는 애플리케이션의 프로세스 환경은 다양한 설정 및 확장에 의해 영향을 받으며, VS Code 터미널의 출력이 다른 터미널과 다르게 보일 수 있습니다.

### 환경 상속 {#environment-inheritance}

VS Code가 열리면 로그인 셸 환경을 시작하여 셸 환경을 소싱합니다. 이는 개발 도구가 종종 `~/.bash_profile`과 같은 셸 시작 스크립트에 `$PATH`에 추가되기 때문입니다. 기본적으로 터미널은 이 환경을 상속받으며, 이는 [프로파일 셸 인수](/docs/terminal/profiles.md#configuring-profiles)에 따라 달라질 수 있으며, 여러 프로파일 스크립트가 실행되었을 수 있어 예기치 않은 동작을 초래할 수 있습니다.

이 환경 상속은 macOS 및 Linux에서 `setting(terminal.integrated.inheritEnv)` 설정을 통해 비활성화할 수 있습니다.

### `$LANG`와의 상호작용 {#interaction-with-lang}

문자가 터미널에 표시되는 방식을 결정하는 `$LANG` 환경 변수와의 특별한 상호작용이 있습니다. 이 기능은 `setting(terminal.integrated.detectLocale)` 설정으로 구성됩니다:

| 값               | 동작
|------------------|---
| `on`             | 항상 `$LANG`를 가장 일반적으로 원하는 값으로 설정합니다. 선택된 값은 운영 체제 로케일을 기반으로 하며(기본값은 `en-US`) UTF-8 인코딩을 사용합니다.
| `auto` (기본값) | `$LANG`가 올바르게 구성되지 않은 경우(UTF 또는 EUC 인코딩으로 설정되지 않은 경우) `on` 동작과 유사하게 `$LANG`를 설정합니다.
| `off`            | `$LANG`를 수정하지 않습니다.

### 확장 환경 기여 {#extension-environment-contributions}

확장은 [터미널 환경에 기여할 수 있습니다](https://code.visualstudio.com/api/references/vscode-api#ExtensionContext.environmentVariableCollection), 이를 통해 터미널과의 통합을 제공할 수 있습니다. 예를 들어, 내장 Git 확장은 VS Code가 Git 원격에 대한 인증을 처리할 수 있도록 `GIT_ASKPASS` 환경 변수를 주입합니다.

확장이 터미널 환경을 변경하면, 기존 터미널은 안전하게 재시작될 수 있는 경우에만 재시작되며, 그렇지 않으면 터미널 상태에 경고가 표시됩니다. 변경 사항에 대한 자세한 정보는 호버에서 확인할 수 있으며, 여기에는 재시작 버튼도 포함됩니다.

![재시작이 필요한 경우 터미널 탭 옆에 경고 아이콘이 나타나며, 변경 사항에 대한 정보는 호버하여 확인할 수 있습니다.](images/advanced/envvarcollection-warning.png)

## Windows 및 ConPTY {#windows-and-conpty}

VS Code의 터미널은 [xterm.js](https://github.com/xtermjs/xterm.js) 프로젝트를 기반으로 하여 모든 데이터를 문자열로 직렬화하고 "가상 터미널"을 통해 파이프하는 유닉스 스타일의 터미널을 구현합니다. 역사적으로, Windows에서는 [Console API](https://learn.microsoft.com/windows/console/console-functions)를 사용하여 'conhost'라는 콘솔을 구현했기 때문에 터미널이 이렇게 작동하지 않았습니다.

[winpty](https://github.com/rprichard/winpty)라는 오픈 소스 프로젝트가 이 문제를 해결하기 위해 유닉스 스타일의 터미널과 Windows 콘솔 간의 에뮬레이션/변환 레이어를 제공하기 위해 만들어졌습니다. VS Code의 터미널은 원래 winpty만 사용하여 구현되었습니다. 당시에는 훌륭했지만, 2018년에 Windows 10은 [ConPTY API](https://devblogs.microsoft.com/commandline/windows-command-line-introducing-the-windows-pseudo-console-conpty/)를 받았으며, 이는 winpty가 선도한 아이디어를 Windows에 통합하여 유닉스 스타일의 터미널 및 앱을 Windows에서 활용할 수 있는 보다 신뢰할 수 있고 지원되는 시스템을 제공합니다.

VS Code는 Windows 10+ (빌드 번호 18309부터)에서 기본적으로 ConPTY를 사용하며, 이전 버전의 Windows에 대해서는 레거시 옵션으로 winpty로 돌아갑니다. ConPTY는 `setting(terminal.integrated.windowsEnableConpty)` 설정을 통해 명시적으로 비활성화할 수 있지만, 이는 일반적으로 피해야 합니다.

ConPTY는 에뮬레이션 레이어이기 때문에 몇 가지 특이점이 있습니다. 가장 일반적인 것은 ConPTY가 뷰포트의 소유자로 간주되므로 때때로 화면을 다시 출력합니다. 이 재출력은 **터미널: 지우기** 명령을 실행한 후 이전 콘텐츠가 표시되는 등의 예기치 않은 동작을 초래할 수 있습니다.

## 원격 개발 {#remote-development}

이 섹션에서는 VS Code가 VS Code [원격 개발](https://code.visualstudio.com/docs/remote/remote-overview) 확장을 사용하여 원격 머신에 연결될 때 특정 주제를 설명합니다.

### 원격 입력 지연 줄이기 {#reducing-remote-input-latency}

로컬 에코는 원격 창에서 입력 지연의 영향을 완화하는 데 도움이 되는 기능입니다. 원격에서 결과가 확인되기 전에 터미널에 키 입력을 흐릿한 색으로 기록합니다. 기본적으로 이 기능은 지연이 30ms 이상으로 감지될 때 실행되며, 타이밍은 `setting(terminal.integrated.localEchoLatencyThreshold)`로 구성할 수 있습니다. 확인되지 않은 문자의 색상은 `setting(terminal.integrated.localEchoStyle)`로 정의됩니다.

로컬 에코는 터미널에서 활성 프로그램에 따라 동적으로 비활성화됩니다. 이는 `setting(terminal.integrated.localEchoExcludePrograms)`에 의해 제어되며, 기본값은 `['vim', 'vi', 'nano', 'tmux']`입니다. 입력 시 화면을 많이 다시 출력하는 동적 애플리케이션이나 셸에 대해서는 이 기능을 비활성화하는 것이 좋습니다.

기능을 완전히 비활성화하려면 다음을 사용하세요:

```json
{
  "terminal.integrated.localEchoEnabled": false
}
```

### 원격 창에서의 로컬 터미널 {#local-terminals-in-remote-windows}

기본 **로컬** 터미널 프로파일은 명령 팔레트를 통해 **터미널: 새 통합 터미널 생성(로컬)** 명령으로 원격 창에서 실행할 수 있습니다. 현재 비기본 프로파일은 원격 창에서 실행할 수 없습니다.
---
Order: 3
Area: 터미널
TOCTitle: 터미널 프로필
ContentId: 1a9d76e8-9c8c-446e-974e-d71570e7d62a
PageTitle: Visual Studio Code의 터미널 프로필
DateApproved: 12/11/2024
MetaDescription: Visual Studio Code의 통합 터미널은 다양한 셸을 쉽게 실행할 수 있도록 다양한 프로필을 구성할 수 있습니다.
---

# 터미널 프로필 {#terminal-profiles}

터미널 프로필은 실행 파일 경로, 인수 및 기타 사용자 정의로 구성된 플랫폼별 셸 구성입니다. 기본적으로 여러 프로필이 자동으로 감지되며 이를 사용자 정의하거나 추가할 수 있습니다.

<!-- TODO: 사용자 정의된 기본 프로필 선택 빠른 선택 이미지 -->

예제 프로필:

```jsonc
{
  "terminal.integrated.profiles.windows": {
    "Custom Init": {
      "path": "pwsh.exe",
      "args": [
        "-noexit",
        "-file",
        "${env:APPDATA}\\PowerShell\\custom-init.ps1"
      ]
    }
  },
  "terminal.integrated.defaultProfile.windows": "Custom Init"
}
```

터미널 프로필에서 위 예제와 같이 `APPDATA` 환경 변수를 사용할 수 있습니다. 사용 가능한 변수 목록은 [변수 참조](/docs/editor/variables-reference.md) 주제에서 확인할 수 있습니다.

기본 프로필을 구성하려면 **Terminal: Select Default Profile** 명령을 실행하세요. 이 명령은 새 터미널 드롭다운에서도 접근할 수 있습니다.

![기본 프로필 선택은 새 터미널 버튼에 연결된 드롭다운 메뉴 하단에 위치합니다](images/basics/terminal-dropdown.png)

기본 터미널 프로필 셸은 Linux 및 macOS에서는 `$SHELL`로, Windows에서는 PowerShell로 기본 설정됩니다. VS Code는 대부분의 표준 셸을 자동으로 감지하여 기본값으로 설정할 수 있습니다.

## 프로필 구성 {#configuring-profiles}

새 프로필을 만들려면 **Terminal: Select Default Profile** 명령을 실행하고 셸 오른쪽에 있는 구성 버튼을 활성화하세요. 이렇게 하면 `settings.json` 파일에서 수동으로 조정할 수 있는 새 항목이 설정에 추가됩니다.

프로필은 `path` 또는 `source`를 사용하여 만들 수 있으며, 선택적 인수 집합도 포함할 수 있습니다. `source`는 Windows에서만 사용할 수 있으며 VS Code가 `PowerShell` 또는 `Git Bash` 설치를 감지하도록 할 수 있습니다. 또는 셸 실행 파일을 직접 가리키는 `path`를 사용할 수 있습니다. 다음은 몇 가지 예제 프로필 구성입니다:

```json
{
  "terminal.integrated.profiles.windows": {
    "PowerShell -NoProfile": {
      "source": "PowerShell",
      "args": ["-NoProfile"]
    }
  },
  "terminal.integrated.profiles.linux": {
    "zsh (login)": {
      "path": "zsh",
      "args": ["-l"]
    }
  }
}
```

프로필에서 지원되는 기타 인수는 다음과 같습니다:

- `overrideName`: 실행 중인 프로그램을 감지하는 동적 터미널 제목을 정적 프로필 이름으로 대체할지 여부를 나타내는 부울 값입니다.
- `env`: 환경 변수와 그 값을 정의하는 맵으로, 변수를 `null`로 설정하여 환경에서 삭제할 수 있습니다. 이는 `terminal.integrated.env.<platform>` 설정을 사용하여 모든 프로필에 대해 구성할 수 있습니다.
- `icon`: 프로필에 사용할 아이콘 ID입니다.
- `color`: 아이콘을 스타일링할 테마 색상 ID입니다.

:::tip
Path, args 및 env는 모두 [변수 해석](https://code.visualstudio.com/docs/editor/variables-reference)을 지원합니다.
:::

**기본 프로필**은 `terminal.integrated.defaultProfile.*` 설정을 사용하여 수동으로 정의할 수 있습니다. 이는 기존 프로필의 이름으로 설정해야 합니다:

```json
{
  "terminal.integrated.profiles.windows": {
    "my-pwsh": {
      "source": "PowerShell",
      "args": ["-NoProfile"]
    }
  },
  "terminal.integrated.defaultProfile.windows": "my-pwsh"
}
```

:::tip
통합 터미널 셸은 VS Code의 권한으로 실행됩니다. 관리자 또는 다른 권한으로 셸 명령을 실행해야 하는 경우, 터미널 내에서 `runas.exe`와 같은 플랫폼 유틸리티를 사용하세요.
:::

## 기본 제공 프로필 제거 {#removing-built-in-profiles}

기본 제공 프로필을 제거하고 새 터미널 드롭다운에 표시되지 않도록 하려면 프로필 이름을 `null`로 설정하세요. 예를 들어, Windows에서 `Git Bash` 프로필을 제거하려면 다음 설정을 사용하세요:

```json
{
  "terminal.integrated.profiles.windows": {
    "Git Bash": null
  }
}
```

## 작업/디버그 프로필 구성 {#configuring-the-task-debug-profile}

기본적으로 작업/디버그 기능은 기본 프로필을 사용합니다. 기본 프로필에 무거운 PowerShell 시작 스크립트가 있거나 비POSIX 호환 셸이 있는 경우 이상적이지 않을 수 있습니다. 작업/디버그 기능에서만 사용할 프로필을 구성하려면 `terminal.integrated.automationProfile.<platform>` 설정을 사용하세요:

```jsonc
{
  "terminal.integrated.defaultProfile.osx": "fish",
  // 작업 및 디버그를 위해 완전히 POSIX 호환 셸을 사용하고 복잡한 ~/.config/fish/config.fish 실행을 피하세요
  "terminal.integrated.automationProfile.osx": {
    "path": "/bin/sh"
  }
}
```

## 프로필별 키 바인딩 {#profile-specific-keybindings}

[전용 키 바인딩](https://code.visualstudio.com/docs/getstarted/keybindings#_advanced-customization)을 통해 특정 프로필로 터미널을 실행하려면 `workbench.action.terminal.newWithProfile` 명령을 사용하세요. 이 명령은 프로필 이름과 선택적 위치를 인수로 받습니다. 예를 들어, `Ctrl+Shift+T`를 `zsh` 프로필로 터미널을 열도록 바인딩하려면 다음과 같이 설정하세요:

```json
{
  "key": "ctrl+shift+t",
  "command": "workbench.action.terminal.newWithProfile",
  "args": {
    "profileName": "zsh",
    "location": "editor"
  }
}
```

## 안전하지 않은 프로필 감지 {#unsafe-profile-detection}

기본적으로 다른 사용자가 Windows 환경에서 쓸 수 있는 경로와 같은 안전하지 않은 경로에 설치된 특정 셸은 감지되지만, **Terminal: Select Default Profile** 명령을 통해 명시적으로 구성될 때까지 적절한 프로필로 노출되지 않습니다. 안전하지 않은 프로필을 구성할 때 추가하기 전에 경고가 표시됩니다:

![c:\msys64와 같은 안전하지 않은 경로에 있는 셸은 감지된 프로필을 사용하기 전에 경고가 표시됩니다](images/profiles/unsafe-profile-warning.png)

## Cmder {#cmder}

Cmder 자체는 터미널이지만, 다음 프로필을 사용하여 VS Code에서 [Cmder](https://cmder.app) 셸을 사용할 수 있습니다:

```json
{
  "terminal.integrated.profiles.windows": {
    "cmder": {
      "path": "C:\\WINDOWS\\System32\\cmd.exe",
      "args": ["/K", "C:\\cmder\\vendor\\bin\\vscode_init.cmd"]
    }
  },
  "terminal.integrated.defaultProfile.windows": "cmder"
}
```

이 프로필은 `CMDER_ROOT` 환경 변수가 설정되면 자동으로 감지됩니다. `C:\cmder`에 설치된 경우 [안전하지 않은 프로필](#unsafe-profile-detection)로 감지됩니다. 자세한 내용은 [Cmder의 위키](https://github.com/cmderdev/cmder/wiki/Seamless-VS-Code-Integration)를 참조하세요.

## Cygwin {#cygwin}

Cygwin 자체는 터미널이지만, 다음 프로필을 사용하여 VS Code에서 [Cygwin](https://www.cygwin.com/) 셸을 사용할 수 있습니다:

```json
{
  "terminal.integrated.profiles.windows": {
    "Cygwin": {
      "path": "C:\\cygwin64\\bin\\bash.exe",
      "args": ["--login"]
    }
  },
  "terminal.integrated.defaultProfile.windows": "Cygwin"
}
```

이 프로필은 기본 경로 `C:\cygwin` 또는 `C:\cygwin64`에 설치된 경우 [안전하지 않은 프로필](#unsafe-profile-detection)로 자동 감지됩니다.

## Git Bash {#git-bash}

VS Code가 bash.exe(셸)를 사용하는 경우 git-bash.exe(터미널)를 사용하는 경우와 달리 [Git Bash의 제한 사항](https://github.com/microsoft/vscode/issues/85831#issuecomment-943403803)은 셸 세션 간에 기록이 유지되지 않는다는 것입니다. 이를 해결하려면 `~/.bashrc` 또는 `~/.bash_profile` 파일에 다음을 추가하세요:

```bash
export PROMPT_COMMAND='history -a'
```

이렇게 하면 프롬프트가 출력될 때마다 셸이 `history -a`를 호출하여 현재 세션 명령을 백업 기록 파일에 플러시합니다.

## MSYS2 {#msys2}

MSYS2의 bash 셸은 다음 프로필로 구성할 수 있습니다:

```json
{
  "terminal.integrated.profiles.windows": {
    "bash (MSYS2)": {
      "path": "C:\\msys64\\usr\\bin\\bash.exe",
      "args": ["--login", "-i"],
      "env": { "CHERE_INVOKING": "1" }
    }
  }
}
```

[`CHERE_INVOKING` 환경 변수](https://www.msys2.org/wiki/Launchers/#the-idea)는 로그인 초기화 스크립트에 작업 디렉토리를 유지하도록 지시하는 데 사용되며, `$HOME`에서 열리지 않습니다.

이 프로필은 기본 경로 `C:\\msys64`에 설치된 경우 [안전하지 않은 프로필](#unsafe-profile-detection)로 자동 감지됩니다.

## Windows PowerShell {#windows-powershell}

PowerShell 6+가 설치된 경우, Windows PowerShell은 기본적으로 프로필 목록에 포함되지 않습니다. Windows PowerShell을 프로필로 추가하려면 새 터미널 드롭다운에서 **Select Default Profile** 옵션을 선택하고 Windows PowerShell 항목을 선택하세요. 이렇게 하면 프로필이 구성되고 기본값으로 설정됩니다.

## WSL {#wsl}

로컬 컴퓨터에서 VS Code를 실행할 때 Windows Subsystem for Linux 셸이 자동으로 감지됩니다. 설정에 따라 많은 배포판이 설치된 경우 이는 성가실 수 있습니다. WSL 프로필에 대한 더 세밀한 제어를 위해 자동 감지를 `terminal.integrated.useWslProfiles` 설정으로 비활성화한 다음, WSL 셸을 수동으로 구성하는 예는 다음과 같습니다:

```jsonc
{
  "terminal.integrated.profiles.windows": {
    "Debian (WSL)": {
      "path": "C:\\WINDOWS\\System32\\wsl.exe",
      "args": ["-d", "Debian"]
    }
  }
}
```

## 자주 묻는 질문 {#common-questions}

### 터미널의 `$PATH` 환경 변수에 중복 경로가 있거나 macOS에서 경로가 반대로 되어 있는 이유는 무엇인가요? {#why-are-there-duplicate-paths-in-the-terminals-path-environment-variable-and-or-why-are-they-reversed-on-macos}

이는 macOS에서 터미널이 VS Code의 환경을 사용하여 실행되는 방식 때문에 발생할 수 있습니다. VS Code가 처음 실행될 때 "개발 환경"을 로드하기 위해 구성된 셸을 **로그인 셸**로 실행하여 `~/.profile`/`~/.bash_profile`/`~/.zprofile` 스크립트를 실행합니다. 이제 터미널이 실행될 때도 로그인 셸로 실행되어 표준 경로를 앞에 놓고(예: `/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin`) 셸 환경을 다시 초기화합니다.

무슨 일이 일어나고 있는지 더 잘 이해하려면 운영 체제의 기본 터미널에서 내부 로그인 셸을 실행하여 시뮬레이션할 수 있습니다:

```sh
# $PATH의 시작에 /test 추가
export PATH=/test:$PATH
# $PATH 출력, /test가 시작에 있어야 함
echo $PATH
# 로그인 셸로 bash 실행
bash -l
# $PATH 출력, 값이 뒤섞여 있어야 함
echo $PATH
```

불행히도 Linux와 달리 독립 실행형 macOS 터미널은 기본적으로 모두 로그인 셸로 실행됩니다. 이는 macOS가 사용자가 시스템에 로그인할 때 로그인 셸을 실행하지 않기 때문입니다. 이는 프로필 스크립트에 별칭을 초기화하는 것과 같은 "나쁜 행동"을 조장합니다. 별칭은 로그인 셸이 아닌 셸에서 실행되므로 `rc` 스크립트에 있어야 합니다.

이 문제를 해결하는 두 가지 직접적인 방법이 있습니다. 첫 번째는 `"terminal.integrated.inheritEnv": false`로 설정하여 터미널 환경에서 대부분의 환경 변수를 제거하는 것입니다. 단, `HOME`, `SHELL`, `TMPDIR` 등 일부 중요한 변수는 제외됩니다.

다른 해결 방법은 터미널에서 로그인 셸을 더 이상 실행하지 않도록 프로필을 만들고 `args`를 `[]`로 설정하는 것입니다. 이 방법을 선택하면 프로필 스크립트에 있는 별칭을 `~/.bashrc`/`~/.zshrc` 파일로 이동해야 합니다. 별칭은 설정된 셸에만 적용되기 때문입니다.

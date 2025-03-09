---  
Order: 4  
Area: setup  
TOCTitle: Windows  
ContentId: 4670C281-5761-46E6-8C46-10D523946FFB  
PageTitle: Windows에서 Visual Studio Code 실행하기  
DateApproved: 2025/03/05  
MetaDescription: Windows에서 Visual Studio Code를 설치하고 실행하는 방법을 알아보세요.  
sidebar_label: Windows
---

# Visual Studio Code 에서의 Windows {#visual-studio-code-on-windows}

## Installation {#installation}

1. [Visual Studio Code 다운로드 및 설치](#install-vs-code-on-windows)

    :::note
    VS Code는 매월 릴리스를 제공하며, 새로운 릴리스가 있을 때 [자동 업데이트](#updates)를 지원합니다.
    :::

1. [추가 구성 요소 설치](/docs/setup/additional-components.md)

    Git, Node.js, TypeScript, 언어 런타임 등을 설치합니다.

1. [Visual Studio Marketplace에서 VS Code 확장 설치](https://marketplace.visualstudio.com/VSCode)

    테마, 포맷터, 언어 확장 및 좋아하는 언어의 디버거로 VS Code를 커스터마이징합니다.

1. [GitHub Copilot로 AI 지원 코딩 설정](/docs/copilot/setup-simplified.md)

    :::tip
    아직 Copilot을 구독하지 않았다면, [Copilot 무료 플랜](https://github.com/github-copilot/signup)에 가입하여 무료로 Copilot을 사용할 수 있으며, 월간 완료 및 채팅 상호작용의 한도가 제공됩니다.
    :::

1. [VS Code 튜토리얼 시작하기](/docs/getstarted/getting-started.md)

    VS Code의 사용자 인터페이스와 주요 기능을 알아봅니다.

## Install VS Code on Windows {#install-vs-code-on-windows}

### Use the Windows installer {#use-the-windows-installer}

1. Windows용 [Visual Studio Code 설치 프로그램](https://go.microsoft.com/fwlink/?LinkID=534107) 다운로드

1. 다운로드가 완료되면 설치 프로그램을 실행합니다 (VSCodeUserSetup-\{version\}.exe)

    기본적으로 VS Code는 `C:\Users\{Username}\AppData\Local\Programs\Microsoft VS Code`에 설치됩니다.

:::tip
설치 과정에서 Visual Studio Code가 `%PATH%` 환경 변수에 추가되어, 콘솔에서 'code .'를 입력하여 해당 폴더에서 VS Code를 열 수 있습니다. 설치 후 `%PATH%` 환경 변수의 변경 사항이 적용되려면 콘솔을 다시 시작해야 합니다.
:::

### Use the ZIP file {#use-the-zip-file}

1. [Visual Studio Code Zip 아카이브](/docs/?dv=winzip) 다운로드

1. Zip 아카이브를 추출하고 그곳에서 VS Code를 실행합니다.

## User setup versus system setup {#user-setup-versus-system-setup}

VS Code는 Windows **사용자** 및 **시스템** 수준의 설치를 모두 제공합니다.

| 설치 유형 | 설명 |
|------------|-------------|
| [사용자 설치](https://go.microsoft.com/fwlink/?LinkID=534107) | 사용자 Local AppData(`LOCALAPPDATA`) 폴더에 설치되므로 관리자 권한이 필요하지 않습니다. 권한 상승이 필요 없기 때문에 사용자 설치는 더 원활한 백그라운드 업데이트 경험을 제공합니다.<br />이 방법이 Windows에서 VS Code를 설치하는 데 권장됩니다. <br/> **Note:** 사용자 설치로 VS Code를 관리자 권한으로 실행할 경우 업데이트가 비활성화됩니다. |
| [시스템 설치](https://go.microsoft.com/fwlink/?linkid=852157) | 실행하려면 관리자 권한 상승이 필요하며, 설치는 시스템의 `Program Files` 아래에 위치합니다. 제품 내 업데이트 흐름도 권한 상승이 필요하므로 사용자 설치보다 덜 원활합니다. 반면, 시스템 설치를 통해 VS Code를 설치하면 시스템의 모든 사용자가 사용할 수 있습니다. |

사용 가능한 설치 옵션의 전체 목록은 [Visual Studio Code 다운로드](/download) 페이지를 참조하세요.

## Updates {#updates}

VS Code는 매월 [릴리스](/updates)를 제공하며, 새로운 릴리스가 있을 때 자동 업데이트를 지원합니다. VS Code에서 업데이트를 요청하면 최신 업데이트를 수락하고 설치됩니다(최신 버전을 받기 위해 추가 작업이 필요하지 않습니다).

:::note
VS Code를 자신의 일정에 맞춰 업데이트하려면 [자동 업데이트 비활성화](/docs/supporting/faq.md#how-do-i-opt-out-of-vs-code-autoupdates)를 선택할 수 있습니다.
:::

## 개발 도구로서의 Windows {#windows-as-a-developer-machine}

Windows는 인기 있는 운영 체제이며, 훌륭한 크로스 플랫폼 개발 환경이 될 수 있습니다. 이 섹션에서는 [Windows Subsystem for Linux](https://learn.microsoft.com/windows/wsl/install) (WSL) 및 Windows Terminal과 같은 크로스 플랫폼 기능을 설명합니다.

:::note
최신 Windows 빌드를 사용하고 있는지 확인하세요. **Settings** > **Windows Update**에서 최신 상태인지 확인할 수 있습니다.
:::

### Windows Subsystem for Linux {#windows-subsystem-for-linux}

WSL을 사용하면 Windows에서 Linux 배포판을 설치하고 실행하여 Linux에서 소스 코드를 개발하고 테스트할 수 있으며, 여전히 Windows 머신에서 로컬 작업을 수행할 수 있습니다.

[WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) 확장과 함께 사용하면 WSL의 컨텍스트에서 실행되는 동안 VS Code의 전체 편집 및 디버깅 지원을 받을 수 있습니다.

자세한 내용은 [WSL에서 개발하기](/docs/remote/wsl.md) 문서를 참조하거나 [WSL에서 작업하기](/docs/remote/wsl-tutorial.md) 소개 튜토리얼을 시도해 보세요.

### Windows Terminal {#windows-terminal}

Microsoft Store에서 제공되는 [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701)은 Command Prompt, PowerShell 및 WSL과 같은 명령줄 도구 및 셸 사용자를 위한 터미널 애플리케이션입니다. 주요 기능으로는 여러 탭, 창, 유니코드 및 UTF-8 문자 지원, GPU 가속 텍스트 렌더링 엔진, 사용자 정의 테마, 스타일 및 구성 등이 있습니다.

## 다음 단계 {#next-steps}

VS Code를 설치한 후, 다음 주제를 통해 더 많은 정보를 배울 수 있습니다:

* [VS Code 튜토리얼](/docs/getstarted/getting-started.md) - VS Code의 주요 기능을 간단히 체험해보는 투어입니다.
* [팁과 요령](/docs/getstarted/tips-and-tricks.md) - VS Code와 함께 작업할 때 유용한 생산성 팁 모음입니다.
* [AI 지원 코딩](/docs/copilot/overview.md) - GitHub Copilot을 사용하여 VS Code에서 코드를 더 빠르게 작성하는 방법에 대해 알아보세요.

## FAQ {#common-questions}

### What command-line arguments are supported by the Windows Setup? {#what-command-line-arguments-are-supported-by-the-windows-setup}

VS Code는 Windows용 설치 패키지를 만들기 위해 [Inno Setup](https://www.jrsoftware.org/isinfo.php)을 사용합니다. 따라서 모든 [Inno Setup 명령줄 스위치](https://www.jrsoftware.org/ishelp/index.php?topic=setupcmdline)를 사용할 수 있습니다.

또한, 설치 완료 후 VS Code가 자동으로 실행되지 않도록 하려면 `/mergetasks=!runcode`를 사용할 수 있습니다.

### I'm having trouble with the installer {#im-having-trouble-with-the-installer}

설치 프로그램 대신 [zip 파일](/docs/?dv=winzip)을 사용해 보세요. 이를 사용하려면 VS Code를 `AppData\Local\Programs` 폴더에 압축 해제하세요.

:::note
Zip 파일을 통해 VS Code를 설치한 경우, 각 [릴리스](/updates)에 대해 수동으로 업데이트해야 합니다.
:::

### AppLocker가 설정된 경우, VS Code를 관리자 권한으로 실행할 수 없는 이유는 무엇인가요?{#unable-to-run-as-admin-when-applocker-is-enabled}

프로세스 샌드박스가 도입됨에 따라 (이 [블로그 게시물](https://code.visualstudio.com/blogs/2022/11/28/vscode-sandbox)에서 논의됨) AppLocker가 구성된 경우 관리자 권한으로 실행하는 것이 현재 지원되지 않습니다.

작업에 관리자 권한으로 VS Code를 실행해야 하는 경우:

1. VS Code에서 명령 팔레트(`kb(workbench.action.showCommands)`)에서 **Preferences: Configure Runtime Arguments** 명령을 실행합니다.

    이 명령은 VS Code의 런타임 인수를 구성하기 위한 `argv.json` 파일을 엽니다. 이미 몇 가지 기본 인수가 있을 수 있습니다.

1. `argv.json` 파일에 `"disable-chromium-sandbox": true`를 추가합니다.

1. VS Code를 재시작합니다. 이제 관리자 권한으로 터미널에서 VS Code를 실행할 수 있어야 합니다.

업데이트를 받으려면 [이슈 #122951](https://github.com/microsoft/vscode/issues/122951)에 구독하세요.

### UNC 경로(네트워크 경로) 관련 문제 해결하기기 {#working-with-unc-paths}

버전 `1.78.1`부터, Windows에서 VS Code는 사용자에 의해 시작 시 승인된 UNC 경로(이 경로는 `\\`로 시작) 또는 `setting(security.allowedUNCHosts)` 설정을 통해 허용된 호스트 이름에만 접근을 허용합니다.

VS Code에서 UNC 경로를 사용하는 경우 다음 중 하나를 선택할 수 있습니다:

* `setting(security.allowedUNCHosts)` 설정을 통해 호스트를 허용하도록 구성합니다. 예를 들어, `\\server-a\path`와 같은 경로를 열 때 `server-a`를 추가합니다.

* [UNC 경로를 네트워크 드라이브로 매핑](https://support.microsoft.com/en-us/windows/map-a-network-drive-in-windows-29ce55d1-34e3-a7e2-4801-131475f9557d)하고 UNC 경로 대신 드라이브 문자를 사용합니다.

* 허용할 호스트 이름 목록을 백슬래시로 구분하여 `NODE_UNC_HOST_ALLOWLIST`라는 전역 환경 변수를 정의합니다. 예를 들어, `server-a\server-b`를 추가하여 `server-a`와 `server-b` 호스트를 허용합니다.

:::note
원격 작업 공간에 원격으로 연결하기 위해 원격 확장을 사용하는 경우 (예: SSH), `setting(security.allowedUNCHosts)`는 로컬 머신이 아닌 원격 머신에서 구성해야 합니다.
:::

이 변경 사항항은 UNC 경로를 사용할 때 VS Code의 보안을 개선하기 위해 이루어졌습니다. 자세한 내용은 관련 [보안 권고](https://github.com/microsoft/vscode/security/advisories/GHSA-mmfh-4pv3-39hr)를 참조하세요.

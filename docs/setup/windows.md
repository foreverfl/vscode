---
Order: 4
Area: setup
TOCTitle: Windows
ContentId: 4670C281-5761-46E6-8C46-10D523946FFB
PageTitle: Windows에서 Visual Studio Code 실행하기
DateApproved: 12/11/2024
MetaDescription: Visual Studio Code를 Windows에서 설치하고 실행하기
---

# Windows용 Visual Studio Code {#visual-studio-code-on-windows}

## 설치 {#installation}

1. Windows용 [Visual Studio Code 설치 프로그램](https://go.microsoft.com/fwlink/?LinkID=534107)을 다운로드합니다.
2. 다운로드가 완료되면 설치 프로그램(VSCodeUserSetup-\{version\}.exe)을 실행합니다. 이 과정은 1분 정도 소요됩니다.
3. 기본적으로 VS Code는 `C:\Users\{Username}\AppData\Local\Programs\Microsoft VS Code`에 설치됩니다.

또는 [Zip 아카이브](/docs/?dv=winzip)를 다운로드하여 압축을 풀고 해당 경로에서 VS Code를 실행할 수도 있습니다.

:::tip
설치 프로그램은 Visual Studio Code를 `%PATH%`에 추가하므로, 콘솔에서 'code .' 를 입력하여 해당 폴더에서 VS Code를 열 수 있습니다. `%PATH%` 환경 변수의 변경사항을 적용하려면 설치 후 콘솔을 다시 시작해야 합니다.
:::

## 사용자 설치와 시스템 설치 비교 {#user-setup-versus-system-setup}

VS Code는 Windows **사용자** 및 **시스템** 수준의 설치를 모두 제공합니다.

[사용자 설치](https://go.microsoft.com/fwlink/?LinkID=534107)는 설치 위치가 사용자의 Local AppData (`LOCALAPPDATA`) 폴더 아래에 있기 때문에 관리자 권한이 필요하지 않습니다. 권한 상승이 필요하지 않기 때문에 사용자 설치는 더 원활한 백그라운드 업데이트 경험을 제공할 수 있습니다. 이는 Windows에서 VS Code를 설치하는 데 선호되는 방법입니다.

:::note
사용자 설치에서 VS Code를 관리자로 실행할 경우 업데이트가 비활성화됩니다.
:::

[시스템 설치](https://go.microsoft.com/fwlink/?linkid=852157)는 실행을 위해 관리자 권한으로의 상승이 필요하며 설치를 시스템의 Program Files 아래에 위치시킵니다. 제품 내 업데이트 과정도 권한 상승이 필요하므로 사용자 설치보다 덜 원활합니다. 반면, 시스템 설치를 사용하여 VS Code를 설치하면 시스템의 모든 사용자가 사용할 수 있게 됩니다.

사용 가능한 모든 설치 옵션의 전체 목록은 [Visual Studio Code 다운로드](/download) 페이지를 참조하세요.

## 업데이트 {#updates}

VS Code는 매월 [릴리스](/updates)를 제공하며 새로운 릴리스가 있을 때 자동 업데이트를 지원합니다. VS Code에서 메시지가 표시되면 최신 업데이트를 수락하면 설치됩니다(최신 버전을 얻기 위해 다른 작업을 할 필요가 없습니다).

:::note
원하는 일정에 따라 VS Code를 업데이트하려면 [자동 업데이트를 비활성화](/docs/supporting/faq.md#how-do-i-opt-out-of-vs-code-autoupdates)할 수 있습니다.
:::

## Windows Subsystem for Linux {#windows-subsystem-for-linux}

Windows는 인기 있는 운영 체제이며 훌륭한 크로스 플랫폼 개발 환경이 될 수 있습니다. 이 섹션에서는 [Windows Subsystem for Linux](https://learn.microsoft.com/windows/wsl/install) (WSL)와 새로운 Windows Terminal과 같은 크로스 플랫폼 기능에 대해 설명합니다.

### 최신 Windows 빌드 {#recent-windows-build}

최신 Windows 10 빌드를 사용하고 있는지 확인하세요. **Settings > Windows Update**에서 최신 상태인지 확인할 수 있습니다.

### 개발 환경경으로서의 Windows {#windows-as-a-developer-machine}

WSL을 사용하면 Windows에서 Linux 배포판을 설치하고 실행할 수 있습니다. 이를 통해 Windows 환경에서서 로컬로 작업하면서도 Linux에서 소스 코드를 개발하고 테스트할 수 있습니다.

[WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) 확장과 결합하면, WSL 컨텍스트에서 실행하면서 VS Code의 완전한 편집 및 디버깅 지원을 받을 수 있습니다.

자세히 알아보려면 [WSL에서 개발하기](/docs/remote/wsl.md) 문서를 참조하거나 [WSL 작업하기](/docs/remote/wsl-tutorial.md) 입문 튜토리얼을 시도해보세요.

### 새로운 Windows Terminal {#new-windows-terminal}

Microsoft Store에서 이용할 수 있는 [Windows Terminal (Preview)](https://www.microsoft.com/p/windows-terminal-preview/9n0dx20hk701?SilentAuth=1&wa=wsignin1.0&activetab=pivot%3Aoverviewtab)을 사용하면 여러 탭 셸에서 PowerShell, 명령 프롬프트, WSL 터미널을 쉽게 열 수 있습니다.

## 다음 단계 {#next-steps}

VS Code를 설치한 후에는 다음 주제들이 VS Code에 대해 더 자세히 배우는 데 도움이 될 것입니다:

- [추가 구성 요소](/docs/setup/additional-components.md) - Git, Node.js, TypeScript 및 Yeoman과 같은 도구를 설치하는 방법을 알아보세요.
- [사용자 인터페이스](/docs/getstarted/userinterface.md) - VS Code에 대한 빠른 오리엔테이션입니다.
- [사용자/작업 영역 설정](/docs/getstarted/settings.md) - 설정을 통해 VS Code를 사용자의 선호도에 맞게 구성하는 방법을 알아보세요.
- [팁과 요령](/docs/getstarted/tips-and-tricks.md) - VS Code를 사용하여 생산성을 높이는 방법을 바로 배우고 시작할 수 있습니다.

## 자주 묻는 질문 {#common-questions}

### Windows 설치 프로그램은 어떤 명령줄 인수를 지원하나요? {#what-command-line-arguments-are-supported-by-the-windows-setup}

VS Code는 [Inno Setup](https://www.jrsoftware.org/isinfo.php)을 사용하여 Windows용 설치 패키지를 만듭니다. 따라서 모든 [Inno Setup 명령줄 스위치](https://www.jrsoftware.org/ishelp/index.php?topic=setupcmdline)를 사용할 수 있습니다.

추가로, `/mergetasks=!runcode`를 사용하여 설치 완료 후 VS Code 실행을 방지할 수 있습니다.

### 스크롤이 느리고 부드럽지 않습니다 {#scrolling-is-laggy-and-not-smooth}

특정 기기에서는 편집기 스크롤이 부드럽지 않고 느려서 불쾌한 경험을 제공합니다. 이 문제를 발견하면 이 문제가 해결된 Windows 10 2018년 10월 업데이트를 설치했는지 확인하세요.

### 설치 프로그램에 문제가 있습니다 {#im-having-trouble-with-the-installer}

설치 프로그램 대신 [zip 파일](/docs/?dv=winzip)을 사용해 보세요. 이를 사용하려면 VS Code를 `AppData\Local\Programs` 폴더에 압축 해제하세요.

:::note
VS Code를 Zip 파일로 설치한 경우 각 [릴리스](/updates)마다 수동으로 업데이트해야 합니다.
:::

### 아이콘이 누락되었습니다 {#icons-are-missing}

Windows 8 환경에 Visual Studio Code를 설치했는데 워크벤치와 편집기에서 일부 아이콘이 나타나지 않는 이유는 무엇인가요?

VS Code는 [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) 아이콘을 사용하며 .SVG 파일 확장자가 `image/svg+xml` 이외의 다른 것과 연결된 경우를 발견했습니다. 해결 방법을 고려 중이지만 현재는 다음과 같은 해결 방법이 있습니다:

명령 프롬프트 사용:

1. 관리자 명령 프롬프트를 엽니다.
2. `REG ADD HKCR\.svg /f /v "Content Type" /t REG_SZ /d image/svg+xml`을 입력합니다.

레지스트리 편집기(regedit) 사용:

1. `regedit`를 시작합니다.
2. `HKEY_CLASSES_ROOT` 키를 엽니다.
3. `.svg` 키를 찾습니다.
4. `Content Type` 데이터 값을 `image/svg+xml`로 설정합니다.
5. `regedit`를 종료합니다.

### AppLocker가 활성화되어 있을 때 관리자로 실행할 수 없어요 {#unable-to-run-as-admin-when-applocker-is-enabled}

프로세스 샌드박싱 도입(이 [블로그 포스트](https://code.visualstudio.com/blogs/2022/11/28/vscode-sandbox)에서 논의됨)으로 인해 AppLocker가 구성되어 있을 때는 런타임 샌드박스의 제한으로 인해 현재 관리자로 실행하는 것이 지원되지 않습니다. 작업상 VS Code를 상승된 터미널에서 실행해야 하는 경우, 해결 방법으로 `--no-sandbox --disable-gpu-sandbox`와 함께 `code`를 실행할 수 있습니다.

업데이트를 받으려면 [이슈 #122951](https://github.com/microsoft/vscode/issues/122951)을 구독하세요.

### UNC 경로 작업 {#working-with-unc-paths}

버전 `1.78.1`부터 Windows의 VS Code는 시작 시 사용자가 승인했거나 새로운 `security.allowedUNCHosts` 설정을 통해 호스트 이름이 허용되도록 구성된 UNC 경로(이는 선행 `\\`로 시작)에만 액세스를 허용합니다.

VS Code에서 UNC 경로를 사용해야 하는 경우 다음과 같은 옵션이 있습니다:

- `security.allowedUNCHosts` 설정을 통해 호스트가 허용되도록 구성 (예: `\\server-a\path`와 같은 경로를 열 때 `server-a` 추가)
- UNC 경로를 네트워크 드라이브로 매핑하고 UNC 경로 대신 드라이브 문자 사용 ([설명서](https://support.microsoft.com/en-us/windows/map-a-network-drive-in-windows-29ce55d1-34e3-a7e2-4801-131475f9557d))
- 허용할 호스트 이름의 백슬래시로 구분된 목록으로 전역 환경 변수 `NODE_UNC_HOST_ALLOWLIST`를 정의 (예: `server-a\server-b`로 호스트 `server-a`와 `server-b` 허용)

:::note
원격 확장을 사용하여 원격으로 작업 영역에 연결하는 경우(SSH 등), `security.allowedUNCHosts`는 로컬 환경이이 아닌 원격 환경에서 구성되어야 합니다.
:::

이 변경은 UNC 경로를 사용할 때 VS Code의 보안을 개선하기 위해 수행되었습니다. 자세한 내용은 관련 [보안 권고](https://github.com/microsoft/vscode/security/advisories/GHSA-mmfh-4pv3-39hr)를 참조하세요.

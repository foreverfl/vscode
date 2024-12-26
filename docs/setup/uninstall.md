---
Order: 9
Area: setup
TOCTitle: 제거
ContentId: 435486d3-ad55-4a31-a087-d108f75ba669
PageTitle: Visual Studio Code 제거
DateApproved: 12/11/2024
MetaDescription: Visual Studio Code 제거 및 정리하기
---

# Visual Studio Code 제거하기 {#uninstall-visual-studio-code}

Visual Studio Code를 제거하는 단계는 플랫폼(Windows, macOS 또는 Linux)과 사용한 설치 옵션에 따라 다릅니다. 예를 들어 Windows에서는 시스템 또는 사용자 Windows 설치 관리자를 사용하거나 `.zip` 파일을 다운로드하여 컴퓨터의 어느 곳에나 내용을 추출할 수 있습니다.

일반적으로 VS Code는 다른 데스크톱 애플리케이션처럼 제거하고 플랫폼에서 권장하는 소프트웨어 제거 절차를 따르면 됩니다. 아래에서 플랫폼별 지침과 남아있는 VS Code 구성 파일을 [완전히 정리](#clean-uninstall)하는 방법을 제공합니다.

## Windows {#windows}

### Windows 설치 관리자 {#windows-installer}

Windows 설치 관리자를 통해 VS Code를 설치한 경우, 사용자 또는 시스템 버전 모두 설치 관리자를 사용하여 VS Code를 제거하세요.

- 시작 메뉴
  - **프로그램 추가 또는 제거**를 검색하고 **앱** > **앱 및 기능** 목록에서 Visual Studio Code를 찾습니다.
  - 오른쪽의 작업 드롭다운(세로 점 3개)에서 **제거**를 선택합니다.
  - 메시지에 따라 VS Code를 제거합니다.
- 제어판
  - **프로그램**에서 **프로그램 제거** 링크를 선택합니다.
  - Visual Studio Code 항목을 찾아 마우스 오른쪽 버튼을 클릭하고 **제거** 명령을 선택합니다.
  - 메시지에 따라 VS Code를 제거합니다.

### .zip 파일 설치 {#zip-file-installation}

[Visual Studio Code 웹사이트](https://code.visualstudio.com/#alt-downloads)에서 `.zip` 파일을 다운로드하여 압축을 풀어 Windows에 VS Code를 설치한 경우, `.zip` 내용을 추출한 폴더를 삭제하면 제거할 수 있습니다.

## macOS {#macos}

macOS에서 VS Code를 제거하려면 **Finder**를 열고 **응용 프로그램**으로 이동합니다. Visual Studio Code 애플리케이션을 마우스 오른쪽 버튼으로 클릭하고 **휴지통으로 이동**을 선택합니다.

## Linux {#linux}

Linux에서 VS Code를 제거하려면 패키지 관리자의 제거 옵션을 사용해야 합니다. 정확한 명령줄은 사용하는 패키지 관리자에 따라 다릅니다(예: `apt-get`, `rpn`, `dnf`, `yum` 등).

VS Code 패키지의 이름은 다음과 같습니다:

- `code` - VS Code 안정 릴리스
- `code-insiders` - VS Code [Insiders](/insiders) 릴리스

예를 들어, Debian 패키지(`.deb`)와 `apt-get` 패키지 관리자를 통해 VS Code를 설치한 경우 다음을 실행합니다:

```bash
sudo apt-get remove code
```

여기서 `code`는 VS Code Debian 패키지의 이름입니다.

## 완전 제거 {#clean-uninstall}

VS Code를 제거한 후 모든 사용자 데이터를 제거하려면 사용자 데이터 폴더인 `Code`와 `.vscode`를 삭제할 수 있습니다. 이렇게 하면 VS Code를 설치하기 전 상태로 돌아갑니다. VS Code를 제거하지 않고 모든 설정을 초기화하려는 경우에도 사용할 수 있습니다.

폴더 위치는 플랫폼에 따라 다릅니다:

- **Windows** - `%APPDATA%\Code`와 `%USERPROFILE%\.vscode`를 삭제하세요.
- **macOS** - `$HOME/Library/Application Support/Code`와 `~/.vscode`를 삭제하세요.
- **Linux** - `$HOME/.config/Code`와 `~/.vscode`를 삭제하세요.

## 다음 단계 {#next-steps}

- [설정 개요](/docs/setup/setup-overview.md) - VS Code 설정 및 업데이트에 대한 일반 정보입니다.
- [Windows 설정](/docs/setup/windows.md) - Windows에 VS Code 설치에 대한 세부 정보와 일반적인 질문입니다.
- [macOS 설정](/docs/setup/mac.md) - VS Code는 Intel 및 Apple 실리콘 macOS 기기 모두에서 사용할 수 있습니다.
- [Linux 설정](/docs/setup/linux.md) - Linux에서 사용할 수 있는 다양한 VS Code 패키지에 대해 알아보세요.

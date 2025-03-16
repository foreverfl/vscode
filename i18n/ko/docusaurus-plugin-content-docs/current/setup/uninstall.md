---
Order: 9
Area: setup
TOCTitle: 삭제
ContentId: 435486d3-ad55-4a31-a087-d108f75ba669
PageTitle: Visual Studio Code 삭제
DateApproved: 03/05/2025
MetaDescription: Visual Studio Code를 삭제하고 정리합니다.
sidebar_label: 삭제
---
# Visual Studio Code 삭제 {#uninstall-visual-studio-code}

Visual Studio Code를 삭제하는 단계는 사용 중인 플랫폼(Windows, macOS 또는 Linux)과 사용한 설치 옵션에 따라 다릅니다. 예를 들어 Windows에서는 시스템 또는 사용자 Windows 설치 프로그램을 사용하거나 `.zip` 파일을 다운로드하여 원하는 위치에 압축을 풀어 실행할 수도 있습니다.

일반적으로 VS Code는 다른 데스크톱 애플리케이션을 삭제하는 것처럼 삭제하며, 소프트웨어 삭제를 위한 플랫폼의 권장 흐름을 따릅니다. 아래에는 특정 플랫폼에 대한 안내와 함께 남아 있는 VS Code 구성 파일을 [완전히 정리하는 방법](#clean-uninstall)이 제공됩니다.

## Windows {#windows}

### Windows 설치 프로그램 {#windows-installer}

Windows 설치 프로그램(사용자 또는 시스템 버전)을 통해 VS Code를 설치한 경우, 설치 프로그램을 사용하여 VS Code를 삭제합니다.

* 시작 메뉴
  * **Add or Remove Programs**를 검색하고 **Apps** > **Apps & features** 목록에서 Visual Studio Code를 찾습니다.
  * 오른쪽의 작업 드롭다운에서 **Uninstall**를 선택합니다(세 개의 수직 점).
  * VS Code를 삭제하기 위한 안내를 따릅니다.
* 제어판
  * **Programs** 아래에서 **Uninstall a program** 링크를 선택합니다.
  * Visual Studio Code 항목을 찾아 마우스 오른쪽 버튼을 클릭하고 **Uninstall** 명령을 선택합니다.
  * VS Code를 삭제하기 위한 안내를 따릅니다.

### .zip 파일 설치 {#zip-file-installation}

[Visual Studio Code 웹사이트](https://code.visualstudio.com/#alt-downloads)에서 `.zip` 파일 중 하나를 다운로드하여 추출하여 Windows에 VS Code를 설치한 경우, `.zip` 내용을 추출한 폴더를 삭제하여 삭제할 수 있습니다.

## macOS {#macos}

macOS에서 VS Code를 삭제하려면 **Finder**를 열고 **Applications**으로 이동합니다. Visual Studio Code 애플리케이션을 마우스 오른쪽 버튼으로 클릭하고 **Move to Trash**을 선택합니다.

## Linux {#linux}

Linux에서 VS Code를 삭제하려면 패키지 관리자의 삭제 또는 삭제 옵션을 사용해야 합니다. 정확한 명령어는 사용한 패키지 관리자에 따라 다릅니다(예: `apt-get`, `rpn`, `dnf`, `yum` 등).

VS Code 패키지의 이름은 다음과 같습니다:

* `code` - VS Code 안정 버전
* `code-insiders` - VS Code [Insiders](/insiders) 버전

예를 들어, Debian 패키지(`.deb`)와 `apt-get` 패키지 관리자를 통해 VS Code를 설치한 경우, 다음 명령어를 실행합니다:

```bash
sudo apt-get remove code
```

여기서 `code`는 VS Code Debian 패키지의 이름입니다.

## 완전 삭제 {#clean-uninstall}

VS Code를 삭제한 후 모든 사용자 데이터를 삭제하려면 사용자 데이터 폴더인 `Code`와 `.vscode`를 삭제할 수 있습니다. 이렇게 하면 VS Code를 설치하기 전 상태로 돌아갑니다. VS Code를 삭제하고 싶지 않은 경우 모든 설정을 초기화하는 데에도 사용할 수 있습니다.

폴더 위치는 플랫폼에 따라 다릅니다:

* **Windows** - `%APPDATA%\Code` 및 `%USERPROFILE%\.vscode`를 삭제합니다.
* **macOS** - `$HOME/Library/Application Support/Code` 및 `~/.vscode`를 삭제합니다.
* **Linux** - `$HOME/.config/Code` 및 `~/.vscode`를 삭제합니다.

## 다음 단계 {#next-steps}

* [설정 개요](/docs/setup/setup-overview.md) - VS Code 설정 및 업데이트에 대한 일반 정보입니다.
* [Windows 설정](/docs/setup/windows.md) - Windows에 VS Code를 설치하는 것에 대한 세부정보 및 일반 질문입니다.
* [macOS 설정](/docs/setup/mac.md) - VS Code는 Intel 및 Apple 실리콘 macOS 기기 모두에서 사용할 수 있습니다.
* [Linux 설정](/docs/setup/linux.md) - Linux에서 사용할 수 있는 다양한 VS Code 패키지에 대해 알아보세요.

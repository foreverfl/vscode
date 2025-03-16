---
Order: 5
Area: setup
TOCTitle: Raspberry Pi
ContentId: E059E35A-8AD0-4D4A-9BE1-E23D45D75C1C
PageTitle: Raspberry Pi OS에서 Visual Studio Code 실행하기
DateApproved: 03/05/2025
MetaDescription: Raspberry Pi OS에서 Visual Studio Code를 설치하고 실행하세요.
sidebar_label: Raspberry Pi
---
# Raspberry Pi에서 Visual Studio Code {#visual-studio-code-on-raspberry-pi}

공식적으로 지원되지는 않지만, [Raspberry Pi](https://www.raspberrypi.org) 장치에서 Visual Studio Code를 실행할 수 있습니다.

[![Raspberry Pi 로고](images/raspberry-pi-os/RPi-Logo-Landscape-Reg-SCREEN.png)](https://www.raspberrypi.org)

Visual Studio Code를 다운로드하고 사용함으로써, [라이선스 조건](https://code.visualstudio.com/license) 및 [개인정보 보호 정책](https://go.microsoft.com/fwlink/?LinkID=528096&clcid=0x409)에 동의하게 됩니다.

## 설치 {#installation}

Visual Studio Code는 [Raspberry Pi OS](https://www.raspberrypi.org/software/operating-systems) (이전에는 Raspbian이라고 불림) APT 저장소를 통해 32비트 및 64비트 버전으로 공식 배포됩니다.

다음 명령어를 실행하여 설치할 수 있습니다:

```bash
sudo apt update
sudo apt install code
```

### VS Code 실행하기 {#running-vs-code}

VS Code 패키지를 설치한 후, 터미널에 `code`를 입력하거나 **프로그래밍** 메뉴를 통해 VS Code를 실행할 수 있습니다.

![Raspberry Pi의 프로그래밍 메뉴 아래의 Visual Studio Code](images/raspberry-pi-os/vscode-under-programming.jpg)

## 업데이트 {#updates}

Raspberry Pi는 시스템의 다른 패키지와 동일한 방식으로 VS Code 업데이트를 처리해야 합니다:

```bash
sudo apt update
sudo apt upgrade code
```

새로운 릴리스가 언제 제공되는지 항상 [업데이트](/updates) 페이지에서 확인할 수 있습니다.

## 시스템 요구 사항 {#system-requirements}

VS Code는 Raspberry Pi에서 공식적으로 지원되지 않습니다. 지원 가능성이 확인된 플랫폼에 대한 정보는 [커뮤니티 토론](https://github.com/microsoft/vscode-discussions/discussions/2379)을 확인하세요.

## 다음 단계 {#next-steps}

VS Code를 설치한 후, 다음 주제를 통해 더 많은 정보를 배울 수 있습니다:

* [추가 구성 요소](/docs/setup/additional-components.md) - Git, Node.js, TypeScript 및 Yeoman과 같은 도구를 설치하는 방법을 배웁니다.
* [사용자 인터페이스](/docs/getstarted/userinterface.md) - VS Code에 대한 간단한 안내입니다.
* [사용자/작업 공간 설정](/docs/editor/settings.md) - 설정을 통해 VS Code를 개인의 취향에 맞게 구성하는 방법을 배웁니다.

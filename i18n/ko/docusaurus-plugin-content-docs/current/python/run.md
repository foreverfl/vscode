---
Order: 3
Area: python
TOCTitle: 파이썬 코드 실행하기
ContentId:
PageTitle: Visual Studio Code에서 파이썬 코드 실행하기
DateApproved: 03/05/2025
MetaDescription: Visual Studio Code에서 파이썬 코드 실행하기
MetaSocialImage: images/tutorial/python-social.png
---

# Visual Studio Code에서 파이썬 코드 실행하기 {#running-python-code-in-visual-studio-code}

REPL에서 작은 파이썬 코드 줄을 실험하든, 파이썬 스크립트를 실행할 준비가 되었든, 파이썬 확장은 코드를 실행하는 여러 가지 방법을 제공합니다.

## 대화형으로 파이썬 코드 실행하기 {#interactively-running-python-code}

당신의 컴퓨터에 설치된 파이썬 인터프리터는 코드 조각을 읽고, 평가한 후 결과를 콘솔에 출력하는 대화형 REPL(읽기-평가-출력 루프)을 제공합니다.

컴퓨터에 파이썬 인터프리터를 설치한 후, 시스템의 터미널이나 명령 프롬프트를 열고 `python` (Windows) 또는 `python3` (macOS/Linux)를 입력하여 파이썬 REPL을 활성화할 수 있습니다. 이때 REPL은 `>>>`로 표시됩니다.

VS Code에서 파이썬 REPL과 상호작용할 수 있는 두 가지 추가 방법이 있습니다.

### 네이티브 REPL {#native-repl}

VS Code의 파이썬 네이티브 REPL은 고전적인 파이썬 REPL을 기반으로 하며, 파이썬 개발 경험을 더 효율적으로 만들기 위해 Intellisense 및 구문 강조와 같은 추가 기능을 제공합니다. 그러나 이 REPL은 파이썬 자체에 내장된 REPL의 원칙을 따르며, 역사적 실행 순서와 그 내용은 변경할 수 없습니다.

명령 팔레트(`kb(workbench.action.showCommands)`)를 통해 **Python: Start Native REPL**을 검색하여 네이티브 REPL을 열 수 있습니다. 또한, `"python.REPL.sendToNativeREPL": true`를 `settings.json` 파일에 설정하여 Smart Send(`kbstyle(Shift+Enter)`) 및 **Run Selection/Line in Python REPL**을 통해 코드를 네이티브 REPL로 보낼 수 있습니다. 터미널에 있는 파이썬 내장 REPL(`>>>`)을 계속 사용하려면 `settings.json`에 `"python.REPL.sendToNativeREPL": false`를 설정하면 됩니다.

![파이썬 네이티브 REPL을 보여주는 GIF.](images/shared/nativeREPL-demo.gif)

### 터미널 REPL {#terminal-repl}

VS Code 외부에서 파이썬 REPL과 상호작용하는 것처럼, VS Code 내에서 터미널을 열고 파이썬 REPL을 활성화할 수 있습니다. 이를 위해 명령 팔레트(`kb(workbench.action.showCommands)`)에서 **Python: Start Terminal REPL**을 검색하면 현재 선택된 파이썬 인터프리터에 대한 터미널이 열립니다. 또는 **Terminal > New Terminal**로 이동하여 `python` (Windows) 또는 `python3` (macOS/Linux) 명령을 입력할 수 있습니다.

터미널에서는 [Terminal Shell Integration](https://code.visualstudio.com/docs/terminal/shell-integration)과 같은 여러 기능이 지원되며, 최근 명령 실행, 명령 장식자, 개선된 접근성 등이 포함됩니다. 터미널에서 셸 통합을 활성화하거나 비활성화하려면 설정에서 `setting(python.terminal.shellIntegration.enabled)`를 전환할 수 있습니다.

## 파이썬 코드 실행하기 {#run-python-code}

파이썬 확장은 추가 구성 없이 파이썬 코드를 실행하는 다양한 방법을 제공합니다.

1. 편집기 오른쪽 상단에 있는 **Run Python File in Terminal** 재생 버튼을 선택합니다.

    ![터미널에서 파이썬 파일 실행 버튼 사용하기](images/tutorial/run-python-file-in-terminal-button.png)

    이 버튼을 클릭하면 파이썬 인터프리터가 자동으로 활성화된 터미널 패널이 열리고, 지정된 스크립트가 실행됩니다(예: `python3 hello.py` (macOS/Linux) 또는 `python hello.py` (Windows)):

    ![파이썬 터미널에서의 프로그램 출력](images/tutorial/output-in-terminal.png)

2. 편집기 창의 아무 곳이나 마우스 오른쪽 버튼을 클릭한 후 **Run > Python File in Terminal**을 선택합니다(이 경우 파일이 자동으로 저장됩니다):

   ![파이썬 편집기에서 터미널에서 파이썬 파일 실행 명령](images/tutorial/run-python-file-in-terminal.png)

3. 하나 이상의 줄을 선택한 후 `kbstyle(Shift+Enter)`를 누르거나 마우스 오른쪽 버튼을 클릭하고 **Run Selection/Line in Python Terminal**을 선택합니다.

    이 옵션은 파일의 일부만 테스트할 때 편리합니다.

4. 코드 줄에 커서를 놓고 `kbstyle(Shift+Enter)`를 눌러 Smart Send를 활성화합니다.

### Smart Send {#smart-send}

파이썬 확장은 기본적으로 Smart Send(`kbstyle(Shift+Enter)`)를 활성화합니다. Smart Send는 커서가 위치한 코드 조각을 확인하고, 실행 가능한 가장 작은 코드 조각을 파이썬 REPL로 전송한 후 커서를 다음 코드 줄로 이동시킵니다. 이를 통해 프로그램에서 파이썬 코드를 쉽게 효율적으로 실행할 수 있습니다.

Smart Send는 지원되지 않는 파이썬 버전(예: 파이썬 2)이나 유효하지 않은 파이썬 코드에서는 작동하지 않습니다. 커서가 위치한 줄의 코드만 전송하도록 Smart Send를 비활성화하려면 `python.REPL.enableREPLSmartSend`를 `false`로 설정합니다.

## 추가 정보 {#see-also}

- [디버깅](/docs/python/debugging.md) - 로컬 및 원격에서 파이썬을 디버깅하는 방법을 배웁니다.
- [테스트](/docs/python/testing.md) - 테스트 환경을 구성하고, 테스트를 발견하고 실행하며 디버깅하는 방법을 배웁니다.
---
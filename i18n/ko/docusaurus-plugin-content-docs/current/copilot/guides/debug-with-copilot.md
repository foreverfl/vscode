---
ContentId: 2f21c45a-8931-4da2-a921-af23a3b92949
DateApproved: 03/05/2025
MetaDescription: GitHub Copilot을 사용하여 Visual Studio Code에서 디버깅 구성을 설정하고 디버깅 중 문제를 해결하는 방법을 배워보세요.
---

# GitHub Copilot으로 디버깅하기 {#debug-with-github-copilot}

GitHub Copilot은 Visual Studio Code에서 디버깅 작업 흐름을 개선하는 데 도움을 줄 수 있습니다. Copilot은 프로젝트의 디버그 구성을 설정하는 데 도움을 주고, 디버깅 중 발견된 문제를 해결하기 위한 제안을 제공합니다. 이 문서에서는 VS Code에서 애플리케이션을 디버깅하기 위해 Copilot을 사용하는 방법에 대한 개요를 제공합니다.

Copilot은 다음과 같은 디버깅 작업을 도와줄 수 있습니다:

* **디버그 설정 구성**: 프로젝트를 위한 실행 구성을 생성하고 사용자 정의합니다.
* **디버깅 세션 시작**: 터미널에서 `copilot-debug`를 사용하여 디버깅 세션을 시작합니다.
* **문제 해결**: 디버깅 중 발견된 문제를 해결하기 위한 제안을 받습니다.

> [!TIP]
> 아직 Copilot 구독이 없다면, [Copilot 무료 요금제](https://github.com/github-copilot/signup)에 가입하여 무료로 Copilot을 사용할 수 있으며, 월별 완료 및 채팅 상호작용 한도를 받을 수 있습니다.

## Copilot으로 디버그 구성 설정하기 {#set-up-debug-configuration-with-copilot}

VS Code는 [디버그 구성](/docs/editor/debugging-configuration.md)을 저장하기 위해 `launch.json` 파일을 사용합니다. Copilot은 이 파일을 생성하고 사용자 정의하여 프로젝트의 디버깅을 설정하는 데 도움을 줄 수 있습니다.

1. 채팅 뷰를 엽니다 (`kb(workbench.action.chat.open)`).
1. `/startDebugging` 명령어를 입력합니다.
1. Copilot의 안내에 따라 프로젝트의 디버깅을 설정합니다.

또는 다음과 같은 자연어 프롬프트를 사용할 수 있습니다:

* "Django 앱을 위한 디버그 구성을 생성하세요."
* "React Native 앱의 디버깅을 설정하세요."
* "Flask 애플리케이션의 디버깅을 구성하세요."

## Copilot으로 디버깅 시작하기 {#start-debugging-with-copilot}

`copilot-debug` 터미널 명령어는 디버깅 세션을 구성하고 시작하는 과정을 간소화합니다. 애플리케이션을 시작하는 데 사용할 명령어 앞에 `copilot-debug`를 붙이면 Copilot이 자동으로 디버깅 세션을 구성하고 시작합니다.

1. 통합 터미널을 엽니다 (`kb(workbench.action.terminal.toggleTerminal)`).

1. `copilot-debug` 다음에 애플리케이션의 시작 명령어를 입력합니다. 예를 들어:

    ```bash
    copilot-debug node app.js
    ```

    또는

    ```bash
    copilot-debug python manage.py
    ```

1. Copilot이 애플리케이션을 위한 디버깅 세션을 시작합니다. 이제 VS Code의 내장 디버깅 기능을 사용할 수 있습니다.

[VS Code에서 디버깅하는 방법](/docs/editor/debugging.md)에 대해 더 알아보세요.

## Copilot으로 코딩 문제 해결하기 {#fix-coding-issues-with-copilot}

Copilot Chat을 사용하여 코딩 문제를 해결하거나 코드를 개선할 수 있습니다.

### 채팅 프롬프트 사용하기 {#use-chat-prompts}

1. 애플리케이션 코드 파일을 엽니다.

1. 다음 중 하나의 뷰를 엽니다:
    * Copilot Edits (`kb(workbench.action.chat.openEditSession)`)
    * 채팅 뷰 (`kb(workbench.action.chat.open)`)
    * 인라인 채팅 (`kb(inlineChat.start)`)

1. 다음과 같은 프롬프트를 입력합니다:
    * "/fix"
    * "이 #selection을 수정하세요."
    * "이 함수의 입력을 검증하세요."
    * "이 코드를 리팩토링하세요."
    * "이 코드의 성능을 개선하세요."

[Copilot Chat](/docs/copilot/copilot-chat.md) 및 [Copilot Edits](/docs/copilot/copilot-edits.md)를 VS Code에서 사용하는 방법에 대해 더 알아보세요.

### 에디터 스마트 액션 사용하기 {#use-editor-smart-actions}

프롬프트를 작성하지 않고 애플리케이션 코드의 코딩 문제를 해결하려면 에디터 스마트 액션을 사용할 수 있습니다.

1. 애플리케이션 코드 파일을 엽니다.
1. 수정할 코드를 선택합니다.
1. 마우스 오른쪽 버튼을 클릭하고 **Copilot** > **Fix**를 선택합니다.

    Copilot이 코드를 수정하기 위한 제안을 제공합니다.

1. 선택적으로, 채팅 프롬프트에 추가적인 맥락을 제공하여 생성된 코드를 다듬을 수 있습니다.

## 다음 단계 {#next-steps}

* [VS Code의 일반 디버깅 기능](/docs/editor/debugging.md)을 탐색하세요.
* [VS Code의 Copilot에 대해 더 알아보세요](/docs/copilot/overview.md).
---
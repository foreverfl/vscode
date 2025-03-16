---
ContentId: 9f84b21e-5b76-4c3a-a5dd-2021ab343f1f
DateApproved: 03/05/2025
MetaDescription: GitHub Copilot을 사용하여 Visual Studio Code에서 테스트를 작성하고 디버그하며 수정하는 방법을 배워보세요.
---

# GitHub Copilot로 테스트하기 {#test-with-github-copilot}

테스트를 작성하고 유지하는 것은 소프트웨어 개발에서 매우 중요하지만 종종 시간이 많이 소요되는 작업입니다. GitHub Copilot은 Visual Studio Code에서 테스트를 더 효율적으로 작성하고 디버그하며 수정하는 데 도움을 줍니다. 이 문서에서는 Copilot의 테스트 기능을 활용하여 테스트 워크플로를 개선하고 프로젝트의 테스트 범위를 늘리는 방법을 보여줍니다.

Copilot은 다음과 같은 테스트 작업을 도와줄 수 있습니다:

* **테스트 프레임워크 설정**: 프로젝트와 언어에 맞는 적절한 테스트 프레임워크 및 VS Code 확장을 구성하는 데 도움을 받을 수 있습니다.
* **테스트 코드 생성**: 애플리케이션 코드를 커버하는 단위 테스트, 통합 테스트 및 엔드 투 엔드 테스트를 생성합니다.
* **엣지 케이스 처리**: 엣지 케이스와 오류 조건을 커버하는 포괄적인 테스트 스위트를 생성합니다.
* **실패한 테스트 수정**: 테스트 실패를 수정하기 위한 제안을 받습니다.
* **일관성 유지**: 프로젝트의 코딩 관행을 따르는 테스트를 생성하도록 Copilot을 개인화합니다.

> [!TIP]
> 아직 Copilot 구독이 없다면, [Copilot 무료 요금제](https://github.com/github-copilot/signup)에 가입하여 무료로 Copilot을 사용할 수 있으며, 월별 완료 및 채팅 상호작용 한도를 받을 수 있습니다.

## 테스트 프레임워크 설정하기 {#set-up-your-testing-framework}

테스트 워크플로를 가속화하기 위해, Copilot은 프로젝트에 대한 테스트 프레임워크 및 VS Code 확장을 설정하는 데 도움을 줄 수 있습니다. Copilot은 프로젝트 유형에 따라 적절한 테스트 프레임워크를 제안합니다.

1. 채팅 뷰를 엽니다 (`kb(workbench.action.chat.open)`).
1. 채팅 입력 필드에 `/setupTests` 명령어를 입력합니다.
1. Copilot의 안내에 따라 프로젝트를 구성합니다.

## Copilot으로 테스트 작성하기 {#write-tests-with-copilot}

Copilot은 애플리케이션 코드에 대한 테스트를 작성하는 데 도움을 줄 수 있으며, 코드베이스를 커버하는 테스트 코드를 생성합니다. 여기에는 단위 테스트, 엔드 투 엔드 테스트 및 엣지 케이스에 대한 테스트가 포함됩니다.

### 채팅 프롬프트 사용하기 {#use-chat-prompts}

1. 애플리케이션 코드 파일을 엽니다.

1. 다음 중 하나의 뷰를 엽니다:
    * Copilot Edits (`kb(workbench.action.chat.openEditSession)`)
    * 채팅 뷰 (`kb(workbench.action.chat.open)`)
    * 인라인 채팅 (`kb(inlineChat.start)`)

1. 다음과 같은 프롬프트를 입력합니다:
    * "이 코드에 대한 테스트 생성"
    * "엣지 케이스를 포함한 단위 테스트 작성"
    * "이 모듈에 대한 통합 테스트 생성"

GitHub 문서에서 [테스트 작성을 위한 GitHub Copilot 사용](https://docs.github.com/en/copilot/using-github-copilot/guides-on-using-github-copilot/writing-tests-with-github-copilot)에 대한 추가 안내를 확인하세요.

### 편집기 스마트 액션 사용하기 {#use-editor-smart-actions}

프롬프트를 작성하지 않고 애플리케이션 코드에 대한 테스트를 생성하려면 편집기 스마트 액션을 사용할 수 있습니다.

1. 애플리케이션 코드 파일을 엽니다.
1. 선택적으로, 테스트할 코드를 선택합니다.
1. 마우스 오른쪽 버튼을 클릭하고 **Copilot** > **테스트 생성**을 선택합니다.

    Copilot은 기존 테스트 파일에 테스트 코드를 생성하거나, 파일이 존재하지 않는 경우 새 테스트 파일을 생성합니다.

1. 선택적으로, 인라인 채팅 프롬프트에 추가 컨텍스트를 제공하여 생성된 테스트를 다듬습니다.

## 실패한 테스트 수정하기 {#fix-failing-tests}

Copilot은 VS Code의 테스트 탐색기와 통합되어 실패한 테스트를 수정하는 데 도움을 줄 수 있습니다.

1. 테스트 탐색기에서 실패한 테스트 위에 마우스를 올립니다.
1. **테스트 실패 수정** 버튼(스파클 아이콘)을 선택합니다.
1. Copilot의 제안된 수정을 검토하고 적용합니다.

대안으로, 다음과 같이 할 수 있습니다:

1. 채팅 뷰를 엽니다.
1. `/fixTestFailure` 명령어를 입력합니다.
1. 테스트 수정을 위한 Copilot의 제안을 따릅니다.

> [!TIP]
> [Copilot Edits 에이전트 모드(미리보기)](/docs/copilot/copilot-edits.md#use-agent-mode-preview)는 테스트 실행 시 테스트 출력을 모니터링하고, 실패한 테스트를 자동으로 수정하고 재실행하려고 시도합니다.

## 테스트 생성 개인화하기 {#personalize-test-generation}

조직에 특정 테스트 요구 사항이 있는 경우, Copilot이 테스트를 생성하는 방식을 사용자 정의하여 기준을 충족하도록 할 수 있습니다. 사용자 정의 지침을 제공하여 Copilot이 테스트를 생성하는 방식을 개인화할 수 있습니다. 예를 들어:

* 선호하는 테스트 프레임워크 지정
* 테스트에 대한 명명 규칙 정의
* 코드 구조 선호도 설정
* 특정 테스트 패턴 또는 방법론 요청

테스트 생성을 위한 [Copilot 개인화에 대한 추가 정보](/docs/copilot/copilot-customization.md)를 확인하세요.

## 더 나은 테스트 생성을 위한 팁 {#tips-for-better-test-generation}

Copilot으로 테스트를 생성할 때 최상의 결과를 얻으려면 다음 팁을 따르세요:

* 선호하는 테스트 프레임워크에 대한 컨텍스트를 프롬프트에 제공하세요.
* 특정 유형의 테스트(단위, 통합, 엔드 투 엔드)를 원한다고 명시하세요.
* 특정 테스트 케이스나 엣지 케이스를 요청하세요.
* 프로젝트의 코딩 표준을 따르는 테스트를 요청하세요.

## 다음 단계 {#next-steps}

* [VS Code에서 Copilot에 대해 더 알아보기](/docs/copilot/overview.md).
* [VS Code의 일반 테스트 기능 탐색하기](/docs/editor/testing.md).
* [단위 테스트 생성을 위한 예시 프롬프트](https://docs.github.com/en/copilot/example-prompts-for-github-copilot-chat/testing-code/generate-unit-tests)를 확인하세요.
---
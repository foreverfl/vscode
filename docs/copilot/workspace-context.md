---
Order: 10
Area: copilot
TOCTitle: 워크스페이스 컨텍스트
ContentId: c77dcce9-4ba9-40ac-8ae5-2df855088090
PageTitle: \@workspace 컨텍스트 참조를 사용한 채팅
DateApproved: 12/11/2024
MetaDescription: Copilot의 @workspace 채팅을 사용하여 전체 코드베이스에 대해 질문하는 방법.
MetaSocialImage: images/shared/github-copilot-social.png
---

# Copilot 채팅을 워크스페이스 전문가로 만들기 {#making-copilot-chat-an-expert-in-your-workspace}

Copilot 채팅에서 `@workspace`를 참조하면 전체 코드베이스에 대해 질문할 수 있습니다. 질문에 따라 Copilot은 관련 파일과 심볼을 지능적으로 검색하여 답변에 링크와 코드 예제로 참조합니다. `@workspace` 참조를 기반으로 Copilot 채팅은 다음과 같은 작업을 위한 도메인 전문가가 됩니다:

- 코드베이스에서 기존 코드 찾기:
  - `"@workspace where is database connecting string configured?"` <br /> 데이터베이스 연결이 어디서 어떻게 구성되는지 설명
  - `"@workspace how can I validate a date?"` <br /> 코드베이스에서 기존 날짜 유효성 검사 도우미 찾기
  - `"@workspace where are tests defined?"` <br /> 테스트 스위트, 케이스 및 관련 참조와 구성의 위치 제공
- 복잡한 코드 편집 계획 수립:
  - `"@workspace how can I add a rich tooltip to a button?"` <br /> 버튼 요소에 기존 툴팁 컴포넌트를 사용하는 계획 제공
  - `"@workspace add date validation to #selection"` <br /> 기존 날짜 유효성 검사를 선택된 코드에 적용하는 방법 계획
  - `"@workspace add a new API route for the forgot password form"` <br /> 새 라우트를 추가할 위치와 기존 코드에 연결하는 방법 설명
- 코드베이스의 상위 수준 개념 설명:
  - `"@workspace how is authentication implemented?"` <br /> 인증 흐름 개요 및 관련 코드 참조
  - `"@workspace which API routes depend on this service?"` <br /> 선택된 코드에서 서비스를 사용하는 라우트 목록
  - `"How do I build this #codebase?"` <br /> 문서, 스크립트 및 구성을 기반으로 프로젝트를 빌드하는 단계 나열

## `@workspace`는 어떤 소스를 컨텍스트로 <br /> 사용하나요? {#what-sources-does-workspace-use-for-context}

질문에 답하기 위해 `@workspace`는 개발자가 VS Code에서 코드베이스를 탐색할 때 사용하는 것과 동일한 소스를 검색합니다:

- `.gitignore` 파일에서 무시된 파일을 제외한 워크스페이스의 모든 파일
- 중첩된 폴더 및 파일 이름이 포함된 디렉토리 구조
- 워크스페이스가 GitHub 저장소이고 [코드 검색에 의해 인덱싱된](https://docs.github.com/en/enterprise-cloud@latest/copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom#asking-a-question-about-a-specific-repository-file-or-symbol) 경우 GitHub의 코드 검색 인덱스
- 워크스페이스의 심볼과 정의
- 현재 선택된 텍스트 또는 활성 편집기에서 보이는 텍스트

:::note
무시된 파일 내에서 파일을 열거나 텍스트를 선택한 경우 `.gitignore`는 무시됩니다.
:::

## `@workspace`는 가장 관련성 높은 컨텍스트를 <br /> 어떻게 찾나요 {#how-does-workspace-find-the-most-relevant-context}

전체 VS Code 워크스페이스는 채팅 프롬프트에 응답하기 위해 GitHub Copilot에 전달하기에는 너무 클 수 있습니다. 대신, `@workspace`는 다양한 컨텍스트 소스에서 가장 관련성 높은 정보를 추출하여 Copilot의 답변의 근거로 삼습니다.

먼저, `@workspace`는 대화 기록, 워크스페이스 구조 및 현재 선택된 코드를 포함하여 질문에 답하는 데 필요한 정보를 결정합니다.

다음으로, 로컬 검색이나 [GitHub의 코드 검색](https://github.blog/2023-02-06-the-technology-behind-githubs-new-code-search)을 사용하여 관련 코드 스니펫을 찾고, VS Code의 언어 IntelliSense를 사용하여 함수 시그니처, 매개변수 등의 세부 정보를 추가하는 등 다양한 접근 방식을 사용하여 컨텍스트를 수집합니다.

마지막으로, 이 컨텍스트는 GitHub Copilot이 질문에 답하는 데 사용됩니다. 컨텍스트가 너무 큰 경우 가장 관련성 높은 부분만 사용됩니다. 응답은 파일, 파일 범위 및 심볼에 대한 참조로 표시됩니다. 이를 통해 채팅 응답에서 코드베이스의 해당 정보로 직접 연결할 수 있습니다. Copilot에 제공된 코드 스니펫은 응답에서 참조로 나열됩니다.

## `@workspace` 슬래시 명령어를 위한 컨텍스트 {#context-for-workspace-slash-commands}

`@workspace`는 자주 사용되는 작업을 위한 단축어로 여러 *슬래시 명령어*를 제공하며, 이를 통해 작업 시간을 줄이고 입력을 간소화할 수 있습니다. 각 명령어는 상황에 최적화된 컨텍스트를 정의하므로 추가적인 명령 입력이나 대화형 변수 설정이 필요하지 않은 경우가 많습니다. 아래는 사용 가능한 슬래시 명령어와 해당 컨텍스트입니다:

| 명령어         | 컨텍스트                                                                                                                                                                                                                                                                                                          |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/explain`     | <ul><li>활성 편집기의 텍스트 선택(`#selection`)으로 시작합니다. Copilot 채팅 응답을 최적화하려면 텍스트 선택을 확장하여 Copilot이 유용한 응답을 제공하는 데 도움이 되는 관련 정보를 포함하도록 하세요.</li><li>함수와 클래스와 같은 참조된 심볼의 구현을 조회하여 더 정확하고 유용한 설명을 제공합니다.</li></ul> |
| `/tests`       | <ul><li>활성 편집기의 현재 텍스트 선택. 선택된 텍스트가 없으면 현재 활성 파일의 내용을 사용합니다.</li><li>기존 테스트와 모범 사례를 이해하기 위한 관련 기존 테스트 파일.</li></ul>                                                                                                                               |
| `/fix`         | <ul><li>활성 편집기의 현재 텍스트 선택. 선택된 텍스트가 없으면 편집기에서 현재 보이는 텍스트를 사용합니다.</li><li>무엇을 어떻게 수정해야 하는지 이해하기 위한 오류 및 참조된 심볼.</li></ul>                                                                                                                     |
| `/new`         | <ul><li>채팅 프롬프트만 컨텍스트로 사용됩니다.</li></ul>                                                                                                                                                                                                                                                          |
| `/newNotebook` | <ul><li>채팅 프롬프트만 컨텍스트로 사용됩니다.</li></ul>                                                                                                                                                                                                                                                          |

채팅 프롬프트에서 `#editor`, `#selection` 또는 `#file`과 같은 채팅 변수를 사용하여 컨텍스트를 명시적으로 확장할 수 있습니다. 예를 들어, 다른 파일의 패턴을 기반으로 현재 파일의 오류를 수정하려면 다음 채팅 프롬프트를 사용하세요: `@workspace /fix linting error in the style of #file:form.ts`.

## `@workspace` 사용을 위한 팁 {#tips-for-using-workspace}

질문을 표현하는 방식은 `@workspace`가 제공하는 참조의 품질과 응답의 정확성에 상당한 영향을 미칠 수 있습니다. 결과를 최적화하려면 다음 팁을 고려하세요:

- "이게 뭐하는 거예요?(what does this do?)"와 같이 모호하거나 불분명한 용어를 피하고(여기서 "이게(this)"는 마지막 답변, 현재 파일 또는 전체 프로젝트 등으로 해석될 수 있음) 구체적이고 상세한 질문을 하세요.
- 코드나 문서에 나타날 가능성이 있는 용어와 개념을 프롬프트에 포함하세요.
- 응답의 *사용된 참조*를 검토하여 파일이 관련성이 있는지 확인하세요. 필요한 경우 질문을 반복하세요.
- 코드를 선택하거나 `#editor`, `#selection` 또는 `#file`과 같은 채팅 변수를 언급하여 관련 컨텍스트를 명시적으로 포함하세요.
- 응답에 있어서서 "catch 블록이 없는 예외 찾기(find exceptions without a catch block)" 또는 "handleError가 어떻게 호출되는지 예제 제공(provide examples of how handleError is called)"과 같이 여러 참조에서 정보를 가져올 수 있습니다. 하지만 "이 함수가 몇 번 호출되나요?(how many times is this function invoked?)" 또는 "이 프로젝트의 모든 버그를 수정하세요(rectify all bugs in this project)"와 같은 코드베이스 전체에 대한 종합적인 코드 분석은 기대하지 마세요.
- (현재로서는) "누가 이 파일에 기여했나요?(who contributed to this file?)" 또는 "이 폴더의 리뷰 댓글을 요약해주세요(summarize review comments for this folder)"와 같이 코드 이외의 정보를 가정하지 마세요.

## 관련 리소스 {#related-resources}

- [Copilot 채팅 튜토리얼](/docs/copilot/getting-started-chat.md)로 시작하기
- [Chat Participant API를 사용하여 채팅 확장 기능 만들기](/api/extension-guides/chat.md)

---
Order: 11
Area: copilot
TOCTitle: Copilot 커스터마이징
ContentId: 16c73175-a606-4aab-8ae5-a507fe8947eb
PageTitle: VS Code에서 GitHub Copilot 커스터마이징
DateApproved: 03/05/2025
MetaDescription: GitHub Copilot이 프로젝트에 대한 코드를 생성하거나 테스트를 생성하는 방식을 사용자 정의하는 방법을 알아보세요.
MetaSocialImage: images/shared/github-copilot-social.png
sidebar_label: Copilot 커스터마이징
---
# VS Code에서 GitHub Copilot을 위한 사용자 정의 지침 {#custom-instructions-for-github-copilot-in-vs-code}

팀의 작업 흐름, 도구 또는 프로젝트 세부정보에 대한 맥락 정보를 제공하여 Copilot의 채팅 응답을 향상시킬 수 있습니다. 매번 채팅 쿼리에 이 맥락을 수동으로 포함하는 대신, 이 정보를 자동으로 포함하는 _사용자 정의 지침_ 파일을 생성할 수 있습니다.

Copilot은 Chat 보기, Quick Chat 또는 Inline Chat의 채팅 프롬프트에 이러한 지침을 적용합니다. 이러한 지침은 채팅에 표시되지 않지만 VS Code에 의해 Copilot에 전달됩니다.

특정 목적을 위해 사용자 정의 지침을 지정할 수 있습니다:

* **코드 생성 지침** - 코드를 생성하기 위한 특정 맥락을 제공합니다. 예를 들어, 개인 변수는 항상 언더스코어로 접두사가 붙어야 하거나, 싱글톤은 특정 방식으로 구현되어야 한다고 지정할 수 있습니다. 설정에서 또는 작업 공간의 Markdown 파일에서 코드 생성 지침을 지정할 수 있습니다.

* **테스트 생성 지침** - 테스트 생성을 위한 특정 맥락을 제공합니다. 예를 들어, 생성된 모든 테스트는 특정 테스트 프레임워크를 사용해야 한다고 지정할 수 있습니다. 설정에서 또는 작업 공간의 Markdown 파일에서 테스트 생성 지침을 지정할 수 있습니다.

* **코드 검토 지침** - 현재 편집기 선택을 검토하기 위한 특정 맥락을 제공합니다. 예를 들어, 검토자는 코드에서 특정 유형의 오류를 찾아야 한다고 지정할 수 있습니다. 설정에서 또는 작업 공간의 Markdown 파일에서 검토 선택 지침을 지정할 수 있습니다.

* **커밋 메시지 생성 지침** - 커밋 메시지를 생성하기 위한 특정 맥락을 제공합니다. 설정에서 또는 작업 공간의 Markdown 파일에서 커밋 메시지 생성 지침을 지정할 수 있습니다.

* **풀 리퀘스트 제목 및 설명 생성 지침** - 풀 리퀘스트 제목 및 설명 생성을 위한 특정 맥락을 제공합니다. 설정에서 또는 작업 공간의 Markdown 파일에서 풀 리퀘스트 제목 및 설명 생성 지침을 지정할 수 있습니다.

사용자 정의 지침은 자연어 지침으로 구성되며, 채팅 질문을 보완하기 위해 맥락이나 관련 정보를 추가하는 짧고 독립적인 문장이어야 합니다.

## 코드 생성 사용자 정의 지침 정의하기 {#define-code-generation-custom-instructions}

Copilot은 리팩토링, 단위 테스트 생성 또는 기능 구현의 일환으로 코드를 생성하는 데 도움을 줄 수 있습니다. 프로젝트에서 사용하고 싶은 특정 라이브러리나 Copilot이 생성하는 코드에 대해 따르고 싶은 특정 코딩 스타일이 있을 수 있습니다.

> [!NOTE]
> Copilot은 [코드 완성](/docs/copilot/ai-powered-suggestions.md)을 위한 코드 생성 지침을 적용하지 않습니다.

### 설정 사용하기 {#use-settings}

`setting(github.copilot.chat.codeGeneration.instructions)` 설정을 사용하여 사용자 정의 코드 생성 지침을 구성할 수 있습니다. 사용자 또는 작업 공간 수준에서 사용자 정의 지침을 정의할 수 있으며, 언어별 지침도 지정할 수 있습니다. [언어별 설정](/docs/editor/settings.md#language-specific-editor-settings)에 대한 자세한 정보를 확인하세요.

다음 코드 스니펫은 `settings.json` 파일에서 지침 세트를 정의하는 방법을 보여줍니다. 설정에서 직접 지침을 정의하려면 `text` 속성을 구성합니다. 외부 파일을 참조하려면 `file` 속성을 구성합니다.

```json
  "github.copilot.chat.codeGeneration.instructions": [
    {
      "text": "항상 주석을 추가하세요: 'Copilot에 의해 생성됨'."
    },
    {
      "text": "TypeScript에서는 항상 개인 필드 이름에 언더스코어를 사용하세요."
    },
    {
      "file": "code-style.md" // 파일 `code-style.md`에서 지침을 가져옵니다.
    }
  ],
```

`code-style.md` 파일의 내용 예시:

```markdown
항상 React 함수형 컴포넌트를 사용하세요.

항상 주석을 추가하세요.
```

### `.github/copilot-instructions.md` 파일 사용하기 {#use-a-githubcopilot-instructionsmd-file}

작업 공간이나 리포지토리에 `.github/copilot-instructions.md` 파일에 사용자 정의 지침을 저장하고 VS Code가 이 파일을 자동으로 인식하도록 할 수 있습니다.

`.github/copilot-instructions.md` 파일과 설정 모두에서 사용자 정의 지침을 정의하면, Copilot은 두 소스의 지침을 결합하려고 시도합니다.

> [!NOTE]
> Visual Studio의 GitHub Copilot도 `.github/copilot-instructions.md` 파일을 감지합니다. VS Code와 Visual Studio 모두에서 사용하는 작업 공간이 있는 경우, 두 편집기 모두에 대한 사용자 정의 지침을 정의하기 위해 동일한 파일을 사용할 수 있습니다.

1. `setting(github.copilot.chat.codeGeneration.useInstructionFiles)` 설정을 `true`로 설정하여 VS Code에서 사용자 정의 지침 파일을 사용하도록 Copilot에 지시합니다.

1. 작업 공간의 루트에 `.github/copilot-instructions.md` 파일을 생성합니다. 필요하다면 먼저 `.github` 디렉토리를 생성합니다.

    > [!TIP]
    > VS Code의 탐색기 보기에서 파일 이름으로 전체 경로를 입력하여 폴더를 한 번의 작업으로 직접 생성할 수 있습니다.

1. 파일에 자연어 지침을 추가합니다. Markdown 형식을 사용할 수 있습니다.

    지침 사이의 공백은 무시되므로, 지침을 단일 문단으로 작성하거나 각 지침을 새 줄에 작성하거나 가독성을 위해 빈 줄로 구분할 수 있습니다.

## 테스트 생성 사용자 정의 지침 정의하기 {#define-test-generation-custom-instructions}

Copilot을 사용하여 코드에 대한 테스트를 생성할 수 있습니다. 예를 들어, Chat 보기에서 `@workspace /tests` 프롬프트를 사용하여 테스트를 생성할 수 있습니다. Copilot이 프로젝트 및 개발 작업 흐름에 특정한 테스트를 생성하는 데 도움이 되는 사용자 정의 지침을 정의할 수 있습니다.

사용자 정의 테스트 생성 지침을 구성하려면 `setting(github.copilot.chat.testGeneration.instructions)` 설정을 사용합니다. 사용자 또는 작업 공간 수준에서 사용자 정의 지침을 정의할 수 있습니다.

다음 코드 스니펫은 `settings.json` 파일에서 지침 세트를 정의하는 방법을 보여줍니다. 설정에서 직접 지침을 정의하려면 `text` 속성을 구성합니다. 외부 파일을 참조하려면 `file` 속성을 구성합니다.

```json
  "github.copilot.chat.testGeneration.instructions": [
    {
      "text": "React 컴포넌트 테스트에는 항상 vitest를 사용하세요."
    },
    {
      "text": "JavaScript 코드 테스트에는 Jest를 사용하세요."
    },
    {
      "file": "code-style.md" // 파일 `code-style.md`에서 지침을 가져옵니다.
    }
  ],
```

`code-style.md` 파일의 내용 예시:

```markdown
항상 코드 주석을 추가하세요.

항상 React 함수형 컴포넌트를 사용하세요.
```

## 코드 검토 사용자 정의 지침 정의하기 {#define-code-review-custom-instructions}

Copilot을 사용하여 편집기에서 코드 선택을 검토할 수 있습니다. 프로젝트 및 개발 작업 흐름과 관련된 특정 코드 검토 기준을 고려하도록 Copilot을 돕기 위해 사용자 정의 지침을 정의할 수 있습니다.

사용자 정의 코드 검토 지침을 구성하려면 `setting(github.copilot.chat.reviewSelection.instructions)` 설정을 사용합니다. 사용자 또는 작업 공간 수준에서 사용자 정의 지침을 정의할 수 있습니다.

## 커밋 메시지 생성 사용자 정의 지침 정의하기 {#define-commit-message-generation-custom-instructions}

소스 제어 보기에서 Copilot을 사용하여 보류 중인 코드 변경 사항에 대한 커밋 메시지를 생성할 수 있습니다. 프로젝트 및 개발 작업 흐름에 특정한 형식 및 구조를 고려하여 Copilot이 커밋 메시지를 생성하는 데 도움이 되는 사용자 정의 지침을 정의할 수 있습니다.

사용자 정의 커밋 메시지 생성 지침을 구성하려면 `setting(github.copilot.chat.commitMessageGeneration.instructions)` 설정을 사용합니다. 사용자 또는 작업 공간 수준에서 사용자 정의 지침을 정의할 수 있습니다.

## 풀 리퀘스트 제목 및 설명 생성 사용자 정의 지침 정의하기 {#define-pull-request-title-and-description-generation-custom-instructions}

[GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 확장 프로그램이 설치되어 있으면, Copilot을 사용하여 풀 리퀘스트에 대한 제목과 설명을 생성할 수 있습니다. 프로젝트 및 개발 작업 흐름에 특정한 형식 및 구조를 고려하여 Copilot이 제목과 설명을 생성하는 데 도움이 되는 사용자 정의 지침을 정의할 수 있습니다.

사용자 정의 풀 리퀘스트 제목 및 설명 생성 지침을 구성하려면 `setting(github.copilot.chat.pullRequestDescriptionGeneration.instructions)` 설정을 사용합니다. 사용자 또는 작업 공간 수준에서 사용자 정의 지침을 정의할 수 있습니다.

## 사용자 정의 지침 정의를 위한 팁 {#tips-for-defining-custom-instructions}

* 지침을 짧고 독립적으로 유지하세요. 각 지침은 단일, 간단한 문장이어야 합니다. 여러 정보를 제공해야 하는 경우, 여러 지침을 사용하세요.

* 지침에서 특정 코딩 표준과 같은 외부 리소스를 참조하지 마세요.

* 외부 파일에 지침을 저장하여 팀이나 프로젝트 간에 사용자 정의 지침을 쉽게 공유할 수 있도록 하세요. 파일을 버전 관리하여 시간에 따른 변경 사항을 추적할 수도 있습니다.

## 재사용 가능한 프롬프트 파일 (실험적) {#reusable-prompt-files-experimental}

프롬프트 파일(_prompts_)을 사용하면 추가 맥락과 함께 재사용 가능한 프롬프트 지침을 작성하고 공유할 수 있습니다. 프롬프트 파일은 Copilot Chat에서 프롬프트를 작성하는 기존 형식을 모방하는 Markdown 파일입니다 (예: `Rewrite #file:x.ts`). 이를 통해 자연어 지침, 추가 맥락 및 다른 프롬프트 파일에 대한 링크를 종속성으로 추가할 수 있습니다.

사용자 정의 지침이 각 AI 작업 흐름에 코드베이스 전반의 맥락을 추가하는 데 도움을 주는 반면, 프롬프트 파일은 특정 채팅 상호작용에 지침을 추가할 수 있게 해줍니다.

일반적인 사용 사례에는 다음이 포함됩니다:

* **코드 생성**: 구성 요소, 테스트 또는 마이그레이션을 위한 재사용 가능한 프롬프트 생성 (예: React 양식 또는 API 모의).
* **도메인 전문 지식**: 보안 관행이나 준수 검사를 포함한 프롬프트를 통해 전문 지식 공유.
* **팀 협업**: 사양 및 문서에 대한 참조와 함께 패턴 및 지침 문서화.
* **온보딩**: 복잡한 프로세스나 프로젝트별 패턴에 대한 단계별 가이드 생성.

### 프롬프트 파일 예시 {#prompt-file-examples}

* `react-form.prompt.md` - 양식을 생성하기 위한 재사용 가능한 작업을 문서화합니다:

    ```markdown
    당신의 목표는 새로운 React 양식 컴포넌트를 생성하는 것입니다.

    제공되지 않은 경우 양식 이름과 필드를 요청하세요.

    양식에 대한 요구 사항:
    * 양식 디자인 시스템 구성 요소 사용: [design-system/Form.md](../docs/design-system/Form.md)
    * 양식 상태 관리를 위해 `react-hook-form` 사용:
    * 양식 데이터에 대해 항상 TypeScript 유형 정의
    * 등록을 사용하는 *비제어* 구성 요소 선호
    * 불필요한 재렌더링을 방지하기 위해 `defaultValues` 사용
    * 유효성을 검사하기 위해 `yup` 사용:
    * 별도의 파일에 재사용 가능한 유효성 검사 스키마 생성
    * 유형 안전성을 보장하기 위해 TypeScript 유형 사용
    * 사용자 경험 친화적인 유효성 검사 규칙 사용자 정의
    ```

* `security-api.prompt.md` - REST API에 대한 재사용 가능한 보안 관행을 문서화하여 REST API의 보안 검토에 사용할 수 있습니다:

    ```markdown
    안전한 REST API 검토:
    * 모든 엔드포인트가 인증 및 권한 부여로 보호되는지 확인
    * 모든 사용자 입력을 검증하고 데이터를 정리
    * 속도 제한 및 스로틀링 구현
    * 보안 이벤트에 대한 로깅 및 모니터링 구현
    …
    ```

### 사용법 {#usage}

프롬프트 파일을 활성화하려면 `setting(chat.promptFiles)` VS Code 설정을 구성합니다. 기본적으로 프롬프트 파일은 작업 공간의 `.github/prompts` 디렉토리에 위치합니다. 또한 프롬프트 파일이 위치한 [추가 폴더를 지정할 수 있습니다](#prompt-files-experimental-settings).

#### 프롬프트 파일 생성하기 {#create-a-prompt-file}

1. `.github/prompts` 디렉토리에 대해 `setting(chat.promptFiles)` 설정을 `true`로 설정합니다.

1. 작업 공간의 `.github/prompts` 디렉토리에 `.prompt.md` 파일을 생성합니다.

    또는 명령 팔레트에서 **프롬프트 생성** 명령을 사용할 수 있습니다 (`kb(workbench.action.showCommands)`).

1. Markdown 형식을 사용하여 프롬프트 지침을 작성합니다.

    프롬프트 파일 내에서 추가 작업 공간 파일을 Markdown 링크(`index](../index.ts)`)로 참조하거나 프롬프트 파일 내에서 `#file:../index.ts` 참조로 사용할 수 있습니다.

    다른 `.prompt.md` 파일을 참조하여 프롬프트 계층 구조를 만들고, 여러 프롬프트 파일 간에 공유할 수 있는 재사용 가능한 프롬프트를 만들 수 있습니다.

#### 사용자 프롬프트 파일 생성하기 {#create-a-user-prompt-file}

사용자 프롬프트 파일은 [사용자 프로필](/docs/editor/profiles.md)에 저장됩니다. 사용자 프롬프트 파일을 사용하면 여러 작업 공간 간에 재사용 가능한 프롬프트를 공유할 수 있습니다.

사용자 프롬프트 파일을 채팅 프롬프트에 추가하는 방법은 작업 공간 프롬프트 파일과 동일합니다.

사용자 프롬프트 파일을 생성하려면:

1. 명령 팔레트에서 **사용자 프롬프트 생성** 명령을 선택합니다 (`kb(workbench.action.showCommands)`).

1. 프롬프트 파일의 이름을 입력합니다.

1. Markdown 형식을 사용하여 프롬프트 지침을 작성합니다.

#### 채팅 요청에 프롬프트 파일 첨부하기 {#attach-a-prompt-file-to-a-chat-request}

1. **컨텍스트 첨부** <i class="codicon codicon-attach"></i> 아이콘을 선택하고 (`kb(workbench.action.chat.attachContext)`), **프롬프트...**를 선택합니다.

    또는 명령 팔레트에서 **채팅: 프롬프트 사용** 명령을 사용할 수 있습니다 (`kb(workbench.action.showCommands)`).

1. 채팅 요청에 첨부할 프롬프트 파일을 빠른 선택에서 선택합니다.

    Copilot Chat과 Copilot Edits 모두에서 프롬프트 파일을 사용할 수 있습니다.

1. 선택적으로 작업에 필요한 추가 컨텍스트 파일을 첨부합니다.

    재사용 가능한 작업의 경우, 추가 지침 없이 프롬프트를 전송합니다.

    재사용 가능한 프롬프트를 더 세분화하려면, 작업에 대한 더 많은 맥락을 제공하기 위해 추가 지침을 포함합니다.

> [!TIP]
> API 사양이나 문서와 같은 추가 컨텍스트 파일을 Markdown 링크를 사용하여 참조하여 Copilot에 더 완전한 정보를 제공하세요.

## 설정 {#settings}

### 사용자 정의 지침 설정 {#custom-instructions-settings}

* `setting(github.copilot.chat.codeGeneration.useInstructionFiles)`: `.github/copilot-instructions.md`의 코드 지침이 Copilot 요청에 추가되는지 제어합니다.
* `setting(github.copilot.chat.codeGeneration.instructions)` _(실험적)_: 코드를 생성하는 Copilot 요청에 추가될 지침 세트입니다.
* `setting(github.copilot.chat.testGeneration.instructions)` _(실험적)_: 테스트를 생성하는 Copilot 요청에 추가될 지침 세트입니다.
* `setting(github.copilot.chat.reviewSelection.instructions)` _(미리보기)_: 현재 편집기 선택을 검토하는 Copilot 요청에 추가될 지침 세트입니다.
* `setting(github.copilot.chat.commitMessageGeneration.instructions)` _(실험적)_: 커밋 메시지를 생성하는 Copilot 요청에 추가될 지침 세트입니다.

### 프롬프트 파일 (실험적) 설정 {#prompt-files-experimental-settings}

* `setting(chat.promptFiles)` _(실험적)_: 프롬프트 파일 위치를 활성화합니다. `{ "/path/to/folder": boolean }` 표기법을 사용하여 특정 경로와 활성화 여부를 지정합니다. 상대 경로는 작업 공간의 루트 폴더에서 해결됩니다.

    | 설정 값 | 설명 |
    |---------------|-------------|
    | `{ "/path/to/folder": boolean }` | 특정 경로에 대한 프롬프트 파일을 활성화합니다. 프롬프트 파일이 위치한 하나 이상의 폴더를 지정합니다. 상대 경로는 작업 공간의 루트 폴더에서 해결됩니다.<br/>기본적으로 `.github/prompts`가 추가되지만 비활성화되어 있습니다. |

## 관련 콘텐츠 {#related-content}

* [Copilot Chat](/docs/copilot/copilot-chat.md)로 AI 채팅 대화를 시작하세요.
* [Copilot Edits](/docs/copilot/copilot-edits.md)로 AI 기반 편집 세션을 시작하세요.
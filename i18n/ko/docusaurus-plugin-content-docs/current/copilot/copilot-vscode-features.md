---
Order: 2  
Area: copilot  
TOCTitle: Copilot 치트 시트  
ContentId: de6f9f68-7dd5-4de3-a210-3db57882384b  
PageTitle: VS Code에서 GitHub Copilot 치트 시트  
DateApproved: 03/05/2025  
MetaDescription: Visual Studio Code에서 GitHub Copilot의 기능을 빠르게 살펴보세요. GitHub Copilot은 AI 기반 기능을 제공하여 더 빠르고 효율적으로 코드를 작성할 수 있도록 도와줍니다.  
MetaSocialImage: images/shared/github-copilot-social.png  
sidebar_label: Copilot 치트 시트  
---
# GitHub Copilot in VS Code cheat sheet {#github-copilot-in-vs-code-cheat-sheet}

Visual Studio Code에서 GitHub Copilot은 코드를 더 빠르고 적은 노력으로 작성할 수 있도록 돕는 AI 기반 기능을 제공합니다. 이 치트 시트는 Visual Studio Code에서 GitHub Copilot의 기능에 대한 간략한 개요를 제공합니다.

VS Code에서 GitHub Copilot에 접근할 수 있는 방법은 Chat 뷰, 편집기 내, 통합 터미널, 그리고 VS Code 사용자 인터페이스의 AI 기반 향상을 통해 가능합니다.

> [!TIP]
> 아직 Copilot 구독이 없다면, [Copilot 무료 플랜](https://github.com/github-copilot/signup)에 가입하여 무료로 Copilot을 사용할 수 있으며, 월별 완료 및 채팅 상호작용의 한도를 받을 수 있습니다.

팀은 VS Code에서 Copilot을 개선하고 새로운 기능을 추가하기 위해 지속적으로 작업하고 있습니다. 일부 기능은 여전히 실험적입니다. 사용해보고 [우리의 이슈](https://github.com/microsoft/vscode-copilot-release/issues)에 피드백을 공유해 주세요.

## Chat with GitHub Copilot {#chat-with-github-copilot}

자연어를 사용하여 GitHub Copilot과 채팅하고 코딩 작업에 대한 도움을 받을 수 있습니다. 예를 들어, Copilot에게 코드 블록이나 프로그래밍 개념을 설명해 달라고 요청할 수 있습니다. [Copilot Chat](/docs/copilot/copilot-chat.md)에 대한 사용 방법에 대한 자세한 정보를 확인하세요.

| Action | Description |
|--------|-------------|
| `kb(workbench.action.chat.open)` | **Chat view**를 열고 자연어를 사용하여 Copilot과 채팅을 시작합니다. |
| `kb(workbench.action.chat.openEditSession)` | **Copilot Edits view**를 열고 여러 파일에서 코드 편집 세션을 시작합니다. |
| `kb(workbench.action.quickchat.toggle)` | **Quick Chat**을 열고 Copilot에게 간단한 질문을 합니다. |
| `kb(inlinechat.start)` | **Inline Chat**을 시작하여 편집기에서 직접 Copilot에게 채팅 요청을 보냅니다. 자연어를 사용하거나 `/` 명령어를 사용하여 Copilot에게 지시를 내릴 수 있습니다. |
| <i class="codicon codicon-mention"></i> | 채팅에서 `@`를 입력하거나 <i class="codicon codicon-mention"></i>를 선택하여 특정 분야에서 도움을 줄 수 있는 *채팅 참가자* 목록을 봅니다. 확장 프로그램도 추가 참가자를 기여할 수 있습니다.<br/>예시: `@workspace auth가 어떻게 구현되었나요?` |
| 참가자 감지 _(실험적)_ | Copilot Chat은 질문을 적절한 참가자에게 자동으로 라우팅할 수 있습니다. [자세한 정보](https://code.visualstudio.com/updates/v1_93#_automatic-chat-participant-detection-in-chat-view-experimental)를 확인하세요. |
| `/` | 일반적으로 사용되는 작업을 요청하기 위해 *슬래시 명령어*를 호출합니다. 예를 들어 코드 블록 설명, 테스트 또는 문서 생성을 요청할 수 있습니다. |
| `/explain` | Copilot에게 코드 블록이나 프로그래밍 개념을 설명해 달라고 요청합니다. |
| <i class="codicon codicon-history"></i> | Chat view에서 이 아이콘을 선택하여 채팅 세션의 기록에 접근합니다. |
| <i class="codicon codicon-mic"></i> | 음성을 사용하여 채팅 프롬프트를 입력합니다 (음성 채팅). 채팅 응답이 소리로 읽혀집니다. |

> **Tips**
>
> - `/` 명령어와 `@` 참가자를 사용하여 더 정확하고 관련성 있는 답변을 얻으세요.
> - 구체적으로 질문하고, 간단하게 유지하며, 최상의 결과를 얻기 위해 후속 질문을 하세요.
> - 파일, 기호 또는 선택 항목을 채팅 프롬프트에 첨부하여 맥락을 제공하세요.

## Code editing session {#code-editing-session}

Copilot Edits를 사용하여 여러 파일에서 직접 적용되는 AI 생성 코드 편집을 빠르게 반복할 수 있는 코드 편집 세션을 시작합니다.

| Action | Description |
|--------|-------------|
| `kb(workbench.action.chat.openEditSession)` | **Copilot Edits view**를 열고 여러 파일에서 코드 편집 세션을 시작합니다. |
| <i class="codicon codicon-plus"></i> | 새 편집 세션을 시작합니다. |
| Edit/Agent mode | Copilot Edits를 위한 편집 모드와 [에이전트 모드 (미리보기)](/docs/copilot/copilot-edits.md#use-agent-mode-preview) 간에 전환합니다. |
| `Add Files...` | 편집을 위한 맥락으로 파일을 첨부합니다. |
| `Accept` | 현재 모든 편집을 수락합니다. |
| `Discard` | 현재 모든 편집을 취소합니다. |
| <i class="codicon codicon-diff-multiple"></i> | 다중 파일 차이 편집기에서 모든 편집을 봅니다. |
| <i class="codicon codicon-discard"></i> | 마지막 편집을 취소합니다. |
| <i class="codicon codicon-redo"></i> | 마지막 편집을 다시 실행합니다. |
| <i class="codicon codicon-eye"></i> | 활성 편집기를 맥락으로 첨부할지 여부를 설정합니다. |

> **Tips**
>
> - 편집을 원하는 모든 파일을 프롬프트에 추가하세요.
> - Copilot Edits가 수행할 변경 사항에 대해 구체적이고 정확하게 설명하세요.
> - 더 큰 작업이 있는 경우, 이를 더 작은 작업으로 분해하고 자주 반복하세요.

## Generate code from chat {#generate-code-from-chat}

Copilot은 채팅 프롬프트에 응답하여 코드 블록을 생성할 수 있습니다. 생성된 코드를 프로젝트에 빠르게 적용하거나 새 파일에 삽입할 수 있습니다. 예를 들어, Copilot에게 코드에서 알고리즘을 최적화해 달라고 요청할 수 있습니다.

| Action | Description |
|--------|-------------|
| <i class="codicon codicon-git-pull-request-go-to-changes"></i> | 활성 편집기에 생성된 코드 블록을 스마트하게 적용합니다. |
| <i class="codicon codicon-insert"></i> | 커서 위치에 생성된 코드 블록을 삽입합니다. |
| <i class="codicon codicon-copy"></i> | 생성된 코드 블록을 클립보드에 복사합니다. |
| <i class="codicon codicon-terminal"></i> | 생성된 코드 블록을 셸 명령으로 터미널에 삽입합니다. |
| `Insert into New File` | 생성된 코드 블록을 새 파일에 삽입합니다. |

> **Tips**
>
> - 사용할 프레임워크나 라이브러리에 대한 세부 정보를 제공하세요.
> - [사용자 정의 코드 생성 지침](#customize-ai-code-generation)을 만드는 것을 고려하세요.

## Attach context to your prompt {#attach-context-to-your-prompt}

Copilot에게 채팅 프롬프트를 보낼 때, 질문을 더 잘 이해할 수 있도록 맥락을 첨부할 수 있습니다. 예를 들어, 현재 편집기 선택, 파일 또는 기호를 채팅 프롬프트에 추가하세요. [Copilot 사용을 위한 모범 사례](/docs/copilot/prompt-crafting.md)에 대한 자세한 정보를 확인하세요.

| Action | Description |
|--------|-------------|
| Attach <i class="codicon codicon-attach"></i> (`kb(workbench.action.chat.attachContext)`) | 채팅 프롬프트에 대한 관련 맥락을 선택하기 위해 Quick Pick을 엽니다. 작업 공간 파일, 기호, 현재 편집기 선택, 터미널 선택 등 다양한 맥락 유형 중에서 선택하세요. |
| <i class="codicon codicon-eye"></i> | 활성 편집기를 맥락으로 첨부할지 여부를 설정합니다. |
| `Prompts...` _(실험적)_ | 요청에 재사용 가능한 프롬프트 지침을 추가합니다. [프롬프트 파일](https://docs/copilot/copilot-customization.md#reusable-prompt-files-experimental)에 대한 자세한 정보를 확인하세요. |
| Drag & drop file | 파일이나 편집기 탭을 채팅으로 드래그 앤 드롭하여 파일을 맥락으로 첨부합니다. |
| Drag & drop folder | 폴더를 채팅으로 드래그 앤 드롭하여 그 안의 파일을 맥락으로 첨부합니다. |
| Drag & drop problem | **문제** 패널에서 항목을 드래그 앤 드롭하여 맥락으로 첨부합니다. |
| Recent files _(실험적)_ | 최근에 열거나 편집한 파일을 자동으로 채팅 프롬프트에 포함합니다. [자세한 정보](https://code.visualstudio.com/updates/v1_93#_use-recent-coding-files-as-inline-chat-context-experimental)를 확인하세요. |

### Chat variables {#chat-variables}

채팅 프롬프트에서 질문과 관련된 맥락을 참조하기 위해 채팅 변수를 사용할 수 있습니다.

| Chat variable | Description |
|--------|-------------|
| `#changes` | 소스 제어 변경 사항 목록입니다. |
| `#codebase` | 프롬프트에 대한 맥락으로 관련 작업 공간 내용을 추가합니다. |
| `#editor` | 활성 편집기의 가시적 내용을 프롬프트의 맥락으로 추가합니다. |
| `#file` | 작업 공간에서 파일을 선택하기 위해 Quick Pick을 엽니다. |
| `#<filename>` | `#` 다음에 파일 이름을 입력하여 작업 공간 파일에 대한 파일 이름 제안을 받고 맥락으로 첨부합니다. |
| `#folder` | `#folder:` 다음에 폴더 이름을 입력하여 작업 공간에서 폴더를 선택하고 프롬프트의 맥락으로 추가합니다. 폴더를 추가하면 그 안의 모든 파일이 맥락으로 추가됩니다. |
| `#problems` | **문제** 패널에서 작업 공간 문제 및 문제를 맥락으로 추가합니다. 코드 수정이나 디버깅 시 유용합니다. |
| `#selection` | 현재 편집기 선택을 프롬프트의 맥락으로 추가합니다. |
| `#sym` | 작업 공간에서 기호를 선택하기 위해 Quick Pick을 엽니다. |
| `#<symbol>` | `#` 다음에 기호 이름을 입력하여 작업 공간 파일에 대한 기호 제안을 받고 맥락으로 첨부합니다. |
| `#terminalSelection` | 현재 터미널 선택을 채팅 프롬프트의 맥락으로 추가합니다. |
| `#terminalLastCommand` | 마지막으로 실행된 터미널 명령을 채팅 프롬프트의 맥락으로 추가합니다. |
| `#testFailure` | 테스트 실패 정보를 맥락으로 추가합니다. [테스트](/docs/editor/testing.md)를 실행하고 진단할 때 유용합니다. |
| `#VSCodeAPI` | VS Code API를 프롬프트의 맥락으로 추가하여 VS Code 확장 개발과 관련된 질문을 할 수 있습니다. |

## Copilot in the editor {#copilot-in-the-editor}

편집기에서 코딩을 하면서 Copilot을 사용하여 입력하는 동안 코드 완성을 생성할 수 있습니다. Inline Chat을 호출하여 질문하고 Copilot으로부터 도움을 받을 수 있으며, 코딩 흐름을 유지할 수 있습니다. 예를 들어, Copilot에게 함수나 메서드에 대한 단위 테스트를 생성해 달라고 요청할 수 있습니다. [코드 완성](/docs/copilot/ai-powered-suggestions.md) 및 [Inline Chat](/docs/copilot/copilot-chat.md#inline-chat)에 대한 자세한 정보를 확인하세요.

| Action | Description |
|--------|-------------|
| Code completions | 편집기에서 입력을 시작하면 Copilot이 코딩 스타일에 맞는 코드 제안을 제공합니다. |
| Code comments | 코드 주석에 지침을 작성하여 Copilot에게 코드 완성 프롬프트를 제공합니다.<br/>예시: `# 계산기 클래스를 작성하고 add, subtract, multiply 메서드를 사용하세요. 정적 메서드를 사용하세요.` |
| Next Edit Suggestions _(미리보기)_ | Copilot Next Edit Suggestions를 사용하여 다음 코드 편집을 예측합니다. `setting(github.copilot.nextEditSuggestions.enabled)` 설정으로 Copilot NES를 활성화합니다. [Copilot NES 시작하는 방법](/docs/copilot/ai-powered-suggestions.md#next-edit-suggestions-preview)을 확인하세요. |
| `kb(inlinechat.start)` | 편집기에서 직접 Copilot에게 채팅 요청을 보내기 위해 **Inline Chat**을 시작합니다. 자연어를 사용하거나 `/` 명령어를 사용하여 Copilot에게 지시를 내립니다. |
| Prompt from the editor _(실험적)_ | 코드에 자연어를 직접 입력하기 시작하면 Copilot이 코드를 작성하는 것이 아니라 프롬프트를 작성하고 있다는 것을 감지하여 자동으로 Inline Chat을 시작합니다. |
| `kb(editor.action.rename)` | 코드에서 기호 이름을 바꿀 때 AI 기반 제안을 받습니다. |

> **Tips**
>
> - 의미 있는 메서드나 함수 이름을 사용하여 더 빠르게 더 나은 코드 완성을 얻으세요.
> - 코드 블록을 선택하여 Inline Chat 프롬프트의 범위를 설정하거나 파일이나 기호를 첨부하여 관련 맥락을 추가하세요.
> - 편집기 컨텍스트 메뉴 옵션을 사용하여 편집기에서 직접 일반 Copilot 작업에 접근하세요.

## Customize AI code generation {#customize-ai-code-generation}

[사용자 정의 지침](/docs/copilot/copilot-customization.md#custom-instructions)을 정의하여 Copilot이 팀이나 프로젝트의 코딩 스타일, 도구 및 개발자 워크플로우에 맞는 코드를 생성하거나 검토하도록 도와줍니다.

재사용 가능한 프롬프트 파일을 사용하면 공통 프롬프트 지침 및 관련 내용을 Markdown 파일(`*.prompt.md`)에 지정하여 채팅 프롬프트에서 재사용할 수 있습니다.

| Action | Description |
|--------|-------------|
| File-based instructions | 작업 공간의 `.github/copilot-instructions.md` 파일에 코드 생성을 위한 공유 지침을 정의합니다. 이러한 공통 지침은 개인 코드 생성 지침을 보완합니다. |
| Code-review instructions _(미리보기)_ | 설정에서 편집기 선택을 검토하기 위해 Copilot을 사용하는 지침을 정의하거나 파일에서 가져옵니다. 언어별 지침을 정의할 수 있습니다. |
| Code-generation instructions _(실험적)_ | 설정에서 GitHub Copilot을 사용하여 코드 생성을 위한 지침을 정의하거나 파일에서 가져옵니다. 언어별 지침을 정의할 수 있습니다. |
| Test-generation instructions _(실험적)_ | 설정에서 GitHub Copilot을 사용하여 테스트 생성을 위한 지침을 정의하거나 파일에서 가져옵니다. 언어별 지침을 정의할 수 있습니다. |
| Commit-message generation instructions _(실험적)_ | 설정에서 GitHub Copilot을 사용하여 커밋 메시지 생성을 위한 지침을 정의하거나 파일에서 가져옵니다. 언어별 지침을 정의할 수 있습니다. |
| Pull request title and description generation instructions _(실험적)_ | 설정에서 GitHub Copilot을 사용하여 풀 요청 제목 및 설명 생성을 위한 지침을 정의하거나 파일에서 가져옵니다. 언어별 지침을 정의할 수 있습니다. |
| Reusable prompt files _(미리보기)_ | 추가 맥락이 포함된 재사용 가능한 프롬프트 지침을 Markdown 파일로 정의하고 이를 채팅 프롬프트에 사용할 수 있습니다. [재사용 가능한 프롬프트 파일 만들기](/docs/copilot/copilot-customization.md#reusable-prompt-files-preview)에 대한 방법을 확인하세요. |

> **Tips**
>
> - 각 언어에 대해 더 정확한 생성 코드를 얻기 위해 언어별 지침을 정의하세요.
> - 팀과 프로젝트 간에 쉽게 공유할 수 있도록 파일에 지침을 저장하세요.

## Review code (experimental) {#review-code-experimental}

Copilot은 코드 블록을 빠르게 검토하거나 작업 공간의 커밋되지 않은 변경 사항을 검토할 수 있습니다. 검토 피드백은 편집기에서 댓글로 표시되며, 제안을 적용할 수 있습니다.

| Action | Description |
|--------|-------------|
| **Review and Comment** _(미리보기)_ | 코드 블록을 선택하고 편집기 컨텍스트 메뉴에서 **Copilot** > **Review and Comment**를 선택하여 빠른 검토를 수행합니다. |
| **Copilot Code Review** | 소스 제어 뷰에서 **Copilot Code Review** 버튼을 선택하여 모든 커밋되지 않은 변경 사항에 대한 더 깊은 검토를 수행합니다. [대기자 명단](https://gh.io/copilot-code-review-waitlist)에 가입하세요. |

## Generate tests {#generate-tests}

Copilot은 코드베이스의 함수 및 메서드에 대한 테스트를 생성할 수 있습니다. [Chat에서의 슬래시 명령어](/docs/copilot/copilot-chat.md#slash-commands)에 대한 자세한 정보를 확인하세요.

| Action | Description |
|--------|-------------|
| `/tests` | 편집기에서 모든 또는 선택된 메서드와 함수에 대한 테스트를 생성합니다. 생성된 테스트는 기존 테스트 파일에 추가되거나 새 테스트 파일이 생성됩니다. |
| `/setupTests` | 코드에 대한 테스트 프레임워크 설정을 도와줍니다. 관련 테스트 프레임워크에 대한 추천, 설정 및 구성 단계, VS Code 테스트 확장에 대한 제안을 제공합니다. |
| `/fixTestFailure` | 실패한 테스트를 수정하는 방법에 대한 제안을 요청합니다. |
| Test coverage _(실험적)_ | 아직 테스트로 커버되지 않은 함수 및 메서드에 대한 테스트를 생성합니다. [자세한 정보](https://code.visualstudio.com/updates/v1_93#_generate-tests-based-on-test-coverage-experimental)를 확인하세요. |

> **Tips**
>
> - 사용할 테스트 프레임워크나 라이브러리에 대한 세부 정보를 제공하세요.

## Generate documentation {#generate-documentation}

코드베이스의 함수 및 메서드에 대한 코드 문서를 생성합니다. [Chat에서의 슬래시 명령어](/docs/copilot/copilot-chat.md#slash-commands)에 대한 자세한 정보를 확인하세요.

| Action | Description |
|--------|-------------|
| `/docs` | 편집기에서 모든 또는 선택된 메서드와 함수에 대한 문서 주석을 생성합니다. |

## Debug and fix problems {#debug-and-fix-problems}

Copilot을 사용하여 코딩 문제를 해결하고 VS Code에서 디버깅 세션을 구성하고 시작하는 데 도움을 받을 수 있습니다.

| Action | Description |
|--------|-------------|
| `/fix` | 코드 블록을 수정하는 방법이나 코드에서 발생하는 컴파일러 또는 린트 오류를 해결하는 방법에 대한 제안을 요청합니다. 예를 들어, 해결되지 않은 Node.js 패키지 이름을 수정하는 데 도움을 요청할 수 있습니다. |
| `/fixTestFailure` | 실패한 테스트를 수정하는 방법에 대한 제안을 요청합니다. |
| `/startDebugging` _(실험적)_ | `launch.json` 디버그 구성 파일을 생성하고 Chat view에서 디버깅 세션을 시작합니다. [자세한 정보](https://code.visualstudio.com/updates/v1_93#_start-debugging-from-chat-experimental)를 확인하세요. |
| `copilot-debug` command | 프로그램을 디버깅하는 데 도움을 주는 터미널 명령입니다. 실행 명령 앞에 접두사를 붙여 디버깅 세션을 시작합니다 (예: `copilot-debug python foo.py`). [자세한 정보](https://code.visualstudio.com/updates/v1_96#_debugging-with-copilot)를 확인하세요. |

> **Tips**
>
> - 필요한 수정 유형에 대한 추가 정보를 제공하세요. 예를 들어, 메모리 소비 최적화 또는 성능 개선과 같은 정보를 제공하세요.
> - 코드에서 문제를 수정하기 위한 제안을 나타내는 Copilot 코드 작업을 편집기에서 주의 깊게 살펴보세요.

## Scaffold a new project {#scaffold-a-new-project}

Copilot은 프로젝트 구조의 스캐폴드를 생성하거나 요구 사항에 따라 노트북을 생성하여 새로운 프로젝트를 만드는 데 도움을 줄 수 있습니다.

| Action | Description |
|--------|-------------|
| `/new` | Chat view에서 `/new` 명령어를 사용하여 새로운 프로젝트나 파일을 스캐폴드합니다. 필요한 프로젝트/파일 유형을 자연어로 설명하고 생성하기 전에 스캐폴드된 내용을 미리 봅니다.<br/>예시: `/new Express app using typescript and svelte` |
| `/newNotebook` | Chat view에서 `/newNotebook` 명령어를 사용하여 요구 사항에 따라 새로운 Jupyter 노트북을 생성합니다. 노트북에 포함되어야 할 내용을 자연어로 설명합니다.<br/>예시: `/newNotebook get census data and preview key insights with Seaborn`. |

## Source control and issues {#source-control-and-issues}

Copilot은 커밋 및 풀 요청의 변경 사항을 분석하고 커밋 메시지 및 풀 요청 설명에 대한 제안을 제공합니다.

| Action | Description |
|--------|-------------|
| Commit | 소스 제어 커밋의 현재 변경 사항에 대한 커밋 메시지를 생성합니다. |
| Pull request | 풀 요청의 변경 사항에 해당하는 풀 요청 제목 및 설명을 생성합니다. |
| `@github` | 채팅에서 `@github` 참가자를 사용하여 문제, 풀 요청 등에 대해 질문합니다. [사용 가능한 GitHub 기술](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#currently-available-skills)에 대한 자세한 정보를 확인하세요.<br/>예시: `@github 나에게 할당된 모든 열린 PR은 무엇인가요?`, `@github @dancing-mona의 최근 병합된 PR을 보여줘` |

## Search {#search}

Copilot을 사용하여 검색 뷰에서 더 관련성 높은 검색 결과를 얻을 수 있습니다.

| Action | Description |
|--------|-------------|
| Semantic search | 검색 뷰에서 의미적으로 관련된 Copilot의 검색 결과를 포함합니다. |

## Terminal {#terminal}

셸 명령 및 터미널에서 명령을 실행할 때 오류를 해결하는 방법에 대한 도움을 받습니다.

| Action | Description |
|--------|-------------|
| `kb(inlinechat.start)` | 터미널 내에서 Inline Chat을 시작하여 자연어를 사용하여 셸 명령을 빠르게 얻고 실행합니다.<br/>예시: `이 머신의 코어 수는 몇 개인가요?` |
| <i class="codicon codicon-sparkle"></i> <br/>Fix using Copilot | 실패한 셸 명령에서 <i class="codicon codicon-sparkle"></i> 아이콘을 선택하여 오류를 해결하는 방법에 대한 제안을 받습니다. |
| <i class="codicon codicon-sparkle"></i> <br/>Explain using Copilot | 실패한 셸 명령에서 <i class="codicon codicon-sparkle"></i> 아이콘을 선택하여 명령이 실패한 이유에 대한 설명을 받습니다. |
| `@terminal` | Chat view에서 `@terminal` 참가자를 사용하여 통합 터미널이나 셸 명령에 대한 질문을 합니다.<br/>예시: `@terminal 이 작업 공간에서 가장 큰 5개의 파일을 나열하세요` |
| `@terminal /explain` | Chat view에서 `/explain` 명령어를 사용하여 터미널의 내용을 설명합니다.<br/>예시: `@terminal /explain top 셸 명령` |

## Python and Notebook support {#python-and-notebook-support}

Copilot Chat을 사용하여 Native Python REPL 및 Jupyter 노트북에서 Python 프로그래밍 작업을 도와줄 수 있습니다.

| Action | Description |
|--------|-------------|
| <i class="codicon codicon-sparkle"></i> Generate<br/>`kb(inlinechat.start)` | 노트북에서 Inline Chat을 시작하여 코드 블록 또는 Markdown 블록을 생성합니다. |
| `#` | Jupyter 커널의 변수를 채팅 프롬프트에 첨부하여 더 관련성 높은 응답을 얻습니다. |
| Native REPL + `kb(inlinechat.start)` | Native Python REPL에서 Inline Chat을 시작하고 생성된 명령을 실행합니다. |

## VS Code commands and APIs {#vs-code-commands-and-apis}

Copilot을 사용하여 VS Code 기능, 설정 및 VS Code 확장 API에 대한 도움을 받을 수 있습니다. [채팅 참가자](/docs/copilot/copilot-chat.md#chat-participants)에 대한 자세한 정보를 확인하세요.

| Action | Description |
|--------|-------------|
| `@vscode` | 자연어를 사용하여 VS Code에 대한 질문을 하기 위해 `@vscode` 채팅 참가자를 사용합니다.<br/>예시: `@vscode 단어 줄 바꿈을 활성화하는 방법은?` |
| `@vscode /runCommand` | `@vscode` 채팅 참가자와 함께 `/runCommand`를 사용하여 VS Code 명령을 실행합니다.<br/>`@vscode /runCommand 개발자 모드 활성화` |
| `@vscode /search` | `@vscode` 채팅 참가자와 함께 `/search`를 사용하여 VS Code 검색을 생성합니다.<br/>예시: `@vscode /search python imports가 없는 파일` |

> **Tips**
>
> - VS Code 확장 API에 대해 질문할 때는 `#vscodeAPI` 채팅 변수를 사용하세요.

## Next steps {#next-steps}

- [Tutorial: Get started with GitHub Copilot in VS Code](/docs/copilot/getting-started.md)
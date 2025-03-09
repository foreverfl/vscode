---
Order: 14
Area: copilot
TOCTitle: 설정 참조
ContentId: 7b232695-cbbe-4f3f-a625-abc7a5e6496c
PageTitle: VS Code에서의 GitHub Copilot 설정 참조
DateApproved: 12/11/2024
MetaDescription: Visual Studio Code에서 GitHub Copilot의 구성 설정에 대한 개요입니다.
MetaSocialImage: images/shared/github-copilot-social.png
---

# VS Code에서의 GitHub Copilot 설정 참조 {#github-copilot-in-vs-code-settings-reference}

이 문서는 Visual Studio Code에서 GitHub Copilot의 구성 설정을 나열합니다. VS Code에서 설정 작업에 대한 일반적인 정보는 [사용자 및 워크스페이스 설정](/docs/getstarted/settings.md)을 참조하고, 미리 정의된 변수 지원에 대한 정보는 [변수 참조](/docs/editor/variables-reference.md)를 참조하세요.

:::tip
Copilot 구독이 아직 없다면 [Copilot 무료 플랜](https://github.com/github-copilot/signup)에 가입하여 월간 코드 완성 및 채팅 상호작용 한도 내에서 Copilot을 무료로 사용할 수 있습니다.
:::

팀은 VS Code에서 Copilot을 지속적으로 개선하고 새로운 기능을 추가하고 있습니다. <i class="codicon codicon-beaker"></i>로 표시된 항목은 실험적 기능입니다. 이러한 기능을 시험해보고 [이슈 트래커](https://github.com/microsoft/vscode-copilot-release/issues)에서 피드백을 공유해 주세요. VS Code의 [기능 수명 주기](/docs/getstarted/settings.md#feature-lifecycle)에 대한 자세한 정보를 확인하세요.

## 일반 설정 {#general-settings}

- `github.copilot.editor.enableAutoCompletions`: 인라인 완성을 자동으로 표시합니다.
- `github.copilot.enable`: 지정된 [언어](/docs/languages/identifiers.md)에 대한 Copilot 완성을 활성화하거나 비활성화합니다.
- `github.copilot.editor.enableCodeActions`: 사용 가능한 경우 Copilot 명령을 코드 액션으로 표시할지 제어합니다.
- `github.copilot.renameSuggestions.triggerAutomatically`: Copilot이 이름 바꾸기 제안을 생성할지 제어합니다.
- `chat.commandCenter.enabled` <i class="codicon codicon-beaker"></i>: 명령 센터에 채팅 작업을 위한 메뉴를 표시할지 제어합니다.
- `workbench.commandPalette.experimental.askChatLocation` <i class="codicon codicon-beaker"></i>: 명령 팔레트가 채팅 질문을 할 위치를 제어합니다.
- `github.copilot.chat.search.semanticTextResults` <i class="codicon codicon-beaker"></i>: 검색 화면에서 의미론적 검색 결과를 활성화합니다.

## 채팅 설정 {#chat-settings}

- `github.copilot.chat.followUps`: Copilot이 채팅에서 후속 질문을 제안해야 할지 제어합니다.
- `github.copilot.chat.localeOverride`: Copilot이 응답해야 하는 로케일을 지정합니다(예: `en` 또는 `fr`).
- `github.copilot.chat.runCommand.enabled`: 채팅 화면에서 VS Code 명령을 실행하기 위한 `/runCommand` 인텐트를 활성화합니다.
- `github.copilot.chat.useProjectTemplates`: `/new` 사용 시 관련 GitHub 프로젝트를 시작 프로젝트로 사용합니다.
- `github.copilot.chat.scopeSelection`: `/explain`을 사용하고 활성 편집기에 선택 영역이 없을 때 특정 심볼 범위를 프롬프트로 표시할지 여부를 제어합니다.
- `github.copilot.chat.terminalChatLocation`: 터미널의 채팅 쿼리를 어디에서 열어야 하는지 제어합니다.
- `chat.experimental.detectParticipant.enabled` <i class="codicon codicon-beaker"></i>: 채팅 화면에서 채팅 참여자 감지를 활성화합니다.
- `chat.editor.fontFamily`: 채팅 코드블록의 글꼴 패밀리입니다.
- `chat.editor.fontSize`: 채팅 코드블록의 픽셀 단위 글꼴 크기입니다.
- `chat.editor.fontWeight`: 채팅 코드블록의 글꼴 두께입니다.
- `chat.editor.lineHeight`: 채팅 코드블록의 픽셀 단위 줄 높이입니다.
- `chat.editor.wordWrap`: 채팅 코드블록의 줄 바꿈을 전환합니다.

## 편집 설정 {#edits-settings}

- `chat.editing.confirmEditRequestRemoval` - 편집 실행 취소 전 확인 요청 (기본값: `true`)
- `chat.editing.confirmEditRequestRetry` - 마지막 편집의 다시 실행 전 확인 요청 (기본값: `true`)
- `chat.editing.alwaysSaveWithGeneratedChanges` - Copilot 편집에서 생성된 변경 사항을 디스크에 자동 저장 (기본값: `false`)

## 인라인 채팅 설정 {#inline-chat-settings}

- `inlineChat.acceptedOrDiscardBeforeSave`: 편집기의 대기 중인 인라인 채팅 세션이 파일 저장을 방지하는지 제어합니다.
- `inlineChat.finishOnType`: 변경된 영역 외부에 입력할 때 인라인 채팅 세션을 종료할지 여부를 제어합니다.
- `inlineChat.holdToSpeech`: 인라인 채팅 키 바인딩을 누르고 있을 때 자동으로 음성 인식을 활성화할지 여부를 제어합니다.
- `inlineChat.inlineChat.lineEmptyHint` <i class="codicon codicon-beaker"></i>: 빈 줄에서 인라인 채팅에 대한 힌트를 표시할지 제어합니다.
- `inlineChat.mode`: 인라인 채팅으로 작성된 변경 사항을 문서에 직접 적용할지 또는 먼저 미리 볼지 구성합니다.
- `inlineChat.lineNaturalLanguageHint` <i class="codicon codicon-beaker"></i>: 줄이 대부분 단어로 구성되어 있을 때 인라인 채팅을 즉시 트리거하는 실험적 제안입니다.
- `github.copilot.chat.temporalContext.enabled` <i class="codicon codicon-beaker"></i>: 인라인 채팅의 Copilot 요청에 최근에 본 파일과 편집한 파일을 포함할지 여부를 제어합니다.

## Copilot 프롬프트 사용자 지정 {#customize-copilot-prompts}

- `github.copilot.chat.codeGeneration.instructions` <i class="codicon codicon-beaker"></i>: 코드를 생성하는 Copilot 요청에 추가될 지침 세트입니다.
- `github.copilot.chat.codeGeneration.useInstructionFiles` _(Preview)_: `.github/copilot-instructions.md`의 코드 지침을 Copilot 요청에 추가할지 제어합니다.
- `github.copilot.chat.testGeneration.instructions` <i class="codicon codicon-beaker"></i>: 테스트를 생성하는 Copilot 요청에 추가될 지침 세트입니다.
- `github.copilot.chat.reviewSelection.instructions` _(Preview)_: 현재 편집기 선택 영역을 검토하는 Copilot 요청에 추가될 지침 세트입니다.
- `github.copilot.chat.commitMessageGeneration.instructions` <i class="codicon codicon-beaker"></i>: 커밋 메시지를 생성하는 Copilot 요청에 추가될 지침 세트입니다.

## 디버깅 설정 {#debugging-settings}

- `github.copilot.chat.startDebugging.enabled` _(Preview)_: 채팅 화면에서 디버깅 구성을 생성하기 위한 실험적 `/startDebugging` 인텐트를 활성화합니다.

## 테스팅 설정 {#testing-settings}

- `github.copilot.chat.generateTests.codeLens` <i class="codicon codicon-beaker"></i>: 현재 테스트 커버리지 정보에서 다루지 않는 심볼에 대해 **테스트 생성** 코드 렌즈를 표시합니다.
- `github.copilot.chat.setupTests.enabled` <i class="codicon codicon-beaker"></i>: 실험적 `/setupTests` 인텐트와 `/tests` 생성에서의 프롬프트를 활성화합니다.
- `github.copilot.chat.fixTestFailure.enabled`: 채팅에서 미리보기 `/fixTestFailure` 인텐트를 활성화하고 테스트 설정이 없는 경우 특정 `/fix` 호출을 자동으로 위임합니다.
- `github.copilot.chat.testGeneration.instructions` <i class="codicon codicon-beaker"></i>: 테스트를 생성하는 Copilot 요청에 추가될 지침 세트입니다.

## 노트북 설정 {#notebook-settings}

- `notebook.experimental.generate` <i class="codicon codicon-beaker"></i>: 노트북 편집기에서 인라인 채팅이 활성화된 코드 셀을 생성하는 **생성** 작업을 활성화합니다.

## 접근성 설정 {#accessibility-settings}

- `inlineChat.accessibleDiffView`: 인라인 채팅이 변경 사항에 대한 접근 가능한 차이점 뷰어도 렌더링할지 여부를 제어합니다.
- `accessibility.signals.chatRequestSent`: 채팅 요청이 이루어질 때 신호 - 소리(오디오 큐) 및/또는 알림(경고)를 재생합니다.
- `accessibility.signals.chatResponseReceived`: 응답이 수신되었을 때 소리/오디오 큐를 재생합니다.
- `accessibility.verbosity.inlineChat`: 인라인 편집기 채팅 접근성 도움말 메뉴에 접근하는 방법에 대한 정보를 제공하고, 입력이 포커스되었을 때 기능 사용 방법을 설명하는 힌트로 알림을 제공합니다.
- `accessibility.verbosity.inlineCompletions`: 인라인 완성 호버와 접근성 뷰에 접근하는 방법에 대한 정보를 제공합니다.
- `accessibility.verbosity.panelChat`: 채팅 입력이 포커스되었을 때 채팅 도움말 메뉴에 접근하는 방법에 대한 정보를 제공합니다.
- `accessibility.voice.keywordActivation`: 'Hey Code' 키워드 구문이 음성 채팅 세션을 시작하기 위해 인식되는지 제어합니다.
- `accessibility.voice.autoSynthesize`: 음성이 입력으로 사용되었을 때 텍스트 응답을 자동으로 음성으로 읽어야 하는지 제어합니다.
- `accessibility.voice.speechTimeout`: 말하기를 멈춘 후 음성 인식이 활성 상태로 유지되는 시간(밀리초)입니다.

## 관련 리소스 {#related-resources}

- [VS Code에서 Copilot 기능에 대한 빠른 개요 보기](/docs/copilot/copilot-vscode-features.md)

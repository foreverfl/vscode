---
Order: 14
Area: copilot
TOCTitle: 설정 참조
ContentId: 7b232695-cbbe-4f3f-a625-abc7a5e6496c
PageTitle: VS Code에서 GitHub Copilot 설정 참조
DateApproved: 03/05/2025
MetaDescription: Visual Studio Code에서 GitHub Copilot의 구성 설정 개요.
MetaSocialImage: images/shared/github-copilot-social.png
sidebar_label: 설정 참조
---
# VS Code에서 GitHub Copilot 설정 참조 {#github-copilot-in-vs-code-settings-reference}

이 문서에서는 Visual Studio Code에서 GitHub Copilot의 구성 설정을 나열합니다. VS Code에서 설정 작업에 대한 일반 정보는 [사용자 및 작업 공간 설정](/docs/editor/settings.md)와 미리 정의된 변수 지원에 대한 정보는 [변수 참조](/docs/reference/variables-reference.md)를 참조하십시오.

> [!TIP]
> 아직 Copilot 구독이 없다면, [Copilot 무료 요금제](https://github.com/github-copilot/signup)에 가입하여 무료로 Copilot을 사용할 수 있으며, 월별 완료 및 채팅 상호작용의 한도를 받을 수 있습니다.

팀은 VS Code에서 Copilot을 개선하고 새로운 기능을 추가하기 위해 지속적으로 작업하고 있습니다. 일부 기능은 여전히 실험적입니다. 사용해보고 [우리의 이슈](https://github.com/microsoft/vscode-copilot-release/issues)에 피드백을 공유해 주세요. VS Code의 [기능 생애 주기](/docs/editor/settings.md#feature-lifecycle)에 대한 자세한 정보도 확인하세요.

## 일반 설정 {#general-settings}

* `setting(github.copilot.editor.enableAutoCompletions)`: 인라인 완성을 자동으로 표시합니다.
* `setting(github.copilot.enable)`: 지정된 [언어](/docs/languages/identifiers.md)에 대해 Copilot 완성을 활성화하거나 비활성화합니다.
* `setting(github.copilot.editor.enableCodeActions)`: 사용 가능한 경우 Copilot 명령이 코드 작업으로 표시되는지 제어합니다.
* `setting(github.copilot.renameSuggestions.triggerAutomatically)`: Copilot이 이름 변경 제안을 생성할지 여부를 제어합니다.
* `setting(chat.commandCenter.enabled)` _(실험적)_: 명령 센터가 채팅 작업을 위한 메뉴를 표시할지 여부를 제어합니다.
* `setting(workbench.commandPalette.experimental.askChatLocation)` _(실험적)_: 명령 팔레트가 채팅 질문을 어디에서 해야 하는지 제어합니다.
* `setting(github.copilot.chat.search.semanticTextResults)` _(실험적)_: 검색 보기에서 의미론적 검색 결과를 활성화합니다.
* `setting(github.copilot.nextEditSuggestions.enabled)` _(미리보기)_: Copilot 다음 편집 제안(Copilot NES)을 활성화합니다 _(미리보기)_.
* `setting(editor.inlineSuggest.edits.codeShifting)`: Copilot NES가 제안을 표시하기 위해 코드를 이동할 수 있는지 구성합니다.
* `setting(editor.inlineSuggest.edits.renderSideBySide)`: Copilot NES가 가능할 경우 더 큰 제안을 나란히 표시할 수 있는지, 또는 항상 관련 코드 아래에 더 큰 제안을 표시해야 하는지 구성합니다.

## 채팅 설정 {#chat-settings}

* `setting(github.copilot.chat.codesearch.enabled)` _(미리보기)_: 프롬프트에서 `#codebase`를 사용할 때, Copilot이 자동으로 편집할 관련 파일을 발견합니다.
* `setting(github.copilot.chat.followUps)`: Copilot이 채팅에서 후속 질문을 제안할지 여부를 제어합니다.
* `setting(github.copilot.chat.localeOverride)`: Copilot이 응답할 로케일을 지정합니다. 예: `en` 또는 `fr`.
* `setting(github.copilot.chat.runCommand.enabled)`: VS Code 명령을 실행하기 위해 채팅 보기에서 `/runCommand` 의도를 활성화합니다.
* `setting(github.copilot.chat.useProjectTemplates)`: `/new`를 사용할 때 관련 GitHub 프로젝트를 시작 프로젝트로 사용합니다.
* `setting(github.copilot.chat.scopeSelection)`: `/explain`을 사용할 때 특정 기호 범위를 요청할지 여부를 제어합니다. 활성 편집기에 선택 항목이 없을 경우.
* `setting(github.copilot.chat.terminalChatLocation)`: 터미널에서 채팅 쿼리가 열릴 위치를 제어합니다.
* `setting(chat.experimental.detectParticipant.enabled)` _(실험적)_: 채팅 보기에서 채팅 참가자 감지를 활성화합니다.
* `setting(chat.editor.fontFamily)`: 채팅 코드 블록의 글꼴 패밀리입니다.
* `setting(chat.editor.fontSize)`: 채팅 코드 블록의 글꼴 크기(픽셀)입니다.
* `setting(chat.editor.fontWeight)`: 채팅 코드 블록의 글꼴 두께입니다.
* `setting(chat.editor.lineHeight)`: 채팅 코드 블록의 줄 높이(픽셀)입니다.
* `setting(chat.editor.wordWrap)`: 채팅 코드 블록에서 줄 바꿈을 전환합니다.
* `setting(chat.implicitContext.enabled)` _(미리보기)_ - 활성 편집기가 채팅 프롬프트에 자동으로 컨텍스트로 추가될지 구성합니다.

## Copilot 편집 설정 {#copilot-edits-settings}

* `setting(chat.editing.confirmEditRequestRemoval)` - 편집을 실행 취소하기 전에 확인을 요청합니다 (기본값: `true`)
* `setting(chat.editing.confirmEditRequestRetry)` - 마지막 편집을 다시 실행하기 전에 확인을 요청합니다 (기본값: `true`)
* `setting(github.copilot.chat.edits.temporalContext.enabled)` _(실험적)_: Copilot Edits의 요청에 최근에 본 파일과 편집된 파일을 포함할지 여부입니다.
* `setting(github.copilot.chat.codesearch.enabled)` _(미리보기)_: 프롬프트에서 `#codebase`를 사용할 때, Copilot이 자동으로 편집할 관련 파일을 발견합니다.
* `setting(chat.editing.alwaysSaveWithGeneratedChanges)` - Copilot Edits에서 생성된 변경 사항을 자동으로 디스크에 저장합니다 (기본값: `false`)
* `setting(chat.implicitContext.enabled)` _(미리보기)_ - 활성 편집기가 채팅 프롬프트에 자동으로 컨텍스트로 추가될지 구성합니다.
* `setting(chat.editing.autoAcceptDelay)` - 제안된 편집이 자동으로 수락되는 지연 시간을 구성합니다. 자동 수락을 비활성화하려면 0을 사용합니다 (기본값: 0)
* `setting(chat.agent.maxRequests)` - Copilot Edits가 에이전트 모드에서 수행할 수 있는 최대 요청 수 (기본값: 15)
* `setting(github.copilot.chat.edits.suggestRelatedFilesFromGitHistory)` _(실험적)_ - Copilot Edits에서 git 기록의 관련 파일을 제안합니다 (기본값: `false`)
* `setting(github.copilot.chat.agent.runTasks)` - Copilot Edits에서 에이전트 모드를 사용할 때 작업 공간 작업을 실행합니다 (기본값: `true`)

## 인라인 채팅 설정 {#inline-chat-settings}

* `setting(inlineChat.acceptedOrDiscardBeforeSave)`: 편집기에서 보류 중인 인라인 채팅 세션이 파일 저장을 방해하는지 여부를 제어합니다.
* `setting(inlineChat.finishOnType)`: 변경된 영역 외부에서 입력할 때 인라인 채팅 세션을 종료할지 여부입니다.
* `setting(inlineChat.holdToSpeech)`: 인라인 채팅 키보드 단축키를 누르고 있으면 음성 인식이 자동으로 활성화되는지 여부입니다.
* `setting(inlineChat.inlineChat.lineEmptyHint)` _(실험적)_: 빈 줄에서 인라인 채팅에 대한 힌트를 표시할지 여부를 제어합니다.
* `setting(inlineChat.lineNaturalLanguageHint)` _(실험적)_: 대부분 단어로 구성된 줄에서 인라인 채팅을 즉시 트리거하는 실험적 제안입니다.
* `setting(github.copilot.chat.editor.temporalContext.enabled)` _(실험적)_: 인라인 채팅에서 Copilot 요청과 함께 최근에 본 파일과 편집된 파일을 포함할지 여부입니다.

## Copilot 프롬프트 사용자 정의 {#customize-copilot-prompts}

* `setting(github.copilot.chat.codeGeneration.useInstructionFiles)`: `.github/copilot-instructions.md`의 코드 지침이 Copilot 요청에 추가될지 여부를 제어합니다.
* `setting(github.copilot.chat.codeGeneration.instructions)` _(실험적)_: 코드를 생성하는 Copilot 요청에 추가될 지침 세트입니다.
* `setting(github.copilot.chat.testGeneration.instructions)` _(실험적)_: 테스트를 생성하는 Copilot 요청에 추가될 지침 세트입니다.
* `setting(github.copilot.chat.reviewSelection.instructions)` _(미리보기)_: 현재 편집기 선택을 검토하기 위한 Copilot 요청에 추가될 지침 세트입니다.
* `setting(github.copilot.chat.commitMessageGeneration.instructions)` _(실험적)_: 커밋 메시지를 생성하는 Copilot 요청에 추가될 지침 세트입니다.
* `setting(github.copilot.chat.pullRequestDescriptionGeneration.instructions)` _(실험적)_: 풀 리퀘스트 제목 및 설명을 생성하는 Copilot 요청에 추가될 지침 세트입니다.
* `setting(chat.promptFiles)` _(실험적)_: 프롬프트 파일을 활성화하고 프롬프트 파일 폴더를 지정합니다. 기본 위치(`.github/prompts`)를 사용하려면 `true`로 설정하거나, 다른 경로를 지정하려면 `{ "/path/to/folder": boolean }` 표기법을 사용합니다. 상대 경로는 작업 공간의 루트 폴더에서 해결됩니다.

## 디버깅 설정 {#debugging-settings}

* `setting(github.copilot.chat.startDebugging.enabled)` _(미리보기)_: 디버깅 구성을 생성하기 위해 채팅 보기에서 실험적인 `/startDebugging` 의도를 활성화합니다.

## 테스트 설정 {#testing-settings}

* `setting(github.copilot.chat.generateTests.codeLens)` _(실험적)_: 현재 테스트 커버리지 정보로 커버되지 않은 기호에 대해 **테스트 생성** 코드 렌즈를 표시합니다.
* `setting(github.copilot.chat.setupTests.enabled)` _(실험적)_: 실험적인 `/setupTests` 의도 및 `/tests` 생성을 활성화합니다.
* `setting(github.copilot.chat.fixTestFailure.enabled)`: 채팅에서 미리보기 `/fixTestFailure` 의도를 활성화하고, 테스트 설정이 발견되지 않으면 특정 `/fix` 호출을 자동으로 위임합니다.
* `setting(github.copilot.chat.testGeneration.instructions)` _(실험적)_: 테스트를 생성하는 Copilot 요청에 추가될 지침 세트입니다.

## 노트북 설정 {#notebook-settings}

* `setting(notebook.experimental.generate)` _(실험적)_: 노트북 편집기에서 인라인 채팅이 활성화된 코드 셀을 생성하기 위해 **생성** 작업을 활성화합니다.

## 접근성 설정 {#accessibility-settings}

* `setting(inlineChat.accessibleDiffView)`: 인라인 채팅이 변경 사항에 대한 접근 가능한 차이 뷰어를 렌더링할지 여부입니다.
* `setting(accessibility.signals.chatRequestSent)`: 채팅 요청이 이루어질 때 신호 - 소리(오디오 신호) 및/또는 발표(알림)를 재생합니다.
* `setting(accessibility.signals.chatResponseReceived)`: 응답이 수신되었을 때 소리/오디오 신호를 재생합니다.
* `setting(accessibility.verbosity.inlineChat)`: 인라인 편집기 채팅 접근성 도움말 메뉴에 접근하는 방법과 입력이 포커스될 때 기능 사용 방법을 설명하는 힌트를 제공하는 정보를 제공합니다.
* `setting(accessibility.verbosity.inlineCompletions)`: 인라인 완성 호버 및 접근 가능한 뷰에 접근하는 방법에 대한 정보를 제공합니다.
* `setting(accessibility.verbosity.panelChat)`: 채팅 입력이 포커스될 때 채팅 도움말 메뉴에 접근하는 방법에 대한 정보를 제공합니다.
* `setting(accessibility.voice.keywordActivation)`: 'Hey Code'라는 키워드 문구가 음성 채팅 세션을 시작하기 위해 인식되는지 여부를 제어합니다.
* `setting(accessibility.voice.autoSynthesize)`: 음성이 입력으로 사용될 때 텍스트 응답이 자동으로 읽혀야 하는지 여부를 제어합니다.
* `setting(accessibility.voice.speechTimeout)`: 음성 인식이 사용자가 말을 멈춘 후 활성 상태로 유지되는 밀리초 단위의 기간입니다.

## 관련 리소스 {#related-resources}

* [VS Code에서 Copilot 기능에 대한 간략한 개요를 확인하세요](/docs/copilot/copilot-vscode-features.md)
---
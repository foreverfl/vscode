---
Order: 3
Area: setup
TOCTitle: macOS
ContentId: EEADB50A-F5E3-41E9-89DA-35F165196691
PageTitle: macOS에서 Visual Studio Code 실행하기
DateApproved: 03/05/2025
MetaDescription: Mac (macOS)에서 Visual Studio Code를 설치하고 실행하세요.
sidebar_label: macOS
---
# macOS에서 Visual Studio Code {#visual-studio-code-on-macos}

## 설치 {#installation}

1. [Visual Studio Code 다운로드 및 설치](#install-vs-code-on-macos)

    :::note
    VS Code는 매월 릴리스를 제공하며, 새로운 릴리스가 있을 때 [자동 업데이트](#updates)를 지원합니다.
    :::

1. [추가 구성 요소 설치](/docs/setup/additional-components.md)

    Git, Node.js, TypeScript, 언어 런타임 등을 설치합니다.

1. [Visual Studio Marketplace에서 VS Code 확장 설치](https://marketplace.visualstudio.com/VSCode)

    테마, 포맷터, 언어 확장 및 좋아하는 언어의 디버거로 VS Code를 사용자 정의합니다.

1. [GitHub Copilot로 AI 지원 코딩 설정](/docs/copilot/setup-simplified.md)

    :::tip
    아직 Copilot 구독이 없다면, [Copilot 무료 요금제](https://github.com/github-copilot/signup)에 가입하여 무료로 Copilot을 사용할 수 있으며, 월별 완료 및 채팅 상호작용 한도가 제공됩니다.
    :::

1. [VS Code 튜토리얼 시작하기](/docs/getstarted/getting-started.md)

    VS Code의 사용자 인터페이스와 주요 기능을 알아보세요.

## macOS에 VS Code 설치하기 {#install-vs-code-on-macos}

1. [macOS용 Visual Studio Code 다운로드](https://go.microsoft.com/fwlink/?LinkID=534106).

1. 브라우저의 다운로드 목록을 열고 다운로드한 앱 또는 압축 파일을 찾습니다.

1. 압축 파일인 경우, 압축 파일 내용을 추출합니다. 일부 브라우저에서는 더블 클릭을 사용하거나 Safari에서 '돋보기' 아이콘을 선택합니다.

1. `Visual Studio Code.app`를 **Applications** 폴더로 드래그하여 macOS Launchpad에서 사용할 수 있도록 합니다.

1. **Applications** 폴더에서 아이콘을 더블 클릭하여 VS Code를 엽니다.

1. Dock에 VS Code를 추가하려면 Dock에 있는 아이콘을 오른쪽 클릭하여 컨텍스트 메뉴를 열고 **Options**, **Keep in Dock**를 선택합니다.

## 명령줄에서 VS Code 실행하기 {#launch-vs-code-from-the-command-line}

터미널에서 `code`를 입력하여 VS Code를 실행하려면 `$PATH` 환경 변수에 추가합니다:

### VS Code로 경로 구성하기 {#configure-the-path-with-vs-code}

1. VS Code를 실행합니다.

1. **명령 팔레트** (`kbstyle(Cmd+Shift+P)`)를 열고 'shell command'를 입력한 후 **Shell Command: Install 'code' command in PATH** 명령을 실행합니다.

    ![macOS 셸 명령](images/mac/shell-command.png)

1. 새로운 `$PATH` 값이 적용되도록 터미널을 재시작합니다.

    이제 어떤 폴더에서든 'code .'를 입력하여 해당 폴더의 파일을 편집할 수 있습니다.

:::note
이전 VS Code 버전에서 `.bash_profile` (또는 동등한 파일)에 오래된 `code` 별칭이 남아 있다면, 이를 제거하고 **Shell Command: Install 'code' command in PATH** 명령을 실행하여 교체하세요.
:::

### 수동으로 경로 구성하기 {#manually-configure-the-path}

VS Code를 수동으로 경로에 추가하려면:

1. 다음 명령을 실행합니다:

    **Zsh**:

    ```zsh
    cat << EOF >> ~/.zprofile
    # Visual Studio Code 추가 (code)
    export PATH="\$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
    EOF
    ```

    **Bash**:

    ```bash
    cat << EOF >> ~/.bash_profile
    # Visual Studio Code 추가 (code)
    export PATH="\$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
    EOF
    ```

    :::note
    앞의 슬래시 `\`는 연결 중에 `$PATH`가 확장되지 않도록 하기 위해 필요합니다. 터미널에서 직접 export 명령을 실행하려면 앞의 슬래시를 제거하세요.
    :::

1. 변경 사항을 반영하기 위해 새로운 터미널을 시작합니다.

    이제 어떤 폴더에서든 'code .'를 입력하여 해당 폴더의 파일을 편집할 수 있습니다.

## 업데이트 {#updates}

VS Code는 매월 [릴리스](/updates)를 제공하며, 새로운 릴리스가 있을 때 자동 업데이트를 지원합니다. VS Code에서 업데이트를 요청하면 최신 업데이트를 수락하고 설치됩니다 (최신 버전을 받기 위해 추가 작업이 필요하지 않습니다).

:::note
원하신다면 [자동 업데이트 비활성화](/docs/supporting/faq.md#how-do-i-opt-out-of-vs-code-autoupdates)할 수 있습니다.
:::

## 터치 바 지원 {#touch-bar-support}

기본적으로 VS Code는 다음과 같은 터치 바 작업을 추가합니다:

* 편집기 기록에서 탐색
* 터치 바에서 디버거를 제어하기 위한 전체 디버그 도구 모음:

![macOS 터치 바](images/mac/touchbar.gif)

## 모하비 개인 정보 보호 보호 기능 {#mojave-privacy-protections}

macOS 모하비에서 "Visual Studio Code가 귀하의 \{캘린더/연락처/사진\}에 접근하려고 합니다."라는 대화 상자가 표시될 수 있습니다. 이는 모하비의 새로운 개인 정보 보호 보호 기능 때문이며, VS Code에만 해당되는 것은 아닙니다. 다른 애플리케이션을 실행할 때도 동일한 대화 상자가 표시될 수 있습니다. 개인 데이터 유형마다 한 번씩 대화 상자가 표시되며, VS Code가 해당 폴더에 접근할 필요가 없으므로 **Don't Allow**를 선택해도 괜찮습니다.

## 다음 단계 {#next-steps}

VS Code를 설치한 후, 다음 주제를 통해 더 많은 정보를 알아보세요:

* [VS Code 튜토리얼](/docs/getstarted/getting-started.md) - VS Code의 주요 기능을 빠르게 체험해보세요.
* [팁과 요령](/docs/getstarted/tips-and-tricks.md) - VS Code로 작업할 때 유용한 생산성 팁 모음입니다.
* [AI 지원 코딩](/docs/copilot/overview.md) - VS Code에서 GitHub Copilot을 사용하여 코드를 더 빠르게 작성하는 방법을 알아보세요.

## 자주 묻는 질문 {#common-questions}

### "Visual Studio Code가 귀하의 캘린더에 접근하려고 합니다."라는 메시지가 표시되는 이유는 무엇인가요? {#why-do-i-see-visual-studio-code-would-like-access-to-your-calendar}

macOS 모하비 버전을 실행 중이라면 "Visual Studio Code가 귀하의 \{캘린더/연락처/사진\}에 접근하려고 합니다."라는 대화 상자가 표시될 수 있습니다. 이는 위에서 언급한 모하비의 새로운 개인 정보 보호 보호 기능 때문입니다. VS Code가 해당 폴더에 접근할 필요가 없으므로 **허용하지 않기**를 선택해도 괜찮습니다.

### VS Code 업데이트 실패 {#vs-code-fails-to-update}

VS Code가 재시작 후 업데이트되지 않는 경우, macOS에 의해 격리 상태로 설정되었을 수 있습니다. 이 [문제](https://github.com/microsoft/vscode/issues/7426#issuecomment-425093469)의 단계를 따라 해결하세요.

### VS Code는 Apple 실리콘 머신에서 실행되나요? {#does-vs-code-run-on-apple-silicon-machines}

네, VS Code는 Apple 실리콘 칩셋이 장착된 Mac에서 실행할 수 있는 macOS Arm64 빌드를 지원합니다. Intel 및 Apple 실리콘 빌드를 모두 포함하는 유니버설 빌드를 설치하거나 플랫폼별 빌드 중 하나를 선택할 수 있습니다.

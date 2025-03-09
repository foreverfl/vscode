---
Order: 3
Area: sourcecontrol
TOCTitle: GitHub에서 협업하기
ContentId: bd1be8cf-b745-4737-be48-db381ec3acc6
PageTitle: GitHub에서 협업하기
DateApproved: 12/11/2024
MetaDescription: Visual Studio Code에서 GitHub Pull Requests 및 Issues 작업하기
---

# VS Code에서 GitHub 사용하기 {#working-with-github-in-vs-code}

[GitHub](https://github.com)은 소스 코드를 저장하고 공유하기 위한 클라우드 기반 서비스입니다. Visual Studio Code에서 GitHub를 사용하면 편집기 내에서 소스 코드를 공유하고 다른 사람과 협업할 수 있습니다. GitHub와 상호작용하는 방법은 여러 가지가 있습니다. 예를 들어, [https://github.com](https://github.com) 웹사이트나 [Git](https://git-scm.com) 명령줄 인터페이스(CLI)를 통해서도 가능합니다. 그러나 VS Code에서는 [GitHub Pull Requests 및 Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 확장이 풍부한 GitHub 통합을 제공합니다.

<a class="install-extension-btn" href="vscode:extension/GitHub.vscode-pull-request-github">GitHub Pull Requests 및 Issues 확장 설치</a>

VS Code에서 GitHub를 시작하려면 [Git](https://git-scm.com/download)을 설치하고, [GitHub 계정 생성](https://docs.github.com/get-started/signing-up-for-github/signing-up-for-a-new-github-account) 및 [GitHub Pull Requests 및 Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 확장을 설치해야 합니다. 이 주제에서는 VS Code를 떠나지 않고 GitHub의 일부 좋아하는 기능을 사용하는 방법을 보여줍니다.

소스 관리에 익숙하지 않거나 VS Code의 기본 Git 지원에 대해 더 알고 싶다면 [소스 관리](/docs/sourcecontrol/overview.md) 주제에서 시작할 수 있습니다.

## GitHub Pull Requests 및 Issues 시작하기 {#getting-started-with-github-pull-requests-and-issues}

[GitHub Pull Requests 및 Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 확장을 설치한 후에는 로그인해야 합니다. 브라우저에서 GitHub로 인증하고 VS Code로 돌아가는 프롬프트를 따르세요.

![확장 로그인](images/github/extension-signin.png)

VS Code로 리디렉션되지 않으면 인증 토큰을 수동으로 추가할 수 있습니다. 브라우저 창에서 인증 토큰을 받게 됩니다. 토큰을 복사하고 VS Code로 돌아갑니다. 상태 표시줄에서 **Signing in to github.com...** 를 선택하고 토큰을 붙여넣고 `Enter`를 누릅니다.

## 리포지토리 설정 {#setting-up-a-repository}

### 리포지토리 클론 {#cloning-a-repository}

명령 팔레트(`Ctrl+Shift+P`)에서 **Git: Clone** 명령을 사용하거나 소스 관리 보기에서 **Clone Repository** 버튼을 사용하여 GitHub에서 리포지토리를 검색하고 클론할 수 있습니다. 폴더가 열려 있지 않은 경우 사용 가능합니다.

![소스 관리 보기의 Clone Repository 버튼](images/github/git-clone-button.png)

GitHub 리포지토리 드롭다운에서 필터링하고 로컬로 클론할 리포지토리를 선택할 수 있습니다.

![microsoft/vscode로 필터링된 GitHub 리포지토리 드롭다운](images/github/github-repo-dropdown.png)

### 기존 리포지토리 인증 {#authenticating-with-an-existing-repository}

GitHub를 통한 인증 활성화는 VS Code에서 GitHub 인증이 필요한 Git 작업(예: 멤버인 리포지토리에 푸시하거나 비공개 리포지토리를 클론하는 작업)을 실행할 때 발생합니다. 인증을 위해 특별한 확장을 설치할 필요는 없습니다. VS Code에 내장되어 있어 리포지토리를 효율적으로 관리할 수 있습니다.

GitHub 인증이 필요한 작업을 수행하면 로그인 프롬프트가 표시됩니다:

![인증 프롬프트](images/github/auth-prompt.png)

GitHub에 로그인하는 단계를 따르고 VS Code로 돌아갑니다. 개인 액세스 토큰(PAT)으로 로그인하는 것은 GitHub Enterprise Server에서만 지원됩니다. GitHub Enterprise Server를 사용하고 PAT를 사용하려면 로그인 프롬프트에서 "취소"를 누르고 PAT를 입력할 때까지 기다리세요.

GitHub에 인증하는 방법은 여러 가지가 있으며, 사용자 이름과 비밀번호를 사용한 이중 인증(2FA), 개인 액세스 토큰 또는 SSH 키를 사용할 수 있습니다. 각 옵션에 대한 자세한 정보는 [GitHub 인증에 대해](https://docs.github.com/github/authenticating-to-github/about-authentication-to-github)를 참조하세요.

:::note
리포지토리 내용을 로컬 머신에 클론하지 않고 작업하려면 [GitHub Repositories](https://marketplace.visualstudio.com/items?itemName=github.remotehub) 확장을 설치하여 GitHub에서 직접 브라우징하고 편집할 수 있습니다. 아래 [GitHub Repositories 확장](/docs/sourcecontrol/github.md#github-repositories-extension) 섹션에서 자세히 알아볼 수 있습니다.
:::

## 에디터 통합 {#editor-integration}

### 호버 {#hovers}

리포지토리를 열고 사용자가 @-멘션된 경우, 해당 사용자 이름 위에 마우스를 올리면 GitHub 스타일의 호버를 볼 수 있습니다.

![사용자 호버](images/github/user-hover.png)

유사하게 #-멘션된 이슈 번호, 전체 GitHub 이슈 URL 및 리포지토리 지정 이슈에 대한 호버도 있습니다.

![이슈 호버](images/github/issue-hover.png)

### 제안 {#suggestions}

사용자 제안은 "@" 문자로 트리거되고 이슈 제안은 "#" 문자로 트리거됩니다. 제안은 에디터와 **소스 관리** 보기의 입력 상자에서 사용할 수 있습니다.

![사용자 및 이슈 제안](images/github/user-issue-suggest.gif)

제안에 나타나는 이슈는 **GitHub Issues: Queries** (`githubIssues.queries`) [설정](/docs/getstarted/settings.md)으로 구성할 수 있습니다. 쿼리는 [GitHub 검색 구문](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)을 사용합니다.

이 제안이 표시될 파일을 **GitHub Issues: Ignore Completion Trigger** (`githubIssues.ignoreCompletionTrigger`) 및 **GitHub Issues: Ignore User Completion Trigger** (`githubIssues.ignoreUserCompletionTrigger`) 설정을 사용하여 구성할 수도 있습니다. 이러한 설정은 파일 유형을 지정하기 위해 [언어 식별자](/docs/languages/identifiers.md) 배열을 받습니다.

```jsonc
// '#' 문자가 이슈 완성 제안을 트리거하지 않아야 하는 언어들.
"githubIssues.ignoreCompletionTrigger": [
  "python"
]
```

## Pull Requests {#pull-requests}

**Pull Requests** 보기에서 Pull Request를 보고, 관리하고, 생성할 수 있습니다.

![Pull Request 보기](images/github/pull-request-view.png)

Pull Request를 표시하는 데 사용되는 쿼리는 **GitHub Pull Requests: Queries** (`githubPullRequests.queries`) 설정으로 구성할 수 있으며 [GitHub 검색 구문](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)을 사용합니다.

```json
"githubPullRequests.queries": [
    {
        "label": "나에게 할당됨",
        "query": "is:open assignee:$\{user\}
"
    },
```

### Pull Request 생성 {#creating-pull-requests}

포크나 브랜치에 변경 사항을 커밋한 후, **GitHub Pull Requests: Create Pull Request** 명령이나 **Pull Requests** 보기의 **Create Pull Request** 버튼을 사용하여 Pull Request를 생성할 수 있습니다.

![Pull Request 보기의 Create Pull Request 버튼](images/github/create-pull-request-button.png)

새로운 **Create** 보기가 표시되며, Pull Request를 대상으로 할 기본 리포지토리와 기본 브랜치를 선택하고 제목과 설명을 입력할 수 있습니다. 리포지토리에 Pull Request 템플릿이 있는 경우, 설명에 자동으로 사용됩니다.

작업 표시줄의 버튼을 사용하여 **Assignees**, **Reviewers**, **Labels** 및 **Milestone**을 추가할 수 있습니다.

![Create Pull Request 보기](images/github/create-pull-request-view.png)

**Create** 버튼 메뉴를 사용하여 **Create Draft** 또는 **Auto-Merge** 방법을 활성화하는 등의 대체 생성 옵션을 선택할 수 있습니다.

**Create**를 선택하면, 아직 브랜치를 GitHub 원격에 푸시하지 않은 경우, 확장은 브랜치를 게시할지 묻고 특정 원격을 선택할 수 있는 드롭다운을 제공합니다.

**Create Pull Request** 보기는 이제 **Review Mode**로 전환되어 PR의 세부 정보를 검토하고, 댓글을 추가하고, PR이 준비되면 병합할 수 있습니다. PR이 병합된 후에는 원격 및 로컬 브랜치를 삭제할 수 있는 옵션이 제공됩니다.

### 리뷰 {#reviewing}

Pull Request는 **Pull Requests** 보기에서 리뷰할 수 있습니다. 리뷰어와 라벨을 할당하고, 댓글을 추가하고, 승인하고, 닫고, 병합할 수 있습니다. 모든 작업은 Pull Request **Description**에서 가능합니다.

![Pull Request 설명 편집기](images/github/pull-request-description-editor.png)

**Description** 페이지에서 **Checkout** 버튼을 사용하여 로컬에서 Pull Request를 쉽게 체크아웃할 수 있습니다. 이렇게 하면 VS Code가 Pull Request의 포크와 브랜치를 열고(상태 표시줄에 표시됨) Review Mode로 전환되며, 현재 변경 사항의 차이와 모든 커밋 및 해당 커밋 내의 변경 사항을 볼 수 있는 새로운 **Changes in Pull Request** 보기가 추가됩니다. 댓글이 달린 파일은 다이아몬드 아이콘으로 장식됩니다. 디스크에서 파일을 보려면 **Open File** 인라인 작업을 사용할 수 있습니다.

![Pull Request 보기의 Changes](images/github/changes-view.png)

이 보기의 차이 편집기는 로컬 파일을 사용하므로 파일 탐색, IntelliSense 및 편집이 정상적으로 작동합니다. 이러한 차이에서 편집기 내에서 댓글을 추가할 수 있습니다. 단일 댓글 추가와 전체 리뷰 생성이 모두 지원됩니다.

Pull Request 변경 사항 검토가 완료되면 PR을 병합하거나 **Exit Review Mode**를 선택하여 작업 중이던 이전 브랜치로 돌아갈 수 있습니다.

## Issues {#issues}

### 이슈 생성 {#creating-issues}

이슈는 **Issues** 보기의 **+** 버튼과 **GitHub Issues: Create Issue from Selection** 및 **GitHub Issues: Create Issue from Clipboard** 명령을 사용하여 생성할 수 있습니다. "TODO" 댓글에 대한 코드 작업을 사용하여 생성할 수도 있습니다. 이슈를 생성할 때 기본 설명을 사용하거나 오른쪽 상단의 **Edit Description** 연필 아이콘을 선택하여 이슈 본문에 대한 편집기를 띄울 수 있습니다.

![TODO에서 이슈 생성](images/github/issue-from-todo.gif)

코드 작업의 트리거는 **GitHub Issues: Create Issue Triggers** (`githubIssues.createIssueTriggers`) 설정을 사용하여 구성할 수 있습니다.

기본 이슈 트리거는 다음과 같습니다:

```json
"githubIssues.createIssueTriggers": [
  "TODO",
  "todo",
  "BUG",
  "FIXME",
  "ISSUE",
  "HACK"
]
```

### 이슈 작업 {#working-on-issues}

**Issues** 보기에서 이슈를 보고 작업할 수 있습니다.

![호버가 있는 이슈 보기](images/github/issues-view.png)

기본적으로 이슈 작업을 시작할 때(**Start Working on Issue** 컨텍스트 메뉴 항목), 브랜치가 생성되며 아래 이미지의 상태 표시줄에 표시됩니다.

![이슈 작업](images/github/working-on-issue.png)

상태 표시줄에는 활성 이슈도 표시되며, 해당 항목을 선택하면 GitHub 웹사이트에서 이슈를 열거나 Pull Request를 생성하는 등의 이슈 작업 목록이 표시됩니다.

![이슈 상태 표시줄 작업](images/github/issue-status-bar-actions.png)

**GitHub Issues: Issue Branch Title** (`githubIssues.issueBranchTitle`) 설정을 사용하여 브랜치 이름을 구성할 수 있습니다. 워크플로우에 브랜치 생성이 포함되지 않거나 매번 브랜치 이름을 입력하도록 프롬프트를 받고 싶다면 **GitHub Issues: Use Branch For Issues** (`githubIssues.useBranchForIssues`) 설정을 끄면 됩니다.

이슈 작업이 완료되고 변경 사항을 커밋하려면 **소스 관리** 보기의 커밋 메시지 입력 상자가 메시지로 채워지며, 이는 **GitHub Issues: Working Issue Format SCM** (`githubIssues.workingIssueFormatScm`)으로 구성할 수 있습니다.

## GitHub Repositories 확장 {#github-repositories-extension}

[GitHub Repositories](https://marketplace.visualstudio.com/items?itemName=github.remotehub) 확장을 사용하면 리포지토리를 로컬로 클론할 필요 없이 Visual Studio Code 내에서 원격 GitHub 리포지토리를 빠르게 탐색, 검색, 편집 및 커밋할 수 있습니다. 이는 소스 코드를 검토하거나 파일이나 자산에 작은 변경을 가해야 하는 많은 시나리오에서 빠르고 편리할 수 있습니다.

![GitHub Repositories 확장](images/github/github-repositories-extension.png)

### 리포지토리 열기 {#opening-a-repository}

GitHub Repositories 확장을 설치한 후, 명령 팔레트(`Ctrl+Shift+P`)에서 **GitHub Repositories: Open Repository...** 명령을 실행하거나 상태 표시줄의 원격 표시기를 클릭하여 리포지토리를 열 수 있습니다.

![상태 표시줄의 원격 표시기](images/github/remote-indicator.png)

**Open Repository** 명령을 실행하면 GitHub에서 리포지토리를 열지, GitHub에서 Pull Request를 열지, 또는 이전에 연결한 리포지토리를 다시 열지 선택할 수 있습니다.

VS Code에서 GitHub에 로그인한 적이 없다면 GitHub 계정으로 인증하라는 프롬프트가 표시됩니다.

![GitHub Repository 확장 리포지토리 열기 드롭다운](images/github/open-github-repository-dropdown.png)

리포지토리 URL을 직접 제공하거나 텍스트 상자에 입력하여 GitHub에서 원하는 리포지토리를 검색할 수 있습니다.

리포지토리나 Pull Request를 선택하면 VS Code 창이 다시 로드되고 파일 탐색기에서 리포지토리 내용을 볼 수 있습니다. 그런 다음 파일을 열고(전체 구문 강조 및 괄호 일치 포함), 편집하고, 변경 사항을 커밋할 수 있습니다. 로컬 클론된 리포지토리에서 작업하는 것과 마찬가지입니다.

로컬 리포지토리에서 작업하는 것과의 차이점은 GitHub Repository 확장을 사용하여 변경 사항을 커밋할 때 변경 사항이 원격 리포지토리에 직접 푸시된다는 점입니다. 이는 GitHub 웹 인터페이스에서 작업하는 것과 유사합니다.

GitHub Repositories 확장의 또 다른 기능은 리포지토리나 브랜치를 열 때마다 GitHub에서 사용할 수 있는 최신 소스를 가져온다는 것입니다. 로컬 리포지토리에서처럼 새로 고침을 위해 pull을 기억할 필요가 없습니다.

GitHub Repositories 확장은 [Git LFS](https://git-lfs.github.com) (Large File System)을 로컬에 설치하지 않고도 LFS로 추적된 파일을 보고 커밋하는 것을 지원합니다. 추적하려는 파일 유형을 [`.gitattributes` 파일](https://git-lfs.com)에 추가한 다음 소스 관리 보기를 사용하여 변경 사항을 GitHub에 직접 커밋하세요.

### 브랜치 전환 {#switching-branches}

상태 표시줄의 브랜치 표시기를 클릭하여 브랜치 간에 쉽게 전환할 수 있습니다. GitHub Repositories 확장의 훌륭한 기능 중 하나는 커밋되지 않은 변경 사항을 스태시할 필요 없이 브랜치를 전환할 수 있다는 것입니다. 확장은 변경 사항을 기억하고 브랜치를 전환할 때 다시 적용합니다.

![상태 표시줄의 브랜치 표시기](images/github/branch-indicator-status-bar.png)

### 원격 탐색기 {#remote-explorer}

활동 표시줄의 원격 탐색기를 사용하여 원격 리포지토리를 빠르게 다시 열 수 있습니다. 이 보기에는 이전에 열었던 리포지토리와 브랜치가 표시됩니다.

![원격 탐색기 보기](images/github/github-remote-explorer.png)

### Pull Request 생성 {#create-pull-requests}

워크플로우에서 리포지토리에 직접 커밋하는 대신 Pull Request를 사용하는 경우, 소스 관리 보기에서 새 PR을 생성할 수 있습니다. 제목을 제공하고 새 브랜치를 생성하라는 프롬프트가 표시됩니다.

![소스 관리 보기의 Pull Request 생성 버튼](images/github/github-repositories-create-pull-request.png)

Pull Request를 생성한 후, [GitHub Pull Request 및 Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 확장을 사용하여 PR을 검토, 편집 및 병합할 수 있습니다. 이 주제의 [이전](/docs/sourcecontrol/github.md#pull-requests) 섹션에서 설명한 대로입니다.

### 가상 파일 시스템 {#virtual-file-system}

리포지토리의 파일이 로컬 머신에 없으면 GitHub Repositories 확장은 메모리에 가상 파일 시스템을 생성하여 파일 내용을 보고 편집할 수 있습니다. 가상 파일 시스템을 사용하면 로컬 파일을 가정하는 일부 작업 및 확장이 활성화되지 않거나 기능이 제한됩니다. 작업, 디버깅 및 통합 터미널과 같은 기능은 활성화되지 않으며, 원격 표시기 호버의 **features are not available** 링크를 통해 가상 파일 시스템에 대한 지원 수준을 확인할 수 있습니다.

![기능을 사용할 수 없음 링크가 있는 원격 표시기 호버](images/github/features-not-available-hover.png)

확장 작성자는 [가상 작업 공간 확장 작성자 가이드](https://github.com/microsoft/vscode/wiki/Virtual-Workspaces)에서 가상 파일 시스템 및 작업 공간에서 실행에 대해 자세히 알아볼 수 있습니다.

### 계속 작업하기 {#continue-working-on}

때로는 로컬 파일 시스템과 전체 언어 및 개발 도구 지원이 있는 개발 환경에서 리포지토리 작업을 전환하고 싶을 때가 있습니다. GitHub Repositories 확장은 다음을 쉽게 수행할 수 있도록 합니다:

- GitHub codespace 생성( [GitHub Codespaces 확장](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)이 있는 경우).
- 리포지토리를 로컬로 클론.
- 리포지토리를 Docker 컨테이너에 클론( [Docker](https://docker.com/) 및 Microsoft [Docker 확장](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)이 설치된 경우).

개발 환경을 전환하려면 명령 팔레트(`Ctrl+Shift+P`)에서 **Continue Working On...** 명령을 사용하거나 상태 표시줄의 원격 표시기를 클릭하세요.

![원격 드롭다운의 Continue Working On 명령](images/github/continue-working.png)

[브라우저 기반 편집기](/docs/remote/codespaces.md#browserbased-editor)를 사용하는 경우, **"Continue Working On..."** 명령에는 리포지토리를 로컬로 열거나 [GitHub Codespaces](https://github.com/features/codespaces)에서 클라우드 호스팅 환경 내에서 열 수 있는 옵션이 있습니다.

![웹 기반 편집기에서 계속 작업하기](images/github/codespaces-continue.png)

커밋되지 않은 변경 사항이 있는 상태에서 **Continue Working On**을 처음 사용할 때, **Cloud Changes**를 사용하여 선택한 개발 환경으로 편집 내용을 가져올 수 있는 옵션이 제공됩니다. 이는 설정 동기화에 사용되는 동일한 VS Code 서비스에 보류 중인 변경 사항을 저장합니다.

이러한 변경 사항은 대상 개발 환경에 적용되면 서비스에서 삭제됩니다. 커밋되지 않은 변경 사항 없이 계속 진행하기로 선택한 경우, 나중에 설정 `"workbench.cloudChanges.continueOn": "prompt"`을 구성하여 이 기본 설정을 변경할 수 있습니다.

보류 중인 변경 사항이 대상 개발 환경에 자동으로 적용되지 않는 경우, **Cloud Changes: Show Cloud Changes** 명령을 사용하여 저장된 변경 사항을 보고, 관리하고, 삭제할 수 있습니다.

## GitHub Copilot {#github-copilot}

VS Code에서 인공 지능(AI)을 사용하여 코딩을 향상시킬 수 있습니다. 예를 들어 코드 줄이나 전체 함수에 대한 제안, 빠른 문서 생성, 테스트와 같은 코드 관련 아티팩트 생성 지원 등이 있습니다.

[GitHub Copilot](https://copilot.github.com/)은 코드 작성 속도와 스마트함을 높여주는 AI 기반 코드 완성 도구입니다. [GitHub Copilot 확장](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)을 VS Code에서 사용하여 코드를 생성하거나 생성된 코드에서 배울 수 있습니다.

[![VS Code 마켓플레이스의 GitHub Copilot 확장](images/github/copilot-extension.png)](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)

Copilot을 시작하는 방법에 대한 자세한 내용은 [Copilot 문서](/docs/editor/github-copilot.md)에서 확인할 수 있습니다.

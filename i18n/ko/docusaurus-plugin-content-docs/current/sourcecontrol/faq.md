---
Order: 16
Area: 소스 제어 (sourcecontrol)
TOCTitle: 자주 묻는 질문 (FAQ)
PageTitle: VS Code의 소스 제어, Git 및 GitHub 관련 자주 묻는 질문
ContentId: 431b4458-34c4-4aba-a0ee-eaddf7cd91a1
MetaDescription: Visual Studio Code의 소스 제어, Git 및 GitHub에 대한 자주 묻는 질문(FAQ)
DateApproved: 2025-03-05
---
# 소스 제어 FAQ {#source-control-faq}

이 주제는 Visual Studio Code에서 Git 소스 제어 및 GitHub 사용에 대한 자주 묻는 질문에 답변합니다.

## Git {#git}

### Git 커밋을 되돌리거나 취소하는 방법은 무엇인가요? {#how-to-revert-or-undo-a-git-commit}

**Git: 마지막 커밋 취소** 명령을 사용하여 마지막 커밋을 되돌릴 수 있습니다. 이 명령은 커밋을 수행하기 직전의 상태로 브랜치를 재설정하며, 모든 변경 사항이 포함됩니다. 이 명령은 소스 제어 뷰 상단의 **커밋** 아래 **더 많은 작업** `...` 메뉴에서도 사용할 수 있습니다.

### 로컬 브랜치 이름을 변경하는 방법은 무엇인가요? {#how-to-rename-a-local-branch}

**Git: 브랜치 이름 변경…** 명령을 사용하면 새 이름을 입력하라는 메시지가 표시됩니다.

### 커밋하기 전에 git add를 취소하는 방법은 무엇인가요? {#how-to-undo-a-git-add-before-committing}

**스테이지된 변경 사항**에 나열된 추가된 파일은 **-** 아이콘을 사용하거나 드래그 앤 드롭으로 스테이징 해제할 수 있습니다.

### 가장 최근의 커밋 메시지를 수정하는 방법은 무엇인가요? {#how-to-edit-the-most-recent-commit-message}

마지막 로컬 커밋의 커밋 메시지를 업데이트하려면 **Git: 스테이지된 커밋 (수정)** 명령을 사용하세요. 이 명령은 마지막 메시지를 편집하고 저장할 수 있는 편집기를 엽니다. 다른 변경 사항이 스테이지되지 않았는지 확인하세요. 그렇지 않으면 커밋에 포함됩니다.

### 리포지토리를 초기화했지만 `...` 메뉴의 모든 작업이 회색으로 표시됩니다. {#i-initialized-my-repo-but-the-actions-in-the-menu-are-all-grayed-out}

**푸시, 풀 및 동기화**를 하려면 Git 원본이 설정되어 있어야 합니다. 필요한 URL은 리포지토리 호스트에서 가져올 수 있습니다. URL을 확보한 후, 몇 가지 명령줄 작업을 실행하여 Git 설정에 추가해야 합니다. 예를 들어:

```bash
> git remote add origin https://github.com/<repo owner>/<repo name>.git
> git push -u origin main
```

### 내 팀은 Git 대신 Team Foundation Version Control (TFVC)을 사용하고 있습니다. 어떻게 해야 하나요? {#my-team-is-using-team-foundation-version-control-tfvc-instead-of-git-what-should-i-do}

[Azure Repos](https://marketplace.visualstudio.com/items?itemName=ms-vsts.team) 확장을 사용하면 TFVC 지원이 활성화됩니다.

### Pull, Push 및 Sync 작업이 끝나지 않는 이유는 무엇인가요? {#why-do-the-pull-push-and-sync-actions-never-finish}

이는 일반적으로 Git에 자격 증명 관리가 구성되어 있지 않으며, 어떤 이유로 자격 증명 프롬프트를 받지 못하고 있음을 의미합니다.

항상 [자격 증명 도우미](https://docs.github.com/get-started/getting-started-with-git/caching-your-github-credentials-in-git)를 설정하여 VS Code가 매번 자격 증명을 요청하지 않고 원격 서버에서 풀 및 푸시할 수 있습니다.

### 다단계 인증이 필요한 Azure DevOps 조직으로 Git에 로그인하려면 어떻게 해야 하나요? {#how-can-i-sign-in-to-git-with-my-azure-devops-organization-that-requires-multi-factor-authentication}

[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager) (GCM)은 Windows, macOS 및 Linux에 권장되는 Git 자격 증명 도우미입니다. Windows에서 Git을 실행하는 경우 GCM이 이미 설치되고 구성되어 있습니다. macOS 또는 Linux에서 실행하는 경우 GCM [README](https://github.com/GitCredentialManager/git-credential-manager#download-and-install)에 설정 지침이 있습니다.

### 내 컴퓨터에 GitHub Desktop이 설치되어 있지만 VS Code가 이를 무시합니다. {#i-have-github-desktop-installed-on-my-computer-but-vs-code-ignores-it}

VS Code는 Git 통합을 위해 [공식 Git 배포판](https://git-scm.com/)만 지원합니다.

### VS Code가 실행 중일 때마다 Git 인증 대화 상자가 계속 나타납니다. {#i-keep-getting-git-authentication-dialogs-whenever-vs-code-is-running}

VS Code는 서버에서 변경 사항을 자동으로 가져와서 들어오는 변경 사항의 요약을 제공합니다. Git 인증 대화 상자는 VS Code 자체와 독립적이며 현재 Git 자격 증명 도우미의 일부입니다.

이러한 프롬프트를 피하는 한 가지 방법은 자격 증명을 기억하는 [자격 증명 도우미](https://docs.github.com/get-started/getting-started-with-git/caching-your-github-credentials-in-git)를 설정하는 것입니다.

또 다른 옵션은 다음 설정을 변경하여 자동 가져오기 기능을 비활성화하는 것입니다: `"git.autofetch": false`.

### 왜 VS Code가 Git 리포지토리가 잠재적으로 안전하지 않다고 경고하나요? {#why-is-vs-code-warning-me-that-the-git-repository-is-potentially-unsafe}

VS Code는 모든 Git 작업을 실행하기 위해 `git.exe`를 사용합니다. Git [2.35.2](https://github.blog/2022-04-18-highlights-from-git-2-36/#stricter-repository-ownership-checks)부터 사용자는 현재 사용자와 다른 사용자가 소유한 폴더에 있는 리포지토리에서 Git 작업을 실행할 수 없습니다. 이는 리포지토리가 잠재적으로 안전하지 않다고 간주되기 때문입니다.

이러한 리포지토리를 열려고 하면 VS Code는 소스 제어 뷰에서 환영 뷰 또는 오류 알림을 표시합니다. 환영 뷰와 알림 모두 잠재적으로 안전하지 않은 리포지토리 목록을 검토하고 안전하다고 표시하며 열 수 있는 **안전하지 않은 리포지토리 관리** 명령을 포함합니다. **안전하지 않은 리포지토리 관리** 명령은 명령 팔레트(`kb(workbench.action.showCommands)`)에서도 사용할 수 있습니다. 리포지토리를 안전하다고 표시하면 해당 리포지토리 위치가 `safe.directory` [git 구성](https://git-scm.com/docs/git-config#Documentation/git-config.txt-safedirectory)에 추가됩니다.

Windows에서 이러한 상황이 발생하는 일반적인 시나리오는 리포지토리가 "관리자 권한으로" 실행되는 애플리케이션(예: Windows Terminal 또는 VS Code)을 사용하여 클론되었지만, 리포지토리가 "관리자 권한으로" 실행되지 않는 다른 애플리케이션이나 인스턴스(예: VS Code)에서 열리는 경우입니다.

### 왜 VS Code가 작업 공간이나 열린 파일의 상위 폴더에서 Git 리포지토리를 발견하지 못하나요? {#why-isnt-vs-code-discovering-git-repositories-in-parent-folders-of-workspaces-or-open-files}

VS Code는 `git rev-parse --show-toplevel`을 사용하여 Git 리포지토리의 루트를 결정합니다. 대부분의 경우 Git 리포지토리의 루트는 작업 공간 내에 있지만, 작업 공간이나 열린 파일의 상위 폴더에 Git 리포지토리의 루트가 있는 경우도 있습니다. 작업 공간이나 열린 파일의 상위 폴더에서 Git 리포지토리를 여는 것은 고급 사용자에게는 훌륭한 기능이지만, 새로운 사용자에게는 혼란스러울 수 있습니다. 이러한 혼란으로 인해 이러한 Git 리포지토리에서 변경 사항이 버려져 데이터 손실이 발생한 경우도 있었습니다.

혼란을 피하고 데이터 손실 위험을 줄이기 위해 VS Code는 알림과 소스 제어 뷰에서 새로운 환영 뷰를 표시하며, 작업 공간과 열린 파일의 상위 폴더에서 Git 리포지토리를 자동으로 열지 않습니다.

상위 폴더의 Git 리포지토리 처리 방법은 `setting(git.openRepositoryInParentFolders)` 설정을 사용하여 제어할 수 있습니다. 이전 동작으로 복원하려면 `setting(git.openRepositoryInParentFolders)` 설정을 `항상`으로 설정하세요.

### VS Code에서 SSH Git 인증을 사용할 수 있나요? {#can-i-use-ssh-git-authentication-with-vs-code}

네, VS Code는 패스프레이즈가 없는 SSH 키와 가장 쉽게 작동합니다. 패스프레이즈가 있는 SSH 키가 있는 경우, SSH 환경을 상속받기 위해 Git Bash 프롬프트에서 VS Code를 실행해야 합니다.

## GitHub {#github}

### GitHub Enterprise가 지원되나요? {#is-github-enterprise-supported}

VS Code는 GitHub Enterprise 서버에 대한 인증을 공식적으로 지원합니다. GHES 리포지토리의 로컬 체크아웃을 열면 GitHub Enterprise 서버 계정으로 로그인하라는 메시지가 표시됩니다.
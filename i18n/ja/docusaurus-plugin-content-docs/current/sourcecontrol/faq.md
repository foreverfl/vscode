---
Order: 16
Area: sourcecontrol
TOCTitle: FAQ
PageTitle: VS Code의 소스 제어, Git 및 GitHub 자주 묻는 질문
ContentId: 431b4458-34c4-4aba-a0ee-eaddf7cd91a1
MetaDescription: Visual Studio Code의 소스 제어, Git 및 GitHub에 대한 자주 묻는 질문(FAQ)
DateApproved: 12/11/2024
---

# 소스 제어 FAQ {#source-control-faq}

이 주제는 Visual Studio Code에서 Git 소스 제어 및 GitHub을 사용하는 것에 대한 자주 묻는 질문에 답변합니다.

## Git {#git}

### Git 커밋을 되돌리거나 취소하는 방법은? {#how-to-revert-or-undo-a-git-commit}

**Git: Undo Last Commit** 명령을 사용하여 마지막 커밋을 되돌립니다. 이 명령은 커밋 직전 상태로 브랜치를 재설정하며, 모든 변경 사항을 포함합니다. 이 명령은 소스 제어 보기 상단의 **Commit** 아래 **More Actions** `...` 메뉴에서도 사용할 수 있습니다.

### 로컬 브랜치 이름을 변경하는 방법은? {#how-to-rename-a-local-branch}

**Git: Rename Branch…** 명령을 사용하면 새 이름을 입력하라는 메시지가 표시됩니다.

### 커밋하기 전에 git add를 취소하는 방법은? {#how-to-undo-a-git-add-before-committing}

**Staged Changes**에 나열된 추가된 파일은 **-** 아이콘을 사용하거나 드래그 앤 드롭으로 스테이지 해제할 수 있습니다.

### 가장 최근 커밋 메시지를 수정하는 방법은? {#how-to-edit-the-most-recent-commit-message}

마지막 로컬 커밋의 커밋 메시지를 업데이트하려면 **Git: Commit Staged (Amend)** 명령을 사용합니다. 이 명령은 마지막 메시지를 편집하고 저장할 수 있는 편집기를 엽니다. 다른 변경 사항이 스테이지되지 않았는지 확인하십시오. 그렇지 않으면 커밋에 포함됩니다.

### 리포지토리를 초기화했지만 `...` 메뉴의 작업이 모두 회색으로 표시됩니다 {#initialized-repo-actions-grayed-out}

**push, pull, sync**를 하려면 Git 원격 저장소가 설정되어 있어야 합니다. 리포지토리 호스트에서 필요한 URL을 얻을 수 있습니다. URL을 얻은 후에는 몇 가지 명령줄 작업을 실행하여 Git 설정에 추가해야 합니다. 예를 들어:

```bash
> git remote add origin https://github.com/<repo owner>/<repo name>.git
> git push -u origin main
```

### 내 팀이 Git 대신 Team Foundation Version Control(TFVC)을 사용하고 있습니다. 어떻게 해야 하나요? {#team-using-tfvc-instead-of-git}

[Azure Repos](https://marketplace.visualstudio.com/items?itemName=ms-vsts.team) 확장을 사용하면 TFVC 지원이 활성화됩니다.

### Pull, Push 및 Async 작업이 완료되지 않는 이유는 무엇인가요? {#pull-push-sync-actions-never-finish}

이 문제는 Git에 자격 증명 관리가 구성되지 않았고 자격 증명 도우미가가 표시되지 않는 경우에 발생합니다.

원격 서버에서 가져오고 푸시할 때마다 VS Code에서 자격 증명을 묻지 않도록 [자격 증명 도우미](https://docs.github.com/get-started/getting-started-with-git/caching-your-github-credentials-in-git)를 설정할 수 있습니다.

### 다중 요소 인증이 필요한 Azure DevOps 조직에 Git으로 로그인하는 방법은? {#sign-in-to-git-with-azure-devops-organization}

[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager) (GCM)은 Windows, macOS 및 Linux에서 권장되는 Git 자격 증명 도우미입니다. Git for Windows를 실행 중인 경우 GCM이 이미 설치되고 구성되어 있습니다. macOS 또는 Linux를 실행 중인 경우 GCM [README](https://github.com/GitCredentialManager/git-credential-manager#download-and-install)에 설정 지침이 있습니다.

### 내 컴퓨터에 GitHub Desktop이 설치되어 있지만 VS Code가 이를 무시합니다 {#github-desktop-installed-but-vscode-ignores}

VS Code는 Git 통합을 위해 [공식 Git 배포판](https://git-scm.com/)만 지원합니다.

### VS Code가 실행 중일 때 Git 인증 대화 상자가 계속 나타납니다 {#git-authentication-dialogs-keep-appearing}

VS Code는 서버에서 변경 사항을 자동으로 가져와서 들어오는 변경 사항 요약을 제공합니다. Git 인증 대화 상자는 VS Code 자체와 독립적이며 현재 Git 자격 증명 도우미의 일부입니다.

이 인증 창을을 피하는 한 가지 방법은 자격 증명을 기억하는 [자격 증명 도우미](https://docs.github.com/get-started/getting-started-with-git/caching-your-github-credentials-in-git)를 설정하는 것입니다.

또 다른 옵션은 다음 설정을 변경하여 자동 가져오기 기능을 비활성화하는 것입니다: `"git.autofetch": false`.

### VS Code가 git 리포지토리가 잠재적으로 안전하지 않다고 경고하는 이유는 무엇인가요? {#vscode-warning-unsafe-git-repository}

VS Code는 모든 Git 작업을 실행하기 위해 `git.exe`를 사용합니다. Git [2.35.2](https://github.blog/2022-04-18-highlights-from-git-2-36/#stricter-repository-ownership-checks)부터 사용자는 현재 사용자가 소유하지 않은 폴더에 있는 리포지토리에서 Git 작업을 실행할 수 없습니다. 이러한 리포지토리는 잠재적으로 안전하지 않은 것으로 간주됩니다.

이러한 리포지토리를 열려고 하면 VS Code는 소스 제어 보기에서 환영 화면을 표시하거나 오류 알림을 표시합니다. 환영 화면과 알림에는 잠재적으로 안전하지 않은 리포지토리 목록을 검토하고, 안전한 것으로 표시하고, 열 수 있는 **Manage Unsafe Repositories** 명령이 포함되어 있습니다. **Manage Unsafe Repositories** 명령은 명령 팔레트(`Ctrl+Shift+P`)에서도 사용할 수 있습니다. 리포지토리를 안전한 것으로 표시하면 리포지토리 위치가 `safe.directory` [git 구성](https://git-scm.com/docs/git-config#Documentation/git-config.txt-safedirectory)에 추가됩니다.

Windows에서 이 문제가 발생할 수 있는 일반적인 시나리오는 "관리자 권한으로" 실행되는 응용 프로그램(예: Windows 터미널 또는 VS Code)을 사용하여 리포지토리를 클론한 후 다른 응용 프로그램 또는 인스턴스(예: VS Code)를 사용하여 리포지토리를 여는 경우입니다.

### VS Code가 작업 공간 또는 열린 파일의 상위 폴더에서 Git 리포지토리를 검색하지 않는 이유는 무엇인가요? {#vscode-not-discovering-git-repositories}

VS Code는 `git rev-parse --show-toplevel`을 사용하여 Git 리포지토리의 루트를 결정합니다. 대부분의 경우 Git 리포지토리의 루트는 작업 공간 내부에 있지만, Git 리포지토리의 루트가 작업 공간 또는 열린 파일의 상위 폴더에 있는 시나리오도 있습니다. 상위 폴더의 Git 리포지토리를 여는 것은 고급 사용자에게는 유용한 기능이지만, 새로운 사용자에게는 혼란을 줄 수 있습니다. 이러한 혼란으로 인해 이러한 Git 리포지토리에서 변경 사항을 삭제하여 데이터 손실이 발생하는 경우를 보았습니다.

혼란을 피하고 데이터 손실 위험을 줄이기 위해 VS Code는 소스 제어 보기에서 알림과 새로운 환영 화면을 표시하고 작업 공간 및 열린 파일의 상위 폴더에서 Git 리포지토리를 자동으로 열지 않습니다.

상위 폴더의 Git 리포지토리를 처리하는 방법은 `git.openRepositoryInParentFolders` 설정을 사용하여 제어할 수 있습니다. 이전 동작을 복원하려면 `git.openRepositoryInParentFolders` 설정을 `always`로 설정하십시오.

### VS Code에서 SSH Git 인증을 사용할 수 있나요? {#use-ssh-git-authentication}

예, VS Code는 암호 문구가 없는 SSH 키와 가장 쉽게 작동합니다. 암호 문구가 있는 SSH 키가 있는 경우 Git Bash 인증창에서 VS Code를 실행하여 SSH 환경을 상속해야 합니다.

## GitHub {#github}

### GitHub Enterprise가 지원되나요? {#is-github-enterprise-supported}

VS Code는 GitHub Enterprise 서버와의 인증을 공식적으로 지원합니다. GHES 리포지토리의 로컬 체크아웃을 열면 GitHub Enterprise 서버 계정으로 로그인하라는 메시지가 표시됩니다.

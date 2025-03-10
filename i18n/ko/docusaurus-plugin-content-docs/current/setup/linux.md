---
Order: 2  
Area: setup  
TOCTitle: Linux  
ContentId: 7FDF94DB-3527-4296-BE1C-493495B89408  
PageTitle: Linux에서 Visual Studio Code 실행하기  
DateApproved: 2025/03/05  
MetaDescription: Linux에서 Visual Studio Code를 설치하고 실행하는 방법을 알아보세요.
sidebar_label: Linux
---
# Linux에서의 Visual Studio Code {#visual-studio-code-on-linux}

## 설치 {#installation}

1. [리눅스 배포판에 맞는 비주얼 스튜디오 코드 다운로드 및 설치](#install-vs-code-on-linux)

    :::note
    VS Code는 매달 릴리스를 제공하며, 새로운 릴리스가 있을 때 [자동 업데이트](#updates)를 지원합니다.
    :::

1. [추가 구성 요소 설치](/docs/setup/additional-components.md)

    Git, Node.js, TypeScript, 언어 런타임 등을 설치합니다.

1. [비주얼 스튜디오 마켓플레이스에서 VS Code 확장 설치](https://marketplace.visualstudio.com/VSCode)

    테마, 포맷터, 언어 확장 및 좋아하는 언어의 디버거로 VS Code를 사용자화합니다.

1. [GitHub Copilot로 AI 지원 코딩 설정](/docs/copilot/setup-simplified.md)

    :::tip
    Copilot 구독을 아직 하지 않았다면, [Copilot 무료 플랜](https://github.com/github-copilot/signup)에 가입하여 무료로 Copilot을 사용할 수 있으며, 월별 사용량 제한이 적용되며 및 채팅 상호작용의 기능을 이용할 수 있습니다.

1. [VS Code 튜토리얼 시작하기](/docs/getstarted/getting-started.md)

    VS Code의 사용자 인터페이스와 주요 기능을 알아봅니다.

## Linux에 VS Code 설치하기 {#install-vs-code-on-linux}

### 데비안 및 우분투 기반 배포판 {#debian-and-ubuntu-based-distributions}

1. Debian/Ubuntu 기반 배포판에  Visual Studio Code를 설치하는 가장 쉬운 방법은 [.deb 패키지 (64비트)](https://go.microsoft.com/fwlink/?LinkID=760868)를 다운로드하여 설치하는 것입니다. 그래픽 소프트웨어 센터를 통해 설치하거나, 명령줄에서 다음과 같이 실행합니다:

    ```bash
    sudo apt install ./<file>.deb

    # 이전 리눅스 배포판을 사용하는 경우, 대신 다음을 실행해야 합니다:
    # sudo dpkg -i <file>.deb
    # sudo apt-get install -f # 의존성 설치
    ```

    :::note
    다른 바이너리도 [VS Code 다운로드 페이지](/Download)에서 사용할 수 있습니다.
    :::

    .deb 패키지를 설치하면, 시스템의 패키지 관리자를 사용하여 자동 업데이트를 활성화하기 위해 apt 저장소와 서명 키를 설치하라는 메시지가 표시됩니다.

1. 비대화형 터미널에서 자동으로 apt 저장소와 서명 키를 설치하려면, 먼저 다음 명령을 실행합니다:

    ```bash
    echo "code code/add-microsoft-repo boolean true" | sudo debconf-set-selections
    ```

1. apt 저장소를 수동으로 설치하려면:

    1. 다음 스크립트를 실행합니다:

        ```bash
        sudo apt-get install wget gpg
        wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
        sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
        echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" |sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null
        rm -f packages.microsoft.gpg
        ```

    1. 그런 다음 패키지 캐시를 업데이트하고 다음을 사용하여 패키지를 설치합니다:

        ```bash
        sudo apt install apt-transport-https
        sudo apt update
        sudo apt install code # 또는 code-insiders
        ```

### RHEL, Fedora 및 CentOS 기반 배포판 {#rhel-fedora-and-centos-based-distributions}

현재 RHEL, Fedora 또는 CentOS 기반 배포판에 대해 안정적인 64비트 VS Code를 yum 저장소에서 제공합니다.

1. 다음 스크립트를 실행하여 키와 yum 저장소를 설치합니다:

    ```bash
    sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
    echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\nautorefresh=1\ntype=rpm-md\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" | sudo tee /etc/yum.repos.d/vscode.repo > /dev/null
    ```

1. 그런 다음 패키지 캐시를 업데이트하고 `dnf`를 사용하여 패키지를 설치합니다 (페도라 22 이상):

    ```bash
    dnf check-update
    sudo dnf install code # 또는 code-insiders
    ```

    또는 이전 버전에서는 `yum`을 사용하여:

    ```bash
    yum check-update
    sudo yum install code # 또는 code-insiders
    ```

:::note
수동 서명 프로세스와 우리가 사용하는 게시 시스템으로 인해, yum 저장소는 최신 버전의 VS Code를 즉시 받을 수 없을 수 있습니다.
:::

### 스냅 {#snap}

VS Code는 [Snap Store](https://snapcraft.io/store)에서 공식적으로 스냅 패키지로 배포됩니다.

[![Snap Store에서 받기](images/linux/snap-store.png)](https://snapcraft.io/code)

다음 명령을 실행하여 설치할 수 있습니다:

```bash
sudo snap install --classic code # 또는 code-insiders
```

설치가 완료되면, 스냅 데몬이 백그라운드에서 VS Code를 자동으로 업데이트합니다. 새로운 업데이트가 있을 때마다 제품 내 업데이트 알림을 받게 됩니다.

:::note
만약 `snap`이 리눅스 배포판에서 사용 가능하지 않다면, [snapd 설치 가이드](https://docs.snapcraft.io/installing-snapd)를 확인하여 설정하는 데 도움을 받을 수 있습니다.
:::

_스냅_ 에 대한 자세한 내용은 [공식 스냅 문서](https://docs.snapcraft.io)에서 확인하세요.

### openSUSE 및 SLE 기반 배포판 {#opensuse-and-sle-based-distributions}

앞서 언급한 yum 저장소는 openSUSE 및 SLE 기반 시스템에서도 작동합니다.

1. 다음 스크립트를 실행하여 키와 yum 저장소를 설치합니다:

    ```bash
    sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
    echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\nautorefresh=1\ntype=rpm-md\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" |sudo tee /etc/zypp/repos.d/vscode.repo > /dev/null
    ```

1. 그런 다음 패키지 캐시를 업데이트하고 다음을 사용하여 패키지를 설치합니다:

    ```bash
    sudo zypper install code
    ```

### Arch Linux용 AUR 패키지 {#aur-package-for-arch-linux}

커뮤니티에서 유지 관리하는 [Arch 사용자 저장소 패키지](https://aur.archlinux.org/packages/visual-studio-code-bin)가 있습니다.

AUR에서 설치에 대한 더 많은 정보를 얻으려면 다음 위키 항목을 참조하세요:
[AUR 패키지 설치](https://wiki.archlinux.org/index.php/Arch_User_Repository).

### NixOS용 Nix 패키지 (또는 Nix 패키지 관리자를 사용하는 모든 리눅스 배포판) {#nix-package-for-nixos-or-any-linux-distribution-using-nix-package-manager}

커뮤니티에서 유지 관리하는 [VS Code Nix 패키지](https://github.com/NixOS/nixpkgs/blob/master/pkgs/applications/editors/vscode/vscode.nix)가 nixpkgs 저장소에 있습니다.

Nix를 사용하여 설치하려면:

1. `config.nix`에서 `allowUnfree` 옵션을 true로 설정합니다.

1. 다음 명령을 실행합니다:

    ```bash
    nix-env -i vscode
    ```

### `.rpm` 패키지를 수동으로 설치하기 {#install-the-rpm-package-manually}

[VS Code .rpm 패키지 (64비트)](https://go.microsoft.com/fwlink/?LinkID=760867)를 수동으로 다운로드하고 설치할 수 있지만, 위의 저장소가 설치되지 않으면 자동 업데이트가 작동하지 않습니다.

다운로드한 후, `.rpm` 패키지는 패키지 관리자를 사용하여 설치할 수 있습니다. 예를 들어 `dnf`를 사용하여:

```bash
sudo dnf install <file>.rpm
```

:::note
다른 바이너리도 [VS Code 다운로드 페이지](/Download)에서 사용할 수 있습니다.
:::

## 업데이트 {#updates}

VS Code는 매달 릴리스를 제공하며, 새로운 릴리스가 있을 때는 [릴리스 노트](/updates)를 확인하여 알 수 있습니다. VS Code 저장소가 올바르게 설치되었다면, 시스템 패키지 관리자가 다른 패키지와 동일한 방식으로 자동 업데이트를 처리해야 합니다.

:::note
업데이트는 자동으로 진행되며, [스냅 패키지](#snap)에서는 백그라운드에서 실행됩니다.
:::

## VS Code를 기본 텍스트 편집기로 설정하기 {#configure-vs-code-as-the-default-text-editor}

### xdg-open {#xdg-open}

다음 명령을 사용하여 `xdg-open`에서 사용하는 텍스트 파일(`text/plain`)의 기본 텍스트 편집기를 설정할 수 있습니다:

```bash
xdg-mime default code.desktop text/plain
```

### Debian 대안 시스템 {#debian-alternatives-system}

Debian 기반 배포판에서는 MIME 유형에 관계없이 [데비안 대안 시스템](https://wiki.debian.org/DebianAlternatives)을 사용하여 기본 **editor**를 설정할 수 있습니다. 다음 명령을 실행하고 `code`를 선택하여 설정할 수 있습니다:

```bash
sudo update-alternatives --set editor /usr/bin/code
```

VS Code가 기본 `editor`의 대안으로 나타나지 않는 경우, 등록해야 합니다:

```bash
sudo update-alternatives --install /usr/bin/editor editor $(which code) 10
```

## 사용자 정의 제목 표시줄 사용하기 {#use-the-custom-title-bar}

사용자 정의 제목 표시줄은 훌륭한 테마 지원과 키보드 탐색 및 스크린 리더를 통한 더 나은 접근성을 포함한 많은 이점을 제공합니다. 이러한 이점은 리눅스 플랫폼에 항상 잘 적용되지 않을 수 있습니다. 리눅스에는 다양한 데스크탑 환경과 윈도우 관리자들이 있어 VS Code 테마가 사용자에게 낯설게 보일 수 있습니다. 따라서 리눅스에서는 기본적으로 사용자 정의 제목 표시줄이 활성화되어 있지 않습니다.

접근성 개선이 필요한 사용자에게는 스크린 리더를 사용할 때 접근성 모드에서 실행할 때 사용자 정의 제목 표시줄을 활성화하는 것을 권장합니다.

**Window: Title Bar Style** (`setting(window.titleBarStyle)`) 설정을 사용하여 제목 표시줄을 수동으로 구성할 수 있습니다:

* `custom`: 사용자 정의 제목 표시줄 사용.
* `native`: 운영 체제의 제목 표시줄 사용.

## 리눅스 개발 머신으로서의 윈도우 {#windows-as-a-linux-developer-machine}

VS Code로 리눅스 개발을 위한 또 다른 옵션은 [윈도우 하위 시스템](https://learn.microsoft.com/windows/wsl/install) (WSL)을 사용하는 것입니다.

### 윈도우 하위 시스템 {#windows-subsystem-for-linux}

WSL을 사용하면 윈도우에서 리눅스 배포판을 설치하고 실행하여 리눅스에서 소스 코드를 개발하고 테스트할 수 있으며, 여전히 로컬에서 윈도우 머신에서 작업할 수 있습니다. WSL은 Microsoft Store에서 사용할 수 있는 Ubuntu, Debian, SUSE 및 Alpine과 같은 리눅스 배포판을 지원합니다.

[WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) 확장과 결합하면, WSL에서 리눅스 배포판의 컨텍스트에서 실행되는 동안 VS Code의 전체 편집 및 디버깅 지원을 받을 수 있습니다.

자세한 내용은 [WSL에서 개발하기](/docs/remote/wsl.md) 문서를 참조하거나 [WSL에서 작업하기](/docs/remote/wsl-tutorial.md) 소개 튜토리얼을 시도해 보세요.

## 다음 단계 {#next-steps}

VS Code를 설치한 후, 다음 주제들이 더 많은 정보를 배우는 데 도움이 될 것입니다:

* [VS Code 튜토리얼](/docs/getstarted/getting-started.md) - VS Code의 주요 기능에 대한 간단한 실습 투어.
* [팁과 요령](/docs/getstarted/tips-and-tricks.md) - VS Code로 작업할 때의 생산성 팁 모음.
* [AI 지원 코딩](/docs/copilot/overview.md) - VS Code에서 GitHub Copilot을 사용하여 코드를 더 빠르게 작성하는 방법에 대해 알아보세요.

## 자주 묻는 질문 {#common-questions}

### Debian 및 파일을 휴지통으로 이동하기 {#debian-and-moving-files-to-trash}

Debian 운영 체제에서 VS Code 탐색기에서 파일을 삭제할 때 오류가 발생하는 경우, VS Code가 사용하는 휴지통 구현이 없기 때문일 수 있습니다.

이 문제를 해결하려면 다음 명령어를를 실행하세요:

```bash
sudo apt-get install gvfs libglib2.0-bin
```

### 다른 저장소의 VS Code 패키지와의 충돌 {#conflicts-with-vs-code-packages-from-other-repositories}

일부 배포판, 예를 들어 [Pop!\_OS](https://pop.system76.com)는 자체 `code` 패키지를 제공합니다. 공식 VS Code 저장소가 사용되도록 하려면, `/etc/apt/preferences.d/code`라는 파일을 생성하고 다음 내용을 추가하세요:

```yaml
Package: code
Pin: origin "packages.microsoft.com"
Pin-Priority: 9999
```

### "비주얼 스튜디오 코드가 이 큰 작업 공간에서 파일 변경 사항을 감시할 수 없습니다" (오류 ENOSPC) {#visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc}

이 알림이 표시되면, VS Code의 파일 감시 기능을 위해 필요한 파일 개수 제한에 도달했다는 의미입니다. 일반적으로 많은 파일이 포함된 큰 작업 공간을 열 때 발생할 수 있습니다. 플랫폼 한계를 조정하기 전에, Python `.venv`와 같은 대용량 폴더를 `setting(files.watcherExclude)` 설정에 추가했는지 확인하세요.(자세한 내용은 아래에서 확인할 수 있습니다.). 또한, 다른 실행 중인 애플리케이션이 너무 많은 파일을 열어둔 경우, VS Code에서 사용할 수 있는 파일 개수가 부족할 수 있습니다. 이런 경우, 불필요한 애플리케이션을 종료하면 문제가 해결될 수 있습니다.

현재 한계는 다음 명령을 실행하여 확인할 수 있습니다:

```bash
cat /proc/sys/fs/inotify/max_user_watches
```

한계를 최대값으로 늘리려면 `/etc/sysctl.conf`를 편집하고 (Arch Linux를 제외하고, 아래를 읽어보세요) 파일 끝에 다음 줄을 추가합니다:

```bash
fs.inotify.max_user_watches=524288
```

새 값을 로드하려면 `sudo sysctl -p`를 실행합니다.

524,288은 감시할 수 있는 파일의 최대 수이지만, 메모리가 특히 제한된 환경에서는 수를 줄이는 것이 좋습니다. 각 파일 감시는 [1,080 바이트](https://stackoverflow.com/a/7091897/1156119)를 차지하므로, 모든 524,288 감시가 소비된다고 가정하면 약 540 MiB의 상한선이 됩니다.

[Arch](https://www.archlinux.org/)-기반 배포판(Manjaro 포함)은 다른 파일을 변경해야 하므로, [이 단계](https://gist.github.com/tbjgolden/c53ca37f3bc2fab8c930183310918c8c)를 따르세요.

또 다른 옵션은 `setting(files.watcherExclude)` [설정](/docs/editor/settings.md)을 사용하여 VS Code 파일 감시자에서 특정 작업 공간 디렉토리를 제외하는 것입니다. `setting(files.watcherExclude)`의 기본값은 `node_modules`와 `.git` 아래의 일부 폴더를 제외하지만, VS Code가 추적하지 않기를 원하는 다른 디렉토리를 추가할 수 있습니다.

```json
"files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/*/**": true
  }
```

### Ubuntu에서 중국어 문자가 보이지 않습니다 {#i-cant-see-chinese-characters-in-ubuntu}

우리는 수정 작업을 진행 중에 있습니다. 그동안 애플리케이션 메뉴를 열고 **File** > **Preferences** > **Setting**을 선택하세요. **Text Editor** > **Font** 섹션에서 "Font Family"를 `Droid Sans Mono, Droid Sans Fallback`으로 설정합니다. `settings.json` 파일을 직접 편집하고 싶다면, `setting(editor.fontFamily)`를 다음과 같이 설정하세요:

```json
    "editor.fontFamily": "Droid Sans Mono, Droid Sans Fallback"
```

### 패키지 git이 설치되지 않았습니다 {#package-git-is-not-installed}

설치 중에 이 오류가 발생할 수 있으며, 일반적으로 패키지 관리자의 목록이 오래되어 발생합니다. 목록을 업데이트하고 다시 설치해 보세요:

```bash
# .deb용 {#for-deb}
sudo apt-get update

# .rpm용 (Fedora 21 이하) {#for-rpm-fedora-21-and-below}
sudo yum check-update

# .rpm용 (Fedora 22 이상) {#for-rpm-fedora-22-and-above}
sudo dnf check-update
```

### Ubuntu에서 code bin 명령이 창을 전경으로 가져오지 않습니다 {#the-code-bin-command-does-not-bring-the-window-to-the-foreground-on-ubuntu}

VS Code가 현재 디렉토리에서 이미 열려 있을 때 Ubuntu에서 `code .`를 실행하면 VS Code가 전경으로 오지 않습니다. 이는 OS의 기능으로, `ccsm`을 사용하여 비활성화할 수 있습니다.

```bash
# 설치 {#install}
sudo apt-get update
sudo apt-get install compizconfig-settings-manager

# 실행 {#run}
ccsm
```

**General** > **General Options** > **포커스 및 상승 동작Focus & Raise Behavior**에서 "Focus Prevention Level"을 "Off"로 설정합니다. 이는 모든 애플리케이션에 적용되는 OS 수준의 설정임을 기억하세요.

### "/etc/apt/sources.list.d/vscode.list: 해당 파일이나 디렉토리가 없습니다"로 인해 .deb 패키지를 설치할 수 없습니다 {#cannot-install-deb-package-due-to-etcaptsourceslistdvscodelist-no-such-file-or-directory}

`sources.list.d`가 존재하지 않거나 파일을 생성할 수 있는 권한이 없을 때 이 문제가 발생할 수 있습니다. 이를 해결하려면, 수동으로 폴더를 생성하고 빈 `vscode.list` 파일을 만들어 보세요:

```bash
sudo mkdir /etc/apt/sources.list.d
sudo touch /etc/apt/sources.list.d/vscode.list
```

### 원격 창을 X 포워딩하는 동안 창을 이동하거나 크기를 조정할 수 없습니다 {#cannot-move-or-resize-the-window-while-x-forwarding-a-remote-window}

VS Code를 원격으로 사용하기 위해 X 포워딩을 사용하는 경우, 창을 제대로 조작할 수 있도록 기본 제목 표시줄을 사용해야 합니다. `setting(window.titleBarStyle)`를 `native`로 설정하여 전환할 수 있습니다.

### 저장소의 origin 값이 변경되었습니다 {#repository-changed-its-origin-value}

다음과 유사한 오류가 발생하면:

```bash
E: Repository '...' changed its 'Origin' value from '...' to '...'
N: This must be accepted explicitly before updates for this repository can be applied. See apt-secure(8) manpage for details.
```

`apt-get` 대신 `apt`를 사용하면 origin 변경을 수락하라는 메시지가 표시됩니다:

```bash
sudo apt update
```

---
Order: 16
Area: remote
TOCTitle: 팁과 요령
PageTitle: Visual Studio Code 원격 개발 문제 해결 팁과 요령
ContentId: 42e65445-fb3b-4561-8730-bbd19769a160
MetaDescription: SSH, 컨테이너 및 Windows Subsystem for Linux (WSL)에 대한 Visual Studio Code 원격 개발 문제 해결 팁과 요령
DateApproved: 03/05/2025
---
# 원격 개발 팁과 요령 {#remote-development-tips-and-tricks}

이 문서에서는 Visual Studio Code [원격 개발](https://aka.ms/vscode-remote/download/extension) 확장 프로그램에 대한 문제 해결 팁과 요령을 다룹니다. 각 특정 확장을 설정하고 작업하는 방법에 대한 자세한 내용은 [SSH](/docs/remote/ssh.md), [컨테이너](/docs/devcontainers/containers.md), [WSL](/docs/remote/wsl.md) 문서를 참조하세요. 또는 소개용 [튜토리얼](/docs/remote/ssh-tutorial.md)을 시도하여 원격 환경에서 빠르게 실행할 수 있도록 도와주세요.

[GitHub Codespaces](https://github.com/features/codespaces)에 대한 팁과 질문은 [GitHub Codespaces 문서](https://docs.github.com/github/developing-online-with-codespaces)를 참조하세요.

## SSH 팁 {#ssh-tips}

SSH는 강력하고 유연하지만, 이로 인해 설정 복잡성이 추가됩니다. 이 섹션에서는 다양한 환경에서 Remote - SSH 확장을 설정하고 실행하기 위한 몇 가지 팁과 요령을 포함합니다.

### $EDITOR 변수 구성하기 {#configuring-the-editor-variable}

macOS / Linux 원격 호스트의 경우, 이 코드를 셸 구성 파일(예: `.bashrc` 또는 `.zshrc`)에 추가하세요.

```bash
if [ "$VSCODE_INJECTION" = "1" ]; then
    export EDITOR="code --wait" # 또는 VS Code Insiders를 사용하는 경우 'code-insiders'
fi
```

Windows 호스트의 경우, 다음과 같은 Powershell 명령어를 사용하세요:

```pwsh
if ($env:VSCODE_INJECTION -eq "1") {
    $env:EDITOR = "code --wait"  # 또는 VS Code Insiders의 경우 'code-insiders'
}
```

이제 `$EDITOR` 변수를 사용하는 터미널 명령어(예: `git commit`)를 실행하면 기본 터미널 기반 편집기(예: `vim` 또는 `nano`) 대신 VS Code에서 파일이 열립니다.

### 키 기반 인증 구성하기 {#configuring-key-based-authentication}

[SSH 공개 키 인증](https://www.ssh.com/ssh/public-key-authentication)은 로컬 "개인" 키와 SSH 호스트의 사용자 계정과 연결된 "공개" 키를 결합한 편리하고 높은 보안의 인증 방법입니다. 이 섹션에서는 이러한 키를 생성하고 호스트에 추가하는 방법을 안내합니다.

> **팁:** Windows용 PuTTY는 [지원되는 클라이언트](#installing-a-supported-ssh-client)가 아니지만, [PuTTYGen 키를 변환할 수 있습니다](#reusing-a-key-generated-in-puttygen).

### 빠른 시작: SSH 키 사용하기 {#quick-start-using-ssh-keys}

원격 호스트에 대한 SSH 키 기반 인증을 설정하려면 먼저 키 쌍을 생성한 다음 공개 키를 호스트에 복사합니다.

**로컬 SSH 키 쌍 생성하기**

로컬 머신에 SSH 키가 이미 있는지 확인하세요. 일반적으로 macOS / Linux에서는 `~/.ssh/id_ed25519.pub`에 위치하며, Windows에서는 사용자 프로필 폴더의 `.ssh` 디렉토리(예: `C:\Users\your-user\.ssh\id_ed25519.pub`)에 있습니다.

키가 없는 경우, **로컬** 터미널 / PowerShell에서 다음 명령어를 실행하여 SSH 키 쌍을 생성하세요:

```bash
ssh-keygen -t ed25519 -b 4096
```

> **팁:** `ssh-keygen`이 없으신가요? [지원되는 SSH 클라이언트](#installing-a-supported-ssh-client)를 설치하세요.

**개인 키 파일의 권한 제한하기**

* macOS / Linux의 경우, 필요한 경우 개인 키 경로를 바꿔서 다음 셸 명령어를 실행하세요:

    ```bash
    chmod 400 ~/.ssh/id_ed25519
    ```

* Windows의 경우, PowerShell에서 다음 명령어를 실행하여 사용자 이름에 대한 명시적 읽기 권한을 부여하세요:

    ```powershell
    icacls "privateKeyPath" /grant <username>:R
    ```

    그런 다음 Windows 탐색기에서 개인 키 파일로 이동하여 마우스 오른쪽 버튼을 클릭하고 **속성**을 선택합니다. **보안** 탭 > **고급** > **상속 사용 중지** > **이 객체에서 모든 상속된 권한 제거**를 선택합니다.

**macOS 또는 Linux 머신을 연결할 수 있도록 승인하기**

다음 명령어 중 하나를 **로컬 터미널 창**에서 실행하여 사용자 및 호스트 이름을 적절히 바꿔 로컬 공개 키를 SSH 호스트에 복사하세요.

* **macOS 또는 Linux** SSH 호스트에 연결하기:

    ```bash
    export USER_AT_HOST="your-user-name-on-host@hostname"
    export PUBKEYPATH="$HOME/.ssh/id_ed25519.pub"

    ssh-copy-id -i "$PUBKEYPATH" "$USER_AT_HOST"
    ```

* **Windows** SSH 호스트에 연결하기:

  * 호스트가 OpenSSH Server를 사용하고 사용자가 [관리자 그룹에 속하는 경우](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_server_configuration#authorizedkeysfile):

    ```bash
    export USER_AT_HOST="your-user-name-on-host@hostname"
    export PUBKEYPATH="$HOME/.ssh/id_ed25519.pub"

    ssh $USER_AT_HOST "powershell Add-Content -Force -Path \"\$Env:PROGRAMDATA\\ssh\\administrators_authorized_keys\" -Value '$(tr -d '\n\r' < "$PUBKEYPATH")'"
    ```

  * 그렇지 않은 경우:

    ```bash
    export USER_AT_HOST="your-user-name-on-host@hostname"
    export PUBKEYPATH="$HOME/.ssh/id_ed25519.pub"

    ssh $USER_AT_HOST "powershell New-Item -Force -ItemType Directory -Path \"\$HOME\\.ssh\"; Add-Content -Force -Path \"\$HOME\\.ssh\\authorized_keys\" -Value '$(tr -d '\n\r' < "$PUBKEYPATH")'"
    ```

    SSH 호스트의 **원격 사용자**에 대한 `.ssh` 폴더의 `authorized_keys` 파일이 본인 소유이며 다른 사용자가 접근할 수 없는지 확인하세요. 자세한 내용은 [OpenSSH 위키](https://github.com/PowerShell/Win32-OpenSSH/wiki/Security-protection-of-various-files-in-Win32-OpenSSH#authorized_keys)를 참조하세요.

**Windows 머신을 연결할 수 있도록 승인하기**

다음 명령어 중 하나를 **로컬 PowerShell** 창에서 실행하여 사용자 및 호스트 이름을 적절히 바꿔 로컬 공개 키를 SSH 호스트에 복사하세요.

* **macOS 또는 Linux** SSH 호스트에 연결하기:

    ```powershell
    $USER_AT_HOST="your-user-name-on-host@hostname"
    $PUBKEYPATH="$HOME\.ssh\id_ed25519.pub"

    $pubKey=(Get-Content "$PUBKEYPATH" | Out-String); ssh "$USER_AT_HOST" "mkdir -p ~/.ssh && chmod 700 ~/.ssh && echo '$\{pubKey\}
' >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
    ```

* **Windows** SSH 호스트에 연결하기:

  * 호스트가 OpenSSH Server를 사용하고 사용자가 [관리자 그룹에 속하는 경우](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_server_configuration#authorizedkeysfile):

    ```powershell
    $USER_AT_HOST="your-user-name-on-host@hostname"
    $PUBKEYPATH="$HOME\.ssh\id_ed25519.pub"

    Get-Content "$PUBKEYPATH" | Out-String | ssh $USER_AT_HOST "powershell `"Add-Content -Force -Path `"`$Env:PROGRAMDATA\ssh\administrators_authorized_keys`" `""
    ```

  * 그렇지 않은 경우:

    ```powershell
    $USER_AT_HOST="your-user-name-on-host@hostname"
    $PUBKEYPATH="$HOME\.ssh\id_ed25519.pub"

    Get-Content "$PUBKEYPATH" | Out-String | ssh $USER_AT_HOST "powershell `"New-Item -Force -ItemType Directory -Path `"`$HOME\.ssh`"; Add-Content -Force -Path `"`$HOME\.ssh\authorized_keys`" `""
    ```

    SSH 호스트의 **원격 사용자**에 대한 `.ssh` 폴더의 `authorized_keys` 파일이 본인 소유이며 다른 사용자가 접근할 수 없는지 확인하세요. 자세한 내용은 [OpenSSH 위키](https://github.com/PowerShell/Win32-OpenSSH/wiki/Security-protection-of-various-files-in-Win32-OpenSSH#authorized_keys)를 참조하세요.

### 전용 키로 보안 강화하기 {#improving-your-security-with-a-dedicated-key}

모든 SSH 호스트에서 단일 SSH 키를 사용하는 것은 편리하지만, 누군가 개인 키에 접근하면 모든 호스트에 접근할 수 있게 됩니다. 개발 호스트에 대해 별도의 SSH 키를 생성하여 이를 방지할 수 있습니다. 다음 단계를 따르세요:

1. 다른 파일에 별도의 SSH 키를 생성합니다.

    **macOS / Linux**: **로컬 터미널**에서 다음 명령어를 실행하세요:

    ```bash
    ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519-remote-ssh
    ```

    **Windows**: **로컬 PowerShell**에서 다음 명령어를 실행하세요:

    ```powershell
    ssh-keygen -t ed25519 -f "$HOME\.ssh\id_ed25519-remote-ssh"
    ```

2. SSH 호스트에서 키를 승인하기 위해 [빠른 시작](#quick-start-using-ssh-keys)에서와 같은 단계를 따르되, `PUBKEYPATH`를 `id_ed25519-remote-ssh.pub` 파일로 설정하세요.

3. VS Code에서 Command Palette(`kbstyle(F1)`)에서 **Remote-SSH: Open Configuration File...**을 실행하고 SSH 구성 파일을 선택한 후 다음과 같이 호스트 항목을 추가(또는 수정)하세요:

    ```yaml
    Host name-of-ssh-host-here
        User your-user-name-on-host
        HostName host-fqdn-or-ip-goes-here
        IdentityFile ~/.ssh/id_ed25519-remote-ssh
    ```

    > **팁:** Windows 경로에도 `/`를 사용할 수 있습니다. `\`를 사용하는 경우 두 개의 슬래시를 사용해야 합니다. 예를 들어, `C:\\path\\to\\my\\id_ed25519`.

### PuTTYGen에서 생성된 키 재사용하기 {#reusing-a-key-generated-in-puttygen}

PuTTYGen을 사용하여 연결할 호스트에 대한 SSH 공개 키 인증을 설정한 경우, 다른 SSH 클라이언트에서 사용할 수 있도록 개인 키를 변환해야 합니다. 이를 위해:

1. **로컬**에서 PuTTYGen을 열고 변환할 개인 키를 로드합니다.
2. 애플리케이션 메뉴에서 **Conversions > Export OpenSSH key**를 선택합니다. 변환된 키를 사용자 프로필 폴더의 `.ssh` 디렉토리 아래에 **로컬** 위치에 저장합니다(예: `C:\Users\youruser\.ssh`).
3. 이 새로운 **로컬** 파일이 본인 소유이며 다른 사용자가 접근할 수 없는지 확인하세요.
4. VS Code에서 Command Palette(`kbstyle(F1)`)에서 **Remote-SSH: Open Configuration File...**을 실행하고 변경할 SSH 구성 파일을 선택한 후 다음과 같이 파일을 가리키는 호스트 항목을 추가(또는 수정)하세요:

    ```yaml
    Host name-of-ssh-host-here
        User your-user-name-on-host
        HostName host-fqdn-or-ip-goes-here
        IdentityFile ~/.ssh/exported-keyfile-from-putty
    ```

### 다중 사용자 서버에서 보안 강화하기 {#improving-security-on-multi-user-servers}

Remote - SSH 확장은 "VS Code Server"를 설치하고 유지 관리합니다. 서버는 무작위로 생성된 키로 시작되며, 서버에 대한 새로운 연결은 키를 제공해야 합니다. 이 키는 원격 디스크에 저장되며 현재 사용자만 읽을 수 있습니다. 인증 없이 사용할 수 있는 HTTP 경로는 `/version`입니다.

기본적으로 서버는 무작위 TCP 포트에서 `localhost`를 수신 대기하며, 이 포트는 로컬 머신으로 전달됩니다. **Linux 또는 macOS** 호스트에 연결하는 경우, 특정 사용자에게 잠겨 있는 Unix 소켓을 사용하는 것으로 전환할 수 있습니다. 이 소켓은 포트 대신 전달됩니다.

> **참고:** 이 설정은 **연결 다중화**를 비활성화하므로 [공개 키 인증 구성](#configuring-key-based-authentication)을 설정하는 것이 좋습니다.

구성하려면:

1. Windows, macOS 또는 Linux에서 **로컬 OpenSSH 6.7+ SSH 클라이언트**와 **OpenSSH 6.7+ Linux 또는 macOS 호스트**가 있는지 확인하세요(Windows는 이 모드를 지원하지 않습니다).

2. **로컬** VS Code [사용자 설정](/docs/editor/settings.md)에서 **Remote.SSH: Remote Server Listen On Socket**을 활성화하여 Remote - SSH를 소켓 모드로 전환하세요.

    ![소켓에서 수신 대기하는 VS Code 설정](images/ssh/ssh-listen-on-socket.png)

3. 이미 SSH 호스트에 연결한 경우, Command Palette(`kbstyle(F1)`)에서 **Remote-SSH: Kill VS Code Server on Host...**를 선택하여 설정이 적용되도록 하세요.

연결할 때 오류가 발생하면 SSH 호스트의 [sshd 구성](https://www.ssh.com/ssh/sshd_config/)에서 소켓 전달을 활성화해야 할 수 있습니다. 이를 위해:

1. **SSH 호스트**(로컬이 아님)에서 텍스트 편집기(예: vi, nano 또는 pico)를 사용하여 `/etc/ssh/sshd_config`를 엽니다.
2. `AllowStreamLocalForwarding yes` 설정을 추가합니다.
3. SSH 서버를 재시작합니다. (Ubuntu에서는 `sudo systemctl restart sshd`를 실행합니다.)
4. 다시 시도합니다.

### 연결이 멈추거나 실패하는 문제 해결하기 {#troubleshooting-hanging-or-failing-connections}

VS Code가 연결을 시도하는 동안 멈추는 문제가 발생하는 경우(그리고 잠재적으로 타임아웃되는 경우), 문제를 해결하기 위해 할 수 있는 몇 가지 방법이 있습니다.

**일반 문제 해결: 서버 제거하기**

다양한 Remote-SSH 문제를 해결하는 데 유용한 명령어는 **Remote-SSH: Kill VS Code Server on Host**입니다. 이 명령어는 서버를 제거하며, "서버 이름에 대한 연결을 설정할 수 없습니다: VS Code 서버가 시작되지 않았습니다."와 같은 다양한 문제 및 오류 메시지를 해결할 수 있습니다.

**VS Code가 프롬프트를 기다리고 있는지 확인하기**

VS Code에서 `remote.SSH.showLoginTerminal` [설정](/docs/editor/settings.md)을 활성화하고 다시 시도하세요. 비밀번호나 토큰을 입력하라는 프롬프트가 표시되면, [대체 SSH 인증 방법 활성화](#enabling-alternate-ssh-authentication-methods)에 대한 세부정보를 참조하여 프롬프트 빈도를 줄이는 방법을 확인하세요.

여전히 문제가 발생하면 `settings.json`에 다음 속성을 설정하고 다시 시도하세요:

```json
"remote.SSH.showLoginTerminal": true,
"remote.SSH.useLocalServer": false
```

**일부 Windows OpenSSH 서버 버전의 버그 우회하기**

특정 버전의 Windows용 OpenSSH 서버에서 호스트가 Windows에서 실행 중인지 확인하는 기본 검사가 제대로 작동하지 않을 수 있습니다. 이는 Windows 1909 및 이전 버전과 함께 제공되는 OpenSSH 서버에서는 발생하지 않습니다.

다행히도, `settings.json`에 다음을 추가하여 VS Code에 SSH 호스트가 Windows에서 실행 중임을 명시적으로 알림으로써 이 문제를 우회할 수 있습니다:

```json
"remote.SSH.useLocalServer": false
```

특정 호스트를 Windows로 식별하도록 VS Code를 강제할 수도 있습니다:

```json
"remote.SSH.remotePlatform": {
    "host-in-ssh-config-or-fqdn": "windows"
}
```

이 문제는 8.1.0.0 이상의 서버 버전에서 해결될 예정입니다.

**원격 호스트에서 TCP 전달 활성화하기**

Remote - SSH 확장은 호스트와의 통신을 용이하게 하기 위해 SSH 터널을 사용합니다. 경우에 따라 SSH 서버에서 이 기능이 비활성화되어 있을 수 있습니다. 이것이 문제인지 확인하려면 출력 창의 **Remote - SSH** 카테고리에서 다음 메시지를 확인하세요:

```
open failed: administratively prohibited: open failed
```

이 메시지가 표시되면 SSH 서버의 [sshd 구성](https://www.ssh.com/ssh/sshd_config/)을 업데이트하세요:

1. **SSH 호스트**(로컬이 아님)에서 텍스트 편집기(예: Vim, nano, Pico 또는 Notepad)를 사용하여 `/etc/ssh/sshd_config` 또는 `C:\ProgramData\ssh\sshd_config`를 엽니다.
2. `AllowTcpForwarding yes` 설정을 추가합니다.
3. SSH 서버를 재시작합니다. (Ubuntu에서는 `sudo systemctl restart sshd`를 실행합니다. Windows에서는 관리자 PowerShell에서 `Restart-Service sshd`를 실행합니다.)
4. 다시 시도합니다.

**SSH 구성 파일에서 ProxyCommand 매개변수 설정하기**

프록시 뒤에 있고 SSH 호스트에 연결할 수 없는 경우, **로컬** [SSH 구성 파일](https://linux.die.net/man/5/ssh_config)에서 호스트에 대한 `ProxyCommand` 매개변수를 사용해야 할 수 있습니다. 사용 예에 대한 [SSH ProxyCommand 기사](https://www.cyberciti.biz/faq/linux-unix-ssh-proxycommand-passing-through-one-host-gateway-server/)를 읽어보세요.

**원격 머신이 인터넷에 접근할 수 있는지 확인하기**

원격 머신은 VS Code Server 및 마켓플레이스에서 확장을 다운로드할 수 있도록 인터넷에 접근할 수 있어야 합니다. 연결 요구 사항에 대한 세부정보는 [FAQ](/docs/remote/faq.md#what-are-the-connectivity-requirements-for-vs-code-server)를 참조하세요.

**원격 호스트에서 HTTP_PROXY / HTTPS_PROXY 설정하기**

원격 호스트가 프록시 뒤에 있는 경우, **SSH 호스트**에서 HTTP_PROXY 또는 HTTPS_PROXY 환경 변수를 설정해야 할 수 있습니다. `~/.bashrc` 파일을 열고 다음을 추가하세요(적절한 호스트 이름 / IP 및 포트로 `proxy.fqdn.or.ip:3128`을 바꾸세요):

```bash
export HTTP_PROXY=http://proxy.fqdn.or.ip:3128
export HTTPS_PROXY=$HTTP_PROXY

# 또는 인증된 프록시인 경우 {#or-if-an-authenticated-proxy}
export HTTP_PROXY=http://username:password@proxy.fqdn.or.ip:3128
export HTTPS_PROXY=$HTTP_PROXY
```

**`noexec`로 마운트된 `/tmp` 우회하기**

일부 원격 서버는 `/tmp`에서 스크립트 실행을 허용하지 않도록 설정되어 있습니다. VS Code는 설치 스크립트를 시스템 임시 디렉토리에 작성하고 거기에서 실행하려고 합니다. 시스템 관리자와 협력하여 이 문제를 해결할 수 있는지 확인하세요.

**설치 중에 다른 셸이 실행되는지 확인하기**

일부 사용자는 **SSH 호스트**에서 `.bash_profile` 또는 다른 시작 스크립트에서 기본 셸과 다른 셸을 사용하고자 하여 다른 셸을 실행합니다. 이는 VS Code의 원격 서버 설치 스크립트를 방해할 수 있으며 권장되지 않습니다. 대신, 원격 머신에서 기본 셸을 변경하려면 `chsh`를 사용하세요.

**연결 시마다 동적으로 머신을 할당하는 시스템에 연결하기**

일부 시스템은 SSH 연결이 이루어질 때마다 클러스터의 한 노드로 SSH 연결을 동적으로 라우팅합니다. 이는 VS Code에 문제가 됩니다. VS Code는 원격 창을 열기 위해 두 개의 연결을 만듭니다: 첫 번째는 VS Code Server를 설치하거나 시작하기 위해(또는 이미 실행 중인 인스턴스를 찾기 위해) 연결하고, 두 번째는 VS Code가 서버와 통신하는 데 사용하는 SSH 포트 터널을 생성하기 위해 연결합니다. VS Code가 두 번째 연결을 생성할 때 다른 머신으로 라우팅되면 VS Code 서버와 통신할 수 없습니다.

이 문제를 해결하기 위한 한 가지 방법은 OpenSSH의 `ControlMaster` 옵션을 사용하는 것입니다(오직 macOS/Linux 클라이언트에서만 가능). 이는 [대체 SSH 인증 방법 활성화](#enabling-alternate-ssh-authentication-methods)에서 설명되어 있으며, VS Code의 두 연결이 동일한 노드에 대한 단일 SSH 연결을 통해 다중화되도록 합니다.

**구성 도움을 위해 시스템 관리자에게 문의하기**

SSH는 매우 유연한 프로토콜이며 많은 구성을 지원합니다. 로그인 터미널이나 **Remote-SSH** 출력 창에서 다른 오류가 발생하면 누락된 설정 때문일 수 있습니다.

SSH 호스트 및 클라이언트에 필요한 설정에 대한 정보를 시스템 관리자에게 문의하세요. SSH 호스트에 연결하기 위한 특정 명령줄 인수는 [SSH 구성 파일](https://linux.die.net/man/5/ssh_config)에 추가할 수 있습니다.

구성 파일에 접근하려면 Command Palette(`kbstyle(F1)`)에서 **Remote-SSH: Open Configuration File...**을 실행하세요. 그런 다음 관리자와 협력하여 필요한 설정을 추가할 수 있습니다.

### 대체 SSH 인증 방법 활성화하기 {#enabling-alternate-ssh-authentication-methods}

SSH 원격 호스트에 연결하고 다음 중 하나인 경우:

* 이중 인증으로 연결하는 경우
* 비밀번호 인증을 사용하는 경우
* [SSH 에이전트](#setting-up-the-ssh-agent)가 실행 중이 아니거나 접근할 수 없는 경우에 암호로 보호된 SSH 키를 사용하는 경우

VS Code는 필요한 정보를 입력하라는 프롬프트를 자동으로 표시해야 합니다. 프롬프트가 표시되지 않으면 VS Code에서 `remote.SSH.showLoginTerminal` [설정](/docs/editor/settings.md)을 활성화하세요. 이 설정은 VS Code가 SSH 명령을 실행할 때마다 터미널을 표시합니다. 터미널이 나타나면 인증 코드, 비밀번호 또는 암호를 입력할 수 있습니다.

여전히 문제가 발생하면 `settings.json`에 다음 속성을 추가하고 다시 시도하세요:

```json
"remote.SSH.showLoginTerminal": true,
"remote.SSH.useLocalServer": false
```

macOS 및 Linux에서 비밀번호나 토큰을 입력해야 하는 빈도를 줄이려면 **로컬 머신**에서 `ControlMaster` 기능을 활성화하여 OpenSSH가 단일 연결을 통해 여러 SSH 세션을 실행하도록 할 수 있습니다.

`ControlMaster`를 활성화하려면:

1. SSH 구성 파일에 다음과 같은 항목을 추가하세요:

    ```yaml
    Host *
        ControlMaster auto
        ControlPath  ~/.ssh/sockets/%r@%h-%p
        ControlPersist  600
    ```

2. 그런 다음 `mkdir -p ~/.ssh/sockets`를 실행하여 소켓 폴더를 생성하세요.

### SSH 에이전트 설정하기 {#setting-up-the-ssh-agent}

암호가 있는 키를 사용하여 SSH 호스트에 연결하는 경우, [SSH 에이전트](https://www.ssh.com/ssh/agent)가 **로컬**에서 실행되고 있는지 확인해야 합니다. VS Code는 자동으로 키를 에이전트에 추가하므로 원격 VS Code 창을 열 때마다 암호를 입력할 필요가 없습니다.

에이전트가 실행 중이며 VS Code의 환경에서 접근할 수 있는지 확인하려면 로컬 VS Code 창의 터미널에서 `ssh-add -l`을 실행하세요. 에이전트의 키 목록이 표시되거나 키가 없다는 메시지가 표시되어야 합니다. 에이전트가 실행 중이지 않다면, 다음 지침을 따라 시작하세요. 에이전트를 시작한 후에는 VS Code를 재시작하세요.

**Windows:**

Windows에서 SSH 에이전트를 자동으로 활성화하려면 **로컬 관리자 PowerShell**을 시작하고 다음 명령어를 실행하세요:

```powershell
# 관리자 권한으로 실행 중인지 확인하세요 {#make-sure-youre-running-as-an-administrator}
Set-Service ssh-agent -StartupType Automatic
Start-Service ssh-agent
Get-Service ssh-agent
```

이제 로그인 시 에이전트가 자동으로 시작됩니다.

**Linux:**

SSH 에이전트를 백그라운드에서 시작하려면 다음을 실행하세요:

```bash
eval "$(ssh-agent -s)"
```

로그인 시 SSH 에이전트를 자동으로 시작하려면 `~/.bash_profile`에 다음 줄을 추가하세요:

```bash
if [ -z "$SSH_AUTH_SOCK" ]; then
   # 현재 실행 중인 에이전트 인스턴스 확인
   RUNNING_AGENT="`ps -ax | grep 'ssh-agent -s' | grep -v grep | wc -l | tr -d '[:space:]'`"
   if [ "$RUNNING_AGENT" = "0" ]; then
        # 새로운 에이전트 인스턴스 시작
        ssh-agent -s &> .ssh/ssh-agent
   fi
   eval `cat .ssh/ssh-agent`
fi
```

**macOS:**

macOS에서는 기본적으로 에이전트가 실행되고 있어야 합니다.

### 로컬 SSH 에이전트를 원격에서 사용 가능하게 만들기 {#making-local-ssh-agent-available-on-the-remote}

로컬 머신의 SSH 에이전트는 Remote - SSH 확장이 선택한 원격 시스템에 연결할 수 있도록 하여 암호를 반복해서 입력할 필요가 없도록 합니다. 그러나 원격에서 실행되는 Git과 같은 도구는 로컬에서 잠금 해제된 개인 키에 접근할 수 없습니다.

원격에서 통합 터미널을 열고 `ssh-add -l`을 실행하여 이를 확인할 수 있습니다. 이 명령어는 잠금 해제된 키를 나열해야 하지만, 대신 인증 에이전트에 연결할 수 없다는 오류를 보고합니다. `ForwardAgent yes`를 설정하면 로컬 SSH 에이전트가 원격 환경에서 사용 가능해져 이 문제를 해결할 수 있습니다.

이를 위해 `.ssh/config` 파일(또는 `Remote.SSH.configFile`이 설정된 파일)을 편집하고 다음을 추가하세요:

```ssh-config
Host *
    ForwardAgent yes
```

특정 이름의 호스트에 대해서만 이 옵션을 설정하여 더 제한적으로 설정할 수 있습니다.

### SSH 파일 권한 오류 수정하기 {#fixing-ssh-file-permission-errors}

SSH는 파일 권한에 대해 엄격할 수 있으며, 권한이 잘못 설정되면 "WARNING: UNPROTECTED PRIVATE KEY FILE!"과 같은 오류가 발생할 수 있습니다. 이를 수정하기 위해 파일 권한을 업데이트하는 여러 가지 방법이 있으며, 아래 섹션에서 설명합니다.

### 로컬 SSH 파일 및 폴더 권한 {#local-ssh-file-and-folder-permissions}

**macOS / Linux:**

로컬 머신에서 다음 권한이 설정되어 있는지 확인하세요:

| 폴더 / 파일 | 권한 |
|---------------|---------------------------|
| 사용자 폴더의 `.ssh` | `chmod 700 ~/.ssh` |
| 사용자 폴더의 `.ssh/config` | `chmod 600 ~/.ssh/config` |
| 사용자 폴더의 `.ssh/id_ed25519.pub` | `chmod 600 ~/.ssh/id_ed25519.pub` |
| 기타 키 파일 | `chmod 600 /path/to/key/file` |

**Windows:**

특정 예상 권한은 사용 중인 SSH 구현에 따라 다를 수 있습니다. 기본 제공 [Windows 10 OpenSSH 클라이언트](https://learn.microsoft.com/windows-server/administration/openssh/openssh_overview)를 사용하는 것을 권장합니다.

이 경우, SSH 호스트의 원격 사용자에 대한 `.ssh` 폴더의 모든 파일이 본인 소유이며 다른 사용자가 접근할 수 없는지 확인하세요. [Windows OpenSSH 위키](https://github.com/PowerShell/Win32-OpenSSH/wiki/Security-protection-of-various-files-in-Win32-OpenSSH)에서 자세한 내용을 참조하세요.

기타 클라이언트의 경우, 구현에서 기대하는 내용을 클라이언트 문서를 참조하세요.

### 서버 SSH 파일 및 폴더 권한 {#server-ssh-file-and-folder-permissions}

**macOS / Linux:**

연결할 원격 머신에서 다음 권한이 설정되어 있는지 확인하세요:

| 폴더 / 파일 | Linux / macOS 권한 |
|---------------|---------------------------|
| 서버의 사용자 폴더 내 `.ssh` | `chmod 700 ~/.ssh` |
| 서버의 사용자 폴더 내 `.ssh/authorized_keys`  | `chmod 600 ~/.ssh/authorized_keys` |

현재 지원되는 호스트는 Linux뿐이므로 macOS 및 Windows 10에 대한 권한은 생략되었습니다.

**Windows:**

Windows OpenSSH 서버에 대한 적절한 파일 권한 설정에 대한 자세한 내용은 [Windows OpenSSH 위키](https://github.com/PowerShell/Win32-OpenSSH/wiki/Security-protection-of-various-files-in-Win32-OpenSSH)를 참조하세요.

### 지원되는 SSH 클라이언트 설치하기 {#installing-a-supported-ssh-client}

| OS | 지침 |
|----|--------------|
| Windows 10 1803+ / Server 2016/2019 1803+ | [Windows OpenSSH 클라이언트](https://learn.microsoft.com/windows-server/administration/openssh/openssh_install_firstuse)를 설치하세요. |
| 이전 Windows | [Git for Windows](https://git-scm.com/download/win)를 설치하세요. |
| macOS | 기본적으로 설치되어 있습니다. |
| Debian/Ubuntu | `sudo apt-get install openssh-client`를 실행하세요. |
| RHEL / Fedora / CentOS | `sudo yum install openssh-clients`를 실행하세요. |

VS Code는 PATH에서 `ssh` 명령어를 찾습니다. 그렇지 않은 경우, Windows에서는 기본 Git for Windows 설치 경로에서 `ssh.exe`를 찾으려고 시도합니다. 또한 `settings.json`에 `remote.SSH.path` 속성을 추가하여 VS Code에 SSH 클라이언트를 찾을 위치를 명시적으로 지정할 수 있습니다.

### 지원되는 SSH 서버 설치하기 {#installing-a-supported-ssh-server}

| OS | 지침 | 세부정보 |
|----|--------------|---|
| Debian 8+ / Ubuntu 16.04+ | `sudo apt-get install openssh-server`를 실행하세요. |  [Ubuntu SSH](https://help.ubuntu.com/community/SSH?action=show) 문서를 참조하세요. |
| RHEL / CentOS 7+ | `sudo yum install openssh-server && sudo systemctl start sshd.service && sudo systemctl enable sshd.service`를 실행하세요. | [RedHat SSH](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/deployment_guide/ch-openssh) 문서를 참조하세요. |
| SuSE 12+ / openSUSE 42.3+ | Yast에서 서비스 관리자로 이동하여 목록에서 "sshd"를 선택하고 **활성화**를 클릭하세요. 그런 다음 방화벽으로 이동하여 **영구** 구성을 선택하고 서비스에서 **sshd**를 확인하세요. | [SuSE SSH](https://en.opensuse.org/OpenSSH) 문서를 참조하세요. |
| Windows 10 1803+ / Server 2016/2019 1803+ | [Windows OpenSSH 서버](https://learn.microsoft.com/windows-server/administration/openssh/openssh_install_firstuse)를 설치하세요. |
| macOS 10.14+ (Mojave) | [원격 로그인](https://support.apple.com/guide/mac-help/allow-a-remote-computer-to-access-your-mac-mchlp1066/mac)을 활성화하세요. |

### SSH 호스트에서 Git 푸시 또는 동기화 시 멈춤 문제 해결하기 {#resolving-hangs-when-doing-a-git-push-or-sync-on-an-ssh-host}

SSH를 사용하여 Git 저장소를 복제하고 SSH 키에 암호가 있는 경우, VS Code의 풀 및 동기화 기능이 원격에서 실행될 때 멈출 수 있습니다.

암호가 없는 SSH 키를 사용하거나 HTTPS를 사용하여 복제하거나, 명령줄에서 `git push`를 실행하여 문제를 우회하세요.

### 원격 호스트의 파일에 접근하기 위해 SSHFS 사용하기 {#using-sshfs-to-access-files-on-your-remote-host}

[SSHFS](https://en.wikipedia.org/wiki/SSHFS)는 SFTP에서 구축된 안전한 원격 파일 시스템 접근 프로토콜입니다. SSH 접근만 있으면 되기 때문에 CIFS / Samba 공유보다 장점이 있습니다.

> **참고:** 성능상의 이유로 SSHFS는 단일 파일 편집 및 콘텐츠 업로드/다운로드에 가장 적합합니다. 많은 파일을 동시에 읽거나 쓰는 애플리케이션을 사용해야 하는 경우(예: 로컬 소스 제어 도구), [rsync](#using-rsync-to-maintain-a-local-copy-of-your-source-code)가 더 나은 선택입니다.

**macOS / Linux**:

Linux에서는 배포판의 패키지 관리자를 사용하여 SSHFS를 설치할 수 있습니다. Debian/Ubuntu의 경우: `sudo apt-get install sshfs`

> **참고:** WSL 1은 FUSE 또는 SSHFS를 지원하지 않으므로 현재 Windows에 대한 지침이 다릅니다. **WSL 2는 FUSE 및 SSHFS 지원을 포함하므로** 곧 변경될 것입니다.

macOS에서는 [Homebrew](https://brew.sh/)를 사용하여 SSHFS를 설치할 수 있습니다:

```bash
brew install --cask macfuse
brew install gromgit/fuse/sshfs-mac
brew link --overwrite sshfs-mac
```

또한 원격 파일 시스템을 마운트하기 위해 명령줄을 사용하지 않으려면 [SSHFS GUI](https://github.com/dstuecken/sshfs-gui)를 설치할 수도 있습니다.

### 명령줄 사용하기
로컬 터미널에서 다음 명령어를 실행하여 원격 사용자 및 호스트 이름/IP를 `user@hostname`으로 바꾸세요:

```bash
export USER_AT_HOST=user@hostname
# 원격 파일 시스템이 마운트될 디렉토리 만들기 {#make-the-directory-where-the-remote-filesystem-will-be-mounted}
mkdir -p "$HOME/sshfs/$USER_AT_HOST"
# 원격 파일 시스템 마운트하기 {#mount-the-remote-filesystem}
sshfs "$USER_AT_HOST:" "$HOME/sshfs/$USER_AT_HOST" -ovolname="$USER_AT_HOST" -p 22  \
    -o workaround=nonodelay -o transform_symlinks -o idmap=user  -C
```

이렇게 하면 원격 머신의 홈 폴더가 `~/sshfs` 아래에서 사용 가능해집니다. 작업이 끝나면 운영 체제의 Finder/파일 탐색기를 사용하거나 명령줄을 통해 언마운트할 수 있습니다:

```bash
umount "$HOME/sshfs/$USER_AT_HOST"
```

**Windows:**

다음 단계를 따르세요:

1. Linux에서 `.gitattributes` 파일을 프로젝트에 추가하여 **Linux와 Windows 간의 일관된 줄 끝을 강제**하여 CRLF/LF 차이로 인한 예기치 않은 문제를 피하세요. 자세한 내용은 [Git 줄 끝 문제 해결](#resolving-git-line-ending-issues-in-wsl-resulting-in-many-modified-files)을 참조하세요.

2. 다음으로, [Chocolatey](https://chocolatey.org/)를 사용하여 [SSHFS-Win](https://github.com/billziss-gh/sshfs-win)을 설치하세요: `choco install sshfs`

3. Windows용 SSHFS를 설치한 후, 파일 탐색기의 **네트워크 드라이브 연결...** 옵션을 사용하여 경로 `\\sshfs\user@hostname`로 연결할 수 있습니다. 이를 명령 프롬프트에서 스크립트로 작성하려면 다음과 같이 입력하세요: `net use /PERSISTENT:NO X: \\sshfs\user@hostname`

4. 완료되면 파일 탐색기에서 드라이브를 마우스 오른쪽 버튼으로 클릭하고 **연결 끊기**를 선택하여 연결을 끊습니다.

### 터미널에서 원격 호스트에 연결하기 {#connect-to-a-remote-host-from-the-terminal}

호스트가 구성되면 원격 URI를 전달하여 터미널에서 직접 연결할 수 있습니다.

예를 들어, `remote_server`에 연결하고 `/code/my_project` 폴더를 열려면 다음을 실행하세요:

```bash
code --remote ssh-remote+remote_server /code/my_project
```

입력 경로가 파일인지 폴더인지 추측해야 합니다. 파일 확장자가 있으면 파일로 간주됩니다.

폴더를 강제로 열려면 경로에 슬래시를 추가하거나 다음을 사용하세요:

`code --folder-uri vscode-remote://ssh-remote+remote_server/code/folder.with.dot`

파일을 강제로 열려면 `--goto`를 추가하거나 다음을 사용하세요:

`code --file-uri vscode-remote://ssh-remote+remote_server/code/fileWithoutExtension`

### 로컬 소스 코드 복사본 유지하기 위해 rsync 사용하기 {#using-rsync-to-maintain-a-local-copy-of-your-source-code}

[원격 파일에 접근하기 위해 SSHFS 사용하기](#using-sshfs-to-access-files-on-your-remote-host)의 대안으로 [rsync를 사용하여](https://rsync.samba.org/) 원격 호스트의 폴더 전체 내용을 로컬 머신으로 복사할 수 있습니다. `rsync` 명령은 매번 실행될 때 업데이트가 필요한 파일을 결정하므로 `scp`나 `sftp`와 같은 방법보다 훨씬 효율적이고 편리합니다. 이는 다중 파일이나 성능 집약적인 로컬 도구를 사용해야 하는 경우에 고려해야 할 사항입니다.

`rsync` 명령은 macOS에서 기본적으로 사용할 수 있으며, Linux 패키지 관리자를 사용하여 설치할 수 있습니다 (예: Debian/Ubuntu에서는 `sudo apt-get install rsync`).

명령을 사용하려면 동기화된 내용을 저장할 폴더로 이동한 후 `user@hostname`을 원격 사용자 및 호스트 이름/IP로, `/remote/source/code/path`를 원격 소스 코드 위치로 바꿔서 다음을 실행하세요.

**macOS, Linux 또는 WSL 내부에서:**

```bash
rsync -rlptzv --progress --delete --exclude=.git "user@hostname:/remote/source/code/path" .
```

**Windows의 PowerShell에서 WSL 사용:**

```powershell
wsl rsync -rlptzv --progress --delete --exclude=.git "user@hostname:/remote/source/code/path" "`$(wslpath -a '$PWD')"
```

이 명령을 매번 실행하여 파일의 최신 복사본을 가져올 수 있으며, 업데이트만 전송됩니다. `.git` 폴더는 성능상의 이유로 의도적으로 제외되며, 원격 호스트의 상태에 대해 걱정하지 않고 로컬 Git 도구를 사용할 수 있습니다.

내용을 푸시하려면 명령에서 소스와 대상 매개변수를 반대로 설정하세요. 그러나 **Windows에서는** 푸시하기 전에 프로젝트에 `.gitattributes` 파일을 추가하여 **일관된 줄 끝을 강제**해야 합니다. 자세한 내용은 [Git 줄 끝 문제 해결](#resolving-git-line-ending-issues-in-wsl-resulting-in-many-modified-files)을 참조하세요.

```bash
rsync -rlptzv --progress --delete --exclude=.git . "user@hostname:/remote/source/code/path"
```

### 원격에서 VS Code 서버 정리하기 {#cleaning-up-the-vs-code-server-on-the-remote}

SSH 확장은 원격 머신에서 VS Code 서버를 정리하는 명령을 제공합니다, **Remote-SSH: 호스트에서 VS Code 서버 제거...**. 이 명령은 두 가지 작업을 수행합니다: 실행 중인 VS Code 서버 프로세스를 종료하고 서버가 설치된 폴더를 삭제합니다.

이 단계를 수동으로 실행하려면, 또는 명령이 작동하지 않는 경우 다음과 같은 스크립트를 실행할 수 있습니다:

```bash
# 서버 프로세스 종료 {#kill-server-processes}
kill -9 $(ps aux | grep vscode-server | grep $USER | grep -v grep | awk '{print $2}')
# 관련 파일 및 폴더 삭제 {#delete-related-files-and-folder}
rm -rf $HOME/.vscode-server # 또는 ~/.vscode-server-insiders
```

VS Code 서버는 이전에 `~/.vscode-remote` 아래에 설치되었으므로 해당 위치도 확인할 수 있습니다.

### 원격 WSL 2 호스트에 SSH 접속하기 {#ssh-into-a-remote-wsl-2-host}

원격 머신에서 실행 중인 WSL 배포판에 SSH를 사용하여 연결하고 싶을 수 있습니다. [이 가이드](https://www.hanselman.com/blog/the-easy-way-how-to-ssh-into-bash-and-wsl2-on-windows-10-from-an-external-machine)를 참조하여 Windows 10에서 Bash 및 WSL 2에 SSH로 연결하는 방법을 알아보세요.

### 문제 제기하기 {#filing-an-issue}

Remote-SSH 확장을 사용하는 데 문제가 발생하고 문제를 제기해야 한다고 생각되면, 먼저 이 사이트의 문서를 모두 읽었는지 확인한 후, [문제 해결 위키 문서](https://github.com/microsoft/vscode-remote-release/wiki/Remote-SSH-troubleshooting)를 참조하여 로그 파일을 가져오고 문제의 원인을 좁히는 데 도움이 될 수 있는 추가 단계를 시도하세요.

## Dev Containers 팁 {#dev-containers-tips}

Dev Containers 사용에 대한 팁을 읽고 싶다면 Dev Containers [팁과 요령](/docs/devcontainers/tips-and-tricks.md)로 가세요.

## WSL 팁 {#wsl-tips}

### 처음 시작하기: VS Code 서버 전제 조건 {#first-time-start-vs-code-server-prerequisites}

일부 WSL Linux 배포판은 VS Code 서버가 시작하는 데 필요한 라이브러리가 부족합니다. 패키지 관리자를 사용하여 Linux 배포판에 추가 라이브러리를 추가할 수 있습니다.

#### Debian 및 Ubuntu {#debian-and-ubuntu}

Debian 또는 Ubuntu WSL 셸을 열어 `wget` 및 `ca-certificates`를 추가하세요:

```sh
sudo apt-get update && sudo apt-get install wget ca-certificates
```

#### Alpine {#alpine}

루트로 Alpine WSL 셸을 열어(`wsl -d Alpine -u root`) `libstdc++`를 추가하세요:

```sh
apk update && apk add libstdc++
```

Windows 10 2018년 4월 업데이트(빌드 1803) 및 이전 버전에서는 `/bin/bash`가 필요합니다:

```sh
apk update && apk add bash
```

### WSL 확장에서 사용하는 배포판 선택하기 {#selecting-the-distribution-used-by-the-wsl-extension}

**WSL: 새 창**은 기본으로 등록된 WSL 배포판을 엽니다.

비기본 배포판을 열려면 사용하려는 배포판의 WSL 셸에서 `code .`를 실행하거나 **WSL: 배포판을 사용하여 새 창 열기**를 사용하세요.

Windows 10 2019년 5월 업데이트(버전 1903) 이전의 WSL 버전에서는 WSL 명령이 **기본 배포판**만 사용할 수 있습니다. 이 때문에 WSL 확장은 기본 배포판을 변경할 것인지 묻는 메시지를 표시할 수 있습니다.

[ wslconfig.exe](https://learn.microsoft.com/windows/wsl/wsl-config)를 사용하여 기본값을 변경할 수 있습니다.

예를 들어:

```bat
wslconfig /setdefault Ubuntu
```

설치된 배포판을 확인하려면 다음을 실행하세요:

```bat
wslconfig /l
```

### 서버 시작을 위한 환경 구성하기 {#configure-the-environment-for-the-server-startup}

WSL 확장이 WSL에서 VS Code 서버를 시작할 때, 셸 구성 스크립트를 실행하지 않습니다. 이는 사용자 정의 구성 스크립트가 시작을 방해하지 않도록 하기 위해서입니다.

시작 환경을 구성해야 하는 경우, [여기](/docs/remote/wsl.md#advanced-environment-setup-script)에서 설명한 환경 설정 스크립트를 사용할 수 있습니다.

### 원격 확장 호스트를 위한 환경 구성하기 {#configure-the-environment-for-the-remote-extension-host}

원격 확장 호스트 및 터미널의 환경은 기본 셸의 구성 스크립트를 기반으로 합니다. 원격 확장 호스트 프로세스의 환경 변수를 평가하기 위해, 서버는 기본 셸의 **대화형 로그인 셸** 인스턴스를 생성합니다. 이를 통해 환경 변수를 탐색하고 이를 원격 확장 호스트 프로세스의 초기 환경으로 사용합니다. 따라서 환경 변수의 값은 기본으로 설정된 셸과 해당 셸의 구성 스크립트 내용에 따라 달라집니다.

각 셸의 구성 스크립트에 대한 개요는 [Unix 셸 초기화](https://github.com/rbenv/rbenv/wiki/unix-shell-initialization)를 참조하세요. 대부분의 WSL 배포판은 기본 셸로 `/bin/bash`를 설정합니다. `/bin/bash`는 먼저 `/etc/profile` 아래의 시작 파일을 찾고, 그 다음 `~/.bash_profile`, `~/.bash_login`, `~/.profile` 아래의 시작 파일을 찾습니다.

WSL 배포판의 기본 셸을 변경하려면 [이 블로그 게시물](https://medium.com/@vinhp/set-and-use-zsh-as-default-shell-in-wsl-on-windows-10-the-right-way-4f30ed9592dc)의 지침을 따르세요.

### code 명령이 작동하지 않는 문제 해결하기 {#fixing-problems-with-the-code-command-not-working}

Windows의 WSL 터미널에서 `code`를 입력해도 `code`를 찾을 수 없는 경우, WSL의 PATH에서 일부 주요 위치가 누락되었을 수 있습니다.

WSL 터미널을 열고 `echo $PATH`를 입력하여 확인하세요. VS Code 설치 경로가 나열되어 있어야 합니다. 기본적으로는 다음과 같습니다:

```bash
/mnt/c/Users/Your Username/AppData/Local/Programs/Microsoft VS Code/bin
```

하지만 **시스템 설치 프로그램**을 사용한 경우 설치 경로는 다음과 같습니다:

```bash
/mnt/c/Program Files/Microsoft VS Code/bin
```

...또는...

```bash
/mnt/c/Program Files (x86)/Microsoft VS Code/bin
```

WSL의 특징 중 하나는 Windows의 PATH 변수에서 경로를 상속받는 것입니다. Windows PATH 변수를 변경하려면 Windows 시작 메뉴에서 **내 계정에 대한 환경 변수 편집** 명령을 사용하세요.

경로 공유 기능을 비활성화한 경우, `.bashrc`를 편집하고 다음을 추가한 후 새 터미널을 시작하세요:

```bash
WINDOWS_USERNAME="Your Windows Alias"

export PATH="$PATH:/mnt/c/Windows/System32:/mnt/c/Users/$\{WINDOWS_USERNAME\}
/AppData/Local/Programs/Microsoft VS Code/bin"
# 또는... {#or}
# export PATH="$PATH:/mnt/c/Program Files/Microsoft VS Code/bin" {#export-pathpathmntcprogram-filesmicrosoft-vs-codebin}
# 또는... {#or}
# export PATH="$PATH:/mnt/c/Program Files (x86)/Microsoft VS Code/bin" {#export-pathpathmntcprogram-files-x86microsoft-vs-codebin}

```

> **참고:** 디렉토리 이름의 공백 문자는 반드시 따옴표로 묶거나 이스케이프 처리하세요.

### 'code' 명령의 문제 찾기 {#finding-problems-with-the-code-command}

Windows 명령 프롬프트에서 `code`를 입력해도 VS Code가 실행되지 않는 경우, `VSCODE_WSL_DEBUG_INFO=true code .`를 실행하여 문제를 진단하는 데 도움을 줄 수 있습니다.

문제를 제기하고 전체 출력을 첨부하세요.

### 서버 시작 또는 연결 문제 찾기 {#finding-problems-starting-or-connected-to-the-server}

WSL 창이 원격 서버에 연결하지 못할 경우, WSL 로그에서 더 많은 정보를 얻을 수 있습니다. 문제를 제기할 때는 항상 WSL 로그의 전체 내용을 보내는 것이 중요합니다.

**WSL: 로그 열기** 명령을 실행하여 WSL 로그를 엽니다. 로그는 WSL 탭 아래의 터미널 뷰에 표시됩니다.

![WSL 로그](images/troubleshooting/wsl-log.png)

더 많은 자세한 로그를 얻으려면 사용자 설정에서 `remote.WSL.debug` 설정을 활성화하세요.

### 세그멘테이션 오류로 서버 시작 실패 {#the-server-fails-to-start-with-a-segmentation-fault}

이 문제를 조사하는 데 도움을 주기 위해 코어 덤프 파일을 보내주실 수 있습니다. 코어 덤프 파일을 얻으려면 다음 단계를 따르세요:

Windows 명령 프롬프트에서:

* `code --locate-extension ms-vscode-remote.remote-wsl`을 실행하여 WSL 확장 폴더를 확인합니다.
* 반환된 경로로 이동합니다.
* VS Code로 `wslServer.sh` 스크립트를 엽니다, `code .\scripts\wslServer.sh`.
* 마지막 줄( `"$VSCODE_REMOTE_BIN/$COMMIT/bin/$SERVER_APPNAME" "$@"` 이전)에 `ulimit -C unlimited`를 추가합니다.
* 원격 서버를 실행하는 WSL 창을 시작하고 세그멘테이션 오류가 발생할 때까지 기다립니다.

코어 파일은 위에서 언급한 WSL 확장 폴더에 있을 것입니다.

### 열린 작업 공간에서 폴더 이름을 바꾸려고 할 때 EACCES: 권한 거부 오류가 발생합니다 {#i-see-eacces-permission-denied-error-trying-to-rename-a-folder-in-the-open-workspace}

이는 VS Code에서 활성화된 파일 감시자로 인해 발생하는 WSL 파일 시스템 구현의 알려진 문제입니다 ([Microsoft/WSL#3395](https://github.com/microsoft/WSL/issues/3395), [Microsoft/WSL#1956](https://github.com/microsoft/WSL/issues/1956)). 이 문제는 WSL 2에서만 수정될 것입니다.

문제를 피하려면 `remote.WSL.fileWatcher.polling`을 true로 설정하세요. 그러나 폴링 기반은 대규모 작업 공간에 성능 영향을 미칠 수 있습니다.

대규모 작업 공간의 경우 폴링 간격 `remote.WSL.fileWatcher.pollingInterval`을 늘리고, `setting(files.watcherExclude)`로 감시할 폴더를 제어할 수 있습니다.

[WSL 2](https://learn.microsoft.com/windows/wsl/compare-versions#whats-new-in-wsl-2)는 해당 파일 감시자 문제를 가지고 있지 않으며 새로운 설정의 영향을 받지 않습니다.

### WSL에서 Git 줄 끝 문제 해결 (수많은 수정된 파일 발생) {#resolving-git-line-ending-issues-in-wsl-resulting-in-many-modified-files}

Windows와 Linux는 서로 다른 기본 줄 끝을 사용하므로, Git은 줄 끝을 제외하고는 차이가 없는 많은 수정된 파일을 보고할 수 있습니다. 이를 방지하려면 `.gitattributes` 파일을 사용하거나 Windows 측에서 전역적으로 줄 끝 변환을 비활성화할 수 있습니다.

일반적으로 리포지토리에 `.gitattributes` 파일을 추가하거나 수정하는 것이 이 문제를 해결하는 가장 신뢰할 수 있는 방법입니다. 이 파일을 소스 제어에 커밋하면 다른 사람들에게 도움이 되며, 리포지토리별로 동작을 다르게 설정할 수 있습니다. 예를 들어, 리포지토리의 루트에 다음을 추가하면 모든 파일이 LF로 강제되며, CRLF가 필요한 Windows 배치 파일은 제외됩니다:

```yaml
* text=auto eol=lf
*.{cmd,[cC][mM][dD]} text eol=crlf
*.{bat,[bB][aA][tT]} text eol=crlf
```

이것은 **Git v2.10+**에서 작동하므로, 문제가 발생하면 최신 Git 클라이언트가 설치되어 있는지 확인하세요. CRLF가 필요한 다른 파일 유형을 이 파일에 추가할 수 있습니다.

Unix 스타일의 줄 끝(LF)을 항상 업로드하려면 `input` 옵션을 사용할 수 있습니다.

```bash
git config --global core.autocrlf input
```

줄 끝 변환을 완전히 비활성화하려면 대신 다음을 실행하세요:

```bash
git config --global core.autocrlf false
```

마지막으로, 이러한 설정이 적용되도록 리포지토리를 다시 클론해야 할 수도 있습니다.

### Windows와 WSL 간 Git 자격 증명 공유하기 {#sharing-git-credentials-between-windows-and-wsl}

HTTPS를 사용하여 리포지토리를 클론하고 **Windows에서 [자격 증명 도우미를 구성](https://docs.github.com/get-started/getting-started-with-git/caching-your-github-credentials-in-git)**한 경우, WSL과 이를 공유하여 입력한 비밀번호가 양쪽에서 유지되도록 할 수 있습니다. (SSH 키를 사용하는 경우에는 적용되지 않습니다.)

다음 단계를 따르세요:

1. Windows의 **명령 프롬프트** 또는 **PowerShell**에서 다음을 실행하여 자격 증명 관리자를 구성하세요:

    ```bat
     git config --global credential.helper wincred
    ```

2. WSL에서 동일한 자격 증명 도우미를 사용하도록 구성하려면 **WSL 터미널**에서 다음을 실행하세요:

    ```bash
     git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager.exe"
    ```

Windows 측에서 Git 작업을 수행할 때 입력한 비밀번호는 이제 WSL에서도 사용 가능하며 그 반대도 마찬가지입니다.

### WSL에서 Git 푸시 또는 동기화 시 멈춤 문제 해결하기 {#resolving-hangs-when-doing-a-git-push-or-sync-from-wsl}

SSH를 사용하여 Git 리포지토리를 클론하고 SSH 키에 비밀번호가 있는 경우, VS Code의 풀 및 동기화 기능이 원격으로 실행될 때 멈출 수 있습니다.

비밀번호가 없는 SSH 키를 사용하거나 HTTPS를 사용하여 클론하거나, 명령줄에서 `git push`를 실행하여 문제를 우회하세요.

## GitHub Codespaces 팁 {#github-codespaces-tips}

[GitHub Codespaces](https://github.com/features/codespaces)에 대한 팁과 질문은 [GitHub Codespaces 문서](https://docs.github.com/github/developing-online-with-codespaces)를 참조하세요. Codespaces에 영향을 미칠 수 있는 [알려진 웹 제한 및 조정](/docs/remote/codespaces.md#known-limitations-and-adaptations)도 확인하세요.

## 확장 팁 {#extension-tips}

많은 확장이 수정 없이 작동하지만, 특정 기능이 예상대로 작동하지 않도록 방해하는 몇 가지 문제가 있습니다. 경우에 따라 다른 명령을 사용하여 문제를 우회할 수 있으며, 다른 경우에는 확장을 수정해야 할 수 있습니다. 이 섹션에서는 일반적인 문제와 이를 해결하기 위한 팁에 대한 빠른 참조를 제공합니다. 원격 확장 호스트를 지원하기 위해 확장을 수정하는 방법에 대한 심층 가이드는 [원격 개발 지원](/api/advanced-topics/remote-extensions)을 참조하세요.

### 누락된 종속성에 대한 오류 해결하기 {#resolving-errors-about-missing-dependencies}

일부 확장은 특정 WSL Linux 배포판의 기본 설치에서 찾을 수 없는 라이브러리에 의존합니다. 패키지 관리자를 사용하여 Linux 배포판에 추가 라이브러리를 추가할 수 있습니다. Ubuntu 및 Debian 기반 배포판의 경우, 필요한 라이브러리를 설치하려면 `sudo apt-get install <package>`를 실행하세요. 오류 메시지에 언급된 확장 또는 런타임의 문서를 확인하여 추가 설치 세부정보를 확인하세요.

### 원격에서 적용할 때 로컬 절대 경로 설정 실패 {#local-absolute-path-settings-fail-when-applied-remotely}

VS Code의 로컬 사용자 설정은 원격 엔드포인트에 연결할 때 재사용됩니다. 이는 사용자 경험을 일관되게 유지하지만, 대상 위치가 다르기 때문에 로컬 머신과 각 호스트/컨테이너/WSL 간에 절대 경로 설정을 다르게 설정해야 할 수 있습니다.

**해결책:** 원격 엔드포인트에 연결한 후 **Preferences: Open Remote Settings** 명령을 실행하거나 설정 편집기에서 **Remote** 탭을 선택하여 엔드포인트별 설정을 설정할 수 있습니다. 이러한 설정은 연결할 때마다 기존의 로컬 설정을 무시합니다.

### 원격 엔드포인트에 로컬 VSIX 설치 필요 {#need-to-install-local-vsix-on-remote-endpoint}

개발 중이거나 확장 작성자가 수정 사항을 시험해 보라고 요청할 때 로컬 VSIX를 원격 머신에 설치하고 싶을 수 있습니다.

**해결책:** SSH 호스트, 컨테이너 또는 WSL에 연결한 후, 로컬에서와 동일한 방법으로 VSIX를 설치할 수 있습니다. 명령 팔레트(`kbstyle(F1)`)에서 **Extensions: Install from VSIX...** 명령을 실행하세요. 또한 자동으로 최신 마켓플레이스 버전으로 업데이트되는 것을 방지하기 위해 `settings.json`에 `"extensions.autoUpdate": false`를 추가할 수 있습니다. 원격 환경에서 확장을 개발하고 테스트하는 방법에 대한 자세한 내용은 [원격 개발 지원](/api/advanced-topics/remote-extensions)을 참조하세요.

### 브라우저가 로컬에서 열리지 않음 {#browser-does-not-open-locally}

일부 확장은 외부 노드 모듈이나 사용자 정의 코드를 사용하여 브라우저 창을 열 수 있습니다. 불행히도, 이로 인해 확장이 로컬이 아닌 원격에서 브라우저를 열 수 있습니다.

**해결책:** 확장은 `vscode.env.openExternal` API를 사용하여 이 문제를 해결할 수 있습니다. 자세한 내용은 [확장 작성자 가이드](/api/advanced-topics/remote-extensions#opening-something-in-a-local-browser-or-application)를 참조하세요.

### 클립보드가 작동하지 않음 {#clipboard-does-not-work}

일부 확장은 `clipboardy`와 같은 노드 모듈을 사용하여 클립보드와 통합합니다. 불행히도, 이로 인해 확장이 원격 측의 클립보드와 잘못 통합될 수 있습니다.

**해결책:** 확장은 VS Code 클립보드 API로 전환하여 문제를 해결할 수 있습니다. 자세한 내용은 [확장 작성자 가이드](/api/advanced-topics/remote-extensions#using-the-clipboard)를 참조하세요.

### 로컬 웹 서버에 브라우저나 애플리케이션에서 접근할 수 없음 {#cannot-access-local-web-server-from-browser-or-application}

컨테이너, SSH 호스트 또는 GitHub Codespaces에서 작업할 때 브라우저가 연결하는 포트가 차단될 수 있습니다.

**해결책:** 확장은 `vscode.env.openExternal` 또는 `vscode.env.asExternalUri` API를 사용하여 이 문제를 해결할 수 있습니다(이 API는 로컬호스트 포트를 자동으로 전달합니다). 자세한 내용은 [확장 작성자 가이드](/api/advanced-topics/remote-extensions#opening-something-in-a-local-browser-or-application)를 참조하세요. 우회 방법으로 **포트 전달** 명령을 사용하여 수동으로 수행할 수 있습니다.

### 웹뷰 내용이 나타나지 않음 {#webview-contents-do-not-appear}

확장의 웹뷰 내용이 로컬 웹 서버에 연결하기 위해 `iframe`을 사용하는 경우, 웹뷰가 연결하는 포트가 차단될 수 있습니다. 또한, 확장이 `asWebviewUri` 대신 `vscode-resource://` URI를 하드코딩하면 내용이 Codespaces 브라우저 편집기에 나타나지 않을 수 있습니다.

**해결책:** 확장은 `webview.asWebviewUri`를 사용하여 `vscode-resource://` URI와 관련된 문제를 해결할 수 있습니다.

포트가 차단되는 경우, 가장 좋은 접근 방식은 [웹뷰 메시지 전달](/api/extension-guides/webview#scripts-and-message-passing) API를 사용하는 것입니다. 우회 방법으로 `vscode.env.asExternalUri`를 사용하여 VS Code에서 생성된 로컬호스트 웹 서버에 웹뷰가 연결되도록 할 수 있습니다. 그러나 이는 현재 Codespaces 브라우저 기반 편집기에서 [MicrosoftDocs/vscodespaces#11](https://github.com/MicrosoftDocs/vscodespaces/issues/11)로 차단되어 있습니다. 우회 방법에 대한 자세한 내용은 [확장 작성자 가이드](/api/advanced-topics/remote-extensions#workarounds-for-using-localhost-from-a-webview)를 참조하세요.

### 차단된 로컬호스트 포트 {#blocked-localhost-ports}

외부 애플리케이션에서 로컬호스트 포트에 연결하려고 할 때 포트가 차단될 수 있습니다.

**해결책:** VS Code 1.40에서는 확장이 임의의 포트를 프로그래밍적으로 전달할 수 있는 새로운 `vscode.env.asExternalUri` API가 도입되었습니다. 자세한 내용은 [확장 작성자 가이드](/api/advanced-topics/remote-extensions#forwarding-localhost)를 참조하세요. 우회 방법으로 **포트 전달** 명령을 사용하여 수동으로 수행할 수 있습니다.

### 확장 데이터 저장 오류 {#errors-storing-extension-data}

확장은 Linux에서 `~/.config/Code` 폴더를 찾아 전역 데이터를 지속하려고 할 수 있습니다. 이 폴더가 존재하지 않을 경우, 확장이 `ENOENT: no such file or directory, open '/root/.config/Code/User/filename-goes-here`와 같은 오류를 발생시킬 수 있습니다.

**해결책:** 확장은 `context.globalStorageUri` 또는 `context.storageUri` 속성을 사용하여 이 문제를 해결할 수 있습니다. 자세한 내용은 [확장 작성자 가이드](/api/advanced-topics/remote-extensions#persisting-extension-data-or-state)를 참조하세요.

### 로그인할 수 없음 / 새 엔드포인트에 연결할 때마다 로그인해야 함 {#cannot-sign-in-have-to-sign-in-each-time-i-connect-to-a-new-endpoint}

로그인이 필요한 확장은 자체 코드를 사용하여 비밀을 지속할 수 있습니다. 이 코드는 누락된 종속성으로 인해 실패할 수 있습니다. 성공하더라도 비밀은 원격으로 저장되므로 새 엔드포인트마다 로그인을 해야 합니다.

**해결책:** 확장은 [SecretStorage API](https://code.visualstudio.com/api/references/vscode-api#SecretStorage)를 사용하여 이 문제를 해결할 수 있습니다. 자세한 내용은 [확장 작성자 가이드](/api/advanced-topics/remote-extensions#persisting-secrets)를 참조하세요.

### 호환되지 않는 확장이 VS Code의 연결을 방해함 {#an-incompatible-extension-prevents-vs-code-from-connecting}

원격 호스트, 컨테이너 또는 WSL에 호환되지 않는 확장이 설치된 경우, VS Code 서버가 호환성 문제로 인해 멈추거나 충돌하는 경우가 있습니다. 확장이 즉시 활성화되면 연결을 방해하고 확장을 제거할 수 없게 됩니다.

**해결책:** 다음 단계를 따라 원격 확장 폴더를 수동으로 삭제하세요:

1. 컨테이너의 경우, `devcontainer.json`에서 결함이 있는 확장에 대한 참조가 더 이상 포함되어 있지 않은지 확인하세요.

2. 다음으로, 원격 호스트, 컨테이너 또는 WSL에 연결하기 위해 별도의 터미널/명령 프롬프트를 사용하세요.

   * SSH 또는 WSL인 경우, 해당 환경에 따라 연결하세요 (서버에 연결하려면 `ssh`를 실행하거나 WSL 터미널을 엽니다).
   * 컨테이너를 사용하는 경우, `docker ps -a`를 호출하여 올바른 이름의 이미지를 찾고 컨테이너 ID를 확인하세요. 컨테이너가 중지된 경우, `docker run -it <id> /bin/sh`를 실행하세요. 실행 중인 경우, `docker exec -it <id> /bin/sh`를 실행하세요.

3. 연결되면 VS Code 안정 버전의 경우 `rm -rf ~/.vscode-server/extensions`를 실행하고, VS Code 인사이더 버전의 경우 `rm -rf ~/.vscode-server-insiders/extensions`를 실행하여 모든 확장을 제거하세요.

### 사전 구축된 네이티브 모듈을 포함하거나 획득한 확장이 실패함 {#extensions-that-ship-or-acquire-pre-built-native-modules-fail}

VS Code 확장에 포함되거나 동적으로 획득된 네이티브 모듈은 [Electron의 `electron-rebuild`](https://electronjs.org/docs/tutorial/using-native-node-modules)를 사용하여 재컴파일해야 합니다. 그러나 VS Code 서버는 표준(비-Electron) 버전의 Node.js를 실행하므로 원격에서 사용할 때 바이너리가 실패할 수 있습니다.

**해결책:** 확장은 이 문제를 해결하기 위해 수정해야 합니다. VS Code가 제공하는 Node.js의 "모듈" 버전용으로 Electron 및 표준 Node.js의 두 세트를 포함(또는 동적으로 획득)해야 하며, 활성화 함수에서 `context.executionContext === vscode.ExtensionExecutionContext.Remote`를 확인하여 올바른 바이너리를 설정해야 합니다. 자세한 내용은 [확장 작성자 가이드](/api/advanced-topics/remote-extensions#using-native-node.js-modules)를 참조하세요.

### 비 x86_64 호스트 또는 Alpine Linux에서만 확장이 실패함 {#extension-only-fails-on-non-x86_64-hosts-or-alpine-linux}

확장이 Debian 9+, Ubuntu 16.04+, 또는 RHEL / CentOS 7+ 원격 SSH 호스트, 컨테이너 또는 WSL에서 작동하지만 지원되는 비 x86_64 호스트(예: ARMv7l) 또는 Alpine Linux 컨테이너에서 실패하는 경우, 확장이 이러한 플랫폼을 지원하지 않는 네이티브 코드 또는 런타임만 포함하고 있을 수 있습니다. 예를 들어, 확장이 x86_64로 컴파일된 네이티브 모듈 또는 런타임만 포함할 수 있습니다. Alpine Linux의 경우, 포함된 네이티브 코드 또는 런타임은 Alpine Linux(`musl`)와 다른 배포판(`glibc`) 간의 [근본적인 차이](https://wiki.musl-libc.org/functional-differences-from-glibc.html)로 인해 작동하지 않을 수 있습니다.

**해결책:** 확장은 이러한 플랫폼을 지원하기 위해 선택적으로 추가 대상에 대한 바이너리를 컴파일/포함해야 합니다. 일부 서드파티 npm 모듈도 네이티브 코드를 포함할 수 있으므로, 경우에 따라 npm 모듈 작성자와 협력하여 추가 컴파일 대상을 추가해야 할 수 있습니다. 자세한 내용은 [확장 작성자 가이드](/api/advanced-topics/remote-extensions#supporting-nonx8664-hosts-or-alpine-linux-containers)를 참조하세요.

### 누락된 모듈로 인해 확장이 실패함 {#extensions-fail-due-to-missing-modules}

Electron 또는 VS Code 기본 모듈(확장 API에서 노출되지 않음)에 의존하는 확장은 대체 방법을 제공하지 않으면 원격에서 실행할 때 실패할 수 있습니다. `original-fs`를 찾을 수 없다는 오류가 개발자 도구 콘솔에 표시될 수 있습니다.

**해결책:** Electron 모듈에 대한 의존성을 제거하거나 대체 방법을 제공하세요. 자세한 내용은 [확장 작성자 가이드](/api/advanced-topics/remote-extensions#avoid-using-electron-modules)를 참조하세요.

### 원격 작업 공간 파일에 접근하거나 로컬 머신으로 전송할 수 없음 {#cannot-access-transfer-remote-workspace-files-to-local-machines}

외부 애플리케이션에서 작업 공간 파일을 열면 원격 파일에 직접 접근할 수 없기 때문에 오류가 발생할 수 있습니다.

**해결책:** 로컬에서 실행되도록 설계된 "UI" 확장을 생성하는 경우, `vscode.workspace.fs` API를 사용하여 원격 작업 공간 파일 시스템과 상호작용할 수 있습니다. 그런 다음 이를 "Workspace" 확장의 종속성으로 만들고 필요에 따라 명령을 사용하여 호출할 수 있습니다. 다양한 유형의 확장 및 이를 통해 명령을 사용하는 방법에 대한 자세한 내용은 [확장 작성자 가이드](/api/advanced-topics/remote-extensions)를 참조하세요.

### 확장에서 연결된 장치에 접근할 수 없음 {#cannot-access-attached-device-from-extension}

로컬에 연결된 장치에 접근하는 확장은 원격에서 실행할 때 이를 연결할 수 없습니다.

**해결책:** 현재로서는 없습니다. 이 문제를 해결하기 위한 최선의 접근 방식을 조사하고 있습니다.

## 질문 및 피드백 {#questions-and-feedback}

### 문제 보고하기 {#reporting-issues}

원격 개발 확장 중 하나에서 문제가 발생하면, 올바른 로그를 수집하는 것이 중요합니다. 그래야 문제를 [진단하는 데 도움을 줄 수 있습니다](https://aka.ms/vscode-remote/issues/new).

각 원격 확장에는 로그를 볼 수 있는 명령이 있습니다.

명령 팔레트(`kbstyle(F1)`)에서 **Remote-SSH: Show Log**를 사용하여 Remote - SSH 확장 로그를 가져올 수 있습니다. Remote - SSH 문제를 보고할 때는 외부 터미널에서 머신에 SSH로 연결할 수 있는지 확인하세요(원격 - SSH를 사용하지 않고).

유사하게, **Dev Containers: Show Container Log**를 사용하여 Dev Containers 확장 로그를 가져올 수 있습니다.

위의 두 가지와 마찬가지로, **WSL: Show Log**를 사용하여 WSL 확장 로그를 가져올 수 있습니다. 또한 문제가 [WSL 리포지토리](https://github.com/microsoft/WSL/issues)에서 추적되고 있는지 확인하세요(WSL 확장 때문이 아닌 경우).

원격에서 다른 확장을 사용할 때 문제가 발생하는 경우(예: 다른 확장이 원격 컨텍스트에서 제대로 로드되거나 설치되지 않는 경우), **Remote Extension Host** 출력 채널에서 로그를 가져오는 것이 도움이 됩니다 (**Output: Focus on Output View**) 및 드롭다운에서 **Log (Remote Extension Host)**를 선택하세요.

> **참고**: **Log (Extension Host)**만 보이는 경우, 이는 로컬 확장 호스트이며 원격 확장 호스트가 시작되지 않았음을 의미합니다. 로그 채널은 로그 파일이 생성된 후에만 생성되므로, 원격 확장 호스트가 시작되지 않으면 원격 확장 호스트 로그 파일이 생성되지 않으며 출력 뷰에 표시되지 않습니다. 이는 여전히 문제에 포함할 수 있는 유용한 정보입니다.

### 원격 질문 및 피드백 리소스 {#remote-question-and-feedback-resources}

다양한 원격 리소스가 있습니다:

* [원격 개발 FAQ](/docs/remote/faq.md)를 참조하세요.
* [Stack Overflow](https://stackoverflow.com/questions/tagged/vscode-remote)에서 검색하세요.
* [기능 요청](https://aka.ms/vscode-remote/feature-requests) 또는 [문제 보고](https://aka.ms/vscode-remote/issues/new)를 추가하세요.
---
Order:
Area: remote
TOCTitle: Linux Prerequisites
PageTitle: Visual Studio Code 원격 개발을 위한 Linux 필수 조건
ContentId: 7ec8dedf-0659-437e-98f1-2d27f5e243eb
MetaDescription: VS Code 원격을 위한 Linux 필수 조건 - SSH, Dev Containers, WSL 확장
DateApproved: 03/05/2025
---
# Linux로 원격 개발하기 {#remote-development-with-linux}

Linux는 매우 다양한 환경이며, 많은 서버, 컨테이너 및 데스크탑 배포판이 지원되는 내용을 알기 어렵게 만들 수 있습니다. Visual Studio Code 원격 개발은 연결할 특정 호스트 / 컨테이너 / WSL 배포판에 대한 필수 조건이 있습니다.

다음의 확장 프로그램은 최근 안정적인 LTS 버전과 연결할 때 작동하는 것으로 알려져 있습니다:

* **Ubuntu 64비트 x86, ARMv8l (AArch64)** (20.04+)
* **Debian 64비트 x86, ARMv8l (AArch64)** (Buster/10+)
* **Raspberry Pi OS ARMv7l (AArch32) 32비트** (Buster/10+) (이전에는 Raspbian이라고 불림)
* **CentOS / RHEL 64비트 x86** (8+)
* **Alpine Linux 64비트 x86 컨테이너 또는 WSL 호스트** (3.16+) in Dev Containers, WSL

다음의 비-Linux SSH 호스트도 지원됩니다:

* **Windows 10/11 / Server 2016/2019 SSH 호스트** (1803+) [공식 OpenSSH 서버](https://learn.microsoft.com/windows-server/administration/openssh/openssh_install_firstuse)를 사용하여.
* **macOS** 10.14+ (Mojave) SSH 호스트는 [원격 로그인](https://support.apple.com/guide/mac-help/allow-a-remote-computer-to-access-your-mac-mchlp1066/mac)을 활성화해야 합니다.

그러나 비표준 구성이나 Linux의 하위 배포판을 사용하는 경우 문제가 발생할 수 있습니다. 이 문서는 요구 사항에 대한 정보와 커뮤니티에서 지원되는 구성일지라도 실행할 수 있도록 돕는 팁을 제공합니다.

**다른 확장 프로그램은 여기 나열된 것 외에 의존성이 있을 수 있습니다.** 일부 확장 프로그램은 **Alpine Linux, ARMv7 (AArch32) 또는 ARMv8 (AArch64)**에서 작동하지 않을 수 있는 컴파일된 네이티브 코드를 포함하고 있습니다. 이러한 플랫폼은 이러한 이유로 "미리 보기" 상태로 간주됩니다. 특정 확장에서만 발생하는 문제가 발생하면, **확장 프로그램 저자에게 연락하여 네이티브 의존성에 대한 정보를 요청하십시오.**

## 로컬 Linux 필수 조건 {#local-linux-prerequisites}

로컬에서 Linux를 실행하는 경우, [VS Code 필수 조건](/docs/supporting/requirements.md)이 대부분의 요구 사항을 결정합니다.

또한, 특정 원격 개발 확장 프로그램은 추가 요구 사항이 있습니다:

* **Remote - SSH:** `ssh`가 경로에 있어야 합니다. 셸 바이너리는 일반적으로 `openssh-client` 패키지에 있습니다.
* **Dev Containers**: Docker CE/EE 18.06+ 및 Docker Compose 1.21+. [배포판에 대한 Docker CE/EE의 공식 설치 지침](https://docs.docker.com/install/#supported-platforms)을 따르십시오. Docker Compose를 사용하는 경우, [Docker Compose 설치 지침](https://docs.docker.com/compose/install/)도 따르십시오. (Ubuntu Snap 패키지는 지원되지 않으며 배포판의 패키지가 오래될 수 있습니다.) `docker`와 `docker-compose`도 경로에 있어야 합니다. 그러나 [원격 호스트](https://aka.ms/vscode-remote/containers/remote-host)를 사용하는 경우 Docker가 실행 중일 필요는 없습니다. Docker를 구성하는 방법에 대한 자세한 내용은 [Dev Containers 문서](/docs/devcontainers/containers.md#system-requirements)를 참조하십시오.

## 원격 호스트 / 컨테이너 / WSL Linux 필수 조건 {#remote-host-container-wsl-linux-prerequisites}

플랫폼 필수 조건은 주로 각 원격 엔드포인트에 자동으로 설치되는 [Node.js](https://nodejs.org/en/docs/meta/topics/dependencies) 런타임의 버전에 의해 결정됩니다 (그리고 확장으로 [V8 JavaScript 엔진](https://v8docs.nodesource.com)도 포함됩니다). 이 서버는 각 대상에 대해 컴파일되고 테스트해야 하는 관련 네이티브 노드 모듈 세트를 가지고 있습니다. **64비트 x86 glibc 기반** Linux 배포판은 현재 이러한 요구 사항을 고려할 때 가장 좋은 지원을 제공합니다.

특정 확장에서 네이티브 의존성이 있는 경우 **ARMv7l (AArch32) / ARMv8l (AArch64) glibc 기반** 호스트, 컨테이너 또는 WSL 및 **64비트 x86 musl 기반 Alpine Linux**에서 문제가 발생할 수 있습니다. ARMv7l/ARMv8l의 경우, 확장은 네이티브 모듈 또는 런타임의 x86_64 버전만 포함할 수 있습니다. Alpine Linux의 경우, 포함된 네이티브 코드 또는 런타임은 Alpine Linux(`musl`)와 다른 배포판(`glibc`) 간의 [근본적인 차이](https://wiki.musl-libc.org/functional-differences-from-glibc.html)로 인해 작동하지 않을 수 있습니다. 이러한 경우, 확장은 이러한 추가 대상을 지원하기 위해 바이너리를 컴파일/포함해야 합니다. 예상대로 작동하지 않는 확장을 발견하면 적절한 확장 저자에게 지원 요청 문제를 제기하십시오.

| 배포판 | 기본 요구 사항 | Remote - SSH 요구 사항 | 비고 |
|--------------|-------------------|------------------|-------|
| 일반 |  kernel >= 4.18, glibc >=2.28, libstdc++ >= 3.4.25, tar | OpenSSH 서버, `bash`, 및 `curl` 또는 `wget` | glibc 버전을 확인하려면 `ldd --version`을 실행하십시오. libstdc++ 3.4.25가 사용 가능한지 확인하려면 `strings /usr/lib64/libstdc++.so.6 \| grep GLIBCXX`를 실행하십시오. |
| Arm32용 일반 | `libatomic1` | 추가 요구 사항 없음. | |
| Ubuntu 20.04+, Debian 10+, Raspberry Pi OS Buster/10+ 및 하위 배포판 | `libc6 libstdc++6 ca-certificates tar` | `openssh-server bash` 및 `curl` 또는 `wget` | 커널 >= 4.18, glibc >= 2.28, libstdc++ >= 3.4.25 필요. |
| RHEL / CentOS 8+ | `glibc libgcc libstdc++ ca-certificates tar` | `openssh-server bash` 및 `curl` 또는 `wget` | 커널 >= 4.18, glibc >= 2.28, libstdc++ >= 3.4.25 필요. |
| Alpine Linux 3.16+ | `musl libgcc libstdc++`. musl >= 1.2.3, glibc 필요 없음. | 아직 지원되지 않음. | Dev Containers 및 WSL에서 지원됨. 컨테이너에 설치된 확장은 확장 네이티브 코드의 `glibc` 의존성으로 인해 작동하지 않을 수 있습니다. |
| openSUSE Leap / SUSE Linux Enterprise 15+|`glibc libgcc_s1 libstdc++6 ca-certificates gzip tar`|`curl` 또는 `wget` |커널 >= 4.18, glibc, libstdc++6 필요.|

## Linux 배포판별 팁 {#tips-by-linux-distribution}

다음은 배포판 목록과 누락된 기본 요구 사항입니다. 지원 종료된 배포판 버전은 포함되지 않습니다.

* ✅ = 작동 중
* ⚠️ = 작동 중, 그러나 제한 사항 참고
* 🔬 = 실험적
* 🛑 = 지원되지 않음, 그러나 우회 방법 있음
* ❌ = 지원되지 않음

| 서버 배포판 | Docker 이미지 | 누락된 라이브러리 | 비고 / 추가 단계 |
|---------------------|--------------|-------------------|------------------|
| ⚠️ Alpine Linux 3.16 (64비트) | `alpine:3.16` | `libgcc libstdc++` | Dev Containers 및 WSL에서만 지원됨. 컨테이너에 설치된 일부 확장은 확장 네이티브 코드의 `glibc` 의존성으로 인해 작동하지 않을 수 있습니다. |
| ✅ CentOS 8 Server (64비트) | `centos:8` | &lt;없음&gt; | &lt;없음&gt; |
| ❌ CentOS 7 Server (64비트) | `centos:7` | `glibc` >= 2.28, `libstdc++` >= 3.4.25 | &lt;없음&gt; |
| ✅ Debian 10 Server (64비트) | `debian:10` | &lt;없음&gt; | &lt;없음&gt; |
| ❌ Debian 9 Server (64비트) | `debian:9` | `glibc` >= 2.28, `libstdc++` >= 3.4.25 | &lt;없음&gt; |
| ✅ openSUSE Leap Server 15 (64비트) |   `opensuse/leap:15` | Docker 이미지에 `tar` 및 `gzip`이 누락되어 있습니다. |  &lt;없음&gt; |
| ✅ Oracle Linux 8 (64비트) | `oraclelinux:8` | &lt;없음&gt; | &lt;없음&gt; |
| ❌ Oracle Linux 7 (64비트) | `oraclelinux:7` | `glibc` >= 2.28, `libstdc++` >= 3.4.25. Docker 이미지에 `tar`가 누락되어 있습니다. | &lt;없음&gt; |
| ⚠️ Raspberry Pi OS Buster/10 (ARMv7l 32비트) | &lt;n/a&gt; | &lt;없음&gt; | ARMv7l 호스트에 설치된 경우 일부 확장이 x86 네이티브 코드로 인해 작동하지 않을 수 있습니다. Dev Containers는 ARM 호스트의 컨테이너에 연결하는 것을 **지원합니다**. |
| ✅ RedHat Enterprise Linux 8 (64비트) |  | &lt;없음&gt; | &lt;없음&gt; |
| ❌ RedHat Enterprise Linux 7 (64비트) |  | `glibc` >= 2.28, `libstdc++` >= 3.4.25 | &lt;없음&gt; |
| ✅ SUSE Linux Enterprise Server 15 (64비트) |  |  Docker 이미지에 `tar` 및 `gzip`이 누락되어 있습니다. |  &lt;없음&gt; |
| ✅ Ubuntu Server 20.04 (64비트) | `ubuntu:20.04` | &lt;없음&gt;  | &lt;없음&gt; |
| ❌ Ubuntu Server 18.04 (64비트) | `ubuntu:18.04` | `glibc` >= 2.28  | &lt;없음&gt; |

## 질문이나 피드백 {#questions-or-feedback}

* [팁과 요령](/docs/remote/troubleshooting.md) 또는 [FAQ](/docs/remote/faq.md)를 참조하십시오.
* [Stack Overflow](https://stackoverflow.com/questions/tagged/vscode-remote)에서 검색하십시오.
* [기능 요청](https://aka.ms/vscode-remote/feature-requests) 또는 [문제 보고](https://aka.ms/vscode-remote/issues/new)를 추가하십시오.
* 다른 사람들이 사용할 수 있도록 [Dev Container 템플릿](https://containers.dev/templates) 또는 [기능](https://containers.dev/features)을 만드십시오.
* [우리 문서](https://github.com/microsoft/vscode-docs) 또는 [VS Code 자체](https://github.com/microsoft/vscode)에 기여하십시오.
* 자세한 내용은 [기여 가이드](https://aka.ms/vscode-remote/contributing)를 참조하십시오.
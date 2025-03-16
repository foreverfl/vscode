---
Order: 1
Area: remote
TOCTitle: 개요
PageTitle: Visual Studio Code 원격 개발
ContentId: eceea3f0-feee-47c2-8b65-1f1b0825355b
MetaDescription: Visual Studio Code 원격 개발
DateApproved: 03/05/2025
sidebar_label: 개요
---
# VS Code 원격 개발 {#vs-code-remote-development}

**Visual Studio Code 원격 개발**을 사용하면 컨테이너, 원격 머신 또는 [Windows Subsystem for Linux](https://learn.microsoft.com/windows/wsl) (WSL)를 완전한 기능을 갖춘 개발 환경으로 사용할 수 있습니다. 다음과 같은 작업을 수행할 수 있습니다:

- **배포할 동일한 운영 체제**에서 개발하거나 **더 크거나 전문화된** 하드웨어를 사용할 수 있습니다.
- 로컬 **머신 구성**에 영향을 주지 않도록 개발 환경을 **분리**할 수 있습니다.
- 새로운 기여자가 **시작하기** 쉽게 하고 모든 사람이 **일관된 환경**에서 작업할 수 있도록 합니다.
- 로컬 OS에서 **사용할 수 없는** 도구나 런타임을 사용하거나 **여러 버전**을 관리할 수 있습니다.
- **Windows Subsystem for Linux**를 사용하여 리눅스에 배포된 애플리케이션을 개발할 수 있습니다.
- **여러 머신이나 위치**에서 **기존** 개발 환경에 접근할 수 있습니다.
- 고객 사이트나 클라우드와 같은 **다른 곳에서 실행 중인 애플리케이션**을 디버깅할 수 있습니다.

이러한 이점을 얻기 위해 로컬 머신에 **소스 코드**가 필요하지 않습니다. [원격 개발 확장 팩](https://aka.ms/vscode-remote/download/extension)의 각 확장은 컨테이너, WSL 또는 원격 머신 내에서 명령 및 다른 확장을 직접 실행할 수 있어 모든 것이 로컬에서 실행할 때와 같은 느낌을 줍니다. 확장은 원격 OS에 VS Code 서버를 설치하며, 이 서버는 원격 OS의 기존 VS Code 설치와 독립적입니다.

![Architecture](images/remote-overview/architecture.png)

## 시작하기 {#getting-started}

### 원격 개발 확장 팩 {#remote-development-extension-pack}

[원격 개발 확장 팩](https://aka.ms/vscode-remote/download/extension)에는 네 가지 확장이 포함되어 있습니다. 각 확장을 시작하는 방법에 대한 다음 페이지를를 참조하세요:

- [Remote - SSH](/docs/remote/ssh) - SSH를 사용하여 원격 머신/VM에서 폴더를 열어 어떤 위치에든 연결합니다.
- [Dev Containers](/docs/devcontainers/containers) - 컨테이너 내부(또는 마운트된)에서 별도의 툴체인 또는 컨테이너 기반 애플리케이션으로 작업합니다.
- [WSL](/docs/remote/wsl) - Windows Subsystem for Linux에서 리눅스 기반의 개발 경험을 얻습니다.
- [Remote - Tunnels](/docs/remote/tunnels) - SSH를 구성하지 않고 안전한 터널을 통해 원격 머신에 연결합니다.

대부분의 VS Code 확장은 원격 환경에서 수정 없이 작동해야 하지만, 확장 작성자는 [원격 개발 지원](https://api/advanced-topics/remote-extensions)에서 더 많은 정보를 얻을 수 있습니다.

## 원격 튜토리얼 {#remote-tutorials}

아래 튜토리얼은 원격 개발 확장 프로그램을 사용하여 Visual Studio Code를 실행하는 방법을 안내합니다.

튜토리얼 | 설명
--- | ---
[SSH를 통한 원격 연결](/docs/remote/ssh-tutorial.md) | SSH를 통해 Visual Studio Code로 원격 및 가상 머신에 연결합니다.
[WSL에서 작업하기](/docs/remote/wsl-tutorial.md) | Windows Subsystem for Linux에서 Visual Studio Code를 실행합니다.
[컨테이너에서 개발하기](/docs/devcontainers/tutorial.md) | Docker 컨테이너에서 Visual Studio Code를 실행합니다.
[GitHub Codespaces](https://docs.github.com/github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code) | Visual Studio Code로 codespace에 연결합니다.

## GitHub Codespaces {#github-codespaces}

[GitHub Codespaces](/docs/remote/codespaces.md)는 관리되는 원격 개발 환경을 제공합니다. 클라우드에 호스팅된 개발 환경을 구성하고 생성할 수 있으며, 필요할 때마다 시작되고 사용할 수 있습니다.

## 질문이나 피드백 {#questions-or-feedback}

- [팁과 요령](/docs/remote/troubleshooting.md) 또는 [자주 묻는 질문(FAQ)](/docs/remote/faq.md)을 참조하세요.
- [Stack Overflow](https://stackoverflow.com/questions/tagged/vscode-remote)에서 검색하세요.
- [기능 요청](https://aka.ms/vscode-remote/feature-requests)을 추가하거나 [문제 보고](https://aka.ms/vscode-remote/issues/new)하세요.

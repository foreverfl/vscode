---
Order: 26
Area: editor
TOCTitle: 포트 포워딩
ContentId: d7a80c88-c091-4d13-9240-d432c12407a7
PageTitle: VS Code로 로컬 서비스 포트 포워딩
DateApproved: 03/05/2025
MetaDescription: Visual Studio Code를 사용하여 로컬 웹 서비스를 인터넷에서 접근 가능하게 만드세요.
sidebar_label: 포트 포워딩
---
# 로컬 포트 포워딩 {#local-port-forwarding}

포트 포워딩에 대한 지원은 Visual Studio Code에 [Microsoft dev tunnels](https://learn.microsoft.com/azure/developer/dev-tunnels/overview)를 통해 내장되어 있으며, 확장 프로그램이 필요하지 않습니다. 로컬 웹 서비스를 실행할 때, **포트** 뷰를 사용하여 서비스를 인터넷에서 다른 사람들이 접근할 수 있도록 할 수 있습니다.

## 로컬 포트 포워딩 사용하는 방법 {#how-to-use-local-port-forwarding}

먼저, 포워딩할 서비스를 준비해야 합니다. 아직 서비스가 없다면 Node.js가 설치되어 있는 경우, 다음 명령어를 실행하여 포트 3000에서 서버를 시작할 수 있습니다:

```bash
npx serve
```

그 다음, 패널 영역의 **Ports** 뷰로 이동하여 (**Ports: Focus on Ports View**) **Forward a Port**을 선택합니다.

![포트 뷰에 표시된 포트 포워딩 버튼](images/port-forwarding/ports-view.png)

이전에 GitHub에 로그인하지 않았다면, 로그인하라는 메시지가 표시됩니다. 그런 다음 포워딩할 포트를 입력합니다; 위 명령어를 사용할 경우 기본 포트는 포트 3000입니다. 포트를 입력하면 포트 포워딩 시스템이 시작되고, **Ports** 뷰가 업데이트되어 포워딩한 포트와 그 **Forwarded Address**를 보여줍니다.

![포트 뷰에 추가된 포트 3000](images/port-forwarding/forwarded-port.png)

**Forwarded Address** 위에 마우스를 올리면, 인라인 작업을 사용하여 주소를 복사하거나, 브라우저에서 열거나, 편집기 내 미리보기를 열 수 있습니다.

기본적으로 포워딩된 포트는 **Private**입니다. URL에 접근하면, VS Code에서 포트 포워딩 프로세스를 시작할 때 사용한 동일한 GitHub 계정으로 로그인해야 합니다. 포트에서 마우스 오른쪽 버튼을 클릭하고  **Port Visibility > Public**를 선택하여 가시성을 변경할 수 있습니다. **Public** 포트는 로그인할 필요가 없습니다.

## 자주 묻는 질문 {#common-questions}

### 원격 머신에 연결되어 있을 때 로컬 서비스를 어떻게 포워딩하나요? {#how-do-i-forward-local-services-if-im-connected-to-a-remote-machine}

현재 포트 포워딩은 로컬에서 실행 중인 서비스를 노출하는 데만 작동합니다. 원격 연결에서는 아직 작동하지 않지만, 향후 작동할 것으로 예상하고 있습니다.

상황에 따라, VS Code [Remote - Tunnels](https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-server) 확장 프로그램을 사용하여 원격 머신에 터널링할 수 있습니다. [Remote - Tunnels 문서](/docs/remote/tunnels.md)에서 자세히 알아보세요.

### 포워딩된 포트는 어떻게 보안이 유지되나요? {#how-are-forwarded-ports-secured}

기본적으로, 터널을 호스팅하고 연결하는 데는 양쪽 모두 동일한 GitHub 또는 Microsoft 계정으로 인증이 필요합니다. 두 경우 모두 VS Code는 Azure에 호스팅된 서비스에 아웃바운드 연결을 수행합니다; 일반적으로 방화벽 변경이 필요하지 않으며, VS Code는 네트워크 리스너를 설정하지 않습니다.

하지만 **Public** 포트를 열 경우, 링크가 있는 모든 사용자가 포워딩된 서비스에 접근할 수 있습니다. 이러한 포트를 통해 기밀 정보나 안전하지 않은 서비스를 호스팅하지 않도록 주의해야 합니다.

기본 dev tunnels 서비스의 보안에 대한 자세한 내용은 [문서](https://learn.microsoft.com/azure/developer/dev-tunnels/security)에서 확인할 수 있습니다.

### 포트 포워딩에 어떤 제한이 있나요? {#what-limits-are-there-on-port-forwarding}

포트 포워딩에는 사용되는 대역폭의 양과 활성 머신 수에 대한 제한이 있으며, 이는 시간이 지남에 따라 변경될 수 있습니다. [Remote-Tunnels](https://aka.ms/vscode-dev-tunnel-limit) 문서에서 터널 사용 제한에 대해 더 읽어보세요.

### 조직 전체에 걸쳐 정책을 구성할 수 있나요? {#can-i-configure-policies-across-my-organization}

포트 포워딩에 대한 접근을 제어하고자 하는 조직의 인원원이라면, `global.rel.tunnels.api.visualstudio.com` 도메인에 대한 접근을 허용하거나 거부하여 이를 수행할 수 있습니다.

Windows 장치를 사용하는 사용자라면, dev tunnels에 대한 그룹 정책 설정을 구성한 후 배포할 수 있습니다. [dev tunnels 문서](https://learn.microsoft.com/azure/developer/dev-tunnels/policies)에서 자세히 알아보세요.

---
Order: 6
Area: setup
TOCTitle: 네트워크
ContentId: 84F36EDE-4D66-4A2E-B4D1-F020C73EB2AD
PageTitle: Visual Studio Code의 네트워크 연결 설정
DateApproved: 03/05/2025
MetaDescription: VS Code의 네트워크 연결을 설정합니다.
---
# Visual Studio Code의 네트워크 연결 {#network-connections-in-visual-studio-code}

Visual Studio Code는 [Electron](https://www.electronjs.org) 위에 구축되어 있으며, [Chromium](https://www.chromium.org/)의 모든 네트워킹 스택 기능을 활용합니다. 이는 VS Code 사용자가 [Google Chrome](https://www.google.com/chrome/index.html)에서 제공하는 많은 네트워킹 지원을 받을 수 있음을 의미합니다.

## 일반 호스트 이름 {#common-hostnames}

VS Code 내의 몇 가지 기능은 작동하기 위해 네트워크 통신이 필요합니다. 예를 들어 자동 업데이트 메커니즘, 확장 프로그램 쿼리 및 설치, 원격 데이터 수집 등이 있습니다. 이러한 기능이 프록시 환경에서 제대로 작동하려면 제품이 올바르게 구성되어 있어야 합니다.

VS Code에서 사용하는 특정 도메인을 허용해야 하는 방화벽 뒤에 있는 경우, 다음은 통신을 허용해야 하는 호스트 이름 목록입니다:

* `update.code.visualstudio.com` - Visual Studio Code 다운로드 및 업데이트 서버
* `code.visualstudio.com` - Visual Studio Code 문서
* `go.microsoft.com` - Microsoft 링크 포워딩 서비스
* `vscode.blob.core.windows.net` - 원격 서버에 사용되는 Visual Studio Code 블롭 저장소
* `marketplace.visualstudio.com` - Visual Studio 마켓플레이스
* `*.gallery.vsassets.io` - Visual Studio 마켓플레이스
* `*.gallerycdn.vsassets.io` - Visual Studio 마켓플레이스
* `rink.hockeyapp.net` - 충돌 보고 서비스
* `bingsettingssearch.trafficmanager.net` - 제품 내 설정 검색
* `vscode.search.windows.net` - 제품 내 설정 검색
* `raw.githubusercontent.com` - GitHub 리포지토리 원본 파일 접근
* `vsmarketplacebadges.dev` - Visual Studio 마켓플레이스 배지 서비스
* `az764295.vo.msecnd.net` - Visual Studio Code 다운로드 CDN (사용 중단됨)
* `vscode.download.prss.microsoft.com` - Visual Studio Code 다운로드 CDN
* `download.visualstudio.microsoft.com` - Visual Studio 다운로드 서버, 일부 VS Code 확장을 위한 종속성을 제공합니다 (C++, C#)
* `vscode-sync.trafficmanager.net` - Visual Studio Code 설정 동기화 서비스
* `vscode-sync-insiders.trafficmanager.net` - Visual Studio Code 설정 동기화 서비스 (Insiders)
* `vscode.dev` - GitHub 또는 Microsoft로 로그인할 때 사용되는 확장 또는 설정 동기화
* `*.vscode-unpkg.net` - 웹 확장을 로드할 때 사용
* `default.exp-tas.com` - Visual Studio Code 실험 서비스, 실험적인 사용자 경험을 제공하는 데 사용

## 프록시 서버 지원 {#proxy-server-support}

VS Code는 Google Chromium과 동일한 프록시 서버 지원을 제공합니다. 다음은 [Chromium 문서](https://www.chromium.org/developers/design-documents/network-settings)에서 발췌한 내용입니다:

```
"Chromium 네트워크 스택은 시스템 네트워크 설정을 사용하여 사용자와 관리자가 모든 애플리케이션의 네트워크 설정을 쉽게 제어할 수 있도록 합니다. 네트워크 설정에는 다음이 포함됩니다:

 - 프록시 설정
 - SSL/TLS 설정
 - 인증서 폐기 확인 설정
 - 인증서 및 개인 키 저장소"
```

이는 프록시 설정이 자동으로 감지되어야 함을 의미합니다.

그렇지 않은 경우, 다음 명령줄 인수를 사용하여 프록시 설정을 제어할 수 있습니다:

```bash
# 프록시 비활성화 {#disable-proxy}
--no-proxy-server

# 수동 프록시 주소 {#manual-proxy-address}
--proxy-server=<scheme>=<uri>[:<port>][;...] | <uri>[:<port>] | "direct://"

# 수동 PAC 주소 {#manual-pac-address}
--proxy-pac-url=<pac-file-url>

# 호스트별 프록시 비활성화 {#disable-proxy-per-host}
--proxy-bypass-list=(<trailing_domain>|<ip-address>)[:<port>][;...]
```

이 명령줄 인수에 대해 더 알아보려면 [Chromium 네트워크 설정](https://www.chromium.org/developers/design-documents/network-settings)을 참조하세요.

### 인증된 프록시 {#authenticated-proxies}

인증된 프록시는 [PR #22369](https://github.com/microsoft/vscode/pull/22369) 추가로 VS Code 내에서 원활하게 작동해야 합니다.

지원되는 인증 방법은 다음과 같습니다:

* 기본
* 다이제스트
* NTLM
* 협상

인증된 HTTP 프록시 뒤에서 VS Code를 사용할 때 다음 인증 팝업이 나타나야 합니다:

![proxy](images/network/proxy.png)

SOCKS5 프록시 인증 지원은 아직 구현되지 않았으므로, [Chromium의 이슈 트래커](https://bugs.chromium.org/p/chromium/issues/detail?id=256785)에서 해당 문제를 확인할 수 있습니다.

VS Code 내의 HTTP 프록시 인증에 대해 더 읽으려면 [Chromium HTTP 인증](https://www.chromium.org/developers/design-documents/http-authentication)을 참조하세요.

### SSL 인증서 {#ssl-certificates}

종종 HTTPS 프록시는 들어오는 요청의 SSL 인증서를 재작성합니다. Chromium은 신뢰하지 않는 인증서로 서명된 응답을 거부하도록 설계되었습니다. SSL 신뢰 문제에 직면한 경우, 다음과 같은 몇 가지 옵션이 있습니다:

* Chromium은 OS의 인증서 신뢰 인프라를 사용하므로, 선호되는 옵션은 프록시의 인증서를 OS의 신뢰 체인에 추가하는 것입니다. 자세한 내용은 [Chromium 루트 인증서 정책](https://www.chromium.org/Home/chromium-security/root-ca-policy) 문서를 참조하세요.
* 프록시가 `localhost`에서 실행되는 경우, 항상 [--allow-insecure-localhost](https://peter.sh/experiments/chromium-command-line-switches/#allow-insecure-localhost) 명령줄 플래그를 시도할 수 있습니다.
* 모든 방법이 실패할 경우, [--ignore-certificate-errors](https://peter.sh/experiments/chromium-command-line-switches/#ignore-certificate-errors) 명령줄 플래그를 사용하여 VS Code에 모든 인증서 오류를 무시하도록 지시할 수 있습니다. **경고:** 이는 **위험**하며 **권장되지 않습니다**, 보안 문제를 초래할 수 있습니다.

## 레거시 프록시 서버 지원 {#legacy-proxy-server-support}

확장 프로그램은 아직 VS Code가 지원하는 것과 동일한 프록시 지원을 받지 못합니다. 이 문제의 진행 상황은 [GitHub](https://github.com/microsoft/vscode/issues/12588)에서 확인할 수 있습니다.

확장 프로그램과 유사하게, 몇 가지 다른 VS Code 기능도 아직 프록시 네트워킹을 완전히 지원하지 않습니다. 즉, CLI 인터페이스입니다. CLI 인터페이스는 명령 프롬프트나 터미널에서 `code --install-extension vscodevim.vim`을 실행할 때 얻는 것입니다. 이 문제의 진행 상황은 [GitHub](https://github.com/microsoft/vscode/issues/29910)에서 확인할 수 있습니다.

이 두 가지 제약으로 인해 `setting(http.proxy)`, `setting(http.proxyStrictSSL)` 및 `setting(http.proxyAuthorization)` 변수는 여전히 VS Code의 설정의 일부이지만, 이 두 가지 시나리오에서만 존중됩니다.

## 문제 해결 {#troubleshooting}

VS Code에서 네트워킹 문제를 해결하는 데 도움이 될 수 있는 유용한 링크는 다음과 같습니다:

* [네트워크 설정](https://www.chromium.org/developers/design-documents/network-settings)
* [네트워크 프록시 문제 디버깅](https://www.chromium.org/developers/design-documents/network-stack/debugging-net-proxy)
* [Chrome에서 SOCKS 프록시 서버 구성](https://www.chromium.org/developers/design-documents/network-stack/socks-proxy)
* [프록시 설정 및 대체(Windows)](https://www.chromium.org/developers/design-documents/network-stack/proxy-settings-fallback)
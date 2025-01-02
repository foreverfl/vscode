---
Order: 13
Area: java
TOCTitle: 확장
ContentId: 6076911c-276b-41a3-8510-0022c03c0ef6
PageTitle: Visual Studio Code용 Java 확장
DateApproved: 1/4/2022
MetaDescription: Visual Studio Code용 인기 있는 Java 확장
---

# Visual Studio Code용 Java 확장 {#java-extensions-for-visual-studio-code}

Visual Studio Code 주변의 훌륭한 Java 커뮤니티 덕분에 Java 개발 경험을 향상시키는 다양한 확장을 사용할 수 있습니다.

:::tip
확장을 설치하고 관리하는 방법을 알아보려면 일반적인 [VS Code 확장 문서](/docs/editor/extension-marketplace.md)를 참조하세요.
:::

이 주제에서는 다양한 Java 개발 시나리오에 도움이 되는 인기 있는 확장 목록을 추천합니다.

## 기본 Java 개발 {#fundamental-java-development}

Visual Studio Code에서 핵심 Java 개발 경험(Java 코드 자동 완성, Java 애플리케이션 실행/디버깅/테스트, Java 프로젝트 관리 등 포함)을 찾고 계시다면 [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)을 추천드립니다. 이 확장 팩에는 기본 Java 개발을 위한 인기 있는 Java 확장 목록이 포함되어 있습니다:

1. [Language Support for Java™ by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.java)
2. [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug)
3. [Test Runner for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test)
4. [Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven)
5. [Project Manager for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency)
6. [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

<button><a class="install-extension-btn" href="vscode:extension/vscjava.vscode-java-pack">Extension Pack for Java 설치하기</a></button>

이 확장 팩을 시작하려면 [Java 시작하기](/docs/java/java-tutorial.md) 튜토리얼을 방문하세요.

코드의 품질과 보안 문제를 감지하는 [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode) 확장도 설치할 수 있습니다.

## Spring Boot 확장 {#spring-boot-extensions}

Spring Boot는 Java 개발자들 사이에서 매우 인기 있는 오픈 소스, 마이크로서비스 기반 Java 웹 프레임워크입니다. VMware와 Microsoft는 Spring Boot 개발을 위한 훌륭한 확장을 제공합니다.

다음 확장을 포함하는 [Spring Boot Extension Pack](https://marketplace.visualstudio.com/items?itemName=vvmware.vscode-boot-dev-pack)을 설치하는 것을 추천합니다:

1. [Spring Boot Tools](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-spring-boot)
2. [Spring Initializr Java Support](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-initializr)
3. [Spring Boot Dashboard](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-boot-dashboard)

<button><a class="install-extension-btn" href="vscode:extension/vmware.vscode-boot-dev-pack">Spring Boot Extension Pack 설치하기</a></button>

더 많은 Spring Boot 관련 정보는 [Spring Boot](/docs/java/java-spring-boot.md) 페이지에서 찾을 수 있습니다.

## Java용 Gradle {#gradle-for-java}

Visual Studio Code는 [Java용 Gradle](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle) 확장을 통해 Gradle 지원을 제공합니다. 이 확장 사용 방법에 대해 자세히 알아보려면 빌드 도구 페이지의 [Gradle 섹션](/docs/java/java-build.md#gradle)을 방문하세요.

## 애플리케이션 서버(Tomcat / Jetty / 등) {#application-servers}

[Community Server Connectors](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-community-server-connector)는 Tomcat과 Jetty와 같은 애플리케이션 서버를 위한 훌륭한 확장입니다.

Visual Studio Code에서 Java 애플리케이션 서버로 작업하는 방법에 대해 자세히 알아보려면 [애플리케이션 서버](/docs/java/java-tomcat-jetty.md) 페이지를 참조하세요.

## MicroProfile / Quarkus {#microprofile-quarkus}

Eclipse MicroProfile과 Quarkus에 대한 지원은 다음 확장을 통해 제공됩니다:

- [Extension pack for MicroProfile](https://marketplace.visualstudio.com/items?itemName=MicroProfile-Community.vscode-microprofile-pack)
- [Quarkus](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-quarkus)

## 다른 Java IDE용 키맵 {#keymaps-for-other-java-ides}

다른 Java IDE의 키보드 단축키에 익숙한 개발자를 위한 커뮤니티의 몇 가지 확장이 있습니다.

- [Eclipse Keymap](https://marketplace.visualstudio.com/items?itemName=alphabotsec.vscode-eclipse-keybindings)
- [IntelliJ IDEA Keybindings](https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings)

키맵 확장은 다른 IDE나 에디터의 키보드 단축키를 VS Code에 적용하므로 새로운 키보드 단축키를 배우지 않아도 됩니다.

## 원격 개발 및 컨테이너 지원 {#remote-development-and-container-support}

원격 및 컨테이너 개발 시나리오에 유용한 다른 확장도 몇 가지 추천드립니다.

- [Remote Development](/docs/remote/remote-overview.md) 확장을 사용하면 VS Code로 컨테이너, 원격 머신 또는 Windows Subsystem for Linux에 액세스할 수 있습니다.
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) 확장을 사용하여 도커 이미지를 빌드하고 이미지 레지스트리로 작업할 수 있습니다.
- [Kubernetes](https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-tools) 확장은 클러스터와 내부 노드를 관리하기 위한 탐색기 화면을 제공합니다. 또한 Kubernetes 매니페스트 파일 편집을 위한 고급 구문 지원을 제공합니다.
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)는 동일한 코드 베이스에서 다른 사람과 협업해야 할 때 사용하기 좋은 도구입니다.

## Visual Studio Code의 Azure {#azure-on-visual-studio-code}

Visual Studio Code용 Azure 확장은 Azure와 클라우드와의 원활한 통합을 제공합니다. 추천드리고 싶은 Azure 확장이 몇 가지 있습니다.

### 팀 개발 {#team-development}

- [Azure Repos](https://marketplace.visualstudio.com/items?itemName=ms-vsts.team) 확장을 사용하면 Azure DevOps 서버에 쉽게 연결할 수 있어, TFVC 또는 Git 소스 저장소의 빌드, 풀 리퀘스트 및 작업 항목을 쉽게 모니터링할 수 있습니다.

### 사물 인터넷 {#internet-of-things}

- VS Code용 [Azure IoT Toolkit](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.azure-iot-toolkit)은 [IoT 애플리케이션을 Azure](https://learn.microsoft.com/azure/?product=iot)에 개발하고 연결하는 것을 쉽게 만들어줍니다. 이 확장을 사용하면 Azure IoT Hub와 상호 작용하고, Azure IoT Hub에 연결된 장치를 관리하며, Azure IoT Hub용 코드 스니펫으로 개발할 수 있습니다.

### 일반 도구 {#general-tools}

- [Azure Tools Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack)은 애플리케이션에 Azure 서비스를 쉽게 검색하고 상호 작용할 수 있게 해주는 풍부한 확장 세트를 제공합니다.
- [Azure Resource Manager Tools](https://marketplace.visualstudio.com/items?itemName=msazurermtools.azurerm-vscode-tools)는 Azure Resource Manager 배포 템플릿과 템플릿 언어 표현식을 위한 풍부한 편집 경험을 제공합니다. 예를 들어, TLE 함수 이름, 매개변수 참조에 대한 IntelliSense, 시그니처 도움말, 정의로 이동, 정의 미리보기, 참조 미리보기뿐만 아니라 오류와 경고도 제공하여 VS Code에서 Azure Resource Manager 템플릿을 빠르고 쉽게 작성할 수 있게 합니다.

더 많은 Azure 확장을 찾으려면 [Azure Extensions](/docs/azure/extensions.md)을 방문하세요.

## 다른 Java 확장 검색 {#search-for-other-java-extensions}

위의 확장이 요구 사항을 충족하지 않는 경우 Visual Studio Code 내에서 다른 Java 관련 확장을 검색할 수도 있습니다. 다음은 그 단계입니다:

1. **확장** 뷰로 이동합니다(`Ctrl+Shift+X`).
2. 확장 목록을 "java"를 입력하여 필터링합니다.

![Java 확장](images/extensions/extensions.png)

우리는 또한 기존 확장 프로그램에 대한 기여를 환영하며, 마켓플레이스에서 찾고자 하는 것을 찾을 수 없는 경우 새로운 Java 확장을 만들어 주시기를 바랍니다.

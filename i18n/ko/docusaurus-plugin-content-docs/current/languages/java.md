---
Order: 10
Area: languages
TOCTitle: Java
ContentId: 080fd21f-92b7-4491-9ab2-6eb9a3bb0793
PageTitle: Visual Studio Code에서의 Java
DateApproved: 03/05/2025
MetaDescription: Java를 위한 Visual Studio Code 편집기 기능(코드 완성, 디버깅, 스니펫, 린팅)에 대해 알아보세요.
---

# Visual Studio Code에서의 Java {#java-in-visual-studio-code}

Visual Studio Code에서 Java에 대한 지원은 다양한 [확장 프로그램](/docs/java/extensions.md)을 통해 제공됩니다. 이러한 확장 프로그램은 VS Code의 강력한 기능과 결합되어 경량화되고 성능이 뛰어난 코드 편집기를 제공하며, 가장 일반적인 Java 개발 기술을 지원합니다.

이 문서에서는 Java 개발자를 위한 Visual Studio Code의 다양한 기능에 대한 개요를 제공합니다. Visual Studio Code를 사용하여 Java 프로그램을 편집하고 실행하며 디버깅하는 방법에 대한 간단한 안내는 아래의 **Java 시작하기 튜토리얼** 버튼을 사용하세요.

<a class="next-topic-btn" href="/docs/java/java-tutorial">Java 시작하기 튜토리얼</a>

## 개요 {#overview}

VS Code는 코드 완성, 리팩토링, 린팅, 포맷팅, 코드 스니펫과 같은 필수 언어 기능을 제공하며, 편리한 디버깅 및 단위 테스트 지원도 포함되어 있습니다. VS Code는 Maven, Tomcat, Jetty, Spring Boot와 같은 도구 및 프레임워크와 통합됩니다. Visual Studio Code의 강력한 기능을 활용하여 Java 개발자는 빠른 코드 편집과 전체 디버깅 및 테스트 사이클을 위한 훌륭한 도구를 얻을 수 있습니다. 다음과 같은 도구를 찾고 있다면 Java 작업에 적합한 선택입니다:

- 빠르고, 경량이며, 무료이고 오픈 소스입니다.
- Java뿐만 아니라 많은 다른 언어를 지원합니다.
- 복잡한 IDE를 설치하고 배우지 않고도 Java 여정을 시작할 수 있도록 도와줍니다.
- 인기 있는 프레임워크, 컨테이너 도구 및 클라우드 통합을 포함한 훌륭한 마이크로서비스 지원을 제공합니다.
- [Visual Studio Live Share](https://visualstudio.microsoft.com/services/live-share)와 같은 팀 기반 협업 기능을 제공합니다.
- IntelliSense 및 기타 코드 인식 편집 기능을 통해 생산성을 향상시킵니다.

## Visual Studio Code에서 Java 설치하기 {#install-visual-studio-code-for-java}

빠르게 설정할 수 있도록 **Java용 코딩 팩**을 사용하는 것을 권장합니다. 이는 VS Code, Java Development Kit (JDK), 그리고 Microsoft에서 제안하는 확장 프로그램 모음입니다. 코딩 팩은 기존 개발 환경을 수정하는 데에도 사용할 수 있습니다.

<a class="install-extension-btn" onclick="pushCodingPackEvent('java', 'win')" href="https://aka.ms/vscode-java-installer-win">Windows용 Java 코딩 팩 설치</a>

<a class="install-extension-btn" onclick="pushCodingPackEvent('java', 'mac')" href="https://aka.ms/vscode-java-installer-mac">macOS용 Java 코딩 팩 설치</a><br />

> **참고**: Java 코딩 팩은 Windows와 macOS에서만 사용할 수 있습니다. 다른 운영 체제의 경우 JDK, VS Code 및 Java 확장을 수동으로 설치해야 합니다.

이미 VS Code를 설치했으며 Java 지원을 추가하고 싶다면, Microsoft에서 제안하는 확장 프로그램 모음인 [Java용 확장 팩](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)을 사용하는 것을 권장합니다:

1. [Red Hat의 Java™ 언어 지원](https://marketplace.visualstudio.com/items?itemName=redhat.java)
2. [Java 디버거](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug)
3. [Java 테스트 러너](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test)
4. [Java용 Maven](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven)
5. [Java용 프로젝트 관리자](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency)
6. [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

<a class="install-extension-btn" href="vscode:extension/vscjava.vscode-java-pack">Java용 확장 팩 설치</a>

또는 인기 있는 Java 확장을 직접 설치하여 VS Code에 Java 언어 지원을 추가할 수 있습니다.

> [VS Code 다운로드](/download) - 아직 VS Code를 다운로드하지 않았다면, 플랫폼(Windows, macOS, Linux)에 맞게 빠르게 설치하세요.

자신의 필요에 맞게 선택할 수 있는 다른 인기 있는 Java 확장도 있습니다:

1. [Spring Boot 확장 팩](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-boot-dev-pack)
2. [Java용 Gradle](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle)
3. [커뮤니티 서버 커넥터](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-community-server-connector) (Apache Felix, Karaf, Tomcat, Jetty 등)
4. [서버 커넥터](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-server-connector) (Red Hat 서버, 예: Wildfly)
5. [MicroProfile용 확장 팩](https://marketplace.visualstudio.com/items?itemName=MicroProfile-Community.vscode-microprofile-pack)
6. [CheckStyle](https://marketplace.visualstudio.com/items?itemName=shengchen.vscode-checkstyle)
7. [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)

VS Code 주변의 훌륭한 Java 커뮤니티 덕분에 목록은 여기서 끝나지 않습니다. VS Code 내에서 더 많은 Java 확장을 쉽게 검색할 수 있습니다:

1. **확장 프로그램** 뷰로 이동합니다 (`kb(workbench.view.extensions)`).
2. "java"를 입력하여 확장 프로그램 목록을 필터링합니다.

이 문서에서는 이러한 Java 확장 프로그램에 포함된 주요 기능 중 일부를 설명합니다.

> **참고**: Java 개발을 시작하는 데 도움이 되도록 [Java 일반 프로필 템플릿](/docs/editor/profiles.md#java-general-profile-template)을 사용하여 유용한 확장을 설치할 수 있습니다. 프로필에 대해 더 알아보고, 프로필이 다양한 프로그래밍 언어와 워크플로우우에 맞게 편집기를 빠르게 재구성하는 방법에 대해서는 [VS Code의 프로필](/docs/editor/profiles.md)에서 확인하세요.

## 시작하기 {#getting-started}

**참고:** Windows에서 VS Code를 사용하고 Windows Subsystem for Linux를 활용하고 싶다면, [WSL에서 개발하기](/docs/remote/wsl)를 참조하세요.

### Java Development Kit (JDK) 설치하기 {#install-a-java-development-kit-jdk}

Java Development Kit (JDK)는 Java 애플리케이션 개발에 사용되는 소프트웨어 개발 환경입니다. Visual Studio Code 내에서 Java를 실행하려면 JDK를 설치해야 합니다. [Java용 확장 팩](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)은 Java 버전 1.8 이상을 지원합니다.

다음 출처 중 하나에서 JDK를 설치하는 것을 고려해 보시기 바랍니다:

- [Amazon Corretto](https://aws.amazon.com/corretto)
- [Azul Zulu](https://www.azul.com/downloads/?package=jdk)
- [Eclipse Adoptium의 Temurin](https://adoptium.net/)
- [IBM Semeru Runtimes](https://developer.ibm.com/languages/java/semeru-runtimes)
- [Microsoft OpenJDK 빌드](https://www.microsoft.com/openjdk)
- [Oracle Java SE](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Red Hat OpenJDK 빌드](https://developers.redhat.com/products/openjdk/download)
- [SapMachine](https://sapmachine.io)

> **참고**: 여러 개의 JDK가 설치되어 있고 프로젝트에 특정 JDK 버전을 사용해야 하는 경우, [프로젝트에 대한 런타임 구성](/docs/java/java-project.md#configure-runtime-for-projects)을 참조하세요. Java 미리 보기 기능을 활성화하려면 [새 Java 버전으로 VS Code를 사용하는 방법](/docs/java/java-faq.md#how-can-i-use-visual-studio-code-with-new-java-versions)을 참조하세요.

Java에 새로 입문했거나 VS Code에 익숙하지 않은 개발자를 위해, 확장에서 몇 가지 팁을 제공합니다. [Java용 확장 팩](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)을 설치한 후, VS Code의 명령 팔레트에서 **Java: 초보자를 위한 팁** 명령을 사용하여 팁을 확인할 수 있습니다.

명령 팔레트를 열고 (`kb(workbench.action.showCommands)`) "java tips"를 입력하여 명령을 선택하세요.

![Java 시작하기](images/java/beginner-tips.png)

## Java 소스 파일 작업하기 {#working-with-java-source-files}

VS Code를 사용하여 프로젝트를 생성하지 않고도 Java 소스 파일을 읽고, 쓰고, 실행하고, 디버깅할 수 있습니다. Java용 VS Code는 경량 모드와 표준 모드의 두 가지 모드를 지원합니다. 경량 모드는 소스 파일만 다루는 시나리오에 적합합니다. 전체 규모의 프로젝트로 작업하려면 표준 모드가 필요합니다. 필요할 때 경량 모드에서 표준 모드로 쉽게 전환할 수 있습니다. 자세한 내용은 [경량 모드](/docs/java/java-project.md#lightweight-mode)를 참조하세요.

## Java 프로젝트 작업하기 {#working-with-java-projects}

VS Code에서 Java로 작업하기 위해 이해해야 할 세 가지 사항이 있습니다:

1. VS Code는 작업 공간을 어떻게 처리합니까?
2. VS Code는 Java를 어떻게 처리합니까?
3. VS Code는 Java가 포함된 작업 공간을 어떻게 처리합니까?

### VS Code 작업 공간 {#vs-code-workspaces}

Visual Studio Code에서 "작업 공간"은 하나 이상의 파일 시스템 폴더(및 그 하위 폴더)의 모음과 해당 "작업 공간"이 VS Code에서 열릴 때 적용되는 모든 VS Code 구성 요소를 의미합니다. VS Code에는 "폴더 작업 공간"과 "다중 루트 작업 공간"의 두 가지 종류의 "작업 공간"이 있습니다.

"폴더 작업 공간"은 VS Code에서 파일 시스템 폴더(디렉터리)를 열 때 VS Code에 의해 표시됩니다.

"다중 루트 작업 공간"은 파일 시스템의 서로 다른 부분에서 여러 폴더(디렉터리)를 참조할 수 있으며, VS Code는 작업 공간의 폴더 내용을 [파일 탐색기](/docs/getstarted/userinterface.md#basic-layout)에서 함께 표시합니다. 자세한 내용은 [다중 루트 작업 공간](/docs/editor/workspaces/multi-root-workspaces.md)을 참조하세요.

### VS Code의 Java 프로젝트 {#java-projects-in-vs-code}

IntelliJ IDEA, NetBeans 또는 Eclipse와 같은 IDE와는 달리, "Java 프로젝트" 개념은 전적으로 확장 프로그램에 의해 제공되며, 기본 VS Code의 핵심 개념이 아닙니다. VS Code에서 "Java 프로젝트"로 작업할 때는 해당 프로젝트 파일로 작업하기 위해 필요한 확장을 설치해야 합니다.

예를 들어, Maven, Eclipse 및 Gradle Java 프로젝트는 [Red Hat의 Java™ 언어 지원](https://marketplace.visualstudio.com/items?itemName=redhat.java)을 통해 지원되며, Maven 지원을 제공하는 [M2Eclipse](https://www.eclipse.org/m2e/)와 Gradle 지원을 제공하는 [Buildship](https://github.com/eclipse/buildship)을 활용합니다. 이는 [Eclipse JDT 언어 서버](https://github.com/eclipse/eclipse.jdt.ls)를 통해 이루어집니다.

[Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven)를 사용하면 [Maven Archetypes](https://maven.apache.org/guides/introduction/introduction-to-archetypes.html)에서 프로젝트를 생성하고, 작업 공간 내의 모든 Maven 프로젝트를 탐색하며, 내장 탐색기에서 Maven 목표를 쉽게 실행할 수 있습니다. 프로젝트는 [Java용 프로젝트 관리자](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency) 확장을 사용하여 생성하고 관리할 수도 있습니다.

<video autoplay loop muted playsinline controls title="Java 프로젝트 관리자 확장에서 Java 프로젝트 보기 사용하기">
  <source src="/docs/languages/java/package-viewer.mp4" type="video/mp4" />
</video>

Visual Studio Code는 Java 프로젝트 외부의 독립적인 Java 파일 작업도 지원하며, 이는 [Java 시작하기](/docs/java/java-tutorial.md) 튜토리얼에서 설명됩니다.

### Java 프로젝트가 포함된 VS Code 작업 공간 {#vs-code-workspaces-that-contain-java-projects}

필요한 Java 확장이 설치되어 있다고 가정할 때, Java 아티팩트가 포함된 VS Code 작업 공간을 열면 해당 확장이 이러한 아티팩트를 이해하고 작업할 수 있는 옵션을 제공합니다.

Java 프로젝트 지원에 대한 자세한 내용은 [Visual Studio Code의 Java 프로젝트 관리](/docs/java/java-project.md) 및 [Java 빌드 도구](/docs/java/java-build.md)를 참조하세요.

## 편집하기 {#editing}

### 코드 탐색 {#code-navigation}

Visual Studio Code의 Java는 기호 검색, 정의 미리 보기, 정의로 이동과 같은 소스 코드 탐색 기능도 지원합니다. [Spring Boot 도구](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-spring-boot) 확장은 [Spring Boot](https://projects.spring.io/spring-boot/) 프로젝트에 대한 향상된 탐색 및 코드 완성 지원을 제공합니다.

VS Code의 주요 장점 중 하나는 속도입니다. Java 소스 파일이나 폴더를 열면 몇 초 내에 [경량 모드](/docs/java/java-project.md#lightweight-mode)의 도움으로 코드베이스를 개요 보기로 탐색할 수 있으며, **정의로 이동** 및 **참조로 이동**과 같은 명령을 사용할 수 있습니다. 이는 프로젝트를 처음 열 때 특히 유용합니다.

### 코드 완성 {#code-completion}

[IntelliSense](/docs/editor/intellisense.md)는 모든 파일에서의 지능형 코드 완성(문맥 내 메서드 및 변수 제안)을 포함한 언어 기능에 대한 일반적인 용어입니다. VS Code는 [Red Hat의 Java™ 언어 지원](https://marketplace.visualstudio.com/items?itemName=redhat.java)을 통해 Java에 대한 코드 완성과 IntelliSense를 지원합니다. 또한, 가장 많이 사용할 가능성이 있는 항목을 완성 목록의 상단에 배치하여 AI 지원 IntelliSense인 [IntelliCode](https://visualstudio.microsoft.com/services/intellicode/)를 제공합니다.

<video autoplay loop muted playsinline controls title="Java 인라인 코드 완성과 호버">
  <source src="/docs/languages/java/intellisense.mp4" type="video/mp4" />
</video>

### AI로 완성 향상하기 {#enhance-completions-with-ai}

[GitHub Copilot](https://copilot.github.com/)은 코드를 더 빠르고 스마트하게 작성할 수 있도록 도와주는 AI 기반 코드 완성 도구입니다. VS Code에서 [GitHub Copilot 확장 프로그램](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)을 사용하여 코드를 생성하거나 생성된 코드에서 학습할 수 있습니다.

[![VS Code 마켓플레이스의 GitHub Copilot 확장](images/java/copilot-extension.png)](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)

GitHub Copilot은 여러 언어와 다양한 프레임워크에 대한 제안을 제공하며, 특히 Python, JavaScript, TypeScript, Ruby, Go, C# 및 C++에 잘 작동합니다.

Copilot을 시작하는 방법에 대한 자세한 내용은 [Copilot 문서](/docs/editor/github-copilot.md)를 참조하세요.

## 코드 스니펫 {#code-snippets}

Visual Studio Code는 클래스/인터페이스, syserr, sysout, if/else, try/catch, static main 메서드와 같은 인기 있는 Java 코드 스니펫을 지원하여 생산성을 높입니다. Java 언어 서버의 정보를 사용하여 선택하는 동안 코드 스니펫의 미리 보기도 제공합니다.

예를 들어, "**sout**" 또는 "**sysout**"을 입력하면 `System.out.println()`에 대한 코드 스니펫이 생성됩니다.<br />
유사하게, "**main**" 또는 "**psvm**"을 입력하면 `public static void main(String[] args) {}`에 대한 코드 스니펫이 생성됩니다.

우리는 다양한 코드 스니펫 단축키와 후행 완성 기능을 지원합니다. 전체 목록을 보려면 [코드 스니펫](/docs/java/java-editing.md#code-snippets)을 참조하세요. VS Code는 또한 다양한 [리팩토링](/docs/java/java-refactoring.md) 및 [린팅](/docs/java/java-linting.md) 기능을 지원합니다.

![코드 스니펫](images/java/code-snippet.png)

## 디버깅 {#debugging}

[Java 디버거](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug)는 [Java 디버그 서버](https://github.com/microsoft/java-debug)를 기반으로 한 경량 Java 디버거입니다. 이는 [Red Hat의 Java™ 언어 지원](https://marketplace.visualstudio.com/items?itemName=redhat.java)과 함께 작동하여 사용자가 Visual Studio Code 내에서 Java 코드를 디버깅할 수 있도록 합니다.

디버깅 세션을 시작하는 것은 쉽습니다: `main()` 함수의 CodeLens에서 **실행|디버그** 버튼을 클릭하거나 `kb(workbench.action.debug.start)`를 누르세요. 디버거가 자동으로 적절한 구성을 생성합니다.

<video autoplay loop muted playsinline controls title="중단점 설정, 디버깅 시작 및 핫 코드 교체 사용하기">
  <source src="/docs/languages/java/resolve-main.mp4" type="video/mp4" />
</video>

비록 경량이지만, Java 디버거는 표현식 평가, 조건부 중단점 및 [핫 코드 교체](/docs/java/java-debugging.md#hot-code-replace)와 같은 고급 기능을 지원합니다. 디버깅 관련 정보는 [Java 디버깅](/docs/java/java-debugging.md)을 방문하세요.

## 테스트 {#testing}

[Test Runner for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test) 확장의 지원을 통해 JUnit 및 TestNG 테스트 케이스를 쉽게 실행, 디버깅 및 관리할 수 있습니다.

<video autoplay loop muted playsinline controls title="테스트 실행 및 실패한 테스트 조사하기">
  <source src="/docs/languages/java/testng.mp4" type="video/mp4" />
</video>

테스트에 대한 자세한 내용은 [Java 테스트](/docs/java/java-testing.md)를 읽어보세요.

## Spring Boot, Tomcat 및 Jetty {#spring-boot-tomcat-and-jetty}

VS Code에서 Java 생산성을 더욱 향상시키기 위해, [Spring Boot](https://projects.spring.io/spring-boot/), [Tomcat](https://tomcat.apache.org/) 및 [Jetty](https://www.eclipse.org/jetty/)와 같은 대부분의 인기 있는 프레임워크 및 도구에 대한 확장이 커뮤니티에 의해 만들어졌습니다.

Tomcat 및 Jetty에 대한 지원과 VS Code와 함께하는 다른 애플리케이션 서버에 대한 자세한 내용은 [애플리케이션 서버](/docs/java/java-tomcat-jetty.md)를 참조하세요.

[Spring Boot](https://projects.spring.io/spring-boot/) 지원은 [VMware](https://marketplace.visualstudio.com/search?term=publisher%3A%22VMware%22&target=VSCode&category=All%20categories&sortBy=Relevance)에서 제공됩니다. Microsoft에서 제공하는 [Spring Initializr Java 지원](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-initializr) 및 [Spring Boot 대시보드](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-boot-dashboard) 확장도 있어 Visual Studio Code에서 Spring Boot 경험을 더욱 향상시킬 수 있습니다.

VS Code에서 Spring Boot 지원에 대한 자세한 내용은 [VS Code의 Spring Boot](/docs/java/java-spring-boot.md)를 참조하고, Azure에 Spring 앱을 배포하는 방법에 대한 자세한 내용은 [Azure 웹 앱에 배포](/docs/java/java-webapp.md) 또는 [Azure Spring Apps에 배포](/docs/java/java-spring-apps.md)를 참조하세요.

## 다음 단계 {#next-steps}

VS Code에서 Java에 대해 더 알아보세요:

- [Java 시작하기](/docs/java/java-tutorial.md)
- [코드 편집 및 탐색](/docs/java/java-editing.md)
- [Java 디버깅](/docs/java/java-debugging.md)
- [Java 테스트](/docs/java/java-testing.md)
- [Java 프로젝트 관리](/docs/java/java-project.md)
- [VS Code와 함께하는 Spring Boot](/docs/java/java-spring-boot.md)
- [애플리케이션 서버](/docs/java/java-tomcat-jetty.md)
- [Azure와 VS Code](/docs/java/java-on-azure.md)

Visual Studio Code에 대해 더 알아보세요:

- [기본 편집](/docs/editor/codebasics.md) - 강력한 VS Code 편집기에 대해 알아보세요.
- [코드 탐색](/docs/editor/editingevolved.md) - 소스 코드를 빠르게 이동하세요.
- [작업](/docs/editor/tasks.md) - 작업을 사용하여 프로젝트를 빌드하고 더 많은 작업을 수행하세요.
- [디버깅](/docs/editor/debugging.md) - 프로젝트와 함께 디버거를 사용하는 방법을 알아보세요.
---
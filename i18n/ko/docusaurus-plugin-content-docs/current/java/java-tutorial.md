---
Order: 1
Area: java
TOCTitle: 시작하기
ContentId: 12d8264b-643f-4745-a7ea-8433dedb1331
PageTitle: Visual Studio Code에서 Java 시작하기
DateApproved: 1/4/2022
MetaDescription: Visual Studio Code 편집기에서 기본 Java 언어 지원을 보여주는 Java 튜토리얼
---

# Visual Studio Code에서 Java 시작하기 {#getting-started-with-java-in-vs-code}

이 튜토리얼에서는 Visual Studio Code를 사용하여 Hello World 프로그램을 작성하고 실행하는 방법을 보여줍니다. 또한 이 섹션의 다른 문서를 읽어보면서 탐색할 수 있는 몇 가지 고급 기능도 다룹니다.

VS Code에서 Java에 사용할 수 있는 기능에 대한 개요는 [Java 언어 개요](/docs/languages/java.md)를 참조하세요.

이 튜토리얼을 진행하는 동안 문제가 발생하면 [문제](https://github.com/microsoft/vscode-java-pack/issues)를 입력하여 저희에게 연락할 수 있습니다.

## Java 개발을 위한 VS Code 설정하기 {#setting-up-vs-code-for-java-development}

### Java를 위한 코딩 팩 {#coding-pack-for-java}

빠르게 설정할 수 있도록 **Java를 위한 코딩 팩**을 설치할 수 있습니다. 이 코딩 팩에는 VS Code, Java Development Kit (JDK), 필수 Java 확장 프로그램이 포함되어 있습니다. 코딩 팩은 깨끗한 설치로 사용할 수 있으며, 기존 개발 환경을 업데이트하거나 복구하는 데에도 사용할 수 있습니다.

<a class="install-extension-btn" onclick="pushCodingPackEvent('java', 'win')" href="https://aka.ms/vscode-java-installer-win">Windows용 Java 코딩 팩 설치</a>

<a class="install-extension-btn" onclick="pushCodingPackEvent('java', 'mac')" href="https://aka.ms/vscode-java-installer-mac">macOS용 Java 코딩 팩 설치</a><br />

> **참고**: Java 코딩 팩은 Windows와 macOS에서만 사용할 수 있습니다. 다른 운영 체제의 경우 JDK, VS Code 및 Java 확장을 수동으로 설치해야 합니다.

### 확장 프로그램 설치하기 {#installing-extensions}

기존 VS Code 사용자라면 [Java용 확장 팩](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)을 설치하여 Java 지원을 추가할 수 있습니다. 이 확장 팩에는 다음과 같은 확장이 포함되어 있습니다:

- [Red Hat의 Java™ 언어 지원](https://marketplace.visualstudio.com/items?itemName=redhat.java)
- [Java 디버거](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug)
- [Java 테스트 러너](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test)
- [Java용 Maven](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven)
- [Java용 프로젝트 관리자](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency)
- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

<a class="install-extension-btn" href="vscode:extension/vscjava.vscode-java-pack">Java용 확장 팩 설치</a>

[Java용 확장 팩](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)은 빠른 시작 가이드와 코드 편집 및 디버깅에 대한 팁을 제공합니다. 또한 자주 묻는 질문에 대한 FAQ도 포함되어 있습니다. 명령 팔레트(`kb(workbench.action.showCommands)`)에서 **Java: 초보자를 위한 팁** 명령을 사용하여 가이드를 실행할 수 있습니다.

![Java 시작하기](images/java-tutorial/getting-started.png)

확장을 개별적으로 설치할 수도 있습니다. **확장 가이드**가 제공되어 도움을 드립니다. **Java: 확장 가이드** 명령으로 가이드를 실행할 수 있습니다.

이 튜토리얼에 필요한 확장은 다음과 같습니다:

- [Red Hat의 Java™ 언어 지원](https://marketplace.visualstudio.com/items?itemName=redhat.java)
- [Java 디버거](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug)

## Java Development Kit (JDK) 설치 및 설정하기 {#installing-and-setting-up-a-java-development-kit-jdk}

Visual Studio Code에서 Java를 사용하려면 로컬 환경에 Java Development Kit (JDK)를 설치해야 합니다. JDK는 Java 애플리케이션을 개발하는 데 사용되는 소프트웨어 개발 환경입니다.

### 지원되는 Java 버전 {#supported-java-versions}

[Java용 확장 팩](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)은 Java 버전 1.8 이상을 지원합니다.

> **참고**: 프로젝트에 대한 JDK를 구성하려면 [프로젝트에 대한 런타임 구성](/docs/java/java-project.md#configure-runtime-for-projects)을 참조하세요. Java 미리 보기 기능을 활성화하려면 [새 Java 버전으로 VS Code를 사용하는 방법](/docs/java/java-faq.md#how-can-i-use-visual-studio-code-with-new-java-versions)을 참조하세요.

### Java Development Kit (JDK) 설치하기 {#installing-a-java-development-kit-jdk}

JDK를 설치한 적이 없다면 다음 소스 중 하나에서 선택하는 것을 권장합니다:

- [Amazon Corretto](https://aws.amazon.com/corretto)
- [Azul Zulu](https://www.azul.com/downloads/?package=jdk)
- [Eclipse Adoptium의 Temurin](https://adoptium.net/)
- [IBM Semeru Runtimes](https://developer.ibm.com/languages/java/semeru-runtimes)
- [Microsoft Build of OpenJDK](https://www.microsoft.com/openjdk)
- [Oracle Java SE](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Red Hat의 OpenJDK 빌드](https://developers.redhat.com/products/openjdk/download)
- [SapMachine](https://sapmachine.io)

## 소스 코드 파일 만들기 {#creating-a-source-code-file}

Java 프로그램을 위한 폴더를 만들고 VS Code로 해당 폴더를 엽니다. 그런 다음 VS Code에서 새 파일을 만들고 `Hello.java`라는 이름으로 저장합니다. 해당 파일을 열면 Java Language Server가 자동으로 로딩을 시작하며, 상태 표시줄 오른쪽에 로딩 아이콘이 있는 언어 상태 항목이 표시됩니다. 로딩이 완료되면 언어 상태 항목 위에 마우스를 올려 로딩 프로세스가 성공적으로 완료되었음을 확인할 수 있습니다. 상태 표시줄에 상태 항목을 고정할 수도 있습니다.

<video src="images/java-tutorial/JavaHelloWorld.Standalone.mp4" autoplay loop muted playsinline controls title="소스 코드 파일 만들기">
</video>

> **참고**: VS Code에서 폴더를 열지 않고 Java 파일을 열면 Java Language Server가 제대로 작동하지 않을 수 있습니다.

VS Code는 새 유형에 대한 올바른 패키지를 자동으로 파악하고 새 파일을 템플릿으로 채우려고 합니다. [새 파일 만들기](/docs/java/java-editing.md#create-new-file)를 참조하세요.

**Java: Java 프로젝트 만들기** 명령을 사용하여 Java 프로젝트를 만들 수도 있습니다. **명령 팔레트**(`kb(workbench.action.showCommands)`)를 열고 `java`를 입력하여 이 명령을 검색합니다. 명령을 선택하면 프로젝트의 위치와 이름을 입력하라는 메시지가 표시됩니다. 이 명령에서 빌드 도구를 선택할 수도 있습니다.

<video src="images/java-tutorial/JavaHelloWorld.Project.mp4" autoplay loop muted playsinline controls title="Java 프로젝트 만들기">
</video>

Visual Studio Code는 더 복잡한 Java 프로젝트도 지원합니다 — [프로젝트 관리](/docs/java/java-project.md)를 참조하세요.

## 소스 코드 편집하기 {#editing-source-code}

코드 스니펫을 사용하여 클래스와 메서드를 스캐폴딩할 수 있습니다. VS Code는 코드 완성을 위한 IntelliSense와 다양한 리팩토링 방법도 제공합니다.

<video src="images/java-tutorial/edit-code.mp4" autoplay loop muted playsinline controls title="소스 코드 편집하기">
</video>

Java 편집에 대한 자세한 내용은 [Java 편집](/docs/java/java-editing.md)을 참조하세요.

## 프로그램 실행 및 디버깅하기 {#running-and-debugging-your-program}

Java 코드를 실행하고 디버깅하려면 중단점을 설정한 후 키보드에서 `kb(workbench.action.debug.start)`를 누르거나 **실행** > **디버깅 시작** 메뉴 항목을 사용합니다. 편집기에서 **Run|Debug** CodeLens 옵션을 사용할 수도 있습니다. 코드가 컴파일된 후에는 **실행 및 디버그** 보기에서 모든 변수와 스레드를 확인할 수 있습니다.

<video src="images/java-tutorial/run-debug.mp4" autoplay loop muted playsinline controls title="프로그램 실행 및 디버깅하기">
</video>

디버거는 [핫 코드 교체](/docs/java/java-debugging.md#hot-code-replace) 및 조건부 중단점과 같은 고급 기능도 지원합니다.

자세한 내용은 [Java 디버깅](/docs/java/java-debugging.md)을 참조하세요.

## 추가 기능 {#more-features}

편집기에는 Java 작업을 지원하는 많은 기능이 있습니다.

- [Java 편집](/docs/java/java-editing.md)에서는 Java를 탐색하고 편집하는 방법에 대해 자세히 설명합니다.
- [디버깅](/docs/java/java-debugging.md)에서는 Java 디버거의 모든 주요 기능을 설명합니다.
- [테스트](/docs/java/java-testing.md)에서는 JUnit 및 TestNG 프레임워크에 대한 포괄적인 지원을 제공합니다.
- [Java 프로젝트 관리](/docs/java/java-project.md)에서는 프로젝트 뷰를 사용하고 Maven과 함께 작업하는 방법을 보여줍니다.
- [Spring Boot](/docs/java/java-spring-boot.md) 및 [Tomcat과 Jetty](/docs/java/java-tomcat-jetty.md)에서는 훌륭한 프레임워크 지원을 보여줍니다.
- [Java 웹 앱](/docs/java/java-webapp.md)에서는 VS Code에서 Java 웹 앱과 함께 작업하는 방법을 보여줍니다.
---
---
Order: 9
Area: java
TOCTitle: Spring Boot
ContentId: d37118cf-1b5b-4aee-9727-52fcfcac16bd
PageTitle: Visual Studio Code에서 Spring Boot 지원
DateApproved: 12/22/2021
MetaDescription: Visual Studio Code에서 Java 개발자를 위한 Spring Boot 확장 프로그램.
sidebar_label: Spring Boot
---

# Spring Boot in Visual Studio Code {#spring-boot-in-visual-studio-code}

Visual Studio Code는 Spring Boot 애플리케이션 개발자에게 이상적인 가벼운 개발 환경이며, 다음과 같은 유용한 VS Code 확장 프로그램이 있습니다:

* [Spring Boot Tools](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-spring-boot)
* [Spring Initializr](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-initializr)
* [Spring Boot Dashboard](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-boot-dashboard)

위의 모든 확장 프로그램이 포함된 [Spring Boot Extension Pack](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-boot-dev-pack) 설치를 권장합니다.

아래 기능을 사용할 때 문제가 발생하면, [이슈를 열어](https://github.com/microsoft/vscode-java-pack/issues) 저희에게 연락하실 수 있습니다.

## 전제 조건 {#prerequisites}

Visual Studio Code에서 Spring Boot 애플리케이션을 개발하려면 다음을 설치해야 합니다:

* [Java Development Kit (JDK)](https://www.microsoft.com/openjdk)
* [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
* [Spring Boot Extension Pack](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-boot-dev-pack)

----

- [Windows용 Java 코딩 팩 설치](https://aka.ms/vscode-java-installer-win)
- [macOS용 Java 코딩 팩 설치](https://aka.ms/vscode-java-installer-mac)

:::note
시작하는 방법에 대한 더 많은 정보는 [Java 시작하기](/docs/java/java-tutorial.md) 튜토리얼에서 확인할 수 있습니다.
:::

Java Spring Boot 개발을 시작하는 데 도움이 되는 [Java Spring 프로필 템플릿](/docs/editor/profiles.md#java-spring-profile-template)을 사용할 수 있으며, 이 템플릿에는 유용한 확장 프로그램, 설정 및 Java Spring Boot 코드 스니펫이 포함되어 있습니다.

## 프로젝트 생성 {#create-the-project}

[Spring Initializr](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-initializr) 확장 프로그램을 사용하면 의존성을 검색하고 새로운 Spring Boot 프로젝트를 생성할 수 있습니다.

설치하려면 VS Code를 실행하고 확장 프로그램 화면(`kb(workbench.view.extensions)`)에서 `vscode-spring-initializr`를 검색합니다.

확장 프로그램을 설치한 후 **Command Palette**(`kb(workbench.action.showCommands)`)를 열고 `Spring Initializr`를 입력하여 Maven 또는 Gradle 프로젝트 생성을 시작한 후 마법사를 따릅니다.

<video src="https://code.visualstudio.com/assets/docs/java/java-spring-boot/spring-initializr.mp4" autoplay loop muted playsinline controls video="Create the project" width="100%">
</video>

## 프로젝트 수정 {#edit-the-project}

[Spring Initializr](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-initializr) 확장 프로그램을 사용하면 새로운 Spring Boot 프로젝트를 생성한 후 의존성을 추가할 수 있습니다.

`pom.xml` 파일로 이동하여 마우스 오른쪽 버튼을 클릭하고 **Add starters...** 를 선택합니다. 드롭다운 메뉴에서 `√`로 시작하는 이미 있는 의존성을 보여줍니다. 추가하고 싶은 다른 의존성을 검색할 수 있습니다. 또는 기존 의존성을 클릭하여 제거할 수 있습니다.

<video src="https://code.visualstudio.com/assets/docs/java/java-spring-boot/spring-initializr-add-starters.mp4" autoplay loop muted playsinline controls title="Edit the project" width="100%">
</video>

## 어플리케이션 개발 {#develop-the-application}

[Spring Boot Tools](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-spring-boot) 확장 프로그램은 Spring Boot의 `application.properties`, `application.yml`, 및 `.java` 파일 작업을 위한 풍부한 언어 지원을 포함합니다.

이 확장 프로그램은 다음과 같은 기능을 지원합니다:

* 작업 공간에서 Spring 요소로 빠르게 이동
* Spring 특정 구성 요소에 대한 스마트 코드 완성
* 실행 중인 Spring 앱에 대한 빠른 접근
* 실시간 애플리케이션 정보
* 코드 템플릿

`.properties` 및 `.yml` 파일에 대해서도 유사한 코드 완성 및 검증 기능을 사용할 수 있습니다.

이 기능을 사용하는 방법에 대한 자세한 내용은 [상세 사용 가이드](https://github.com/spring-projects/sts4/tree/main/vscode-extensions/vscode-spring-boot#usage)를 방문하세요.

아래는 실시간 애플리케이션 정보를 보여주는 예입니다.

<video src="https://code.visualstudio.com/assets/docs/java/java-spring-boot/spring-live-info.mp4" autoplay loop muted playsinline controls title="Live application information and metrics" width="100%">
</video>

## 어플리케이션 실행 {#run-the-application}

`kb(workbench.action.debug.start)`를 사용하여 애플리케이션을 실행하는 것 외에도, [Spring Boot Dashboard](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-boot-dashboard) 확장 프로그램을 사용하면 작업 공간에서 사용 가능한 모든 Spring Boot 프로젝트를 보고 관리하며, 프로젝트를 빠르게 시작, 중지 또는 디버깅할 수 있습니다.

<video src="https://code.visualstudio.com/assets/docs/java/java-spring-boot/spring-dashboard.mp4" autoplay loop muted playsinline controls title="Run the Spring Boot application from Spring Boot dashboard" width="100%">
</video>

## 다음 단계 {#next-steps}

* [Java Spring 프로필 템플릿](/docs/editor/profiles.md#java-spring-profile-template) - 엄선된 확장 프로그램, 설정 및 스니펫으로 새로운 [프로필](/docs/editor/profiles) 생성.
* 웹 앱을 배포하려면 [VS Code로 Java 웹 앱](/docs/java/java-webapp.md)을 참조하세요.
* 웹 앱을 컨테이너화하고 Docker 컨테이너로 배포하려면 [VS Code의 Docker](/docs/containers/overview.md)를 확인하세요.
* Java 디버깅 기능에 대해 더 알아보려면 [Java 실행 및 디버깅](/docs/java/java-debugging.md)을 참조하세요.

---
Order: 9
Area: java
TOCTitle: Spring Boot
ContentId: d37118cf-1b5b-4aee-9727-52fcfcac16bd
PageTitle: Visual Studio Code에서의 Spring Boot 지원
DateApproved: 12/22/2021
MetaDescription: Visual Studio Code 에디터를 사용하는 Java 개발자를 위한 Spring Boot 확장 프로그램.
---

# Visual Studio Code에서의 Spring Boot {#spring-boot-in-visual-studio-code}

Visual Studio Code는 Spring Boot 애플리케이션 개발자를 위한 이상적인 경량 개발 환경이며 다음과 같은 유용한 VS Code 확장 프로그램들이 있습니다:

- [Spring Boot Tools](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-spring-boot)
- [Spring Initializr](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-initializr)
- [Spring Boot Dashboard](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-boot-dashboard)

위의 모든 확장 프로그램이 포함된 [Spring Boot Extension Pack](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-boot-dev-pack)을 설치하는 것을 추천합니다.

아래 기능들을 사용하면서 문제가 발생하면 [이슈를 생성](https://github.com/microsoft/vscode-java-pack/issues)하여 문의할 수 있습니다.

## 사전 준비사항 {#prerequisites}

Visual Studio Code에서 Spring Boot 애플리케이션을 개발하기 위해서는 다음과 같은 것들이 필요합니다:

- [Java Development Kit (JDK)](https://www.microsoft.com/openjdk)
- [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
- [Spring Boot Extension Pack](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-boot-dev-pack)

<button><a class="install-extension-btn" href="vscode:extension/vscjava.vscode-java-pack">Java Extension Pack 설치하기</a></button> <br />

<button><a class="install-extension-btn" href="vscode:extension/vmware.vscode-boot-dev-pack">Spring Boot Extension Pack 설치하기</a></button>

> **참고**: 시작하는 방법에 대한 자세한 정보는 [Java 시작하기](/docs/java/java-tutorial.md) 튜토리얼에서 확인할 수 있습니다.

Java Spring Boot 개발을 시작하는 데 도움이 되도록 유용한 확장 프로그램, 설정, Java Spring Boot 코드 스니펫이 포함된 [Java Spring 프로필 템플릿](/docs/editor/profiles.md#java-spring-profile-template)을 사용할 수 있습니다.

## 프로젝트 생성 {#create-the-project}

[Spring Initializr](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-initializr) 확장 프로그램을 사용하면 의존성을 검색하고 새로운 Spring Boot 프로젝트를 생성할 수 있습니다.

설치하려면 VS Code를 실행하고 확장 프로그램 보기(`Ctrl+Shift+X`)에서 `vscode-spring-initializr`를 검색하세요.

확장 프로그램을 설치한 후, **Command Palette**(`Ctrl+Shift+P`)를 열고 `Spring Initializr`를 입력하여 Maven 또는 Gradle 프로젝트 생성을 시작한 다음 마법사를 따라가세요.

<video autoplay loop muted playsinline controls video="프로젝트 생성" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-spring-boot/spring-initializr.mp4" type="video/mp4" />
</video>

## 프로젝트 편집 {#edit-the-project}

[Spring Initializr](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-initializr) 확장 프로그램을 사용하면 새로운 Spring Boot 프로젝트를 생성한 후에도 의존성을 추가할 수 있습니다.

`pom.xml` 파일로 이동하여 우클릭한 다음 **Add starters...** 를 선택하세요. 드롭다운에 이미 가지고 있는 의존성이 `√`로 시작하여 표시됩니다. 프로젝트에 추가하고 싶은 다른 의존성을 검색하거나 기존 의존성을 클릭하여 제거할 수 있습니다.

<video autoplay loop muted playsinline controls title="프로젝트 편집" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-spring-boot/spring-initializr-add-starters.mp4" type="video/mp4" />
</video>

## 애플리케이션 개발 {#develop-the-application}

[Spring Boot Tools](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-spring-boot) 확장 프로그램은 Spring Boot의 `application.properties`, `application.yml`, `.java` 파일 작업을 위한 풍부한 언어 지원을 포함합니다.

이 확장 프로그램은 다음과 같은 기능을 지원합니다:

- 작업 공간에서 Spring 요소로 빠르게 이동
- Spring 특정 컴포넌트에 대한 스마트 코드 완성
- 실행 중인 Spring 앱에 빠르게 접근
- 실시간 애플리케이션 정보
- 코드 템플릿

비슷한 코드 완성과 유효성 검사 기능은 `.properties`와 `.yml` 파일에서도 사용할 수 있습니다.

이러한 기능들의 사용법을 배우려면 이 [자세한 사용 가이드](https://github.com/spring-projects/sts4/tree/main/vscode-extensions/vscode-spring-boot#usage)를 방문하실 수 있습니다.

아래는 실시간 애플리케이션 정보를 보여주는 예시입니다.

<video autoplay loop muted playsinline controls title="실시간 애플리케이션 정보와 메트릭" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-spring-boot/spring-live-info.mp4" type="video/mp4" />
</video>

## 애플리케이션 실행 {#run-the-application}

`F5`를 사용하여 애플리케이션을 실행하는 것 외에도, [Spring Boot Dashboard](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-boot-dashboard) 확장 프로그램을 사용하면 작업 공간의 모든 사용 가능한 Spring Boot 프로젝트를 보고 관리할 수 있으며 프로젝트를 빠르게 시작, 중지 또는 디버그할 수 있습니다.

<video autoplay loop muted playsinline controls title="Spring Boot 대시보드에서 Spring Boot 애플리케이션 실행" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-spring-boot/spring-dashboard.mp4" type="video/mp4" />
</video>

## 다음 단계 {#next-steps}

- [Java Spring 프로필 템플릿](/docs/editor/profiles.md#java-spring-profile-template) - 엄선된 확장 프로그램, 설정, 스니펫이 포함된 새로운 [프로필](/docs/editor/profiles)을 만듭니다.
- 웹 앱을 배포하려면 [VS Code에서의 Java 웹 앱](/docs/java/java-webapp.md)을 참조하세요.
- 웹 앱을 컨테이너화하고 Docker 컨테이너로 배포하려면 [VS Code에서의 Docker](/docs/containers/overview.md)를 확인하세요.
- Java 디버깅 기능에 대해 자세히 알아보려면 [Java 실행 및 디버깅](/docs/java/java-debugging.md)을 참조하세요.

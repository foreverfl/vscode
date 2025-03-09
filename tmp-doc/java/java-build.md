---
Order: 6
Area: java
TOCTitle: 빌드 도구
ContentId: 6ba93ee8-33d7-483a-a3b0-82241cedecbf
PageTitle: Visual Studio Code의 Java용 Maven 및 Gradle 지원
DateApproved: 12/10/2021
MetaDescription: Visual Studio Code의 Java용 Maven 및 Gradle 지원
MetaSocialImage:
---

# Visual Studio Code의 <br /> Java 빌드 도구 {#java-build-tools}

이 문서는 Visual Studio Code에서 Java 빌드 도구를 사용하는 방법에 대한 개요입니다. [Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven) 및 [Gradle for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle) 확장과 기타 도구를 다룹니다.

아래 기능을 사용하는 동안 문제가 발생하면 [이슈](https://github.com/microsoft/vscode-java-pack/issues)를 등록하여 문의할 수 있습니다.

## Maven {#maven}

[Maven](https://maven.apache.org/)은 Java 프로젝트를 관리하고 애플리케이션 빌드를 자동화하는 소프트웨어 도구입니다. Visual Studio Code용 [Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven) 확장은 완전한 Maven 통합 지원을 제공하여 Maven 프로젝트를 탐색하고, Maven 명령을 실행하며, 빌드 라이프사이클 및 플러그인의 목표를 수행할 수 있습니다. Maven 지원 및 기타 중요한 Java 개발 기능을 포함하는 [Java 확장 팩](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)을 설치하는 것을 권장합니다.

<a class="install-extension-btn" href="vscode:extension/vscjava.vscode-java-pack">Java 확장 팩 설치</a>

### Maven 프로젝트 탐색 {#exploring-maven-project}

Maven 프로젝트가 로드되면 확장이 활성화되고 워크스페이스에서 `pom.xml` 파일을 자동으로 스캔하여 모든 Maven 프로젝트와 모듈을 사이드바에 표시합니다.

![Maven Explorer](images/java-build/maven-explorer.png)

### 알 수 없는 유형 해결 {#resolve-unknown-type}

Maven 확장은 소스 코드에서 알 수 없는 유형을 해결하기 위해 Maven Central을 검색하는 기능도 지원합니다. 마우스를 올리면 표시되는 **Resolve unknown type** 링크를 선택하여 이 작업을 수행할 수 있습니다.

<video autoplay loop muted playsinline controls title="알 수 없는 유형 해결" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-build/maven-resolve-unknown-type.mp4" type="video/mp4" />
</video>

### POM.xml 작업 {#working-with-pom-xml}

확장은 로컬 Maven 저장소를 기반으로 Maven 종속성을 추가하기 위한 코드 스니펫 및 자동 완성 기능을 제공합니다. 이러한 편리한 기능을 사용하여 `pom.xml`에 새 종속성을 추가하는 방법을 확인하세요.

<video autoplay loop muted playsinline controls title="POM 파일에 새 종속성 추가" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-build/maven-pom-editing.mp4" type="video/mp4" />
</video>

확장은 또한 효과적인 POM을 생성할 수 있게 해줍니다.

<video autoplay loop muted playsinline controls title="효과적인 POM 생성" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-build/maven-effective-pom.mp4" type="video/mp4" />
</video>

**Maven: Add a Dependency** (또는 `maven.project.addDependency`) 명령을 사용하여 `pom.xml`에 새 종속성을 추가할 수도 있습니다. 이 과정은 대화형입니다.

<video autoplay loop muted playsinline controls title="종속성 추가" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-build/maven-add-dependency.mp4" type="video/mp4" />
</video>

프로젝트 뷰를 통해 종속성을 추가할 수도 있으며, 이는 동일한 Maven 명령을 호출합니다.

<video autoplay loop muted playsinline controls title="프로젝트 뷰를 통해 종속성 추가" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-build/maven-add-dependency-2.mp4" type="video/mp4" />
</video>

또한, VS Code는 종속성을 트리 뷰로 표시하는 기능도 지원하여 프로젝트의 모든 종속성을 한 곳에서 검사하고 잠재적인 문제를 확인할 수 있습니다.

<video autoplay loop muted playsinline controls title="Maven 종속성 트리 검사" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-build/maven-dependency-tree.mp4" type="video/mp4" />
</video>

### Maven 명령 및 목표 실행 {#execute-maven-commands-and-goals}

Explorer에서 각 Maven 프로젝트를 마우스 오른쪽 버튼으로 클릭하여 편리하게 Maven 목표를 실행할 수 있습니다.

<video autoplay loop muted playsinline controls title="Maven 목표 실행" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-build/maven-run.mp4" type="video/mp4" />
</video>

확장은 또한 각 프로젝트의 목표 기록을 보존하여 이전 명령을 빠르게 다시 실행할 수 있습니다. 이는 긴 사용자 정의 목표를 실행할 때 유용합니다.

목표를 다시 실행하는 두 가지 방법이 있습니다:

1. 명령 팔레트에서 **Maven: History**를 실행한 다음 프로젝트와 기록에서 명령을 선택합니다.
2. 프로젝트를 마우스 오른쪽 버튼으로 클릭하고 **History**를 선택합니다. 그런 다음 기록에서 이전 명령을 선택할 수 있습니다.

<video autoplay loop muted playsinline controls title="Maven 기록에서 목표 실행" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-build/maven-history.mp4" type="video/mp4" />
</video>

설정에서 즐겨찾는 명령을 지정하여 나중에 실행할 수 있습니다.

<video autoplay loop muted playsinline controls title="즐겨찾는 명령 지정" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-build/maven-favorite-command.mp4" type="video/mp4" />
</video>

프로젝트와 함께 사용하는 각 플러그인에 대해 플러그인 내 목표에 쉽게 접근할 수 있는 방법도 제공합니다.

<video autoplay loop muted playsinline controls title="각 플러그인 내 목표에 쉽게 접근" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-build/maven-plugin-goal.mp4" type="video/mp4" />
</video>

Maven 목표를 디버그하려면 목표를 마우스 오른쪽 버튼으로 클릭하고 디버깅을 시작합니다. Maven 확장은 올바른 매개변수로 Java 디버거를 호출합니다. 이는 시간 절약에 유용한 기능입니다.

<video autoplay loop muted playsinline controls title="Maven 목표 디버그" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-build/debug-maven-plugin-goals.mp4" type="video/mp4" />
</video>

### Maven Archetype에서 프로젝트 생성 {#generate-project-from-maven-archetype}

이 확장에서 제공하는 또 다른 유용한 기능은 [Archetype](https://maven.apache.org/guides/introduction/introduction-to-archetypes.html)에서 Maven 프로젝트를 생성하는 것입니다. 확장은 로컬/원격 카탈로그에 나열된 아키타입을 로드합니다. 선택 후 확장은 `mvn archetype:generate -D...`를 터미널에 전송합니다.

Maven 프로젝트를 생성하는 몇 가지 방법이 있습니다:

1. Maven Explorer에서 **+** **Create Maven Project** 버튼을 선택합니다.

   ![Create Maven Project](images/java-build/create-maven-project.png)

2. **Command Palette** (`Ctrl+Shift+P`)를 열고 **Create Java Project** 명령을 검색합니다.

   <video autoplay loop muted playsinline controls title="Java 프로젝트 생성 명령" style={{maxWidth: '100%'}}>
     <source src="https://code.visualstudio.com/docs/java/java-build/maven-archetype-command.mp4" type="video/mp4" />
   </video>

3. 대상 폴더를 마우스 오른쪽 버튼으로 클릭하고 **Create Maven Project**를 선택합니다.

   <video autoplay loop muted playsinline controls title="Maven 프로젝트 생성 명령" style={{maxWidth: '100%'}}>
     <source src="https://code.visualstudio.com/docs/java/java-build/maven-archetype-folder.mp4" type="video/mp4" />
   </video>

## Gradle {#gradle}

VS Code는 [Gradle for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle) 확장을 통해 Gradle Java 프로젝트(Android 제외)를 지원합니다. 이 확장은 Gradle Java 프로젝트 경험을 향상시키기 위한 여러 구성 요소를 제공합니다:

- **Gradle Build Server:** [Gradle Build Server](https://github.com/microsoft/build-server-for-gradle)는 Gradle 프로젝트를 가져오고 Gradle 데몬에 빌드 작업을 위임하여 명령줄에서 Gradle 작업을 실행하는 것과 동일한 일관된 프로젝트 출력을 보장합니다.
- **시각적 인터페이스:** Gradle 작업 및 프로젝트 종속성을 보고 관리하며, VS Code 내에서 직접 Gradle 작업을 실행할 수 있습니다.
- **Gradle Language Server:** Gradle 빌드 파일에 대한 향상된 작성 경험을 제공하며, 구문 강조 표시, 오류 보고 및 자동 완성을 포함합니다.

### Gradle Build Server {#gradle-build-server}

기본적으로 Gradle for Java 확장을 설치한 경우 Gradle Build Server가 Gradle 프로젝트를 가져오는 데 사용됩니다. `java.gradle.buildServer.enabled` 설정을 통해 Gradle Build Server를 켜거나 끌 수 있습니다.

Gradle 빌드 출력을 Build Server for Gradle (Build) 출력 채널에서 보고, VS Code와 Gradle Build Server 간의 상호 작용을 Build Server for Gradle (Log) 출력 채널에서 추적할 수 있습니다.

### 테스트를 Gradle에 위임 {#delegate-tests-to-gradle}

확장은 테스트 실행을 Gradle에 위임하는 기능을 지원합니다. 테스트 탐색기에서 사용할 테스트 프로필을 구성할 수 있습니다.

<video autoplay loop muted playsinline controls title="테스트를 Gradle에 위임" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-build/delegate-test-to-gradle.mp4" type="video/mp4" />
</video>

:::note
이 기능을 사용하려면 [Test Runner for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test) 확장을 설치해야 합니다.
:::

### Gradle 작업과 함께 작업 {#working-with-gradle-tasks}

VSCode에서 Gradle 프로젝트를 열면 Gradle 사이드바 항목을 클릭하여 유용한 Gradle 뷰를 찾을 수 있습니다. **Gradle Projects** 뷰에는 워크스페이스에서 찾은 모든 Gradle 프로젝트가 나열됩니다. 여기에서 Gradle 작업을 보고, 실행하거나 디버그할 수 있습니다.

<video autoplay loop muted playsinline controls title="Gradle 작업 뷰" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-build/gradle-tasks.mp4" type="video/mp4" />
</video>

워크스페이스에 많은 Gradle 작업이 있을 때 특정 작업을 찾기 어려울 수 있습니다. 확장은 **Pinned Tasks** 뷰를 제공하여 즐겨찾는 작업을 고정하여 별도의 화면에서 쉽게 찾을 수 있도록 도와줍니다. **Recent Tasks** 화면에서 최근에 실행된 작업도 볼 수 있습니다.

<video autoplay loop muted playsinline controls title="Gradle 작업 고정" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-build/gradle-pinned-recent-tasks.mp4" type="video/mp4" />
</video>

### Gradle 종속성 보기 {#viewing-gradle-dependencies}

**Gradle Projects** 화면에서 각 Gradle 프로젝트 항목 아래에 **Dependencies** 항목을 찾을 수 있습니다. 지정된 구성의 모든 종속성을 포함하며, 프로젝트의 종속성 상태를 쉽게 확인할 수 있습니다.

![Gradle Dependencies](images/java-build/gradle-dependencies.png)

### Gradle Daemons 관리 {#managing-gradle-daemons}

**Gradle Daemons** 뷰는 현재 워크스페이스의 데몬 상태를 보여줍니다. 워크스페이스와 동일한 버전의 모든 실행 중인 Gradle 데몬을 나열합니다. 이 화면에서 특정 데몬 또는 모든 데몬을 중지할 수 있습니다.

<video autoplay loop muted playsinline controls title="Gradle Daemon 관리" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-build/gradle-daemons.mp4" type="video/mp4" />
</video>

### 빌드 파일 작성 {#authoring-build-files}

확장은 Gradle 빌드 파일에 유용한 작성 기능을 제공합니다.

Groovy Gradle 파일을 열면 확장이 Gradle 파일을 분석하고 의미 체계 토큰 정보를 제공하여 더 정확한 강조 표시 결과를 제공합니다.

![Gradle Highlighting](images/java-build/gradle-highlighting.png)

**Outline** 화면면에서는 열린 Gradle 파일의 문서 기호를 제공하여 파일의 어느 부분으로든 쉽게 이동할 수 있습니다.

![Gradle Outline](images/java-build/gradle-outline.png)

열린 Gradle 파일에 구문 오류(문자 누락, 유형 찾을 수 없음 등)가 있는 경우 **Problems** 화면에서 이를 찾을 수 있습니다.

![Gradle Problems](images/java-build/gradle-problems.png)

Gradle 파일에 Gradle 클로저 또는 속성을 입력하려고 할 때 확장은 사용할 수 있는 클로저 또는 속성을 제안하는 기본 자동 완성을 지원합니다.

<video autoplay loop muted playsinline controls title="Gradle 파일 자동 완성" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-build/gradle-auto-completion.mp4" type="video/mp4" />
</video>

새 종속성을 선언하려고 할 때 확장은 종속성 후보 목록을 제공합니다.

<video autoplay loop muted playsinline controls title="Gradle용 새 종속성 자동 완성" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-build/gradle-dependency-completion.mp4" type="video/mp4" />
</video>

## 추가 기능 {#additional-resources}

추가 [구성](https://github.com/microsoft/vscode-maven/tree/main#additional-configurations) 및 [문제 해결 가이드](https://github.com/microsoft/vscode-maven/blob/main/Troubleshooting.md)를 위해 Maven 확장의 [GitHub Repo](https://github.com/microsoft/vscode-maven)를 방문하세요.

Maven 외에도 프로젝트를 빌드하고 테스트하는 데 Bazel을 사용하는 경우 [Bazel 확장](https://marketplace.visualstudio.com/items?itemName=BazelBuild.vscode-bazel)도 있습니다.

## 다음 단계 {#next-steps}

다음 내용을 읽어보세요:

- [Java 편집](/docs/java/java-editing.md) - VS Code에서 Java 편집 기능을 탐색합니다.
- [Java 디버깅](/docs/java/java-debugging.md) - VS Code로 Java 프로젝트를 디버그하는 방법을 알아보세요.
- [Java 테스트](/docs/java/java-testing.md) - JUnit 및 TestNG 케이스를 위한 VS Code 사용법을 알아보세요.
- [Java 확장](/docs/java/extensions.md) - VS Code용 유용한 Java 확장에 대해 알아보세요.

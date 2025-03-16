---
Order: 8
Area: java
TOCTitle: 테스트
ContentId: 82be3b78-2c09-4571-abec-69f95f111e0f
PageTitle: Visual Studio Code에서의 Java 테스트
DateApproved: 2/11/2022
MetaDescription: Visual Studio Code에서 Java 코드를 테스트하는 방법을 확인하세요.
MetaSocialImage:
---

# Visual Studio Code에서 Java 테스트하기 {#testing-java-with-visual-studio-code}

Visual Studio Code에서 Java 테스트는 [Test Runner for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test) 확장 프로그램을 통해 활성화됩니다. 이 확장 프로그램은 Java 테스트 케이스를 실행하고 디버깅하기 위한 경량 확장입니다.

## 개요 {#overview}

이 확장 프로그램은 다음 테스트 프레임워크를 지원합니다:

- [JUnit 4](https://junit.org/junit4/) (v4.8.0+)
- [JUnit 5](https://junit.org/junit5/) (v5.1.0+)
- [TestNG](https://testng.org/doc/) (v6.9.13.3+)

[Test Runner for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test)는 [Red Hat의 Java™에 대한 언어 지원](https://marketplace.visualstudio.com/items?itemName=redhat.java) 및 [Java 디버거](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug) 확장 프로그램과 함께 작동하여 다음 기능을 제공합니다:

- 테스트 케이스 실행/디버깅
- 테스트 구성 사용자 정의
- 테스트 보고서 보기
- Testing Explorer에서 테스트 보기

## 요구 사항 {#requirements}

- JDK (버전 1.8 이상)
- Visual Studio Code (버전 1.59.0 이상)
- [Java용 확장 팩](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)

<a class="install-extension-btn" href="vscode:extension/vscjava.vscode-java-pack">Java용 확장 팩 설치</a>

## 프로젝트 설정 {#project-setup}

> **참고**: 이미 프로젝트에 Java 테스트 프레임워크를 설정한 경우 [기능](#features) 섹션으로 건너뛸 수 있습니다.

### 테스트 활성화 및 프로젝트에 테스트 프레임워크 JAR 추가하기 {#enable-testing-and-adding-test-framework-jars-to-your-project}

Test Runner for Java 버전 0.34.0부터는 **Testing** Explorer에서 몇 가지 단계만으로 관리되지 않는 폴더 프로젝트(빌드 도구가 없는 프로젝트)에 테스트 프레임워크를 활성화할 수 있습니다:

<video src="images/java-testing/enable-tests.mp4" autoplay loop muted playsinline controls title="테스트 활성화 및 프로젝트에 테스트 프레임워크 JAR 추가하기">
</video>

> **참고**: 현재 이 기능은 테스트 종속성이 포함되지 않은 관리되지 않는 폴더만 지원합니다.

### JUnit 4 {#junit-4}

#### Maven {#maven}

다음 구성을 `pom.xml`에 추가하세요:

```xml
<dependency>
  <groupId>junit</groupId>
  <artifactId>junit</artifactId>
  <version>(YOUR_JUNIT_VERSION)</version>
  <scope>test</scope>
</dependency>
```

#### Gradle {#gradle}

다음 줄이 `build.gradle`에 추가되었는지 확인하세요:

```groovy
plugins {
    java
}

dependencies {
    testImplementation('junit:junit:(YOUR_JUNIT_VERSION)')
}
```

#### 관리되지 않는 폴더 {#unmanaged-folder}

프로젝트가 빌드 도구를 사용하지 않는 경우, [Testing Explorer](#enable-testing-and-adding-test-framework-jars-to-your-project)를 통해 JUnit 4를 활성화하거나 다음 JAR를 수동으로 다운로드하여 프로젝트 클래스 경로에 추가할 수 있습니다 (`java.project.referencedLibraries` 설정을 통해, [종속성 관리](/docs/java/java-project.md#dependency-management)에서 더 많은 정보를 확인하세요):

- [junit.jar](https://search.maven.org/search?q=g:junit%20AND%20a:junit)
- [hamcrest-core.jar](https://search.maven.org/artifact/org.hamcrest/hamcrest-core/1.3/jar)

> JUnit 4 설정 방법에 대한 자세한 내용은 [공식 JUnit 위키](https://github.com/junit-team/junit4/wiki/Download-and-Install)를 확인하세요.

### JUnit 5 {#junit-5}

JUnit 5 팀은 다양한 빌드 도구를 사용하는 샘플 프로젝트 모음을 제공합니다. 프로젝트에서 Maven 또는 Gradle을 빌드 도구로 사용하는 경우 [junit5-sample 리포지토리](https://github.com/junit-team/junit5-samples)를 확인하세요.

#### 관리되지 않는 폴더 {#unmanaged-folder}

프로젝트가 빌드 도구를 사용하지 않는 경우, [Testing Explorer](#enable-testing-and-adding-test-framework-jars-to-your-project)를 통해 JUnit 5를 활성화하거나 [junit-platform-console-standalone](https://repo1.maven.org/maven2/org/junit/platform/junit-platform-console-standalone/) JAR를 프로젝트 클래스 경로에 수동으로 포함할 수 있습니다 (`java.project.referencedLibraries` 설정을 통해, [종속성 관리](/docs/java/java-project.md#dependency-management)에서 더 많은 정보를 확인하세요).

### TestNG {#testng}

#### Maven {#maven}

다음 구성을 `pom.xml`에 추가하세요:

```xml
<dependency>
  <groupId>org.testng</groupId>
  <artifactId>testng</artifactId>
  <version>(YOUR_TESTNG_VERSION)</version>
  <scope>test</scope>
</dependency>
```

#### Gradle {#gradle}

다음 줄이 `build.gradle`에 추가되었는지 확인하세요:

```groovy
plugins {
    java
}

dependencies {
    testImplementation('org.testng:testng:(YOUR_TESTNG_VERSION)')
}
```

#### 관리되지 않는 폴더 {#unmanaged-folder}

프로젝트가 빌드 도구를 사용하지 않는 경우, [Testing Explorer](#enable-testing-and-adding-test-framework-jars-to-your-project)를 통해 TestNG를 활성화하거나 다음 JAR를 수동으로 다운로드하여 프로젝트 클래스 경로에 추가할 수 있습니다 (`java.project.referencedLibraries` 설정을 통해, [종속성 관리](/docs/java/java-project.md#dependency-management)에서 더 많은 정보를 확인하세요):

- [testng.jar](https://search.maven.org/search?q=g:org.testng%20AND%20a:testng)
- [jcommander.jar](https://search.maven.org/search?q=g:com.beust%20AND%20a:jcommander)
- [slf4j-api.jar](https://search.maven.org/search?q=g:org.slf4j%20AND%20a:slf4j-api)

## 기능 {#features}

### 테스트 케이스 실행/디버깅 {#rundebug-test-cases}

Test Runner for Java 확장 프로그램은 클래스 및 메서드 정의의 왼쪽에 단축키(녹색 재생 버튼)를 생성합니다. 대상 테스트 케이스를 실행하려면 녹색 재생 버튼을 선택하세요. 오른쪽 클릭하여 추가 옵션을 볼 수도 있습니다.

<video src="images/java-testing/gutter-icon.mp4" autoplay loop muted playsinline controls title="테스트 케이스 실행/디버깅">
</video>

### Testing Explorer {#testing-explorer}

Testing Explorer는 작업 공간의 모든 테스트 케이스를 보여주는 트리 뷰입니다. Visual Studio Code의 왼쪽 활동 바에서 비커 버튼을 선택하여 열 수 있습니다. 여기서 테스트 케이스를 실행/디버깅하고 테스트 결과를 볼 수 있습니다.

<video src="images/java-testing/test-explorer.mp4" autoplay loop muted playsinline controls title="Testing Explorer">
</video>

### 테스트 구성 사용자 정의 {#customize-test-configurations}

때때로 테스트 케이스를 실행하기 위해 구성을 사용자 정의하고 싶을 수 있습니다. 이를 위해 작업 공간의 [설정](/docs/editor/settings.md)에서 `java.test.config` 섹션 아래에 구성을 추가할 수 있습니다.

![테스트 구성 사용자 정의](images/java-testing/configuration.png)

현재 지원되는 구성은 다음과 같습니다:

- **args**: 테스트 러너에 전달될 명령줄 인수를 지정합니다.
- **classPaths**: 이 설정에 정의된 클래스 경로는 해결된 클래스 경로에 추가됩니다.
- **env**: 테스트 실행 시 추가 환경 변수를 키-값 객체로 지정합니다.
- **envFile**: 환경 변수 정의가 포함된 파일의 절대 경로를 지정합니다.
- **modulePaths**: 이 설정에 정의된 모듈 경로는 해결된 모듈 경로에 추가됩니다.
- **name**: 구성 항목의 이름을 지정합니다. 기본 구성 이름은 `java.test.defaultConfig` 설정을 통해 설정할 수 있습니다.
- **preLaunchTask**: `tasks.json`(작업 공간의 `.vscode` 폴더)에 지정된 작업의 레이블을 지정합니다. 테스트 시작 전에 작업이 실행됩니다.
- **sourcePaths**: 테스트 디버깅 시 추가 소스 경로를 지정합니다.
- **vmArgs**: JVM에 대한 추가 옵션 및 시스템 속성을 지정합니다.
- **workingDirectory**: 테스트 실행 시 작업 디렉토리를 지정합니다.
- **testKind**: 이 테스트 구성의 대상 테스트 프레임워크를 지정합니다. 지원되는 값은 `junit`, `testng`입니다.
- **filters**: 테스트 필터를 지정합니다.
  - **tags**: 포함하거나 제외할 태그를 지정합니다. `!`가 접두사로 있는 태그는 **제외**됩니다. 주의: 이 설정은 `testKind`가 `junit`으로 설정된 경우에만 적용됩니다.

자세한 내용은 [vscode-java-test 위키](https://github.com/Microsoft/vscode-java-test/wiki/Run-with-Configuration)에서 확인할 수 있습니다.

### 테스트 결과 보기 {#view-test-results}

테스트 케이스를 실행/디버깅한 후 관련 테스트 항목의 상태는 편집기 장식과 Testing Explorer 모두에서 업데이트됩니다.

<video src="images/java-testing/test-result.mp4" autoplay loop muted playsinline controls title="테스트 결과 보기">
</video>

**Test: Peek Output** 명령을 트리거하여 결과 뷰를 미리 볼 수 있습니다. 스택 추적의 링크를 선택하여 소스 위치로 이동할 수 있습니다.

### 테스트 생성 {#generate-tests}

이 확장 프로그램은 테스트 케이스를 스캐폴딩하는 데 도움이 되는 기능을 제공합니다. 편집기 컨텍스트 메뉴에서 항목을 찾을 수 있습니다. **Source Action...**을 선택한 다음 **Generate Tests...**를 선택하세요.

주 소스 코드(테스트 주제)에서 이 소스 작업을 트리거하면 테스트 클래스의 완전한 이름과 테스트할 메서드를 요청받게 됩니다. 그러면 확장 프로그램이 테스트 코드를 생성합니다:

<video src="images/java-testing/generate-tests-from-main.mp4" autoplay loop muted playsinline controls title="테스트 생성">
</video>

테스트 소스 코드에서 소스 작업을 트리거하면 추가할 테스트 메서드의 종류를 요청받게 됩니다. 생명 주기 메서드와 테스트 메서드가 포함됩니다:

<video src="images/java-testing/generate-tests-from-test.mp4" autoplay loop muted playsinline controls title="테스트 생성하기">
</video>

### 테스트 탐색 {#test-navigation}

이 확장 프로그램은 테스트와 테스트 주제 간의 탐색을 도와주는 기능을 제공합니다. 소스 코드가 `src/main/java` 또는 `src/test/java`에 포함되어 있는 경우, 편집기 컨텍스트 메뉴에서 **Go to Test** 또는 **Go to Test Subject**라는 항목을 찾을 수 있습니다:

<video src="images/java-testing/test-navigation.mp4" autoplay loop muted playsinline controls title="테스트 탐색">
</video>

명령 팔레트(`kb(workbench.action.showCommands)`)에서 **Java: Go to Test**를 검색하여 명령을 찾을 수도 있습니다.

### VS Code 테스트 명령 {#vs-code-testing-commands}

명령 팔레트(`kb(workbench.action.showCommands)`)에서 'Test:'를 검색하여 찾을 수 있는 다른 테스트 명령(예: **Run Tests in Current File**)이 있습니다.

![명령 팔레트의 테스트 명령](images/java-testing/command_palette.png)

### VS Code 테스트 설정 {#vs-code-testing-settings}

테스트에 특정한 VS Code 설정은 설정 편집기(`kb(workbench.action.openSettings)`)에서 'testing'을 검색하여 찾을 수 있습니다.

![설정 편집기의 테스트 설정](images/java-testing/settings.png)

## FAQ {#faq}

확장 프로그램 사용 중 문제가 발생하면 [FAQ](https://github.com/microsoft/vscode-java-test/wiki/FAQ) 및 [문제 목록](https://github.com/microsoft/vscode-java-test/issues)을 검토하여 문제에 대한 답변이 있는지 확인할 수 있습니다.

## 기여 및 피드백 {#contributing-and-feedback}

피드백을 제공하거나 코드베이스에 직접 기여하는 데 관심이 있다면 [Test Runner for Java에 기여하기](https://github.com/Microsoft/vscode-java-test/blob/main/CONTRIBUTING.md)를 읽어보세요. 여기에는 다음 내용이 포함됩니다:

- [질문 및 피드백](https://github.com/Microsoft/vscode-java-test/blob/main/CONTRIBUTING.md#questions-and-feedback)
- [문제 보고](https://github.com/Microsoft/vscode-java-test/blob/main/CONTRIBUTING.md#reporting-issues)
- [수정 기여](https://github.com/Microsoft/vscode-java-test/blob/main/CONTRIBUTING.md#contributing-fixes)

## 다음 단계 {#next-steps}

다음에 대해 알아보세요:

- [디버깅](/docs/java/java-debugging.md) - VS Code로 Java 프로젝트를 디버깅하는 방법을 알아보세요.
- [Java용 확장](/docs/java/extensions.md) - VS Code에 유용한 Java 확장에 대해 알아보세요.
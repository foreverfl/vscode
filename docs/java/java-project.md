---
Order: 5
Area: java
TOCTitle: 프로젝트 관리
ContentId: 251cba68-c77f-4ac6-a5de-1fab8dcca867
PageTitle: Visual Studio Code에서 Java 프로젝트 관리
DateApproved: 4/25/2022
MetaDescription: Visual Studio Code에서의 경량 모드, Maven 지원, Java 패키지 및 종속성 관리
MetaSocialImage:
---

# VS Code에서 Java 프로젝트 관리 {#managing-java-projects-in-vs-code}

[Project Manager for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency) 확장은 Java 프로젝트와 그 종속성을 관리하는 데 도움을 줍니다. 또한 새로운 Java 프로젝트, 패키지 및 클래스를 생성하는 데도 도움이 됩니다. Visual Studio Code에서 완전한 Java 언어 지원을 받으려면 Project Manager for Java 확장을 포함하는 [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)을 설치할 수 있습니다.

<button><a class="install-extension-btn" href="vscode:extension/vscjava.vscode-java-pack">Java용 확장 팩 설치하기</a></button>

> 확장 팩 시작하기에 대한 자세한 내용은 [Java 시작하기](/docs/java/java-tutorial.md) 튜토리얼을 참고하세요.

## 프로젝트 보기 {#projects-view}

**Java Projects** 보기는 Java 프로젝트와 그 종속성을 보고 프로젝트 관리 작업의 진입점을 제공합니다.

![프로젝트 보기](images/java-project/projectmanager-overview.png)

> 기본적으로 Java Projects 보기는 **탐색기** 보기 아래에 표시됩니다. 보이지 않는다면 **EXPLORER** 제목 표시줄의 `...` 버튼을 클릭하고 **Java Projects**를 선택해보세요.

탐색 모음의 오버플로우 버튼에는 더 많은 옵션이 있습니다. 예를 들어, 계층형 보기와 평면 보기 사이를 전환할 수 있습니다.

![오버플로우 버튼](images/java-project/overflow-button.png)

탐색기에서 노드 옆에 있는 버튼들은 일부 작업에 대한 유용한 단축키를 제공합니다.

![인라인 버튼](images/java-project/inline-button.png)

각 노드의 컨텍스트 메뉴에도 많은 유용한 기능이 있으며, 탐색기에서 노드를 마우스 오른쪽 버튼으로 클릭하여 표시할 수 있습니다.

![컨텍스트 메뉴](images/java-project/context-menu.png)

### 새 Java 프로젝트 생성 {#create-a-new-java-project}

탐색 모음의 **+** 버튼을 클릭하거나 명령 팔레트(`Ctrl+Shift+P`)에서 **Java: Create Java Project...** 명령을 통해 새 Java 프로젝트를 생성할 수 있습니다. 생성 중에 필요한 확장이 아직 설치되지 않은 경우 VS Code가 프로젝트 유형에 따라 필요한 확장을 설치하도록 도와줍니다.

![프로젝트 생성](images/java-project/projectmanager-createproject.png)

### Java 프로젝트 가져오기 {#import-java-projects}

**File > Open Folder...** 를 통해 기존 Java 프로젝트와 모듈을 작업 공간에 직접 가져올 수 있습니다. 열린 폴더에 빌드 도구 스크립트, 예를 들어 `pom.xml` 또는 `build.gradle`이 포함되어 있는지 확인하세요. VS Code for Java가 프로젝트를 감지하고 자동으로 가져옵니다.

프로젝트에 새 모듈을 추가할 때 **Java: Import Java projects in workspace** 명령을 실행하여 작업 공간으로 가져올 수 있습니다. 이 명령을 사용하면 VS Code 창을 다시 로드할 필요 없이 새 프로젝트를 작업 공간으로 가져올 수 있습니다.

### JAR로 내보내기 {#export-to-jar}

프로젝트 보기에서 또는 **Java: Export Jar...** 명령을 실행하여 빌드를 JAR로 내보낼 수 있습니다.

![프로젝트 보기에서 jar 내보내기](images/java-project/exportjar.gif)

## 프로젝트의 런타임 구성 {#configure-runtime-for-projects}

Java가 발전함에 따라 개발자들이 여러 버전의 JDK로 작업하는 것이 일반적입니다. `java.configuration.runtimes` 설정을 통해 로컬 설치 경로에 매핑할 수 있습니다. 설정은 다음과 같은 형식을 가집니다:

```json
"java.configuration.runtimes": [
  {
    "name": "JavaSE-1.8",
    "path": "/usr/local/jdk1.8.0_201"
  },
  {
    "name": "JavaSE-11",
    "path": "/usr/local/jdk-11.0.3",
    "sources" : "/usr/local/jdk-11.0.3/lib/src.zip",
    "javadoc" : "https://docs.oracle.com/en/java/javase/11/docs/api",
    "default":  true
   },
   {
    "name": "JavaSE-12",
    "path": "/usr/local/jdk-12.0.2"
   },
   {
    "name": "JavaSE-13",
    "path": "/usr/local/jdk-13"
   }
]
```

:::note
항목에 `"default": true`를 추가하여 그 중 하나를 기본값으로 설정할 수 있습니다. 기본 JDK는 관리되지 않는 폴더(빌드 도구 없음)에 사용됩니다.
:::

프로젝트에 어떤 JDK가 사용되는지 보려면 **Command Palette**(`Ctrl+Shift+P`)에서 **Java: Configure Java Runtime** 명령을 실행할 수 있습니다. 이 명령은 프로젝트의 런타임 정보를 표시하는 보기를 엽니다:

![프로젝트 런타임](images/java-project/configure-project-runtime.png)

### Maven 및 Gradle 프로젝트의 JDK 변경 {#change-jdk-for-maven-and-gradle-projects}

Maven 또는 Gradle 프로젝트의 JDK 버전을 변경하려면 빌드 스크립트(`pom.xml` 또는 `build.gradle`)에서 업데이트해야 합니다. <span class="codicon codicon-info"></span>를 클릭하면 이러한 변경을 하는 방법을 볼 수 있습니다. <span class="codicon codicon-edit"></span>를 클릭하면 프로젝트의 빌드 스크립트 파일로 이동합니다.

### 관리되지 않는 폴더의 JDK 변경 {#change-jdk-for-unmanaged-folders}

관리되지 않는 폴더(빌드 도구 없음)의 JDK를 변경하려면 <span class="codicon codicon-edit"></span> 버튼을 클릭할 수 있습니다. 모든 JDK가 나열되고 관리되지 않는 폴더에 대해 하나를 선택할 수 있습니다.

### JDK 다운로드 {#download-jdks}

새 JDK를 다운로드하려면 `download` 링크를 클릭하거나 **Command Palette**(`Ctrl+Shift+P`)에서 **Java: Install New JDK** 명령을 실행할 수 있습니다. JDK 다운로드를 안내하는 새로운 보기가 열립니다.

![JDK 다운로드](images/java-project/download-jdk.png)

:::note
Java 프리뷰 기능을 활성화하려면 [새로운 Java 버전과 VS Code를 어떻게 사용할 수 있나요](/docs/java/java-faq.md#how-can-i-use-visual-studio-code-with-new-java-versions)를 참조하세요.
:::

## 관리되지 않는 폴더의 클래스패스 구성 {#configure-classpath-for-unmanaged-folders}

Java용 프로젝트 관리 확장은 관리되지 않는 폴더의 클래스패스를 구성하기 위한 사용자 인터페이스를 제공합니다. 클래스패스는 클래스패스 구성 페이지에서 수동으로 설정할 수 있습니다. 명령 팔레트(`Ctrl+Shift+P`)에서 **Java: Configure Classpath** 명령을 실행하여 열 수 있습니다.

![클래스패스 구성](images/java-project/configure-classpath.png)

드문 경우이지만, 언어 서버가 종속성을 다시 빌드하도록 하기 위해 명령 팔레트(`Ctrl+Shift+P`)에서 **Java: Clean Java Language Server Workspace** 명령을 실행하여 Java 작업 공간을 정리해야 할 수 있습니다.

## 종속성 관리 {#dependency-management}

### Maven 종속성 추가 {#add-a-maven-dependency}

Maven 프로젝트의 경우, 프로젝트 보기에서 **Maven Dependencies** 노드 옆의 **+** 아이콘을 클릭하여 종속성을 추가할 수 있습니다.

![Maven 종속성 추가](images/java-project/add-maven-dependency.png)

### 관리되지 않는 폴더의 종속성 관리 {#manage-dependencies-for-unmanaged-folder}

프로젝트가 빌드 도구가 없는 관리되지 않는 폴더인 경우, **Referenced Libraries** 노드나 그 아래 항목의 **+** 아이콘 또는 **-** 아이콘을 클릭하여 종속성을 관리하거나, jar 라이브러리를 `Referenced Libraries` 노드에 직접 드래그할 수 있습니다.

![참조된 라이브러리 관리](images/java-project/manage-referenced-libraries.png)

> 클래스패스 구성 페이지에서도 종속성을 관리할 수 있습니다. [관리되지 않는 폴더의 클래스패스 구성](#configure-classpath-for-unmanaged-folders) 읽어보기

이후의 내용에는 `settings.json`의 `java.project.referencedLibraries` 설정이 있습니다. 이 설정을 커스터마이즈하는 방법에 대한 자세한 내용은 다음과 같습니다.

**라이브러리 포함**

참조할 라이브러리는 glob 패턴 집합을 사용하여 설명됩니다.

예시:

```json
"java.project.referencedLibraries": [
    "library/**/*.jar",
    "/home/username/lib/foo.jar"
]
```

위의 설정은 작업 공간의 library 폴더에 있는 모든 `.jar` 파일과 지정된 절대 경로의 `foo.jar`를 프로젝트의 외부 종속성에 추가합니다.

그런 다음 참조된 라이브러리는 VS Code에 의해 감시되며, 이러한 종속 파일에 변경이 있으면 프로젝트가 새로 고쳐집니다.

기본적으로 VS Code는 glob 패턴 `lib/**/*.jar`를 사용하여 작업 공간의 `lib` 디렉토리에 있는 모든 JAR 파일을 참조합니다.

**일부 라이브러리 제외**

프로젝트에서 일부 라이브러리를 제외하려면 `java.project.referencedLibraries`를 확장하여 `include/exclude` 필드를 사용하고 `exclude` glob 패턴을 추가할 수 있습니다:

```json
"java.project.referencedLibraries": {
    "include": [
        "library/**/*.jar",
        "/home/username/lib/foo.jar"
    ],
    "exclude": [
        "library/sources/**"
    ]
}
```

위 예시에서 `library/sources` 폴더의 모든 바이너리 JAR 파일은 프로젝트의 외부 종속성으로 무시됩니다.

**소스 jar 첨부**

기본적으로, 참조된 `{binary}.jar`는 같은 디렉토리에서 `{binary}-sources.jar`를 검색하고, 일치하는 것이 발견되면 소스로 첨부합니다.

JAR 파일을 소스 첨부로 수동으로 지정하려면 `sources` 필드에 키-값 맵을 제공할 수 있습니다:

```json
"java.project.referencedLibraries": {
    "include": [
        "library/**/*.jar",
        "/home/username/lib/foo.jar"
    ],
    "exclude": [
        "library/sources/**"
    ],
    "sources": {
        "library/bar.jar": "library/sources/bar-src.jar"
    }
}
```

이렇게 하면 `bar-src.jar`가 bar.jar의 소스로 첨부됩니다.

## 경량 모드 {#lightweight-mode}

VS Code for Java는 경량 모드와 표준 모드를 지원합니다. 경량 모드에서는 소스 파일과 JDK만 언어 서버에 의해 해석됩니다. 표준 모드에서는 가져온 종속성이 해석되고 프로젝트가 언어 서버에 의해 빌드됩니다. 경량 모드는 소스 파일만으로 작업하는 빠른 시작과 경량 환경이 필요할 때 가장 잘 작동합니다. 예를 들어, 소스 코드 읽기, 소스 코드와 JDK 사이 탐색, 개요 및 Javadoc 보기, 구문 오류 감지 및 수정 등에 적합합니다. 또한 소스 파일과 JDK 범위 내에서 코드 완성이 지원됩니다.

경량 모드는 가져온 종속성을 해석하거나 프로젝트를 빌드하지 않으므로 실행, 디버깅, 리팩토링, 린팅 또는 의미론적 오류 감지를 지원하지 않습니다. 이러한 기능을 사용하려면 작업 공간을 경량 모드에서 표준 모드로 전환해야 합니다.

아래 옵션으로 `java.server.launchMode`를 구성하여 어떤 모드로 시작할지 제어할 수 있습니다:

- `Hybrid` (기본값) - 처음에는 작업 공간이 경량 모드로 열립니다. 작업 공간에 해결되지 않은 Java 프로젝트가 포함되어 있으면 표준 모드로 전환할지 묻습니다. **나중에**를 선택하면 경량 모드로 유지됩니다. 상태 표시줄의 언어 상태 항목을 클릭하여 수동으로 표준 모드로 전환할 수 있습니다.
- `Standard` - 작업 공간이 표준 모드로 열립니다.
- `LightWeight` - 작업 공간이 경량 모드로 열립니다. 상태 표시줄의 언어 상태 항목을 클릭하여 수동으로 표준 모드로 전환할 수 있습니다.

언어 상태 항목은 다른 아이콘을 사용하여 현재 작업 공간이 어떤 모드인지 나타냅니다.

<div id="codicon-listing">

- <i class="codicon codicon-bracket-dot"></i> - 경량 모드로 열린 작업 공간.
- <i class="codicon codicon-sync"></i> - 표준 모드로 열리는 과정 중인 작업 공간.
- <i class="codicon codicon-symbol-namespace"></i> - 표준 모드로 열린 작업 공간.

</div>

언어 상태 항목을 클릭하면 표준 모드로 전환됩니다.

![표준 모드로 전환](images/java-project/switch-to-standard.gif)

## 빌드 상태 {#build-status}

Visual Studio Code에서 Java 소스 코드를 편집할 때, Java 언어 서버는 필요한 언어 기능을 제공하기 위해 작업 공간을 빌드하고 있습니다. 상태 표시줄의 언어 상태 항목을 클릭하여 자세한 빌드 작업 상태를 보고 뒤에서 무슨 일이 일어나고 있는지 볼 수 있습니다. 또한 언어 서버가 Java 프로젝트를 여는 중이라는 알림이 표시될 때 **세부 정보 확인** 링크를 선택하여 빌드 작업 상태를 볼 수 있습니다.

<video autoplay loop muted playsinline controls title="Java 프로젝트의 빌드 상태" style={{ maxWidth: "100%" }}>

  <source src="https://code.visualstudio.com/docs/java/java-project/java.build.status.mp4" type="video/mp4" />
</video>

### 추가 기능 {#additional-resources}

Java의 다양한 빌드 시스템을 지원하는 여러 Visual Studio Code 확장이 있습니다. 아래는 여러 인기 있는 빌드 시스템을 위한 확장입니다.

- [Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven)
- [Gradle for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle)
- [Bazel for Java](https://marketplace.visualstudio.com/items?itemName=sfdc.bazel-vscode-java) ([Bazel](https://marketplace.visualstudio.com/items?itemName=BazelBuild.vscode-bazel)은 `BUILD` 파일용이며, Java 통합은 없음)

위 기능을 사용하면서 문제가 발생하면 [이슈](https://github.com/microsoft/vscode-java-pack/issues)를 등록하여 문의할 수 있습니다.

## 다음 단계 {#next-steps}

다음 내용에 대해 자세히 알아보세요:

- [Java 편집](/docs/java/java-editing.md) - VS Code의 Java 편집 기능을 살펴보세요.
- [Java 디버깅](/docs/java/java-debugging.md) - VS Code로 Java 프로젝트를 디버깅하는 방법을 알아보세요.
- [Java 테스팅](/docs/java/java-testing.md) - JUnit과 TestNG 케이스에 VS Code를 사용하세요.
- [Java 확장](/docs/java/extensions.md) - VS Code의 더 많은 유용한 Java 확장에 대해 알아보세요.

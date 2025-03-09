---
Order: 7
Area: java
TOCTitle: 실행 및 디버그
ContentId: 929e5410-3bfe-4107-b331-565afe5d341f
PageTitle: Visual Studio Code에서 Java 실행 및 디버그
DateApproved: 12/9/2021
MetaDescription: Java 소스 코드를 로컬 및 클라우드에서 실행하고 디버그하는 방법을 확인하세요.
MetaSocialImage:
---

# Java 실행 및 디버깅 {#running-and-debugging-java}

Visual Studio Code는 [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug) 확장을 통해 Java 애플리케이션을 디버그할 수 있습니다. 이는 [Java Debug Server](https://github.com/microsoft/java-debug)를 기반으로 한 경량 Java 디버거로, [Red Hat의 Java™ 언어 지원](https://marketplace.visualstudio.com/items?itemName=redhat.java)을 확장합니다.

지원되는 디버깅 기능 목록은 다음과 같습니다:

- 실행/첨부
- 중단점
- 예외
- 일시 중지 및 계속
- 단계 들어가기/나가기/넘기기
- 변수
- 호출 스택
- 스레드
- 디버그 콘솔
- 평가
- 핫 코드 교체

Java 디버거는 오픈 소스 프로젝트로, GitHub 저장소를 통해 기여자들의 협업을 환영합니다:

- [Debugger for Java](https://github.com/microsoft/vscode-java-debug)
- [Visual Studio Code용 Java Debug Server](https://github.com/microsoft/java-debug)

아래 기능을 사용하는 동안 문제가 발생하면 [이슈](https://github.com/microsoft/vscode-java-pack/issues)를 통해 문의할 수 있습니다.

## 설치 {#install}

Visual Studio Code에서 완전한 Java 언어 지원을 받으려면 [Java 확장 팩](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)을 설치할 수 있습니다. 이 팩에는 Debugger for Java 확장이 포함되어 있습니다.

<button><a class="install-extension-btn" href="vscode:extension/vscjava.vscode-java-pack">Java 확장 팩 설치</a></button>

> 확장 팩 시작 방법에 대한 자세한 내용은 [Java 시작하기](/docs/java/java-tutorial.md) 튜토리얼을 참조하세요.

## 구성 {#configure}

기본적으로 디버거는 메인 클래스를 자동으로 찾아 메모리에 기본 실행 구성을 생성하여 애플리케이션을 실행합니다.

실행 구성을 사용자 지정하고 지속하려면 **Run and Debug** 보기에서 **create a launch.json file** 링크를 선택할 수 있습니다.

![디버그 메뉴](images/java-debugging/run-debug-button.png)

`launch.json` 파일은 작업 공간(프로젝트 루트 폴더)의 `.vscode` 폴더에 위치합니다.

`launch.json`을 만드는 방법에 대한 자세한 내용은 [실행 구성](/docs/editor/debugging.md#launch-configurations)을 참조하세요. Java에 대한 구성 옵션에 대한 자세한 내용은 [구성 옵션](/docs/java/java-debugging.md#configuration-options)을 참조하세요.

## 실행 및 디버그 {#run-and-debug}

디버거 확장은 Java 애플리케이션을 실행하고 디버그하는 여러 가지 방법을 제공합니다.

### CodeLens에서 실행 {#run-from-codelens}

`main()` 함수의 [CodeLens](/blogs/2017/02/12/code-lens-roundup.md)에서 **Run|Debug**를 찾을 수 있습니다.

![CodeLens](images/java-debugging/java-codelens.png)

### 편집기 메뉴에서 실행 {#run-from-editor-menu}

디버깅을 시작하는 또 다른 방법은 상단 편집기 제목 표시줄에서 **Run Java** 또는 **Debug Java** 메뉴를 선택하는 것입니다.

![편집기 메뉴](images/java-debugging/run-menu.png)

### F5 키를 눌러 실행 {#run-from-pressing-f5}

`F5`를 누르면 디버거가 프로젝트의 진입점을 자동으로 찾아 디버깅을 시작합니다. 또한 VS Code의 사이드 바에 있는 **Run and Debug** 보기에서 디버깅 세션을 시작할 수 있습니다. 자세한 내용은 [VS Code에서 디버깅](/docs/editor/debugging.md)을 참조하세요.

## 단일 파일 디버깅 {#debugging-single-files}

빌드 도구로 관리되는 Java 프로젝트 디버깅 지원 외에도 VS Code는 프로젝트 없이 단일 Java 파일 디버깅도 지원합니다.

<video autoplay loop muted playsinline controls title="단일 Main.java 파일 디버깅" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-debugging/single-file-debugging.mp4" type="video/mp4" />
</video>

## 디버그 세션 입력 {#debug-session-inputs}

VS Code의 기본 디버그 콘솔은 입력을 지원하지 않습니다. 프로그램이 터미널에서 입력을 필요로 하는 경우, VS Code 내의 통합 터미널(`Ctrl+\`) 또는 외부 터미널을 사용하여 실행할 수 있습니다. 또한 사용자 설정 `java.debug.settings.console`을 사용하여 모든 Java 디버그 세션에 대한 전역 콘솔을 구성할 수 있습니다.

<video autoplay loop muted playsinline controls title="통합 터미널을 통해 입력을 받는 Java 앱 디버깅" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-debugging/launch-in-terminal.mp4" type="video/mp4" />
</video>

## 중단점 {#breakpoints}

Debugger for Java는 라인 중단점, 조건부 중단점, 데이터 중단점, 로그포인트와 같은 다양한 중단점을 지원합니다.

### 중단점 - 조건부 중단점 {#breakpoint-conditional-breakpoint}

표현식 평가의 도움으로 디버거는 조건부 중단점도 지원합니다. 표현식이 true로 평가될 때 중단점을 설정할 수 있습니다.

<video autoplay loop muted playsinline controls title="i==1000일 때 조건부 중단점 설정" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-debugging/conditional-bp.mp4" type="video/mp4" />
</video>

### 중단점 - 데이터 중단점 {#breakpoint-data-breakpoint}

변수가 값을 변경할 때 디버거가 중단되도록 할 수 있습니다. 데이터 중단점은 디버그 세션 내에서만 설정할 수 있습니다. 즉, 애플리케이션을 실행하고 일반 중단점에서 중단해야 합니다. 그런 다음 **변수** 보기에서 필드를 선택하고 데이터 중단점을 설정할 수 있습니다.

![데이터 중단점](images/java-debugging/data-breakpoint.png)

### 중단점 - 로그포인트 {#breakpoint-logpoints}

[로그포인트](/blogs/2018/07/12/introducing-logpoints-and-auto-attach.md#introducing-logpoints)는 Java 디버거에서도 지원됩니다. 로그포인트를 사용하면 코드를 편집하지 않고 디버그 콘솔에 출력을 보낼 수 있습니다. 로그포인트는 중단점과 달리 애플리케이션의 실행 흐름을 중단하지 않습니다.

<video autoplay loop muted playsinline controls title="디버그 콘솔에 result.size 값을 출력하는 로그포인트 추가" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-debugging/logpoints.mp4" type="video/mp4" />
</video>

### 중단점 - 트리거된 중단점 {#breakpoint-triggered-breakpoints}

트리거된 중단점은 다른 중단점이 히트될 때 자동으로 활성화되는 중단점입니다. 이는 특정 전제 조건 후에만 발생하는 코드의 실패 사례를 진단할 때 매우 유용할 수 있습니다.

트리거된 중단점은 글리프 여백을 마우스 오른쪽 버튼으로 클릭하고 **트리거된 중단점 추가**를 선택한 다음 다른 중단점이 중단점을 활성화하는지 선택하여 설정할 수 있습니다.

<video autoplay loop controls muted style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/assets/docs/editor/debugging/debug-triggered-breakpoint.mp4" type="video/mp4" />
</video>

## 표현식 평가 {#expression-evaluation}

디버거는 **WATCH** 창과 디버그 콘솔에서 표현식을 평가할 수 있습니다.

<video autoplay loop muted playsinline controls title="소유자 객체를 표시하기 위해 WATCH 창에 표현식 추가" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-debugging/expression-evaluation.mp4" type="video/mp4" />
</video>

## 핫 코드 교체 {#hot-code-replace}

디버거가 지원하는 또 다른 고급 기능은 '핫 코드' 교체입니다. 핫 코드 교체(HCR)는 디버거가 클래스 변경 사항을 디버깅 채널을 통해 다른 Java 가상 머신(JVM)으로 전송하는 디버깅 기술입니다. HCR은 실험적 개발을 촉진하고 반복적인 시행착오 코딩을 촉진합니다. 이 새로운 기능을 사용하면 디버깅 세션을 시작하고 개발 환경에서 Java 파일을 변경할 수 있으며, 디버거는 실행 중인 JVM에서 코드를 교체합니다. 재시작이 필요하지 않기 때문에 "핫"이라고 합니다. 아래는 VS Code에서 Debugger for Java를 사용하여 HCR을 사용하는 방법을 설명합니다.

<video autoplay loop muted playsinline controls title="디버그 세션 중 문자열 출력을 변경하기 위해 핫 코드 교체 사용" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-debugging/hcr.mp4" type="video/mp4" />
</video>

디버그 설정 `java.debug.settings.hotCodeReplace`를 사용하여 핫 코드 교체를 트리거하는 방법을 제어할 수 있습니다. 가능한 설정 값은 다음과 같습니다:

- `manual` - 변경 사항을 적용하려면 도구 모음을 클릭합니다(기본값).
- `auto` - 컴파일 후 변경 사항을 자동으로 적용합니다.
- `never` - 핫 코드 교체를 비활성화합니다.

## 단계 필터링 {#step-filtering}

확장은 디버깅 중에 보고 싶지 않거나 단계별로 진행하고 싶지 않은 유형을 필터링하는 단계 필터를 지원합니다. 이 기능을 사용하면 `launch.json` 내에서 필터링할 패키지를 구성하여 단계별로 진행할 때 건너뛸 수 있습니다.

<video autoplay loop muted playsinline controls title="java.lang.ClassLoader로 들어가는 것을 피하기 위해 단계 필터 추가" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-debugging/step-filter.mp4" type="video/mp4" />
</video>

## 구성 옵션 {#configuration-options}

디버거를 구성할 수 있는 많은 옵션과 설정이 있습니다. 예를 들어, JVM 인수 및 환경 변수를 구성하는 것은 실행 옵션으로 쉽게 수행할 수 있습니다.

<video autoplay loop muted playsinline controls title="작업 공간 launch.json 파일에 다양한 구성 옵션 추가" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com/docs/java/java-debugging/launch-configuration.mp4" type="video/mp4" />
</video>

프로젝트 설정에 대한 도움말은 [Red Hat의 Java™ 언어 지원](https://marketplace.visualstudio.com/items?itemName=redhat.java) 확장 문서를 참조하세요.

많이 사용되는 설정에 대한 샘플은 [VS Code Java 디버거 구성](https://github.com/foreverfl/vscode/blob/main/Configuration.md)에서 확인할 수 있습니다. 이 문서는 Java 디버거가 자동으로 구성을 생성하는 방법과 수정이 필요한 경우 Main 클래스, 다양한 인수, 환경, 다른 Java 프로세스에 연결 및 더 고급 기능 사용 방법을 설명합니다.

아래는 `Launch` 및 `Attach`에 사용할 수 있는 모든 구성입니다. `launch.json` 파일을 작성하는 방법에 대한 자세한 내용은 [디버깅](/docs/editor/debugging.md)을 참조하세요.

### Launch {#launch}

- `mainClass` (필수) - 프로그램 진입점의 완전한 클래스 이름(예: [java module name/]com.xyz.MainApp) 또는 java 파일 경로.
- `args` - 프로그램에 전달되는 명령줄 인수. `"$\{command:SpecifyProgramArgs\}
"`를 사용하여 프로그램 인수를 묻는 메시지를 표시합니다. 문자열 또는 문자열 배열을 허용합니다.
- `sourcePaths` - 프로그램의 추가 소스 디렉토리. 디버거는 기본적으로 프로젝트 설정에서 소스 코드를 찾습니다. 이 옵션을 사용하면 디버거가 추가 디렉토리에서 소스 코드를 찾을 수 있습니다.
- `modulePaths` - JVM을 실행하기 위한 모듈 경로. 지정하지 않으면 디버거가 현재 프로젝트에서 자동으로 해결합니다.
  - `$Auto` - 현재 프로젝트의 모듈 경로를 자동으로 해결합니다.
  - `$Runtime` - 현재 프로젝트의 '런타임' 범위 내의 모듈 경로.
  - `$Test` - 현재 프로젝트의 '테스트' 범위 내의 모듈 경로.
  - `!/path/to/exclude` - 지정된 경로를 모듈 경로에서 제외합니다.
  - `/path/to/append` - 지정된 경로를 모듈 경로에 추가합니다.
- `classPaths` - JVM을 실행하기 위한 클래스 경로. 지정하지 않으면 디버거가 현재 프로젝트에서 자동으로 해결합니다.
  - `$Auto` - 현재 프로젝트의 클래스 경로를 자동으로 해결합니다.
  - `$Runtime` - 현재 프로젝트의 '런타임' 범위 내의 클래스 경로.
  - `$Test` - 현재 프로젝트의 '테스트' 범위 내의 클래스 경로.
  - `!/path/to/exclude` - 지정된 경로를 클래스 경로에서 제외합니다.
  - `/path/to/append` - 지정된 경로를 클래스 경로에 추가합니다.
- `encoding` - JVM의 `file.encoding` 설정. 지정하지 않으면 'UTF-8'이 사용됩니다. 가능한 값은 [지원되는 인코딩](https://docs.oracle.com/javase/8/docs/technotes/guides/intl/encoding.doc.html)에서 찾을 수 있습니다.
- `vmArgs` - JVM의 추가 옵션 및 시스템 속성(예: -Xms\<size\> -Xmx\<size\> -D\<name\>=\<value\>), 문자열 또는 문자열 배열을 허용합니다.
- `projectName` - 디버거가 클래스를 검색하는 선호 프로젝트. 다른 프로젝트에 중복된 클래스 이름이 있을 수 있습니다. 이 설정은 디버거가 프로그램을 실행할 때 지정된 메인 클래스를 찾을 때도 작동합니다. 작업 공간에 여러 Java 프로젝트가 있는 경우 필수이며, 그렇지 않으면 표현식 평가 및 조건부 중단점이 작동하지 않을 수 있습니다.
- `cwd` - 프로그램의 작업 디렉토리. 기본값은 `$\{workspaceFolder\}
`입니다.
- `env` - 프로그램의 추가 환경 변수.
- `envFile` - 환경 변수 정의가 포함된 파일의 절대 경로.
- `stopOnEntry` - 실행 후 프로그램을 자동으로 일시 중지합니다.
- `console` - 프로그램을 실행할 지정된 콘솔. 지정하지 않으면 `java.debug.settings.console` 사용자 설정에서 지정된 콘솔을 사용합니다.
  - `internalConsole` - VS Code 디버그 콘솔(입력 스트림 지원 안 함).
  - `integratedTerminal` - VS Code 통합 터미널.
  - `externalTerminal` - 사용자 설정에서 구성할 수 있는 외부 터미널.
- `shortenCommandLine` - 프로젝트에 긴 클래스 경로 또는 큰 VM 인수가 있는 경우, 프로그램을 실행하는 명령줄이 OS에서 허용하는 최대 명령줄 문자열 제한을 초과할 수 있습니다. 이 구성 항목은 명령줄을 단축하는 여러 접근 방식을 제공합니다. 기본값은 `auto`입니다.
  - `none` - 표준 명령줄 'java \{options\} classname \{args\}'로 프로그램을 실행합니다.
  - `jarmanifest` - 클래스 경로 매개변수를 임시 classpath.jar 파일로 생성하고 명령줄 'java -cp classpath.jar classname \{args\}'로 프로그램을 실행합니다.
  - `argfile` - 클래스 경로 매개변수를 임시 인수 파일로 생성하고 명령줄 'java @argfile \{args\}'로 프로그램을 실행합니다. 이 값은 Java 9 이상에만 적용됩니다.
  - `auto` - 명령줄 길이를 자동으로 감지하고 적절한 접근 방식을 통해 명령줄을 단축할지 결정합니다.
- `stepFilters` - 단계별로 진행할 때 건너뛸 클래스를 지정합니다.
  - `classNameFilters` - [**사용 중단됨** - `skipClasses`로 대체됨] 단계별로 진행할 때 지정된 클래스를 건너뜁니다. 클래스 이름은 완전히 지정되어야 합니다. 와일드카드가 지원됩니다.
  - `skipClasses` - 단계별로 진행할 때 지정된 클래스를 건너뜁니다. '$JDK' 및 '$Libraries'와 같은 내장 변수를 사용하여 클래스 그룹을 건너뛰거나 `java.*`, `*.Foo`와 같은 특정 클래스 이름 표현식을 추가할 수 있습니다.
  - `skipSynthetics` - 단계별로 진행할 때 합성 메서드를 건너뜁니다.
  - `skipStaticInitializers` - 단계별로 진행할 때 정적 초기화 메서드를 건너뜁니다.
  - `skipConstructors` - 단계별로 진행할 때 생성자 메서드를 건너뜁니다.

### Attach {#attach}

- `hostName` (필수) - 원격 디버그 대상의 호스트 이름 또는 IP 주소.
- `port` (필수) - 원격 디버그 대상의 디버그 포트.
- `processId` - 첨부할 프로세스를 선택하거나 정수로 프로세스 ID를 사용합니다.
  - `$\{command:PickJavaProcess\}
` - 첨부할 프로세스를 선택합니다.
  - 정수 PID - 지정된 로컬 프로세스에 첨부합니다.
- `timeout` - 다시 연결하기 전의 시간 초과 값(밀리초, 기본값 30000ms).
- `sourcePaths` - 프로그램의 추가 소스 디렉토리. 디버거는 기본적으로 프로젝트 설정에서 소스 코드를 찾습니다. 이 옵션을 사용하면 디버거가 추가 디렉토리에서 소스 코드를 찾을 수 있습니다.
- `projectName` - 디버거가 클래스를 검색하는 선호 프로젝트. 다른 프로젝트에 중복된 클래스 이름이 있을 수 있습니다. 이 설정은 디버거가 프로그램을 실행할 때 지정된 메인 클래스를 찾을 때도 작동합니다. 작업 공간에 여러 Java 프로젝트가 있는 경우 필수이며, 그렇지 않으면 표현식 평가 및 조건부 중단점이 작동하지 않을 수 있습니다.
- `stepFilters` - 단계별로 진행할 때 건너뛸 클래스를 지정합니다.
  - `classNameFilters` - [**사용 중단됨** - `skipClasses`로 대체됨] 단계별로 진행할 때 지정된 클래스를 건너뜁니다. 클래스 이름은 완전히 지정되어야 합니다. 와일드카드가 지원됩니다.
  - `skipClasses` - 단계별로 진행할 때 지정된 클래스를 건너뜁니다. '$JDK' 및 '$Libraries'와 같은 내장 변수를 사용하여 클래스 그룹을 건너뛰거나 `java.*`, `*.Foo`와 같은 특정 클래스 이름 표현식을 추가할 수 있습니다.
  - `skipSynthetics` - 단계별로 진행할 때 합성 메서드를 건너뜁니다.
  - `skipStaticInitializers` - 단계별로 진행할 때 정적 초기화 메서드를 건너뜁니다.
  - `skipConstructors` - 단계별로 진행할 때 생성자 메서드를 건너뜁니다.

### 사용자 설정 {#user-settings}

- `java.debug.logLevel`: VS Code로 전송되는 디버거 로그의 최소 수준, 기본값은 `warn`.
- `java.debug.settings.showHex`: **변수**에서 숫자를 16진수 형식으로 표시, 기본값은 `false`.
- `java.debug.settings.showStaticVariables`: **변수**에서 정적 변수를 표시, 기본값은 `false`.
- `java.debug.settings.showQualifiedNames`: **변수**에서 완전히 지정된 클래스 이름을 표시, 기본값은 `false`.
- `java.debug.settings.showLogicalStructure`: **변수**에서 Collection 및 Map 클래스의 논리 구조를 표시, 기본값은 `true`.
- `java.debug.settings.showToString`: **변수**에서 'toString' 메서드를 재정의하는 모든 클래스에 대해 'toString()' 값을 표시, 기본값은 `true`.
- `java.debug.settings.maxStringLength`: **변수** 또는 **디버그 콘솔**에 표시되는 문자열의 최대 길이. 이 제한을 초과하는 문자열은 잘립니다. 기본값은 `0`으로, 잘림이 수행되지 않음을 의미합니다.
- `java.debug.settings.hotCodeReplace`: 디버깅 중 변경된 Java 클래스를 다시 로드, 기본값은 `manual`. [Java 언어 지원 확장](https://github.com/redhat-developer/vscode-java)의 `java.autobuild.enabled`가 비활성화되지 않았는지 확인하세요. 사용법 및 제한 사항에 대한 자세한 내용은 [핫 코드 교체 위키 페이지](https://github.com/microsoft/vscode-java-debug/wiki/Hot-Code-Replace)를 참조하세요.
  - manual - 변경 사항을 적용하려면 도구 모음을 클릭합니다.
  - auto - 컴파일 후 변경 사항을 자동으로 적용합니다.
  - never - 변경 사항을 적용하지 않습니다.
- `java.debug.settings.enableHotCodeReplace`: Java 코드에 대한 핫 코드 교체를 활성화합니다. [VS Code Java](https://github.com/redhat-developer/vscode-java)의 자동 빌드가 비활성화되지 않았는지 확인하세요. 사용법 및 제한 사항에 대한 자세한 내용은 [핫 코드 교체 위키 페이지](https://github.com/microsoft/vscode-java-debug/wiki/Hot-Code-Replace)를 참조하세요.
- `java.debug.settings.enableRunDebugCodeLens`: 메인 진입점 위에 실행 및 디버그 버튼에 대한 CodeLens 제공자를 활성화합니다, 기본값은 `true`.
- `java.debug.settings.forceBuildBeforeLaunch`: Java 프로그램을 실행하기 전에 작업 공간을 강제로 빌드합니다, 기본값은 `true`.
- `java.debug.settings.console`: Java 프로그램을 실행할 지정된 콘솔, 기본값은 `integratedTerminal`. 특정 디버그 세션에 대한 콘솔을 사용자 지정하려면 `launch.json`의 `console` 구성을 수정하세요.
  - `internalConsole` - VS Code 디버그 콘솔(입력 스트림 지원 안 함).
  - `integratedTerminal` - VS Code 통합 터미널.
  - `externalTerminal` - 사용자 설정에서 구성할 수 있는 외부 터미널.
- `java.debug.settings.exceptionBreakpoint.skipClasses`: 예외에서 중단할 때 지정된 클래스를 건너뜁니다. '$JDK' 및 '$Libraries'와 같은 내장 변수를 사용하여 클래스 그룹을 건너뛰거나 `java.*`, `*.Foo`와 같은 특정 클래스 이름 표현식을 추가할 수 있습니다.
- `java.debug.settings.stepping.skipClasses`: 단계별로 진행할 때 지정된 클래스를 건너뜁니다. '$JDK' 및 '$Libraries'와 같은 내장 변수를 사용하여 클래스 그룹을 건너뛰거나 `java.*`, `*.Foo`와 같은 특정 클래스 이름 표현식을 추가할 수 있습니다.
- `java.debug.settings.stepping.skipSynthetics`: 단계별로 진행할 때 합성 메서드를 건너뜁니다.
- `java.debug.settings.stepping.skipStaticInitializers`: 단계별로 진행할 때 정적 초기화 메서드를 건너뜁니다.
- `java.debug.settings.stepping.skipConstructors`: 단계별로 진행할 때 생성자 메서드를 건너뜁니다.
- `java.debug.settings.jdwp.limitOfVariablesPerJdwpRequest`: 하나의 JDWP 요청에서 요청할 수 있는 변수 또는 필드의 최대 수. 값이 높을수록 변수 보기를 확장할 때 디버그 대상이 요청되는 빈도가 줄어듭니다. 또한 큰 값은 JDWP 요청 시간 초과를 유발할 수 있습니다. 기본값은 100입니다.
- `java.debug.settings.jdwp.requestTimeout`: 디버거가 대상 JVM과 통신할 때 JDWP 요청의 시간 초과(ms). 기본값은 3000입니다.
- `java.debug.settings.vmArgs`: Java 프로그램을 실행하기 위한 기본 VM 인수. 예를 들어, 힙 크기를 1GB로 늘리고 어설션(assertion)을 활성화하려면 '-Xmx1G -ea'를 사용합니다. 특정 디버그 세션에 대한 VM 인수를 사용자 지정하려면 `launch.json`의 'vmArgs' 구성을 수정할 수 있습니다.
- `java.silentNotification`: 알림을 사용하여 진행 상황을 보고할 수 있는지 여부를 제어합니다. true인 경우 상태 표시줄을 사용하여 진행 상황을 보고합니다. 기본값은 `false`입니다.

## 문제 해결 {#troubleshooting}

디버거를 사용할 때 문제가 발생하면 [vscode-java-debug GitHub 저장소](https://github.com/microsoft/vscode-java-debug/blob/main/Troubleshooting.md)에서 자세한 문제 해결 가이드를 찾을 수 있습니다.

설명된 일반적인 문제는 다음과 같습니다:

- Java 언어 지원 확장이 시작되지 않습니다.
- 빌드 실패, 계속하시겠습니까?
- \*.java가 클래스 경로에 없습니다. 구문 오류만 보고됩니다.
- 프로그램 오류: 메인 클래스 X를 찾거나 로드할 수 없습니다.
- 프로그램이 ClassNotFoundException을 발생시킵니다.
- 핫 코드 교체를 완료하지 못했습니다.
- launch.json에서 원격 디버그 대상의 호스트 이름과 포트를 지정하세요.
- 평가 실패. 이유: 스레드가 다시 시작되었기 때문에 평가할 수 없습니다.
- 메인 메서드가 있는 클래스를 찾을 수 없습니다.
- 디버거를 시작할 때 vscode.java.startDebugSession에 대한 delegateCommandHandler가 없습니다.
- 클래스 경로를 해결하지 못했습니다.
- 요청 유형 "X"는 지원되지 않습니다. "launch" 및 "attach"만 지원됩니다.

## 피드백 및 질문 {#feedback-and-questions}

[vscode-java-debug](https://github.com/microsoft/vscode-java-debug/issues) 저장소에서 전체 문제 목록을 찾을 수 있습니다. [버그 또는 기능 제안](https://github.com/microsoft/vscode-java-debug/issues/new)을 제출하고 커뮤니티 주도 [vscode-java-debug Gitter 채널](https://gitter.im/Microsoft/vscode-java-debug)에 참여할 수 있습니다.

## 다음 단계 {#next-steps}

다음 내용을 읽어보세요:

- [디버깅](/docs/editor/debugging.md) - 프로젝트에서 VS Code의 디버거를 사용하는 방법을 알아보세요.

그리고 Java에 대해:

- [Java 테스트](/docs/java/java-testing.md) - Java Test Runner 확장을 사용하여 VS Code 내에서 Java를 테스트합니다.
- [Java 확장](/docs/java/extensions.md) - VS Code에 대한 더 유용한 Java 확장에 대해 알아보세요.

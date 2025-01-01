# 자바 디버그 구성 {#java-debug-configuration}

## 목차
* [launch.json 자동 생성](#auto-generate-the-launchjson)
* [launch.json 수정](#modify-the-launchjson)
  * [메인](#main)
    * mainClass
    * projectName
  * [인수](#arguments)
    * args
    * vmArgs
  * [환경](#environment)
    * console
    * env
  * [지정된 클래스나 메서드로 들어가지 않기](#dont-step-into-the-specified-classes-or-methods)
    * stepFilters
  * [디버그 대상에 연결](#attach-to-a-debuggee)
    * hostName
    * port
    * [mvn 작업에 연결](#attach-to-mvn-task)
    * [내장된 maven tomcat 서버에 연결](#attach-to-embedded-maven-tomcat-server)
    * [javac를 빌더로 사용하고 java 프로세스에 연결](#use-javac-as-the-builder-and-attach-to-java-process)
* [settings.json 수정 (사용자 설정)](#modify-the-settingsjson-user-setting)
  * java.debug.settings.console
  * java.debug.settings.forceBuildBeforeLaunch
  * java.debug.settings.onBuildFailureProceed 
  * java.debug.settings.hotCodeReplace
  * java.debug.settings.enableRunDebugCodeLens
* [FAQ](#faq)

디버거는 두 가지 구성 유형을 제공합니다: *launch.json* 및 *settings.json* (사용자 설정). 지원되는 구성 목록은 [README](https://github.com/Microsoft/vscode-java-debug#options)를 참조하세요. launch.json은 디버그 세션별로 구성을 제어하는 데 사용되며, 사용자 설정은 전체 작업 공간 또는 VS Code에서 공유됩니다.

## launch.json 자동 생성 {#auto-generate-the-launchjson}
`Run|Debug` CodeLens 또는 `Run`/`Debug` 컨텍스트 메뉴를 통해 프로그램을 실행할 때 디버거가 자동으로 실행 구성을 생성합니다.
![runMenu](https://user-images.githubusercontent.com/14052197/67181889-715bb380-f410-11e9-9aef-c27ce697daa0.gif)

## launch.json 수정 {#modify-the-launchjson}
VS Code 창에서 `.vscode/launch.json`을 볼 수 없는 경우 "Run and Debug" 뷰렛으로 이동하여 초기 launch.json을 생성할 수 있습니다.
![create launch.json](https://user-images.githubusercontent.com/14052197/172300183-7758eb9b-5e61-485b-b238-a63a98a9fb11.png)

한편, 디버거는 여러 구성 템플릿을 제공하여 쉽게 새 구성을 추가할 수 있도록 도와줍니다. launch.json에서 `"java"` 또는 `""`를 입력하면 자동 완성 제안이 트리거됩니다.
![launchConfig](https://user-images.githubusercontent.com/14052197/67182212-3908a500-f411-11e9-9467-48ba2f6e0e39.gif)

구성을 수동으로 편집하려는 경우, 아래는 일반적인 디버그 구성에 대한 설명과 샘플입니다.
### 메인 {#main}
* `mainClass` - mainClass는 프로그램 진입점을 정의하는 데 사용되며 가장 중요한 구성입니다. 디버거는 이 키를 구성하는 데 도움이 되는 세 가지 옵션을 제공합니다. 아래 샘플을 참조하세요.
  * `"mainClass": ""`  
  여기에 무엇을 설정해야 할지 모르는 경우 비워 두세요. 디버거가 작업 공간에서 가능한 모든 메인 클래스를 검색한 다음 선택할 목록을 표시합니다.  
![emptyMainClass](https://user-images.githubusercontent.com/14052197/67261011-25bd0e80-f4d1-11e9-966d-3e82a4e261ce.gif)

  * `"mainClass": "${file}"`  
  여러 개의 메인 Java 파일이 있는 경우 이를 사용하여 현재 포커스 프로그램으로 자동 전환합니다. 디버거가 현재 활성 Java 파일에서 메인 클래스를 해결하고 이를 실행 메인 클래스로 설정합니다.
![currentFile](https://user-images.githubusercontent.com/14052197/67183367-d7960580-f413-11e9-9773-7df735710054.gif)

  * `"mainClass": "com.microsoft.app.myApp"`  
  완전히 자격이 있는 클래스 이름으로, 일반적으로 디버거의 자동 생성에 의해 채워집니다.  
![mainClass](https://user-images.githubusercontent.com/14052197/67190742-17181e00-f423-11e9-98ab-1c568f220ba7.gif)

* `projectName` - 디버거가 클래스를 검색하는 데 선호하는 프로젝트입니다. 평가 기능에 필요합니다. 대부분의 경우 디버거가 구성을 자동으로 생성합니다. 수동으로 구성하려는 경우 다음 규칙을 따르세요.
  * maven 프로젝트를 열 때 프로젝트 이름은 `artifactId`입니다.
  * gradle 프로젝트를 열 때 프로젝트 이름은 `baseName` 또는 루트 폴더 이름입니다.
  * 다른 Java 파일을 열 때 launch.json을 비워 두고 디버거가 프로젝트 이름을 자동으로 생성하도록 합니다.

  > 프로 팁: 프로젝트 이름을 얻는 가장 쉬운 방법은 [Java Dependency Viewer](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency) 확장을 설치하는 것입니다. JAVA DEPENDENCIES 뷰의 최상위 노드가 프로젝트 이름입니다.  
![java-dependency-viewer](https://user-images.githubusercontent.com/14052197/67185034-7cfea880-f417-11e9-8a3b-a3af1a9e86bb.png)

### 인수 {#arguments}
* `args` - 프로그램 인수는 프로그램에 애플리케이션 구성을 전달하는 데 사용되며, main 메서드의 "args" 문자열 배열 매개변수를 통해 액세스할 수 있습니다 `public static void main(String[] args)`. 세 가지 종류의 값을 허용합니다. 아래 샘플을 참조하세요.
  * `"args": "arg0 arg1"`  
  공백으로 구분된 문자열 값.
  ![programArgs](https://user-images.githubusercontent.com/14052197/67191536-5abf5780-f424-11e9-9664-6cc5805225bb.gif)

  * `"args": ["arg0", "arg1"]`  
  문자열 배열.
  * `"args": "${command:SpecifyProgramArgs}"`  
  디버거가 프로그램을 실행하기 전에 인수 값을 입력할 수 있는 입력 상자를 표시합니다. 여러 데이터 세트를 대상으로 프로그램을 실행할 때 편리합니다.  
  ![specifyArgs](https://user-images.githubusercontent.com/14052197/67191890-0ff20f80-f425-11e9-8df2-5fd98e61c204.gif)

* `vmArgs` - VM 인수는 JVM 옵션 및 플랫폼 속성을 구성하는 데 사용됩니다. 대부분의 이러한 인수는 접두사(-D, -X, -XX)를 가집니다. 예를 들어, *-Xms256m* 인수는 초기 Java 힙 크기를 256MB로 정의합니다. 또한 *-DpropertyName=propertyValue*를 사용하여 프로그램의 시스템 속성을 구성할 수 있습니다. 이러한 속성은 API *System.getProperty(propertyName)*를 통해 읽습니다. 문자열 또는 문자열 배열을 허용합니다. 아래 샘플을 참조하세요.
  * `"vmArgs": "-Xms256m -Xmx1g -Dserver=production"`  
  공백으로 구분된 문자열 값.
  * `"vmArgs": ["-Xms256m", "-Xmx1g", "-Dserver=production"]`  
  문자열 배열.

### 환경 {#environment}
- `console` - 현재 프로그램을 실행할 지정된 콘솔입니다. 현재 기본값은 `integratedTerminal`입니다. 전체 작업 공간에 대해 전역 사용자 설정 `java.debug.settings.console`을 통해 사용자 지정하거나 각 디버그 세션에 대해 launch.json에서 `console`을 사용자 지정할 수 있습니다. launch.json의 `console` 옵션(제공된 경우)은 사용자 설정의 `java.debug.settings.console`보다 우선합니다.
  * `"console": "internalConsole"`  
  VS Code 디버그 콘솔(입력 스트림 지원 안 됨). 백엔드 애플리케이션을 개발하는 경우 `internalConsole`을 권장합니다.
  ![internalConsole](https://user-images.githubusercontent.com/14052197/67193516-fef6cd80-f427-11e9-8a97-9014470c3a4d.gif)

  * `"console": "integratedTerminal"`  
  VS Code 통합 터미널. io 입력 요구 사항이 있는 콘솔 애플리케이션을 개발하는 경우 터미널을 사용하여 사용자 입력을 수락해야 합니다. 예를 들어, *Scanner* 클래스를 사용하여 사용자 입력을 받습니다.  
  ![integratedTerminal](https://user-images.githubusercontent.com/14052197/67195762-251e6c80-f42c-11e9-89d0-9545560beea9.gif)

  * `"console": "externalTerminal"`  
  사용자 설정에서 구성할 수 있는 외부 터미널. 사용자 시나리오는 통합 터미널과 동일합니다. 차이점은 외부 터미널 창을 열어 프로그램을 실행하는 것입니다.  
  ![externalTerminal](https://user-images.githubusercontent.com/14052197/67196194-eccb5e00-f42c-11e9-9d4c-6baa5eec18bc.gif)

- `env` - 프로그램의 추가 환경 변수입니다. `System.getenv(key)`를 통해 액세스할 수 있습니다. 키-값 쌍을 허용합니다.
  ```json
    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "java",
                "name": "Launch Hello",
                "request": "launch",
                "env": {
                    "HOST": "127.0.0.1",
                    "PORT": 8080
                }
            }
        ]
    }
  ```

- `envFile` - 환경 변수 정의가 포함된 파일의 절대 경로입니다. 절대 경로 배열을 제공하여 여러 파일을 지정할 수 있습니다.
  ```json
    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "java",
                "name": "Launch Hello",
                "request": "launch",
                "envFile": "${workspaceFolder}/.env"
            }
        ]
    }
  ```

### 지정된 클래스나 메서드로 들어가지 않기 {#dont-step-into-the-specified-classes-or-methods}

- `stepFilters` - 들어가고 싶지 않은 지정된 클래스나 메서드를 건너뜁니다. 클래스 이름은 완전히 자격이 있어야 합니다. 와일드카드를 지원합니다.
  - 클래스 로더 건너뛰기.
    ```json
    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "java",
                "name": "Launch Hello",
                "request": "launch",
                "stepFilters": {
                    "skipClasses": [
                        "java.lang.ClassLoader",
                    ]
                }
            }
        ]
    }
    ```
    ![skipClassLoader](https://user-images.githubusercontent.com/14052197/67254877-ff3bab00-f4b1-11e9-8da0-22b49935bd57.gif)

  - JDK 클래스 건너뛰기.
    ```json
    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "java",
                "name": "Launch Hello",
                "request": "launch",
                "stepFilters": {
                    "skipClasses": [
                        "$JDK"
                    ]
                }
            }
        ]
    }
    ```
    ![skipJDK](https://user-images.githubusercontent.com/14052197/67255028-9dc80c00-f4b2-11e9-9113-bef0c0bdf5cb.gif)

  - 생성자 및 합성 메서드 건너뛰기.
    ```json
    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "java",
                "name": "Launch Hello",
                "request": "launch",
                "stepFilters": {
                    "skipSynthetics": true,
                    "skipStaticInitializers": true,
                    "skipConstructors": true
                }
            }
        ]
    }
    ```
    ![skipMethods](https://user-images.githubusercontent.com/14052197/67255209-83daf900-f4b3-11e9-8533-70f6ff941e8d.gif)

### 디버그 대상에 연결 {#attach-to-a-debuggee}
- `hostName` - 연결하려는 디버그 대상의 호스트 이름 또는 IP 주소입니다.
- `port` - 연결하려는 디버그 대상의 포트입니다.

디버그 대상에 연결하기 전에 디버그 모드로 디버그 대상 프로그램을 시작해야 합니다. 디버그 모드의 표준 명령줄은 `java -agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=5005 -cp bin MyApp`과 같으며, 디버그 대상의 디버그 포트는 *5005*입니다.
```json
{
    "type": "java",
    "name": "Debug (Attach)",
    "request": "attach",
    "hostName": "localhost",
    "port": 5005
}
```

일부 경우에는 외부 빌더 및 실행기를 사용하여 프로그램을 시작한 다음 연결할 수 있습니다. 이러한 작업을 [tasks.json](https://code.visualstudio.com/docs/editor/tasks)에 구성하고 연결할 수 있습니다. 예를 들어, mvn 명령을 통해 springboot 애플리케이션을 실행한 다음 디버거를 연결합니다.
#### mvn 작업에 연결 {#attach-to-mvn-task}
1) .vscode/tasks.json에 명령을 구성합니다 - mvn 작업은 백그라운드 작업이므로 *problemMatcher* 필터를 사용하여 VS Code가 준비되었음을 알려야 합니다.  
   ```json
    {
        "label": "mvnDebug",
        "type": "shell",
        "command": "mvn spring-boot:run -Dspring-boot.run.jvmArguments=\"-agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=5005\"",
        "isBackground": true,
        "problemMatcher": [{
            "pattern": [{
                "regexp": "\\b\\B",
                "file": 1,
                "location": 2,
                "message": 3
            }],
            "background": {
                "activeOnStart": true,
                "beginsPattern": "^.*Attaching agents:.*",
                "endsPattern": "^.*Listening for transport dt_socket at address.*"
            }
        }]
    }
    ```
2) .vscode/launch.json에 `preLaunchTask` 및 디버그 포트를 구성합니다.  
    ```json
    {
        "type": "java",
        "name": "Debug (Attach)",
        "request": "attach",
        "hostName": "localhost",
        "port": 5005,
        "preLaunchTask": "mvnDebug"
    }
    ```
3) <b>F5</b>를 누르면 mvn 작업이 시작되고 디버거가 연결됩니다. 데모를 참조하세요.  
![attachToMvn](https://user-images.githubusercontent.com/14052197/67262705-4f2d6880-f4d8-11e9-9e2d-9c35a6613c08.gif)

#### 내장된 maven tomcat 서버에 연결 {#attach-to-embedded-maven-tomcat-server}
  - 내장된 tomcat 서버에 대한 pom.xml 샘플.  
  ```xml
    ...
    <plugin>
        <groupId>org.apache.tomcat.maven</groupId>
        <artifactId>tomcat7-maven-plugin</artifactId>
        <version>2.2</version>
    </plugin>
    ...
  ```
  - 내장된 maven tomcat 서버에 연결하는 단계.  
  1) .vscode/tasks.json을 사용하여 *run-tomcat* 및 *stop-tomcat* 작업을 구성합니다.  
  ```json
    {
        "version": "2.0.0",
        "tasks": [
            {
                "label": "run-tomcat",
                "type": "shell",
                "command": "MAVEN_OPTS=\"$MAVEN_OPTS -agentlib:jdwp=transport=dt_socket,address=5005,server=y,suspend=n\" ./mvnw tomcat7:run",
                "group": "build",
                "isBackground": true,
                "problemMatcher": [{
                    "pattern": [{
                        "regexp": "\\b\\B",
                        "file": 1,
                        "location": 2,
                        "message": 3
                    }],
                    "background": {
                        "activeOnStart": true,
                        "beginsPattern": "^.*Listening for",
                        "endsPattern": "^.*transport dt_socket at address.*"
                    }
                }]
            },
            {
                "label": "stop-tomcat",
                "type": "shell",
                "command": "echo ${input:terminate}}",
                "problemMatcher": []
            }
        ],
        "inputs": [
            {
                "id": "terminate",
                "type": "command",
                "command": "workbench.action.tasks.terminate",
                "args": "run-tomcat"
            }
        ]
    }
  ```
  2) .vscode/launch.json을 사용하여 연결 구성을 구성합니다. `preLaunchTask`를 사용하여 연결 전에 tomcat을 실행하고, 디버그 종료 후 `postDebugTask`를 사용하여 tomcat을 중지합니다.  
  ```json
    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "java",
                "name": "Debug (Attach)",
                "request": "attach",
                "hostName": "localhost",
                "port": 5005,
                "preLaunchTask": "run-tomcat",
                "postDebugTask": "stop-tomcat"
            }
        ]
    }
  ```
  3) <b>F5</b>를 누르면 tomcat 서버가 자동으로 시작되고 디버거가 연결됩니다. 아래 데모는 tomcat에서 spring mvc를 디버그하는 방법을 보여줍니다.  
  ![attachToEmbeddedTomcat](https://user-images.githubusercontent.com/14052197/67541153-80957680-f71a-11e9-9d59-e9aaa752fe33.gif)

  > 독립형 tomcat 서버에서 Java 웹 애플리케이션을 디버그하려면 VS Code [Tomcat for Java](https://marketplace.visualstudio.com/items?itemName=adashen.vscode-tomcat) 확장을 사용해 보세요.

  > gradle 플러그인을 사용하여 내장된 tomcat 서버를 디버그하려면 [gradle 샘플](https://github.com/microsoft/vscode-java-debug/issues/140#issuecomment-343656398)을 참조하세요.

#### javac를 빌더로 사용하고 java 프로세스에 연결 {#use-javac-as-the-builder-and-attach-to-java-process}
1) .vscode/tasks.json에서 javac 빌더 및 java 실행기 작업을 구성합니다.
    ```json
    {
        "version": "2.0.0",
        "tasks": [
            {
                "label": "build",
                "type": "shell",
                "command": "javac -g -sourcepath ./**/*.java -d ./bin"
            },
            {
                "label": "debug",
                "dependsOn": "build",
                "type": "shell",
                "command": "java -agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=5005 -cp bin app.SimpleCalc",
                "isBackground": true,
                "problemMatcher": [{
                    "pattern": [{
                        "regexp": "\\b\\B",
                        "file": 1,
                        "location": 2,
                        "message": 3
                    }],
                    "background": {
                        "activeOnStart": true,
                        "beginsPattern": "^.*Listening for",
                        "endsPattern": "^.*transport dt_socket at address.*"
                    }
                }]
            }
        ]
    }
    ```
2) .vscode/launch.json에서 `preLaunchTask` 및 디버그 포트를 구성합니다.  
    ```json
    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "java",
                "name": "Debug (Attach)",
                "request": "attach",
                "hostName": "localhost",
                "port": 5005,
                "preLaunchTask": "debug"
            }
        ]
    }
    ```
3) <b>F5</b>를 누르면 작업이 실행되고 디버거가 연결됩니다. 데모를 참조하세요.  
![attachToJava](https://user-images.githubusercontent.com/14052197/67263956-3cb52e00-f4dc-11e9-9c78-6e66cb3d7c2b.gif)

## settings.json 수정 (사용자 설정) {#modify-the-settingsjson-user-setting}
- `java.debug.settings.console` - Java 프로그램을 실행할 지정된 콘솔로 기본값은 `integratedTerminal`입니다. 특정 디버그 세션에 대해 콘솔을 사용자 지정하려면 launch.json의 `console` 옵션을 사용하세요.
  ![terminal](https://user-images.githubusercontent.com/14052197/67256063-cf8fa180-f4b7-11e9-9455-77daad2f0ec9.gif)

- `java.debug.settings.forceBuildBeforeLaunch` - Java 프로그램을 실행하기 전에 작업 공간을 강제로 빌드합니다. 기본값은 `true`입니다. 때때로 *"빌드 실패, 계속하시겠습니까?"* 메시지가 귀찮을 수 있습니다. 이 설정을 비활성화하여 메시지를 억제할 수 있습니다.

- `java.debug.settings.onBuildFailureProceed` - 때때로 *"빌드 실패, 계속하시겠습니까?"* 메시지가 귀찮을 수 있습니다. 이 설정을 사용하여 메시지를 억제하고 계속할 수 있습니다.

- `java.debug.settings.hotCodeReplace` - 디버깅 중에 변경된 Java 클래스를 다시 로드합니다. 기본값은 `manual`입니다. `manual`, `auto`, `never`를 지원합니다.
  - `manual` - 도구 모음을 클릭하여 변경 사항을 적용합니다.  
  ![hcr](https://user-images.githubusercontent.com/14052197/67256313-f5697600-f4b8-11e9-9db6-54540b6350ad.png)
  - `auto` - 저장 후 자동으로 변경 사항을 적용합니다.
  - `never` - 변경 사항을 절대 적용하지 않습니다.

- `java.debug.settings.enableRunDebugCodeLens` - 메인 진입점 위에 *Run* 및 *Debug* 버튼에 대한 코드 렌즈 제공자를 활성화합니다. 기본값은 `true`입니다.
  - `true` - 코드 렌즈를 표시합니다.  
  ![codelens](https://user-images.githubusercontent.com/14052197/67256585-83922c00-f4ba-11e9-883f-2b3de3db2dfa.png)
  - `false` - 호버에 Run/Debug 링크를 표시합니다.  
  ![hover](https://user-images.githubusercontent.com/14052197/67256539-2ac29380-f4ba-11e9-8a5b-e5e1d0a27f0e.png)

## FAQ {#faq}
### 1. 입력을 받을 수 없습니다.  
*Scanner(System.in)*을 사용하여 사용자 입력을 받는 경우 사용자 설정 `java.debug.settings.console`을 `integratedTerminal` 또는 `externalTerminal`로 변경해야 합니다.

### 2. 코드 출력이 DEBUG CONSOLE 패널이 아닌 터미널에 있습니다.  
기본적으로 디버거는 사용자 입력을 더 잘 수락하기 위해 터미널을 사용하여 프로그램을 실행합니다. 터미널 상단에 원래 명령줄이 표시됩니다. 코드 출력을 표시할 더 깨끗한 콘솔을 원하면 사용자 설정 `java.debug.settings.console`을 `internalConsole`로 변경해 보세요. 내부 콘솔(VS Code 내장 DEBUG CONSOLE)은 사용자 입력을 지원하지 않습니다.

### 3. 터미널을 사용할 때 클래스 경로가 변경되었습니다.
명령줄이 너무 길어지지 않도록 하기 위해 디버거는 기본적으로 클래스 경로를 classpath.jar(JDK 8 전용) 또는 argsfile(JDK 9 이상)로 단축합니다. 프로그램에서 원래 클래스 경로 값을 읽어야 하는 경우(예: *System.getProperty("java.class.path")*) 콘솔을 `internalConsole`로 변경하거나 더 높은 JDK(9 이상)를 사용하여 프로그램을 실행해 보세요.

### 4. TransportTimeoutException으로 터미널에서 디버그 대상을 시작하지 못했습니다.  
터미널에서 시작하지 못한 경우 사용자 설정 `java.debug.settings.console`을 `internalConsole`로 변경해 보세요.
---
Order: 14
Area: java
TOCTitle: FAQ
ContentId: 2ad03b46-0779-4c9a-897e-6e6b628f598a
PageTitle: Visual Studio Code의 Java FAQ 및 위키
DateApproved: 8/31/2021
MetaDescription: Visual Studio Code의 Java 자주 묻는 질문과 문제 해결 가이드
---

# 자주 묻는 질문 {#frequent-asked-questions}

Visual Studio Code의 Java에 관심을 가져주셔서 감사합니다! 이 FAQ는 여러분이 가질 수 있는 몇 가지 질문에 대한 답변을 제공할 것입니다.

## 이러한 Java 확장들은 오픈 소스인가요? {#are-these-java-extensions-open-source}

네. Red Hat, Microsoft, VMware가 제공하는 모든 [Java 확장](/docs/java/extensions.md)과 커뮤니티가 지원하는 대부분의 확장은 오픈 소스입니다. 마켓플레이스 페이지에서 그들의 해당 GitHub 저장소를 찾을 수 있습니다.

## Visual Studio Code의 Java에 다른 기능들도 추가될 예정인가요? {#are-there-any-other-features-coming-to-java-on-visual-studio-code}

당연합니다. 우리는 각 확장에 대한 들어오는 요청과 계획된 작업을 추적하기 위해 GitHub 이슈를 사용합니다. 현재 우리는 편집 생산성을 향상시키기 위한 더 많은 리팩토링 및 린팅 기능을 추가하는 것과 더불어, 더욱 빠르게 만들기 위한 성능 개선 작업을 진행하고 있습니다.

우리의 대부분의 작업은 고객 피드백을 통해 수집되고 우선순위가 정해집니다. 의견을 제공하는 데 관심이 있다면, 우리의 프로젝트 저장소에 직접 가서 새로운 이슈를 제출하여 의견을 공유할 수 있습니다.

우리는 팀 내에서 제한된 능력을 가지고 있으며, 훌륭한 Java 커뮤니티로부터 더 많은 기여를 장려하고 싶습니다. 여러분이 아이디어에 열정이 있고 다른 Java 개발자들을 돕고 싶다면, 우리와 함께하시기를 환영합니다! Gradle 지원, 코드 분석 및 테스트 커버리지 도구, 프로파일러, DropWizard, JavaFX, JPA, Play, Akka, OSGi를 포함한 추가 프레임워크 지원 등을 포함한 몇 가지 고려할 만한 영역이 있습니다.

## 다른 IDE의 키보드 단축키를 사용할 수 있나요? {#can-i-use-keyboard-shortcuts-from-other-ide}

물론입니다. VS Code의 [키맵 확장](/docs/getstarted/keybindings.md#keymap-extensions)은 VS Code의 단축키를 다른 에디터의 단축키와 일치하도록 수정합니다. 마켓플레이스의 [키맵 카테고리](https://marketplace.visualstudio.com/search?target=VSCode&category=Keymaps&sortBy=Installs)에서 [IntelliJ IDEA 키바인딩](https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings), [Eclipse 키맵](https://marketplace.visualstudio.com/items?itemName=alphabotsec.vscode-eclipse-keybindings) 및 다른 인기 있는 에디터의 키맵을 찾을 수 있습니다.

## Visual Studio Code의 Java 지원 최신 진행 상황은 어디서 확인할 수 있나요? {#where-can-i-find-the-latest-progress-of-java-support-on-visual-studio-code}

[Java at Microsoft](https://devblogs.microsoft.com/java/) 블로그를 팔로우하시면 우리의 진행 상황을 계속 업데이트받으실 수 있습니다.

VS Code에서 Java를 사용하는 동안, [Java용 확장 팩](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)을 업데이트한 후에 **릴리스 노트** 섹션을 볼 수도 있습니다. 이 노트는 확장에 포함된 주목할 만한 업데이트에 대한 개요를 제공합니다.

## 새로운 Java 버전과 Visual Studio Code를 어떻게 사용할 수 있나요? {#how-can-i-use-visual-studio-code-with-new-java-versions}

JDT의 업스트림 업데이트 덕분에, 이제 VS Code로도 Java 22까지 프로젝트를 빌드할 수 있습니다. 실험적/미리보기 언어 기능을 사용하려면 프로젝트 설정을 수정해야 합니다.

Maven - `pom.xml` 수정:

```xml
  <build>
    <pluginManagement>
      <plugins>
        <plugin>
          <artifactId>maven-compiler-plugin</artifactId>
          <configuration>
            <release>22</release>
            <compilerArgs>--enable-preview</compilerArgs>
          </configuration>
        </plugin>
      </plugins>
    </pluginManagement>
  </build>
```

Gradle:

```groovy
sourceCompatibility = 22
tasks.withType(JavaCompile) {
    options.compilerArgs += '--enable-preview'
}
tasks.withType(Test) {
    jvmArgs += "--enable-preview"
}
```

> 참고: VS Code에서 이미 열려 있는 프로젝트를 수정하는 경우, 작업 공간을 강제로 정리하고 다시 로드해야 할 수 있습니다. 이를 위해 **Java: Clean Java Language Server Workspace** 명령을 실행하세요.

## 기업 프록시 뒤에서 어떻게 사용할 수 있나요? {#how-can-i-use-it-behind-a-corporate-proxy}

기업 프록시 뒤에서 Java 언어 지원(redhat.java) 확장을 사용할 때, 빌드 런타임, Java 종속성 및 해당 소스를 프록시를 통해 다운로드하기 위해 Java 언어 서버가 인터넷에 연결하는 방법을 알려줘야 할 수 있습니다.

이는 VS Code 환경 설정에서 `java.jdt.ls.vmargs` 설정을 구성하여 수행됩니다(한 줄로 작성):

```json
{
  "java.jdt.ls.vmargs": "-Dhttp.proxyHost=webproxy.corp.net -Dhttp.proxyPort=proxyport -Dhttp.proxyUser=user -Dhttp.proxyPassword=password -Dhttps.proxyHost=webproxy.corp.net -Dhttps.proxyPort=proxyport -Dhttps.proxyUser=user -Dhttps.proxyPassword=password"
}
```

## Visual Studio에서도 사용할 수 있나요? {#will-this-be-available-for-visual-studio}

현재 Java 지원을 Visual Studio로 확장할 계획은 없습니다. Java를 위한 훌륭한 IDE들이 이미 있으며, 우리는 다국어 에디터에서 가벼운 경험을 제공하기 위해 VS Code에 집중하고 있습니다.

## VS Code Java는 다른 표시 언어를 지원하나요? {#does-vs-code-java-support-other-display-languages}

현재 우리는 [Java용 디버거](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug), [Java용 테스트 러너](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test), [Java용 Maven](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven), [Java용 프로젝트 관리자](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency)를 포함한 몇 가지 확장에 대해 영어 외에 중국어를 지원합니다. VS Code 표시 언어를 전환하는 방법은 [표시 언어](/docs/getstarted/locales.md)를 참조하세요.

추가 표시 언어 지원에 관심이 있다면 확장 저장소에 기여할 수 있습니다.

## Java 언어 서버의 문제를 해결하고 기여하는 방법 {#how-to-troubleshoot-and-contribute-to-the-java-language-server}

[Java for Visual Studio Code 위키](https://github.com/redhat-developer/vscode-java/wiki)에서 다음에 대한 답변을 찾을 수 있습니다:

1. ["클래스패스가 불완전함" 경고](https://github.com/redhat-developer/vscode-java/wiki/%22Classpath-is-incomplete%22-warning)
2. [Maven 프로젝트를 위한 어노테이션 처리 지원](https://github.com/redhat-developer/vscode-java/wiki/Annotation-Processing-support-for-Maven-projects)
3. [Java 확장에 기여하기](https://github.com/redhat-developer/vscode-java/wiki/Contribute-a-Java-Extension)
4. [포맷터 설정](https://github.com/redhat-developer/vscode-java/wiki/Formatter-settings)
5. [Lombok 지원](https://github.com/redhat-developer/vscode-java/wiki/Lombok-support)
6. [프록시 사용하기](https://github.com/redhat-developer/vscode-java/wiki/Using-a-Proxy)
7. [문제 해결](https://github.com/redhat-developer/vscode-java/wiki/Troubleshooting)

---
Order: 4
Area: java
TOCTitle: Formatting and Linting
ContentId: dd4fa82e-0021-404c-87e4-3b69f1e12463
PageTitle: Visual Studio Code에서의 Java 포맷팅, 린팅, 코드 분석
DateApproved: 12/12/2021
MetaDescription: Visual Studio Code에서의 Java 포맷팅, 린팅, 코드 분석
---

# Java 포맷팅과 린팅 {#java-formatting-and-linting}

[Language Support for Java™ by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.java)는 또한 [포맷팅 설정](https://github.com/redhat-developer/vscode-java/wiki/Formatter-settings)을 제공합니다. Eclipse 포맷터 파일을 내보내서 VS Code 프로젝트에서 사용할 수 있습니다.

추가로, [Checkstyle for Java](https://marketplace.visualstudio.com/items?itemName=shengchen.vscode-checkstyle)와 [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode) 확장 프로그램도 있어서 실시간 린팅과 코드 분석 기능을 제공합니다.

## 포맷터 {#formatter}

**Format Document** 명령을 사용하여 Java 파일을 포맷팅할 수 있습니다. 이전에 포맷터 프로필을 지정하지 않았다면, Java 파일은 기본 설정을 사용하여 포맷팅됩니다.

<video autoplay loop muted playsinline controls video="문서 포맷팅" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com//docs/java/java-linting/formatting.mp4" type="video/mp4" />
</video>

### 포맷터 설정 적용 {#applying-formatter-settings}

Eclipse 스키마의 기존 포맷터 프로필에서 포맷터 설정을 쉽게 적용할 수 있습니다. 예를 들어, Java 프로젝트에 [Google Style](https://raw.githubusercontent.com/google/styleguide/gh-pages/eclipse-java-google-style.xml)을 적용하고 싶다면, `settings.json`에 다음 속성을 설정할 수 있습니다:

```json
"java.format.settings.url": "https://raw.githubusercontent.com/google/styleguide/gh-pages/eclipse-java-google-style.xml",
```

이 속성은 URL이나 로컬 파일 경로로 설정할 수 있습니다. 포맷터 XML 파일에 여러 프로필이 포함되어 있다면, 프로필 이름을 지정할 수 있습니다:

```json
"java.format.settings.profile": "GoogleStyle",
```

포맷터 프로필을 설정한 후, **Format Document** 명령은 특정 프로필을 사용하여 Java 파일을 포맷팅할 것입니다.

### 포맷터 설정 편집 {#editing-formatter-settings}

[Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)는 사용자가 기존 포맷터 프로필을 편집할 수 있도록 에디터를 제공합니다. **Java: Open Java Formatter Settings with Preview** 명령으로 에디터를 열 수 있습니다. 에디터에서 포맷터 설정을 변경하고 효과를 미리볼 수 있습니다. 현재 에디터를 저장하면, 변경 사항이 포맷터 프로필에 저장됩니다.

<video autoplay loop muted playsinline controls title="포맷터 설정 편집" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com//docs/java/java-linting/formatting-editing.mp4" type="video/mp4" />
</video>

:::note
포맷터 설정 에디터는 로컬 포맷터 프로필만 지원합니다. 작업 공간에 원격 포맷터 프로필이 포함되어 있다면, `.vscode` 폴더에 다운로드하도록 안내할 것입니다.
:::

에디터에서 설정을 편집할 때, 오른쪽 **Preview** 패널에서 변경 사항의 효과를 미리볼 수 있습니다.

<video autoplay loop muted playsinline controls title="포맷팅 효과 미리보기" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com//docs/java/java-linting/formatting-preview.mp4" type="video/mp4" />
</video>

변경 사항을 실행 취소하고 다시 실행할 수도 있습니다.

<video autoplay loop muted playsinline controls title="포맷팅 효과 변경 사항 실행 취소 및 다시 실행" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com//docs/java/java-linting/formatting-undoredo.mp4" type="video/mp4" />
</video>

## SonarLint {#sonarlint}

[SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)는 코딩하면서 버그와 보안 이슈를 찾고 수정하는 데 도움을 주는 사용하기 쉬운 확장 프로그램입니다. 이 확장 프로그램은 백그라운드에서 실행되며, 맞춤법 검사기처럼 품질이나 보안 문제가 있는 소스 코드를 강조 표시합니다. 이 확장 프로그램은 문제가 무엇인지 알려주는 것뿐만 아니라 왜 해로운지, 예시와 함께 어떻게 수정해야 하는지에 대한 맥락 내 가이드를 제공합니다. 이 확장 프로그램은 [500개 이상의 Java 규칙](https://rules.sonarsource.com/java)을 지원하고 특정 품질 문제를 자동으로 수정하는 여러 [Quick Fixes](https://rules.sonarsource.com/java/quickfix)를 포함합니다.

### 실시간 코드 분석 {#code-analysis-on-the-fly}

문제는 상세한 설명을 제공하는 호버와 함께 에디터에서 직접 강조됩니다.

<video autoplay loop muted playsinline controls title="실시간 코드 분석" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com//docs/java/java-linting/sonarlint.mp4" type="video/mp4" />
</video>

열린 파일에서 발견된 문제는 VS Code의 Problems 패널을 통해서도 검토할 수 있습니다. 해당되는 경우, 문제가 어디서 시작되는지 이해할 수 있도록 보조 코드 위치가 언급됩니다(예: 버그로 이어진 코드 경로).

### 규칙 문서화와 개선 가이드 {#rule-documentation-and-remediation-guidance}

감지된 모든 문제에 대해, SonarLint는 위반된 규칙과 관련된 최상의 코딩 사례에 대한 전체 문서를 제공합니다. 이를 통해 왜 문제가 제기되었는지, 어떻게 수정해야 하는지 이해할 수 있습니다.

<video autoplay loop muted playsinline controls title="규칙 문서화와 개선 가이드" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com//docs/java/java-linting/sonarlint-description.mp4" type="video/mp4" />
</video>

### 더 많은 품질과 보안 규칙 활성화 {#enabling-more-quality-and-security-rules}

기본적으로, SonarLint는 버그와 취약점을 감지하기 위한 다양한 규칙을 제공합니다. **SonarLint Rules** 뷰를 통해 더 많은 검사를 활성화할 수 있습니다.

<video autoplay loop muted playsinline controls title="더 많은 품질과 보안 규칙 활성화" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com//docs/java/java-linting/sonarlint-rules.mp4" type="video/mp4" />
</video>

[VS Code용 SonarLint 확장 프로그램](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)에 대한 자세한 내용은 [SonarLint 웹사이트](https://www.sonarlint.org/vscode/)를 방문하세요.

## Checkstyle {#checkstyle}

[Checkstyle for Java](https://marketplace.visualstudio.com/items?itemName=shengchen.vscode-checkstyle) 확장 프로그램을 사용하면 기존 `checkstyle` 설정(Google이나 Sun의 Check)이나 프로젝트를 위한 사용자 정의 파일을 사용할 수 있습니다. Java 파일을 편집할 때, 확장 프로그램은 파일 형식을 검사하고 가능한 경우 실시간으로 Quick Fixes를 제공합니다.

**Checkstyle: Set the Checkstyle Configuration File** 명령을 사용하고 드롭다운에서 Checkstyle 파일을 선택하여 Checkstyle 설정 파일을 설정합니다.

<video autoplay loop muted playsinline controls title="Checkstyle 설정 파일 설정 명령" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com//docs/java/java-linting/checkstyle.mp4" type="video/mp4" />
</video>

[Checkstyle for Java](https://marketplace.visualstudio.com/items?itemName=shengchen.vscode-checkstyle) 확장 프로그램은 실시간 린팅을 지원합니다.

<video autoplay loop muted playsinline controls title="실시간 린팅" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com//docs/java/java-linting/checkstyle-live-linting.mp4" type="video/mp4" />
</video>

그리고 일괄 검사도 지원합니다.

<video autoplay loop muted playsinline controls title="일괄 검사" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com//docs/java/java-linting/checkstyle-batch.mp4" type="video/mp4" />
</video>

상태 표시줄의 Checkstyle 상태 아이콘을 클릭하면 Problems 패널이 열립니다.

### Checkstyle 설정 파일 설정 {#set-checkstyle-configuration-file}

설정 파일을 설정하려면, `.xml` 파일을 오른쪽 클릭하고 **Set the Checkstyle Configuration File**을 선택하세요.

![Checkstyle 설정 파일 설정](images/java-linting/set_config.png)

파일 탐색기에서 설정 파일을 선택하기 위해 **Checkstyle: Set Checkstyle Configuration File** 명령을 실행할 수도 있습니다. 확장 프로그램은 Checkstyle 설정을 더 쉽게 하기 위해 작업 공간에서 `checkstyle.xml` 파일을 찾습니다. 다음 두 가지 내장 설정도 볼 수 있습니다:

- **Google's Check**
- **Sun's Check**

**Checkstyle: Set the Checkstyle Configuration** 명령은 잠재적인 **Checkstyle** 설정 파일을 감지하고 나열합니다. 입력 상자에 직접 URL을 입력하여 설정 파일을 제공할 수도 있습니다.

<video autoplay loop muted playsinline controls title="Checkstyle 설정" style={{maxWidth: '100%'}}>

  <source src="https://code.visualstudio.com//docs/java/java-linting/checkstyle-configuration.mp4" type="video/mp4" />
</video>

**Checkstyle: Set the Checkstyle Version** 명령을 사용하여 Checkstyle 버전을 설정할 수도 있습니다.

이 명령은 다음을 수행합니다:

- 메인 저장소에서 최신 Checkstyle 버전을 나열합니다.
- 다운로드된 모든 버전을 나열합니다.
- 지원되는 모든 버전을 나열합니다.
- 현재 사용 중인 버전을 체크 표시로 표시합니다.

또한 경로를 설정하여 Checkstyle용 서드파티 모듈을 가져올 수도 있습니다. 예를 들어, 아래 설정을 사용한 후에는 해당 검사를 사용하기 위해 `checkstyle.xml`에 `<module name="SingleBreakOrContinueCheck"/>` 또는 `<module name="com.github.sevntu.checkstyle.checks.naming.SingleBreakOrContinueCheck"/>`를 추가할 수 있습니다.

### 스타일 검사 및 위반 사항 수정 {#check-the-style-and-fix-the-violations}

Java 파일을 편집할 때, 확장 프로그램은 파일 형식을 검사하고 가능한 경우 Quick Fixes를 제공합니다. 에디터에서 전구 버튼을 클릭하면 사용 가능한 Quick Fixes를 볼 수 있습니다.

![스타일 위반 수정](images/java-linting/quick_fix.png)

[Checkstyle for Java](https://marketplace.visualstudio.com/items?itemName=shengchen.vscode-checkstyle)에 대한 자세한 내용은 [GitHub 저장소](https://github.com/jdneo/vscode-checkstyle)를 방문하세요.

# 자바 소스 코드 탐색 및 편집 {#navigate-and-edit-java-source-code}

Visual Studio Code는 풍부한 편집 [기능](/docs/editor/codebasics.md)을 갖춘 소스 코드 편집기입니다. 이 문서에서는 자바 작업 시 유용한 몇 가지 자바 전용 기능을 살펴보겠습니다.

아래 기능을 사용할 때 문제가 발생하면, [이슈](https://github.com/microsoft/vscode-java-pack/issues)를 입력하여 저희에게 연락하실 수 있습니다.

## 코드 탐색 {#code-navigation}

[개요 보기](/docs/getstarted/userinterface.md#outline-view)를 사용하면 현재 파일 내의 구성원을 편리하게 탐색할 수 있습니다. [프로젝트 보기](/docs/java/java-project.md#projects-view) 또한 프로젝트에 대한 훌륭한 개요를 제공합니다. 자바 편집기로서 호출 계층, 타입 계층, 정의 탐색, 작업 공간에서 타입 검색 등을 지원합니다.

## 기호 검색 {#search-for-symbols}

현재 파일이나 작업 공간에서 기호를 검색하여 코드를 더 빠르게 탐색할 수 있습니다.

### 작업 공간에서 기호 검색 {#search-for-symbols-in-the-workspace}

현재 작업 공간에서 기호를 검색하려면 `kb(workbench.action.showAllSymbols)`를 눌러 시작한 다음 기호의 이름을 입력합니다. 이전과 같이 잠재적인 일치 항목 목록이 나타납니다. 이미 열려 있지 않은 파일에서 발견된 일치를 선택하면 해당 파일이 열리고 일치 항목의 위치로 탐색됩니다. 또는 **빠른 열기**(`kb(workbench.action.quickOpen)`)를 사용하여 '#' 명령을 입력하여 현재 작업 공간을 검색할 수도 있습니다. `kb(workbench.action.showAllSymbols)`는 '#' 명령의 바로 가기이므로 모든 것이 동일하게 작동합니다.

<video src="images/java-editing/search-in-workspace.mp4" autoplay loop muted playsinline controls title="작업 공간에서 기호 검색">
</video>

### 현재 파일에서 기호 검색 {#search-for-symbols-in-current-file}

현재 파일에서 기호를 검색하려면 **빠른 열기**(`kb(workbench.action.quickOpen)`)를 사용한 다음 '@' 명령을 입력하고 찾고 있는 기호의 이름을 입력합니다. 잠재적인 일치 항목 목록이 나타나고 입력할 때 필터링됩니다. 목록에서 일치 항목을 선택하여 해당 위치로 탐색합니다.

<video src="images/java-editing/search-in-file.mp4" autoplay loop muted playsinline controls title="현재 파일에서 기호 검색">
</video>

## 정의 미리 보기 {#peek-definition}

기호가 어떻게 정의되었는지 빠르게 살펴보려면 정의 미리 보기 기능을 사용할 수 있습니다. 이 기능은 정의 근처의 몇 줄의 코드를 미리 보기 창에 표시하여 현재 위치에서 벗어나지 않고도 살펴볼 수 있게 해줍니다.

기호의 정의를 미리 보려면 소스 코드에서 기호가 사용된 위치에 커서를 놓고 `kb(editor.action.peekDefinition)`를 누릅니다. 또는 컨텍스트 메뉴에서 **정의 미리 보기**를 선택할 수 있습니다(오른쪽 클릭 후 **정의 미리 보기** 선택).

## 정의로 이동 {#go-to-definition}

기호가 정의된 위치로 빠르게 탐색할 수도 있습니다.

기호의 정의로 이동하려면 소스 코드에서 기호가 사용된 위치에 커서를 놓고 `kb(editor.action.revealDefinition)`를 누릅니다. 또는 컨텍스트 메뉴에서 **정의로 이동**을 선택할 수 있습니다(오른쪽 클릭 후 **정의로 이동** 선택). 기호의 정의가 하나만 있을 경우 해당 위치로 직접 이동하며, 그렇지 않으면 이전 섹션에서 설명한 대로 경쟁 정의가 미리 보기 창에 표시되고 원하는 정의를 선택해야 합니다.

## 슈퍼 구현으로 이동 {#go-to-super-implementation}

마우스를 올려놓고 **슈퍼 구현으로 이동** 링크를 클릭하여 클래스 구현 및 오버라이딩 메서드를 추적할 수 있습니다.

![Spring Navigation](images/java-editing/goto-super.png)

<video src="images/java-editing/goto-super-implementation.mp4" autoplay loop muted playsinline controls title="슈퍼 구현으로 이동">
</video>

## 호출 계층 {#call-hierarchy}

호출 계층 보기는 함수의 모든 호출을 보여주며, 호출자의 호출 및 호출의 호출로 깊이 들어갈 수 있게 해줍니다. 함수에서 오른쪽 클릭하고 **미리 보기** > **호출 계층 미리 보기**를 선택합니다.

![호출 계층 미리 보기](images/java-editing/call-hierarchy.png)

함수 본문에서 오른쪽 클릭하고 **호출 계층 표시**를 선택할 수도 있습니다.

![호출 계층 메뉴](images/java-editing/call-hierarchy.gif)

## 타입 계층 {#type-hierarchy}

타입 계층 보기는 자바 객체 간의 상속 관계를 보여줍니다. 타입에서 오른쪽 클릭하고 **타입 계층 표시**를 선택할 수 있습니다.

<video src="images/java-editing/type-hierarchy.mp4" autoplay loop muted playsinline controls title="타입 계층">
</video>

## 접기 영역 {#folding-regions}

접기 영역을 사용하면 코드 스니펫을 접거나 펼쳐 소스 코드를 더 잘 볼 수 있습니다.

<video src="images/java-editing/folding-range.mp4" autoplay loop muted playsinline controls title="접기 영역">
</video>

## 스마트 선택 {#smart-selection}

[스마트 선택](https://code.visualstudio.com/updates/v1_33#_smart-select-api) (의미론적 선택)을 사용하면 소스 코드에서 커서 위치의 의미론적 정보를 기반으로 선택 범위를 확장하거나 축소할 수 있습니다.

- 선택을 확장하려면 `kb(editor.action.smartSelect.expand)`를 사용합니다.
- 선택을 축소하려면 `kb(editor.action.smartSelect.shrink)`를 사용합니다.

<video src="images/java-editing/smart-selection.mp4" autoplay loop muted playsinline controls title="스마트 선택">
</video>

## 의미론적 하이라이팅 {#semantic-highlighting}

구문 하이라이팅은 코드를 더 효율적으로 읽을 수 있게 해주는 중요한 기능입니다. [의미론적 하이라이팅](https://github.com/microsoft/vscode/wiki/Semantic-Highlighting-Overview)의 도움으로 VS Code는 자바 언어 서비스의 기호 정보를 기반으로 더 정확한 소스 코드 색상을 제공합니다.

아래는 하나의 예시로, 왼쪽은 의미론적 하이라이팅을 활성화한 후의 동작이고, 오른쪽은 구문 하이라이팅만 있는 경우입니다.

![의미론적 하이라이팅](images/java-editing/semantic-highlighting.png)

자바 의미론적 하이라이팅의 세부 사항에 대해서는 [Java Language Support 확장 위키](https://github.com/redhat-developer/vscode-java/wiki/Semantic-Highlighting)에서 더 알아볼 수 있습니다.

## Spring Boot로 코드 탐색 {#navigating-code-with-spring-boot}

[Spring Boot Tools](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-spring-boot) 확장은 Spring Boot 프로젝트에 대한 향상된 탐색 및 코드 완성 지원을 제공합니다.

- `@/`는 정의된 모든 요청 매핑(매핑된 경로, 요청 방법, 소스 위치)을 보여줍니다.
- `@+`는 정의된 모든 빈(빈 이름, 빈 유형, 소스 위치)을 보여줍니다.
- `@>`는 모든 함수(프로토타입 구현)를 보여줍니다.
- `@`는 코드 내의 모든 Spring 주석을 보여줍니다.

![Spring Navigation](images/java-editing/spring-navigation.png)

Visual Studio Code에서 Spring Boot 지원에 대해 더 알아보려면 [Visual Studio Code의 Spring Boot](/docs/java/java-spring-boot.md)를 읽어보세요.

## 코드 편집 {#code-editing}

코드 편집은 스마트 코드 완성과 서명 세부 정보를 위한 IntelliSense 덕분에 쉽습니다. 코드 스니펫과 Getter/Setter 생성, 임포트 정리와 같은 다양한 코드 작업을 사용하여 생산성을 더욱 높일 수 있습니다.

<video src="images/java-editing/code-editing.mp4" autoplay loop muted playsinline controls title="코드 편집">
</video>

Visual Studio Code의 자바 지원은 코드 내의 문제를 자동으로 감지하고, 빠른 수정 제안을 제공합니다.

<video src="images/java-editing/quick-fix.mp4" autoplay loop muted playsinline controls title="빠른 수정 제안">
</video>

리팩토링 및 코드 작업에 대한 자세한 내용은 [리팩토링 및 소스 작업](/docs/java/java-refactoring.md)을 참조하세요.

## IntelliSense {#intellisense}

Visual Studio Code의 자바 코드 완성은 [Red Hat의 Java™ 언어 지원](https://marketplace.visualstudio.com/items?itemName=redhat.java)에 의해 제공됩니다. 이 확장은 Eclipse 뒤에 있는 동일한 [Java 개발 도구(JDT)](https://www.eclipse.org/jdt/)에 의해 구동되므로 동일한 수준의 지원을 기대할 수 있습니다.

또한 [IntelliCode](https://visualstudio.microsoft.com/services/intellicode/)라는 AI 지원 IntelliSense도 있습니다. 이는 가장 사용 가능성이 높은 항목을 완성 목록의 상단에 배치하여 시간을 절약해 줍니다. IntelliCode 추천은 GitHub의 수천 개 오픈 소스 프로젝트(각각 100개 이상의 별표가 있는) 기반으로 훈련되어 있으며, 고품질 프로젝트에서 가장 일반적인 사용 사례를 반영합니다. 코드의 맥락과 결합되면 완성 목록이 이러한 관행을 촉진하도록 맞춤화됩니다. 다음은 자바에서의 IntelliCode 작동 모습입니다.

<video src="images/java-editing/intellicode.mp4" autoplay loop muted playsinline controls title="IntelliSense 코드 완성 제안">
</video>

IntelliCode는 Java SE 및 Spring과 같은 인기 있는 Java 라이브러리 및 프레임워크와 잘 작동합니다. 이는 모놀리식 웹 앱이나 현대적인 마이크로서비스를 개발할 때 도움이 됩니다.

## 새 파일 만들기 {#create-new-file}

VS Code는 자바 소스 파일을 생성할 때 템플릿을 적용하는 것을 지원합니다. 파일 탐색기에서 `.java` 파일을 생성하면 언어 서버가 자동으로 클래스 본체를 생성하고 패키지 정보를 채워줍니다:

<video src="images/java-editing/create-new-file.mp4" autoplay loop muted playsinline controls title="새 파일 만들기">
</video>

## 코드 스니펫 {#code-snippets}

Visual Studio Code는 클래스/인터페이스, syserr, sysout, if/else, try/catch, static main method와 같은 인기 있는 자바 코드 스니펫을 광범위하게 지원하여 생산성을 높입니다. 자바 언어 서버의 정보를 사용하여 선택 중 코드 스니펫의 미리 보기도 제공합니다.

예를 들어, "**sout**" 또는 "**sysout**"을 입력하면 `System.out.println()`에 대한 코드 스니펫이 생성됩니다.<br />
유사하게, "**main**" 또는 "**psvm**"을 입력하면 `public static void main(String[] args) {}`에 대한 코드 스니펫이 생성됩니다.

![코드 스니펫](images/java-editing/code-snippet.png)

아래는 바로 가기 키의 전체 목록입니다:

### 코드 스니펫 바로 가기 {#code-snippet-shortcuts}

| 바로 가기 키          | 설명                              |
| --------------------- | --------------------------------- |
| ctor                  | 공용 생성자                       |
| dowhile               | do-while 문                      |
| foreach, iter         | 배열 또는 Iterable 반복          |
| fori                  | 배열 반복                        |
| if                    | if 문                            |
| ifelse                | if-else 문                       |
| ifnull                | null 체크하는 if 문             |
| ifnotnull             | not null 체크하는 if 문         |
| main, psvm            | 공용 정적 main 메서드           |
| new                   | 새 객체 생성                     |
| private_method        | 비공개 메서드                   |
| private_static_method | 비공개 정적 메서드              |
| prf                   | 비공개 필드                      |
| protected_method      | 보호된 메서드                   |
| public_method         | 공용 메서드                     |
| public_static_method  | 공용 정적 메서드                |
| switch                | switch 문                        |
| syserr, serr          | 표준 오류로 출력                |
| sysout, sout          | 표준 출력으로 출력              |
| systrace, soutm       | 현재 메서드를 표준 출력으로 출력 |
| try_catch             | try/catch 블록                  |
| try_resources         | try-with-resources 문            |
| while                 | while 문                        |

### 후위 스니펫 바로 가기 {#postfix-snippet-shortcuts}

| 바로 가기 키 | 템플릿 내용                          | 설명                                                                       |
| ------------ | ------------------------------------- | -------------------------------------------------------------------------- |
| cast         | ((SomeType) expr)                    | 표현식을 새 타입으로 캐스팅                                              |
| else         | if (!expr)                            | 부정된 if 문 생성                                                        |
| for          | for (T item : expr)                   | for 문 생성                                                               |
| fori         | for (int i = 0; i < expr.length; i++) | 배열을 반복하는 for 문 생성                                              |
| forr         | for (int i = expr.length-1; i >= 0; i--) | 배열을 역순으로 반복하는 for 문 생성                                    |
| if           | if (expr)                             | if 문 생성                                                               |
| nnull        | if (expr != null)                     | if 문 생성 및 표현식이 null이 아닌지 확인                                |
| null         | if (expr == null)                     | 표현식이 null인지 확인하는 if 문 생성                                    |
| sysout       | System.out.println(expr)              | 영향을 받는 문자열을 System.out.println(..) 호출로 전송                  |
| throw        | throw expr                            | 주어진 예외를 발생시킴                                                  |
| var          | T name = expr                         | 새 변수를 생성                                                          |
| while        | while (expr) {}                       | while 루프 생성                                                          |
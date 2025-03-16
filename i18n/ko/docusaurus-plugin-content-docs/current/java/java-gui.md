---
Order: 12
Area: java
TOCTitle: GUI 애플리케이션
ContentId: 517db620-d166-4f72-99c1-fa046710dffe
PageTitle: Visual Studio Code에서 Java GUI 애플리케이션 개발하기
DateApproved: 10/11/2022
MetaDescription: Visual Studio Code에서 Java GUI 애플리케이션(JavaFX, AWT, Swing)을 개발하는 방법
sidebar_label: GUI 애플리케이션
---

# VS Code에서 GUI 애플리케이션 작업하기 {#working-with-gui-applications-in-vs-code}

Visual Studio Code에서 Java GUI 애플리케이션을 쉽게 개발할 수 있습니다. 이를 위해서는 Java GUI 애플리케이션 개발에 필요한 모든 확장 기능이 포함된 [Java 확장 팩](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)을 설치해야 합니다.

- [Java 확장 팩 설치하기](vscode:extension/vscjava.vscode-java-pack)

아래의 기능을 사용할 때 문제가 발생하면, [문제 보고서](https://github.com/microsoft/vscode-java-pack/issues)를 통해 저희에게 연락할 수 있습니다.

## JavaFX 애플리케이션 개발하기 {#develop-javafx-applications}

### 새로운 JavaFX 프로젝트 만들기 {#create-a-new-javafx-project}

VS Code에서 몇 가지 단계만으로 새로운 JavaFX 애플리케이션을 만들 수 있습니다:

- 1단계: [Java 확장 팩](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)을 설치합니다.
- 2단계: Visual Studio Code에서 명령 팔레트(`kb(workbench.action.showCommands)`)를 열고 **Java: Create Java Project** 명령을 선택합니다.
- 3단계: 목록에서 **JavaFX** 옵션을 선택하고, Maven Archetype을 통해 새로운 JavaFX 프로젝트를 설정하는 마법사를 따릅니다.

![create JavaFX project](https://code.visualstudio.com/assets/docs/java/java-gui/create-javafx.png)

### JavaFX 애플리케이션 실행하기 {#run-the-javafx-application}

:::note
아래의 지침은 Maven으로 관리되는 프로젝트에만 적용됩니다. 생성된 프로젝트는 실행하기 위해 최소 JDK 11이 필요합니다. 로컬에 JDK 11이 설치되어 있고 설치 경로가 [`java.configuration.runtimes`](https://github.com/redhat-developer/vscode-java#project-jdks) 설정에 맞게 설정되어 있는지 확인하세요.
:::

JavaFX 애플리케이션을 실행하려면 **Maven** Explorer를 열고 `hellofx` > `Plugins` > `javafx`를 확장한 후 Maven goal: `javafx:run`을 실행합니다.

:::note
[Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven) 확장을 설치했는지 확인하세요. **Maven** Explorer를 찾을 수 없다면, 명령 팔레트(`kb(workbench.action.showCommands)`)를 열고 **Explorer: Focus on Maven View** 명령을 선택하세요.
:::

<video src="https://code.visualstudio.com/assets/docs/java/java-gui/run-javafx.mp4" autoplay loop muted playsinline controls title="JavaFX 애플리케이션 실행하기" width="100%">
</video>

### 더 많은 JavaFX 예제 {#more-javafx-examples}

더 많은 JavaFX 프로젝트 예제는 [openjfx 샘플 리포지토리](https://github.com/openjfx/samples/tree/master/IDE/VSCode)에서 찾을 수 있으며, 다양한 프로젝트 구조(예: Gradle 및 관리되지 않는 폴더 프로젝트)를 다룹니다. 각 샘플에 대한 문서가 있어 프로그램 실행 방법을 설명합니다.

## AWT 애플리케이션 개발하기 {#develop-awt-applications}

기본적으로, Abstract Window Toolkit (AWT)의 유형은 숨겨져 있습니다. AWT 애플리케이션을 개발할 때 코드 완성이 작동하지 않는 것을 알 수 있습니다. 완성을 활성화하려면 명령 팔레트(`kb(workbench.action.showCommands)`)를 열고 **Java: Help Center** 명령을 선택합니다. **Student** 섹션으로 가서 **Enable AWT Development**를 선택하세요.

<video src="https://code.visualstudio.com/assets/docs/java/java-gui/enable-awt.mp4" autoplay loop muted playsinline controls title="AWT 애플리케이션 개발하기" width="100%">
</video>

:::note
이 작업은 `.vscode\settings.json`의 작업 공간 수준에서 `java.completion.filteredTypes` 설정을 업데이트하므로, VS Code에서 작업 공간이 열려 있는지 확인하세요.
:::

아래의 샘플 코드를 사용하여 VS Code에서 간단한 Java AWT 애플리케이션을 실행할 수 있습니다.

```java
import java.awt.*;
import java.awt.event.*;

public class AwtExample extends Frame {
  public AwtExample() {
    Button btn = new Button("Button");
    btn.setBounds(50, 50, 50, 50);
    add(btn);
    setSize(150, 150);
    setTitle("This is my First AWT example");
    setLayout(new FlowLayout());
    setVisible(true);
    addWindowListener(new WindowAdapter() {
        public void windowClosing(WindowEvent we) {
            dispose();
        }
    });
  }

  public static void main(String args[]){
    new AwtExample();
  }
}
```

## Swing 애플리케이션 개발하기 {#develop-swing-applications}

Swing 애플리케이션 개발은 기본적으로 지원됩니다. 별도의 설정 없이 바로 Swing 애플리케이션 코드를 작성할 수 있습니다.

더 많은 Swing 샘플은 [Oracle Swing 문서](https://docs.oracle.com/javase/tutorial/uiswing/examples/components/index.html)에서 찾을 수 있습니다.
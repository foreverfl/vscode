---
Order: 3
Area: java
TOCTitle: 리팩토링
ContentId: 36ee3e12-9bcc-4f01-9672-857ad2733c2d
PageTitle: Visual Studio Code에서 Java 코드 리팩토링 및 소스 액션
DateApproved: 12/9/2021
MetaDescription: Visual Studio Code에서 Java 코드 리팩토링 및 소스 액션
sidebar_label: 리팩토링
---

# 자바 리팩토링 및 소스 액션 {#java-refactoring-and-source-actions}

Visual Studio Code는 소스 코드를 리팩토링할 수 있는 다양한 옵션과 코드를 생성하고 문제를 해결할 수 있는 소스 액션을 제공합니다. 이를 사용하려면 `전구` 💡를 클릭하세요. 또는 편집기 화면에서 마우스 오른쪽 버튼을 클릭하고 **Source Action...** 을 선택하세요.

## 지원되는 코드 액션 목록 {#list-of-supported-code-actions}

- [리팩토링](#refactoring)
  - [변수에 할당](#assign-to-variable)
  - [익명 클래스를 중첩 클래스로 변환](#convert-anonymous-to-nested-class)
  - [익명 클래스 생성으로 변환](#convert-to-anonymous-class-creation)
  - [향상된 for 루프로 변환](#convert-to-enhanced-for-loop)
  - [람다 표현식으로 변환](#convert-to-lambda-expression)
  - [정적 import로 변환](#convert-to-static-import)
  - 추출 리팩토링
    - [상수로 추출](#extract-to-constant)
    - [필드로 추출](#extract-to-field)
    - [메서드로 추출](#extract-to-method)
    - [로컬 변수로 추출](#extract-to-local-variable)
  - 인라인 리팩토링
    - [상수 인라인](#inline-constant)
    - [로컬 변수 인라인](#inline-local-variable)
    - [메서드 인라인](#inline-method)
  - 불리언 반전
    - [조건 반전](#invert-conditions)
    - [로컬 변수 반전](#invert-local-variable)
  - [이동](#move)
  - [이름 변경](#rename)
  - 타입 변경
    - [해결된 타입을 var 타입으로 변경](#change-resolved-type-to-var-type)
    - [var 타입을 해결된 타입으로 변경](#change-var-type-to-resolved-type)
- [소스 액션](#source-actions)
  - [생성자 생성](#generate-constructors)
  - [위임 메서드 생성](#generate-delegate-methods)
  - [메서드 재정의/구현](#overrideimplement-methods)
  - [import 정리](#organize-imports)
  - [getter 및 setter 생성](#generate-getters-and-setters)
  - [`hashCode()` 및 `equals()` 생성](#generate-hashcode-and-equals)
  - [`toString()` 생성](#generate-tostring)
  - [가능한 경우 수정자를 final로 변경](#change-modifiers-to-final-where-possible)
- 지원되는 기타 코드 액션
  - [비접근 참조 수정](#fix-nonaccessible-reference)
  - [존재하지 않는 패키지 생성](#create-non-existing-package)
  - [더 보기...](#other-code-actions-supported)

## 리팩토링 {#refactoring}

자바 프로그램 리팩토링의 목표는 프로그램의 동작에 영향을 주지 않으면서 시스템 전반에 걸쳐 코드 변경을 수행하는 것입니다. VS Code의 자바 언어 지원은 쉽게 접근할 수 있는 많은 리팩토링 옵션을 제공합니다.

### 리팩토링 호출 {#invoke-refactoring}

리팩토링 명령은 편집기의 컨텍스트 메뉴에서 사용할 수 있습니다. 리팩토링할 요소를 선택하고 마우스 오른쪽 버튼을 클릭하여 컨텍스트 메뉴를 열고 **리팩토링...**을 선택하세요:

![리팩토링 호출](images/java-refactoring/refactoring_menu.png)

그러면 사용 가능한 모든 리팩토링 옵션이 표시됩니다.

### 변수에 할당 {#assign-to-variable}

표현식을 로컬 변수 또는 필드에 할당합니다.

#### 예제 {#example}

##### 이전 {#before}

```java
Arrays.asList("apple", "lemon", "banana");
```

##### 이후 {#after}

```java
List<String> fruits = Arrays.asList("apple", "lemon", "banana");
```

생성자에서 사용되지 않는 매개변수를 새 필드에 할당하는 데에도 사용할 수 있습니다.

<video src="images/java-refactoring/assign-to-field.mp4" autoplay loop muted playsinline controls title="매개변수를 새 필드에 할당">
</video>

### 익명 클래스를 중첩 클래스로 변환 {#convert-anonymous-to-nested-class}

익명 내부 클래스를 멤버 클래스로 변환합니다.

#### 예제 {#example}

익명 클래스 `Interface(){...}`를 클래스 `Clazz`의 멤버로 변환해 보겠습니다.

##### 이전 {#before}

```java
public class Clazz {
  public Interface method() {
    final boolean isValid = true;
    return new Interface() {
      public boolean isValid() {
        return isValid;
      }
    };
  }
}
```

##### 이후 {#after}

```java
public class Clazz {
  private final class MyInterface extends Interface {
    private final boolean isValid;

    private MyInterface(boolean isValid) {
      this.isValid = isValid;
    }

    public boolean isValid() {
      return isValid;
    }
  }

  public Interface method() {
    final boolean isValid = true;
    return new MyInterface(isValid);
  }
}
```

### 익명 클래스 생성으로 변환 {#convert-to-anonymous-class-creation}

람다 표현식을 익명 클래스 생성으로 변환합니다.

#### 예제 {#example}

변수 `runnable`에 람다 표현식이 할당되어 있습니다. 이를 익명 클래스 생성으로 변환해 보겠습니다.

##### 이전 {#before}

```java
public void method() {
  Runnable runnable = () -> {
    // 무언가를 수행
  };
}
```

##### 이후 {#after}

```java
public void method() {
  Runnable runnable = new Runnable() {
    @Override
    public void run() {
      // 무언가를 수행
    }
  };
}
```

> 추가 참고: [람다 표현식으로 변환](#convert-to-lambda-expression)

### 향상된 for 루프로 변환 {#convert-to-enhanced-for-loop}

단순 `for` 루프를 `for-each` 스타일로 변환합니다.

#### 예제 {#example}

##### 이전 {#before}

```java
public void order(String[] books) {
  for (int i = 0; i < books.length; i++) {
    // 무언가를 수행
  }
}
```

##### 이후 {#after}

```java
public void order(String[] books) {
  for (String book : books) {
    // 무언가를 수행
  }
}
```

<video src="images/java-refactoring/convert-for-loop.mp4" autoplay loop muted playsinline controls title="향상된 for 루프로 변환">
</video>

### 람다 표현식으로 변환 {#convert-to-lambda-expression}

익명 클래스 생성을 람다 표현식으로 변환합니다.

#### 예제 {#example}

익명 클래스 `Runnable(){...}`를 람다 표현식으로 변환해 보겠습니다.

##### 이전 {#before}

```java
public void method() {
  Runnable runnable = new Runnable(){
    @Override
    public void run() {
      // 무언가를 수행
    }
  };
}
```

##### 이후 {#after}

```java
public void method() {
    Runnable runnable = () -> {
      // 무언가를 수행
    };
  }
```

> 추가 참고: [익명 클래스 생성으로 변환](#convert-to-anonymous-class-creation)

### 정적 import로 변환 {#convert-to-static-import}

필드 또는 메서드를 정적 import로 변환합니다.

#### 예제 {#example}

`Assert.assertEquals()` 호출을 정적 import로 변환해 보겠습니다.

##### 이전 {#before}

```java
import org.junit.Assert;
...
public void test() {
  Assert.assertEquals(expected, actual);
}
```

##### 이후 {#after}

```java
import static org.junit.Assert.assertEquals;
...
public void test() {
  assertEquals(expected, actual);
}
```

<video src="images/java-refactoring/convert-static-imports.mp4" autoplay loop muted playsinline controls title="정적 import로 변환">
</video>

### 상수로 추출 {#extract-to-constant}

선택한 표현식으로부터 정적 최종 필드를 생성하고 필드 참조로 대체한 후, 동일한 표현식이 발생하는 다른 위치를 다시 작성합니다.

#### 예제 {#examples}

π의 값을 `3.14`로 추출해 보겠습니다.

##### 이전 {#before}

```java
public double getArea(double r) {
  return 3.14 * r * r;
}
```

##### 이후 {#after}

```java
private static final double PI = 3.14;

public double getArea(double r) {
  return PI * r * r;
}
```

> 추가 참고: [상수 인라인](#inline-constant)

### 필드로 추출 {#extract-to-field}

새 필드를 선언하고 선택한 표현식으로 초기화합니다. 원래 표현식은 필드 사용으로 대체됩니다.

#### 예제 {#examples}

변수 `area`를 클래스 `Square`의 필드로 추출해 보겠습니다.

##### 이전 {#before}

```java
class Square {
  public void calculateArea() {
    int height = 1;
    int width = 2;
    int area = height * width;
  }
}
```

##### 이후 {#after}

```java
class Square {
  private int area;

  public void calculateArea() {
    int height = 1;
    int width = 2;
    area = height * width;
  }
}
```

<video src="images/java-refactoring/extract-field.mp4" autoplay loop muted playsinline controls title="필드로 추출">
</video>

변수 선언을 선택할 때, 변수를 필드로 변환합니다.

<video src="images/java-refactoring/convert-field.mp4" autoplay loop muted playsinline controls title="변수를 필드로 변환">
</video>

### 메서드로 추출 {#extract-to-method}

현재 선택된 문장이나 표현식을 포함하는 새 메서드를 생성하고 선택된 부분을 새 메서드에 대한 참조로 대체합니다. 이 기능은 길고 복잡한 메서드를 정리하는 데 유용합니다.

#### 예제 {#examples}

표현식 `height * width`를 새 메서드로 추출해 보겠습니다.

##### 이전 {#before}

```java
public void method() {
  int height = 1;
  int width = 2;
  int area = height * width;
}
```

##### 이후 {#after}

```java
public void method() {
  int height = 1;
  int width = 2;
  int area = getArea(height, width);
}

private int getArea(int height, int width) {
  return height * width;
}
```

<video src="images/java-refactoring/refactor.mp4" autoplay loop muted playsinline controls title="메서드로 추출">
</video>

> 추가 참고: [메서드 인라인](#inline-method)

### 로컬 변수로 추출 {#extract-to-local-variable}

현재 선택된 표현식에 할당된 새 변수를 생성하고 선택된 부분을 새 변수에 대한 참조로 대체합니다.

#### 예제 {#examples}

표현식 `platform.equalsIgnoreCase("MAC")`를 새 변수로 추출해 보겠습니다.

##### 이전 {#before}

```java
public void method() {
  if (platform.equalsIgnoreCase("MAC")) {
    // 무언가를 수행
  }
}
```

##### 이후 {#after}

```java
public void method() {
  boolean isMac = platform.equalsIgnoreCase("MAC");
  if (isMac) {
    // 무언가를 수행
  }
}
```

<video src="images/java-refactoring/extract-local-variable.mp4" autoplay loop muted playsinline controls title="로컬 변수로 추출">
</video>

추출 후, 같은 트랜잭션에서 이름 변경도 수행할 수 있습니다.

<video src="images/java-refactoring/extract-rename.mp4" autoplay loop muted playsinline controls title="추출 후 로컬 변수 이름 변경">
</video>

> 추가 참고: [로컬 변수 인라인](#inline-local-variable)

### 상수 인라인 {#inline-constant}

상수 참조를 정의된 값으로 대체합니다.

#### 예제 {#examples}

상수 `PI`를 정의된 값 `3.14`로 대체해 보겠습니다.

##### 이전 {#before}

```java
private static final double PI = 3.14;

public double getArea(double r) {
  return PI * r * r;
}
```

##### 이후 {#after}

```java
private static final double PI = 3.14;

public double getArea(double r) {
  return 3.14 * r * r;
}
```

> 추가 참고: [상수로 추출](#extract-to-constant)

### 로컬 변수 인라인 {#inline-local-variable}

불필요한 변수 사용을 초기화 값으로 대체합니다.

#### 예제 {#examples}

변수 `isMac`을 불리언 표현식으로 직접 대체해 보겠습니다.

##### 이전 {#before}

```java
public void method() {
  boolean isMac = platform.equalsIgnoreCase("MAC");
  if (isMac) {
    // 무언가를 수행
  }
}
```

##### 이후 {#after}

```java
public void method() {
  if (platform.equalsIgnoreCase("MAC")) {
    // 무언가를 수행
  }
}
```

> 추가 참고: [로컬 변수로 추출](#extract-to-local-variable)

### 메서드 인라인 {#inline-method}

메서드 호출을 메서드 본체로 대체합니다.

#### 예제 {#example}

메서드 `getArea(int height, int width)`를 표현식 `height * width`로 직접 대체해 보겠습니다.

##### 이전 {#before}

```java
public void method() {
  int height = 1;
  int width = 2;
  int area = getArea(height, width);
}

private int getArea(int height, int width) {
  return height * width;
}
```

##### 이후 {#after}

```java
public void method() {
  int height = 1;
  int width = 2;
  int area = height * width;
}
```

<video src="images/java-refactoring/inline.mp4" autoplay loop muted playsinline controls title="메서드 호출을 메서드 본체로 교체하기">
</video>

> 추가 참고: [메서드로 추출하기](#extract-to-method)

### 조건 반전 {#invert-conditions}

조건의 불리언 표현식을 반전시킵니다.

#### 예제 {#example}

if 문에서 불리언 표현식을 반전시켜 보겠습니다.

##### 이전 {#before}

```java
public void method(int value) {
  if (value > 5 && value < 15) {
    // 무언가를 수행합니다.
  }
}
```

##### 이후 {#after}

```java
public void method(int value) {
  if (value <= 5 || value >= 15) {
    // 무언가를 수행합니다.
  }
}
```

### 지역 변수 반전 {#invert-local-variable}

지역 불리언 변수를 반전시킵니다.

#### 예제 {#example}

변수 `valid`를 반전시켜 보겠습니다.

##### 이전 {#before}

```java
public void method(int value) {
  boolean valid = value > 5 && value < 15;
}
```

##### 이후 {#after}

```java
public void method(int value) {
  boolean notValid = value <= 5 || value >= 15;
}
```

<video src="images/java-refactoring/invert-variable.mp4" autoplay loop muted playsinline controls title="지역 변수 반전">
</video>

### 이동 {#move}

선택한 요소를 이동하고 요소에 대한 모든 참조를 수정합니다(다른 파일에서도). 사용 가능한 작업은 다음과 같습니다:

- 클래스를 다른 패키지로 이동
- 정적 또는 인스턴스 메서드를 다른 클래스로 이동
- 내부 클래스를 새 파일로 이동

#### 예제 {#example}

정적 메서드 `print()`를 클래스 `Office`에서 클래스 `Printer`로 이동해 보겠습니다.

##### 이전 {#before}

```java
public class Office {
  public static void main(String[] args) {
    print();
  }

  public static void print() {
    System.out.println("프린터입니다.");
  }

  static class Printer { }
}
```

##### 이후 {#after}

```java
public class Office {
  public static void main(String[] args) {
    Printer.print();
  }

  static class Printer {
    public static void print() {
      System.out.println("프린터입니다.");
    }
  }
}
```

정적 메서드가 자신의 클래스보다 다른 클래스에서 더 많이 사용되는 경우 이동 리팩토링을 수행합니다.

<video src="images/java-refactoring/move-static-method.mp4" autoplay loop muted playsinline controls title="정적 메서드 리팩토링">
</video>

클래스를 다른 패키지로 이동합니다. 현재 파일 탐색기에서 이동 리팩토링은 지원되지 않습니다.

<video src="images/java-refactoring/move-class.mp4" autoplay loop muted playsinline controls title="클래스를 다른 패키지로 이동">
</video>

내부 클래스를 새 파일로 이동합니다.

<video src="images/java-refactoring/move-inner-type.mp4" autoplay loop muted playsinline controls title="내부 클래스를 새 파일로 이동">
</video>

### 이름 변경 {#rename}

기본 단축키: `kb(editor.action.rename)`

선택한 요소의 이름을 변경하고 요소에 대한 모든 참조를 수정합니다(다른 파일에서도).

#### 예제 {#example}

클래스 `Foo`의 이름을 `Bar`로 변경해 보겠습니다.

##### 이전 {#before}

```java
public class Foo {
  // ...
}

public void myMethod() {
  Foo myClass = new Foo();
}
```

##### 이후 {#after}

```java
public class Bar {
  // ...
}

public void myMethod() {
  Bar myClass = new Bar();
}
```

이름 변경 리팩토링을 호출하는 단축키는 `kb(editor.action.rename)`입니다. 편집기에서 식별자에 대해 단축키를 호출하면, 식별자 이름을 변경할 수 있는 작은 상자가 편집기 내에 표시됩니다. `kbstyle(Enter)`를 누르면 해당 식별자에 대한 모든 참조도 변경됩니다.

<video src="images/java-refactoring/rename.mp4" autoplay loop muted playsinline controls title="이름 변경 리팩토링 호출 단축키">
</video>

이름 변경 리팩토링은 파일 탐색기에서도 폴더와 파일에 대해 지원됩니다. 변경 요청 후 영향을 받는 파일의 미리보기가 제공되며, 변경 사항을 적용할 방법을 결정할 수 있습니다.

![탐색기에서 이름 변경](images/java-refactoring/rename-explorer.gif)

### 해결된 타입을 var 타입으로 변경 {#change-resolved-type-to-var-type}

지역 변수를 선언할 때 `var`를 사용합니다.

#### 예제 {#example}

##### 이전 {#before}

```java
String s = "";
```

##### 이후 {#after}

```java
var s = "";
```

> 추가 참고: [var 타입을 해결된 타입으로 변경](#change-var-type-to-resolved-type)

---

### var 타입을 해결된 타입으로 변경 {#change-var-type-to-resolved-type}

해결된 타입을 사용하여 지역 변수를 선언합니다.

#### 예제 {#example}

##### 이전 {#before}

```java
var s = "";
```

##### 이후 {#after}

```java
String s = "";
```

> 추가 참고: [해결된 타입을 var 타입으로 변경](#change-resolved-type-to-var-type)

## 소스 작업 {#source-actions}

소스 작업은 일반 코드 구조와 반복 요소를 생성하는 데 사용할 수 있습니다. 그 중 일부는 코드 문제를 즉시 수정하는 데 도움이 되는 빠른 수정입니다.

### 생성자 생성 {#generate-constructors}

클래스에 대한 생성자를 추가합니다.

<video src="images/java-refactoring/generate-constructor.mp4" autoplay loop muted playsinline controls title="생성자 생성">
</video>

### 위임 메서드 생성 {#generate-delegate-methods}

위임 메서드를 생성합니다.

<video src="images/java-refactoring/generate-delegate-methods.mp4" autoplay loop muted playsinline controls title="위임 메서드 생성">
</video>

### 메서드 재정의/구현 {#overrideimplement-methods}

이 소스 작업을 사용하면 모든 후보가 체크리스트와 함께 제공됩니다. 그런 다음 무엇을 재정의하거나 구현할지 결정할 수 있습니다.

<video src="images/java-refactoring/override-implement-methods.mp4" autoplay loop muted playsinline controls title="메서드 재정의/구현">
</video>

### import 정리 {#organize-imports}

이 소스 작업을 사용하여 import를 정리할 수 있습니다. 모호한 import도 처리할 수 있으며, 이 경우 올바른 것을 선택할 수 있도록 드롭다운 목록이 제공됩니다. 해결되지 않은 타입이 있는 코드 줄도 제공되어 결정을 도와줍니다.

<video src="images/java-refactoring/resolve-ambiguous-imports.mp4" autoplay loop muted playsinline controls title="import 정리">
</video>

### getter 및 setter 생성 {#generate-getters-and-setters}

모든 새 멤버 변수에 대해 getter 및 setter를 대량으로 생성할 수 있습니다. 클래스에 필드가 여러 개 있는 경우, 소스 작업이 액세서 메서드를 생성하는 데 사용할 대상 필드를 선택하기 위한 빠른 선택을 요청합니다.

<video src="images/java-refactoring/advancedgettersetter.mp4" autoplay loop muted playsinline controls title="getter 및 setter 생성">
</video>

### `hashCode()` 및 `equals()` 생성 {#generate-hashcode-and-equals}

`hashCode()` 및 `equals()`는 기본 구현으로 생성할 수 있습니다. 모든 비정적 멤버 변수가 나열되며, 체크리스트를 사용하여 생성된 코드를 사용자 정의할 수 있습니다.

생성된 코드를 사용자 정의할 수 있는 두 가지 옵션이 있습니다:

- Java 7+를 사용하는 경우, `java.codeGeneration.hashCodeEquals.useJava7Objects`를 `true`로 설정하여 `Objects.hash` 및 `Objects.equals`를 호출하는 짧은 코드를 생성할 수 있습니다.
- 또한 `java.codeGeneration.hashCodeEquals.useInstanceof`를 `true`로 설정하여 `Object.getClass()`를 호출하는 대신 `instanceOf` 연산자를 사용하여 객체 타입을 확인할 수 있습니다.

<video src="images/java-refactoring/generate-hashcode-equals.mp4" autoplay loop muted playsinline controls title="hashCode() 및 equals() 생성">
</video>

### `toString()` 생성 {#generate-tostring}

`toString()` 메서드를 생성하는 새로운 소스 작업이 있습니다. 모든 멤버 변수의 체크리스트를 사용하여 사용자 정의할 수 있습니다.

<video src="images/java-refactoring/generate-tostring.mp4" autoplay loop muted playsinline controls title="toString() 생성">
  <source type="video/mp4" />
</video>

### 가능한 경우 수정자를 final로 변경 {#change-modifiers-to-final-where-possible}

현재 소스 파일의 모든 변수와 매개변수에 `final` 수정자를 추가합니다.

#### 예제 {#example}

##### 이전 {#before}

```java
public class Clazz {
  public void method(int value) {
    boolean notValid = value > 5;
    if (notValid) {
      // 무언가를 수행합니다.
    }
  }
}
```

##### 이후 {#after}

```java
public class Clazz {
  public void method(final int value) {
    final boolean notValid = value > 5;
    if (notValid) {
      // 무언가를 수행합니다.
    }
  }
}
```

### 접근 불가능한 참조 수정 {#fix-non-accessible-reference}

이 빠른 수정은 접근 불가능한 참조를 수정하는 데 도움을 줍니다.

<video src="images/java-refactoring/fix-non-access-reference.mp4" autoplay loop muted playsinline controls title="접근 불가능한 참조 수정">
</video>

### 존재하지 않는 패키지 생성 {#create-non-existing-package}

패키지 이름이 폴더 이름과 일치하지 않을 때, 소스 코드에서 패키지 이름을 변경하거나 파일 시스템에서 폴더를 이동할 수 있는 옵션이 있습니다(목적지 폴더가 아직 존재하지 않더라도).

<video src="images/java-refactoring/create-non-exist-package.mp4" autoplay loop muted playsinline controls title="존재하지 않는 패키지 생성">
</video>

### 지원되는 기타 코드 작업 {#other-code-actions-supported}

VS Code에서 지원하는 코드 작업 목록은 계속 증가하고 있으며, 위에는 가장 인기 있는 작업만 나열되어 있습니다. 그 외에 주목할 만한 지원 작업에는 다음이 포함됩니다(단, 이에 국한되지 않음):

- 해결되지 않은 타입 생성
- `final` 수정자 제거
- 불필요한 캐스트 제거
- 중복 인터페이스 제거
- switch 문에서 누락된 case 레이블 추가
- break/continue에서 정의로 점프
- 정적 요소에 대한 접근 수정
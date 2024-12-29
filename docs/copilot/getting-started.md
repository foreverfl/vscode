---
Order: 4
Area: copilot
TOCTitle: 빠른 시작
ContentId: 37fd3bd2-4209-49f6-bec5-c544d6b1b289
PageTitle: Visual Studio Code에서 GitHub Copilot 빠른 시작
DateApproved: 12/11/2024
MetaDescription: Visual Studio Code에서 GitHub Copilot을 시작하고 에디터에서 AI 기반 제안을 처음으로 만들어보세요.
MetaSocialImage: images/shared/github-copilot-social.png
---

# Visual Studio Code에서 GitHub Copilot 시작하기 {#getting-started-with-github-copilot-in-vs-code}

이 튜토리얼은 Visual Studio Code에서 GitHub Copilot의 주요 기능을 안내합니다. [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) 확장 프로그램을 시작하여 에디터에서 AI 기반 코드 제안을 받고, 채팅 대화를 통해 코드를 리팩토링하고, 스마트 액션으로 코드 오류를 수정하는 방법을 알아보세요.

:::tip
Copilot 구독이 아직 없다면 [Copilot Free 플랜](https://github.com/github-copilot/signup)에 가입하여 Copilot을 무료로 사용할 수 있으며, 매월 제한된 수의 완성 및 채팅 상호작용을 이용할 수 있습니다.
:::

이 튜토리얼에서는 TypeScript를 사용하지만, Copilot은 다양한 다른 언어와 프레임워크에 대해서도 학습되어 있다는 점을 참고해 주세요.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/2q0BoioYSxQ" title="GitHub Copilot Best Practices (what not to do)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 전제 조건 {#prerequisites}

- VS Code에서 GitHub Copilot을 사용하려면 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) 확장 프로그램이 필요합니다. 이 확장 프로그램을 설치하면 [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) 확장 프로그램도 함께 설치됩니다.

- GitHub Copilot을 사용하려면 개인 계정에 활성화된 GitHub Copilot 구독이 있거나, 조직에서 사용 권한을 부여받아야 합니다.

구독을 신청하고 VS Code에 Copilot 확장 프로그램을 설치하여 [VS Code에서 GitHub Copilot을 설정](/docs/copilot/setup.md)하는 단계를 따르세요.

## 첫 번째 코드 제안 받기 {#get-your-first-code-suggestion}

VS Code에서 GitHub Copilot을 시작하기 위해 특별한 작업을 할 필요가 없습니다. 에디터에서 코드를 입력하면 Copilot이 자동으로 코드 제안을 표시하여 더 효율적인 코딩을 도와줍니다.

1. Visual Studio Code를 열고 새 JavaScript 파일 `calculator.js`를 생성합니다.

2. JavaScript 파일에서 다음 코드를 입력하기 시작합니다:

   ```javascript
   class Calculator
   ```

   Copilot은 자동으로 `Calculator` 클래스에 대한 메서드를 회색 흐린 텍스트(고스트 텍스트)로 제안합니다. 우리 예제에서는 `add`와 `subtract` 메서드가 제안됩니다. 실제로 받는 제안은 다를 수 있습니다.

3. 제안을 수락하려면 `Tab` 키를 누릅니다.

   축하합니다! 첫 번째 AI 기반 인라인 제안을 수락하셨습니다. 계속 입력하면 Copilot이 인라인 제안을 그에 맞게 업데이트합니다.

4. 주어진 입력에 대해 여러 가지 제안이 있을 수 있습니다. `factorial` 메서드를 추가하기 위해 클래스 안에 다음 코드를 입력하세요:

   ```javascript
   factorial(n) {
   ```

5. 에디터에서 제안 위에 마우스를 올리면 여러 가지 제안이 있다는 것을 알 수 있습니다.

   화살표 컨트롤을 사용하거나 다음(`Alt+]`) 또는 이전(`Alt+[`) 제안을 보기 위한 키바인딩을 사용할 수 있습니다.

AI 기반 코드 완성은 상용구나 반복적인 코드 생성을 도와주어 개발자가 흐름을 유지하고 더 복잡한 코딩 작업에 집중할 수 있게 해줍니다.

## 인라인 채팅을 사용하여 기본 웹 서버 생성하기 {#use-inline-chat-to-generate-a-basic-web-server}

Copilot Chat을 사용하면 VS Code에서 Copilot과 채팅 대화를 시작하여 자연어로 코드에 대한 특정 작업을 요청할 수 있습니다.

**인라인 채팅**을 사용하여 기본 Express 웹 서버를 생성해 보겠습니다.

1. 먼저 작업 영역에 새 TypeScript 파일 `server.ts`를 추가합니다.

2. 이제 키보드에서 `Ctrl+I`를 눌러 Copilot 인라인 채팅을 불러옵니다.

   Copilot 인라인 채팅은 활성 에디터의 코드에 대해 질문할 수 있는 채팅 인터페이스를 제공합니다.

3. 채팅 입력 필드에 _"간단한 express 웹 서버 추가"_ 를 입력하고 `Enter`를 눌러 프롬프트를 Copilot에 전송합니다.

   Copilot이 에디터에 스트리밍 응답을 반환하는 것을 확인하세요. 응답은 간단한 Node.js Express 웹 서버의 구현입니다.

4. **수락**을 선택하거나 `Ctrl+Enter`를 눌러 제안된 코드 변경사항을 적용합니다.

   축하합니다! 채팅과 자연어를 사용하여 코드를 생성하는 Copilot Chat을 사용해보셨습니다.

## AI 채팅을 통해 코드 리팩토링하기 {#refactor-your-code-through-ai-chat}

인라인 채팅을 사용하여 에디터의 기존 코드를 리팩토링하거나 개선할 수도 있습니다.

현재 웹 서버가 정적 포트 번호 `3000`을 사용하고 있습니다. 포트 번호에 환경 변수를 사용하도록 변경해 보겠습니다.

1. 에디터에서 `server.ts` 파일의 포트 번호 `3000`을 선택한 다음 `Ctrl+I`를 눌러 인라인 채팅을 시작합니다.

2. 채팅 입력 필드에 *"포트 번호에 환경 변수 사용"*을 입력하고 `Enter`를 눌러 채팅 요청 또는 프롬프트를 전송합니다.

   Copilot이 포트 번호에 환경 변수를 사용하도록 기존 코드를 업데이트하는 것을 확인하세요.

3. **Accept**을 선택하거나 `Ctrl+Enter`를 눌러 제안된 코드 변경사항을 적용합니다.

4. 제안된 변경사항이 마음에 들지 않는다면 프롬프트를 수정하여 Copilot에게 다른 해결책을 제공하도록 요청할 수 있습니다.

   예를 들어, Copilot에게 포트 번호에 대해 다른 환경 변수 이름을 사용하도록 요청할 수 있습니다.

## Copilot Chat을 사용하여 일반적인 프로그래밍 질문하기 {#use-copilot-chat-for-general-programming-questions}

새로운 코드베이스를 작업하거나 새로운 프로그래밍 언어를 탐색할 때 더 일반적인 코딩 질문이 생길 수 있습니다. Copilot Chat을 사용하면 측면에서 채팅 대화를 열 수 있으며, 질문 기록을 추적합니다.

1. Command Center Copilot 메뉴에서 채팅 보기를 열거나 `Ctrl+Alt+I`를 누릅니다.

   :::tip
   Command Center 메뉴에서 언제든지 다양한 Copilot 기능에 접근할 수 있습니다.
   :::

2. 채팅 입력 필드에 "재귀가 무엇인가요?"를 입력하고 `Enter`를 눌러 요청을 Copilot에 전송합니다.

   채팅 응답에 텍스트와 코드 블록으로 구성된 풍부한 결과가 포함되어 있는 것을 확인하세요. 채팅 응답의 코드 블록은 IntelliSense를 지원하므로 메서드와 심볼 위에 마우스를 올려 정보를 얻거나 정의로 이동할 수 있습니다.

3. [Copilot Chat 튜토리얼](/docs/copilot/getting-started-chat.md)의 단계를 따라 특정 코드베이스에 대한 질문을 하는 데 Copilot Chat을 사용하는 방법을 알아보세요.

## Copilot Edits로 여러 파일 편집하기 (프리뷰) {#make-edits-across-multiple-files-with-copilot-edits-preview}

더 큰 코드 변경은 여러 파일의 편집을 포함할 수 있습니다. Copilot Edits를 사용하면 작업 영역의 여러 파일에서 에디터 내에 AI 기반 제안을 받을 수 있습니다. 개별 코드 블록을 적용하는 대신 Copilot Edits는 작업 영역 전체에서 편집을 수행합니다.

Copilot Edits를 사용하여 웹 서버 응답에서 HTML 파일의 내용을 반환해 보겠습니다.

1. Command Center Copilot 메뉴에서 **Open Copilot Edits** 를 선택하거나 `Ctrl+Shift+I`를 누릅니다.

2. Copilot Edits 뷰가 열립니다. `server.ts` 파일이 *작업 세트*에 추가된 것을 확인하세요.

   작업 세트에는 Copilot Edits가 수정할 수 있는 파일이 포함됩니다. 파일이 추가되지 않은 경우 **Add Files...** 를 사용하여 작업 세트에 파일을 추가하세요.

3. *홈페이지로 정적 html 페이지를 반환하고 구현하세요.*를 채팅 입력 필드에 입력하고 `Enter`를 눌러 새 편집 세션을 시작합니다.

   Copilot Edits가 여러 편집을 수행하는 것을 확인하세요: 정적 HTML 페이지를 반환하도록 `server.ts` 파일을 업데이트하고 새 파일 `index.html`도 추가합니다.

4. 결과가 마음에 든다면 **Accept**을 선택하여 제안된 모든 변경사항을 적용합니다.

   편집된 다른 파일들 사이를 탐색하고 에디터 오버레이 컨트롤을 사용하여 수락/폐기할 수도 있습니다.

## Copilot으로 코딩 오류 수정하기 {#fix-coding-errors-with-copilot}

인라인 완성과 채팅 대화 외에도 GitHub Copilot은 VS Code의 개발자 흐름 전반에 걸쳐 다양한 곳에서 사용할 수 있습니다. VS Code 사용자 인터페이스에서 _반짝이는_ 아이콘을 통해 Copilot 기능의 존재를 알 수 있습니다.

이러한 기능 중 하나는 컴파일러 오류로 인한 빨간 물결선이 있을 때 에디터에서 나타나는 Copilot 코딩 액션입니다. Copilot이 코딩 오류를 해결하는 데 어떻게 도움이 되는지 살펴보겠습니다.

1. 앞서 만든 `server.ts` TypeScript 파일을 에디터에서 엽니다.

   `import express from 'express';` 문에 빨간 물결선이 있는 것을 확인하세요. 빨간 물결선에 커서를 놓으면 Copilot 반짝임이 나타나는 것을 볼 수 있습니다.

2. 반짝임을 선택하여 Copilot 코드 액션을 보고, **Fix using Copilot**을 선택합니다.

3. Copilot 인라인 채팅이 나타나고 오류 메시지와 함께 문제를 해결하기 위한 솔루션이 미리 채워져 있는 것을 확인하세요.

   채팅 응답에서 직접 **Insert into Terminal** 버튼을 선택하여 제안된 명령을 터미널에 복사할 수 있습니다.

## 다음 단계 {#next-steps}

축하합니다. 이제 인공지능을 사용하여 코딩을 향상시켰습니다! 이 튜토리얼에서는 VS Code에서 Copilot을 성공적으로 설정하고, Copilot 코드 완성, Copilot Chat 및 코드 액션을 사용하여 더 효율적으로 코딩하는 방법을 배웠습니다.

- Copilot Chat에 대해 자세히 알아보려면 [Copilot Chat 튜토리얼](/docs/copilot/getting-started-chat.md)을 진행하세요.

- Copilot Edits에 대해 자세히 알아보려면 [Copilot Edits](/docs/copilot/copilot-edits.md) 문서를 참조하세요.

## 관련 리소스 {#related-resources}

YouTube의 [고급 기능](https://www.youtube.com/watch?v=SLMfhuptCo8) 비디오에서 Copilot을 사용한 리팩토링, 컨텍스트 기반 제안, 단위 테스트 등에 대한 심층적인 내용을 확인하세요.

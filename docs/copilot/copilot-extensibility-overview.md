---
Order: 13
Area: copilot
TOCTitle: Copilot 확장성
ContentId: e375ec2a-43d3-4670-96e5-fd25a6aed272
PageTitle: GitHub Copilot 확장성 개요
DateApproved: 12/11/2024
MetaDescription: Chat API 또는 Language Model API를 사용하여 Visual Studio Code 확장에서 GitHub Copilot을 확장하는 방법에 대한 개요입니다.
MetaSocialImage: images/shared/github-copilot-social.png
---

# VS Code에서의 GitHub Copilot <br /> 확장성 {#github-copilot-extensibility-in-vs-code}

GitHub Copilot 확장성을 사용하여 Visual Studio Code의 Copilot 채팅 기능을 확장하거나 VS Code 확장에 AI 기반 기능을 추가할 수 있습니다. VS Code에서 Copilot을 확장하려면 VS Code 확장을 빌드하고 확장 API를 사용하여 GitHub Copilot과 상호 작용합니다.

사용 사례에 따라 VS Code 확장에서 Copilot을 사용하는 다음과 같은 옵션이 있습니다:

- **VS Code 채팅 확장**: Chat API를 사용하여 사용자에게 자연어 인터페이스를 제공하고 VS Code의 채팅 뷰를 통해 도메인별 도움말을 제공하는 채팅 참여자를 만듭니다. 선택적으로 Copilot Large Language Model(LLM)을 사용하여 사용자 프롬프트를 해석하고 응답을 생성할 수 있습니다.

- **Copilot의 LLM 사용**: Language Model API와 VS Code 확장 API를 사용하여 확장에 AI 기반 기능을 구축하고 에디터별 상호 작용을 향상시킵니다.

또는 추가 기능을 갖춘 GitHub 앱으로 구현된 **Copilot 확장**을 빌드할 수도 있습니다. Copilot 확장은 지원되는 모든 IDE와 GitHub에서 작동하지만 VS Code에 특화된 기능에는 액세스할 수 없습니다. GitHub 문서에서 [Copilot 확장](https://docs.github.com/en/copilot/building-copilot-extensions/about-building-copilot-extensions)에 대한 자세한 정보를 확인하세요.

## 사용 사례 {#use-cases}

Copilot의 기능을 사용하여 확장에 AI 기반 기능을 통합함으로써 VS Code에서의 개발 경험을 향상시킬 수 있습니다. 다음은 VS Code 확장에서 Copilot을 사용할 수 있는 방법의 예시입니다:

- **문서 쿼리**: 채팅 참여자는 Copilot 채팅이 검색 증강 생성(RAG)을 사용하여 타사 문서 서비스를 쿼리하고 검색된 정보를 기반으로 응답을 생성할 수 있게 합니다.

- **AI 지원 코딩**: Copilot LLM을 사용하여 코딩 제안을 제공하는 에디터 주석을 제공합니다.

- **AI 기반 리뷰**: Copilot LLM을 사용하여 보안 취약점이나 성능 개선을 위해 코드를 검토합니다.

- **데이터 검색**: 채팅 참여자는 Copilot 채팅이 데이터베이스나 타사 데이터 서비스를 쿼리하여 특정 주제에 대한 정보를 검색할 수 있게 합니다.

- **기업용 코딩 어시스턴트**: 기업의 데이터에 기반하고 회사가 따르는 특정 코딩 가이드라인을 인식하는 채팅 참여자입니다.

- **확장 기능 향상**: Language Model API를 사용하여 기존 VS Code 확장에 AI 기반 기능을 추가합니다.

다음은 VS Code의 채팅 뷰에 채팅 참여자를 제공하는 Visual Studio Marketplace의 확장 예시입니다.

<div class="marketplace-extensions-chat"></div>

더 많은 확장을 찾으려면 [마켓플레이스](https://marketplace.visualstudio.com/search?term=tag%3Achat-participant&target=VSCode&category=All%20categories&sortBy=Relevance)를 방문하거나 통합된 [확장 화면](/docs/editor/extension-marketplace.md)를 사용하여 `chat-participant` 태그로 검색하세요.

## VS Code에서 Copilot 확장성 시작하기 {#get-started-with-copilot-extensibility-in-vs-code}

VS Code 확장에서 Copilot 확장을 시작하려면 다음 리소스를 살펴보세요:

- [**튜토리얼: AI 기반 코드 주석**](/api/extension-guides/language-model-tutorial.md): Language Model API를 사용하여 코드 개선을 돕는 에디터의 코드 주석을 생성하는 VS Code 확장을 구현하는 단계별 가이드입니다.

- [**튜토리얼: 코드 튜터 채팅 참여자**](/api/extension-guides/chat-tutorial.md): VS Code의 채팅 뷰에서 자연어를 사용하여 기술적 주제에 대한 설명을 요청할 수 있는 코드 튜터 채팅 참여자를 구현하는 단계별 가이드입니다.

- [**채팅 참여자 샘플**](https://github.com/microsoft/vscode-extension-samples/tree/main/chat-sample): Chat API와 Language Model API를 사용하는 VS Code 채팅 확장 구축을 시작하기 위한 샘플 코드입니다.

- **확장 가이드**: [Chat API](/api/extension-guides/chat.md)와 [Language Model API](/api/extension-guides/language-model.md)를 사용하여 VS Code 확장에서 Copilot을 확장하는 방법을 알아보세요.

## 관련 콘텐츠 {#related-content}

- [Copilot 확장 시작하기](https://github.com/features/copilot/extensions)
- [GitHub Copilot으로 VS Code 확장 기능 강화하기](https://www.youtube.com/watch?v=YI7kjWzIiTM) Microsoft Build 세션

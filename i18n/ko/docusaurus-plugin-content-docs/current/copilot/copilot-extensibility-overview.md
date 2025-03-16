---
Order: 13
Area: copilot
TOCTitle: Copilot 확장성
ContentId: e375ec2a-43d3-4670-96e5-fd25a6aed272
PageTitle: GitHub Copilot 확장성 개요
DateApproved: 03/05/2025
MetaDescription: Chat API 또는 Language Model API를 사용하여 Visual Studio Code 확장에서 GitHub Copilot을 확장하는 방법에 대한 개요입니다.
MetaSocialImage: images/shared/github-copilot-social.png
sidebar_label: Copilot 확장성
---
# GitHub Copilot 확장성 in VS Code {#github-copilot-extensibility-in-vs-code}

GitHub Copilot 확장성을 사용하여 Visual Studio Code에서 Copilot Chat의 기능을 확장하거나 AI 기반 기능을 VS Code 확장에 추가할 수 있습니다. VS Code에서 Copilot을 확장하려면 VS Code 확장을 구축하고 확장 API를 사용하여 GitHub Copilot과 상호작용합니다.

사용 사례에 따라 VS Code 확장에서 Copilot을 사용할 수 있는 다음 옵션이 있습니다:

- **VS Code Chat 확장**: Chat API를 사용하여 사용자에게 자연어 인터페이스를 제공하고 VS Code의 Chat 뷰를 통해 도메인별 도움을 제공하는 채팅 참가자를 생성합니다. 선택적으로, Copilot 대형 언어 모델(LLM)을 사용하여 사용자 프롬프트를 해석하고 응답을 생성할 수 있습니다.

- **Copilot의 LLM 사용**: Language Model API와 VS Code 확장 API를 사용하여 AI 기반 기능을 확장에 구축하고 편집기 특정 상호작용을 향상시킵니다.

또한, **Copilot 확장**을 구축할 수도 있으며, 이는 추가 기능이 있는 GitHub 앱으로 구현됩니다. Copilot 확장은 모든 지원되는 IDE와 GitHub에서 작동하지만 VS Code에 특정한 기능에 접근할 수는 없습니다. GitHub 문서에서 [Copilot 확장](https://docs.github.com/en/copilot/building-copilot-extensions/about-building-copilot-extensions)에 대한 자세한 정보를 확인하세요.

## 사용 사례 {#use-cases}

Copilot의 기능을 사용하여 VS Code에서 개발 경험을 향상시키고 AI 기반 기능을 확장에 통합할 수 있습니다. 다음은 VS Code 확장에서 Copilot을 사용할 수 있는 몇 가지 예입니다:

- **문서 쿼리**: 채팅 참가자는 Copilot Chat이 Retrieval-Augmented Generation (RAG)을 사용하여 제3자 문서 서비스에 쿼리하고 검색된 정보를 기반으로 응답을 생성할 수 있게 합니다.

- **AI 지원 코딩**: Copilot LLM을 사용하여 편집기 주석을 제공하고 코딩 제안을 합니다.

- **AI 기반 리뷰**: Copilot LLM을 사용하여 보안 취약점이나 성능 개선을 위한 코드 리뷰를 수행합니다.

- **데이터 검색**: 채팅 참가자는 Copilot Chat이 데이터베이스나 제3자 데이터 서비스에 쿼리하여 특정 주제에 대한 정보를 검색할 수 있게 합니다.

- **기업 코딩 도우미**: 귀사의 데이터에 기반하고 귀사가 따르는 특정 코딩 가이드라인을 인식하는 채팅 참가자입니다.

- **확장 향상**: Language Model API를 사용하여 기존 VS Code 확장에 AI 기반 기능을 추가합니다.

다음은 VS Code의 Chat 뷰에 채팅 참가자를 제공하는 Visual Studio Marketplace의 확장 예시입니다.

<div class="marketplace-extensions-chat"></div>

[Marketplace](https://marketplace.visualstudio.com/search?term=tag%3Achat-participant&target=VSCode&category=All%20categories&sortBy=Relevance)로 이동하거나 통합된 [Extensions view](/docs/editor/extension-marketplace.md)를 사용하여 `chat-participant` 태그를 통해 더 많은 확장을 검색하세요.

## VS Code에서 Copilot 확장성 시작하기 {#get-started-with-copilot-extensibility-in-vs-code}

VS Code 확장에서 Copilot을 확장하는 것을 시작하려면 다음 리소스를 탐색하세요:

- [**튜토리얼: AI 기반 코드 주석**](/api/extension-guides/language-model-tutorial.md): Language Model API를 사용하여 편집기에서 코드 주석을 생성하여 코드를 개선하는 데 도움을 주는 VS Code 확장을 구현하는 단계별 가이드입니다.

- [**튜토리얼: 코드 튜터 채팅 참가자**](/api/extension-guides/chat-tutorial.md): 사용자가 VS Code의 Chat 뷰에서 자연어를 사용하여 기술 주제를 설명해 달라고 요청할 수 있는 코드 튜터 채팅 참가자를 구현하는 단계별 가이드입니다.

- [**채팅 참가자 샘플**](https://github.com/microsoft/vscode-extension-samples/tree/main/chat-sample): Chat API와 Language Model API를 사용하는 VS Code Chat 확장을 구축하는 데 도움이 되는 샘플 코드입니다.

- **확장 가이드**: [Chat API](/api/extension-guides/chat.md)와 [Language Model API](/api/extension-guides/language-model.md)를 사용하여 VS Code 확장에서 Copilot을 확장하는 방법을 배웁니다.

## 관련 콘텐츠 {#related-content}

- [Copilot 확장 시작하기](https://github.com/features/copilot/extensions)
- [GitHub Copilot으로 VS Code 확장 향상하기](https://www.youtube.com/watch?v=YI7kjWzIiTM) Microsoft Build 세션
---
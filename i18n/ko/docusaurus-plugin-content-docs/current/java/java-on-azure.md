---
Order: 11
Area: java
TOCTitle: 자바 앱 배포
ContentId: 01210769-05be-4854-9482-13e342850ad7
PageTitle: 자바 웹 앱 배포
DateApproved: 10/18/2022
MetaDescription: Visual Studio Code를 사용하여 Java 애플리케이션을 Azure에 배포하는 방법
sidebar_label: 자바 웹 앱 배포
---

# 자바 웹 앱 배포 {#deploy-java-web-apps}

[Azure Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack) 확장 팩은 Java 애플리케이션을 지원하는 클라우드 서비스를 쉽게 발견하고 상호작용할 수 있도록 도와주는 다양한 확장 기능을 포함하고 있습니다.

이 확장 팩은 다음과 같은 개발 워크플로우를 지원합니다:

- [Azure App Service](https://azure.microsoft.com/services/app-service)로 Java 애플리케이션(컨테이너 포함)을 배포합니다.
- [Azure Spring Cloud](https://azure.microsoft.com/services/spring-cloud/)로 Spring 마이크로서비스를 배포합니다.
- [Azure Functions](https://azure.microsoft.com/services/functions)로 서버리스 코드를 배포합니다.

![Azure Tools 확장](images/azure/azure-tools.png)

특정 Azure 서비스에 관심이 있다면, [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/VSCode)에서 직접 검색하여 사용 가능한 확장이 있는지 확인할 수 있습니다.

## 배포 튜토리얼 {#deployment-tutorials}

아래의 튜토리얼은 세부 사항을 안내합니다. Java 개발자를 위한 Azure 관련 모든 정보는 [Java Azure Developer's Center](https://learn.microsoft.com/azure/developer/java)에서 확인할 수 있습니다.

| 튜토리얼                                                                                                                                                  | 설명                                                       | 관련 도구                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Java 웹 앱 <br /> Azure App Service에 배포하기](/docs/java/java-webapp.md)                                                                             | 클라우드에 웹 앱 배포하기                                 | [Apache Maven](https://maven.apache.org/download.cgi) <br /> [Azure App Service](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice) |
| [Spring Boot 앱 <br /> Azure Spring Apps에 배포하기](/docs/java/java-spring-apps.md)                                                                     | Azure Spring Apps에 Spring Boot 애플리케이션 배포하기<br /> | [Apache Maven](https://maven.apache.org/download.cgi) <br /> [Azure Spring Apps](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-azurespringcloud)      |
| [Visual Studio Code를 사용하여 <br /> Azure Functions 프로젝트 만들기](https://learn.microsoft.com/azure/azure-functions/create-first-function-vs-code-java) | Azure Functions를 사용하여 서버리스 코드 배포하기       | [Apache Maven](https://maven.apache.org/download.cgi) <br /> [Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)    |

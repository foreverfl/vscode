---
Order: 10
Area: java
TOCTitle: 애플리케이션 서버
ContentId: 4f5e169c-d91d-46b7-8c36-b695b5862313
PageTitle: Visual Studio Code에서 애플리케이션 서버 작업하기
DateApproved: 12/142021
MetaDescription: Visual Studio Code를 사용하는 Java 개발자를 위한 Tomcat, Jetty 및 Open Liberty 확장.
---

# Visual Studio Code에서 애플리케이션 서버 작업하기 {#working-with-application-servers-in-vs-code}

Visual Studio Code는 코드 편집기 중심의 개발 도구이므로 내장된 애플리케이션 서버가 포함되어 있지 않습니다. 대부분의 서버는 명령줄을 사용하여 배포해야 하며, 연결하려면 적절한 디버거 [구성](/docs/java/java-debugging.md#configure)을 사용해야 합니다.

반면에 특정 Java 작업 부하에 대해 서버 통합이 매우 유용하다는 것을 알고 있습니다. Visual Studio Code를 사용하면 [Tomcat](https://tomcat.apache.org/), [Jetty](https://www.eclipse.org/jetty/), [Open Liberty](https://openliberty.io/)와 같은 인기 있는 애플리케이션 서버에 대한 서드파티 확장을 찾을 수 있으며, 이는 해당 서버를 로컬에서 작업할 때 유용합니다.

[Spring Boot Dashboard](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-boot-dashboard)에 대한 내용은 [Visual Studio Code에서의 Spring Boot](/docs/java/java-spring-boot.md)를 참조하세요.

아래 기능을 사용할 때 문제가 발생하면 [이슈](https://github.com/microsoft/vscode-java-pack/issues)를 입력하여 저희에게 연락하실 수 있습니다.

## 커뮤니티 서버 커넥터 {#community-server-connectors}

[커뮤니티 서버 커넥터](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-community-server-connector) 확장은 Red Hat에서 발행했습니다. 이 확장은 원격 서버 프로토콜 기반의 서버 커넥터를 제공하며, [Apache Felix](https://felix.apache.org/documentation/index.html), [Karaf](https://karaf.apache.org/), [Tomcat](https://tomcat.apache.org/)과 같은 커뮤니티 런타임 및 서버를 시작, 중지, 게시 및 제어할 수 있습니다.

<video src="images/java-tomcat-jetty/server-connector.mp4" autoplay loop muted playsinline controls title="커뮤니티 서버 커넥터">
</video>

## 기타 서버 {#other-servers}

[Open Liberty Tools](https://marketplace.visualstudio.com/items?itemName=Open-Liberty.liberty-dev-vscode-ext) 확장은 Open Liberty에서 애플리케이션을 실행할 수 있게 해주며, Visual Studio Code에서 애플리케이션을 배포, 테스트 및 디버깅할 수 있습니다.

Red Hat의 [서버 커넥터](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-server-connector) 확장은 Red Hat 서버 및 WildFly, JBoss EAP, Minishift, CDK와 같은 런타임 제품에 배포, 시작 및 중지할 수 있게 해줍니다.

[MicroProfile용 확장 팩](https://marketplace.visualstudio.com/items?itemName=MicroProfile-Community.vscode-microprofile-pack)은 Open Liberty, Quarkus, Payara와 같은 런타임에 개발 및 배포하기 위한 MicroProfile 프로젝트를 생성하는 도구를 제공합니다.
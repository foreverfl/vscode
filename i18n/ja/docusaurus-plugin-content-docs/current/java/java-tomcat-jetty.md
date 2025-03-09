---
Order: 10
Area: java
TOCTitle: Application Servers
ContentId: 4f5e169c-d91d-46b7-8c36-b695b5862313
PageTitle: Visual Studio Code에서 애플리케이션 서버 작업하기
DateApproved: 12/142021
MetaDescription: Visual Studio Code를 사용하는 Java 개발자를 위한 Tomcat, Jetty 및 Open Liberty 확장 프로그램.
---

# VS Code에서 애플리케이션 서버 작업하기 {#working-with-application-servers-in-vs-code}

Visual Studio Code는 코드 편집기 중심의 개발 도구이므로 내장된 애플리케이션 서버가 제공되지 않습니다. 대부분의 서버의 경우, 명령줄을 사용하여 배포해야 하며, 서버에 연결하려면 적절한 디버거 [설정](/docs/java/java-debugging.md#configure)을 사용해야 합니다.

반면에, 특정 Java 작업의 경우 서버 통합이 매우 유용하다는 것을 알고 있습니다. Visual Studio Code에서는 [Tomcat](https://tomcat.apache.org/), [Jetty](https://www.eclipse.org/jetty/), [Open Liberty](https://openliberty.io/)와 같은 인기 있는 애플리케이션 서버를 위한 서드파티 확장 프로그램을 찾을 수 있으며, 이는 로컬에서 해당 서버들을 작업할 때 도움이 됩니다.

[Spring Boot Dashboard](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-boot-dashboard)에 대해서는 [Visual Studio Code에서의 Spring Boot](/docs/java/java-spring-boot.md)를 참조하세요.

아래 기능들을 사용하면서 문제가 발생하면 [이슈](https://github.com/microsoft/vscode-java-pack/issues)를 등록하여 문의할 수 있습니다.

## 커뮤니티 서버 커넥터 {#community-server-connectors}

[Community Server Connectors](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-community-server-connector) 확장 프로그램은 Red Hat에서 제공합니다. 이는 Remote Server Protocol 기반 서버 커넥터를 제공하며, [Apache Felix](https://felix.apache.org/documentation/index.html), [Karaf](https://karaf.apache.org/), [Tomcat](https://tomcat.apache.org/)과 같은 커뮤니티 런타임과 서버를 시작, 중지, 배포 및 제어할 수 있습니다.

<video autoplay loop muted playsinline controls title="커뮤니티 서버 커넥터" style={{maxWidth: "100%"}}>

  <source src="https://code.visualstudio.com/docs/java/java-tomcat-jetty/server-connector.mp4" type="video/mp4" />
</video>

## 기타 서버 {#other-servers}

[Open Liberty Tools](https://marketplace.visualstudio.com/items?itemName=Open-Liberty.liberty-dev-vscode-ext) 확장 프로그램을 사용하면 Open Liberty에서 애플리케이션을 실행할 수 있으며, Visual Studio Code에서 애플리케이션을 배포, 테스트 및 디버그할 수 있습니다.

Red Hat의 [Server Connector](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-server-connector) 확장 프로그램을 사용하면 WildFly, JBoss EAP, Minishift, CDK와 같은 Red Hat 서버 및 런타임 제품을 시작, 중지 및 배포할 수 있습니다.

[Extension Pack for MicroProfile](https://marketplace.visualstudio.com/items?itemName=MicroProfile-Community.vscode-microprofile-pack)은 Open Liberty, Quarkus, Payara와 같은 런타임에 개발하고 배포하기 위한 MicroProfile 프로젝트를 생성하는 도구를 제공합니다.

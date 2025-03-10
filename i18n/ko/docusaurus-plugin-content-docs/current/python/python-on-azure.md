---
Order: 15
Area: python
TOCTitle: 파이썬 앱 배포
ContentId: 12bf713e-5f20-46ac-81bb-8e05565aba3a
PageTitle: 파이썬 웹 앱 배포
DateApproved: 03/05/2025
MetaDescription: Visual Studio Code를 사용하여 Azure에 파이썬 애플리케이션을 배포하는 방법
MetaSocialImage: images/tutorial/python-social.png
---

# 파이썬 웹 앱 배포 {#deploy-python-web-apps}

Visual Studio Code용 [Azure Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack) 확장 프로그램을 사용하면 파이썬 애플리케이션(컨테이너 포함)을 [Azure App Service](https://azure.microsoft.com/services/app-service)에 쉽게 배포하고, 서버리스 코드를 [Azure Functions](https://azure.microsoft.com/services/functions)에 배포할 수 있습니다.

![Azure Tools 확장 프로그램](images/azure/azure-tools.png)

## 배포 튜토리얼 {#deployment-tutorials}

다음은 [Python Azure Developer's Center](https://learn.microsoft.com/azure/developer/python)에서 제공하는 튜토리얼로, 자세한 내용을 안내합니다.

| 튜토리얼                                                                                                                                 | 설명                                      | 관련 도구                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Azure App Service에 파이썬 웹 앱 배포](https://learn.microsoft.com/azure/app-service/quickstart-python)                            | 간단한 웹 앱 배포                        | [Django](https://www.djangoproject.com/) <br /> [Flask](https://flask.palletsprojects.com/) <br /> [Azure CLI](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azurecli) <br /> [Azure App Service](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice) <br /> [Azure Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack) |
| [Azure App Service에 데이터베이스가 있는 파이썬 웹 앱 배포](https://learn.microsoft.com/azure/app-service/tutorial-python-postgresql-app) | PostgreSQL 데이터베이스가 있는 웹 앱 배포 | [Django](https://www.djangoproject.com/) <br /> [Flask](https://flask.palletsprojects.com/) <br /> [PostgreSQL](https://www.postgresql.org/download/) <br /> [Azure App Service](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice) <br /> [Azure Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack)                                  |
| [Azure App Service에 파이썬 컨테이너 배포](https://learn.microsoft.com/azure/developer/python/tutorial-deploy-containers-01)        | Docker 컨테이너 배포                     | [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) <br /> [Azure App Service](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice) <br /> [Azure Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack)                                                                                              |
| [Azure Functions에 파이썬 배포](https://learn.microsoft.com/azure/azure-functions/create-first-function-vs-code-python)               | Azure Functions로 서버리스 코드 배포    | [Azure Functions Core Tools](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local#install-the-azure-functions-core-tools) <br /> [Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions) <br /> [Azure Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack)                                          |
---
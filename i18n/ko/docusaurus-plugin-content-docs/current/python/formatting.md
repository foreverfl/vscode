---
Order: 6
Area: python
TOCTitle: 포맷팅
ContentId: c5039182-eee4-47ff-a2a8-dc28f4bc2cbc
PageTitle: Visual Studio Code에서 Python 포맷팅
DateApproved: 03/05/2025
MetaDescription: Visual Studio Code에서 Python 포맷팅
MetaSocialImage: images/tutorial/python-social.png
---

# Visual Studio Code에서 Python 포맷팅 {#formatting-python-in-vs-code}

포맷팅은 소스 코드를 사람이 읽기 쉽게 만듭니다. 줄 간격, 들여쓰기, 연산자 주변의 간격과 같은 특정 규칙과 관습을 적용함으로써 코드는 시각적으로 더 정돈되고 이해하기 쉬워집니다. [autopep8](https://pypi.org/project/autopep8/) 페이지에서 예제를 확인할 수 있습니다. 포맷팅은 코드 자체의 기능에는 영향을 미치지 않는다는 점을 기억하세요.

[Linting](/docs/python/linting.md)는 코드의 일반적인 구문, 스타일, 기능 오류 및 비전통적인 프로그래밍 관행을 분석하여 오류를 방지하는 데 도움을 줍니다. 포맷팅과 린팅 사이에는 약간의 겹침이 있지만, 두 기능은 상호 보완적입니다.

## 포맷터 선택하기 {#choose-a-formatter}

원하는 포맷터 확장을 위해 [VS Code Marketplace](https://marketplace.visualstudio.com/vscode)를 검색하세요.

Microsoft에서 제공하는 포맷팅 확장은 다음과 같습니다:

| 포맷터         | 확장                                                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autopep8        | [https://marketplace.visualstudio.com/items?itemName=ms-python.autopep8](https://marketplace.visualstudio.com/items?itemName=ms-python.autopep8)               |
| Black formatter | [https://marketplace.visualstudio.com/items?itemName=ms-python.black-formatter](https://marketplace.visualstudio.com/items?itemName=ms-python.black-formatter) |

커뮤니티에서 제공하는 포맷터 확장:

| 포맷터 | 확장                                                                                                                                        |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Ruff    | [https://marketplace.visualstudio.com/items?itemName=charliermarsh.ruff](https://marketplace.visualstudio.com/items?itemName=charliermarsh.ruff) |
| yapf    | [https://marketplace.visualstudio.com/items?itemName=eeyore.yapf](https://marketplace.visualstudio.com/items?itemName=eeyore.yapf)               |

또한, 아래는 import 정렬을 지원하는 포맷터 확장입니다:

| 포맷터 | 확장                                                                                                                                        |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Ruff    | [https://marketplace.visualstudio.com/items?itemName=charliermarsh.ruff](https://marketplace.visualstudio.com/items?itemName=charliermarsh.ruff) |
| isort   | [https://marketplace.visualstudio.com/items?itemName=ms-python.isort](https://marketplace.visualstudio.com/items?itemName=ms-python.isort)       |

> **참고**: 위 표나 Marketplace에서 원하는 포맷터를 찾을 수 없다면, 확장을 통해 지원을 추가할 수 있습니다. [Python Extension Template](/api/advanced-topics/python-extension-template.md)를 사용하여 새로운 Python 도구를 VS Code에 통합할 수 있습니다.

## 기본 포맷터 설정하기 {#set-a-default-formatter}

포맷터 확장을 설치한 후, 아래 단계를 따라 VS Code에서 Python 파일의 기본 포맷터로 선택할 수 있습니다:

1. VS Code에서 Python 파일을 엽니다.
1. 편집기에서 마우스 오른쪽 버튼을 클릭하여 컨텍스트 메뉴를 표시합니다.
1. **Format Document With...**를 선택합니다.
1. 드롭다운 메뉴에서 **Configure Default Formatter...**를 선택합니다.
1. 목록에서 원하는 포맷터 확장을 선택합니다.

또는, `[python]` 범위 내의 사용자 `settings.json` 파일에서 `"editor.defaultFormatter"`를 설정하여 모든 Python 파일의 기본 포맷터로 설정할 수 있습니다. **Preferences: Open User Settings (JSON)** 명령을 사용하여 `settings.json`을 열 수 있습니다.

예를 들어, Black Formatter를 기본 포맷터로 설정하려면 사용자 `settings.json` 파일에 다음 설정을 추가합니다:

```json
  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter"
  }
```

포맷터 확장을 import 정렬기로 설정하려면, 사용자 `settings.json` 파일 또는 작업 공간 `settings.json` 파일의 `[python]` 범위 내에서 `"editor.codeActionsOnSave"` 아래에 선호도를 설정할 수 있습니다. 각각 **Preferences: Open User Settings (JSON)** 및 **Preferences: Open Workspace Settings (JSON)** 명령을 사용하여 이러한 `settings.json` 파일을 열 수 있습니다. 이렇게 하면 모든 Python 파일에 대해 저장 시 import 정렬이 활성화됩니다.

예를 들어, Ruff를 선호하는 import 정렬기로 설정하려면 사용자 `settings.json` 또는 작업 공간 `settings.json` 파일에 다음 설정을 추가할 수 있습니다:

```json
{
  "[python]": {
    "editor.codeActionsOnSave": {
      "source.organizeImports.ruff": "explicit"
    }
  }
}
```

## 코드 포맷하기 {#format-your-code}

편집기에서 마우스 오른쪽 버튼을 클릭하고 **Format Document**를 선택하거나 `kb(editor.action.formatDocument)` 키보드 단축키를 사용하여 코드를 포맷할 수 있습니다.

코드를 저장할 때 포맷팅을 활성화하려면 사용자 `settings.json` 파일에 다음 설정을 추가할 수 있습니다:

```json
  "[python]": {
    "editor.formatOnSave": true
  }
```

## 일반 포맷팅 설정 {#general-formatting-settings}

지원되는 설정에 대한 자세한 내용은 각 포맷터 확장의 README를 참조하세요. 대부분의 포맷터 확장에서 지원하는 설정은 다음과 같습니다:

| 설정 접미사<br/> | 기본값        | 설명                                                                                                                                                                                                                              |
| ---------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| args             | `[]`           | 포맷터에 전달될 인수입니다. 각 인수는 배열의 개별 문자열로 전달되어야 합니다. <br /> 예를 들어:<br /> `black-formatter.args: ["--line-length", "100"]`                                                                                  |
| importStrategy   | `useBundled`   | `useBundled`로 설정하면 확장은 함께 제공되는 도구의 버전을 사용합니다. `fromEnvironment`로 설정하면 선택한 Python 환경에서 먼저 로드하려고 시도하고, 그렇지 않으면 번들된 버전으로 돌아갑니다.                                      |
| path             | `""`           | 포맷팅에 사용할 포맷터 바이너리의 경로입니다. **참고:** 이 옵션을 사용하면 포맷팅 속도가 느려질 수 있습니다.                                                                                                                     |
| interpreter      | `[]`           | Python 실행 파일의 경로로 설정하면, 확장은 이를 사용하여 포맷터 서버와 그 하위 프로세스를 시작합니다.                                                                                                                                 |
| showNotifications| `off`          | 확장이 알림을 표시하는 시점을 제어합니다. 지원되는 값은 `off`, `always`, `onError`, `onWarning`입니다.                                                                                                                            |

## 포맷팅 문제 해결하기 {#troubleshoot-formatting}

포맷팅이 실패할 경우, 다음 가능한 원인을 확인하세요:

| 문제                                                                                  | 해결책                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Python 파일에 사용할 수 있는 포맷터가 여러 개 있습니다.                             | [위 섹션](#set-a-default-formatter)에서 설명한 대로 기본 포맷터를 설정하세요.                                                                                                                                                                                                                                                                                                   |
| "Format Document With..." 옵션이 없습니다.                                           | 컨텍스트 메뉴에서 이 옵션이 보이지 않는다면, VS Code에 포맷터 확장이 설치되지 않았거나 활성화되지 않은 것일 수 있습니다. Python 포맷터 확장을 설치하는 방법은 [포맷터 선택하기](#choose-a-formatter) 섹션을 참조하세요.                                                                                                                                 |
| 포맷터에 대한 사용자 지정 인수가 잘못되었습니다.                                     | 적절한 `<formatter>.path` 설정에 인수가 포함되어 있지 않은지 확인하고, `<formatter>.args`에 개별 최상위 인수 요소 목록이 포함되어 있는지 확인하세요.                                                                                                                                                                   |
| "더 이상 지원되지 않는 린팅 또는 포맷팅 설정이 있습니다" 알림이 표시됩니다.          | 이 알림이 표시되면, VS Code에 `python.linting` 또는 `python.formatting`과 같은 설정이 있다는 의미입니다. 이러한 설정은 더 이상 Python 확장에서 지원되지 않으며, [린팅 및 포맷팅 지원이 도구 확장으로 이전되었습니다](https://github.com/microsoft/vscode-python/wiki/Migration-to-Python-Tools-Extensions).                         | VS Code에서 이러한 설정이 정의된 위치를 찾으려면 명령 팔레트를 열고(`kb(workbench.action.showCommands)`) **Preferences: Open User Settings (JSON)** 명령을 실행하세요. 사용자 설정에 없다면 **Preferences: Open Workspace Settings (JSON)** 명령을 실행하세요. 그런 다음 더 이상 지원되지 않는 설정을 삭제하세요. <br /> **참고**: [Remote Development extension pack](/docs/remote/remote-overview.md#remote-development-extension-pack)의 확장을 사용하는 경우, **Preferences: Open Remote Settings (JSON)** 명령을 실행하여 원격 설정도 확인할 수 있습니다. |
| Black Formatter를 사용할 때 **Format Selection** 명령이 실패합니다.                 | `black`는 코드의 일부를 포맷하는 것을 지원하지 않습니다. 이 제한을 우회하려면, 붙여넣기 시 포맷을 비활성화하고 `formatOnSave`를 설정하여 전체 파일을 포맷할 수 있습니다: `"[python]": {"editor.formatOnPaste": false, "editor.formatOnSaveMode": "file"}`.                                                                                                   |
| 포맷터 확장이 설치되어 있음에도 불구하고 포맷팅이 작동하지 않습니다.               | 포맷팅이 실패하는 이유는 여러 가지가 있을 수 있습니다. 코드에 구문 문제가 있거나, 지원되지 않는 Python 버전을 사용하거나, 포맷터가 올바르게 구성되지 않았을 수 있습니다. 포맷터 확장의 출력 채널을 확인하여 포맷터가 실패한 이유를 이해하세요(명령 팔레트에서 **Output: Focus on Output** 명령을 실행한 후 포맷터 확장 채널을 선택). |

> **참고**: 위에 나열된 포맷터를 찾을 수 없다면, 확장을 통해 지원을 추가할 수 있습니다. [Python Extension Template](/api/advanced-topics/python-extension-template.md)를 사용하면 새로운 Python 도구를 VS Code에 쉽게 통합할 수 있습니다.

## 다음 단계 {#next-steps}

- [디버깅](/docs/python/debugging.md) - Python을 로컬 및 원격으로 디버깅하는 방법을 배웁니다.
- [테스트](/docs/python/testing.md) - 테스트 환경을 구성하고 테스트를 발견, 실행 및 디버깅합니다.
- [기본 편집](/docs/editor/codebasics.md) - 강력한 VS Code 편집기에 대해 알아봅니다.
- [코드 탐색](/docs/editor/editingevolved.md) - 소스 코드를 빠르게 이동합니다.
- [Python Extension Template](/api/advanced-topics/python-extension-template.md) - 좋아하는 린터를 VS Code에 통합하는 확장을 만듭니다.
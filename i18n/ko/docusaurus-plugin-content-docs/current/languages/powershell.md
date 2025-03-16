---
Order: 8
Area: languages
TOCTitle: PowerShell
ContentId: 8688bb6d-793e-4a37-aed2-5af4cfe89940
PageTitle: Visual Studio Code에서 PowerShell 편집하기
DateApproved: 02/20/2025
MetaDescription: Visual Studio Code에서 PowerShell을 사용하는 방법에 대해 알아보세요.
sidebar_label: PowerShell
---
# PowerShell in Visual Studio Code {#powershell-in-visual-studio-code}

[PowerShell][24]은 [.NET][23] 위에 구축된 작업 기반의 명령줄 셸 및 스크립팅 언어로, 모든 플랫폼에서 관리자를 위한 강력한 도구 세트를 제공합니다.

Microsoft의 [PowerShell][31] 확장은 Visual Studio Code (VS Code)에서 PowerShell에 대한 풍부한 언어 지원과 구문 완성, 정의 추적, 린팅과 같은 기능을 제공합니다. 이 확장은 [PowerShell 7+ 현재 지원되는 버전][17]을 사용하는 모든 VS Code 지원 환경에서 작동해야 합니다.

Windows PowerShell 5.1에 대한 지원은 최선을 다해 제공됩니다. [.NET Framework 4.8][18] 이상이 필요합니다.

[VS Code Remote Development][13] 환경, [GitHub Codespaces][19] 및 [VS Code Server][14]가 지원됩니다.

> [!IMPORTANT]
> [Visual Studio Code for the Web][12]은 PowerShell 엔진이 이 환경에서 실행될 수 없기 때문에 기본적인 구문 강조와 같은 제한된 기능만 지원됩니다.

다음 구성에서 적극적으로 테스트합니다:

- **Windows Server 2022**에서 Windows PowerShell 5.1 및 PowerShell 7+
- **macOS 14.7**에서 PowerShell 7+
- **Ubuntu 24.04**에서 PowerShell 7+

Windows에서는 제한된 언어 모드가 활성화된 경우와 그렇지 않은 경우 모두 테스트합니다.

## Installing the PowerShell extension {#installing-the-powershell-extension}

PowerShell 확장은 Visual Studio Code Marketplace에서 [설치 버튼][44]을 클릭하여 설치할 수 있습니다. 또한 VS Code 내에서 **Extensions** 뷰를 열고 키보드 단축키 `kb(workbench.view.extensions)`를 사용하여 _PowerShell_을 입력하고 PowerShell 확장을 선택하여 설치할 수 있습니다:

![PowerShell extension][40]

## Major features {#major-features}

- [구문 강조][20]
- 고급 내장 [코드 스니펫][08]
- cmdlet 및 기타에 대한 [IntelliSense][05]
- [PowerShell 스크립트 분석기][11]에 의해 보고된 [문제][09]
- cmdlet, 변수, 클래스 및 기타의 [정의로 이동][02]
- cmdlet, 변수, 클래스 및 기타의 [참조 찾기][04]
- 문서 및 작업 공간 [기호 탐색][03]
- 기호 기반 [개요 보기][10]
- 현재 터미널에서 선택한 PowerShell 코드를 `kbstyle(F8)`을 사용하여 실행
- 커서 아래 기호에 대한 온라인 도움말을 `kbstyle(Ctrl + F1)`을 사용하여 시작
- PowerShell [디버거][29] 통합
- 디버거와 상호작용할 수 있는 확장 터미널 (시도해 보세요: `Set-PSBreakpoint`!)
- [테마 선택기][07]에서 사용할 수 있는 PowerShell ISE 테마
- `kb(workbench.action.showCommands)`를 사용하여 ISE 모드를 시도한 후 "Enable ISE Mode"를 검색

### Debugging {#debugging}

PowerShell 확장은 VS Code의 내장 [디버깅 인터페이스][01]를 사용하여 PowerShell 스크립트 및 모듈을 디버깅할 수 있도록 합니다. PowerShell 디버깅에 대한 자세한 내용은 [Using VS Code][29]를 참조하세요.

### Multi-version support {#multi-version-support}

PowerShell 확장은 [이 지침][28]을 따라 머신에 설치된 지원되는 PowerShell 버전을 사용할 수 있도록 구성할 수 있습니다.

또는 명령 팔레트에서 **PowerShell: Show Session Menu** 명령을 실행합니다 (`kb(workbench.action.showCommands)`).

### CodeLens support {#codelens-support}

CodeLens는 소스 코드 내에서 표시되는 실행 가능한 맥락 정보를 제공하는 VS Code 기능입니다.

CodeLens 기능에는 다음이 포함됩니다:

- Pester **테스트 실행** 및 **테스트 디버그**.

  ![Pester CodeLens Integration][39]

- Pester 기호 지원

  ![CodeLens Pester Symbol Support][38]

- 함수, 변수, 클래스 및 기타 기호 참조

  CodeLens 참조 지원은 코드 내에서 기호가 참조된 횟수를 보여주고 특정 참조로 점프할 수 있게 해줍니다.

  ![CodeLens Function Reference Support][37]

### PSScriptAnalyzer integration {#psscriptanalyzer-integration}

[PSScriptAnalyzer][30]는 모듈 및 스크립트에 대한 정적 소스 코드 검사기를 제공하는 PowerShell 모듈입니다. **PSScriptAnalyzer**는 PowerShell 코드의 품질을 검증하는 규칙을 가지고 있습니다. 이러한 규칙은 PowerShell 팀과 커뮤니티에서 식별한 PowerShell 모범 사례를 기반으로 합니다. **PSScriptAnalyzer**는 잠재적인 코드 결함에 대해 사용자에게 알리고 개선을 위한 가능한 솔루션을 제안하는 진단 기록(오류 및 경고)을 생성합니다.

PowerShell 확장은 기본적으로 **PSScriptAnalyzer**를 포함하고 있으며, VS Code에서 편집하는 PowerShell 스크립트 파일에 대해 자동으로 분석을 수행합니다.

**PSScriptAnalyzer**는 초기화되지 않은 변수의 존재, **PSCredential** 유형의 사용, `Invoke-Expression`의 사용 등 PowerShell 소스 코드의 다양한 측면을 검사하는 내장 규칙 모음을 제공합니다. 이 모듈은 특정 규칙을 포함하거나 제외할 수 있도록 합니다.

**PSScriptAnalyzer**를 비활성화하려면 설정을 열고 (`kb(workbench.action.openSettings)`), **Extensions**를 찾아 **PowerShell** 확장을 선택한 후 **Script Analysis: Enable** (`powershell.scriptAnalysis.enable`)의 체크박스를 선택 해제합니다.

![PSScriptAnalyzer Settings][42]

**PSScriptAnalyzer**는 코드 형식 지정도 제공합니다. **문서 형식 지정** 명령이나 (`kb(editor.action.formatDocument)`) 키보드 단축키를 사용하여 자동 문서 형식 지정을 호출할 수 있습니다.

### Pester integration {#pester-integration}

[Pester][33]는 단위 테스트를 실행하기 위한 프레임워크이며 Windows PowerShell 5.1에는 **Pester** 3.40이 미리 설치되어 있습니다. **Pester**를 업데이트하거나 다른 플랫폼에 최신 버전을 설치하려면 [Pester 설치 지침][34]을 따르세요.

## PowerShell extension settings {#powershell-extension-settings}

VS Code [설정][06]은 **파일** > **환경 설정** > **설정** 메뉴 항목에서 사용자 지정할 수 있습니다.

활동 표시줄의 왼쪽 하단에 있는 기어 아이콘을 선택할 수도 있습니다.

![codeGear][36]

키보드 단축키 `kb(workbench.action.openSettings)`를 사용하여 설정을 열 수도 있습니다. 명령 팔레트에서 **Preferences: Open User Settings (JSON)** 명령을 사용하여 `settings.json` 파일을 열거나 `"workbench.settings.editor"` 설정으로 기본 설정 편집기를 변경하여 열 수 있습니다.

VS Code 설정 구성에 대한 자세한 내용은 [사용자 및 작업 공간 설정][06]을 참조하세요.

### Types.ps1xml and Format.ps1xml files {#typesps1xml-and-formatps1xml-files}

PowerShell `.ps1xml` 파일은 유형 시스템을 확장하고 출력 형식을 정의하는 데 사용됩니다. 이러한 파일에 대한 자세한 내용은 [Types.ps1xml][26] 및 [Format.ps1xml][25]에 대한 공식 PowerShell 문서를 참조하세요. `.ps1xml` 파일을 작성할 때 IntelliSense 기능을 얻으려면 [Red Hat의 XML 확장][32]을 설치하세요. 설치 후 사용자 설정에 다음 구성을 추가합니다:

```json
"xml.fileAssociations": [
  {
    "systemId": "https://raw.githubusercontent.com/PowerShell/PowerShell/master/src/Schemas/Format.xsd",
    "pattern": "**/*.Format.ps1xml"
  },
  {
    "systemId": "https://raw.githubusercontent.com/PowerShell/PowerShell/master/src/Schemas/Types.xsd",
    "pattern": "**/*.Types.ps1xml"
  }
]
```

이 구성은 XML 확장에 PowerShell 리포지토리의 공식 XML 스키마를 모든 `.ps1xml` 파일에 사용하도록 지시합니다. 이러한 스키마를 구성하면 `ps1xml` 파일에서 다음 기능을 사용할 수 있습니다:

- 구문 오류 보고
- 스키마 검증
- 태그 및 속성 완성
- 태그 자동 닫기
- 기호 강조
- 문서 접기
- 문서 기호 및 개요
- 이름 바꾸기 지원
- 문서 형식 지정

## Example scripts {#example-scripts}

예제 스크립트는 확장과 함께 포함되어 있으며 다음 경로에서 찾을 수 있습니다.

`~/.vscode/extensions/ms-vscode.PowerShell-<version>/examples`

VS Code에서 예제를 열거나 보려면 PowerShell 명령 프롬프트에서 다음을 실행하세요:

```powershell
code (Get-ChildItem ~\.vscode\extensions\ms-vscode.PowerShell-*\examples)[-1]
```

명령 팔레트 (`kb(workbench.action.showCommands)`)에서 **PowerShell: Open Examples Folder** 명령을 사용하여 예제를 열 수도 있습니다.

![Open PowerShell Examples][43]

## Additional resources {#additional-resources}

PowerShell 문서에는 더 자세한 기사가 있습니다. [Using VS Code][27]에서 시작하세요.

자주 묻는 질문에 대한 답변은 [문제 해결 가이드][21]를 확인하세요.

디버깅에 대한 자세한 내용은 PowerShell 확장을 사용한 디버깅에 대한 [@keithHill][35]이 작성한 _Hey, Scripting Guy!_ 두 부분 블로그 시리즈를 확인하세요:

- [Visual Studio Code에서 PowerShell 스크립트 디버깅 - 1부][15]
- [Visual Studio Code에서 PowerShell 스크립트 디버깅 - 2부][16]

## Testing new features and providing feedback {#testing-new-features-and-providing-feedback}

가능한 경우 _사전 릴리스_ 버전을 사용해 보시기 바랍니다. _사전 릴리스_가 사용 가능할 때는 **사전 릴리스 버전으로 전환** 버튼을 사용하여 마켓플레이스에서 설치할 수 있습니다. 안정적인 버전으로 다시 전환하려면 나타나는 **릴리스 버전으로 전환** 버튼을 사용하세요. **제거** 버튼 옆의 화살표를 사용하여 다른 버전으로 다운그레이드하고 **다른 버전 설치...**를 선택할 수도 있습니다.

![사전 릴리스 버전으로 전환하는 버튼을 보여주는 스크린샷.][41]

버그를 발견하면 [문제를 열고][22] 수정하는 동안 안정적인 버전으로 되돌리세요.
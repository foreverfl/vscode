# 휴대용 모드 {#portable-mode}

Visual Studio Code는 [휴대용 모드](https://en.wikipedia.org/wiki/Portable_application)를 지원합니다. 이 모드는 VS Code가 생성하고 유지하는 모든 데이터가 자신 근처에 존재하도록 하여 다양한 환경에서 이동할 수 있게 합니다.

이 모드는 또한 Windows AppData 폴더에 확장을 설치하지 못하도록 하는 기업 환경에서 유용한 VS Code 확장의 설치 폴더 위치를 설정하는 방법을 제공합니다.

휴대용 모드는 Windows의 ZIP 다운로드, Linux의 TAR.GZ 다운로드, 그리고 macOS의 일반 애플리케이션 다운로드에서 지원됩니다. 플랫폼에 맞는 `.zip / .tar.gz` 파일을 찾으려면 [다운로드 페이지](/download)를 참조하세요.

> [!IMPORTANT]
> **Windows 사용자 또는 시스템 설치 프로그램**에서 설치된 버전에서 휴대용 모드를 구성하려고 하지 마십시오. 휴대용 모드는 Windows ZIP(`.zip`) 아카이브에서만 지원됩니다. 또한 Windows ZIP 아카이브는 자동 업데이트를 지원하지 않습니다.

## 휴대용 모드 활성화 {#enable-portable-mode}

### Windows, Linux {#windows-linux}

VS Code 다운로드를 압축 해제한 후, VS Code 폴더 내에 `data` 폴더를 생성합니다:

```
|- VSCode-win32-x64-1.84.2
|   |- Code.exe (또는 code 실행 파일)
|   |- data
|   |- bin
|   |  |- code
|   |  |- ...
|   |- ...
```

그 이후로 `data` 폴더는 세션 상태, 기본 설정, 확장 등 모든 VS Code 데이터를 포함하는 데 사용됩니다.

> [!NOTE]
> `data` 폴더는 `--user-data-dir` 및 `--extensions-dir` [명령줄](/docs/editor/command-line.md#advanced-cli-options) 옵션을 덮어씁니다.

`data` 폴더는 다른 VS Code 설치로 이동할 수 있습니다. 이는 휴대용 VS Code 버전을 업데이트할 때 유용하며, 이 경우 `data` 폴더를 새로 추출한 VS Code 버전으로 이동할 수 있습니다.

### Linux {#linux}

**Linux**에서는 `data` 폴더를 생성하는 것 외에도 올바른 [Electron 샌드박스](https://www.electronjs.org/docs/tutorial/sandbox) 권한을 설정해야 합니다.

Chromium은 Linux에서 [다중 계층 샌드박스 모델](https://chromium.googlesource.com/chromium/src/+/0e94f26e8/docs/linux_sandboxing.md)을 가지고 있습니다. 만약 Chromium이 레이어-1에 대해 네임스페이스 샌드박스를 사용할 수 없다면, 애플리케이션 바이너리와 함께 제공되는 헬퍼 바이너리 `chrome-sandbox`를 통해 [`setuid` 샌드박스](https://chromium.googlesource.com/chromium/src/+/0e94f26e8/docs/linux_suid_sandbox.md)를 사용하려고 시도합니다.

다음 명령어를 실행하여 `setuid` 헬퍼의 올바른 권한을 설정합니다:

```bash
sudo chown root <path-to-vscode>/chrome-sandbox
sudo chmod 4755 <path-to-vscode>/chrome-sandbox
```

### macOS {#macos}

**macOS**에서는 데이터 폴더를 애플리케이션 자체의 형제 폴더로 배치해야 합니다. 폴더가 애플리케이션 옆에 위치할 것이므로 VS Code가 이를 찾을 수 있도록 특정한 이름을 지정해야 합니다. 기본 폴더 이름은 `code-portable-data`입니다:

```
|- Visual Studio Code.app
|- code-portable-data
```

애플리케이션이 [격리 상태](https://apple.stackexchange.com/a/104875)에 있을 경우 휴대용 모드는 작동하지 않습니다. 이는 VS Code를 다운로드한 직후 기본적으로 발생합니다. 휴대용 모드가 작동하지 않는 경우 격리 속성을 제거해야 합니다:

```bash
xattr -dr com.apple.quarantine Visual\ Studio\ Code.app
```

> [!NOTE]
> 인사이더 버전에서는 폴더 이름을 `code-insiders-portable-data`로 지정해야 합니다.

## 휴대용 VS Code 업데이트 {#update-portable-vs-code}

**Windows** 및 **Linux**에서는 `data` 폴더를 더 최신 버전의 VS Code로 복사하여 업데이트할 수 있습니다.

**macOS**에서는 자동 업데이트가 항상 작동하므로 추가 작업이 필요하지 않습니다.

## 휴대용 모드로 마이그레이션 {#migrate-to-portable-mode}

기존 설치를 휴대용 모드로 마이그레이션할 수도 있습니다.

### Windows, Linux {#windows-linux}

1. 플랫폼에 맞는 [VS Code](/download) (또는 [VS Code Insiders](/insiders)) ZIP 배포판을 다운로드합니다.
2. 위와 같이 `data` 폴더를 생성합니다.
3. 사용자 데이터 디렉토리 `Code`를 `data`로 복사하고 `user-data`로 이름을 변경합니다:
    * **Windows** `%APPDATA%\Code`
    * **Linux** `$HOME/.config/Code`
4. 확장 디렉토리를 `data`로 복사합니다:
    * **Windows** `%USERPROFILE%\.vscode\extensions`
    * **Linux** `~/.vscode/extensions`

예를 들어, **Windows**에서 원하는 결과는 다음과 같습니다:

```
|- VSCode-win32-x64-1.84.2
|   |- Code.exe (또는 code 실행 파일)
|   |- data
|   |   |- user-data
|   |   |   |- ...
|   |   |- extensions
|   |   |   |- ...
|   |- ...
```

### macOS {#macos}

1. macOS용 [VS Code](/download) (또는 [VS Code Insiders](/insiders))를 다운로드합니다.
2. 위와 같이 `code-portable-data` 폴더를 생성합니다.
3. 사용자 데이터 디렉토리 `Code`를 `code-portable-data`로 복사하고 `user-data`로 이름을 변경합니다:
    * `$HOME/Library/Application Support/Code`
4. 확장 디렉토리를 `code-portable-data`로 복사합니다:
    * `~/.vscode/extensions`

## TMP 디렉토리 {#tmp-directory}

기본적으로 휴대용 모드에서도 기본 `TMP` 디렉토리는 여전히 시스템 디렉토리입니다. 상태가 그곳에 유지되지 않기 때문입니다. 휴대용 디렉토리 내에 TMP 디렉토리를 두고 싶다면 `data` 폴더 내에 빈 `tmp` 디렉토리를 생성할 수 있습니다. `tmp` 디렉토리가 존재하는 한, TMP 데이터에 사용됩니다.
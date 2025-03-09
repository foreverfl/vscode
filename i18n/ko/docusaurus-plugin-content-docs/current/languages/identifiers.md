# 언어 식별자 {#language-identifiers}

Visual Studio Code에서 각 [언어 모드](/docs/languages/overview.md#changing-the-language-for-the-selected-file)는 고유한 언어 식별자를 가지고 있습니다. 이 식별자는 설정에서 파일 확장을 언어에 연결할 때와 같이 사용자에게는 거의 보이지 않습니다:

```json
    "files.associations": {
        "*.myphp": "php"
    }
```

정확한 식별자 일치를 위해 대소문자가 중요합니다 ('Markdown' != 'markdown').

언어 식별자는 새로운 언어 기능을 추가하거나 언어 지원을 교체할 때 VS Code 확장 개발자에게 필수적입니다.

모든 언어는 확장의 `package.json` 파일의 `languages` 구성 포인트를 통해 *id*를 정의합니다:

```json
    "languages": [{
        "id": "java",
        "extensions": [ ".java", ".jav" ],
        "aliases": [ "Java", "java" ]
    }]
```

언어 지원은 언어 식별자를 사용하여 추가됩니다:

```json
    "grammars": [{
        "language": "groovy",
        "scopeName": "source.groovy",
        "path": "./syntaxes/Groovy.tmLanguage.json"
    }],
    "snippets": [{
        "language": "groovy",
        "path": "./snippets/groovy.json"
    }]
```

```typescript
languages.registerCompletionItemProvider('php', new PHPCompletionItemProvider(), '.', '$')
```

## 새로운 식별자 지침 {#new-identifier-guidelines}

새로운 언어 식별자를 정의할 때는 다음 지침을 따르십시오:

- 소문자로 된 프로그래밍 언어 이름을 사용하십시오.
- 마켓플레이스에서 다른 확장을 검색하여 언어 식별자가 이미 사용되었는지 확인하십시오.

## 알려진 언어 식별자 {#known-language-identifiers}

다음 표는 알려진 언어 식별자를 나열합니다:

Language | Identifier
-------- | ----------
ABAP | `abap`
Windows Bat | `bat`
BibTeX | `bibtex`
Clojure | `clojure`
Coffeescript | `coffeescript`
C | `c`
C++ | `cpp`
C# | `csharp`
Compose | `dockercompose`
CSS | `css`
CUDA C++ | `cuda-cpp`
D | `d`
Dart | `dart`
Delphi | `pascal`
Diff | `diff`
Dockerfile | `dockerfile`
Erlang | `erlang`
F# | `fsharp`
Git | `git-commit` 및 `git-rebase`
Go | `go`
Groovy | `groovy`
Handlebars | `handlebars`
Haml | `haml`
Haskell | `haskell`
HTML | `html`
Ini | `ini`
Java | `java`
JavaScript | `javascript`
JavaScript JSX | `javascriptreact`
JSON | `json`
JSON with Comments | `jsonc`
Julia | `julia`
LaTeX | `latex`
Less | `less`
Lua | `lua`
Makefile | `makefile`
Markdown | `markdown`
Objective-C | `objective-c`
Objective-C++ | `objective-cpp`
OCaml | `ocaml`
Pascal | `pascal`
Perl | `perl` 및 `perl6`
PHP | `php`
Plain Text | `plaintext`
PowerShell | `powershell`
Pug | `jade`, `pug`
Python | `python`
R | `r`
Razor (cshtml) | `razor`
Ruby | `ruby`
Rust | `rust`
SCSS | `scss` (중괄호를 사용하는 구문), `sass` (들여쓰기 구문)
ShaderLab | `shaderlab`
Shell Script (Bash) | `shellscript`
Slim | `slim`
SQL | `sql`
Stylus | `stylus`
Svelte | `svelte`
Swift | `swift`
TypeScript | `typescript`
TypeScript JSX | `typescriptreact`
TeX | `tex`
Visual Basic | `vb`
Vue | `vue`
Vue HTML | `vue-html`
XML | `xml`
XSL | `xsl`
YAML | `yaml`
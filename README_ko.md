# VS Code 번역

## 다른 언어로 보기

- [English](/README.md)
- [日本語](/README_ja.md)

이 저장소는 [Docusaurus](https://docusaurus.io/)를 사용하여 구축된 Visual Studio Code의 번역 파일을 포함하고 있습니다.  
사용자는 다양한 언어로 번역된 문서를 볼 수 있습니다.

## 실행 방법

다음 명령어를 사용하여 로컬에서 문서 사이트를 실행할 수 있습니다. 기본적으로 사이트는 현재 한국어로 제공됩니다:

```sh
npm run start
npm run start -- --locale ko
npm run start -- --locale ja
```

`ko`를 원하는 언어 코드로 변경하여 미리보기할 수 있습니다. (예: `ja`는 일본어, `en`은 영어)

## 📂 프로젝트 구조

```plaintext
├── i18n/            # 번역된 마크다운 파일 저장소
│   ├── ko/          # 한국어 번역
│   ├── ja/          # 일본어 번역
│   │   ├── docusaurus-plugin-content-docs/
│   │   ├── current/ # 번역된 문서 (Markdown)
│   │   ├── versioned_docs/
├── src/             # 커스텀 React 컴포넌트 및 테마 수정 파일
├── docs/            # 기본 영어 문서 (있을 경우)
├── docusaurus.config.js  # Docusaurus 사이트 설정
└── package.json     # 의존성 및 스크립트
```

## ✨ 번역 방식

- 모든 번역 파일은 `i18n/` 디렉터리에 저장됩니다.
- 각 언어는 `ko`, `ja` 등의 폴더로 관리됩니다.
- `_original.md`로 끝나는 파일은 초벌 번역 파일이며, 추가 검토가 필요합니다.
- 번역 관리는 효율성을 위해 [커스텀 번역 CLI](https://github.com/foreverfl/doc-translation)를 사용하여 진행됩니다.

## 🛠 기여 방법

기여하고 싶다면:

1. 이 저장소를 포크하세요.
2. 새 브랜치를 생성하세요.
3. `i18n/{언어}/docusaurus-plugin-content-docs/current/`에서 마크다운 파일을 수정하세요.
4. `git rebase`를 사용하여 최신 상태로 유지하세요.
5. Pull Request를 제출하세요.

자세한 사항은 [기여 가이드](CONTRIBUTING_ko.md)를 참고하세요.

## 📜 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE)를 따릅니다.

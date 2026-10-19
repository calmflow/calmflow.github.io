# MAFF LAB

MAFF LAB의 브랜드 랜딩 페이지입니다. Astro + TypeScript로 정적 HTML을 생성하며, 클라이언트 JavaScript 프레임워크나 외부 API가 필요하지 않습니다.

## 개발

Node.js 22 이상을 사용합니다.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
```

`build`는 Astro/TypeScript 검사 후 `dist/`에 배포 파일을 생성합니다. 개발 스크립트는 Astro 텔레메트리를 비활성화하므로 읽기 전용 홈 디렉터리의 클라우드 환경에서도 실행할 수 있습니다.

## 수정 위치

- `src/components/`: 헤더, 첫 화면, 철학, 활동 소개, 마무리, 푸터
- `src/styles/global.css`: 색상, 여백, 글꼴, 반응형 스타일
- `src/layouts/Layout.astro`: SEO 및 Open Graph 메타데이터
- `public/images/`: 제공된 원본 PNG와 표시용 WebP
- `public/fonts/`: Pretendard 가변 글꼴 및 SIL OFL 라이선스

글꼴은 현재 페이지의 한국어 문자와 영문·숫자를 포함한 서브셋으로 최적화했습니다. 카피를 변경할 때 새 문자가 포함된다면 Pretendard 1.3.9 원본으로 서브셋을 다시 생성하거나 전체 글꼴로 교체하세요. 포함되지 않은 문자는 시스템 글꼴로 표시됩니다.

현재 문의 주소와 소셜 링크는 제공되지 않아 표시하지 않습니다. 연락처 확정 후 `Closing.astro`에 실제 링크를 추가하세요. 가입 폼이나 사용자 정보 저장 기능은 없습니다.

## GitHub Pages

`astro.config.mjs`의 사이트 주소는 저장소에 맞게 `https://calmflow.github.io`로 설정되어 있습니다. `.github/workflows/deploy.yml`은 `main` 푸시 또는 수동 실행으로 검사·빌드한 뒤 GitHub Pages에 배포합니다.

GitHub 저장소의 **Settings → Pages → Source**를 **GitHub Actions**로 설정해야 합니다. 현재 작업은 로컬 구현이며, 원격 푸시 및 실제 배포는 별도입니다.

각 클라우드 작업은 격리되어 있으므로 기존 체크아웃을 사용하고, 별도 요청 없이는 Git worktree를 만들지 않습니다.

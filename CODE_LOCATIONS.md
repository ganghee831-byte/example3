# 코드 위치 지도

| TODO | 파일과 위치 | 채울 내용 | 함께 확인할 곳 |
|---|---|---|---|
| 01 | `styles/responsive.css` 첫 블록 | `img`, `svg`, `video`의 유동 크기 | `base.css`의 전역 규칙 |
| 02 | `styles/responsive.css` 기본 영역 | 공통 유동 컨테이너 | `layout.css`의 `width: 1120px` 3곳 |
| 03 | 같은 파일 | Hero Grid의 유동 열 | `.hero-ticket code`의 긴 문자열 |
| 04 | 같은 파일 | 긴 단어와 코드 줄바꿈 | Hero Ticket, 제목, 버튼 문구 |
| 05 | 같은 파일 | `:focus-visible` 표시 | 모든 `a`, `button` |
| 06 | `@media (max-width: 900px)` | Hero, 카드, 신청 영역 1열 | `layout.css`의 각 Grid |
| 07 | `@media (max-width: 640px)` | `clamp()` 제목과 Section 여백 | `base.css`의 `h1`, `h2` |
| 08 | 같은 Media Query | 메뉴 버튼 표시와 44px 크기 | `index.html .menu-toggle` |
| 09 | 같은 Media Query | 닫힌 Nav와 `.menu-open` 상태 | `src/menu.js setMenu()` |
| 10 | 같은 Media Query | Action, Stats 1열 | `.hero-actions`, `.stats` |
| 11 | 같은 Media Query | 시간표 2열 재배치 | `.schedule article` 자식 3개 |
| 12 | 같은 Media Query | Footer 세로 배치 | `base.css footer` |
| 13 | `src/menu.js setMenu()` | `body.classList.toggle()` | `responsive.css .menu-open` |
| 14 | 같은 함수 | `aria-expanded` 갱신 | `index.html` 버튼의 초기값 |
| 15 | 파일 마지막 | `prefers-reduced-motion` | `html { scroll-behavior }` |

## 연결 구조

```text
menu button click
  -> setMenu(!isOpen)
    -> body.menu-open class
      -> responsive.css가 nav 표시
    -> button aria-expanded

viewport width
  -> 기본 규칙: desktop
  -> <= 900px: 큰 구조 1열
  -> <= 640px: navigation, typography, touch layout
```

# 실습 과제

## Core A - 넘침 제거

수정: `styles/responsive.css` TODO 01-05

- 320px과 360px에서 가로 스크롤을 제거합니다.
- 고정 1120px 컨테이너를 화면에 맞춰 줄어드는 컨테이너로 바꿉니다.
- 긴 참가 코드와 제목이 컨테이너 밖으로 나가지 않습니다.
- Tab 키로 이동할 때 현재 Focus가 분명히 보입니다.

## Core B - 정보 우선순위 재배치

수정: `styles/responsive.css` TODO 06-12

- 900px에서 Hero, Session, Register가 한 열로 바뀝니다.
- 640px에서 제목과 여백이 줄고 버튼은 충분히 큽니다.
- Session 카드 순서와 Schedule 시간 순서가 유지됩니다.
- 단순히 `overflow-x: hidden`으로 문제를 숨기지 않습니다.

## Core C - 모바일 메뉴

수정: `styles/responsive.css` TODO 08-09, `src/menu.js` TODO 13-14

- 640px 이하에서 메뉴 버튼만 먼저 보입니다.
- 버튼을 누르면 Navigation이 열리고 다시 누르면 닫힙니다.
- 메뉴 링크 선택, Escape, 640px 초과 Resize에서 닫힙니다.
- 화면 상태와 `aria-expanded` 값이 일치합니다.

## 선택 미션

하나 이상 선택합니다.

1. `prefers-reduced-motion`에서 Smooth Scroll을 끕니다.
2. 320px 초소형 화면을 추가로 지원합니다.
3. 900px에서 Session을 2열, 마지막 Card를 전체 너비로 배치합니다.
4. 인쇄 시 Navigation과 Button을 숨기는 Print Style을 만듭니다.
5. Lighthouse Accessibility 결과를 개선하고 변경 전후 점수를 기록합니다.

## Commit 예시

```bash
git diff -- styles/responsive.css
git add styles/responsive.css
git commit -m "feat: 모바일 레이아웃 재배치"

git diff -- src/menu.js
git add src/menu.js
git commit -m "feat: 접근 가능한 모바일 메뉴 연결"
```

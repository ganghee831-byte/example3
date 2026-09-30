# Week 03 - 반응형 행사 페이지

데스크톱 1120px에만 맞춰진 `JR Dev Day` 페이지를 모바일, 태블릿, 데스크톱에서 모두 사용할 수 있게 고칩니다. HTML 구조와 데스크톱 디자인은 이미 제공됩니다. 학생은 DevTools로 문제를 재현하고 `responsive.css`와 `menu.js`의 TODO를 연결합니다.

## 실행

```bash
cd ~/projects
git clone https://github.com/본인계정/수업저장소.git
cd 수업저장소
git branch feature/responsive-event
git checkout feature/responsive-event
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 열고 DevTools의 Device Toolbar에서 360, 768, 1280px을 확인합니다. `index.html`을 더블클릭해도 보이지만, 수업에서는 경로와 Cache 문제를 일관되게 확인하기 위해 로컬 서버를 사용합니다.

## 파일 지도

```text
index.html             콘텐츠 구조와 접근성 정보
styles/base.css        색상, 글자, 공통 Component
styles/layout.css      데스크톱 고정 레이아웃 - 문제의 출발점
styles/responsive.css  TODO 01-12, 15 - 학생의 주요 작업 파일
src/menu.js            TODO 13-14 - 모바일 메뉴 상태와 aria-expanded
TASKS.md               Core와 선택 미션
CODE_LOCATIONS.md      각 TODO의 정확한 위치와 관련 코드
TEST_CASES.md          Viewport별 완료 조건
CHECKLIST.md           제출 전 확인
AI_PROMPTS.md          설명과 Review 중심 AI 질문 예시
```

## 권장 해결 순서

1. 360px에서 가로 스크롤의 원인을 기록합니다.
2. `TODO 01-05`로 유동 컨테이너와 기본 안전망을 만듭니다.
3. `TODO 06-12`로 900px, 640px Breakpoint에서 배치를 바꿉니다.
4. `TODO 13-14`로 모바일 메뉴를 열고 닫습니다.
5. 360, 768, 1280px과 키보드만으로 다시 검증합니다.
6. `TODO 15` 또는 선택 미션 하나를 완료합니다.

정답은 특정 숫자 하나가 아닙니다. 가로 스크롤이 없고, 콘텐츠 순서가 자연스럽고, 모든 기능을 키보드와 터치로 사용할 수 있으면 됩니다.

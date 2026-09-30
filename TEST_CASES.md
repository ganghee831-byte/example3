# 테스트 케이스

## 화면 너비

| 너비 | 확인할 내용 |
|---|---|
| 320px | 가로 스크롤 없음, 제목 잘림 없음, 신청 Button 표시 |
| 360px | 모바일 Menu 작동, Session 1열, Schedule 읽기 가능 |
| 640px | Breakpoint 직전과 직후에서 내용이 갑자기 사라지지 않음 |
| 768px | Hero와 Card가 자연스럽게 한 열 또는 의도한 중간 배치 |
| 900px | Breakpoint 직전과 직후 비교 |
| 1280px | 원래 Desktop 배치와 최대 너비 유지 |

## 기능과 접근성

1. Tab 키로 Skip Link, Logo, Menu, 각 Link에 이동합니다.
2. Focus Ring이 배경과 구분됩니다.
3. 640px 이하에서 Menu Button을 Enter와 Space로 작동시킵니다.
4. Menu가 열리면 `aria-expanded="true"`, 닫히면 `false`인지 Elements에서 봅니다.
5. Escape, Link 선택, 창 확대 후 Menu가 닫히는지 봅니다.
6. DevTools Console에 Error가 없는지 확인합니다.

## 금지된 임시 해결

- `body { overflow-x: hidden; }`만 추가해 넘침을 가리지 않습니다.
- 글자를 지나치게 작게 만들어 맞추지 않습니다.
- 중요한 콘텐츠를 `display: none`으로 제거하지 않습니다.
- 모든 요소에 임의의 작은 고정 너비를 반복하지 않습니다.

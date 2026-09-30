# AI 활용 예시

완성 코드를 바로 받기보다 관찰, 선택, 검토 순서로 사용합니다.

## 원인 찾기

```text
아래 Desktop CSS를 360px에서 실행하면 가로 스크롤이 생긴다.
가능한 원인을 selector별로 찾는 DevTools 점검 순서를 알려줘.
아직 수정 코드는 작성하지 마.
```

## Breakpoint 설계

```text
현재 콘텐츠 구조를 기준으로 900px과 640px에서
무엇을 재배치해야 하는지 정보 우선순위 표로 설명해줘.
단순히 흔한 breakpoint 숫자를 추천하지 말고 이 페이지 근거를 써줘.
```

## Diff Review

```text
이 responsive.css diff를 검토해줘.
1. 여전히 고정 너비 때문에 넘칠 수 있는 곳
2. 너무 넓은 selector가 다른 화면을 깨뜨리는 곳
3. 키보드와 터치 사용성 문제
4. 320, 360, 640, 768, 900, 1280px 테스트 항목
을 파일과 selector 기준으로 알려줘.
```

## JavaScript Review

```text
setMenu(open)의 구현을 검토해줘.
화면 class와 aria-expanded가 어긋나는 경로를 찾고,
click, Escape, link 선택, resize 순서로 테스트를 만들어줘.
```

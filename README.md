## command

- `npm run dev` : dev모드 실행(use turbopack)
- `npm run test` : jest 실행
- `npm run storybook` : storybook 실행 (6006 port)

## Directory (src내부)

- `app` : next의 app router
- `api` : rest api
- `store` : zustand store
- `stories` : 공통 컴포넌트를 테스트할 storybook
- `util` : 기타 유틸로직들

## Test

- `app/main.test.tsx`

  - [x] <Home />의 렌더링시 버튼의 존재여부 확인
  - [ ] "퀴즈풀기" 버튼 클릭시 quiz 페이지로 이동 하는지 확인

- `app/quiz/quiz.test.tsx`

  - [ ] 미정

- `app/quiz/_component/quizBoard.test.tsx`

  - [x] <QuizBoard />의 렌더링시 title, answer의 개수가 알맞게 나오고 클릭전에 다음버튼이 나오지않는지 확인
  - [ ] 지문을 하나 클릭시에 해당 지문만 하이라이트되고, 다음버튼이 나오는지 확인
  - [ ] 다음버튼 클릭시 다음 지문이 나오는지 확인

- `app/quiz/_component/resultBoard.test.tsx`
  - [x] <ResultBoard />의 렌더링시 최종 스코어, 전체 문제 리스트, 스코어에 대한 차트가 잘 나오는 지확인

import { screen, render } from "@testing-library/react";
import { Quiz } from "@/api";
import ResultBoard from "./resultBoard";
import userEvent from "@testing-library/user-event";

const MOCK_QUIZ_LIST: Quiz[] = [
  {
    category: "스포츠",
    difficulty: "쉬움",
    incorrect_answers: ["10", "12", "13"],
    correct_answer: "11",
    question: "축구팀의 인원은 몇명인가요?",
    type: "?",
    selected_answer: "11",
  },
  {
    category: "스포츠",
    difficulty: "쉬움",
    incorrect_answers: ["2", "3", "4"],
    correct_answer: "1",
    question: "축구팀의 골키퍼는 몇명인가요?",
    type: "?",
    selected_answer: "2",
  },
  {
    category: "스포츠",
    difficulty: "쉬움",
    incorrect_answers: ["1", "3", "4"],
    correct_answer: "2",
    question: "축구는 몇 라운드로 진행되나요",
    type: "2",
    selected_answer: "2",
  },
];

test("결과보드 렌더링시 테스트", async () => {
  const user = userEvent.setup();
  render(<ResultBoard quizList={MOCK_QUIZ_LIST} />);

  const resultScore = screen.getByTestId("result-score");
  expect(resultScore).toHaveTextContent("2/3");

  const results = screen.getAllByTestId("quiz");
  expect(results).toHaveLength(MOCK_QUIZ_LIST.length);

  const chart = screen.getByTestId("result-chart");
  expect(chart).toBeInTheDocument();
});

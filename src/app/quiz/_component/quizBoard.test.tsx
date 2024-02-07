import { screen, render, waitFor, act } from "@testing-library/react";
import QuizBoard, { QuizBoardProps } from "./quizBoard";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

const MOCK_PROPS: QuizBoardProps = {
  quizList: [
    {
      category: "스포츠",
      difficulty: "쉬움",
      incorrect_answers: ["10", "12", "13"],
      correct_answer: "11",
      question: "축구팀의 인원은 몇명인가요?",
      type: "?",
    },
    {
      category: "스포츠",
      difficulty: "쉬움",
      incorrect_answers: ["2", "3", "4"],
      correct_answer: "1",
      question: "축구팀의 골키퍼는 몇명인가요?",
      type: "?",
    },
  ],
  step: 0,
  setStep: (v) => {
    console.log(v);
  },
  handleSelectQuiz: (v) => {
    console.log(v);
  },
};

test("렌더링시 첫번째 문제 노출이 잘되는지 테스트", () => {
  render(<QuizBoard {...MOCK_PROPS} />);

  const quizTitle = screen.getByTestId("quiz-title");
  expect(quizTitle).toHaveTextContent("축구팀의 인원은 몇명인가요?");

  const quizAnswers = screen.getAllByTestId("quiz-answer");
  expect(quizAnswers).toHaveLength(4);

  const nextBtn = screen.queryByRole("button", { name: "/다음/i" });
  expect(nextBtn).not.toBeInTheDocument();
});

test.skip("지문 선택시 테스트", async () => {
  render(<QuizBoard {...MOCK_PROPS} />);
  const [first, second] = screen.getAllByTestId("quiz-answer");

  expect(first).toHaveStyle("color:#fff");
  expect(second).toHaveStyle("color:#fff");

  await waitFor(async () => await user.click(first));

  expect(first).toHaveStyle("color:#0f0");
  expect(second).toHaveStyle("color:#fff");

  await waitFor(async () => await user.click(second));

  expect(first).toHaveStyle("color:#fff");
  expect(second).toHaveStyle("color:#0f0");
});

test("다음 버튼 클릭시 테스트", () => {});

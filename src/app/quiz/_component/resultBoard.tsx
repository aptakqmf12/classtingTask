"use client";

import { useEffect } from "react";
import type { Quiz } from "@/api";
import { useCountStore } from "@/store/count";
import DoughnutChart from "@/app/_component/doughnutChart";
import { QuizCard } from "./quizBoard";

interface Props {
  quizList: Quiz[];
}

export default function ResultBoard({ quizList }: Props) {
  const { setIsCounting } = useCountStore();

  const correctScore = quizList.reduce((acc: number, cur: Quiz) => {
    if (cur.selected_answer === cur.correct_answer) {
      acc++;
    }
    return acc;
  }, 0);

  const incorrectScore = quizList.length - correctScore;

  useEffect(() => {
    setIsCounting(false);
  }, [setIsCounting]);

  return (
    <div className="flex flex-col p-4 ">
      <div className="flex flex-col items-center mb-20">
        <div className="text-xl" data-testid="result-score">
          결과 : {correctScore}/{quizList.length}
        </div>

        <div data-testid="result-chart">
          <DoughnutChart
            width={200}
            correctScore={correctScore}
            incorrectScore={incorrectScore}
          />
        </div>
      </div>

      <ul className="grid grid-cols-3 border border-gray-500 rounded-lg p-6">
        {quizList.map((quiz, i) => {
          const isCorrect = quiz.selected_answer === quiz.correct_answer;

          return (
            <li data-testid="quiz" className="mb-5" key={i}>
              <div
                className={`mb-1 text-lg font-bold ${
                  isCorrect ? "text-blue-500" : "text-red-500"
                }`}
              >
                문제 {i + 1} : {isCorrect ? "O" : "X"}
              </div>

              <ul className=" ">
                <li className={isCorrect ? "text-blue-500" : "text-white"}>
                  - 정답 : {quiz.correct_answer}
                </li>
                {quiz.incorrect_answers.map((incorrect, i) => (
                  <li
                    className={
                      quiz.selected_answer === incorrect
                        ? "text-red-500"
                        : "text-white"
                    }
                    key={i}
                  >
                    - 오답 : {incorrect}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

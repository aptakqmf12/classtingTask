"use client";

import { useEffect } from "react";
import type { Quiz } from "@/api";
import { useCountStore } from "@/store/count";
import DoughnutChart from "@/app/_component/doughnutChart";

interface Props {
  quizList: Quiz[];
}

export default function ResultBoard({ quizList }: Props) {
  const { count, setIsCounting } = useCountStore();

  const correctScore = quizList.reduce((acc: number, cur: Quiz) => {
    if (cur.selected_answer === cur.correct_answer) {
      acc++;
    }
    return acc;
  }, 0);

  const incorrectScore = quizList.length - correctScore;

  useEffect(() => {
    setIsCounting(false);
  }, []);

  return (
    <div>
      <h3>오답노트</h3>
      <div>소요된 시간 : {count}</div>

      <div>
        결과 : {correctScore}/{quizList.length}
      </div>

      <ul>
        {quizList.map((quiz, i) => (
          <li style={{ padding: 10 }} key={i}>
            <div>정답 : {quiz.correct_answer}</div>
            <div>나의 선택 : {quiz.selected_answer}</div>
          </li>
        ))}
      </ul>

      <div>
        <DoughnutChart
          correctScore={correctScore}
          incorrectScore={incorrectScore}
        />
      </div>
    </div>
  );
}

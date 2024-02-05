"use client";

import { useEffect } from "react";
import type { Quiz } from "@/api";
import { useCountStore } from "@/store/count";
import DoughnutChart from "@/app/_component/doughnutChart";
import { numberToTime } from "@/util/time";

import { QuizCard } from "./quizBoard";

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
    <div className="flex flex-col p-4 ">
      <div className="text-right">소요된 시간 : {numberToTime(count)}</div>

      <div data-testid="result-score">
        결과 : {correctScore}/{quizList.length}
      </div>

      <ul>
        {quizList.map((quiz, i) => (
          <QuizCard {...quiz} key={i} />
        ))}
      </ul>

      <div className="w-1/2" data-testid="result-chart">
        <DoughnutChart
          correctScore={correctScore}
          incorrectScore={incorrectScore}
        />
      </div>
    </div>
  );
}

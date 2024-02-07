"use client";

import { useState, useEffect } from "react";
import { getQuizList } from "@/api";
import type { Quiz } from "@/api";
import { useCountStore } from "@/store/count";
import { useQuery } from "@tanstack/react-query";

import QuizBoard from "./_component/quizBoard";
import ResultBoard from "./_component/resultBoard";
import { numberToTime } from "@/util/time";

export default function QuizPage() {
  const { count, setCountUp, isCounting, setIsCounting } = useCountStore();
  const [step, setStep] = useState(0);
  const [quizList, setQuizList] = useState<Quiz[]>([]);

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["quizList"],
    queryFn: getQuizList,
  });

  const handleSelectQuiz = (selected_answer: string) => {
    setQuizList(
      quizList.map((quiz, i) =>
        step === i ? { ...quiz, selected_answer } : quiz
      )
    );
  };

  useEffect(() => {
    if (!data) return;

    setQuizList(data.data.results || []);
  }, [data]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isCounting) {
      timer = setInterval(() => {
        setCountUp();
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isCounting]);

  useEffect(() => {
    if (isSuccess) {
      setIsCounting(true);
    }
  }, [isSuccess]);

  if (isError) return <div>응답실패</div>;
  if (isLoading) return <div>...loading</div>;

  return (
    <>
      <div
        className={`text-right ${
          isCounting ? "text-yellow-200" : "text-white"
        }`}
      >
        소요시간 : {numberToTime(count)}
      </div>

      {step === quizList.length ? (
        <ResultBoard quizList={quizList} />
      ) : (
        <QuizBoard
          quizList={quizList}
          step={step}
          setStep={setStep}
          handleSelectQuiz={handleSelectQuiz}
        />
      )}
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import { getQuizList } from "@/api";
import type { Quiz } from "@/api";
import { useCountStore } from "@/store/count";

import QuizBoard from "./_component/quizBoard";
import ResultBoard from "./_component/resultBoard";

export default function QuizPage() {
  const { setIsCounting } = useCountStore();

  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState(0);
  const [quizList, setQuizList] = useState<Quiz[]>([]);

  const handleSelectQuiz = (selected_answer: string) => {
    setQuizList(
      quizList.map((quiz, i) =>
        step === i ? { ...quiz, selected_answer } : quiz
      )
    );
  };

  useEffect(() => {
    getQuizList()
      .then((res) => {
        if (res.status === 200) {
          setQuizList(res.data.results);
          setIsLoading(false);
          setIsCounting(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (isLoading) return "loading...";

  return step === quizList.length ? (
    <ResultBoard quizList={quizList} />
  ) : (
    <QuizBoard
      quizList={quizList}
      step={step}
      setStep={setStep}
      handleSelectQuiz={handleSelectQuiz}
    />
  );
}

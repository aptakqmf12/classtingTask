"use client";

import { useState, useMemo, useEffect } from "react";
import type { Quiz } from "@/api";
import Button from "@/app/_component/button";
import Toast from "@/app/_component/toast";
import { useToastStore } from "@/store/toast";
import { useCountStore } from "@/store/count";

interface Props {
  quizList: Quiz[];
  step: number;
  setStep: (v: number) => void;
  handleSelectQuiz: (v: string) => void;
}

export default function QuizBoard({
  quizList,
  step,
  setStep,
  handleSelectQuiz,
}: Props) {
  const { count } = useCountStore();
  return (
    <>
      <div>현재시간 : {count}</div>
      <ul>
        {quizList.slice(step, step + 1).map((quiz, i) => (
          <QuizCard
            {...quiz}
            step={step}
            setStep={setStep}
            handleSelectQuiz={handleSelectQuiz}
            key={i}
          />
        ))}
      </ul>
    </>
  );
}

const QuizCard = (
  props: Quiz & {
    step: number;
    setStep: (v: number) => void;
    handleSelectQuiz: (v: string) => void;
  }
) => {
  const {
    category,
    difficulty,
    type,
    correct_answer,
    incorrect_answers,
    question,

    step,
    setStep,
    handleSelectQuiz,
  } = props;
  const { showToast, setShowToast } = useToastStore();
  const [selectedAnswer, setSelectedAnswer] = useState<string>();

  const shuffledAnswerList = useMemo(() => {
    return [...incorrect_answers, correct_answer].sort(
      () => Math.random() - 0.5
    );
  }, [step]);

  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextStep = () => {
    if (!selectedAnswer) return;

    setStep(step + 1);
    setSelectedAnswer(undefined);
    handleSelectQuiz(selectedAnswer);

    setShowToast(true);
  };

  useEffect(() => {
    const destroyToast = () => {
      setShowToast(false);
    };

    let timer = setTimeout(() => {
      destroyToast();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [step]);

  return (
    <>
      <li>
        <div>
          Q{step + 1}. : {question}
        </div>

        <ul>
          {shuffledAnswerList.map((answer, i) => {
            const isSelected = selectedAnswer === answer;

            return (
              <li
                style={{ color: isSelected ? "#0f0" : "#fff" }}
                onClick={() => handleSelectAnswer(answer)}
                key={i}
              >
                {i + 1}. {answer}
              </li>
            );
          })}
        </ul>

        {selectedAnswer && <Button onClick={handleNextStep}>다음</Button>}

        <div>hint = {String(selectedAnswer === correct_answer)}</div>
      </li>

      {showToast && (
        <Toast type={selectedAnswer === correct_answer ? "success" : "error"} />
      )}
    </>
  );
};

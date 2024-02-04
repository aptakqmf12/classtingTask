"use client";

import { useState, useMemo, useEffect } from "react";
import type { Quiz } from "@/api";
import Button from "@/app/_component/button";
import Toast from "@/app/_component/toast";
import { useToastStore, ToastStatus } from "@/store/toast";
import { useCountStore } from "@/store/count";
import { numberToTime } from "../../../util/time";

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
  const { setHideToast } = useToastStore();
  useEffect(() => {
    return () => {
      setHideToast();
    };
  }, []);
  return (
    <div className="flex flex-col p-4 ">
      <div className="text-right">소요시간 : {numberToTime(count)}</div>

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
    </div>
  );
}

export const QuizCard = (
  props: Quiz &
    Partial<{
      step: number;
      setStep: (v: number) => void;
      handleSelectQuiz: (v: string) => void;
    }>
) => {
  const {
    correct_answer,
    incorrect_answers,
    question,

    step = 0,
    setStep = () => {},
    handleSelectQuiz = () => {},
  } = props;
  const { showToast, toastStatus, setShowToast, setHideToast } =
    useToastStore();
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

    setShowToast(
      selectedAnswer === correct_answer ? ToastStatus.SUCCESS : ToastStatus.FAIL
    );
  };

  useEffect(() => {
    const destroyToast = () => {
      setHideToast();
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
        <div className="text-lg font-bold mb-2">
          문제{step + 1}. : {question}
        </div>

        <ul>
          {shuffledAnswerList.map((answer, i) => {
            const isSelected = selectedAnswer === answer;

            return (
              <li
                className="text-md font-normal mb-1"
                style={{ color: isSelected ? "#0f0" : "#fff" }}
                key={i}
              >
                <span
                  className="cursor-pointer"
                  onClick={() => handleSelectAnswer(answer)}
                >
                  {i + 1}. {answer}
                </span>
              </li>
            );
          })}
        </ul>

        {selectedAnswer && (
          <div className="flex items-center justify-center mt-8">
            <Button size="l" onClick={handleNextStep}>
              다음
            </Button>
          </div>
        )}
      </li>

      {showToast && toastStatus && <Toast type={toastStatus} />}
    </>
  );
};

"use client";

import React from "react";
import type { Quiz } from "@/api";

interface Props {
  quizList: Quiz[];
}

export default function ResultBoard({ quizList }: Props) {
  const total = quizList.reduce((acc: number, cur: Quiz) => {
    if (cur.selected_answer === cur.correct_answer) {
      acc++;
    }
    return acc;
  }, 0);
  return (
    <div>
      <h3>오답노트</h3>

      <div>
        결과 : {total}/{quizList.length}
      </div>

      <ul>
        {quizList.map((quiz, i) => (
          <li style={{ padding: 10 }} key={i}>
            <div>정답 : {quiz.correct_answer}</div>
            <div>나의 선택 : {quiz.selected_answer}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://opentdb.com/api.php";

export interface Quiz {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;

  selected_answer?: string;
}

export const getQuizList = async (): Promise<
  AxiosResponse<{
    response_code: number;
    results: Quiz[];
  }>
> => {
  return await axios.get(
    `${BASE_URL}?amount=10&category=21&difficulty=easy&type=multiple`
  );
};

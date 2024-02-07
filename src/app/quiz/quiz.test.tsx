import { screen, render } from "@testing-library/react";
import QuizPage from "./page";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  http.get(
    "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple",
    () => {
      return HttpResponse.json({
        response_code: 0,
        results: [],
      });
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("데이터 fetch 실패 테스트", async () => {
  server.use(
    http.get(
      "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple",
      () => {
        return new HttpResponse("error", {
          status: 500,
        });
      }
    )
  );

  window.alert = jest.fn();

  render(<QuizPage />);

  const alert = await screen.findByRole("alert", { name: "응답실패" });

  expect(alert).toBeInTheDocument();
});

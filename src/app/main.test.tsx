import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./page";

test("Home 렌더링 테스트", () => {
  render(<Home />);

  const button = screen.getByRole("button", { name: /퀴즈풀기/i });
  expect(button).toBeInTheDocument();
});

test.skip("버튼 클릭시 페이지 이동", async () => {
  const user = userEvent.setup();
  render(<Home />);

  const button = screen.getByRole("button", { name: /퀴즈풀기/i });
  user.click(button);

  await waitFor(() => {});
});

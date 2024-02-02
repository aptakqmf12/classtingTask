import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./page";

test("Home 렌더링 테스트", () => {
  render(<Home />);

  const button = screen.getByRole("button", { name: /버튼입니다/i });

  expect(button).toBeIntheDocument();
});

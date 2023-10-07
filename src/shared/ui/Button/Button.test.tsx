import { render, screen } from "@testing-library/react";
import { Button, ThemButton } from "./Button";

describe("classNames", () => {
  test("button test", () => {
    render(<Button>test</Button>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  test("button with className test", () => {
    render(<Button theme={ThemButton.CLEAR}>test</Button>);
    expect(screen.getByText("test")).toHaveClass("clear");
  });
});

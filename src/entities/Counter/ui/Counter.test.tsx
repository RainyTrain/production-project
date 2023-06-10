import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("Counter test", () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 0 } },
    });
    expect(screen.getByTestId("value-title")).toHaveTextContent("0");
  });
  test("sincrement", () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 0 } },
    });
    const toggleButton = screen.getByTestId("increment-btn");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("value-title")).toHaveTextContent("1");
  });
  test("decrement", () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 0 } },
    });
    const toggleButton = screen.getByTestId("decrement-btn");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("value-title")).toHaveTextContent("-1");
  });
});

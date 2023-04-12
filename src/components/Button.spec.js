import React from "react";
import Button from "./Button";
import { render, screen, fireEvent } from "test-utils";

test("renders a text", () => {
  render(<Button>Click here</Button>);
  expect(screen.getByText("Click here")).toBeInTheDocument();
});

test("trigger event on click", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick} />);
  fireEvent.click(screen.getByRole("button"));
  expect(handleClick).toBeCalled();
});

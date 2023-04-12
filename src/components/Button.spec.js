import React from "react";
import Button from "./Button";
import { render, screen } from "test-utils";

test("renders a text", () => {
  render(<Button>Click here</Button>);
  expect(screen.getByText("Click here")).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

test("renders Hero with children", () => {
  render(
    <Hero>
      <p>Lucas Alves</p>
    </Hero>
  );

  expect(screen.getByText(/Lucas Alves/)).toBeInTheDocument();
});

test("renders image background", () => {
  const image = "http://test/image.jpg";
  render(<Hero image={image} />);

  expect(screen.getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});

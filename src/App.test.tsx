import { render, screen } from "@testing-library/react";
import { Repositories } from "./pages/Repositories";

test("App title", () => {
  render(<Repositories />);
  const element = screen.getByText("wiven's repositories");
  expect(element).toBeInTheDocument();
});

test("Combobox", () => {
  render(<Repositories />);
  const combobox = screen.getByRole("combobox");
  expect(combobox).toBeInTheDocument();
});

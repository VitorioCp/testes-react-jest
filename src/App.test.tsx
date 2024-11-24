import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

const sum = (x: number, y: number) => {
  return x + y;
};

describe("App Component", () => {
  it("should sum correctly", () => {
    expect(sum(4, 4)).toBe(8);
  });

  it("should render App with hello message", () => {
    render(<App />);

    screen.findByText("Olá mundo");
  });

  it("mude o nome", () => {
    render(<App />);

    screen.findByText("Vitorio");
    const btn = screen.getByText(/mudar msg/i);
    fireEvent.click(btn);

    screen.getByText(/Correa/i);

    screen.queryByText("Vitorio")
  });


});

export default {};

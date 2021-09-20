import { render, screen } from "@testing-library/react";
import Bill from "../bill"

test("Render bill component",
  () => {
    render(<Bill />);
    const billElement = screen.getByTestId("bill");
    expect(billElement).toBeInTheDocument();
  });
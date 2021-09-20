import { render, screen } from "@testing-library/react";
import User from "../user"

test("Render user component",
  () => {
    render(<User />);
    const billElement = screen.getByTestId("user");
    expect(billElement).toBeInTheDocument();
  });
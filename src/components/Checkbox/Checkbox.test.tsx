import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from ".";

const mockFunction = jest.fn();

describe("#Checkbox", () => {
  it("should render checkbox correctly", () => {
    render(<Checkbox onChange={mockFunction} checked />);

    const checkboxElement = screen.getByTestId("checkbox");

    expect(checkboxElement).toBeInTheDocument();
  });

  it("should toggle checked status when clicked", () => {
    render(<Checkbox onChange={mockFunction} checked />);

    const checkboxElement = screen.getByTestId("checkbox");

    fireEvent.click(checkboxElement);

    expect(mockFunction).toBeCalledTimes(1);
  });
});

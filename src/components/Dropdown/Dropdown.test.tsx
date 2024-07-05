import { fireEvent, render, screen } from "@testing-library/react";
import Dropdown from ".";
import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";

const mockOnClick = jest.fn();
const mockToggleOpenStatus = jest.fn();

describe("#Dropdown", () => {
  it("should render dropdown correctly", () => {
    render(
      <Dropdown
        label="Categorias"
        options={["test1", "test2"]}
        onClickOption={mockOnClick}
        isOpen={false}
        toggleOpenStatus={mockToggleOpenStatus}
        icon={faHeadphonesSimple}
      />
    );

    const dropdownElement = screen.getByTestId("dropdown");

    expect(dropdownElement).toBeVisible();
  });

  it("should open the popup when clicked", () => {
    render(
      <Dropdown
        label="Categorias"
        options={["test1", "test2"]}
        onClickOption={mockOnClick}
        isOpen={false}
        toggleOpenStatus={mockToggleOpenStatus}
        icon={faHeadphonesSimple}
      />
    );

    const dropdownElement = screen.getByTestId("dropdown");

    fireEvent.click(dropdownElement);

    expect(mockToggleOpenStatus).toBeCalledTimes(1);
  });

  it("should call onClick when clicked on the option and close the popup", () => {
    render(
      <Dropdown
        label="Categorias"
        options={["test1", "test2"]}
        onClickOption={mockOnClick}
        isOpen={false}
        toggleOpenStatus={mockToggleOpenStatus}
        icon={faHeadphonesSimple}
      />
    );

    const dropdownElement = screen.getByTestId("dropdown");

    fireEvent.click(dropdownElement);

    const optionElement = screen.getByText("test1");

    fireEvent.click(optionElement);

    expect(mockToggleOpenStatus).toBeCalledTimes(1);
    expect(mockOnClick).toBeCalledTimes(1);
  });
});

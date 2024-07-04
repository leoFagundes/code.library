import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from ".";
import { MemoryRouter } from "react-router-dom";
import { useScreenWidth } from "src/Hooks/useScreenWidth";

jest.mock("src/Hooks/useScreenWidth");

describe("#Nav", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render nav correctly", () => {
    (useScreenWidth as jest.Mock).mockReturnValue({
      isSmallScreen: false,
    });

    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const navElement = screen.getByText("Code.Library");

    expect(navElement).toBeVisible();
  });

  it("should show and toggle test menu hamburguer when is screen is mobile", () => {
    (useScreenWidth as jest.Mock).mockReturnValue({
      isSmallScreen: true,
    });

    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const menuElement = screen.getByTestId("hamburguer-menu");
    const navElement = screen.getByTestId("nav-bar");

    fireEvent.click(menuElement);

    expect(navElement).toHaveClass("is-open");

    fireEvent.click(menuElement);

    expect(navElement).not.toHaveClass("is-open");
    expect(navElement).toHaveClass("is-close");
  });
});

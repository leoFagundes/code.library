import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from ".";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../Hooks/useScreenWidth", () => ({
  useScreenWidth: () => ({
    isSmallScreen: false,
  }),
}));

describe("#Nav", () => {
  it("should render nav correctly", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const navElement = screen.getByText("Code.Library");

    expect(navElement).toBeVisible();
  });
});

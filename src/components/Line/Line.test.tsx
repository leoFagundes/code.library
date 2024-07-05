import { render, screen } from "@testing-library/react";
import Line from ".";

describe("#Line", () => {
  it("should render line correctly", () => {
    render(<Line />);

    const lineElement = screen.getByTestId("lineElement");

    expect(lineElement).toBeVisible();
  });

  it("should use style props correctly", () => {
    render(
      <Line
        color="green"
        margintop="10px"
        marginbottom="10px"
        width="100px"
        absolute="true"
        top="10px"
        bottom="10px"
        right="10px"
        left="10px"
      />
    );

    const lineElement = screen.getByTestId("lineElement");

    expect(lineElement).toHaveStyle("background-color: green");
    expect(lineElement).toHaveStyle("margin-top: 10px");
    expect(lineElement).toHaveStyle("margin-bottom: 10px");
    expect(lineElement).toHaveStyle("width: 100px");
    expect(lineElement).toHaveStyle("top: 10px");
    expect(lineElement).toHaveStyle("bottom: 10px");
    expect(lineElement).toHaveStyle("right: 10px");
    expect(lineElement).toHaveStyle("left: 10px");
    expect(lineElement).toHaveStyle("position: absolute");
  });
});

import { render, screen } from "@testing-library/react";

import Video from ".";
import { MediaDataType } from "src/types/types";

const testData: MediaDataType[] = [
  { fileName: "lofi1", title: "-", category: "Morning", type: "video" },
  { fileName: "lofi2", title: "-", category: "Early Morning", type: "video" },
];

describe("#Video", () => {
  it("should render video correctly", () => {
    render(<Video data={testData} />);

    const element = screen.getByTestId("video");

    expect(element).toBeInTheDocument();
  });
});

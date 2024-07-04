import { fireEvent, render, screen } from "@testing-library/react";
import Audio from ".";
import { MediaDataType } from "src/Types/types";
import { useScreenWidth } from "src/Hooks/useScreenWidth";
import { useAudioContext } from "src/Contexts/AudioContext";

jest.mock("src/Hooks/useScreenWidth");
jest.mock("src/Contexts/AudioContext");

const mockUseScreenWidth = useScreenWidth as jest.MockedFunction<
  typeof useScreenWidth
>;
const mockUseAudioContext = useAudioContext as jest.MockedFunction<
  typeof useAudioContext
>;

const testData: MediaDataType[] = [
  {
    fileName: "audio.mp3",
    title: "Sample Audio",
    category: "Music",
    type: "audio",
  },
  {
    fileName: "lofiAudio.mp3",
    title: "Lofi Audio",
    category: "Test",
    type: "audio",
  },
];

const setupMocks = () => {
  mockUseScreenWidth.mockReturnValue({
    screenWidth: 1200,
    isSmallScreen: false,
  });

  mockUseAudioContext.mockReturnValue({
    isPlaying: false,
    isGrayScaleWhenPaused: false,
    isControlsVisible: true,
    setIsPlaying: jest.fn(),
    setIsGrayScaleWhenPaused: jest.fn(),
    setIsControlsVisible: jest.fn(),
    currentTrackIndex: 0,
    currentTime: 0,
    currentVolume: 0,
    setCurrentTrackIndex: jest.fn(),
    setCurrentTime: jest.fn(),
    setCurrentVolume: jest.fn(),
  });
};

describe("#Audio", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    setupMocks();
  });

  it("should render audio component correctly", () => {
    render(<Audio data={testData} />);

    const audioElement = screen.getByTestId("audio-element");

    expect(audioElement).toBeVisible();
  });

  it("should toggle music status when play button is clicked", () => {
    render(<Audio data={testData} />);

    const playButton = screen.getByTestId("play-button");

    fireEvent.click(playButton);

    expect(mockUseAudioContext().setIsPlaying).toHaveBeenCalledWith(
      !mockUseAudioContext().isPlaying
    );
  });

  it("should change the music when next and prev button are clicked", () => {
    render(<Audio data={testData} />);

    const nextButton = screen.getByTestId("next-button");
    const prevButton = screen.getByTestId("prev-button");

    fireEvent.click(nextButton);
    fireEvent.click(prevButton);

    expect(mockUseAudioContext().setCurrentTrackIndex).toHaveBeenCalledTimes(2);
  });

  it("should show controls when controls manage button is clicked", () => {
    render(<Audio data={testData} />);

    const manageControlsButton = screen.getByTestId("manage-controls-button");

    fireEvent.click(manageControlsButton);

    expect(mockUseAudioContext().setIsControlsVisible).toHaveBeenCalledTimes(1);
  });
});

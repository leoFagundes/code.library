import { render, screen, fireEvent } from "@testing-library/react";
import GlobalAudioPlayer from ".";
import { useAudioContext } from "src/contexts/AudioContext";
import { useScreenWidth } from "src/hooks/useScreenWidth";

jest.mock("src/contexts/AudioContext");
jest.mock("src/hooks/useScreenWidth");

const mockUseAudioContext = useAudioContext as jest.MockedFunction<
  typeof useAudioContext
>;
const mockUseScreenWidth = useScreenWidth as jest.MockedFunction<
  typeof useScreenWidth
>;

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

describe("#GlobalAudioPlayer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    setupMocks();
  });

  it("should render globalAudio correctly", () => {
    render(<GlobalAudioPlayer />);

    const element = screen.getByTestId("global-audio");

    expect(element).toBeInTheDocument();
  });
});

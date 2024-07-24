import { act, renderHook } from "@testing-library/react";
import { useDateTime } from "./useDateTime";
import { useScreenWidth } from "./useScreenWidth";

jest.useFakeTimers();
jest.mock("src/Hooks/useScreenWidth");

describe("#useDateTime", () => {
  it("should update dateTime every second", () => {
    const { result } = renderHook(() => useDateTime());

    const initialDateTime = result.current;

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const updatedDateTime = result.current;

    expect(updatedDateTime.seconds).not.toBe(initialDateTime.seconds);
  });

  it("should set correct time of day", () => {
    const { result } = renderHook(() => useDateTime());

    act(() => {
      jest.advanceTimersByTime(0);
    });

    const { hours, timeOfDay } = result.current;

    if (hours >= 0 && hours < 6) {
      expect(timeOfDay).toBe("Early Morning");
    } else if (hours >= 6 && hours < 12) {
      expect(timeOfDay).toBe("Morning");
    } else if (hours >= 12 && hours < 17) {
      expect(timeOfDay).toBe("Afternoon");
    } else {
      expect(timeOfDay).toBe("Night");
    }
  });

  afterEach(() => {
    jest.clearAllTimers();
  });
});

describe("useScreenWidth", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return the correct screen width", () => {
    (useScreenWidth as jest.Mock).mockImplementation(() => ({
      screenWidth: 1024,
      isSmallScreen: false,
    }));

    const { result } = renderHook(() => useScreenWidth());

    expect(result.current.screenWidth).toBe(1024);
    expect(result.current.isSmallScreen).toBe(false);
  });
});

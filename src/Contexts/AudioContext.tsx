import { ReactNode, createContext, useContext, useState } from "react";

type AudioContextProps = {
  isPlaying: boolean;
  isGrayScaleWhenPaused: boolean;
  isControlsVisible: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGrayScaleWhenPaused: React.Dispatch<React.SetStateAction<boolean>>;
  setIsControlsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  currentTrackIndex: number;
  currentTime: number;
  currentVolume: number;
  setCurrentTrackIndex: React.Dispatch<React.SetStateAction<number>>;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  setCurrentVolume: React.Dispatch<React.SetStateAction<number>>;
};

const AudioContext = createContext<AudioContextProps>({
  isPlaying: false,
  isGrayScaleWhenPaused: false,
  isControlsVisible: false,
  setIsPlaying: () => {},
  setIsGrayScaleWhenPaused: () => {},
  setIsControlsVisible: () => {},
  currentTrackIndex: 0,
  currentTime: 0,
  currentVolume: 0.1,
  setCurrentTrackIndex: () => {},
  setCurrentTime: () => {},
  setCurrentVolume: () => {},
});

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(0.1);
  const [isControlsVisible, setIsControlsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGrayScaleWhenPaused, setIsGrayScaleWhenPaused] = useState(() => {
    const audioConfigs = localStorage.getItem("audioConfigs");

    if (audioConfigs) {
      const { isGrayScaleWhenPaused: savedGrayScale } =
        JSON.parse(audioConfigs);
      return savedGrayScale;
    }

    return false;
  });

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        isGrayScaleWhenPaused,
        isControlsVisible,
        setIsPlaying,
        setIsGrayScaleWhenPaused,
        setIsControlsVisible,
        currentTrackIndex,
        currentTime,
        currentVolume,
        setCurrentTrackIndex,
        setCurrentTime,
        setCurrentVolume,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioContext = () => {
  return useContext(AudioContext);
};

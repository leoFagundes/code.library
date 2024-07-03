import { ReactNode, createContext, useContext, useState } from "react";

type AudioContextProps = {
  isPlaying: boolean;
  isGrayScaleWhenPaused: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGrayScaleWhenPaused: React.Dispatch<React.SetStateAction<boolean>>;
};

const AudioContext = createContext<AudioContextProps>({
  isPlaying: false,
  isGrayScaleWhenPaused: false,
  setIsPlaying: () => {},
  setIsGrayScaleWhenPaused: () => {},
});

export const AudioProvider = ({ children }: { children: ReactNode }) => {
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
        setIsPlaying,
        setIsGrayScaleWhenPaused,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioContext = () => {
  return useContext(AudioContext);
};

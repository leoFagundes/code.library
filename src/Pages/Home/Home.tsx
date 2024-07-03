import * as S from "./style";
import Audio from "../../Components/Audio";
import lofiAudioData from "../../Components/Audio/lofiAudioData";
import lofiVideoData from "../../Components/Video/lofiVideoData";
import { useState } from "react";
import Video from "../../Components/Video";
import { useScreenWidth } from "../../Hooks/useScreenWidth";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGrayScaleWhenPaused, setIsGrayScaleWhenPaused] = useState(() => {
    const audioConfigs = localStorage.getItem("audioConfigs");

    if (audioConfigs) {
      const { grayScale: savedGrayScale } = JSON.parse(audioConfigs);
      return savedGrayScale;
    }

    return false;
  });
  const { isSmallScreen } = useScreenWidth();

  return (
    <S.mainContainer
      grayScale={!isPlaying && isGrayScaleWhenPaused ? "true" : "false"}
    >
      {isSmallScreen ? (
        <h2>Code.Library</h2>
      ) : (
        <Video
          data={lofiVideoData}
          isPlaying={isPlaying}
          grayScale={isGrayScaleWhenPaused}
        />
      )}
      <Audio
        data={lofiAudioData}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        grayScale={isGrayScaleWhenPaused}
        setGrayScale={setIsGrayScaleWhenPaused}
      />
    </S.mainContainer>
  );
};

export default Home;

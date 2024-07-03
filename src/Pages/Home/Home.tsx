import * as S from "./style";
import Audio from "../../Components/Audio";
import lofiAudioData from "../../Components/Audio/lofiAudioData";
import lofiVideoData from "../../Components/Video/lofiVideoData";
import Video from "../../Components/Video";
import { useScreenWidth } from "../../Hooks/useScreenWidth";
import { useAudioContext } from "../../Contexts/AudiotContext";

const Home = () => {
  const { isPlaying, isGrayScaleWhenPaused } = useAudioContext();
  const { isSmallScreen } = useScreenWidth();

  return (
    <S.mainContainer
      grayScale={!isPlaying && isGrayScaleWhenPaused ? "true" : "false"}
    >
      {isSmallScreen ? <h2>Code.Library</h2> : <Video data={lofiVideoData} />}
      <Audio data={lofiAudioData} />
    </S.mainContainer>
  );
};

export default Home;

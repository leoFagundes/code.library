import * as S from "./style";
import Audio from "src/components/Audio";
import lofiAudioData from "src/data/lofiAudioData";
import lofiVideoData from "src/data/lofiVideoData";
import Video from "src/components/Video";
import { useScreenWidth } from "src/hooks/useScreenWidth";

const Home = () => {
  const { isSmallScreen } = useScreenWidth();

  return (
    <S.HomeContainer>
      {isSmallScreen ? <h2>Code.Library</h2> : <Video data={lofiVideoData} />}
      <Audio data={lofiAudioData} />
    </S.HomeContainer>
  );
};

export default Home;

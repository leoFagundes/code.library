import * as S from "./style";
import Audio from "src/Components/Audio";
import lofiAudioData from "src/Data/lofiAudioData";
import lofiVideoData from "src/Data/lofiVideoData";
import Video from "src/Components/Video";
import { useScreenWidth } from "src/Hooks/useScreenWidth";

const Home = () => {
  const { isSmallScreen } = useScreenWidth();

  return (
    <S.sectionHomeContainer>
      {isSmallScreen ? <h2>Code.Library</h2> : <Video data={lofiVideoData} />}
      <Audio data={lofiAudioData} />
    </S.sectionHomeContainer>
  );
};

export default Home;

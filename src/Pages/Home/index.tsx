import * as S from "./style";
import Audio from "../../Components/Audio";
import lofiAudioData from "../../Data/lofiAudioData";
import lofiVideoData from "../../Data/lofiVideoData";
import Video from "../../Components/Video";
import { useScreenWidth } from "../../Hooks/useScreenWidth";

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

import * as S from "./style";
import Audio from "../../Components/Audio";
import lofiAudioData from "../../Utils/lofiAudioData";
import { useEffect, useState } from "react";
import Video from "../../Components/Video";
import { useScreenWidth } from "../../Hooks/useScreenWidth";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    if (screenWidth < 600) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, [screenWidth]);

  return (
    <S.mainContainer>
      {isSmallScreen ? <h2>Library.Code</h2> : <Video isPlaying={isPlaying} />}
      {/**<img src="assets/images/mainProgrammerImg.png" alt="programmerImage" /> */}
      <Audio
        data={lofiAudioData}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </S.mainContainer>
  );
};

export default Home;

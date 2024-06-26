import { useEffect, useState } from "react";
import * as S from "./style";
import Audio from "../Components/Audio";

const Home = () => {
  const [mp3FileNames, setMp3FileNames] = useState([]);

  return (
    <S.mainContainer>
      <img src="assets/images/mainProgrammerImg.png" alt="programmerImage" />
      <Audio />
    </S.mainContainer>
  );
};

export default Home;

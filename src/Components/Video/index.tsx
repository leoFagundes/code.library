import { useEffect, useState } from "react";
import * as S from "./style";
import ReactPlayer from "react-player";

type VideoProps = {
  isPlaying: boolean;
  grayScale?: boolean;
};

const Video = ({ isPlaying, grayScale = true }: VideoProps) => {
  const [lofiVideoName, setLofiVideoName] = useState("");
  const date = new Date();
  const hours = date.getHours();

  useEffect(() => {
    if (hours > 0 && hours <= 6) {
      setLofiVideoName("lofi2");
    } else if (hours > 6 && hours <= 12) {
      setLofiVideoName("lofi1");
    } else if (hours > 12 && hours <= 18) {
      setLofiVideoName("lofi3");
    } else {
      setLofiVideoName("lofi4");
    }
  }, []);

  console.log(hours);

  return (
    <S.VideoContainer
      className={grayScale ? (!isPlaying ? "isPaused" : undefined) : undefined}
    >
      <ReactPlayer
        url={`assets/videos/${lofiVideoName}.mp4`}
        controls={false}
        muted
        playing={isPlaying}
        loop
        width="500px"
        height="auto"
      />
    </S.VideoContainer>
  );
};

export default Video;

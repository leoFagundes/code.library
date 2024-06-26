import * as S from "./style";
import ReactPlayer from "react-player";

type VideoProps = {
  isPlaying: boolean;
};

const Video = ({ isPlaying }: VideoProps) => {
  return (
    <S.VideoContainer>
      <ReactPlayer
        url="assets/videos/lofiVideo.mp4"
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

import * as S from "./style";
import ReactPlayer from "react-player";

type VideoProps = {
  isPlaying: boolean;
  grayScale?: boolean;
};

const Video = ({ isPlaying, grayScale = true }: VideoProps) => {
  return (
    <S.VideoContainer
      className={grayScale ? (!isPlaying ? "isPaused" : undefined) : undefined}
    >
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

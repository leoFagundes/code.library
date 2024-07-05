import { useEffect, useState } from "react";
import * as S from "./style";
import ReactPlayer from "react-player";
import { MediaDataType } from "src/types/types";
import { useDateTime } from "src/hooks/useDateTime";
import { useAudioContext } from "src/contexts/AudioContext";

type VideoProps = {
  data: MediaDataType[];
};

const Video = ({ data }: VideoProps) => {
  const { isPlaying, isGrayScaleWhenPaused } = useAudioContext();
  const [lofiVideoName, setLofiVideoName] = useState("");
  const [playingVideo, setPlayingVideo] = useState(isPlaying);
  const { timeOfDay } = useDateTime();

  useEffect(() => {
    const videoData = data.find((item) => item.category === timeOfDay);
    if (videoData) {
      setLofiVideoName(videoData.fileName);
    } else {
      setLofiVideoName("");
    }
  }, [timeOfDay, data]);

  useEffect(() => {
    setTimeout(() => {
      setPlayingVideo(isPlaying);
    }, 150);
  }, [isPlaying]);

  return (
    <S.VideoContainer
      className={
        isGrayScaleWhenPaused
          ? !isPlaying
            ? "isPaused"
            : undefined
          : undefined
      }
    >
      <ReactPlayer
        data-testid={"video"}
        url={`assets/videos/${lofiVideoName}.mp4`}
        controls={false}
        muted
        playing={playingVideo}
        loop
        width="500px"
        height="auto"
      />
    </S.VideoContainer>
  );
};

export default Video;

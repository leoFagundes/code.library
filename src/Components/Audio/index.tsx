import { useEffect, useRef, useState } from "react";
import * as S from "./style";
import ReactAudioPlayer from "react-audio-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForwardStep,
  faBackwardStep,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { DataType } from "../../Types/types";

type AudioProps = {
  data: DataType[];
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

const Audio = ({ data, isPlaying, setIsPlaying }: AudioProps) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(0.1);
  const [isControlsVisible, setIsControlsVisible] = useState(true);
  const [isControlsManageAlreadyClicked, setIsControlsManageAlreadyClicked] =
    useState(false);
  const audioRef = useRef<ReactAudioPlayer>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.setItem(
        "audioState",
        JSON.stringify({ currentTrackIndex, currentTime })
      );
    }, 900);

    return () => clearInterval(interval);
  }, [currentTrackIndex, currentTime]);

  useEffect(() => {
    const savedState = localStorage.getItem("audioState");
    if (savedState) {
      const { currentTrackIndex: savedIndex, currentTime: savedTime } =
        JSON.parse(savedState);
      setCurrentTrackIndex(savedIndex);
      setCurrentTime(savedTime);
    }

    setStartTimeFromLocalStorage();
  }, []);

  const setStartTimeFromLocalStorage = () => {
    const savedState = localStorage.getItem("audioState");
    if (savedState) {
      const { currentTime: savedTime } = JSON.parse(savedState);
      setCurrentTime(savedTime);
      if (audioRef.current && audioRef.current.audioEl.current) {
        audioRef.current.audioEl.current.currentTime = savedTime;
      }
    }
  };

  const togglePlay = () => {
    if (audioRef.current && audioRef.current.audioEl) {
      const audioElement = audioRef.current.audioEl.current;
      if (isPlaying) {
        if (audioElement) audioElement.pause();
      } else {
        if (audioElement) audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % data.length);
    setIsPlaying(false);
  };

  const playPreviousTrack = () => {
    setCurrentTrackIndex(
      (prevIndex) => (prevIndex - 1 + data.length) % data.length
    );
    setIsPlaying(false);
  };

  const onEnded = () => {
    playNextTrack();
  };

  const handleListen = (currentTime: number) => {
    setCurrentTime(currentTime);
  };

  const handleVolume = () => {
    if (audioRef.current && audioRef.current.audioEl.current) {
      setCurrentVolume(audioRef.current.audioEl.current.volume);
    }
  };

  const handleControlManage = () => {
    setIsControlsManageAlreadyClicked(true);
    setIsControlsVisible(!isControlsVisible);
  };

  return (
    <S.AudioContainer
      className={
        isControlsManageAlreadyClicked
          ? isControlsVisible
            ? "height-controls-visible"
            : "height-controls-invisible"
          : undefined
      }
    >
      <div className="display-buttons">
        <button className="btn" onClick={playPreviousTrack}>
          <FontAwesomeIcon size="sm" color="white" icon={faBackwardStep} />
        </button>

        <div className="play-btn-container">
          <div className={`spinner ${!isPlaying && "spinner-hidden"}`} />
          <button className="btn play-btn" onClick={togglePlay}>
            {isPlaying ? (
              <FontAwesomeIcon size="lg" color="white" icon={faPause} />
            ) : (
              <FontAwesomeIcon size="lg" color="white" icon={faPlay} />
            )}
          </button>
        </div>

        <button className="btn" onClick={playNextTrack}>
          <FontAwesomeIcon size="sm" color="white" icon={faForwardStep} />
        </button>
      </div>
      <div
        className={`audio-container ${
          isControlsManageAlreadyClicked
            ? isControlsVisible
              ? "controls-down"
              : "controls-up"
            : undefined
        }`}
      >
        <ReactAudioPlayer
          ref={audioRef}
          src={`assets/music/${data[currentTrackIndex].fileName}`}
          volume={currentVolume}
          controls
          loop={false}
          autoPlay
          onEnded={onEnded}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          listenInterval={1000}
          onListen={handleListen}
          onVolumeChanged={handleVolume}
        />
      </div>
      <p className="current-track">{data[currentTrackIndex].name}</p>
      <FontAwesomeIcon
        className={`controls-manage-icon ${
          isControlsManageAlreadyClicked
            ? isControlsVisible
              ? "controls-visible"
              : "controls-invisible"
            : undefined
        }`}
        size="lg"
        color="white"
        icon={faCaretUp}
        onClick={handleControlManage}
      />
    </S.AudioContainer>
  );
};

export default Audio;

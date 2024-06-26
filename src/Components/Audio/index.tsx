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
import { useScreenWidth } from "../../Hooks/useScreenWidth";

type AudioProps = {
  data: DataType[];
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  grayScale?: boolean;
  setGrayScale?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Audio = ({
  data,
  isPlaying,
  setIsPlaying,
  grayScale = false,
  setGrayScale = () => {},
}: AudioProps) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(0.1);
  const [isControlsVisible, setIsControlsVisible] = useState(false);
  const [isControlsManageAlreadyClicked, setIsControlsManageAlreadyClicked] =
    useState(false);
  const audioRef = useRef<ReactAudioPlayer>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.setItem(
        "audioConfigs",
        JSON.stringify({ currentTrackIndex, currentTime, grayScale })
      );
    }, 900);

    return () => clearInterval(interval);
  }, [currentTrackIndex, currentTime, grayScale]);

  useEffect(() => {
    const audioConfigs = localStorage.getItem("audioConfigs");
    if (audioConfigs) {
      const {
        currentTrackIndex: savedIndex,
        currentTime: savedTime,
        grayScale: savedGrayScale,
      } = JSON.parse(audioConfigs);
      setCurrentTrackIndex(savedIndex);
      setCurrentTime(savedTime);
      setGrayScale(savedGrayScale);
    }

    setStartTimeFromLocalStorage();
  }, []);

  const setStartTimeFromLocalStorage = () => {
    const audioConfigs = localStorage.getItem("audioConfigs");
    if (audioConfigs) {
      const { currentTime: savedTime } = JSON.parse(audioConfigs);
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

  const handleCheckedgrayScale = () => {
    setGrayScale(!grayScale);
  };

  const { isSmallScreen } = useScreenWidth();

  return (
    <S.AudioContainer
      isSmallScreen={isSmallScreen}
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
              <FontAwesomeIcon
                style={{ transform: "translateX(1px)" }}
                size="lg"
                color="white"
                icon={faPlay}
              />
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

        <div className="checkbox-caption">
          <input
            type="checkbox"
            onChange={handleCheckedgrayScale}
            checked={grayScale}
            name="checkBoxGrayScale"
            id="checkBoxGrayScale"
          />
          <label className="checkbox-label" htmlFor="checkBoxGrayScale">
            Gray when paused
          </label>
        </div>
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

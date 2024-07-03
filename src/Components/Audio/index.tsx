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
import { MediaDataType } from "../../Types/types";
import { useScreenWidth } from "../../Hooks/useScreenWidth";
import Checkbox from "../Checkbox";
import { useAudioContext } from "../../Contexts/AudiotContext";

type AudioProps = {
  data: MediaDataType[];
  controls?: boolean;
};

const Audio = ({ data, controls = true }: AudioProps) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(0.1);
  const [isControlsVisible, setIsControlsVisible] = useState(false);
  const [isControlsManageAlreadyClicked, setIsControlsManageAlreadyClicked] =
    useState(false);
  const audioRef = useRef<ReactAudioPlayer>(null);
  const { isSmallScreen } = useScreenWidth();
  const {
    isPlaying,
    isGrayScaleWhenPaused,
    setIsPlaying,
    setIsGrayScaleWhenPaused,
  } = useAudioContext();

  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.setItem(
        "audioConfigs",
        JSON.stringify({
          currentTrackIndex,
          currentTime,
          currentVolume,
          isGrayScaleWhenPaused,
          isPlaying,
        })
      );
    }, 900);

    return () => clearInterval(interval);
  }, [
    currentTrackIndex,
    currentTime,
    currentVolume,
    isGrayScaleWhenPaused,
    isPlaying,
  ]);

  useEffect(() => {
    const audioConfigs = localStorage.getItem("audioConfigs");
    if (audioConfigs) {
      const {
        currentTrackIndex: savedIndex,
        currentTime: savedTime,
        currentVolume: savedCurrentVolume,
        isGrayScaleWhenPaused: savedGrayScale,
      } = JSON.parse(audioConfigs);
      setCurrentTrackIndex(savedIndex);
      setCurrentTime(savedTime);
      setIsGrayScaleWhenPaused(savedGrayScale);
      setIsPlaying(false);
      setCurrentVolume(savedCurrentVolume);
    }

    setStartTimeFromLocalStorage();
  }, [setIsGrayScaleWhenPaused, setIsPlaying]);

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
    console.log(isPlaying);
  };

  const playPreviousTrack = () => {
    setCurrentTrackIndex(
      (prevIndex) => (prevIndex - 1 + data.length) % data.length
    );
  };

  const onEnded = () => {
    playNextTrack();
    setIsPlaying(true);
    console.log(isPlaying);
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
    setIsGrayScaleWhenPaused(!isGrayScaleWhenPaused);
  };

  return (
    <S.AudioContainer
      issmallscreen={isSmallScreen ? "true" : "false"}
      className={`${
        isControlsManageAlreadyClicked
          ? isControlsVisible
            ? "height-controls-visible"
            : "height-controls-invisible"
          : undefined
      } ${
        isGrayScaleWhenPaused
          ? !isPlaying
            ? "isPaused"
            : undefined
          : undefined
      }`}
    >
      <div className="display-buttons">
        <button className="btn prev-btn" onClick={playPreviousTrack}>
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

        <button className="btn prev-btn" onClick={playNextTrack}>
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
          autoPlay={isPlaying}
          loop={false}
          onEnded={onEnded}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          listenInterval={1000}
          onListen={handleListen}
          onVolumeChanged={handleVolume}
        />

        <div className="checkbox-caption">
          <Checkbox
            onChange={handleCheckedgrayScale}
            checked={isGrayScaleWhenPaused}
          />
          <label className="checkbox-label" htmlFor="checkBoxGrayScale">
            Gray when paused
          </label>
        </div>
      </div>
      <p className="current-track">{data[currentTrackIndex].title}</p>
      {controls && (
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
      )}
    </S.AudioContainer>
  );
};

export default Audio;

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
  faIcons,
} from "@fortawesome/free-solid-svg-icons";
import { MediaDataType } from "src/Types/types";
import { useScreenWidth } from "src/Hooks/useScreenWidth";
import Checkbox from "../Checkbox";
import { useAudioContext } from "src/Contexts/AudioContext";
import Teste from "../Dropdown";
import Dropdown from "../Dropdown";

type AudioProps = {
  data: MediaDataType[];
  controls?: boolean;
};

const Audio = ({ data, controls = true }: AudioProps) => {
  const [filteredCategoryOption, setFilteredCategoryOption] = useState("Todas");
  const [categoryOptions, setCategoryOptions] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isControlsManageAlreadyClicked, setIsControlsManageAlreadyClicked] =
    useState(false);
  const audioRef = useRef<ReactAudioPlayer>(null);
  const { isSmallScreen } = useScreenWidth();
  const {
    isPlaying,
    isGrayScaleWhenPaused,
    isControlsVisible,
    setIsPlaying,
    setIsGrayScaleWhenPaused,
    setIsControlsVisible,
    currentTrackIndex,
    currentTime,
    currentVolume,
    setCurrentTrackIndex,
    setCurrentTime,
    setCurrentVolume,
  } = useAudioContext();

  useEffect(() => {
    const categories = data.map((item) => item.category);
    const uniqueCategories = Array.from(new Set(categories));
    setCategoryOptions(["Todas", ...uniqueCategories]);
  }, [data]);

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
        isPlaying: savedIsPlaying,
      } = JSON.parse(audioConfigs);
      setCurrentTrackIndex(savedIndex);
      setCurrentTime(savedTime);
      setIsGrayScaleWhenPaused(savedGrayScale);
      setIsPlaying(savedIsPlaying);
      setCurrentVolume(savedCurrentVolume);
    }

    setStartTimeFromLocalStorage();
  }, [
    setIsPlaying,
    setIsGrayScaleWhenPaused,
    setCurrentTrackIndex,
    setCurrentTime,
    setCurrentVolume,
  ]);

  const filteredData = () => {
    if (filteredCategoryOption && filteredCategoryOption !== "Todas") {
      const newData = data.filter(
        (audioItem) => audioItem.category === filteredCategoryOption
      );
      if (newData) return newData;
    }

    return data;
  };

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
    setCurrentTrackIndex(
      (prevIndex) => (prevIndex + 1) % filteredData().length
    );
  };

  const playPreviousTrack = () => {
    setCurrentTrackIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredData().length) % filteredData().length
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

  const handleOptionClick = (option: string) => {
    setFilteredCategoryOption(option);
    setIsDropdownOpen(false);
    setCurrentTrackIndex(0);
  };

  return (
    <S.AudioContainer
      data-testid={"audio-element"}
      issmallscreen={isSmallScreen ? "true" : "false"}
      isControls={controls ? "true" : "false"}
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
        <button
          data-testid="prev-button"
          className="btn prev-btn"
          onClick={playPreviousTrack}
        >
          <FontAwesomeIcon size="sm" color="white" icon={faBackwardStep} />
        </button>

        <div className="play-btn-container">
          <div className={`spinner ${!isPlaying && "spinner-hidden"}`} />
          <button
            data-testid="play-button"
            className="btn play-btn"
            onClick={togglePlay}
          >
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

        <button
          data-testid="next-button"
          className="btn prev-btn"
          onClick={playNextTrack}
        >
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
          src={`assets/music/${filteredData()[currentTrackIndex].fileName}`}
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
      <p className="current-track">
        {filteredData()[currentTrackIndex].title} | Categoria:{" "}
        {filteredCategoryOption}
      </p>
      {controls && (
        <div className="controls-container">
          <Dropdown
            label="Categorias"
            options={categoryOptions}
            onClickOption={handleOptionClick}
            isOpen={isDropdownOpen}
            toggleOpenStatus={() => setIsDropdownOpen(!isDropdownOpen)}
            currentOption={filteredCategoryOption}
            size="2xs"
            icon={faIcons}
          />
          <FontAwesomeIcon
            data-testid="manage-controls-button"
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
        </div>
      )}
    </S.AudioContainer>
  );
};

export default Audio;

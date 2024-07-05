import lofiAudioData from "src/Data/lofiAudioData";
import Audio from "../Audio";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAudioContext } from "src/Contexts/AudioContext";
import { useScreenWidth } from "src/Hooks/useScreenWidth";

const GlobalAudioPlayer = () => {
  const [isGlobalAudioContainerOpen, setIsGlobalAudioContainerOpen] =
    useState(false);
  const [isAlreadyClicked, setIsAlreadyClicked] = useState(false);
  const { isControlsVisible, setIsControlsVisible } = useAudioContext();
  const { isSmallScreen } = useScreenWidth();
  const { isPlaying } = useAudioContext();

  const handleIconClick = () => {
    if (isControlsVisible) {
      setIsControlsVisible(false);
      setTimeout(() => {
        setIsGlobalAudioContainerOpen(!isGlobalAudioContainerOpen);
        setIsAlreadyClicked(true);
      }, 300);
    } else {
      setIsGlobalAudioContainerOpen(!isGlobalAudioContainerOpen);
      setIsAlreadyClicked(true);
    }
  };

  return (
    <S.GlobalAudioContainer
      isPlaying={isPlaying ? "true" : "false"}
      issmallscreen={isSmallScreen ? "true" : "false"}
      className={`${
        isGlobalAudioContainerOpen
          ? "is-global-audio-open"
          : isAlreadyClicked
          ? "is-global-audio-close"
          : ""
      }`}
    >
      <FontAwesomeIcon
        onClick={handleIconClick}
        className={`headphone-ico`}
        icon={faHeadphonesSimple}
        size="xl"
      />
      {isSmallScreen ? (
        <Audio data={lofiAudioData} controls={false} />
      ) : (
        <Audio data={lofiAudioData} />
      )}
    </S.GlobalAudioContainer>
  );
};

export default GlobalAudioPlayer;

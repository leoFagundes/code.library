import lofiAudioData from "src/data/lofiAudioData";
import Audio from "../Audio";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAudioContext } from "src/contexts/AudioContext";
import { useScreenWidth } from "src/hooks/useScreenWidth";

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
      data-testid="global-audio"
      $isPlaying={isPlaying}
      $isSmallScreen={isSmallScreen}
      className={`${
        isGlobalAudioContainerOpen
          ? "is-global-audio-open"
          : isAlreadyClicked
          ? "is-global-audio-close"
          : ""
      }`}
    >
      <FontAwesomeIcon
        data-testid="icon"
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

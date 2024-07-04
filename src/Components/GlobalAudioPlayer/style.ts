import styled from "styled-components";

export const GlobalAudioContainer = styled.div<{
  issmallscreen: "true" | "false";
  isPlaying: "true" | "false";
}>`
  --container-width: ${(props) =>
    props.issmallscreen === "true" ? "230px" : "330px"};

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
  overflow: hidden;
  background-color: ${({ theme }) => theme.primaryRadialGradientBackground};
  transform: translateX(var(--container-width));
  height: 30px;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  padding: 20px;
  bottom: 20px;
  right: 0;
  gap: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);

  .headphone-ico {
    transition: 0.5s;
    z-index: 3;

    filter: ${(props) =>
      props.isPlaying === "true"
        ? `drop-shadow(0 2px 10px ${props.theme.tertiaryColor}) saturate(105%) brightness(110%) contrast(105%)`
        : ""};

    &:hover {
      cursor: pointer;
    }
  }

  &.is-global-audio-open {
    animation: slideGlobalAudioLeft 1s ease-in-out forwards;
  }

  &.is-global-audio-close {
    animation: slideGlobalAudioeRight 1s ease-in-out forwards;
  }

  @keyframes slideGlobalAudioLeft {
    0% {
      height: 30px;
      transform: translateX(var(--container-width));
    }
    20% {
      height: 60px;
      transform: translateX(var(--container-width));
    }
    30% {
      transform: translateX(var(--container-width));
    }
    100% {
      height: auto;
      transform: translateX(0);
    }
  }

  @keyframes slideGlobalAudioeRight {
    0% {
      height: 60px;
      transform: translateX(0);
    }
    70% {
      transform: translateX(var(--container-width));
    }
    90% {
      height: 60px;
      transform: translateX(var(--container-width));
    }
    100% {
      height: 30px;
      transform: translateX(var(--container-width));
    }
  }
`;

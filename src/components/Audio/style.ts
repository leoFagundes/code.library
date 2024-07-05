import styled from "styled-components";

type AudioProps = {
  $isSmallScreen: boolean;
  $isControls: boolean;
};

export const AudioContainer = styled.div<AudioProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  padding: 10px 5px;
  border-radius: 5px;
  box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.25);
  width: ${(props) => (props.$isControls ? "300px" : "200px")};
  height: 40px;
  transition: 1s;
  ${(props) =>
    props.$isSmallScreen &&
    `
    filter: drop-shadow(0px 4px 100px ${props.theme.tertiaryColor});
  `}

  &.height-controls-visible {
    animation: heightDownLarge 0.2s ease-in-out forwards;
  }

  &.height-controls-invisible {
    animation: heightUpLarge 0.2s ease-in-out forwards;
  }

  p {
    font-size: 10px;
  }

  .current-track {
    position: absolute;
    bottom: -15px;
    left: 5px;
  }

  .controls-container {
    display: flex;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 5px;
    right: 10px;
    z-index: 2;

    .dropdown-select {
      display: flex;
      justify-content: center;
      border: none;
      padding: 2px;
      background: ${({ theme }) => theme.primaryRadialGradientBackground};
      color: ${({ theme }) => theme.textColor};

      option {
        font-size: 12px;
      }
    }

    .controls-manage-icon {
      transform: rotate(180deg);

      &.controls-visible {
        animation: rotateUp 0.3s ease-in-out forwards;
      }

      &.controls-invisible {
        animation: rotateDown 0.3s ease-in-out forwards;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }

  .display-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    z-index: 2;

    .play-btn-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .play-btn {
        position: relative;
        height: 40px;
        width: 40px;
      }

      .spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 42px;
        height: 42px;
        background: transparent;
        border: 2px solid rgba(0, 102, 255, 0.1);
        border-radius: 50%;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
        animation: spawn 1s ease-in-out forwards;

        &::before {
          content: "";
          position: absolute;
          top: -1px;
          left: -1px;
          width: 100%;
          height: 100%;
          border: 1px solid transparent;
          border-top: 1px solid ${({ theme }) => theme.tertiaryColor};
          border-right: 2px solid ${({ theme }) => theme.tertiaryColor};
          border-radius: 50%;
          animation: animateC 2s linear infinite;
        }
      }

      .spinner-hidden {
        animation: hidden 1s ease-in-out forwards;
      }
    }

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      width: 30px;
      background-color: rgba(6, 6, 6, 0.5);
      backdrop-filter: blur(150px);
      border: none;
      padding: 10px;
      border-radius: 50%;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .audio-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateY(-45px);
    gap: 5px;
    opacity: 0;

    .checkbox-caption {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;

      .checkbox-label {
        font-size: 12px;
      }

      input:hover,
      label:hover {
        cursor: pointer;
      }
    }

    &.controls-down {
      animation: scrollDown 0.3s ease-in-out forwards,
        spawnControls 0.3s ease-in-out forwards;
    }
    &.controls-up {
      animation: scrollUp 0.3s ease-in-out forwards,
        hiddenControls 0.3s ease-in-out forwards;
      pointer-events: none;
    }
    audio {
      height: 40px;
      scale: 0.9;
    }

    /* Estilo para os controles do player de áudio */
    audio::-webkit-media-controls-panel {
      background-color: ${({ theme }) => theme.mainWhite};
      color: ${({ theme }) => theme.textColor};
      border-radius: 5px;
      border: none;
      outline: none;
    }

    /* Estilizando os botões de controle */
    audio::-webkit-media-controls-play-button,
    audio::-webkit-media-controls-pause-button {
      display: none;
      background-color: transparent;
    }
    audio::-webkit-media-controls-timeline {
      background-color: transparent;
    }

    /* Estilizando o indicador de progresso */
    audio::-webkit-media-controls-current-time-display,
    audio::-webkit-media-controls-time-remaining-display {
      color: ${({ theme }) => theme.primaryColor};
      font-size: 14px;
    }
  }

  @keyframes spinning {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes rotateUp {
    from {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(0);
    }
  }

  @keyframes rotateDown {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(180deg);
    }
  }

  @keyframes scrollUp {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-45px);
    }
  }

  @keyframes scrollDown {
    0% {
      transform: translateY(-45px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes spawnControls {
    0% {
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes hiddenControls {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes spawn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes hidden {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes heightUpLarge {
    from {
      height: 105px;
    }
    to {
      height: 40px;
    }
  }

  @keyframes heightDownLarge {
    from {
      height: 40px;
    }
    to {
      height: 105px;
    }
  }

  @keyframes animateC {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }

    100% {
      transform: rotate(405deg);
    }
  }
`;

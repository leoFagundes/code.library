import styled from "styled-components";

export const AudioContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 5px;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 10px 5px;
  border-radius: 5px;
  box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.25);
  min-width: 300px;
  height: 88px;

  &.height-controls-visible {
    animation: heightDown 0.2s ease-in-out forwards;
  }

  &.height-controls-invisible {
    animation: heightUp 0.2s ease-in-out forwards;
  }

  p {
    font-size: 10px;
  }

  .current-track {
    position: absolute;
    bottom: -15px;
    left: 5px;
  }

  .controls-manage-icon {
    position: absolute;
    top: 5px;
    right: 10px;
    z-index: 2;

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

      .spinner {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        animation: spinning 1.7s linear infinite, colorChange 5s linear infinite,
          spawn 1s ease-in-out;
        background: linear-gradient(
          45deg,
          rgba(186, 66, 255, 1) 0%,
          rgba(0, 225, 255, 1) 100%
        );
        box-shadow: 0 0 10px rgba(186, 66, 255, 0.5),
          0 0 10px rgba(0, 225, 255, 0.5);
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
      background-color: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(150px);
      border: none;
      padding: 10px;
      border-radius: 50%;

      &:hover {
        cursor: pointer;
      }
    }

    .play-btn {
      position: relative;
      height: 40px;
      width: 40px;
    }
  }

  .audio-container {
    &.controls-down {
      animation: scrollDown 0.3s ease-in-out forwards,
        spawnControls 0.3s ease-in-out forwards;
    }
    &.controls-up {
      animation: scrollUp 0.3s ease-in-out forwards,
        hiddenControls 0.3s ease-in-out forwards;
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

  @keyframes heightUp {
    from {
      height: 88px;
    }
    to {
      height: 40px;
    }
  }

  @keyframes heightDown {
    from {
      height: 40px;
    }
    to {
      height: 88px;
    }
  }

  @keyframes colorChange {
    0% {
      box-shadow: 0 0 10px rgba(186, 66, 255, 0.5),
        0 0 10px rgba(0, 225, 255, 0.5);
    }
    50% {
      box-shadow: 0 0 10px rgba(0, 230, 150, 0.5),
        0 0 10px rgba(0, 200, 235, 0.5);
    }
    100% {
      box-shadow: 0 0 10px rgba(186, 66, 255, 0.5),
        0 0 10px rgba(0, 225, 255, 0.5);
    }
  }
`;

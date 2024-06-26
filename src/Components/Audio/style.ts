import styled from "styled-components";

const AudioContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 15px 5px;
  border-radius: 5px;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.25);

  p {
    font-size: 10px;
  }

  .display-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

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

  @keyframes spinning {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes spawn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes hidden {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
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

export default AudioContainer;

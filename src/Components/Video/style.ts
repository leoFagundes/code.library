import styled from "styled-components";

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 1s;

  &.isPaused {
    filter: brightness(90%);
  }

  video {
    border-radius: 20px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.6);
    animation: spawnVideo 1.5s ease-in-out forwards;
  }

  @keyframes spawnVideo {
    0% {
      opacity: 0;
      filter: saturate(110%) contrast(115%) blur(5px);
    }
    60% {
      filter: saturate(110%) contrast(115%) blur(4px);
    }
    100% {
      opacity: 1;
      filter: saturate(110%) contrast(115%) blur(0);
    }
  }
`;

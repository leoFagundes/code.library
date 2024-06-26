import styled from "styled-components";

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 1s;

  &.isPaused {
    filter: grayscale(60%) brightness(90%);
  }

  video {
    border-radius: 20px;
    filter: drop-shadow(0px 4px 250px ${({ theme }) => theme.tertiaryColor})
      saturate(110%) contrast(115%);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }
`;

import styled from "styled-components";

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  video {
    border-radius: 20px;
    filter: drop-shadow(0px 4px 250px ${({ theme }) => theme.tertiaryColor})
      saturate(110%) contrast(115%);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }
`;

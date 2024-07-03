import styled from "styled-components";

export const mainContainer = styled.main<{ grayScale: "true" | "false" }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
  height: 100vh;
  width: 100vw;
  padding-top: ${({ theme }) => theme.pageTopPadding};
  box-sizing: border-box;
  background: ${({ theme }) => theme.primaryRadialGradientBackground};

  animation: ${(props) =>
    props.grayScale === "true"
      ? "changeToGrayScale 1s ease-in-out forwards"
      : "changeToNormalScale 1s ease-in-out forwards"};

  @keyframes changeToGrayScale {
    0% {
      filter: saturate(105%) contrast(105%);
    }
    100% {
      filter: saturate(105%) contrast(105%) grayscale(50%);
    }
  }

  @keyframes changeToNormalScale {
    0% {
      filter: saturate(105%) contrast(105%) grayscale(50%);
    }
    100% {
      filter: saturate(105%) contrast(105%);
    }
  }

  /* img {
    width: 25rem;
    max-width: 70%;
    min-width: 340px;
    filter: drop-shadow(0px 4px 250px ${({ theme }) => theme.tertiaryColor})
      brightness(95%) contrast(105%) saturate(115%);
  } */
`;

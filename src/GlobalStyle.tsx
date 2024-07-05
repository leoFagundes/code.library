import { createGlobalStyle } from "styled-components";

type GlobalStyleProps = {
  $grayScale: boolean;
  $isSmallScreen: boolean;
};

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  /* @import url('https://fonts.googleapis.com/css2?family=Encode+Sans+Semi+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Encode+Sans+Semi+Condensed:wght@100;200;300;400;500;600;700;800;900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'); */

  *::selection {
    color: ${({ theme }) => theme.mainWhite};
    background-color: rgba(48, 94, 131, 0.5);
    //text-decoration: underline;
  }

  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textColor};
  -webkit-tap-highlight-color: transparent;

  main {
    overflow-x: hidden;
    background: ${(props) =>
      props.$isSmallScreen
        ? props.theme.primaryColor
        : props.theme.primaryRadialGradientBackground};
    animation: ${(props) =>
      props.$grayScale
        ? "changeToGrayScale 1s ease-in-out forwards"
        : "changeToNormalScale 1s ease-in-out forwards"};
  }
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Encode Sans Semi Condensed", sans-serif;
  padding: 0;
  margin: 0;
}

p, label, span, li {
  font-family: "Space Mono", monospace;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
}

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
`;

export default GlobalStyle;

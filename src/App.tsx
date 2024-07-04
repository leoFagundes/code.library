import Router from "./Routes/routes";
import { ThemeProvider } from "styled-components";
import theme from "./Theme/theme";
import GlobalStyle from "./GlobalStyle";
import { useAudioContext } from "./Contexts/AudioContext";
import { useScreenWidth } from "./Hooks/useScreenWidth";

const App = () => {
  const { isPlaying, isGrayScaleWhenPaused } = useAudioContext();
  const { isSmallScreen } = useScreenWidth();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle
        isSmallScreen={isSmallScreen ? "true" : "false"}
        grayScale={!isPlaying && isGrayScaleWhenPaused ? "true" : "false"}
      />
      <Router />
    </ThemeProvider>
  );
};

export default App;

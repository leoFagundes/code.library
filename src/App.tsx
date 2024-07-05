import Router from "./routes/routes";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import GlobalStyle from "./GlobalStyle";
import { useAudioContext } from "./contexts/AudioContext";
import { useScreenWidth } from "./hooks/useScreenWidth";

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

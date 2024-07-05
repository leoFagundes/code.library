import Router from "./routes/routes";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import GlobalStyle from "./GlobalStyle";
import { useScreenWidth } from "./hooks/useScreenWidth";
import { useAudioContext } from "./contexts/AudioContext";

const App = () => {
  const { isPlaying, isGrayScaleWhenPaused } = useAudioContext();
  const { isSmallScreen } = useScreenWidth();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle
        $isSmallScreen={isSmallScreen}
        $grayScale={!isPlaying && isGrayScaleWhenPaused}
      />
      <Router />
    </ThemeProvider>
  );
};

export default App;

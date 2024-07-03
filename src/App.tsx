import Router from "./Routes/routes";
import { ThemeProvider } from "styled-components";
import theme from "./Theme/theme";
import GlobalStyle from "./GlobalStyle";
import { AudioProvider } from "./Contexts/AudiotContext";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AudioProvider>
      <Router />
    </AudioProvider>
  </ThemeProvider>
);

export default App;

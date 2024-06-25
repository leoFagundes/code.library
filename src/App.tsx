import Router from "./Routes/routes";
import { ThemeProvider } from "styled-components";
import theme from "./Theme/theme";
import GlobalStyle from "./GlobalStyle";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);

export default App;

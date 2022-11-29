import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ReposProvider } from "./context/ReposContext";
import { Router } from "./router/router";
import { GlobalStyle } from "./styles/Global";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ReposProvider>
          <Router />
        </ReposProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

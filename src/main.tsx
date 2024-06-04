import React from "react";
import ReactDOM from "react-dom/client";
import createTheme from "@mui/material/styles/createTheme";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from "./app/network";

import App from "./app/App.tsx";
import ModalProvider from "./app/contexts/ModalContext.tsx";

import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const rootElement = document.getElementById("root")!;

const cache = createCache({
  key: "css",
  prepend: true,
});

const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiDialog: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <ModalProvider>
              <CssBaseline />
              <App />
            </ModalProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  </React.StrictMode>
);

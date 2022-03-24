import "../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout || ((page) => page);

  dynamic(
    () => {
      return import("bootstrap/dist/js/bootstrap");
    },
    { ssr: false }
  );

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <div className="mui-root">
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

import "../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import React from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  dynamic(
    () => {
      return import("bootstrap/dist/js/bootstrap");
    },
    { ssr: false }
  );

  return (
    <CacheProvider value={emotionCache}>
      <Layout>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </CacheProvider>
  );
}

export default MyApp;

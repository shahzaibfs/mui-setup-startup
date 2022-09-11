import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import '../styles/globals.css'
import createEmotionCache from "../utils/emotion-cache"
import customTheme from '../utils/mui-theme';

const clientSideEmotionCache = createEmotionCache();


function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1,width=device-width' />
      </Head>
      <CssBaseline />
      <ThemeProvider theme={customTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )

}

export default MyApp

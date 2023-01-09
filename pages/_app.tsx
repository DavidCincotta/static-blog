import React, {Component, useReducer,useState,createContext,useEffect,useCallback} from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { DarkTheme } from '../src/DarkTheme';
import { LightTheme } from '../src/LightTheme';
import createEmotionCache from '../src/createEmotionCache';
import reducer, {initialState, ThemeProps, ThemeInitializer} from '../src/reducer'
import '../styles/index.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export const ThemeContext = createContext<ThemeProps>(ThemeInitializer);
export default function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	const [state, dispatch] = useReducer(reducer, initialState);
	const { useLight } = state;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
	  <ThemeProvider theme={ useLight? LightTheme : DarkTheme }>
	  <ThemeContext.Provider value={{state,dispatch}}>
        <CssBaseline />
        <Component {...pageProps} />
		</ThemeContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

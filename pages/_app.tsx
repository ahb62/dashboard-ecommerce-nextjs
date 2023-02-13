
import type { AppProps } from 'next/app'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Head from 'next/head';
export default function App({ Component, pageProps }: AppProps) {
  return(

    <>
      <Head>
      <title>Dashboard - ahb62</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <CssBaseline />

    <Component {...pageProps} />{""}
  </>
  ) 
}

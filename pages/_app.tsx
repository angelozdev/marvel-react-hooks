import * as React from "react";

/* Next */
import Head from "next/head";
import type { AppProps } from "next/app";

/* Context */
import { DarkModeProvider } from "context";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <DarkModeProvider>
        <Component {...pageProps} />
      </DarkModeProvider>
    </React.Fragment>
  );
}

export default MyApp;

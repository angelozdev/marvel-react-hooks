import * as React from "react";

/* Next */
import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;

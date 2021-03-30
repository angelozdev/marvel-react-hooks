import * as React from "react";

/* Next */
import Head from "next/head";

/* Components */
import { Characters, Header } from "components";

/* Hooks */
import { darkModeContext } from "context";

function Home() {
  const { darkMode } = React.useContext(darkModeContext);

  React.useEffect(() => {
    console.log("RENDER");
  });

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Characters />
      </main>
    </div>
  );
}

export default Home;

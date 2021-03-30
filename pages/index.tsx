import * as React from "react";

/* Next */
import Head from "next/head";

/* Components */
import { Characters, Header } from "components";

/* Hooks */
import { useAxios } from "hooks";
import { darkModeContext } from "context";

function Home() {
  const { data, status } = useAxios({ url: "characters" });
  const { darkMode } = React.useContext(darkModeContext);

  React.useEffect(() => {
    console.log("RENDER");
  });

  if (status === "LOADING" || !data) {
    return <p>"Loading..."</p>;
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Characters characters={data?.results} />
      </main>
    </div>
  );
}

export default Home;

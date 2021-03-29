import * as React from "react";

/* Next */
import Head from "next/head";

/* Components */
import { Characters, Header } from "components";

/* Hooks */
import { useAxios } from "hooks";

export default function Home() {
  const { data, status } = useAxios({ url: "characters" });

  React.useEffect(() => {
    console.log("RENDER");
    console.log({ data });
  });

  if (status === "LOADING" || !data) {
    return "Loading...";
  }

  return (
    <div>
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

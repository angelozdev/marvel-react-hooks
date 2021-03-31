import * as React from "react";

/* Next */
import Head from "next/head";
import { GetStaticProps } from "next";

/* Components */
import { Characters, Header } from "components";

/* Hooks */
import { darkModeContext } from "context";

/* Utils */
import { getData } from "utils";

/* Types */
import ICharacter from "types/character";

/* Local types */
interface Props {
  characters: ICharacter[];
}

function Home({ characters }: Props) {
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
        <Characters characters={characters} />
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return getData({ url: "characters", params: { offset: 0, limit: 5 } })
    .then(({ results }) => {
      return {
        props: {
          characters: results,
        },
      };
    })
    .catch(() => {
      return {
        props: {
          characters: [],
        },
      };
    });
};

export default Home;

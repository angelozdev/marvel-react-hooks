import * as React from "react";

/* Next */
import Head from "next/head";
import { GetStaticProps } from "next";

/* Components */
import {
  ButtonAddMore,
  Characters,
  Filter,
  Header,
  LayoutCharacters,
} from "components";

/* Hooks */
import { charactersContext, darkModeContext } from "context";

/* Utils */
import { getData } from "utils";

/* Types */
import ICharacter from "types/character";

/* Local types */
interface Props {
  characters: ICharacter[];
}

function Home({ characters: charactersFromServer }: Props) {
  const { darkMode } = React.useContext(darkModeContext);
  const [characters, setCharacters] = React.useContext(charactersContext);

  // effetcs
  React.useEffect(() => {
    console.log("RENDER");
  });

  React.useEffect(() => {
    setCharacters({
      ...characters,
      all: [...characters.all, ...charactersFromServer],
      filtered: [...characters.filtered, ...charactersFromServer],
    });
  }, []);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <LayoutCharacters>
          <Filter />
          <Characters />
          {!!characters.filtered.length && <ButtonAddMore />}
        </LayoutCharacters>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return getData({ url: "characters", params: { offset: 0, limit: 6 } })
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

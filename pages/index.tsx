import Head from "next/head";

/* Components */
import { Header } from "components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>hola mundo</main>
    </div>
  );
}

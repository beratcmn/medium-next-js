import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import EntryPanel from "../components/EntryPanel";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <EntryPanel />
    </div>
  );
};

export default Home;

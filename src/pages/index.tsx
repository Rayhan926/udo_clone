import Home from "@views/Home";
import Head from "next/head";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Udo - Die Freizeitsuchmaschine</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;

import client from "../client";
import Results from "@views/Results";
import { GetServerSideProps } from "next";
import React from "react";
import Head from "next/head";

const ResultsPage = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Udo - Die Freizeitsuchmaschine</title>
      </Head>
      <Results data={data} />
    </>
  );
};

export default ResultsPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let data = null;
  try {
    const res = await client.get(`/frontend/city/?city=${ctx.query?.city}`);
    data = res.data;
  } catch (error) {
    console.log(error);
    data = null;
  }

  // console.log({ server: data });

  return {
    props: {
      data,
    },
  };
};

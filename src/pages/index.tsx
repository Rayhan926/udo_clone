import Home from "@views/Home";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  // const [isLoading, setisLoading] = useState(false);
  // const getGeo = () => {
  //   setisLoading(true);
  //   navigator.geolocation.getCurrentPosition(
  //     function (position) {
  //       setisLoading(false);
  //       console.log({ position });
  //       console.log("Latitude is :", position.coords.latitude);
  //       console.log("Longitude is :", position.coords.longitude);
  //     },
  //     function (err) {
  //       setisLoading(false);
  //       console.dir(err);
  //     },
  //   );
  // };
  // useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>Udo - Die Freizeitsuchmaschine</title>
      </Head>
      {/* <p>{isLoading && "Loading.."}</p>
      <button onClick={getGeo}>Geo</button> */}
      <Home />
    </>
  );
};

export default HomePage;

import Footer from "@components/Footer";
import SearchWidget from "@components/SearchWidget";
import React from "react";
import CategoriesSection from "./components/CategoriesSection";
import Header from "./components/Header";
import MobileView from "./components/MobileView";
import { useWindowWidth } from "@react-hook/window-size";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const onlyWidth = useWindowWidth();

  useEffect(() => {
    setIsMobile(onlyWidth < 768);
  }, [onlyWidth]);

  return (
    <>
      {!isMobile ? (
        <>
          <Header />
          <SearchWidget />
          <CategoriesSection />
          <Footer />
        </>
      ) : (
        <MobileView />
      )}
    </>
  );
};

export default Home;

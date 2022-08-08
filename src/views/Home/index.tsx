import Footer from "@components/Footer";
import SearchWidget from "@components/SearchWidget";
import React from "react";
import CategoriesSection from "./components/CategoriesSection";
import Header from "./components/Header";
import MobileView from "./components/MobileView";
import { useWindowWidth } from "@react-hook/window-size";

const Home = () => {
  const onlyWidth = useWindowWidth();
  return (
    <>
      {onlyWidth > 768 ? (
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

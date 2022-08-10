import Footer from "@components/Footer";
import ResultPageHeader from "@views/Results/components/ResultPageHeader";
import React from "react";
import DetailsSection from "./components/DetailsSection";
import HeroSection from "./components/HeroSection";

const Details = () => {
  return (
    <>
      <div className="hidden md:block">
        <ResultPageHeader />
      </div>
      <HeroSection />
      <DetailsSection />
      <Footer />
    </>
  );
};

export default Details;

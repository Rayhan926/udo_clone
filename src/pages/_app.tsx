import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MobileSearchhInputBottomSheet } from "@views/Home/components/MobileView/components/MobileSearchInput";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Component {...pageProps} />

      <MobileSearchhInputBottomSheet />
    </>
  );
}

export default MyApp;

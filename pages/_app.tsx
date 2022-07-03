import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <Header></Header>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;

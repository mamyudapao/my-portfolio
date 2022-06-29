import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Center, VStack } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider>
        <Header></Header>
        <About></About>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;

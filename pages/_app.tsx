import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Center } from "@chakra-ui/react";
import Header from "../components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Center>
        <Header></Header>
        <Component {...pageProps} />
      </Center>
    </ChakraProvider>
  );
}

export default MyApp;

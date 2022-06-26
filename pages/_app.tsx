import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Center, VStack } from "@chakra-ui/react";
import Header from "./components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Center>
        <Header></Header>
      </Center>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

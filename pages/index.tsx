import type { NextPage } from "next";
import Header from "../components/Header/Header";
import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Pages } from "../types/types";

const Home: NextPage = () => {
  const [page, setPage] = useState<Pages>("Profile");

  return <></>;
};

export default Home;

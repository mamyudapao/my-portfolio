import type { NextPage } from "next";
import About from "../components/About/About";
import Works from "../components/Works/Works";
import Tech from "../components/Tech/Tech";

const Home: NextPage = () => (
  <>
    <About />
    <Works />
    <Tech />
  </>
);

export default Home;

import React from "react";
import logo from "../../../public/logo3.png";
import { Button } from "@chakra-ui/react";
import Styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className={Styles.headerWrapper}>
      <div>
        <Image src={logo} width={100} height={100} alt="logo"></Image>
      </div>
      <div>
        <ul className={Styles.centerNav}>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#">Works</Link>
          </li>
          <li>
            <Link href="#">Tech</Link>
          </li>
        </ul>
      </div>
      <div>
        <Button colorScheme="green">Contact</Button>
      </div>
    </div>
  );
};

export default Header;

import React, { Dispatch, SetStateAction } from "react";
import { Tabs, TabList, Tab, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Styles from "./Header.module.scss";
import { Pages } from "../../types/types";

const Header = (props: Props) => {
  return (
    <div className={Styles.header}>
      <NextLink href="/">
        <Link>
          <Heading>{`nosiken's portfolio`}</Heading>
        </Link>
      </NextLink>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList className={Styles.tabList}>
          <Tab>Profile</Tab>
          <Tab>Works</Tab>
          <Tab>Activity</Tab>
          <Tab>Contact</Tab>
        </TabList>
      </Tabs>
    </div>
  );
};

export default Header;

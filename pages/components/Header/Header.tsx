import React from "react";
import { Tabs, TabList, Tab, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();

  return (
    <div className={Styles.header}>
      <NextLink href="/">
        <Link>
          <Heading>{`nosiken`}</Heading>
        </Link>
      </NextLink>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList className={Styles.tabList}>
          <Tab onClick={() => router.push("profile")}>Profile</Tab>
          <Tab onClick={() => router.push("works")}>Works</Tab>
          <Tab onClick={() => router.push("activity")}>Activity</Tab>
          <Tab onClick={() => router.push("contact")}>Contact</Tab>
        </TabList>
      </Tabs>
    </div>
  );
};

export default Header;

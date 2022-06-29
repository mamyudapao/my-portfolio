import React from "react";
import Styles from "./About.module.scss";

import Image from "next/image";
import NosikenImage from "../../../public/nosiken.jpg";
import Github from "../../../public/github.png";
import Twitter from "../../../public/twitter.png";
import Instagram from "../../../public/instagram.png";
import Link from "next/link";

const About = () => {
  return (
    <div className={Styles.aboutWrapper} id="about">
      <div className={Styles.aboutLeft}>
        <h1>
          <span>Speedy and Creativity</span>
        </h1>
        <p>
          はじめまして、大学院生兼ソフトウェアエンジニアの
          <br />
          ノシアンケンイチと申します。
          <br />
          主にフロントエンド開発が得意ですが、
          <br />
          バックエンドもクラウドインフラも 経験があります！
        </p>
        <div className={Styles.sns}>
          <Link href="https://github.com/mamyudapao">
            <Image src={Github} width={70} height={70} alt="Github" />
          </Link>
          <Link href="https://twitter.com/Forestenter">
            <Image src={Twitter} width={70} height={70} alt="twitter" />
          </Link>
          <Link href="https://www.instagram.com/supermanosi/">
            <Image src={Instagram} width={70} height={70} alt="instagram" />
          </Link>
        </div>
      </div>
      <div className={Styles.aboutLight}>
        <Image src={NosikenImage} layout="fill" alt="nosikenの画像"></Image>
      </div>
    </div>
  );
};

export default About;

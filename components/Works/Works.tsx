import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import Styles from "./Works.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import CyclingRouter from "../../public/7JKD2fV.png";
import IdealShere from "../../public/idealshere.webp";
import Nuxtchat from "../../public/nuxtchat.png";

const ReactSlickDemo = () => {
  const images = [
    {
      src: CyclingRouter,
      name: "Cycling Router",
      description: "経路共有サービス",
      tech: "Next.js, TypeScript, Go, Docker, AWS(ECS: Fargate)",
    },
    {
      src: IdealShere,
      description: "＂アイディア共有サービス",
      name: "IdealShere",
      tech: "Vue.js, Python, AWS, Nginx",
    },
    {
      src: Nuxtchat,
      description: "Nuxt.jsを用いたリアルタイムチャットアプリ",
      name: "Nuxt-chat",
      tech: "Nuxt.js, Firebase",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <>
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={true}
        modules={[Pagination]}
        className={Styles.swiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image.src} alt={image.name} layout="responsive"></Image>
          </SwiperSlide>
        ))}
      </Swiper>
      <h3 className={Styles.swiperDiscription}>
        {images[activeIndex].description}
      </h3>
      <h2 className={Styles.swiperTitle}>{images[activeIndex].name}</h2>
      <h3 className={Styles.swiperTech}>{images[activeIndex].tech}</h3>
    </>
  );
};

const Works = () => (
  <div className={Styles.worksWrapper} id="works">
    <h2 className={Styles.title}>Woks</h2>
    <ReactSlickDemo />
  </div>
);

export default Works;

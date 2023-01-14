import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import SwiperCore from "swiper";
import reactPng from "../../assets/stacks/react.png";
import nodePng from "../../assets/stacks/node.png";
import bootstrapPng from "../../assets/stacks/bootstrap.png";
import postgresPng from "../../assets/stacks/postgres.png";
import mysqlPng from "../../assets/stacks/mysql.png";
import githubPng from "../../assets/stacks/github.png";
import awsPng from "../../assets/stacks/aws.png";

const StackSlider = () => {
  const slides = [
    reactPng,
    nodePng,
    bootstrapPng,
    postgresPng,
    mysqlPng,
    githubPng,
    awsPng,
  ];

  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const swiperOptions = {
    modules: [Autoplay, Navigation, Pagination],
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    loop: true,
    // navigation: true,
    onSlideChange: () => console.log("slide change"),
    onSwiper: (swiper) => console.log(swiper),
  };

  const createSlide = (slide, index) => {
    return (
      <SwiperSlide>
        <img src={slide} key={index} alt="" />
      </SwiperSlide>
    );
  };
  return (
    <Swiper {...swiperOptions}>
      {slides.map((slide, index) => createSlide(slide, index))}
    </Swiper>
  );
};

export default StackSlider;

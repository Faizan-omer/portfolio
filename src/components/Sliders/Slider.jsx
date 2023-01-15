import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import SwiperCore from "swiper";

const Slider = ({ slides, portfolio, desktop }) => {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const swiperOptions = {
    modules: [Autoplay, Navigation, Pagination],
    slidesPerView: desktop ? 3 : 1,
    spaceBetween: desktop ? 90 : 0,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: desktop,
  };

  const createSlide = (slide, index) => {
    return (
      <SwiperSlide key={index}>
        <img src={slide} alt="" className="w-56" />
      </SwiperSlide>
    );
  };

  const createPortfolioSlide = (project, index) => {
    return (
      <SwiperSlide key={index}>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col w-full h-full"
        >
          <img src={project.thumbnail} alt="" className="w-full h-56 object-fit" />
          <p className="mt-3 font-bold">{project.title}</p>
          <p className="mt-1 italic">{project.role}</p>
        </a>
      </SwiperSlide>
    );
  };

  return (
    <Swiper {...swiperOptions}>
      {!portfolio
        ? slides.map((slide, index) => createSlide(slide, index))
        : portfolio.map((project, index) => createPortfolioSlide(project, index))}
    </Swiper>
  );
};

export default Slider;

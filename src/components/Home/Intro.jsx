import React from "react";
import Title from "./Title";
import Description from "./Description";
import { TAGLINE } from "../../constants/language";
import monitor from "../../assets/home/monitor-mod.png";
import roboimg from "../../assets/home/robo-mod.png";
import windowimg from "../../assets/home/window-mod.png";

import "./home.css";

const Intro = () => {
  return (
    <div className="leading-7 font-bold text-lg w-full md:px-3 lg:px-16">
      <p className="text-center md:text-left">{TAGLINE}</p>
      <div className="mt-3 md:flex ">
        <div className="md:flex md:flex-col md:flex-1">
          <Title />
          <Description />
        </div>
        <div className="relative mt-96 md:mt-56 md:flex-1">
          <img
            src={monitor}
            alt=""
            className="w-56 absolute right-0 bottom-1 animation-rotate-360 infinite duration-5s linear"
          />
          <img
            src={roboimg}
            alt=""
            className="w-32 absolute right-32 bottom-48 z-30 animation-rotate-360 infinite duration-5s linear"
          />
          <img
            src={windowimg}
            alt=""
            className="w-20 absolute right-60 bottom-8 animation-rotate-360 infinite duration-5s linear"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;

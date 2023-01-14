import React from "react";
import Title from "./Title";
import Description from "./Description";
import { TAGLINE } from "../../constants/language";

const Intro = () => {
  return (
    <div className="leading-7 font-bold text-lg w-full">
      <p className="text-center">{TAGLINE}</p>
      <div className="mt-3">
        <Title />
        <Description />
      </div>
    </div>
  );
};

export default Intro;

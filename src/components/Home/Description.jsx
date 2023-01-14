import React from "react";
import { INTRO_DESCRIPTION } from "../../constants/language";

const Description = () => {
  return (
    <div className="leading-6 text-center md:text-left font-normal">
      <p>{INTRO_DESCRIPTION}</p>
    </div>
  );
};

export default Description;

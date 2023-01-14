import React from "react";
import Typical from "react-typical";
import { skills } from "../../constants/titleSkills";

const Title = () => {
  return (
    <div className="leading-[4rem] text-center md:text-left font-bold text-5xl">
      <h1>Hi! I'm Faizan</h1>
      <h1>
        <Typical steps={skills} loop={Infinity} wrapper="b" />
      </h1>
    </div>
  );
};

export default Title;

import React from "react";
import AppLayout from "../layouts/AppLayout";
import Intro from "../components/Home/Intro";
import Slider from "../components/Sliders/Slider";
import { Portfolio } from "../components/Home/Portfolio";
import techStack from "../common/techstacks";
import portfolio from "../common/portfolio";

const Home = () => {
  return (
    <div className="h-full w-full">
      <AppLayout>
        <div className="pt-10 flex flex-col jusitfy-center items-center px-5 my-12">
          <Intro />
          <div className="mt-12 flex flex-col justify-center items-center md:w-full">
            <h1 className="leading-[4rem] text-center font-bold text-4xl">My skills</h1>
            <p className="text-center leading-6">
              Some of the technlogies I've worked with
            </p>
            <div className="flex w-48 h-48 justify-center items-center mt-5 md:hidden">
              <Slider slides={techStack} />
            </div>
            <div className="flex w-3/4 justify-center items-center mt-5 hidden md:inline">
              <Slider slides={techStack} desktop={true} />
            </div>
          </div>
          <div className="mt-12 flex flex-col justify-center items-center">
            <h1 className="leading-[4rem] text-center font-bold text-4xl">Latest Work</h1>
            <p className="text-center leading-6">Some of the projects I've worked on</p>
            <div className="hidden">
              <Portfolio />
            </div>
            <div className="flex w-80 justify-center items-center mt-5 md:hidden">
              <Slider portfolio={portfolio} />
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Home;

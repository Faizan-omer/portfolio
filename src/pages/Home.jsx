import React from "react";
import AppLayout from "../layouts/AppLayout";
import Intro from "../components/Home/Intro";
import StackSlider from "../components/Sliders/StackSlider";
import { Portfolio } from "../components/Home/Portfolio";

const Home = () => {
  return (
    <div className="h-full w-full">
      <AppLayout>
        <div className="pt-10 flex flex-col jusitfy-center items-center px-5 my-12">
          <Intro />
          <div className="mt-12 justify-center items-center flex flex-col">
            <h1 className="leading-[4rem] text-center font-bold text-4xl">My skills</h1>
            <p className="text-center leading-6">
              Some of the technlogies I've worked with
            </p>
            <div className="flex w-48 h-48 justify-center items-center mt-5">
              <StackSlider />
            </div>
          </div>
          <div>
            <Portfolio />
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Home;

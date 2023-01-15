import React from "react";
import Bio from "../components/About/Bio";
import Pitch from "../components/About/Pitch";
import Divider from "../components/Shared/Divider";
import AppLayout from "../layouts/AppLayout";

const About = () => {
  return (
    <div className="h-full w-full">
      <AppLayout>
        <div className="h-full w-full flex flex-col">
          <div className="bg-[#F9E6F0] h-full-w-full py-32 px-6">
            <Bio />
          </div>
          <div className="my-28 px-6 md:px-40">
            <Pitch />
          </div>
          <Divider />
        </div>
      </AppLayout>
    </div>
  );
};

export default About;

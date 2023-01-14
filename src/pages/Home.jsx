import React from "react";
import AppLayout from "../layouts/AppLayout";
import Intro from "../components/Home/Intro";

const Home = () => {
  return (
    <div className="h-full w-full">
      <AppLayout>
        <div className="pt-10 flex jusitfy-center items-center px-5 my-12">
          <Intro />
        </div>
      </AppLayout>
    </div>
  );
};

export default Home;

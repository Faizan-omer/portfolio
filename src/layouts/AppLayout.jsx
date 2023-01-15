import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const AppLayout = ({ children }) => {
  return (
    <div className="h-full w-full relative ">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;

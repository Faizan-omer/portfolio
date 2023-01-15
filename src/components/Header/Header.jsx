import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className={`sticky top-0 w-screen z-50 bg-[#FADA5E]`}>
      <Navbar />
    </header>
  );
};

export default Header;

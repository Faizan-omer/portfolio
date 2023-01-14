import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className={`fixed top-0 w-screen z-50 bg-[#FADA5E]`}>
      <Navbar />
    </header>
  );
};

export default Header;

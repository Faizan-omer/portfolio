import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className={`fixed top-0 w-full z-50 bg-[#FCD12A]`}>
      <Navbar />
    </header>
  );
};

export default Header;

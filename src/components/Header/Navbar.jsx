import React from "react";
import menuButton from "../../assets/buttons/menu-button.png";

const Navbar = () => {
  return (
    <div className="flex w-full px-10 py-6">
      <div className="flex justify-start w-full font-bold text-lg">Logo</div>
      <div className="flex justify-end w-full">
        <div className="md:hidden">
          <img src={menuButton} alt="" className="w-6 h-6" />
        </div>
        <div className="hidden md:inline">about</div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import menuButton from "../../assets/buttons/menu-button.png";
import Scroll from "react-scroll";
import { contact, work } from "../../common/autoScroll";

import "./header.css";

const Navbar = () => {
  return (
    <div className="flex w-full px-5 md:px-9 py-6">
      <div className="flex justify-start w-full font-bold text-xl">
        <p className=" hover:cursor-pointer border-4 p-2 border-black">
          &lt;HelloWorld/&gt;
        </p>
      </div>
      <div className="flex justify-end w-full">
        <div className="md:hidden self-center">
          <img src={menuButton} alt="" className="w-6 h-6" />
        </div>
        <ul className="hidden md:inline md:flex md:justify-between md:w-5/12">
          <li className="hover:cursor-pointer hover:underline self-center">About</li>
          <li className="hover:cursor-pointer hover:underline self-center">
            <Scroll.Link
              activeClass="active"
              to={work}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Work
            </Scroll.Link>
          </li>
          <li className="hover:cursor-pointer hover:underline self-center">
            <Scroll.Link
              activeClass="active"
              to={contact}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Scroll.Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import logo from "../help_assets/help_logo.svg";

const Header = () => {
  return (
    <header className="flex justify-between px-[100px] py-[20px] border-b-2 border-gray-200 border-solid items-center">
      <a href="http://" className="flex gap-2 items-center">
        <img src={logo} alt="Help me out logo" />
        <p className="text-[#100A42] font-bold">Help me Out</p>
      </a>
      <ul className="flex px-0 gap-[39px]">
        <li>
          <a href="#features" className="font-medium">
            Features
          </a>
        </li>
        <li>
          <a href="#how_it_works" className="font-medium">
            How it Works
          </a>
        </li>
      </ul>
      <a href="http://" className="text-[18px] text-[#120B48] font-semibold">
        Get Started
      </a>
    </header>
  );
};

export default Header;

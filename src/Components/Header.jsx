import React from "react";
import logo from "../img/logo.png";
import { MdShoppingBasket } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-screen p-6 px-16 fixed z-50">
      {/* Desktop & Tablet */}
      <div className="hidden w-full h-full md:flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} className="w-8 object-cover" alt="Logo" />
          <p className="text-headingColor font-bold text-xl">City</p>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-cartNumBg rounded-full">
              <p className="text-xs text-white font-semibold">4</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;

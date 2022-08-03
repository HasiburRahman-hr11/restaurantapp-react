import React from "react";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <div className="w-screen p-6 px-16 fixed z-50">
      {/* Desktop & Tablet */}
      <div className="hidden w-full h-full md:flex">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <div className="flex md:hidden w-full h-full"></div>
    </div>
  );
};

export default Header;

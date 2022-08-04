import React from "react";
import { motion } from "framer-motion";
import logo from "../img/logo.png";
import avatar from "../img/avatar.png";
import { MdAdd, MdLogout, MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import { app } from "../firebase.config";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { useState } from "react";
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const Header = () => {
  const [state, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!state.user) {
      const response = await signInWithPopup(auth, provider);
      console.log(response);
      dispatch({
        type: actionType.SET_USER,
        payload: response.user.providerData[0],
      });
      localStorage.setItem(
        "user",
        JSON.stringify(response.user.providerData[0])
      );
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    dispatch({
      type: actionType.LOGOUT_USER,
    });
    localStorage.removeItem("user");
  };

  return (
    <header className="w-screen p-6 px-16 fixed z-50">
      {/* Desktop & Tablet */}
      <div className="hidden w-full h-full md:flex items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} className="w-8 object-cover" alt="Logo" />
          <p className="text-headingColor font-bold text-xl">City</p>
        </Link>
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

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={state?.user ? state.user.photoURL : avatar}
              className="w-10 min-w-[40] h-10 min-h-[40] cursor-pointer drop-shadow-xl rounded-full"
              alt="User Icon"
              onClick={login}
            />
            {isMenu && (
              <motion.div 
              initial={{opacity:0 , scale: 0.6}}
              animate={{opacity:1 , scale: 1}}
              exit={{opacity:0 , scale: 0.6}}
              className="w-40 drop-shadow-xl bg-gray-50 rounded-lg flex flex-col absolute top-12 right-0">
                {state.user &&
                  state.user.email === "mdhasiburrahman47@gmail.com" && (
                    <Link 
                    to="/createItem"
                    className="py-2 cursor-pointer flex items-center px-4 gap-3 hover:bg-slate-100 duration-100 ease-in-out transition-all text-textColor text-base">
                      New Item <MdAdd />
                    </Link>
                  )}
                {state.user && (
                  <p
                    className="py-2 cursor-pointer flex items-center px-4 gap-3 hover:bg-slate-100 duration-100 ease-in-out transition-all text-textColor text-base"
                    onClick={logout}
                  >
                    Logout <MdLogout />
                  </p>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;

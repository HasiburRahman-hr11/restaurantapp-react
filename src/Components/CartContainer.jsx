import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";

import { motion } from "framer-motion";

function CartContainer() {
  return (
    <div className="fixed w-full md:w-375 h-screen flex flex-col top-0 right-0 z-[101] bg-white drop-shadow-md">
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          // onClick={showCart}
        >
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
          //   onClick={clearCart}
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {/* Cart Items */}
      <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
        <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none"></div>
      </div>

      {/* Cart Total */}
    </div>
  );
}

export default CartContainer;

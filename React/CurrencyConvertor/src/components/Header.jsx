import React from "react";
import { HiCurrencyRupee } from "react-icons/hi2";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiFillEuroCircle } from "react-icons/ai";
import { AiFillPoundCircle } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <div className="bg-blue-500 px-4 text-3xl py-2 text-white text-center flex justify-center items-center gap-2">
        <HiCurrencyRupee className="animation-bounce" />
        <AiFillDollarCircle className="animate-spin" />
        <span className="font-bold"> Currency Convertor</span>
        <AiFillEuroCircle className="animate-pulse" />
        <AiFillPoundCircle className="animate-ping" />
      </div>
    </>
  );
};

export default Header;

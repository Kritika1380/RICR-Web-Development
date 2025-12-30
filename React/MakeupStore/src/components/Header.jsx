import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="flex bg-amber-600 justify-between py-2">
        <h1 className="text-4xl">MakeupStore</h1>
        <div className="flex gap-3 justify-center items-center">
          <Link to={"/"} className=" flex text-white items-center gap-1">
            <FaHome /> Home
          </Link>
          <Link to={"/about"} className="text-white">
            About
          </Link>
          <Link to={"/product"} className="text-white">
            Product
          </Link>
          <Link to={"/contact"} className="text-white">
            Contact
          </Link>
          <Link to={"/login"} className="text-white">
            Login
          </Link>
          <Link to={"/signup"} className="text-white">
            Signup
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

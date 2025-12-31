import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex bg-blue-500 justify-between py-2">
        <h1 className="text-4xl">Registration Form</h1>
        {/* <div className="flex gap-3 justify-center items-center">
          <Link to={"/studentLogin"} className=" flex text-white items-center gap-1">
            Student Login
          </Link>
        </div> */}
      </div>

      
    </>
  );
};

export default Header;

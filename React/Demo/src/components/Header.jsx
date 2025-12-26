import React from "react";
import {Link} from "react-router-dom";


const Header = ()=>{
    return(
        <>
           <div className="d-flex bg-primary align-items-center justify-content-between p-2 text-light">
            <h1>My Website</h1>
            <div className="d-flex gap-3 ">
               <Link to={"/"} className="text-decoration-none text-light">Home</Link>
               <Link to={"/about"} className="text-decoration-none text-light">About</Link>
               <Link to={"/product"} className="text-decoration-none text-light">Product</Link>
               <Link to={"/contact"} className="text-decoration-none text-light">Contact</Link>
            </div>
           </div>
        </>
    );
};

export default Header;
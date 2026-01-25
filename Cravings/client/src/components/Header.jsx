import React from "react";
import transparentLogo from "../assets/transparentLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Header = () => {
  const { user, isLogin, role } = useAuth();

  const navigate = useNavigate();
  const handlenavigate = () => {
    switch (role) {
      case "manager": {
        setRole("manager");
        navigate("/restaurant-dashboard");
        break;
      }
      case "partner": {
        setRole("partner");
        navigate("/partner-dashboard");
        break;
      }
      case "customer": {
        setRole("customer");
        navigate("/customer-dashboard");
        break;
      }
      case "admin": {
        setRole("admin");
        navigate("/admin-dashboard");
        break;
      }
      default:
        break;
    }
  };

  return (
    <>
      <div className="bg-(--color-primary) px-4 py-2 flex justify-between items-center ">
        <Link to={"/"}>
          <img
            src={transparentLogo}
            alt=""
            className="h-12 w-20 object-cover invert-100"
          />
        </Link>
        <div className="flex gap-4">
          <Link
            to={"/"}
            className="text-decoration-none text-white hover:text-(--color-accent)"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-decoration-none text-white hover:text-(--color-accent)"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-decoration-none text-white hover:text-(--color-accent)"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-4">
          {isLogin ? (
            <div
              className="text-red-500 cursor-pointer"
              onClick={() => navigate("/user-dashboard")}
            >
              {user.fullName}
            </div>
          ) : (
            <>
              <button
                className="bg-(--color-secondary) py-2 px-4 font-bold hover:bg-(--color-secondary-hover) hover:text-white rounded "
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="bg-(--color-secondary) py-2 px-4 font-bold hover:bg-(--color-secondary-hover) hover:text-white rounded "
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

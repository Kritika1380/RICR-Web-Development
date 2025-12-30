import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleClearForm = () => {
    setLoginData({
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      console.log(loginData)
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  return (
    <>
      <div>
        <form onReset={handleClearForm} onSubmit={handleSubmit}>
          <div className="border text-center p-6 mx-120 my-30 rounded-2xl ">
            <h1 className="text-center text-4xl">Login Form</h1>
            <div className="mt-5 flex items-center mx-15 gap-3">
              <label htmlFor="Email">
                <MdOutlineMail className="mt-2 text-3xl" />
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border-0 text-3xl "
              />
            </div>
            <hr className="mx-15 mb-10" />

            <div className="mt-5 flex items-center mx-15 gap-3">
              <label htmlFor="password">
                <CiLock className="mt-2 text-3xl" />
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Confirm a password"
                className="border-0 text-3xl "
              />
            </div>
            <hr className="mx-15 mb-10" />

            <button
              className="border px-5 pt-2 py-2 rounded-xl bg-blue-400"
              type="submit"
            >
              {isLoading ? "Loading" : "Submit"}
            </button>
            <p className="text-center mt-3">
              Don't have an account ?
              <Link to="/signup" className="text-blue-700 underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

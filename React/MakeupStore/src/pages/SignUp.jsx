import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleClearForm = () => {
    setSignupData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      console.log(signupData);
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
          <div className="border text-center p-6 mx-120 my-30 rounded-2xl">
            <h1 className="text-4xl">Signup Form</h1>

            <div className="mt-6 flex items-center mx-15 gap-3">
              <label htmlFor="fullName">
                <FiUser className="mt-2 text-3xl" />
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={signupData.fullName}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="border-0 text-3xl "
              />
            </div>
            <hr className="mx-15 mb-10" />

            <div className="mt-6 flex items-center mx-15 gap-3">
              <label htmlFor="email">
                <MdOutlineMail className="mt-2 text-3xl" />
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={signupData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border-0 text-3xl "
              />
            </div>
            <hr className="mx-15 mb-10" />

            <div className="mt-6 flex items-center mx-15 gap-3">
              <label htmlFor="password">
                <CiLock className="mt-2 text-3xl" />
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={signupData.password}
                onChange={handleChange}
                placeholder="Create your password"
                className="border-0 text-3xl "
              />
            </div>
            <hr className="mx-15 mb-10" />

            <div className="mt-6 flex items-center mx-15 gap-3">
              <label htmlFor="confirmPassword">
                <CiLock className="mt-2 text-3xl" />
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={signupData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
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
              Already have an account ?
              <Link to="/login" className="text blue underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;

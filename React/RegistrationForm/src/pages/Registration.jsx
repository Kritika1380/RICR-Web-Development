import React, { useState } from "react";
import toast from "react-hot-toast";

const Registration = () => {
  const [RegistrationData, setRegistrationData] = useState({
    fullName: "",
    gender: "",
    email: "",
    number: "",
    dob: "",
    qualification: "",
    score: "",
    address: "",
    city: "",
    pinCode: "",
    guardianName: "",
    guardianNumber: "",
    coachingInfo: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { validationError, setValidationError } = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleClearForm = () => {
    setRegistrationData({
      fullName: "",
      gender: "",
      email: "",
      number: "",
      dob: "",
      qualification: "",
      score: "",
      address: "",
      city: "",
      pinCode: "",
      guardianName: "",
      guardianNumber: "",
      coachingInfo: "",
    });
  };

  const validate = () => {
    let Error = {};

    if (RegistrationData.fullName.length < 3) {
      Error.fullName = "Name should be More Than 3 Characters";
    } else {
      if (!/^[A-Za-z ]+$/.test(RegistrationData.fullName)) {
        Error.fullName = "Only Contain A-Z , a-z and space";
      }
    }

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        RegistrationData.email
      )
    ) {
      Error.email = "Use Proper Email Format";
    }

    if (!/^[6-9]\d{9}$/.test(RegistrationData.mobileNumber)) {
      Error.mobileNumber = "Only Indian Mobile Number allowed";
    }

    setValidationError(Error);

    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the Form Correctly");
      return;
    }
    try {
      console.log(RegistrationData);
      toast.success("Registration Successful");
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <main className=" mx-20">
        <form onSubmit={handleSubmit}>
          <div className="border border-e-black rounded shadow mx-3 pt-7 mt-10 pb-2 mb-4 p-3 relative">
            <span className="px-2 text-blue-500 absolute bg-white text-2xl -top-4">
              Personal Information
            </span>
            <div className="grid-cols-11 gap-3">
              <div className="mx-2 flex gap-4 pt-3 ">
                <label htmlFor="FullName" className="gap-3 w-60 ">
                  FullName :
                </label>
                <div>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={RegistrationData.fullName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded shadow-2xs w-7xl"
                  />
                 
                </div>
              </div>
              <div className="mx-2 flex gap-4 pt-3 ">
                <label htmlFor="email" className="gap-3 w-60">
                  Email :
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={RegistrationData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded shadow-2xs w-7xl"
                />
              </div>
              <div className="mx-2 flex gap-4 pt-3">
                <label htmlFor="mobileNumber" className="gap-3 w-60 ">
                  Mobile Number :
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  id="mobileNumber"
                  value={RegistrationData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded shadow-2xs w-7xl"
                />
              </div>
              <div className="mx-2 flex gap-4 pt-3 ">
                <label htmlFor="DOB" className="gap-3 w-60">
                  D.O.B :
                </label>
                <input
                  type="date"
                  name="DOB"
                  id="DOB"
                  value={RegistrationData.dob}
                  onChange={handleChange}
                  className="border border-gray-300 rounded shadow-2xs w-7xl"
                />
              </div>
            </div>
          </div>

          {/* Academic Details */}

          <div className="border border-e-black rounded shadow p-3 pt-5 mx-3 mt-10 mb-4 relative">
            <span className="px-2 text-blue-500 absolute bg-white text-2xl -top-4">
              Academic Details
            </span>

            <div className="grid-cols-11 gap-3">
              <div className="mx-2 flex gap-4 pt-3 ">
                <label htmlFor="qualification" className="gap-3 w-60">
                  Qualification :
                </label>
                <select
                  name="qualification"
                  id="qualification"
                  onChange={handleChange}
                  className="border border-gray-300 rounded shadow-2xs w-7xl"
                >
                  <option value="">--Select Qualification</option>
                  <option value="10">Secondary Schooling</option>
                  <option value="12">Senior Secondary Schooling</option>
                  <option value="UG">Graduation</option>
                  <option value="PG">Post Graduation</option>
                  <option value="PHD">P.hd</option>
                </select>
              </div>
              <div className="mx-2 flex gap-4 pt-3 ">
                <label htmlFor="score" className="gap-3 w-60">
                  Percentage / Grade :
                </label>
                <input
                  type="text"
                  name="score"
                  id="score"
                  value={RegistrationData.score}
                  onChange={handleChange}
                  className="border border-gray-300 rounded shadow-2xs w-7xl"
                />
              </div>
            </div>
          </div>
          {/* course Information */}
          <div className="border border-e-black rounded shadow p-3 mx-3 pt-5 mt-10 mb-4 relative">
            <span className="px-2 text-blue-500 absolute bg-white text-2xl -top-4">
              Course Information
            </span>

            <div className="grid-cols-11 gap-3">
              <div className="mx-2 flex gap-4 pt-3 ">
                <label htmlFor="course" className="gap-3 w-60">
                  Available Courses :
                </label>
                <select
                  name="course"
                  id="course"
                  onChange={handleChange}
                  className="border border-gray-300 rounded shadow-2xs w-7xl"
                >
                  <option value="">--Select Course</option>
                  <option value="FSD">Full Stack Development</option>
                  <option value="DS">Data Science</option>
                  <option value="DA">Data Analytics</option>
                  <option value="J-DSA">Java DSA</option>
                  <option value="P-DSA">Python DSA</option>
                </select>
              </div>
              <div className="mx-2 flex  gap-4 pt-3 ">
                <label htmlFor="batch" className="gap-3 w-60">
                  Perfered Batch :
                </label>
                <div className="flex gap-3">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="morning"
                      id="morning"
                      value="morning"
                      onChange={handleChange}
                    />
                    <span>Morning</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="afternoon"
                      id="afternoon"
                      value="afternoon"
                      onChange={handleChange}
                    />
                    <span>Afternoon</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="evening"
                      id="evening"
                      value="evening"
                      onChange={handleChange}
                    />
                    <span>Evening</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="weekends"
                      id="weekends"
                      value="weekends"
                      onChange={handleChange}
                    />
                    <span>Weekends</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="border border-e-black rounded mx-3 shadow p-3 pt-5 mt-10 mb-4 relative">
            <span className="px-2 text-blue-500 absolute bg-white text-2xl -top-4">
              Address
            </span>
            <div className="grid-cols-11 gap-3">
              <div className="mx-2 flex  gap-4 pt-3 ">
                <label htmlFor="address" className="gap-3 w-55 ">
                  Residentail Address :
                </label>
                <textarea
                  name="address"
                  id="address"
                  placeholder=" House No,Street,Locality"
                  className="mx-5 border border-gray-300  w-7xl"
                  value={RegistrationData.address}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mx-2 flex  gap-4 pt-3 ">
                <label htmlFor="city" className="gap-3 w-60">
                  City :
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={RegistrationData.city}
                  onChange={handleChange}
                  className="border border-gray-300 rounded shadow-2xs w-7xl"
                />
              </div>
              <div className="mx-2 flex  gap-4 pt-3 ">
                <label htmlFor="Pincode" className="gap-3 w-60">
                  Pin Code:
                </label>
                <input
                  type="tel"
                  name="pinCode"
                  id="pinCode"
                  value={RegistrationData.pinCode}
                  onChange={handleChange}
                  className="border border-gray-300 rounded shadow-2xs w-7xl"
                />
              </div>
            </div>
          </div>

          {/* Graduation Details */}
          <div className="border border-e-black rounded mx-3 shadow p-3 pt-5 mt-10 mb-4 relative">
            <span className="px-2 text-blue-500 absolute bg-white text-2xl -top-4">
              Graduation Details
            </span>
            <div className="grid-cols-11 gap-3">
              <div className="mx-2 flex  gap-4 pt-3 ">
                <label htmlFor="graduationName" className="gap-3 w-60">
                  Graduation Name:
                </label>
                <input
                  type="text"
                  name="graduationName"
                  id="graduationName"
                  value={RegistrationData.guardianName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded shadow-2xs w-7xl"
                />
              </div>
              <div className="mx-2 flex  gap-4 pt-3 ">
                <label htmlFor="graduationNumber" className="gap-3 w-60">
                  Graduation Number:
                </label>
                <input
                  type="text"
                  name="graduationNumber"
                  id="graduationNumber"
                  value={RegistrationData.guardianNumber}
                  onChange={handleChange}
                  className="border border-gray-300 rounded shadow-2xs w-7xl"
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="border border-e-black rounded mx-3 shadow p-3 pt-5 mt-10 mb-4 relative">
            <span className="px-2 text-blue-500 absolute bg-white text-2xl -top-4">
              Additional Information
            </span>
            <div className="grid-cols-11 gap-3">
              <div className="mx-2 flex  gap-4 pt-3 ">
                <label htmlFor="coachingInfo" className="gap-3 w-60">
                  How did you hear about us?:
                </label>
                <select
                  name="coachingInfo"
                  id="coachingInfo"
                  onChange={handleChange}
                  className="border border-gray-300 rounded shadow-2xs w-7xl"
                >
                  <option value="">--Select</option>
                  <option value="Friend">Friends</option>
                  <option value="ads">Online Ads</option>
                  <option value="newspaper">Newspaper</option>
                  <option value="socialMedia">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Button */}

          <div className="text-center p-3 mt-2">
            <button
              className="border px-5 pt-2 py-2 rounded-xl bg-blue-400"
              type="submit"
            >
              Sumbit
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Registration;

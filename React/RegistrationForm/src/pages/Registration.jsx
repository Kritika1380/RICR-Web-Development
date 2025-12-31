import React from "react";


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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(RegistrationData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };
  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="border border-e-black rounded shadow mx-3 pt-5 mt-3 pb-2 relative">
            <span className="px-2 text-blue-500 absolute ">
              Personal Information
            </span>
            <div className="grid gap-3">
              <div className="mx-2 flex gap-4 pt-3 ">
                <label htmlFor="FullName" className="w-60 gap-3">
                  FullName :
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={RegistrationData.fullName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded shadow-2xs w-7xl focus:outline-none focus:border-indigo-500"
                />
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
                  value={RegistrationData.DOB}
                  onChange={handleChange}
                  className="border border-gray-300 rounded shadow-2xs w-7xl"
                />
              </div>
            </div>
          </div>

          {/* Academic Details */}

          <div className="border border-e-black rounded shadow p-3 pt-5 mx-3 mt-3 relative">
            <span className="px-2 text-blue-500 absolute">
              Academic Details
            </span>

            <div className="grid gap-3">
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
          <div className="border border-e-black rounded shadow p-3 mx-3 pt-5 mt-3 relative">
            <span className="px-2 text-blue-500 absolute">Course Information</span>

            <div className="grid gap-3">
              <div className="mx-2 flex gap-4 pt-3 ">
              <label htmlFor="course" className="gap-3 w-60">
                Available Courses :
              </label>
              <select
                name="course"
                id="course"
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
                  />
                  <span>Morning</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="afternoon"
                    id="afternoon"
                    value="afternoon"
                  />
                  <span>Afternoon</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="evening"
                    id="evening"
                    value="evening"
                  />
                  <span>Evening</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="weekends"
                    id="weekends"
                    value="weekends"
                  />
                  <span>Weekends</span>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Address */}
          <div className="border border-e-black rounded mx-3 shadow p-3 pt-5 mt-3">
            <span className="px-2 text-blue-500">Address</span>

            <div className="mx-2 flex  gap-4 pt-3 ">
              <label htmlFor="address" className="gap-3 w-60 ">
                Residentail Address :
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="border border-gray-300 rounded shadow-2xs w-7xl"
              />
            </div>
            <div className="mx-2 flex  gap-4 pt-3 ">
              <label htmlFor="city" className="gap-3 w-60">
                City :
              </label>
              <input
                type="text"
                name="city"
                id="city"
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
                className="border border-gray-300 rounded shadow-2xs w-7xl"
              />
            </div>
          </div>

          {/* Graduation Details */}
          <div className="border border-e-black rounded mx-3 shadow p-3 pt-5 mt-3">
            <span className="px-2 text-blue-500">Graduation Details</span>

            <div className="mx-2 flex  gap-4 pt-3 ">
              <label htmlFor="graduationName" className="gap-3 w-60">
                Graduation Name:
              </label>
              <input
                type="text"
                name="graduationName"
                id="graduationName"
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
                className="border border-gray-300 rounded shadow-2xs w-7xl"
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="border border-e-black rounded mx-3 shadow p-3 pt-5 mt-3">
            <span className="px-2 text-blue-500">Additional Information</span>

            <div className="mx-2 flex  gap-4 pt-3 ">
              <label htmlFor="coachingInfo" className="gap-3 w-60">
                How did you hear about us?:
              </label>
              <select
                name="coachingInfo"
                id="coachingInfo"
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

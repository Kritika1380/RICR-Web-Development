import React from "react";
import { useState } from "react";

const Contact = () => {
  const [ContactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
    religion: "",
    gender: "",
    skill: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let temp = ContactData.skill;
      if (checked) {
        temp.push(value);
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      } else {
        temp = Object.values(temp);
        temp = temp.filter((word) => word !==value); 
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      }
    } else {
      setContactData((previousData) => ({ ...previousData, [name]: value }));
    }
  };

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      subject: "",
      message: "",
      religion: "",
      gender: "",
      skill: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(ContactData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  return (
    <>
      <div className="text-center">
        <h1>Contact Us</h1>

        <div className="container gap-3   ">
          <form onReset={handleClearForm} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={ContactData.fullName}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="text-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={ContactData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="text-primary"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                value={ContactData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                className="text-primary"
              />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={ContactData.subject}
                onChange={handleChange}
                placeholder="Enter your subject"
                className="text-primary"
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={ContactData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="text-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="religion">Religion</label>
              <select
                name="religion"
                id="religion"
                onChange={handleChange}
                value={ContactData.religion}
              >
                <option value="">--Select Religion</option>
                <option value="islam">Islam</option>
                <option value="hinduism">Hindusim</option>
                <option value="christianity">Christianity</option>
                <option value="buddhism">Buddhism</option>
                <option value="jainism">jainism</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="gender">Gender: </label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={ContactData.gender === "male"}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={ContactData.gender === "female"}
              />
              female
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={handleChange}
                checked={ContactData.gender === "other"}
              />
              other
            </div>
            <div>
              <label htmlFor="skill">Skills known:</label>
              <input
                type="checkbox"
                name="skill"
                value="html"
                onChange={handleChange}
                checked={
                  Object.values(ContactData.skill).find(
                    (word) => word === "html"
                  )
                    ? true
                    : false
                }
              />
              HTML
              <input
                type="checkbox"
                name="skill"
                value="css"
                onChange={handleChange}
                checked={
                  Object.values(ContactData.skill).find(
                    (word) => word === "css"
                  )
                    ? true
                    : false
                }
              />
              CSS
              <input
                type="checkbox"
                name="skill"
                value="js"
                onChange={handleChange}
                checked={
                  Object.values(ContactData.skill).find((word) => word === "js")
                    ? true
                    : false
                }
              />
              JS
              <input
                type="checkbox"
                name="skill"
                value="react"
                onChange={handleChange}
                checked={Object.values(ContactData.skill).includes("react")}
              />
              React
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={ContactData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="text-primary"
              ></textarea>
            </div>
            <div>
              <button type="reset" className="btn btn-danger">
                Clear Form
              </button>
              <button type="submit" className="btn btn-success">
                {isLoading ? "Loading" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

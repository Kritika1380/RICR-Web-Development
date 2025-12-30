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
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      // const data = {
      //   fullName,
      //   email,
      //   phone,
      //   city,
      //   subject,
      //   message,
      // };
      // console.log(data);
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

        <div className="container gap-3 ">
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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={ContactData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="text-primary"
                required
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
                required
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
                required
              />
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
                required
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

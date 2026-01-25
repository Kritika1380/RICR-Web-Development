import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genToken } from "../utils/authToken.js";

export const UserRegister = async (req, res, next) => {
  try {
    //accept data from Frontend
    const { fullName, email, mobileNumber, password ,role} = req.body;

    //verify  all data exist
    if (!fullName || !email || !mobileNumber || !password ||!role) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    //check for duplicate user before registration
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already registered ");
      error.statusCode = 409;
      return next(error);
    }

    //encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //save data to database

    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashPassword,
      role,
    });

    // send response to frontend

    console.log(newUser);
    res.status(201).json({ message: "Registration Successfull" });
    //End
  } catch (error) {
    next(error);
  }
};
export const UserLogin = async (req, res, next) => {
  try {
    //fetch data from frontend
    const { email, password } = req.body;

    //verify  all data exist
    if (!email || !password) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    //check if user is registred or not
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered ");
      error.statusCode = 401;
      return next(error);
    }

    //verify Password
    const isVerfied = await bcrypt.compare(password, existingUser.password);
    if (!isVerfied) {
      const error = new Error("Password not verified ");
      error.statusCode = 401;
      return next(error);
    }

    //Token Generation will be done here

    genToken(existingUser, res);

    //send message to Frontend
    res.status(200).json({ message: "Login Successfully", data: existingUser });
  } catch (error) {
    next(error);
  }
};

export const UserLogout = async (req, res, next) => {
  try {
    res.clearCookie("parleG")
    res.status(200).json({ message: "Logout Successfully" });
  } catch (error) {
    next(error);
  }
};

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";

const app = express();

app.use(cors({origin:"http://lovalhost5173"}));

app.use(express.json());

// app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  console.log("Server is Woring");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server Started At Port: ", port);
  connectDB();
});

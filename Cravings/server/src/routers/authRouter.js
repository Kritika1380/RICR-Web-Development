import express from "express";
import { UserRegister,UserLogin,UserLogout } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", UserRegister);
router.post("/register", UserLogin);
router.get("/register", UserLogout);

export default router;
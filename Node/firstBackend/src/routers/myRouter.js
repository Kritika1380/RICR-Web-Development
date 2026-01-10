import express from 'express';
import { UserRegister,UserLogin,UserLogout, UserUpdate } from '../controllers/myController.js';

const router = express.Router();

router.post("/register",UserRegister);//function callback hoga
router.post("/login",UserLogin);
router.get("/logout",UserLogout);
router.put("/update",UserUpdate);


export default router;

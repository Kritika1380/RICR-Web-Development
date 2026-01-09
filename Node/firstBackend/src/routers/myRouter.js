import express from 'express';
import { UserRegister,UserLogin,UserLogout } from '../controllers/myController.js';

const router = express.Router();

router.post("/register",UserRegister);//function callback hoga
router.post("/login",UserLogin);
router.post("/logout",UserLogout);


export default router;

import express from "express";
import {loginUsers,registerUser} from "../controllers/user.controller.js"
const router = express.Router();

router.post('/login' , loginUsers );
router.post('/register',registerUser);

export default router;
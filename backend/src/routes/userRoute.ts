import express from "express";
import { getCurrentUser, loginUser, registerUser, updatePassword, updateProfile } from "../controllers/userController";
import authMiddleware from "../middleware/auth";

const userRouter = express.Router()

// Public Links

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

// Private Links

userRouter.get('/me', authMiddleware, getCurrentUser)
userRouter.put('/profile', authMiddleware, updateProfile)
userRouter.put('/password', authMiddleware, updatePassword)

export default userRouter
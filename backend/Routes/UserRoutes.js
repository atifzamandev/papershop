import express from "express"
import { authUser, registerUser ,getUserProfile } from "../Controllers/UserController.js"
import { protect } from "../Middleware/authMiddleware.js"

const router = express.Router()


router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)
export default router

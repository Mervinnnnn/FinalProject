import express from 'express'
const router = express.Router()
import {chatPage} from '../Controllers/ChatController.js'
import { isAuthenticated } from '../Middlewares/authMiddleware.js'

router.get('/', isAuthenticated, chatPage)

export default router
import express from "express";
import handler from '../controllers/auth'

const { getHandler, postHandler} = handler

const router = express.Router()

router.get('/login',getHandler)
router.post('/login',postHandler)

export default router
import express from "express";
import handler from '../controllers/root'

const router = express.Router()

router.get('/',handler)

export default router
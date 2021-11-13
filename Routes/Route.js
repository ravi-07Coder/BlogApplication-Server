import express from 'express'
import { createPost } from '../Controller/PostController.js'

const router=express.Router()


router.post('/create',createPost)

export default router;
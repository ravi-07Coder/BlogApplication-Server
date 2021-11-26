import express from 'express'


import { createPost, getAllPosts,getPost,updatePost,deletePost } from '../Controller/PostController.js'

import {uploadImage,getImage} from "../Controller/image-controller.js"
import upload from '../utils/upload.js'
import {newComment,getComments,deleteComment} from '../Controller/comment-conttroller.js'

import User from '../schema/User.js'



//bcrypt is actually password hashing library
//json web token method for  authentication client sends authenticatio json token is 

//expres-validator is a middleware 
const router=express.Router()

router.post('/create',createPost)


router.get('/posts',getAllPosts)

router.get('/post/:id',getPost)


router.post('/update/:id',updatePost)


router.delete('/delete/:id',deletePost)


router.post('/file/upload',upload.single('file'),uploadImage)

router.get('/file/:filename',getImage)

router.post('/comment/new',newComment)

router.get('/comments/:id',getComments)

router.delete('/comment/delete/:id',deleteComment)



//@route Post /users
//Desc Register user
//access public
router.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({user: {email: email, name: user.name}, token: user._id + user._id});
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 
router.post("/register", (req, res)=> {
    const { name, email, password} = req.body;
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send({user: {email: email, name: name, password: password}, token: user._id + user._id});
                }
            })
        }
    })
    
})



export default router;


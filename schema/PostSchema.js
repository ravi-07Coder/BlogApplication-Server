import mongoose from 'mongoose'
const PostSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:false
    },
    username:{
        type:String,
        required:true
    },
    Categories:
    {
        type:String,
        required:true
    },
    description:{
    type:String,
    required:true
    },
    createdDate: {  
        type:Date,
        required:true
    }

})
const post=moongoose.model('post',PostSchema)
export default post;
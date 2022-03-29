import mongoose from "mongoose"


const commentSchema=mongoose.Schema({
      name:{
          type:String,
          requires:true
      },
      postId:{
        type:String,
        requires:true
    },
    date:{
        type:String,
        requires:true
    },
    comments:{
        type:String,
        requires:true       
    },
})

const comment=mongoose.model('comment',commentSchema);
export default comment;
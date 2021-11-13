

export const createPost= async (request,response)=>{
      console.log(request)
      try{
           const newPost= await new post(request.body)
                newPost.save();
                request.status(200).json('blog saved successfully')
          }
      catch(error){
            response.status(500).json(error)
      }
}



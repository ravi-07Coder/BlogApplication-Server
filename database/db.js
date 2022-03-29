import mongoose from 'mongoose';

const Connection = async () => {
    // const URL='mongodb+srv://userravi:1234@blog.wekcb.mongodb.net/test?retryWrites=true&w=majority'
    // const URL = 'mongodb+srv://userravi:1234@blog.fh8bs.mongodb.net/test?retryWrites=true&w=majority'<>;
    try {
    const myurl=  'mongodb+srv://userravi:1234@cluster0.zptpx.mongodb.net/test?retryWrites=true&w=majority'
        await mongoose.connect(myurl, { useNewUrlParser: true, useUnifiedTopology:true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;

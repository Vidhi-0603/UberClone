import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        
        const conn = await mongoose.connect(process.env.MONGO_URI);
        
        if(conn){
            console.log(`MongoDb connected successfully to ${conn.connection.host}`);
        }else{
            console.log("MongoDb connection failed");
        }

    } catch (err) {
        console.log(err.message);
    }
}

export default connectToDB;
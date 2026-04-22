import mongoose from "mongoose";
const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("successfully connected with the database");
    }
    catch(error){
        console.log("Error on connecting with the database...");
    }
}
export default connectDb;
import dotenv from "dotenv/config";
import connectDb from "./src/db/db.js";
import app from "./src/app.js";


const port=process.env.PORT||8848;
connectDb()
    .then(()=>{app.listen(port,()=>{
    console.log(`Server is running on the:http://localhost:${port}/`);
});})
    .catch((error)=>{
        console.log("Failed to connect with the database,Server not started...",error.message);
    })

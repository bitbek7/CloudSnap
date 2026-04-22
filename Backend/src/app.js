import express from "express";
import dbModel from "./model/db.model.js";
import multer from "multer";
import uploadFile from "./services/storage.service.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
const upload=multer({storage:multer.memoryStorage()});

app.post("/create-post", upload.single("image"),async (req, res) => {    //image is placeholder of key name that we have given in the postman while sending the file format data...
    try {
         if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }
       console.log(req.file);
       const result=await uploadFile(req.file.buffer,req.file.originalname);

       console.log(result);

      const post= await dbModel.create({
        image:result.url,
        caption:req.body.caption
      })
       res.status(200).json({message:"data uploaded sucessfully",data:post});
    } catch (error) {
            console.log(error);
        res.status(400).json({ message: `error on creating${error.message}` });
    }
});

app.get("/fetch/data", async (req, res) => {
    try {
        const fetchedData = await dbModel.find();
        res.status(200).json({ message:"Alll the available data in Database",data:fetchedData });
        console.log("Successfully fetched the data from the database");
    } catch (error) {
        res.status(400).json({ message: "error on fetching the data from database" });
    }
})
export default app;
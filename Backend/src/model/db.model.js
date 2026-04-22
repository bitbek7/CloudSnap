import mongoose from "mongoose";
const dbSchema = mongoose.Schema(
    {
        image: {
            type: String,
            required: true,

        },
        caption: {
            type: String,
            required: true,
            minLength: 10,

        }

    }, { timestamps: true });
const dbModel =mongoose.model("dbModel", dbSchema);
export default dbModel;
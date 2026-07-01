import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("MongoDB connect");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;
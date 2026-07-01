import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        username: String,
        email: String,
        password: String,
        role: String
    },
    {
        strict: "throw"
    }
);

export default model("User", UserSchema);
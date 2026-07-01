import { Schema, model } from "mongoose";

const ClientSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        }
    },
    {
        strict: "throw"
    }
);

export default model("Client", ClientSchema);
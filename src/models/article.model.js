import { Schema, model } from "mongoose";

const ArticleSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        stock: {
            type: Number,
            required: true,
            min: 0,
            validate: {
                validator: Number.isInteger,
                message: "Stock must be an integer"
            }
        }
    },
    {
        strict: "throw"
    }
);

export default model("Article", ArticleSchema);
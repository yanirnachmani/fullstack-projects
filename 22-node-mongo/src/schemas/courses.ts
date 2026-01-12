import { Schema } from "mongoose";

import { ICourse } from "../interfaces/courses";

export const courseSchema = new Schema<ICourse>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: true,
    }
});

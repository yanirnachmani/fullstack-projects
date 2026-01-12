import { connect } from "mongoose";
import courseRouter from "./routes/courses";
import express from "express";

import dotenv from "dotenv";
dotenv.config();

connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log(error));


const app = express();
app.use(express.json());

app.use("/api/courses", courseRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

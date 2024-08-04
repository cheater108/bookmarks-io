import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/users.js";

const app = express();

mongoose
    .connect("mongodb://127.0.0.1:27017/bookmarks-io")
    .then(() => console.log("connected to database"));

app.use(cors());
app.use("/api/users", userRouter);

app.listen(3000, () => {
    console.log("server started on port 3000");
});

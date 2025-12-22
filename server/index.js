import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/users.js";
import bucketRouter from "./routes/buckets.js";
import path from "path";

const app = express();

// mongoose
//     .connect(`mongodb://127.0.0.1:27017/bookmarks-io`)
//     .then(() => console.log("connected to database"));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRouter);
app.use("/api/buckets", bucketRouter);

// un comment this while deploying
app.use(express.static(path.resolve("dist")));

app.get("*", (req, res) => {
	res.sendFile(path.resolve("dist", "index.html"));
});

app.listen(3000, () => {
	console.log("server started on port 3000");
	mongoose
		.connect(process.env.MONGO_URI, { dbName: "bookmarks-io" })
		.then(() => console.log("connected to database"));
});

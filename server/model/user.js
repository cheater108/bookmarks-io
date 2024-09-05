import mongoose, { Schema } from "mongoose";

const user = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    dashboard: {
        type: Schema.Types.ObjectId,
        ref: "Bucket",
    },
});

const User = mongoose.model("User", user);

export default User;

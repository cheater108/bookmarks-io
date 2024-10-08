import mongoose, { Schema } from "mongoose";

const bucket = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    groups: [
        {
            name: {
                type: String,
                required: true,
            },
            links: [
                {
                    title: {
                        type: String,
                        required: true,
                        default: "Link",
                    },
                    link: {
                        type: String,
                        required: true,
                    },
                    description: {
                        type: String,
                        default: "",
                    },
                },
            ],
        },
    ],
});

const Bucket = mongoose.model("Bucket", bucket);

export default Bucket;

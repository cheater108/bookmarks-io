import mongoose from "mongoose";
import Bucket from "../model/bucket.js";
import User from "../model/user.js";

mongoose
    .connect("mongodb://127.0.0.1:27017/bookmarks-io")
    .then(() => console.log("connected to database"));

const data = [
    {
        name: "dusty rucket",
        groups: [
            {
                name: "Manga",
                links: [
                    {
                        title: "Onepunch-man",
                        link: "https://chapmanganato.to/manga-wd951838",
                    },
                    {
                        title: "Solo leveling",
                        link: "https://chapmanganato.to/manga-dr980474",
                    },
                    {
                        title: "Jujutsu Kaisen",
                        link: "https://chapmanganato.to/manga-ba979135",
                    },
                ],
            },
            {
                name: "songs",
                links: [
                    {
                        title: "Winning speech",
                        link: "https://www.youtube.com/watch?v=vsWxs1tuwDk",
                    },
                    {
                        title: "Band 4 Band",
                        link: "https://www.youtube.com/watch?v=pDddlvCfTiw&pp=ygUJYmFuZDRiYW5k",
                    },
                ],
            },
        ],
    },
];

async function initializeData() {
    await Bucket.deleteMany({});
    await User.deleteMany({});

    for (let bucket of data) {
        const b = new Bucket(bucket);
        // console.log(b.groups);
        await b.save();
    }

    const user_test = new User({
        username: "test",
        password: "test",
        email: "test",
    });
    user_test.dashboard = await Bucket.findOne({});
    await user_test.save();
    const test = await User.findOne({ username: "test" }).populate("dashboard");
    console.log(test);
    await mongoose.connection.close();
}

initializeData();

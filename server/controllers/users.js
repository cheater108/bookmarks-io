import User from "../model/user.js";
import Bucket from "../model/bucket.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

async function handleLogin(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.json({ message: "invalid username or password" });
    }
    const result = await bcrypt.compare(password, user.password);
    if (!result) {
        return res.json({ message: "invalid username or password" });
    }

    const token = jwt.sign(
        {
            username: user.username,
            dashboard_id: user.dashboard.toString(),
            id: user._id.toString(),
        },
        process.env.SIGN_KEY
    );
    res.json({ token });
}

async function handleSignUp(req, res) {
    const { username, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const dashboard = new Bucket({
        name: username,
        groups: [],
    });
    const user = new User({
        username,
        email,
        password: hash,
        dashboard: dashboard._id,
    });
    await dashboard.save();
    await user.save();
    res.status(201).json({ message: "user created" });
}

export { handleLogin, handleSignUp };

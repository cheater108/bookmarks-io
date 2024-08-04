import { Router } from "express";
import User from "../model/user.js";
import Bucket from "../model/bucket.js";

const route = Router();

route.get("/:id", async (req, res) => {
    const { id } = req.params;
    const dashboard = await User.findOne({ username: id }).populate(
        "dashboard"
    );
    if (dashboard) {
        res.json(dashboard);
        return;
    }
    res.json({
        return: "true",
    });
});

export default route;

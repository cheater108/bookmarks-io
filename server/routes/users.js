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
        // console.log(dashboard);
        res.json(dashboard);
        return;
    }
    res.json({
        return: "true",
    });
});

route.post("/:id/groups", async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const user = await User.findOne({ username: id });
    const dashboard = await Bucket.findById(user.dashboard._id);
    dashboard.groups.push({ name, links: [] });
    await dashboard.save();
    res.json({ status: true });
});

route.post("/:id/groups/:grp_id/bookmarks", async (req, res) => {
    const { id, grp_id } = req.params;
    const { name, link, desc } = req.body;
    const user = await User.findOne({ username: id });
    const dashboard = await Bucket.findById(user.dashboard._id);

    const ind = dashboard.groups.findIndex((e) => e._id.toString() === grp_id);
    if (ind > -1) {
        dashboard.groups[ind].links.push({
            title: name,
            link,
            description: desc,
        });
        await dashboard.save();
        res.json({ status: "done" });
    } else {
        res.json({ status: "not found" });
    }
});

export default route;

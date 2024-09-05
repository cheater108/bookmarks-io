import { Router } from "express";
import Bucket from "../model/bucket.js";
import { isAuthorizedUser } from "../utils/middlewares.js";

const route = Router();

route.get("/", isAuthorizedUser, async (req, res) => {
    const { dashboard_id } = req.user;
    const dashboard = await Bucket.findById(dashboard_id);
    if (dashboard) {
        // console.log(dashboard);
        res.json(dashboard);
        return;
    }
    res.json({
        error: "true",
    });
});

route.post("/groups", isAuthorizedUser, async (req, res) => {
    const { dashboard_id } = req.user;
    const { name } = req.body;
    const dashboard = await Bucket.findById(dashboard_id);
    dashboard.groups.push({ name, links: [] });
    await dashboard.save();
    res.json({ status: true });
});

route.post("/groups/:grp_id/bookmarks", isAuthorizedUser, async (req, res) => {
    const { dashboard_id } = req.user;
    const { grp_id } = req.params;
    const { name, link, desc } = req.body;
    const dashboard = await Bucket.findById(dashboard_id);

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

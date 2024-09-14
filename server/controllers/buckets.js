import Bucket from "../model/bucket.js";
import z from "zod";

async function sendDashboard(req, res) {
    const { dashboard_id } = req.user;
    const dashboard = await Bucket.findById(dashboard_id);
    if (dashboard) {
        res.json(dashboard);
        return;
    }
    res.json({
        error: "true",
    });
}

async function postGroup(req, res) {
    const { dashboard_id } = req.user;
    const groupSchema = z.object({
        name: z.string(),
    });
    const valid = groupSchema.safeParse(req.body);
    if (!valid.success) {
        const message = `${valid.error.issues[0].path[0]} ${valid.error.issues[0].message}`;
        return res.json({ error: message });
    }
    const { name } = req.body;

    const dashboard = await Bucket.findById(dashboard_id);
    if (!dashboard) {
        return res.json({ error: "not found" });
    }
    dashboard.groups.push({ name, links: [] });
    await dashboard.save();
    res.json({ status: true });
}

async function deleteGroup(req, res) {
    const { dashboard_id } = req.user;
    const { grp_id } = req.params;
    const dashboard = await Bucket.findById(dashboard_id);
    if (!dashboard) {
        return res.json({ error: "not found" });
    }
    const grp_ind = dashboard.groups.findIndex(
        (e) => e._id.toString() === grp_id
    );
    if (grp_ind > -1) {
        dashboard.groups.splice(grp_ind, 1);
        await dashboard.save();
        return res.json({ message: "done" });
    }
    return res.json({ error: "not found" });
}

async function postBookmark(req, res) {
    const { dashboard_id } = req.user;
    const { grp_id } = req.params;
    const { name, link, desc } = req.body;
    const bookmarkSchema = z.object({
        name: z.string().trim().min(1),
        link: z.string().trim().min(1),
    });

    const valid = bookmarkSchema.safeParse(req.body);
    if (!valid.success) {
        const message = `${valid.error.issues[0].path[0]} ${valid.error.issues[0].message}`;
        return res.json({ error: message });
    }
    const dashboard = await Bucket.findById(dashboard_id);
    if (!dashboard) {
        return res.json({ error: "not found" });
    }
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
}

async function getBookmark(req, res) {
    const { dashboard_id } = req.user;
    const { grp_id } = req.params;
    const { bookmark_id } = req.params;
    const dashboard = await Bucket.findById(dashboard_id);
    if (!dashboard) {
        return res.json({ error: "not found" });
    }
    const grp_ind = dashboard.groups.findIndex(
        (e) => e._id.toString() === grp_id
    );
    if (grp_ind > -1) {
        const bookmark_ind = dashboard.groups[grp_ind].links.findIndex(
            (e) => e._id.toString() === bookmark_id
        );
        if (bookmark_ind > -1) {
            return res.json(dashboard.groups[grp_ind].links[bookmark_ind]);
        }
    }
    return res.json({ error: "not found" });
}

async function editBookmark(req, res) {
    const { dashboard_id } = req.user;
    const { grp_id } = req.params;
    const { bookmark_id } = req.params;
    const { name, link, desc } = req.body;

    const bookmarkSchema = z.object({
        name: z.string().trim().min(1),
        link: z.string().trim().min(1),
    });

    const valid = bookmarkSchema.safeParse(req.body);
    if (!valid.success) {
        const message = `${valid.error.issues[0].path[0]} ${valid.error.issues[0].message}`;
        return res.json({ error: message });
    }
    const dashboard = await Bucket.findById(dashboard_id);
    if (!dashboard) {
        return res.json({ error: "not found" });
    }
    const grp_ind = dashboard.groups.findIndex(
        (e) => e._id.toString() === grp_id
    );
    if (grp_ind > -1) {
        const bookmark_ind = dashboard.groups[grp_ind].links.findIndex(
            (e) => e._id.toString() === bookmark_id
        );
        if (bookmark_ind > -1) {
            dashboard.groups[grp_ind].links[bookmark_ind] = {
                title: name,
                link,
                description: desc,
            };
            await dashboard.save();
            return res.json({ status: "done" });
        }
    }

    return res.json({ error: "not found" });
}

async function deleteBookmark(req, res) {
    const { dashboard_id } = req.user;
    const { grp_id } = req.params;
    const { bookmark_id } = req.params;

    const dashboard = await Bucket.findById(dashboard_id);
    if (!dashboard) {
        return res.json({ error: "not found" });
    }
    const grp_ind = dashboard.groups.findIndex(
        (e) => e._id.toString() === grp_id
    );
    if (grp_ind > -1) {
        const bookmark_ind = dashboard.groups[grp_ind].links.findIndex(
            (e) => e._id.toString() === bookmark_id
        );
        if (bookmark_ind > -1) {
            dashboard.groups[grp_ind].links = dashboard.groups[
                grp_ind
            ].links.filter((e) => e._id.toString() !== bookmark_id);
            await dashboard.save();
            return res.json({ status: "done" });
        }
    }

    return res.json({ error: "not found" });
}

export {
    sendDashboard,
    postGroup,
    deleteGroup,
    postBookmark,
    getBookmark,
    editBookmark,
    deleteBookmark,
};

import { Router } from "express";
import { isAuthorizedUser } from "../utils/middlewares.js";
import {
    deleteBookmark,
    deleteGroup,
    editBookmark,
    getBookmark,
    postBookmark,
    postGroup,
    sendDashboard,
} from "../controllers/buckets.js";

const route = Router();

route.get("/", isAuthorizedUser, sendDashboard);

route.post("/groups", isAuthorizedUser, postGroup);

route.post("/groups/:grp_id/bookmarks", isAuthorizedUser, postBookmark);

route.get(
    "/groups/:grp_id/bookmarks/:bookmark_id",
    isAuthorizedUser,
    getBookmark
);
route.put(
    "/groups/:grp_id/bookmarks/:bookmark_id",
    isAuthorizedUser,
    editBookmark
);
route.delete(
    "/groups/:grp_id/bookmarks/:bookmark_id",
    isAuthorizedUser,
    deleteBookmark
);

route.delete("/groups/:grp_id", isAuthorizedUser, deleteGroup);

export default route;

import api from "./api";

async function postBookmark(id, grp_id, bookmark) {
    await api.post(`/buckets/groups/${grp_id}/bookmarks`, bookmark, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
}

export default postBookmark;

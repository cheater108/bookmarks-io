import api from "./api";

async function updateBookmark(bookmark_id, grp_id, bookmark) {
    const res = await api.put(
        `/api/buckets/groups/${grp_id}/bookmarks/${bookmark_id}`,
        bookmark,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );
    return res.data;
}

export default updateBookmark;

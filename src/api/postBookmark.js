import api from "./api";

async function postBookmark(id, grp_id, bookmark) {
    await api.post(
        `http://localhost:3000/api/buckets/groups/${grp_id}/bookmarks`,
        bookmark,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );
}

export default postBookmark;

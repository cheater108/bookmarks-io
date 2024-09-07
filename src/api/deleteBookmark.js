import api from "./api";

async function deleteBookmark(bookmark_id, grp_id) {
    const res = await api.delete(
        `http://localhost:3000/api/buckets/groups/${grp_id}/bookmarks/${bookmark_id}`
    );
    return res.data;
}

export default deleteBookmark;

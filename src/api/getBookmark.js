import api from "./api";

async function getBookmark({ bookmark_id, grp_id }) {
    const res = await api.get(
        `/buckets/groups/${grp_id}/bookmarks/${bookmark_id}`
    );
    return res.data;
}

export default getBookmark;

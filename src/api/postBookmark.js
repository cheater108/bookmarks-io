import axios from "axios";

async function postBookmark(id, grp_id, bookmark) {
    await axios.post(
        `http://localhost:3000/api/users/${id}/groups/${grp_id}/bookmarks`,
        bookmark,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );
}

export default postBookmark;

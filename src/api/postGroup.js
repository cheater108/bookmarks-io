import axios from "axios";
async function postGroup(id, name) {
    const res = await axios.post(
        `http://localhost:3000/api/users/${id}/groups`,
        {
            name,
        },
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );
    return res.status;
}

export default postGroup;

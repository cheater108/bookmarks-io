import api from "./api";
async function postGroup(id, name) {
    const res = await api.post(
        `http://localhost:3000/api/buckets/groups`,
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

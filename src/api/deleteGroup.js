import api from "./api";

async function deleteGroup(grp_id) {
    const res = await api.delete(
        `http://localhost:3000/api/buckets/groups/${grp_id}`
    );
    return res.data;
}

export default deleteGroup;

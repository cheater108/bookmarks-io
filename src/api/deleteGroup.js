import api from "./api";

async function deleteGroup(grp_id) {
    const res = await api.delete(`/buckets/groups/${grp_id}`);
    return res.data;
}

export default deleteGroup;

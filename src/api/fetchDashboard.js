import api from "./api";

async function fetchDashboard(id) {
    const res = await api.get("/buckets/");
    if (res.data.error) {
        throw Error("Unauthorized");
    }
    return res.data;
}

export default fetchDashboard;

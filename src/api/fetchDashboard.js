import api from "./api";

async function fetchDashboard(id) {
    const res = await api.get("http://localhost:3000/api/buckets/");
    if (res.data.error) {
        return Error("Unauthorized");
    }
    return res.data;
}

export default fetchDashboard;

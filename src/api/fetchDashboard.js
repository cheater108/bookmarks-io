import api from "./api";

async function fetchDashboard(id) {
    const res = await api.get("http://localhost:3000/api/buckets/");
    console.log(res.data);
    if (res.data.error) {
        return Error("Unauthorized");
    }
    return res.data;
}

export default fetchDashboard;

async function fetchDashboard(id) {
    const dashboard = await fetch("http://localhost:3000/api/users/test");
    const dashData = await dashboard.json();
    return dashData;
}

export default fetchDashboard;

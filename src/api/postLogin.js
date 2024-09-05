import axios from "axios";

async function postLogin({ username, password }) {
    const res = await axios.post(
        `http://localhost:3000/api/user/login`,
        {
            username,
            password,
        },
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );
    if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        return;
    }
    localStorage.removeItem("token");
    throw Error("Login failed");
}

export default postLogin;

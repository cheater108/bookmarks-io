import axios from "axios";

async function postUser({ username, password, email }) {
    const res = await axios.post(
        `/api/user/signup`,
        {
            username,
            password,
            email,
        },
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );
    if (res.data) {
        return res.data;
    }
    localStorage.removeItem("token");
    throw Error("Login failed");
}

export default postUser;

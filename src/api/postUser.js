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

    if (res.data.error) {
        localStorage.removeItem("token");
        throw Error(res.data.error);
    }
    if (res.data) {
        return res.data;
    }
    localStorage.removeItem("token");
    throw Error("Signup failed");
}

export default postUser;

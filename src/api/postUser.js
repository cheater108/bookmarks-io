import api from "./api";

async function postUser({ username, password, email }) {
    const res = await api.post(
        `/user/signup`,
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

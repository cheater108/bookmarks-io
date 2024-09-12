import React, { useState } from "react";
import styles from "./SignIn.module.css";
import validateUserLogin from "../utils/validateUserLogin";
import postLogin from "../api/postLogin";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const navigate = useNavigate();
    const [user, setUser] = useState({ username: "", password: "" });
    const [error, setError] = useState({ username: false, login: false });

    function handleSubmit(e) {
        e.preventDefault();
        const res = validateUserLogin(user);
        setError(res.error);
        if (res.valid) {
            postLogin(user)
                .then(() => navigate("/dashboard"))
                .catch((err) => setError({ username: false, login: true }));
        }
    }

    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                {error.login && <p>&#9888; Incorrect username or password</p>}
                <input
                    type="text"
                    id="username"
                    placeholder="username"
                    name="username"
                    value={user.username}
                    onChange={(e) =>
                        setUser({ ...user, [e.target.name]: e.target.value })
                    }
                />
                <br />
                {error.username && <p>&#9888; Please provide valid username</p>}
                <input
                    type="password"
                    id="password"
                    placeholder="password"
                    name="password"
                    value={user.password}
                    onChange={(e) =>
                        setUser({ ...user, [e.target.name]: e.target.value })
                    }
                />
                <br />

                <button className={styles.btn} onClick={handleSubmit}>
                    Sign in
                </button>
            </form>
        </div>
    );
}

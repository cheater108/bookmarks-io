import React, { useState } from "react";
import styles from "./SignIn.module.css";
import validateUserLogin from "../utils/validateUserLogin";

export default function SignIn() {
    const [user, setUser] = useState({ username: "", password: "" });
    const [error, setError] = useState({ username: false, password: false });

    function handleSubmit(e) {
        e.preventDefault();
        const res = validateUserLogin(user);
        setError(res.error);
    }

    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
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

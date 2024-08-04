import { useState } from "react";
import validateUserRegistration from "../utils/validateUserRegistration";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [user, setUser] = useState({ username: "", password: "", email: "" });
    const [error, setError] = useState({
        username: false,
        password: false,
        email: false,
    });

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const res = validateUserRegistration(user);
        setError(res.error);
        console.log(res);
        if (res.valid) {
            navigate("/dashboard");
        }
    }

    return (
        <div
            className="content"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <form action="" className={styles.form}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={user.email}
                    onChange={(e) =>
                        setUser({ ...user, [e.target.name]: e.target.value })
                    }
                />
                {error.email && <p>&#9888; Please provide valid email</p>}

                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username"
                    value={user.username}
                    onChange={(e) =>
                        setUser({ ...user, [e.target.name]: e.target.value })
                    }
                />
                {error.username && <p>&#9888; Please provide valid username</p>}

                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    value={user.password}
                    onChange={(e) =>
                        setUser({ ...user, [e.target.name]: e.target.value })
                    }
                />
                {error.password && <p>&#9888; Please provide valid password</p>}

                <button className={styles.btn} onClick={handleSubmit}>
                    Sign up
                </button>
            </form>
        </div>
    );
}

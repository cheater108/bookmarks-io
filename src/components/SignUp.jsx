import { useState } from "react";
import validateUserRegistration from "../utils/validateUserRegistration";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import postUser from "../api/postUser";

export default function SignUp() {
    const [user, setUser] = useState({ username: "", password: "", email: "" });
    const [error, setError] = useState({
        username: false,
        password: false,
        email: false,
    });

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const res = validateUserRegistration(user);
        setError(res.error);
        if (res.valid) {
            postUser(user)
                .then(() => navigate("/signin"))
                .catch((err) => navigate("/signup"));
        }
    }

    return (
        <div className={styles.container}>
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

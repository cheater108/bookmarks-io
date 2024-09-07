import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <p className={styles.logo} onClick={() => navigate("/")}>
                    bookmarks-io
                </p>

                <p className={styles.link}>Add bookmark</p>
                <p className={styles.link}>Features</p>
            </div>
            <div className={styles.right}>
                {localStorage.getItem("token") ? (
                    <Link to="/">
                        <button
                            className={styles.sign_in}
                            onClick={() => localStorage.removeItem("token")}
                        >
                            Sign out
                        </button>
                    </Link>
                ) : (
                    <>
                        <Link to="/signin">
                            <button className={styles.sign_in}>Sign in</button>
                        </Link>
                        <Link to={"/signup"}>
                            <button className={styles.sign_up}>Sign up</button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export { Navbar };

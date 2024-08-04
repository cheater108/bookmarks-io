import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles.hero}>
            <p className={styles.para}>
                Bookmark all your favourite websites, articles etc. in oneplace.
            </p>
            <p className={styles.para}>
                Save them in cloud so even if they are removed you can have a
                copy.
            </p>
            <div className={styles.btns}>
                <Link to={"/signin"}>
                    <button className={styles.btn}>Sign in</button>
                </Link>
                <Link to={"/signup"}>
                    <button className={styles.btn}>Sign up</button>
                </Link>
            </div>
        </div>
    );
}

export { Home };

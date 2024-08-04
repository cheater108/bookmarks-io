import styles from "./Bookmark.module.css";
import extractDomain from "../utils/extractDomain";

// fav icon img url : http://www.google.com/s2/favicons?domain=www.google.com
export default function Bookmark({ title, link }) {
    const domain = extractDomain(link);
    function handleClick() {
        window.open(link, "_blank");
    }
    return (
        <div className={styles.link} onClick={handleClick}>
            <div className={styles.left}>
                <img
                    src={`https://api.statvoo.com/favicon/${domain}`}
                    alt=""
                    className={styles.icon}
                    width="20px"
                />{" "}
                <p className={styles.title}>{title}</p>&nbsp;
            </div>
            <span className={styles.italics}> - {domain}</span>
        </div>
    );
}

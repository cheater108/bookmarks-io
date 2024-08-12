import styles from "./Bookmark.module.css";
import extractDomain from "../utils/extractDomain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// fav icon img url : http://www.google.com/s2/favicons?domain=www.google.com
export default function Bookmark({ title, link, description }) {
    const domain = extractDomain(link);
    const [hover, setHover] = useState(false);
    function handleClick() {
        window.open(link, "_blank");
    }
    return (
        <div
            className={styles.link}
            onClick={handleClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className={styles.top}>
                <div className={styles.left}>
                    <img
                        src={`https://api.statvoo.com/favicon/${domain}`}
                        alt=""
                        className={styles.icon}
                        width="20px"
                    />{" "}
                    <p className={styles.title}>{title}</p>&nbsp;
                    <span className={styles.italics}> - {domain}</span>
                </div>
                <div className={styles.right}>
                    {hover && (
                        <i onClick={() => console.log("clicked pen")}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </i>
                    )}
                    {hover && (
                        <button className={styles.delete}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    )}
                </div>
            </div>
            {hover && (
                <div className={styles.below}>
                    <p className={styles.description}>{description}</p>
                </div>
            )}
        </div>
    );
}

import styles from "./Bookmark.module.css";
import extractDomain from "../utils/extractDomain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare,
    faTrash,
    faLink,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import EditBookmark from "../components/EditBookmark";
import DeleteBookmark from "./DeleteBookmark";

// fav icon img url : http://www.google.com/s2/favicons?domain=www.google.com
export default function Bookmark({ title, link, description, id }) {
    const domain = extractDomain(link);
    const [hover, setHover] = useState(false);
    const [editBook, setEditBook] = useState(false);
    const [del, setDelete] = useState(false);

    function handleClick() {
        setHover(!hover);
    }

    function handleLinkClick() {
        window.open(link, "_blank");
    }

    function handleEdit(e) {
        e.stopPropagation();
        setEditBook(true);
    }

    function handleDelete(e) {
        e.stopPropagation();
        setDelete(true);
    }
    return (
        <>
            <div
                className={styles.link}
                onClick={handleClick}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className={styles.top}>
                    <div className={styles.left}>
                        <img
                            src={`http://www.google.com/s2/favicons?domain=${domain}`}
                            alt=""
                            className={styles.icon}
                            width="20px"
                        />{" "}
                        <p className={styles.title}>{title}</p>&nbsp;
                        <span className={styles.italics}> - {domain}</span>
                    </div>
                    <div className={styles.right}>
                        {hover && (
                            <i onClick={handleEdit}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </i>
                        )}
                        {hover && (
                            <button
                                className={styles.delete}
                                onClick={handleDelete}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        )}
                    </div>
                </div>
                {hover && (
                    <div className={styles.below}>
                        <p className={styles.description}>{description}</p>
                        <p
                            className={styles.in_link}
                            href={link}
                            target="_blank"
                            onClick={handleLinkClick}
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLink} />
                            &nbsp; Link : &nbsp;
                            {link}
                        </p>
                    </div>
                )}
            </div>
            {editBook && (
                <EditBookmark toggleModal={setEditBook} bookmark_id={id} />
            )}
            {del && <DeleteBookmark setDelete={setDelete} bookmark_id={id} />}
        </>
    );
}

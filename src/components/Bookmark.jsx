import styles from "./Bookmark.module.css";
import extractDomain from "../utils/extractDomain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import EditBookmark from "../components/EditBookmark";
import DeleteBookmark from "./DeleteBookmark";

// fav icon img url : http://www.google.com/s2/favicons?domain=www.google.com
export default function Bookmark({ title, link, description, id }) {
    const domain = extractDomain(link);
    const [hover, setHover] = useState(false);
    const [editBook, setEditBook] = useState(false);
    const [del, setDelete] = useState(false);
    const [bookmark_id, setbookmark_id] = useState();
    function handleClick() {
        window.open(link, "_blank");
    }

    function handleEdit(e) {
        e.stopPropagation();
        setEditBook(true);
        setbookmark_id(id);
    }

    function handleDelete(e) {
        e.stopPropagation();
        setDelete(true);
        setbookmark_id(id);
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
                    </div>
                )}
            </div>
            {editBook && (
                <EditBookmark
                    modal={editBook}
                    toggleModal={setEditBook}
                    bookmark_id={bookmark_id}
                />
            )}
            {del && (
                <DeleteBookmark
                    setDelete={setDelete}
                    bookmark_id={bookmark_id}
                />
            )}
        </>
    );
}

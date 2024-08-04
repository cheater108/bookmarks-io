import React from "react";
import styles from "./NewBookmark.module.css";

export default function NewBookmark({ modal, toggleModal }) {
    return (
        <div
            className={styles.modal}
            style={{ display: modal ? "flex" : "none" }}
        >
            <form className={styles.form}>
                <input type="text" id="name" placeholder="name" />
                <br />
                <input type="text" id="link" placeholder="ex:google.com" />
                <br />
                <button>Add bookmark</button>
                <div className={styles.close} onClick={toggleModal}>
                    &#x2716;
                </div>
            </form>
        </div>
    );
}

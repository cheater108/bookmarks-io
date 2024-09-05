import React, { useContext, useRef } from "react";
import styles from "./NewBookmark.module.css";
import { DashboardContext } from "../pages/Dashboard";
import postBookmark from "../api/postBookmark";
import fetchDashboard from "../api/fetchDashboard";

export default function NewBookmark({ modal, toggleModal }) {
    const { selectedGrp, setDash, setSelectedGrp } =
        useContext(DashboardContext);
    const name = useRef();
    const link = useRef();
    const desc = useRef();
    async function addBookmarkToGroup(e) {
        e.preventDefault();
        if (selectedGrp) {
            const bookmark = {
                name: name.current.value,
                link: link.current.value,
                desc: desc.current.value,
            };
            await postBookmark("test", selectedGrp._id, bookmark);
        }
        toggleModal();
        const dashData = await fetchDashboard();
        setDash(dashData);

        setSelectedGrp(dashData.groups.find((e) => e._id === selectedGrp._id));
    }
    return (
        <div
            className={styles.modal}
            style={{ display: modal ? "flex" : "none" }}
        >
            <form
                method="post"
                className={styles.form}
                onSubmit={addBookmarkToGroup}
            >
                <input type="text" id="name" ref={name} placeholder="name" />
                <br />
                <input
                    type="text"
                    id="link"
                    ref={link}
                    placeholder="ex:google.com"
                />
                <br />
                <textarea
                    name="description"
                    id="description"
                    placeholder="Summary or why you want to save this site..."
                    rows="6"
                    ref={desc}
                ></textarea>
                <br />
                <button>Add bookmark</button>
                <div className={styles.close} onClick={toggleModal}>
                    &#x2716;
                </div>
            </form>
        </div>
    );
}

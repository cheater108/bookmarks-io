import React, { useContext, useEffect, useRef } from "react";
import styles from "./NewBookmark.module.css";
import { DashboardContext } from "../pages/Dashboard";
import postBookmark from "../api/postBookmark";
import fetchDashboard from "../api/fetchDashboard";
import getBookmark from "../api/getBookmark";
import updateBookmark from "../api/updateBookmark";

export default function EditBookmark({ toggleModal, bookmark_id }) {
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
            await updateBookmark(bookmark_id, selectedGrp._id, bookmark);
        }
        toggleModal();
        const dashData = await fetchDashboard();
        setDash(dashData);
        setSelectedGrp(dashData.groups.find((e) => e._id === selectedGrp._id));
    }

    useEffect(() => {
        async function loadBookmark() {
            const data = await getBookmark({
                grp_id: selectedGrp._id,
                bookmark_id,
            });
            name.current.value = data.title;
            link.current.value = data.link;
            desc.current.value = data.description;
        }
        loadBookmark();
    });
    return (
        <div className={styles.modal}>
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
                <button>Update bookmark</button>
                <div
                    className={styles.close}
                    onClick={() => toggleModal(false)}
                >
                    &#x2716;
                </div>
            </form>
        </div>
    );
}

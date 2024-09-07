import deleteBookmark from "../api/deleteBookmark";
import { DashboardContext } from "../pages/Dashboard";
import styles from "./DeleteBookmark.module.css";
import React, { useContext } from "react";
import fetchDashboard from "../api/fetchDashboard";

function DeleteBookmark({ setDelete, bookmark_id }) {
    const { selectedGrp, setDash, setSelectedGrp } =
        useContext(DashboardContext);
    function handleSubmit(e) {
        e.preventDefault();
    }
    async function handleDelete() {
        await deleteBookmark(bookmark_id, selectedGrp._id);

        const dashData = await fetchDashboard();
        setDash(dashData);
        setSelectedGrp(dashData.groups.find((e) => e._id === selectedGrp._id));
        setDelete(false);
    }
    return (
        <div className={styles.modal}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1>Delete bookmark ?</h1>
                <div className={styles.actions}>
                    <button className={styles.yes} onClick={handleDelete}>
                        <h1>Yes</h1>
                    </button>
                    <button
                        className={styles.no}
                        onClick={() => setDelete(false)}
                    >
                        <h1>No</h1>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default DeleteBookmark;

import { DashboardContext } from "../pages/Dashboard";
import styles from "./DeleteBookmark.module.css";
import React, { useContext } from "react";
import fetchDashboard from "../api/fetchDashboard";
import deleteGroup from "../api/deleteGroup";

function DeleteGroup({ setDelete }) {
    const { selectedGrp, setDash, setSelectedGrp } =
        useContext(DashboardContext);
    function handleSubmit(e) {
        e.preventDefault();
    }
    async function handleDelete() {
        await deleteGroup(selectedGrp._id);

        const dashData = await fetchDashboard();
        setSelectedGrp(false);
        setDash(dashData);
        setDelete(false);
    }
    return (
        <div className={styles.modal}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1>Delete group ?</h1>
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

export default DeleteGroup;

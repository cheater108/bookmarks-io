import React, { useContext } from "react";
import styles from "./GroupMenu.module.css";
import { DashboardContext } from "../pages/Dashboard";
export default function GroupMenu({ name, id }) {
    const {
        dash: { groups },
        setSelectedGrp,
    } = useContext(DashboardContext);
    function handleClick(curr_id) {
        for (let grp of groups) {
            if (grp._id === curr_id) setSelectedGrp(grp);
        }
    }
    return (
        <div className={styles.group} onClick={() => handleClick(id)}>
            {name}
        </div>
    );
}

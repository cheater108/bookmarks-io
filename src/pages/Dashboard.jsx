import React, { useEffect, useState } from "react";
import DashboardTop from "../components/DashboardTop";
import styles from "./Dashboard.module.css";
import GroupList from "../components/GroupList";
import Bookmarks from "../components/Bookmarks";
import NewBookmark from "../components/NewBookmark";

export default function Dashboard() {
    const [modal, setModal] = useState(false);
    const [color, setColor] = useState(0);
    const [dash, setDash] = useState({});
    function toggleModal() {
        setModal(!modal);
    }

    useEffect(() => {
        async function fetchData() {
            const dashboard = await fetch(
                "http://localhost:3000/api/users/test"
            );
            const dashData = await dashboard.json();

            setDash(dashData.dashboard);
        }
        fetchData();
    }, []);
    return (
        <div className="content">
            <DashboardTop
                color={color}
                setColor={setColor}
                dashName={dash?.name}
            />
            <div className={styles.below}>
                <div className={styles.div1}>div1</div>
                <div className={styles.div2}>div2</div>
                {/* <GroupList groups={dash?.groups} /> */}
                {/* <Bookmarks toggleModal={toggleModal} /> */}
                {/* <SiteFrame /> */}
            </div>
            <NewBookmark modal={modal} toggleModal={toggleModal} />
        </div>
    );
}

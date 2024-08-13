import React, { useEffect, useState } from "react";
import DashboardTop from "../components/DashboardTop";
import styles from "./Dashboard.module.css";
import GroupList from "../components/GroupList";
import Bookmarks from "../components/Bookmarks";
import NewBookmark from "../components/NewBookmark";
import { createContext } from "react";
import fetchDashboard from "../api/fetchDashboard";

export const DashboardContext = createContext();

export default function Dashboard() {
    const [modal, setModal] = useState(false);
    const [color, setColor] = useState(0);
    const [dash, setDash] = useState({});
    const [selectedGrp, setSelectedGrp] = useState(false);
    function toggleModal() {
        setModal(!modal);
    }

    useEffect(() => {
        async function fetchData() {
            const dashData = await fetchDashboard();
            console.log(dashData.dashboard);
            setDash(dashData.dashboard);
        }
        fetchData();
    }, []);
    return (
        <div className={styles.container}>
            <DashboardContext.Provider
                value={{ dash, setDash, selectedGrp, setSelectedGrp }}
            >
                <div className={styles.inner_container}>
                    <DashboardTop
                        color={color}
                        setColor={setColor}
                        dashName={dash?.name}
                    />
                    <div className={styles.below}>
                        <div className={styles.div1}>
                            <GroupList groups={dash?.groups} />
                        </div>
                        <div className={styles.div2}>
                            {selectedGrp && (
                                <Bookmarks toggleModal={toggleModal} />
                            )}
                        </div>

                        {/* <SiteFrame /> */}
                    </div>
                </div>
                <NewBookmark modal={modal} toggleModal={toggleModal} />
            </DashboardContext.Provider>
        </div>
    );
}

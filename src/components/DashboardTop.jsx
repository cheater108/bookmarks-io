import React, { useContext, useRef } from "react";
import styles from "./DashboardTop.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import postGroup from "../api/postGroup";
import { DashboardContext } from "../pages/Dashboard";
import fetchDashboard from "../api/fetchDashboard";

export default function DashboardTop({ color, setColor, dashName }) {
    const { setDash } = useContext(DashboardContext);
    const inputRef = useRef();
    const colors = ["#ffff7e", "#9aff7e", "#7edaff", "#db7eff", "#ff7e9f"];

    function handleColor(ind) {
        setColor(ind);
    }

    async function addGroup() {
        if (inputRef.current.value.length > 0) {
            await postGroup("test", inputRef.current.value);
            inputRef.current.value = "";
            const dashData = await fetchDashboard();
            setDash(dashData);
        }
    }

    return (
        <div className={styles.top}>
            <div className={styles.left}>
                <input
                    className={styles.addGroup}
                    type="text"
                    placeholder="Add group"
                    ref={inputRef}
                />
                <button type="submit" className={styles.btn} onClick={addGroup}>
                    <FontAwesomeIcon icon={faPlus} size="xs" />
                </button>
            </div>
            <div className={styles.colors}>
                {colors.map((c, ind) => {
                    if (ind === color) {
                        return (
                            <div
                                key={c}
                                style={{
                                    backgroundColor: c,
                                    border: "2px solid blue",
                                }}
                                className={styles.btn}
                                onClick={() => handleColor(ind)}
                            ></div>
                        );
                    }
                    return (
                        <div
                            key={c}
                            style={{
                                backgroundColor: c,
                                border: "1px solid rgba(0,0,0,0.1)",
                            }}
                            className={styles.btn}
                            onClick={() => handleColor(ind)}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
}

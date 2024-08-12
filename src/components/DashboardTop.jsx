import React from "react";
import styles from "./DashboardTop.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-router-dom";

export default function DashboardTop({ color, setColor, dashName }) {
    const colors = ["#ffff7e", "#9aff7e", "#7edaff", "#db7eff", "#ff7e9f"];
    function handleColor(ind) {
        setColor(ind);
    }
    return (
        <div className={styles.top}>
            <div className={styles.left}>
                <input
                    className={styles.addGroup}
                    type="text"
                    placeholder="Add group"
                />
                <button type="submit" className={styles.btn}>
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

import React from "react";
import styles from "./GroupMenu.module.css";
export default function GroupMenu({ name }) {
    return <div className={styles.group}>{name}</div>;
}

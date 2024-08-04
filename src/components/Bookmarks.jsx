import { useContext } from "react";
import Bookmark from "./Bookmark";
import styles from "./Bookmarks.module.css";
import { DashboardContext } from "../pages/Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Bookmarks({ toggleModal }) {
    const { selectedGrp } = useContext(DashboardContext);
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>{selectedGrp.name}</h1>
            <div className={styles.links}>
                {selectedGrp.links.map((e) => (
                    <Bookmark title={e.title} link={e.link} />
                ))}
            </div>
            <button className={styles.addbtn} onClick={toggleModal}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
}

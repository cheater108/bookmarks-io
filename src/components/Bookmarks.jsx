import { useContext, useState } from "react";
import Bookmark from "./Bookmark";
import styles from "./Bookmarks.module.css";
import { DashboardContext } from "../pages/Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import DeleteGroup from "./DeleteGroup";

export default function Bookmarks({ toggleModal }) {
    const { selectedGrp } = useContext(DashboardContext);
    const [delGroup, setDelGroup] = useState(false);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading_container}>
                    <h1 className={styles.heading}>{selectedGrp.name}</h1>
                    <div className={styles.btns}>
                        <button
                            className={styles.delete}
                            onClick={() => setDelGroup(true)}
                        >
                            <FontAwesomeIcon icon={faTrash} size="xl" />
                        </button>
                        <button className={styles.addbtn} onClick={toggleModal}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </div>
                <div className={styles.links}>
                    {selectedGrp.links.map((e) => (
                        <Bookmark
                            title={e.title}
                            link={e.link}
                            description={e.description}
                            id={e._id}
                            key={e._id}
                        />
                    ))}
                </div>
            </div>
            {delGroup && <DeleteGroup setDelete={setDelGroup} />}
        </>
    );
}

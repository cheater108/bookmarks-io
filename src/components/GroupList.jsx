import styles from "./GroupList.module.css";
import GroupMenu from "./GroupMenu";

export default function GroupList({ groups }) {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>Groups</div>
            <div className={styles.groups}>
                {groups?.map((ele) => {
                    return (
                        <GroupMenu key={ele._id} name={ele.name} id={ele._id} />
                    );
                })}
            </div>
        </div>
    );
}

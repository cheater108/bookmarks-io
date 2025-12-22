import styles from "./FrameView.module.css";

function FrameView({ toggleModal, url }) {
    return (
        <div className={styles.modal}>
            <iframe className={styles.frame} src={url} frameborder="0"></iframe>
            <div className={styles.close} onClick={() => toggleModal(false)}>
                &#x2716;
            </div>
        </div>
    );
}

export default FrameView;

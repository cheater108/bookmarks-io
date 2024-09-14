import styles from "./ErrorFallback.module.css";

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div className={styles.modal}>
            <div className={styles.dialog}>
                <h1>&#9888; Error</h1>
                <p>{error.message}</p>
                <div className={styles.close}>&#x2716;</div>
            </div>
        </div>
    );
}

export default ErrorFallback;

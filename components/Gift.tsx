import styles from '../styles/Gift.module.css';

export default function Gift() {
    return (
        <div className={styles.gift}>
            <div className={styles.head}></div>
            <div className={styles.body}></div>
            <div className={styles.loop1}></div>
            <div className={styles.loop2}></div>
        </div>
    );
}
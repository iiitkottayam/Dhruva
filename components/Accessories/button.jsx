import styles from "../ComingSoon/Coming.module.css";
export function HButton(props) {
    return(
        <div className={styles.btndiv}>
            <button className={styles.btnh}>{props.name}&emsp;{props.icon}</button>
        </div>
    );
};
export function HButtonLight(props) {
    return(
        <div className={styles.btndiv}>
            <button className={styles.btnhl}>{props.name}&emsp;{props.icon}</button>
        </div>
    );
};
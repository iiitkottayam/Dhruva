import styles from "../ComingSoon/Coming.module.css";
export default function HButton(props) {
    return(
        <div className={styles.btndiv}>
            <button className={styles.btnh}>{props.name}</button>
        </div>
    );
};
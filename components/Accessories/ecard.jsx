import classNames from 'classnames'
import styles from './ecard.module.css'
export default function Ecard(props) {
    return(
        <div className={styles.eventcard}>
            <h2 className={styles.eventname}>{props.name}</h2>
            <p  className={styles.eventtime}>{props.time}</p>
        </div>
    );
};
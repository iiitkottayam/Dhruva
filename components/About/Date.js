import styles from '../../styles/Date.module.css'
export const Date = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.date_title}>
                {props.day} <sup>{props.subtxt}</sup>
            </h1>
            <h2 className={styles.month_title}>{props.month}</h2>
        </div>
    )
}

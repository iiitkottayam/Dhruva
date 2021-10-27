import styles from '/styles/LeaderboardSmallData.module.css'
const LeadeboardSmallDataRow = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.pos}>
              {props.rank}
            </div>
            <div className={styles.name}>
              {props.name}
            </div>
            <div className={styles.score}>
              {props.college}
            </div>
        </div>
    )
}

export default LeadeboardSmallDataRow

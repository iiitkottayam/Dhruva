import styles from '/styles/LeaderboardSmallData.module.css'
import LeaderboardData from './LeaderboardData'
import LeadeboardSmallDataRow from './LeadeboardSmallDataRow'
const LeaderboardSmallData = () => {
    const leaderboard = LeaderboardData
    const Top3 = leaderboard.slice(0, 3)
    const rest = leaderboard.slice(3, leaderboard.length)
    return (
        <div>
            <div className={styles.top3}>
                <div className={`${styles.two} ${styles.item}`}>
                    <div className={styles.pos}>2</div>
                    <div className={styles.pic}></div>
                    <div className={styles.name}>{Top3[1].name}</div>
                    <div className={styles.name}>{Top3[1].college}</div>
                </div>
                <div className={`${styles.one} ${styles.item}`}>
                    <div className={styles.pos}>1</div>
                    <div className={styles.pic}></div>
                    <div className={styles.name}>{Top3[0].name}</div>
                    <div className={styles.name}>{Top3[0].college}</div>
                </div>
                <div className={`${styles.three} ${styles.item}`}>
                    <div className={styles.pos}>3</div>
                    <div className={styles.pic}></div>
                    <div className={styles.name}>{Top3[2].name}</div>
                    <div className={styles.name}>{Top3[2].college}</div>
                </div>
            </div>
            <div className = {styles.list}>
            {rest.map((val) => (
                            <LeadeboardSmallDataRow
                            key = {val.key}
                            rank = {val.id} 
                            name = {val.name}
                            college = {val.college}
                        />  ))}
            </div>
        </div>
    )
}

export default LeaderboardSmallData

import styles from '/styles/LeaderboardHeading.module.css'
const LeaderboardHeading = (props) => {
    return (
        <div className = {styles.container}>
            <div className={styles.Heading}>
                <h1>{props.title}</h1>
                <p>Leaderboard</p>               
            </div>
        </div>
    )
}

export default LeaderboardHeading

import styles from '/styles/LeaderboardHeading.module.css'
import { useRouter } from 'next/router'
const LeaderboardHeading = () => {

    const router = useRouter();
    const title = router.query["nam"];

    return (
        <div className = {styles.container}>
            <div className={styles.Heading}>
                <h1>{title}</h1>
                <p>Leaderboard</p>               
            </div>
        </div>
    )
}

export default LeaderboardHeading

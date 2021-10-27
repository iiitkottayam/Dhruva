import styles from '/styles/LeaderboardSmallData.module.css'
import LeadeboardSmallDataRow from './LeadeboardSmallDataRow'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then(res => res.json());

function LeaderboardSmallData(){
    
    const router = useRouter();
    const docSheet = "https://opensheet.vercel.app/" + router.query["val"] + "/Sheet1"
    const {data, error} = useSWR(docSheet,fetcher);
    
    if(error) return "An error has occured !";

    return (
        <div>
            {
                data ? (
                    <div>
                        <div className={styles.top3}>
                            <div className={`${styles.two} ${styles.item}`}>
                                <div className={styles.pos}>2</div>
                                <div className={styles.pic}></div>
                                <div className={styles.name}>{data[1]["Name"]}</div>
                                <div className={styles.name}>{data[1]["Institute"]}</div>
                            </div>
                            <div className={`${styles.one} ${styles.item}`}>
                                <div className={styles.pos}>1</div>
                                <div className={styles.pic}></div>
                                <div className={styles.name}>{data[0]["Name"]}</div>
                                <div className={styles.name}>{data[0]["Institute"]}</div>
                            </div>
                            <div className={`${styles.three} ${styles.item}`}>
                                <div className={styles.pos}>3</div>
                                <div className={styles.pic}></div>
                                <div className={styles.name}>{data[2]["Name"]}</div>
                                <div className={styles.name}>{data[2]["Institute"]}</div>
                            </div>
                        </div>
                        <div className = {styles.list}>
                        {(data.slice(3, data.length)).map((val) => (
                                        <LeadeboardSmallDataRow
                                        key = {val["key"]}
                                        rank = {val["Position"]} 
                                        name = {val["Name"]}
                                        college = {val["Institute"]}
                                    />  ))}
                        </div>
                    </div>
                ):(
                    "Loading"
                )
            }
        </div>
    )

    
    /* const Top3 = leaderboard.slice(0, 3);
    const rest = leaderboard.slice(3, leaderboard.length)

    console.log(leaderboard, Top3); */
    /* return (
        <div>
            <div className={styles.top3}>
                <div className={`${styles.two} ${styles.item}`}>
                    <div className={styles.pos}>2</div>
                    <div className={styles.pic}></div>
                    <div className={styles.name}>{Top3[1].Name}</div>
                    <div className={styles.name}>{Top3[1].Institute}</div>
                </div>
                <div className={`${styles.one} ${styles.item}`}>
                    <div className={styles.pos}>1</div>
                    <div className={styles.pic}></div>
                    <div className={styles.name}>{Top3[0].Name}</div>
                    <div className={styles.name}>{Top3[0].Institute}</div>
                </div>
                <div className={`${styles.three} ${styles.item}`}>
                    <div className={styles.pos}>3</div>
                    <div className={styles.pic}></div>
                    <div className={styles.name}>{Top3[2].Name}</div>
                    <div className={styles.name}>{Top3[2].Institute}</div>
                </div>
            </div>
            <div className = {styles.list}>
            {rest.map((val) => (
                            <LeadeboardSmallDataRow
                            key = {val.key}
                            rank = {val.Position} 
                            name = {val.Name}
                            college = {val.Institute}
                        />  ))}
            </div>
        </div>
    ) */
}

export default LeaderboardSmallData

import styles from '/styles/LeaderboardSmallData.module.css'
import LeadeboardSmallDataRow from './LeadeboardSmallDataRow'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Loader from "react-loader-spinner";

const fetcher = (url) => fetch(url).then(res => res.json());

function LeaderboardSmallData(){
    
    const router = useRouter();
    const docSheet = "https://opensheet.vercel.app/" + router.query["val"] + "/Sheet1"
    const {data, error} = useSWR(docSheet,fetcher);
    var keyData = [];  
    if(error) return "An error has occured !";
    

    return (
        <div>
            {
                data ? (

                    <div>
                        {keyData = Object.keys(data[0])}
                        <div className={styles.top3}>

                            {router.query["nam"] != "Stick-To-It" 
                            ? 
                                <div className={`${styles.two} ${styles.item}`}>
                                    <div className={styles.pos}>{data[1][keyData[0]]}</div>
                                    <div className={styles.pic}></div>
                                    <div className={`${styles.name} ${styles.nameUnder}`}>{data[1][keyData[1]]}</div>
                                    <div className={styles.name}>{data[1][keyData[2]]}</div>
                                </div>
                            :
                            ""    
                            }
                            
                            <div className={`${styles.one} ${styles.item}`}>
                                <div className={styles.pos}>{data[0][keyData[0]]}</div>
                                <div className={styles.pic}></div>
                                <div className={`${styles.name} ${styles.nameUnder}`}>{data[0][keyData[1]]}</div>
                                <div className={styles.name}>{data[0][keyData[2]]}</div>
                            </div>
                            {router.query["nam"] != "Stick-To-It" 
                            ?
                                <div className={`${styles.three} ${styles.item}`}>
                                    <div className={styles.pos}>{data[2][keyData[0]]}</div>
                                    <div className={styles.pic}></div>
                                    <div className={`${styles.name} ${styles.nameUnder}`}>{data[2][keyData[1]]}</div>
                                    <div className={styles.name}>{data[2][keyData[2]]}</div>
                                </div>
                            :
                            ""    
                            }
                            
                        </div>
                        <div className = {styles.list}>
                        {(data.slice(3, data.length)).map((val) => (
                                        <LeadeboardSmallDataRow
                                        key = {val["key"]}
                                        rank = {val[keyData[0]]} 
                                        name = {val[keyData[1]]}
                                        college = {val[keyData[2]]}
                                    />  ))}
                        </div>
                    </div>
                ):(
                    <Loader color="#8c58fc" type="Puff"/>
                )
            }
        </div>
    )

}

export default LeaderboardSmallData

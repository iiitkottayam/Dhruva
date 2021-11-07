import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'; 
import { MDBContainer, MDBIframe } from "mdbreact";
import Loader from "react-loader-spinner";
import styles from "./Leaderboard.module.css";

const Board = () => {

    const [load, setLoad] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoad(false);
        },2000);
    });

    const router = useRouter();
    const docSheet = "https://opensheet.vercel.app/" + router.query["val"] + "/Sheet1";
    const title = router.query["nam"];
    
    return (
        <>
            <div className = {styles.hdn1}>{title}</div>
            <h4 className = {styles.hdn2}>Leaderboard</h4>
            {load ? <Loader color="#8c58fc" type="Puff"/> 
            : 
                <MDBContainer className="text-center">
                    <MDBIframe src = {"https://ishaan5199.github.io/Data-Table/?val=" + router.query["val"]}/>
                </MDBContainer>
            }
        </>
        
    )
}

export default Board

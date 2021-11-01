import { useRouter } from 'next/router'
import { MDBContainer, MDBIframe } from "mdbreact";
import Loader from "react-loader-spinner";
import styles from "./Leaderboard.module.css";

const Board = () => {

    const router = useRouter();
    const docSheet = "https://opensheet.vercel.app/" + router.query["val"] + "/Sheet1";
    const title = router.query["nam"];
    
    return (
        <>
            <div className = {styles.hdn1}>{title}</div>
            <h4 className = {styles.hdn2}>Leaderboard</h4>
            <div id="loader"><Loader color="#8c58fc" type="Puff"/></div>
            <MDBContainer className="text-center" onLoad = {() => document.getElementById("loader").style.display = "none"}>
                <MDBIframe src = {"https://ishaan5199.github.io/Data-Table/?val=" + router.query["val"]}/>
            </MDBContainer>
        </>
        
    )
}

export default Board

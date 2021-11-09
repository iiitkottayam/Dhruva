import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import IframeResizer from 'iframe-resizer-react';
import Loader from "react-loader-spinner";
import styles from "./Leaderboard.module.css";

const Board = () => {

    const [load, setLoad] = useState(true);
    var frameHeight = 0;
    
    const handleResize = () => {
        var frame = document.getElementById("dynamic");
        frameHeight = frameHeight == 0 ? frame.style.getPropertyValue("height") : frameHeight;
 
        if (window.innerWidth >= 900) {
            frame.style.setProperty("height", frameHeight.toString(), "important")
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setLoad(false);
        },3000);

        window.addEventListener("resize", handleResize);
    });

    const router = useRouter();
    const title = router.query["nam"];
    
    return (
        <>
            <div className = {styles.hdn1}>{title}</div>
            <h4 className = {styles.hdn2}>Leaderboard</h4>
            {load ? <Loader color="#8c58fc" type="Puff"/> 
            : 
                <IframeResizer
                    src = {"https://ishaan5199.github.io/Data-Table/?val=" + router.query["val"]}
                    style = {{ width: '1px', minWidth: '90%', marginBottom: '5rem'}}
                    frameBorder = "0"
                    id = "dynamic"
                />
            }
        </>
        
    )
}

export default Board

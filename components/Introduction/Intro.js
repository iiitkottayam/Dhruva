import React, { useEffect, useState } from 'react'
import styles from '../../styles/Intro.module.css'
import Cookies from 'universal-cookie';
const Intro = () => {

    // TODO : COOKIE SYSTEM SOON - MAYBE...
    // const [vis, setVis] = useState(0)
    // useEffect(()=>{
    //     if(localStorage.getItem("visit") == null)
    //         localStorage.setItem("visit", "0");
    //     setVis = parseInt(localStorage.getItem("visit"));
    //     setVis++;
    //     localStorage.setItem("visit", x);
    //     if (setVis > 5) {
    //         localStorage.setItem("bricks", "11");
    //     }
    //     }, [])
    return (
        <div className={styles.container}>
            <div className={styles.textWrapper}>
                <div className={`${styles.text3} ${styles.text}`}>DHRUVA</div>
                <div className={`${styles.text4} ${styles.text}`}>DHRUVA</div>
                <div className={`${styles.text5} ${styles.text}`}>DHRUVA</div>
                <div className={`${styles.text6} ${styles.text}`}>DHRUVA</div>
                <div className={`${styles.text7} ${styles.text}`}>DHRUVA</div>
                <div className={`${styles.text8} ${styles.text}`}>DHRUVA</div>
                <div className={`${styles.text9} ${styles.text}`}>DHRUVA</div>
            </div>
        </div>
    )
}

export default Intro

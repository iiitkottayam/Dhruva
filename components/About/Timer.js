import React, { useEffect, useState } from "react";
import moment from "moment";
import styles from '../../styles/Timer.module.css'
const Timer = ({setShowTimer}) => {
    const targetTime = moment("2021-09-04");
    const [currentTime, setCurrentTime] = useState(moment());
    const timeBetween = moment.duration(targetTime.diff(currentTime) > 0 ? targetTime.diff(currentTime) : 0);
      
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentTime(moment());
        }, 1000);
        if(timeBetween == 0)
            setShowTimer(false);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.time_container}>
                <h1>{timeBetween.days()}</h1>
                <h2>days</h2>
            </div>
            <div className={styles.vertical}></div>
            <div className={styles.time_container}>
                <h1>{timeBetween.hours()}</h1>
                <h2>hours</h2>
            </div>
            <div className={styles.vertical}></div>
            <div className={styles.time_container}>
                <h1>{timeBetween.minutes()}</h1>
                <h2>minutes</h2>
            </div>
            <div className={styles.vertical}></div>
            <div className={styles.time_container}>
                <h1>{timeBetween.seconds()}</h1>
                <h2>seconds</h2>
            </div>
        </div>
    )
}

export default Timer

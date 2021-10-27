import React, { useEffect, useState } from 'react'
import moment from 'moment'
import styles from '../../styles/Timer.module.css'

const Timer = ({ setShowTimer }) => {
    const targetTime = moment('2021-10-28 18:00')
    const [currentTime, setCurrentTime] = useState(moment())
    const timeBetween = moment.duration(
        targetTime.diff(currentTime) > 0 ? targetTime.diff(currentTime) : 0,
    )

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment())
        }, 1000)
        if (timeBetween == 0) setShowTimer(false)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.time_container}>
                <span>{targetTime.diff(currentTime, 'days')}</span>
                <div>
                    <p>days</p>
                </div>
            </div>
            <div className={styles.vertical}></div>
            <div className={styles.time_container}>
                <span>{timeBetween.hours()}</span>
                <div>
                    <p>hours</p>
                </div>
            </div>
            <div className={styles.vertical}></div>
            <div className={styles.time_container}>
                <span>{timeBetween.minutes()}</span>
                <div>
                    <p>minutes</p>
                </div>
            </div>
            <div className={styles.vertical}></div>
            <div className={styles.time_container}>
                <span>{timeBetween.seconds()}</span>
                <div>
                    <p>seconds</p>
                </div>
            </div>
        </div>
    )
}

export default Timer

import styles from './TL.module.css'
import { useState } from 'react'
import classNames from 'classnames'


export default function Timeline() {
    const [day1, setday1] = useState(false);
    const [day2, setday2] = useState(false);
    const [day3, setday3] = useState(false);
    const handleday1 = () => {
        setday1(!day1);
        setday2(false);
        setday3(false);
    }
    const handleday2 = () => {
        setday2(!day2);
        setday1(false);
        setday3(false);
    }
    const handleday3 = () => {
        setday3(!day3);
        setday2(false);
        setday1(false);
    }
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <p className={styles.err}>Timeline</p>
            </div>
            <div className={styles.tabs}>
                <div className={styles.days}>
                    <div className={styles.borderwrap} onClick={handleday1}>
                        <div className={styles.wrapper}>
                        </div>
                        <div className={styles.daycards}>
                            <h2 className={styles.dayHeading}>Day 1</h2>
                            <p className={styles.daydesc}>Lorem Ipsem</p>
                        </div>
                        <div className={styles.inner}>

                        </div>
                    </div>
                    <div className={styles.events}>
                    <div className={classNames(
                                                styles.eventcard,
                                                day1 && styles.clicked
                                            )}><a href="#">
                        <p className={styles.eventname}>Event1
                        </p>
                        <p className={styles.eventtime}>4:30 - 6:00</p></a>
                    </div>
                    <div className={classNames(
                                                styles.eventcard,
                                                day1 && styles.clicked
                                            )}><a href="#">
                        <p className={styles.eventname}>Event1</p>
                        <p className={styles.eventtime}>4:30 - 6:00</p></a>
                    </div>
                    <div className={classNames(
                                                styles.eventcard,
                                                day1 && styles.clicked
                                            )}><a href="#">
                        <p className={styles.eventname}>Event1</p>
                        <p className={styles.eventtime}>4:30 - 6:00</p></a>
                    </div></div>
                </div>
                <div className={styles.days}>
                <div className={styles.borderwrap} onClick={handleday2}>
                        <div className={styles.wrapper}>
                        </div>
                        <div className={styles.daycards}>
                            <h2 className={styles.dayHeading}>Day 1</h2>
                            <p className={styles.daydesc}>Lorem Ipsem</p>
                        </div>
                        <div className={styles.inner}>

                        </div>
                    </div>
                    <div className={styles.events}>
                    <div className={classNames(
                                                styles.eventcard,
                                                day2 && styles.clicked
                                            )}><a href="#">
                        <p className={styles.eventname}>Event1</p>
                        <p className={styles.eventtime}>4:30 - 6:00</p></a>
                    </div>
                    <div className={classNames(
                                                styles.eventcard,
                                                day2 && styles.clicked
                                            )}><a href="#">
                        <p className={styles.eventname}>Event1</p>
                        <p className={styles.eventtime}>4:30 - 6:00</p></a>
                    </div>
                    <div className={classNames(
                                                styles.eventcard,
                                                day2 && styles.clicked
                                            )}><a href="#">
                        <p className={styles.eventname}>Event1</p>
                        <p className={styles.eventtime}>4:30 - 6:00</p></a>
                    </div></div>
                </div>
                <div className={styles.days}>
                    <div className={styles.borderwrap} onClick={handleday3}>
                        <div className={styles.wrapper}>
                        </div>
                        <div className={styles.daycards}>
                            <h2 className={styles.dayHeading}>Day 1</h2>
                            <p className={styles.daydesc}>Lorem Ipsem</p>
                        </div>
                        <div className={styles.inner}>

                        </div>
                    </div>
                    <div className={styles.events}>
                    <div className={classNames(
                                                styles.eventcard,
                                                day3 && styles.clicked
                                            )}><a href="#">
                        <p className={styles.eventname}>Event1</p>
                        <p className={styles.eventtime}>4:30 - 6:00</p></a>
                    </div>
                    <div className={classNames(
                                                styles.eventcard,
                                                day3 && styles.clicked
                                            )}><a href="#">
                        <p className={styles.eventname}>Event1</p>
                        <p className={styles.eventtime}>4:30 - 6:00</p></a>
                    </div>
                    <div className={classNames(
                                                styles.eventcard,
                                                day3 && styles.clicked
                                            )}><a href="#">
                        <p className={styles.eventname}>Event1</p>
                        <p className={styles.eventtime}>4:30 - 6:00</p></a>
                    </div>
                    </div>
                </div>




                   
            
            </div>
        </div>
    )
}
import styles from './TL.module.css'
import { useState } from 'react'
import classNames from 'classnames'
import dcard from "@components/Accessories/dcard";


export default function Timeline() {
    const [day1, setday1] = useState(true);
    const [day2, setday2] = useState(false);
    const [day3, setday3] = useState(false);
    const handleday1 = () => {
        setday1(true);
        setday2(false);
        setday3(false);
    }
    const handleday2 = () => {
        setday2(true);
        setday1(false);
        setday3(false);
    }
    const handleday3 = () => {
        setday3(true);
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
                    <dcard name="Day 1" />
                    <div className={styles.borderwrap}>
                        <div className={styles.inner}></div>
                        <div className={classNames( styles.wrapper, day2 && styles.active )} onClick={handleday2}>
                            <div className={styles.daycards}>
                                <h1 className={styles.dayHeading}>Day 2</h1>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className={styles.borderwrap}>
                    <div className={styles.inner}>

                    </div>
                        <div className={classNames( styles.wrapper, day3 && styles.active )} onClick={handleday3}>
                            <div className={styles.daycards}>
                                <h1 className={styles.dayHeading}>Day 3</h1>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div className={classNames( styles.events, !day1 && styles.events2 )}>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 1</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 1</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 1</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 1</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                </div>
                <div className={classNames( styles.events, !day2 && styles.events2 )}>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 2</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 2</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 2</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 2</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                </div>
                <div className={classNames( styles.events, !day3 && styles.events2 )}>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 3</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 3</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 3</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 3</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                </div>
            </div>
            <div className={styles.mobile}>
                <div className={styles.mdays}>
                    <div className={styles.borderwrap}>
                        <div className={styles.inner}>
                            
                        </div>
                        <div className={classNames( styles.wrapper, day1 && styles.active )} onClick={handleday1}>
                            <div className={styles.daycards}>
                                <h1 className={styles.dayHeading}>Day 1</h1>
                            </div>
                        </div>
                        
                        
                </div>
                <div className={styles.events}>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 1</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 1</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 1</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 1</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                </div>
                </div>
                <div className={styles.mdays}>
                <div className={styles.borderwrap}>
                        <div className={styles.inner}>
                            
                        </div>
                        <div className={classNames( styles.wrapper, day1 && styles.active )} onClick={handleday1}>
                            <div className={styles.daycards}>
                                <h1 className={styles.dayHeading}>Day 2</h1>
                            </div>
                        </div>
                        
                        
                </div>
                <div className={styles.events}>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 2</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 2</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 2</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 2</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                </div>
                </div>
                <div className={styles.mdays}>
                <div className={styles.borderwrap}>
                        <div className={styles.inner}>
                            
                        </div>
                        <div className={classNames( styles.wrapper, day1 && styles.active )} onClick={handleday1}>
                            <div className={styles.daycards}>
                                <h1 className={styles.dayHeading}>Day 3</h1>
                            </div>
                        </div>
                        
                        
                </div>
                <div className={styles.events}>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 3</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 3</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 3</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                    <div className={styles.eventcard}>
                        <h2 className={styles.eventname}>Event 3</h2>
                        <p  className={styles.eventtime}>4:30 PM - 6:30 PM</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
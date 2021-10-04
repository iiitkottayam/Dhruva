import { HButtonLight } from '@components/Accessories/button'
import { ImArrowUpRight2 } from 'react-icons/im'
import { useState } from 'react'
import styles from '../../styles/About.module.css'
import Button from './Button'
import { Date } from './Date'
import Timer from './Timer'

const About = () => {
    const [showTimer, setShowTimer] = useState(true)

    return (
        <div className={styles.container} id = 'AboutUS'>
            <div className={styles.title_container}>
                <h1 className={styles.title} >
                    What is <span>Dhruva&nbsp;?</span>
                </h1>

                <p className={styles.content}>
                    Dhruva is the annual tech fest of IIIT Kottayam! It’s the
                    amalgamation of mind gruelling competitions, thought
                    provoking expert talks and workshops that stimulate your
                    cerebral matter!
                    <br />
                    <br />
                    Just like the pole star dhruva, this event is your chance to
                    shine bright and bring into play the technical talents!

                </p>
                {/* <div className={styles.btn_container}>
                    <HButtonLight name="About Us" icon = {<ImArrowUpRight2/>}/>
                </div> */}
            </div>
            <div className={styles.date_container}>
                <div className={styles.left_date} >
                    <Date day="29" month="October" subtxt="th" />
                </div>
                <hr className={styles.line} />
                <div className={styles.right_date} >
                    <Date day="31" month="October" subtxt="st" />
                </div>
            </div>
            <br />
            <div className={styles.timer_container}>
                {showTimer ? (
                    <Timer setShowTimer={setShowTimer} />
                ) : (
                    <h1 className={styles.title}>
                        It&#39;s Show<span>time</span>
                    </h1>
                )}
            </div>
        </div>
    )
}

export default About
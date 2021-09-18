import { useState } from 'react'
import styles from '../../styles/About.module.css'
import Button from './Button'
import { Date } from './Date'
import Timer from './Timer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const About = () => {
    const [showTimer,setShowTimer] = useState(true);
    useEffect(() => {
        AOS.init({
            // duration : 5000
        })
    }, [])
    return (
        <div className={styles.container} >
                <div className={styles.title_container}>
                    <h1 className={styles.title} data-aos="fade-left" data-aos-duration="1000" >What is <span >Dhruva&nbsp;?</span></h1>
                    <p className={styles.content} data-aos="fade-right" data-aos-duration="1000">lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem  lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                    <div className={styles.btn_container}>
                        <Button name="About Us"/>
                    </div>
                </div>
                <div className={styles.date_container}>
                        <div className={styles.left_date} data-aos="zoom-in">
                            <Date day="15" month="October" />
                        </div>
                        <hr className={styles.line}/>
                        <div className={styles.right_date} data-aos="zoom-in">
                            <Date day="18" month="October"/>
                        </div>
                </div>
                <div className={styles.timer_container}>
                    {
                        showTimer ?
                            <Timer setShowTimer={setShowTimer}/>
                            :
                            <h1 className={styles.title}>It&#39;s Show<span>time</span></h1>
                    }
                    
                </div>
        </div>
    )
}

export default About

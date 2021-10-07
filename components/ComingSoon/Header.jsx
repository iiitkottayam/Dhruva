import styles from '/styles/Header.module.css'
import HButtons from './HButtons'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Header = () => {
        useEffect(() => {
        AOS.init({
            // duration : 5000
        })
    }, [])
    return (
        <>

            <div className={styles.hbody} id='Header'>

                <p className={styles.heading} data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
                    <span>Where Tech</span> <span>Gets</span>{' '}
                    <span className={styles.maintxt}>Stellar!</span>
                </p>
                <p className={styles.desciption} data-aos="zoom-in" data-aos-duration="2500">
                    <span className={styles.subtext}>
                        Welcome to Dhruva, IIIT Kottayam&apos;s own Technical
                        Fest.
                    </span>
                    <br />
                    <br />
                    <br />
                    <span>
                        Join us in this three-day-long virtual extravaganza
                        <br />
                        that&apos;s bound to fire up your neurons and spark your
                        creative flair!
                    </span>
                </p>
                <HButtons />
            </div>
        </>
    )
}

export default Header

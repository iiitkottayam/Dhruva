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
            <div className={styles.hbody} >
                <p className={styles.heading} data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom"><span>Create jaw-dropping virtual</span> & hybrid events</p>
                <p className={styles.desciption} data-aos="zoom-in" data-aos-duration="2500">Welcome is the all-in-one virtual and hybrid<br /> event platform to power incredible<br /> experiences</p>
                <HButtons />

            </div>


        </>
    )
}

export default Header
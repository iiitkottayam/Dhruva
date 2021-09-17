import styles from '../../styles/Card.module.css'
import {
    FaInstagram,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'
import classNames from 'classnames'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';
import Link from 'next/link'
const Card = () => {
    useEffect(() => {
        AOS.init({
            // duration : 5000
        })
    }, [])

    const img = 'url(https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80)'

    return (
            <Link href="/event" passHref>
            <div className={styles.borderwrap} 
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000">
                <div className={styles.inner}></div>

                <div className={classNames(styles.wrapper, styles.active)}>
                    <div className={styles.daycards}>
                        <div
                            className={styles.profile_img}
                            style={{
                                backgroundImage: img,
                            }}
                        ></div>
                        <div className={styles.content_container}>
                            <span className={styles.name}>Scavenger Hunt</span>
                            <span className={styles.role}>
                                Tagline maybe!?
                            </span>
                        </div>
                        <div className={styles.detailContainer}>
                            <p>
                                27th October 4:00 pm
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </Link>
    )
}

export default Card

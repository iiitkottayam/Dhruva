import styles from '../../styles/Card.module.css'
import {
    FaInstagram,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'
import classNames from 'classnames'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'

const Card = () => {
    useEffect(() => {
        AOS.init({
            // duration : 5000
        })
    }, [])

    const [img, setImg] = useState(
        'url(https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80)',
    )

    return (
        
            <div className={styles.borderwrap} onMouseOver={() =>
                setImg(
                    'url(https://c.tenor.com/DHGvsLhTOowAAAAC/meme-pikachu.gif)',
                )
            }
            onMouseOut={() =>
                setImg(
                    'url(https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80)',
                )
            }
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
                            <span className={styles.name}>Syed Faiz Hasan</span>
                            <span className={styles.role}>
                                Frontend Developer
                            </span>
                        </div>
                        <div className={styles.social_container}>
                            {/* <FaEnvelope /> */}
                            <FaInstagram />
                            <FaLinkedin />
                            <FaTwitter />
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default Card

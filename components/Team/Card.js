import styles from '../../styles/Card.module.css'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import classNames from 'classnames'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Card = (props) => {
    useEffect(() => {
        AOS.init({
            // duration : 5000
        })
    }, [])
    const [img, setImg] = useState(props.image)

    return (
        <div
            className={styles.borderwrap}
            onMouseOver={() => setImg(props.gif)}
            onMouseOut={() => setImg(props.image)}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
        >
            <div className={styles.inner}></div>
            <div className={classNames(styles.wrapper, styles.active)}>
                <div className={styles.daycards}>
                    {img && (
                        <Image
                            src={img}
                            alt="poster"
                            height="300"
                            width="250"
                        />
                    )}

                    <div className={styles.content_container}>
                        <span className={styles.name}>{props.name}</span>
                        {/* <span className={styles.role}>
                                Frontend Developer
                            </span> */}
                    </div>
                    <div className={styles.social_container}>
                        {/* <FaEnvelope /> */}
                        {props.instagram !== '' && (
                            <a
                                href={props.instagram}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaInstagram />
                            </a>
                        )}
                        <a
                            href={props.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                        {props.twitter !== '' && (
                            <a
                                href={props.twitter}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaTwitter />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Card

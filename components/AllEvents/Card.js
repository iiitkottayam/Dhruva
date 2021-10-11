import styles from '../../styles/Card.module.css'
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

    return (
        <Link href={'/event/' + props.link} passHref>
            <div
                className={styles.borderwrap}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
            >
                <div className={styles.inner}></div>

                <div className={classNames(styles.wrapper, styles.active)}>
                    <div className={styles.daycards}>
                        {props.poster && (
                            <Image
                                src={props.poster}
                                alt="poster"
                                height="250"
                                width="250"
                                priority = {true}
                            />
                        )}

                        <div className={styles.content_container}>
                            <span className={styles.name}>{props.name}</span>
                            {/* <span className={styles.role}>{props.tag}</span> */}
                        </div>
                        <div className={styles.detailContainer}>
                            <p>
                                {props.date}&nbsp;&nbsp;{props.time}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card

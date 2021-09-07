import styles from '/styles/Orgnjdge.module.css'
import { TiSocialLinkedinCircular, TiSocialTwitterCircular, TiSocialFacebookCircular } from 'react-icons/ti'
import Link from 'next/dist/client/link'

const Card = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.cimg}>
                <img src={props.imgsrc} alt="Organiser" layout="fill" />
                <p className={styles.name}>{props.name}</p>
            </div>
            <div className={styles.socicons}>
                <Link href={props.link1} >
                    <a target="_blank">
                        <TiSocialLinkedinCircular className={styles.taicon}  />
                    </a>

                </Link>
                <Link href={props.link2} >
                    <a target="_blank">
                        <TiSocialFacebookCircular className={styles.taicon}  />
                    </a>
                </Link>
                <Link href={props.link3} >
                    <a target="_blank">
                        <TiSocialTwitterCircular className={styles.taicon}  />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Card

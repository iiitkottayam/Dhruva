import styles from '/styles/Orgnjdge.module.css'
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/Fa'
import Link from 'next/dist/client/link'

const Card = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.cimg}>
                <img src={props.imgsrc} alt="Organiser" />
                <p className={styles.name}>{props.name}</p>
            </div>
            <div className={styles.socicons}>
                <Link href={props.link1} >
                    <a target="_blank">
                        <FaLinkedin className={styles.faicon} />
                    </a>

                </Link>
                <Link href={props.link2} >
                    <a target="_blank">
                        <FaFacebook className={styles.faicon} />
                    </a>
                </Link>
                <Link href={props.link3} >
                    <a target="_blank">
                        <FaTwitter className={styles.faicon} />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Card

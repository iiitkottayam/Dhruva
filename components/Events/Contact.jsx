import styles from '/styles/EventDetails.module.css'
import { FaLinkedin, FaTwitter, FaFacebookF } from 'react-icons/fa'
import Link from 'next/dist/client/link'

const Card = (props) => {
    return (
        <>
            <p className={styles.desc}>
                Want more details related to this event, feel free to contact the
                Event Organiser.
            </p>
            <p className={styles.contact}>
                {props.name}
                <br />
                {props.email}
                <br />
                {props.phone}
                <hr />
            </p>
        </>
    )
}

export default Card

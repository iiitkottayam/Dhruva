import styles from '/styles/HButton.module.css'
import Link from 'next/link'
import { FaDiscord } from 'react-icons/fa'

const HButtons = () => {
    return (
        <div className={styles.buttons}>
            <Link href="https://dare2compete.com/">
                <a target="_blank">
                    <button className={styles.b1}>Register</button>
                </a>
            </Link>
            <button className={styles.b2}>
                <Link href="https://discord.com/channels/@me" target="_blank">
                    <a target="_blank">
                        <FaDiscord className={styles.faicon} />
                        <span> Join Discord </span>
                    </a>
                </Link>
            </button>
        </div>
    )
}

export default HButtons

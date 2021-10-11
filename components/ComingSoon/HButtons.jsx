import styles from '/styles/HButton.module.css'
import Link from 'next/link'
import { SiDiscord } from 'react-icons/si'

const HButtons = () => {
    return (
        <div className={styles.buttons}>
            <Link href="/events">
                    <button className={styles.b1}>Register</button>
            </Link>
            <button className={styles.b2}>
                <Link href="https://discord.gg/pyVrmC4DTk" target="_blank">
                    <a target="_blank">
                        <SiDiscord className={styles.faicon} />
                        <span> Join Discord </span>
                    </a>
                </Link>
            </button>
        </div>
    )
}

export default HButtons

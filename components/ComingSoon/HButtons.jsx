import styles from '/styles/HButton.module.css'
import Link from 'next/link'
import { FaDiscord } from 'react-icons/fa';

const HButtons = () => {
    return (
        <div className={styles.buttons}>
            <button className={styles.b1}>Register</button>
            <button className={styles.b2}>
                <Link href="#" target="_blank">
                    <a>
                        <FaDiscord className={styles.faicon} />
                        <span> Join Discord </span>
                    </a>

                </Link>
            </button>
        </div>
    )
}

export default HButtons
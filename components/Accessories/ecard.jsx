import classNames from 'classnames'
import styles from './ecard.module.css'
import Link from 'next/link'
export default function Ecard(props) {
    return (
        <Link href={'/event/' + props.link} passHref>
            <div className={styles.eventcard}>
                <h2 className={styles.eventname}>{props.name}</h2>
                <p className={styles.eventtime}>{props.time}</p>
            </div>
        </Link>
    )
}
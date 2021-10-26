import styles from './speaker.module.css'
import Image from 'next/image'
export default function Speaker(props) {
    return (
        <div className={styles.speaker}>
            <div className={styles.image}>
                {props.image && (
                    <Image
                        src={props.image}
                        alt={props.name}
                        height={200}
                        width={200}
                    ></Image>
                )}
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.about}>{props.detail}</div>
                <div className={styles.timing}>
                    <span>
                        {props.date}&ensp;{props.time}
                    </span>
                    <span className={styles.linking}>
                        <a href={props.link} target="_blank" rel="noopener noreferrer">zoom</a>
                        &nbsp;(youtube recorded) {/* Prop ready for YouTube, its prop.linkyt, Just wrap the text in an <a/> tag */}
                    </span>
                </div>
            </div>
        </div>
    )
}

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
                        {props.date}&nbsp;&nbsp;{props.time}
                    </span>
                    <span>zoom (youtube recorded) </span>
                </div>
            </div>
        </div>
    )
}

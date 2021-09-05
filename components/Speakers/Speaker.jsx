import styles from './speaker.module.css'

export default function Speaker({ speaker }) {
    return (
        <div className={styles.speaker}>
            <div className={styles.image}>
                <img src={speaker.url} alt={speaker.id} />
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{speaker.name}</div>
                <div className={styles.about}>{speaker.about}</div>
                <div className={styles.timing}>
                    <span>{speaker.timing?.date}</span>
                    <span>youtube live {speaker.timing?.live}</span>
                </div>
            </div>
        </div>
    )
}

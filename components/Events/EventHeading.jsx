import styles from '/styles/EventHeading.module.css'
import Image from 'next/image'
import eventPoster from '../../public/Design006_QZ3bXyTwaT.jpg'
import HButton from '@components/Accessories/button'
const EventHeading = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.Heading}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <HButton name="Register"></HButton>
            </div>
            <div className={styles.image}>
                <Image src={eventPoster} alt="Event Poster" priority={true} />
            </div>
        </div>
    )
}

export default EventHeading

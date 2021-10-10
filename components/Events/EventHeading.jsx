import styles from '/styles/EventHeading.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { HButton } from '@components/Accessories/button'
import { Hidden } from '@material-ui/core'
const EventHeading = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.Heading}>
                <h1>{props.title}</h1>
                <p style = {props.content ? ({display: 'block'}) : ({display : 'none'})}>{props.content}</p>
                <a href={props.register} target="_blank" rel="noreferrer">
                    <HButton name="Register" />
                </a>
            </div>
            <div className={styles.image}>
                {props.eventPoster && (
                    <Image
                        src={props.eventPoster}
                        alt="Event Poster"
                        priority={true}
                        height="300"
                        width="300"
                    />
                )}
            </div>
        </div>
    )
}

export default EventHeading

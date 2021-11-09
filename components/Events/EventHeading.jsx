import styles from '/styles/EventHeading.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { HButton } from '@components/Accessories/button'
import { Hidden } from '@material-ui/core'
import { ImArrowUpRight2 } from 'react-icons/im'
import { style } from 'dom-helpers'

const EventHeading = (props) => {

    var eventData = ["Reverse Coding", "CodeSprint", "Sold It!", "console.log(“replicate”)", "Breaking Bad", "Fantasy Crypto League", "BrandAID", "Stick-To-It"];

    return (
        <div className={styles.container}>
            <div className={styles.Heading}>
                <h1>{props.title}</h1>
                <p style = {props.content ? ({display: 'block'}) : ({display : 'none'})}>{props.content}</p>
                <div>
                    <a href={(!eventData.includes(props.title) ? "/leaderboard_table?val=" : "/leaderboard?val=") + props.lead + "&nam=" + props.title} target="_blank" rel="noreferrer">
                        <HButton name="Leaderboard" icon = {<ImArrowUpRight2 />}/>
                    </a>
                </div>
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

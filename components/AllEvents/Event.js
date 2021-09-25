import styles from '../../styles/Team.module.css'
import Card from './Card'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import { events } from '@data/events'
import { getStaticProps } from 'pages/event/[id]'
export const Event = () => {
    useEffect(() => {
        AOS.init({
            // duration : 5000
        })
    }, [])
    return (
        <div className={styles.team_container}>
            <h1 style={{}}>Events</h1>
            <div className={styles.cards}>
                {events.map((data) => (
                    <Card
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        poster={data.poster}
                        date={data.date}
                        time={data.time}
                        tag={data.tag}
                        link={data.link}
                    />
                ))}
            </div>
        </div>
    )
}

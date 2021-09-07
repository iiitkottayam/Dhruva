import React, { useState, useEffect } from 'react'
import styles from './speakers.module.css'
import Speaker from './Speaker'
export default function Speakers() {
    const [data, setData] = useState({ speakers: [] })


    useEffect(() => {
        const speaker = {
            id: Math.random() * 10000,
            name: 'nico robin',
            url: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, inventore.Debitis dolore nulla veritatis porro!',
            timing: {
                date: 'october 15, 2021',
                live: '4:00pm'
            }

        }
        setData({
            speakers: speaker
        })
    }, [])
    return (
        <div className={styles.speakers_section}>
            <div className={styles.title}>our speakers</div>
            <div className={styles.speakers}>
                <Speaker speaker={data.speakers} key={data.speakers.id} />
                <Speaker speaker={data.speakers} key={Math.random()} />
                <Speaker speaker={data.speakers} key={Math.random()} />
                <Speaker speaker={data.speakers} key={Math.random()} />
            </div>
        </div>
    )
}

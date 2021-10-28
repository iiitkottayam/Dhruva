import React, { useState, useEffect } from 'react'
import styles from './speakers.module.css'
import Speaker from './Speaker'
import { speaker } from '@data/speaker'


export default function Speakers() {
    return (
        <div className={styles.speakers_section}>
            <div className={styles.title}>our speakers</div>
            <div className={styles.speakers}>
                {speaker.map((item) => (
                    <Speaker
                        key={item.id}
                        name={item.name}
                        detail={item.details}
                        date={item.date}
                        time={item.time}
                        image={item.image}
                        how={item.how}
                        link={item.link}
                        linkyt={item.linkyt}
                    />
                ))}
            </div>
        </div>
    )
}

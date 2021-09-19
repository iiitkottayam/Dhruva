import React, { useState, useEffect } from 'react'
import styles from './speakers.module.css'
import Speaker from './Speaker'
import { speaker } from '@data/speaker'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Speakers() {
        useEffect(() => {
        AOS.init({
        });
    }, []);
    return (
        <div className={styles.speakers_section}>
            <div className={styles.title}>our speakers</div>
            <div className={styles.speakers} data-aos="fade-up" data-aos-duration="1500">
                {speaker.map((item) => (
                    <Speaker
                        key={item.id}
                        name={item.name}
                        detail={item.details}
                        date={item.date}
                        time={item.time}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    )
}

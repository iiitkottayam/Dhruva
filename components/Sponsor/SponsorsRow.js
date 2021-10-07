import React, { Component } from 'react'
import styles from './Sponsor.module.css'
import Image from 'next/image'

// This file is only for the 'Our Sponsors' Section of the Sponsors component AKA the Sponsors Row

export const SponsorsRow  = (props) => {
        return (
            <div className={styles.sponsorRow}>
                {props.sponsors.map((sponsor) => {
                 return <div key={sponsor.id} className="column div-margin" align="center">
                        <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                            <Image src={sponsor.logo} alt="Logo not available" width={140} height={140} className={styles.sponsorImg}/>
                        </a>
                        <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                            <h2 className={styles.sponsorLabel}>{sponsor.name}</h2>
                        </a>
                    </div>
            })}
            </div>
        )
    }
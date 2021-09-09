import React, { Component } from 'react'
import styles from './Sponsor.module.css'
import Image from 'next/image'

export const SponsorsRow  = (props) => {
        return (
            <div className={styles.sponsorRow}>
                {props.sponsors.map((sponsor) => {
                 return <div key={sponsor.id} className="column div-margin" align="center">
                        <Image src={sponsor.logo} alt="Logo not available" width={140} height={140} className={styles.sponsorImg}/>
                        <h2 className={styles.sponsorLabel}>{sponsor.name}</h2>
                    </div>
            })}
            </div>
        )
    }
import React, { Component } from 'react'
import styles from './Sponsor.module.css'
import Image from 'next/image'

export const SponsorsRow  = (props) => {
        return (
            <div className={styles.sponsorRow}>
                {props.sponsors.map((sponsor) => {
                 return <div key={sponsor.id} className="column div-margin" align="center">
                        {/* <img className={styles.sponsorImg} src={sponsor.logo} alt="Logo not found" /> */}
                        <Image src={sponsor.logo} alt="Logo not available" width={250} height={230}/>
                        <h2 className={styles.sponsorLabel}>{sponsor.name}</h2>
                    </div>
            })}
            </div>
        )
    }
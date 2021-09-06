import React, { Component } from 'react'
import styles from './Sponsor.module.css'

export const SponsorsRow  = (props) => {
        return (
            <div className={styles.sponsorRow}>
                {props.sponsors.map((sponsor) => {
                return <div className="column div-margin" align="center">
                        <img className={styles.sponsorImg} src={sponsor.logo} alt="Logo not found" />
                        <h2 className={styles.sponsorLabel}>{sponsor.name}</h2>
                    </div>
            })}
            </div>
        )
    }
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
                            <>
                            <Image src={sponsor.logo} alt="Logo not available" width={145} height={145} className="Img"/>
                            <style jsx global>{`
                                .Img {
                                    transition: transform 175ms ease-in-out;
                                }
                                .Img:hover {
                                    transform: scale(90%);
                                }
                                .Img:active {
                                    transform: scale(83%);
                                    transition: transform 100ms ease-in-out;
                                }
                                @media screen and (max-width: 320px) {
                                    .Img {
                                        transform: scale(85%);
                                        transition: transform 150ms ease-in-out;
                                    }
                                    .Img:hover {
                                        transform: scale(75%);
                                    }
                                }
                            `}</style>
                            </>
                        </a>
                        <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                            <h2 className={styles.sponsorLabel}>{sponsor.name}</h2>
                        </a>
                    </div>
            })}
            </div>
        )
    }
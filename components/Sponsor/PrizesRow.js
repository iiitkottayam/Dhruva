import React, { Component } from 'react'
import styleP from './Prizes.module.css'
import Image from 'next/image'

// This file is only for the Prizes Section of the Sponsors component AKA the Prizes Row

export const PrizesRow  = (props) => {
        return (
            <div className={styleP.prizesRow}>
                {props.prizes.map((prizes) => {
                 return <div key={prizes.id} className="column div-margin" align="center">
                        <Image src={prizes.logo} alt="Logo not available" width={140} height={140} className={styleP.prizesImg}/>
                        <h2 className={styleP.prizesLabel}>{prizes.name}</h2>
                        <h2 className={styleP.prizesDesc}>{prizes.desc}</h2>
                    </div>
            })}
            </div>
        )
    }
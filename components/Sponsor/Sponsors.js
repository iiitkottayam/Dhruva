import { SponsorsRow } from './SponsorsRow'
import { PrizesRow } from './PrizesRow'
import styles from './Sponsor.module.css'
import styleP from './Prizes.module.css'
import { sponsors, sponsors2, sponsors3 } from '@data/sponsor' //This is the data of Sponsors >>sponsor.js | Go here to edit names
import { prizes } from '@data/prizes'                           //tier list >> sponsors - diamond, sponsors2 - gold, sponsors3 - bronze.

// This is the MAIN File for the entire Sponsors component.

export const Sponsors = (props) => {
    let prizeMoney = '50,000'

    return (
        <div className={styleP.prizesDiv} id='Sponsors'>

            {/* All lines below before the next comment are for the 'Prizes' part of the Sponsors component,
            And is taking it's styling from Prizes.module.css */}

            <h2 className={styleP.prizeH2Stroke}>Prizes</h2>
            <h3 className={styleP.prizeH3}>Total prize of</h3>
            <h2 className={styleP.prizeH2}>Rs. {prizeMoney}</h2>
            <h3 className={styleP.prizeH3}>
                Also win exciting prizes&nbsp;from
            </h3>
            {/* <PrizesRow prizes={prizes} /> */} {/* Uncomment the line at the left to bring back Prizes */}

            {/* after this comment all lines are for the 'Our Sponsors' section,
             puling it's styling from Sponsor.module.css */}

            <div className={styles.sponsorH2Margin}>
                <h2 className={styles.sponsorH2}>Our Sponsors</h2>
            </div>
            {/* Each this row for 4 sponsers per component otherwise it become congested */}
            <div className={styles.sponsorMargin}>
                <SponsorsRow sponsors={sponsors} /> {/* Please remove this line for Sponsor tier system */}

                {/* If you intend to make the sponsors a tier system,
                please uncomment the below section and remove the SponsorsRow line above. */}

                {/*

                <h3 className={styles.sponsorH3} style={{color: "deepskyblue"}}>Diamond Tier</h3>
                <SponsorsRow sponsors={sponsors} />
                <h3 className={styles.sponsorH3} style={{color: "#F0AF2E"}}>Gold Tier</h3>
                <SponsorsRow sponsors={sponsors2} />
                <h3 className={styles.sponsorH3} style={{color: "#CD7F32"}}>Bronze Tier</h3>
                <SponsorsRow sponsors={sponsors3} />

                */}

            </div>
        </div>
    )
}

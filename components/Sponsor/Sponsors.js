import { SponsorsRow } from './SponsorsRow'
import { PrizesRow } from './PrizesRow'
import styles from './Sponsor.module.css'
import styleP from './Prizes.module.css'
import { sponsors, sponsors2, sponsors3, sponsors4, sponsors5 } from '@data/sponsor' //This is the data of Sponsors >>sponsor.js | Go here to edit names
import { prizes } from '@data/prizes' //tier list >> sponsors - gold, sponsors2 - silver, sponsors3 - emerald, sponsors4 - learning, sponsors5 - ruby.

// This is the MAIN File for the entire Sponsors component.

export const Sponsors = (props) => {
    let prizeMoney = '55,000'

    return (
        <div className={styleP.prizesDiv} id="Sponsors">
            {/* All lines below before the next comment are for the 'Prizes' part of the Sponsors component,
            And is taking it's styling from Prizes.module.css */}
            <h2 className={styleP.prizeH2Stroke}>Prizes</h2>
            <h3 className={styleP.prizeH3}>Total prize of</h3>
            <h2 className={styleP.prizeH2}>Rs. {prizeMoney}</h2>
            <h3 className={styleP.prizeH3}>
                Also win exciting prizes&nbsp;from
            </h3>
            {/* <PrizesRow prizes={prizes} /> */}
            {/* Uncomment the line above to bring back Prizes */}

            {/* After this comment all lines are for the 'Our Sponsors' section,
             puling it's styling from Sponsor.module.css */}

            <div className={styles.sponsorH2Margin}>
                <h2 className={styles.sponsorH2}>Our Sponsors</h2>
            </div>
            {/* Margin below otherwise it becomes congested */}
            <div className={styles.sponsorMargin}>
                {/* <SponsorsRow sponsors={sponsors} /> Please remove this line for Sponsor tier system */}

                {/* If you intend to make the sponsors a tier system,
                please uncomment the below section and remove the SponsorsRow line above. */}

                <div className={styles.backPill}><h3 className={styles.sponsorH3} style={{ color: '#ffaa00' }}>
                    Gold Tier
                </h3></div>
                <SponsorsRow sponsors={sponsors} />
                <div className={styles.backPill}><h3 className={styles.sponsorH3} style={{ color: '#2ebdeb' }}>
                    Silver Tier
                </h3></div>
                <SponsorsRow sponsors={sponsors2} />
                <div className={styles.backPill}><h3 className={styles.sponsorH3} style={{ color: '#50c878' }}>
                    Emerald Tier
                </h3></div>
                <SponsorsRow sponsors={sponsors3} />
                <div className={styles.backPill}><h3 className={styles.sponsorH3} id={styles.Learn} style={{ color: '#d15dcf' }}>
                    Learning Partner
                </h3></div>
                <SponsorsRow sponsors={sponsors4} />
                <div className={styles.backPill}><h3 className={styles.sponsorH3} id={styles.Ruby} style={{ color: '#ff6361' }}>
                    Ruby Tier
                </h3></div>
                <SponsorsRow sponsors={sponsors5} />
            </div>
        </div>
    )
}

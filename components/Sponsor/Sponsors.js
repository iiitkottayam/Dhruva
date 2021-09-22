import { SponsorsRow } from './SponsorsRow'
import styles from './Sponsor.module.css'
import { sponsors } from '@data/sponsor'

export const Sponsors = (props) => {
    let prizeMoney = '15,000'


    return (
        <div className={styles.sponsorDiv}>
            <h2 className={styles.prizeH2Stroke} >Prizes</h2>
            <h3 className={styles.prizeH3} >Total prize of</h3>
            <h2 className={styles.prizeH2} >Rs. {prizeMoney}</h2>
            <h3 className={styles.prizeH3} >
                Also win exciting prizes from our sponsors
            </h3>
            <SponsorsRow sponsors={sponsors} />
            <div className={styles.prizeH2Margin}>
                <h2 className={styles.prizeH2} >Our Sponsors</h2>
            </div>
            {/* Each this row for 4 sponsers per component otherwise it become congested */}
            <div className={styles.sponsorMargin}>
                <SponsorsRow sponsors={sponsors} />
            </div>
        </div>
    )
}

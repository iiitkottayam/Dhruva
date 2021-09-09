import {SponsorsRow} from "./SponsorsRow"
import styles from './Sponsor.module.css'
export const Sponsors = (props) => {
    let prizeMoney = "15,000";
    let sponsors = [
        {
            id: 1,
            name: "GDC",
            logo: "https://cdn-images-1.medium.com/max/1200/1*Zkhl4Zz43z2_iR_ADlP-rg.png"
        },
        {
            id: 2,
            name: "Microsoft",
            logo: "https://yt3.ggpht.com/ytc/AKedOLTxAANt4In2gv9PzQX8lLEXPOe92v9w2wjIfKCqTQ=s900-c-k-c0x00ffffff-no-rj"
        },
        {
            id: 3,
            name: "Netflix",
            logo: "https://play-lh.googleusercontent.com/384jx3OL4_tqtCGZrfIB6Q5TehM0Q7TLYFsenRPfeT8f-3vicWH2BYbvaEAneaPFMMM"
        },
        
        {
            id: 4,
            name: "Paypal",
            logo: "https://media.fidoalliance.org/wp-content/uploads/paypal_2014_logo_detail-1.png"
        },
        {
            id: 5,
            name: "Amazon",
            logo: "https://authy.com/wp-content/uploads/Amazon.png"
        },
        
    ];


    return (
        <div className={styles.sponsorDiv}>
            <h2 className={styles.prizeH2Stroke}>Prizes</h2>
            <h3 className={styles.prizeH3}>Total prize of</h3>
            <h2 className={styles.prizeH2}>{prizeMoney} Rs.</h2>
            <h3 className={styles.prizeH3}>Also win exciting prizes from our sponsors</h3>
            <SponsorsRow sponsors={sponsors}/>
            <div className={styles.prizeH2Margin}>
            <h2 className={styles.prizeH2}>Our Sponsors</h2>
            </div>
            {/* Each this row for 4 sponsers per component otherwise it become congested */}
            <div className={styles.sponsorMargin}>
                <SponsorsRow sponsors={sponsors}/>
            </div>
        </div>
    )
}
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
            name: "Amazon",
            logo: "https://i.pinimg.com/originals/31/d1/3c/31d13c99ee841869ca44ef54ba956272.png"
        },
        {
            id: 4,
            name: "Paypal",
            logo: "https://st4.depositphotos.com/5225467/22068/v/600/depositphotos_220680152-stock-illustration-paypal-logo-printed-white-paper.jpg"
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
            <SponsorsRow sponsors={sponsors}/>
        </div>
    )
}
import { SponsorsRow } from './SponsorsRow'
import styles from './Sponsor.module.css'
import { sponsors } from '@data/sponsor'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export const Sponsors = (props) => {
    let prizeMoney = '15,000'
    useEffect(() => {
        AOS.init({
        });
    }, []);

    return (
        <div className={styles.sponsorDiv}>
            <h2 className={styles.prizeH2Stroke} data-aos="fade-up" data-aos-duration="1000">Prizes</h2>
            <h3 className={styles.prizeH3} data-aos="fade-up" data-aos-duration="1200">Total prize of</h3>
            <h2 className={styles.prizeH2} data-aos="fade-up" data-aos-duration="1300">Rs. {prizeMoney}</h2>
            <h3 className={styles.prizeH3} data-aos="fade-up" data-aos-duration="1500">
                Also win exciting prizes from our sponsors
            </h3>
            <SponsorsRow sponsors={sponsors} />
            <div className={styles.prizeH2Margin}>
                <h2 className={styles.prizeH2} data-aos="fade-up" data-aos-duration="1000">Our Sponsors</h2>
            </div>
            {/* Each this row for 4 sponsers per component otherwise it become congested */}
            <div className={styles.sponsorMargin}>
                <SponsorsRow sponsors={sponsors} />
            </div>
        </div>
    )
}

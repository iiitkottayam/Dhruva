import styles from "../../styles/Team.module.css"
import Card from "./Card"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
export const Team = () => {
            useEffect(() => {
        AOS.init({
          // duration : 5000
        });
      }, []);
    return (
        <div className={styles.team_container}>
            <h1>Our <span>Team</span></h1>
            <h2 data-aos="zoom-in" data-aos-duration="1500">Mentor</h2>
            <div className={styles.cards}>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <h2 data-aos="zoom-in" data-aos-duration="1500">Developers</h2>
            <div className={styles.cards}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <h2 data-aos="zoom-in" data-aos-duration="1500">Organisers</h2>
            <div className={styles.cards}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

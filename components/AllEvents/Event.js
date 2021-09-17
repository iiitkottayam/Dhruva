import styles from "../../styles/Team.module.css"
import Card from "./Card"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
export const Event = () => {
            useEffect(() => {
        AOS.init({
          // duration : 5000
        });
      }, []);
    return (
        <div className={styles.team_container}>
            <h1 style={{marginTop:'-10px'}}>Events</h1>
            <div className={styles.cards}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
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

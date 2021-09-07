import styles from '../../styles/Card.module.css'
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaDiscord,
    FaEnvelope,
} from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Card = () => {
        useEffect(() => {
        AOS.init({
          // duration : 5000
        });
      }, []);
    return (
        <div className={styles.container}  data-aos="fade-up" data-aos-duration="1500">

                <div className={styles.profile_img}></div>
                <div className={styles.content_container}>
                    <span className={styles.name}>Syed Faiz Hasan</span>
                    <span className={styles.role}>Frontend Developer</span>
                </div>
                <div className={styles.social_container}>
                    <FaEnvelope />
                 <FaInstagram />
                 <FaFacebookF />
                 <FaTwitter />

                </div>
                
        </div>
    )
}

export default Card

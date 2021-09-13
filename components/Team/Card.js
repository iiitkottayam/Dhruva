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
import { useEffect, useState } from 'react';

const Card = () => {
        useEffect(() => {
        AOS.init({
          // duration : 5000
        });
      }, []);

      const [img,setImg] = useState("url(https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80)");

    return (
        <div 
          className={styles.container} 
          onMouseOver={() => setImg("url(https://c.tenor.com/DHGvsLhTOowAAAAC/meme-pikachu.gif)")} 
          onMouseOut={() =>setImg("url(https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80)")}
          data-aos="fade-up" 
          data-aos-duration="1500"
        >
                <div 
                  className={styles.profile_img}
                  style={{
                          backgroundImage:img,                          
                        }}
                ></div>
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

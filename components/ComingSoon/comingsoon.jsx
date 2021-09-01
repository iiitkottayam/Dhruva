import styles from "./Coming.module.css";
import {FaFacebook,FaLinkedin,FaTwitter,FaInstagram} from 'react-icons/fa'

export default function Coming() {
    return(
        <div className={styles.home}>            
            <div className={styles.main}>
                <div className={styles.textDiv}>
                    <p className={styles.maintxt}>Coming Soon!</p>
                    <div className={styles.innerTextDiv}>
                        <p className={styles.txt}>Lorem ipsum doler Lorem ipsum doler Lorem ipsum dole Lorem Lorem <br/>ipsum doler Lorem ipsum doler Lorem ipsum dole Lorem</p>
                    </div>
                </div>
            </div>
           
            <div className={styles.footer}>                  
                <div className={styles.insta}>
                <a href="https://www.facebook.com/IIITKottayamofficial/" target="_blank" rel="noreferrer"><FaFacebook /></a>
                </div>   
                <div className={styles.insta}>
                <a href="https://twitter.com/iiitkottayam" target="_blank" rel="noreferrer"><FaTwitter /></a>
                </div>                 
                <div className={styles.insta}>                    
                    <a href="https://www.instagram.com/iiitkottayam/?hl=en" target="_blank" rel="noreferrer"><FaInstagram/></a>&nbsp;
                </div>                
                <div className={styles.web}>
                    <a href="https://www.iiitkottayam.ac.in/" target="_blank" rel="noreferrer">IIITK</a>
                </div>
            </div>
        </div>
    );
};
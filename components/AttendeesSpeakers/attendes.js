import styles from '../../styles/attendees.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Attendes = () => {
    useEffect(() => {
        AOS.init({
        });
    }, []);

    return (
        
            <div className={styles.back}>
                <div className={styles.inner1}>
                    
                        <h1 className={styles.h1}>A first-rate virtual experience for all</h1>
                   
                </div>
                <div className={styles.grid}>
                    <div className={styles.text}>
                        <h4 className={styles.h4}>Attendees</h4>
                        <p className={styles.bl}>No Zoom fatigue here. Optimized to create immersive experiences for attendees, Welcome captivates your audience like never before. Interact with attendees by pulling them on stage, allow them to move freely in and out of rooms, provide networking opportunities, and more.</p>
                    </div>
                    <div data-aos="fade-left" className={styles.img}>
                        <img data-aos="rotate-c" src="https://assets-global.website-files.com/5f8f45cead04af2f54abc938/611fc7ce31ecb97d9ed140ab_use_attendee.jpg" className={styles.hi}/>
                    </div>
                    <div className={styles.text}>
                        <h4 className={styles.h4}>Speakers</h4>
                        <p className={styles.bl}>Put speakers at ease by making sure they're prepped and ready to go. Onboard them in the Green Room and communicate with them while they're on stage.</p>
                    </div>
                    <div data-aos="fade-left" className={styles.img}>
                        <img data-aos="rotate-c" src="https://assets-global.website-files.com/5f8f45cead04af2f54abc938/611fcb7cd572cbda6aa2b3b2_use_speaker.jpg" className={styles.hi2}/>
                    </div>
                </div>
            </div>
        
    )
}

export default Attendes

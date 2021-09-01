import styles from "./Coming.module.css";
export default function Coming() {
    return(
        <div className={styles.home}>
            <div className={styles.navBar}>
                <p className={styles.logo}>DHRUVA</p>
            </div>
            <div className={styles.main}>
                <div className={styles.textDiv}>
                    <p className={styles.maintxt}>Coming Soon!</p>
                    <div className={styles.innerTextDiv}>
                        <p className={styles.txt}>Lorem ipsum doler Lorem ipsum doler Lorem ipsum dole Lorem Lorem <br/>ipsum doler Lorem ipsum doler Lorem ipsum dole Lorem</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <p className={styles.insta}>
                    <a href="https://www.instagram.com/iiitkottayam/?hl=en" target="_blank" rel="noreferrer">Instagram</a>&nbsp;
                </p>
                <p className={styles.link}>/ &nbsp;</p>
                <p className={styles.web}>
                    <a href="https://www.iiitkottayam.ac.in/" target="_blank" rel="noreferrer"> Website</a>
                </p>
            </div>
        </div>
    );
};
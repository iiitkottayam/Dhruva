import styles from '/styles/Header.module.css'
import HButtons from './HButtons'

const Header = () => {
    return (
        <>
            <div className={styles.hbody}>
                <div id={styles.stars}></div>
                <div id={styles.stars2}></div>
                <div id={styles.stars3}></div>
                <p className={styles.heading}>
                    <span>Where Tech</span> <span>Gets</span>{' '}
                    <span className={styles.maintxt}>Stellar!</span>
                </p>
                <p className={styles.desciption}>
                    <span className={styles.subtext}>
                        Welcome to Dhruva, IIIT Kottayam&apos;s own technical
                        fest.
                    </span>
                    <br />
                    <br />
                    <br /> Join us in this three-day-long virtual extravaganza
                    <br />
                    that&apos;s bound to fire up your neurons and spark your
                    creative flair!
                </p>
                <HButtons />
            </div>
        </>
    )
}

export default Header

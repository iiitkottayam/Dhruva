import styles from '/styles/EventDetails.module.css'

const EventDetails = () => {
    return (
        <div className={styles.Evecont}>
            <p className={styles.hdn1} >details</p>
            <p className={styles.hdn2}> Isme date and time denge, aur jo details hogi Neeche bold kardenge</p>
            <p className={styles.desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            <p className={styles.date}> October  15 , 2021<br/>youtube live 4:00pm<hr/></p>
            
        </div>
    )
}

export default EventDetails
import styles from '/styles/EventDetails.module.css'

const EventDetails = (props) => {
    var desc = props.description;
    
    return (
        <div className={styles.Evecont}>
            <p className={styles.hdn1}>details</p>
            {/* <p className={styles.hdn2}> Isme date and time denge, aur jo details hogi Neeche bold kardenge</p> */}
            <p className={styles.desc} style={{whiteSpace: "pre-line"}}> {props.description}</p>
            <p className={styles.date}>
                {' '}
                {props.date}
                <br />
                {props.time}
                <hr />
            </p>
        </div>
    )
}

export default EventDetails

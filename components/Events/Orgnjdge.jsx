import styles from '/styles/EventDetails.module.css'
import Contact from './Contact'
import Odata from './Odata'
import Jdata from './Jdata'
const OrganizerContainer = (props) => {
    const organiser = props.organiser

    
    return (
        <div className={styles.Evecont}>
            <p className={styles.hdn1}>Contact the Organizers</p>
            <p className={styles.desc}>
                Want more details related to this event, feel free to contact the
                Event Organiser.
            </p>
                {organiser.map((val) => (
                            <Contact
                            key = {val.key} 
                            name = {val.name}
                            email = {val.email}
                            phone = {val.phoneNumber}
                        />  ))};
                
            
            
            
        </div>
    )
}

export default OrganizerContainer
import styles from '/styles/EventDetails.module.css'
import Contact from './Contact'
import Odata from './Odata'
import Jdata from './Jdata'
const OrganizerContainer = (props) => {
    
    return (
        <div className={styles.Evecont}>
            <p className={styles.hdn1}>Contact the Organizers</p>
            
                {/*{Odata.map((val) => {
                    return (
                        <Contact imgsrc={val.imgsrc}
                        key = {val.id}
                            name={val.name}
                            email={val.email}
                            phone={val.phoneNumber}
                            
                        />
                    );
                })}*/}
                <Contact name = {props.name}
                            email = {props.email}
                            phone = {props.phone}
                        />
            
            
            
        </div>
    )
}

export default OrganizerContainer
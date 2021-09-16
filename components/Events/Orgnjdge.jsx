import styles from '/styles/Orgnjdge.module.css'
import Card from './Card'
import Odata from './Odata'
import Jdata from './Jdata'
const OrganizerContainer = () => {
    return (
        <div className={styles.pplcon}>
            <p className={styles.hdn1}>Organisers</p>
            <div className={styles.carousel}>
                {Odata.map((val) => {
                    return (
                        <Card imgsrc={val.imgsrc}
                        key = {val.id}
                            name={val.name}
                            link1={val.link1}
                            link2={val.link2}
                            link3={val.link3}
                        />
                    );
                })}
            </div>
            
            
        </div>
    )
}

export default OrganizerContainer
import styles from '/styles/Header.module.css'
import HButtons from './HButtons'

const Header = () => {
    return (
        <>
        <div className={styles.hbody}>
            <p className={styles.heading}><span>Create jaw dropping virtual</span> and hybrid events</p>
            <p className={styles.desciption}>Welcome is the all-in-one virtual and hybrid<br/> event platform to power incredible<br/> experiences</p>
            <HButtons /> 
            
        </div>
        
        
        </>
    )
}

export default Header
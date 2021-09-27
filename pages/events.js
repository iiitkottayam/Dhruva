import Footer from '@components/Footer/Footer'
import Navbar from '@components/Nav/Navbar'
import { Event } from '@components/AllEvents/Event'
import styles from '../styles/Team.module.css'

const team = () => {
    return (
        <>
            <div className={styles.container}>
                <Navbar/>
                <Event/>
            </div>
            <Footer/>
        </>
    )
}

export default team;

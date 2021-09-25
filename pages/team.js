import Footer from '@components/Footer/Footer'
import Navbar from '@components/Nav/Navbar'
import { Team } from '@components/Team/Team'
import styles from '../styles/Team.module.css'

const team = () => {
    return (
        <>
            <div className={styles.container}>
                <Navbar/>
                <Team/>
            </div>
            <Footer/>
        </>
    )
}

export default team

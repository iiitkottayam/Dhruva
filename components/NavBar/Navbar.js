import styles from "./Navbar.module.css"
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className={styles.topnav}>
            <Link href='/'>Dhruva</Link>
            <div className={styles.topnavRight}>
                <Link href='#AboutUs'>AboutUs</Link>
                <Link href='#Events'>Events</Link>    
                <Link href='#FAQ'>FAQ</Link>    
                <Link href='#Prize'>Prize</Link>    
                <Link href='#Sponsors'>Sponsors</Link>  
                <Link href='#Team'>Team</Link>      
            </div>
        </div>
    )
}

export default Navbar

import Footer from '@components/Footer/Footer'
import Navbar from '@components/Nav/Navbar'
import Head from 'next/head'
import { Team } from '@components/Team/Team'
import styles from '../styles/Team.module.css'

const team = () => {
    return (
        <>
            <Head>
                <title>DHRUVA - IIITK Team </title>
                <meta
                    name="description"
                    content="Dhruva IIITK Technical Fest"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <Navbar />
                <Team />
            </div>
            <Footer />
        </>
    )
}

export default team

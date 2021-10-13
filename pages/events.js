import Footer from '@components/Footer/Footer'
import Navbar from '@components/Nav/Navbar'
import Head from 'next/head'
import { Event } from '@components/AllEvents/Event'
import styles from '../styles/Team.module.css'

const team = () => {
    return (
        <>
            <Head>
                <title>DHRUVA - IIITK | Events </title>
                <meta
                    name="description"
                    content="Dhruva IIITK Technical Fest"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <Navbar />
                <Event />
            </div>
            <Footer />
        </>
    )
}

export default team

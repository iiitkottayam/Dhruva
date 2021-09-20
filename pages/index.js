import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '@components/Footer/Footer'
import Header from '@components/ComingSoon/Header'
import Navbar from '@components/Nav/Navbar'
import Timeline from '@components/Timeline/Timeline'

import About from '@components/About/About'
import { Sponsors } from '@components/Sponsor/Sponsors'
import Speakers from '@components/Speakers/Speakers'
import Sponsor_Faq from '@components/Sponsor_Faq/Sponsor_Faq'
import Attendes from '@components/AttendeesSpeakers/attendes'

export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>DHRUVA - IIITK</title>
                    <meta
                        name="description"
                        content="Dhruva Indian Institute of Information Technology IIIT Kottayam Technical Fest"
                    />
                    <meta
                        property="og:title"
                        content="Dhruva Technical Fest IIIT Kottayam"
                    />
                    <meta
                        property="og:description"
                        content="Dhruva - Indian Institute of Information Technology (IIIT) Kottayam Technical Fest"
                    />
                    <meta
                        property="og:url"
                        content="https://www.dhruvaiiitk.tech/"
                    />
                    <meta property="og:type" content="website" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Navbar />
                <Header />
                <About />
                <Attendes />
                <Speakers />
                <Timeline />
                <Sponsors />

                <Sponsor_Faq />
            </div>

            <Footer></Footer>
        </>
    )
}

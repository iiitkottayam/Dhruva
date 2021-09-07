import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '@components/Footer/Footer'
import Header from '@components/ComingSoon/Header'
import Navbar from '@components/Nav/Navbar'
import About from '@components/About/About'
import { Sponsors } from '@components/Sponsor/Sponsors'
import Sponsor_Faq from '@components/Sponsor_Faq/Sponsor_Faq'


export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>DHRUVA - IIITK</title>
        <meta name="description" content="Dhruva IIITK Technical Fest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Header />
      <About/> 
      <Sponsors/>
      <Sponsor_Faq />
    </div>
    <Footer></Footer>
    </>
  )
}

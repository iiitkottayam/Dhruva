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
import Intro from '@components/Introduction/Intro'
import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

  const [show , setShow] = useState(true);
  const [height , setHeight] = useState("100vh")
    useEffect(() => {
            const timer = setTimeout(() => {
                setShow(false);
                setHeight(null)
            }, 6800);
            return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        AOS.init({
        });
    }, []);
  return (
    <>
    <div className={styles.container} style={{height:height}}>
      <Head>
        <title>DHRUVA - IIITK</title>
        <meta name="description" content="Dhruva IIITK Technical Fest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        show ?
          <Intro/>
        :
        <>
          <Navbar/>
          <Header />
          <About/> 
          <Attendes />
          <Speakers />
          <Timeline />
          <Sponsors/>
          <Sponsor_Faq />
        </>
      }
      

    </div>
    {
      !show && <Footer></Footer>
    }
    
    </>
  )
}

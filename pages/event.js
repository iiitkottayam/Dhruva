import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '@components/Footer/Footer'
import EventHeading from '@components/EventPage/EventHeading'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>DHRUVA - IIITK | Event </title>
        <meta name="description" content="Dhruva IIITK Technical Fest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <EventHeading title = "Event Name" content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius rerum numquam beatae qui odio ex nulla, minus nobis a laborum! At odio ipsum error facere veniam similique earum exercitationem!"></EventHeading>
    </div>
    <Footer></Footer>
    </>
  )
}

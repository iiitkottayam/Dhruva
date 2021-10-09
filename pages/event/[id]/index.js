import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import Footer from '@components/Footer/Footer'
import EventHeading from '@components/Events/EventHeading'
import Navbar from '@components/Nav/Navbar'
import EventDetails from '@components/Events/EventDetails'
import OrganizerContainer from '@components/Events/Orgnjdge'
import { events } from '@data/events'

export const getStaticPaths = async () => {
    const paths = events.map((event) => {
        return {
            params: { id: event.link },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const link = context.params.id

    const data = events.filter(function (el) {
        return el.link == link
    })
    return {
        props: {
            name: data[0].name,
            poster: data[0].poster,
            description: data[0].description,
            register: data[0].registration,
            date: data[0].date,
            time: data[0].time,
            organisers: data[0].organisers,
            tag: data[0].tag
        },
    }
}
export default function Home(props) {
    const organisers = props.organisers
    
    

    
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>DHRUVA - IIITK | {props.name} </title>
                    <meta
                        name="description"
                        content="Dhruva IIITK Technical Fest"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Navbar />
                <EventHeading
                    title={props.name}
                    content = {props.tag}
                    register={props.register}
                    eventPoster={props.poster}
                ></EventHeading>
                <EventDetails
                    description={props.description}
                    date={props.date}
                    time={props.time}
                />
                <OrganizerContainer organiser = {organisers}/>
            </div>
            <Footer />
        </>
    )
}

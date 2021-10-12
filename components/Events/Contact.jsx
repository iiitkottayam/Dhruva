import styles from '/styles/EventDetails.module.css'
import { FaLinkedin, FaTwitter, FaFacebookF } from 'react-icons/fa'
import Link from 'next/dist/client/link'

const Contact = (props) => {
    return (
        <div className = {styles.contact}>             
            <p >
                {props.name}
                <br />
                {props.email}
                <br />
                {props.phone}
                
            </p>
            <hr />
        </div>
        )
}

export default Contact

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaDiscord,
    FaEnvelope,
    FaHeart,
} from 'react-icons/fa'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/betalab-horizontal.png'
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerUpper}>
                <div className={styles.logo}>
                    <Image src={logo} alt="Beta Labs Logo" priority={true} />
                </div>
                <div className={styles.icons}>
                    <ul>
                        <li>
                            <Link href="#" passHref={true}>
                                <FaEnvelope />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" passHref={true}>
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" passHref={true}>
                                <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://twitter.com/techclub_iiitk"
                                passHref={true}
                            >
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" passHref={true}>
                                <FaDiscord />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerLower}>
                <p>
                    Made with <FaHeart style={{ color: 'hotpink' }} /> by
                    BetaLabs{' '}
                </p>
            </div>
        </div>
    )
}

export default Footer

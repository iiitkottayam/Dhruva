import Style from './FAQ.module.css'

import { HButton, HButtonLight } from '@components/Accessories/button'
import { ImArrowUpRight2 } from 'react-icons/im'


const Sponsor_Faq = () => {

    return (
        <div className={Style.wrapper} id='FAQ'>
            {' '}
            {/* in-page navigation to FAQ section on clicking FAQ from the navbar */}{' '}
            {/* also added smooth scroll for the entire page in globals.css */}
            <div className={Style.backgrounds}>
                {' '}
                {/* A layer containing the background for the sponsor and faq section, placed below the content using a negative z-index */}
                <div className={Style.SponsorBack}></div>
                <div className={Style.FaqBack}></div>
            </div>
            <div className={Style.content}>
                {' '}
                {/* Contains all the content displayed on the FAQ component */}
                <div className={Style.sponsor}>
                    <p>Want to be a Sponsor?</p>
                    <div>
                        <HButton
                            name={'Apply'}
                            icon={<ImArrowUpRight2 />}
                            link={'https://bit.ly/dhruva_sponsor'}
                        />
                    </div>{' '}
                    {/* Included an additional attribute - icon for the up-left arrow, also made the required change in button.jsx */}
                </div>

                <div className={Style.contacts}>
                    <div className={Style.faq}>
                        <span>FAQ</span>

                        <p className={Style.subtitle}>
                            Feeling Overwhelmed?<br></br>Reach out to us.
                        </p>
                        <a href="#">
                            <HButtonLight
                                name={'Contact Us'}
                                icon={<ImArrowUpRight2 />}
                            />
                        </a>
                    </div>
                    <div className={Style.chat}>
                        <div className={Style.chatW}>
                            Am I eligible for the events?
                        </div>
                        <div className={Style.chatB}>
                            As long as you are currently enrolled in an
                            Undergraduate degree program, you can participate in
                            any event.
                        </div>
                        <div className={Style.chatW}>
                            I don&apos;t have any prior experience with the
                            event. Should I participate?
                        </div>
                        <div className={Style.chatB}>
                            Don&apos;t worry. Just check out our event page and
                            hop on to our discord server. We will make sure you
                            are equipped with the essential resources.
                        </div>
                        <div className={Style.chatW}>
                            What if my doubts are not listed here?
                        </div>
                        <div className={Style.chatB}>
                            We are happy to resolve all the doubts, just email
                            us at{' '}
                            <a href="mailto:techclub@iiitkottayam.ac.in">
                                techclub@<wbr/>iiitkottayam.ac.in
                            </a>
                            .
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsor_Faq

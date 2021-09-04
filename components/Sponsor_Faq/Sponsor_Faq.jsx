import Style from './FAQ.module.css'
import HButton from '@components/Accessories/button'
import {ImArrowUpRight2} from 'react-icons/im'

const Sponsor_Faq = () => {
    return (
        <div className = {Style.wrapper}>
            <div className = {Style.backgrounds}>               {/* A layer containing the background for the sponsor and faq section, placed below the content using a negative z-index */}
                <div className = {Style.SponsorBack}></div>
                <div className = {Style.FaqBack}></div>
            </div>  
            <div className = {Style.content}>               {/* Contains all the content displayed on the page */}              
                <div className = {Style.sponsor}>
                    <p>Want to be a Sponsor?</p>
                    <div className = {Style.ButtonWrapper}><HButton name = {"Apply"} icon = {<ImArrowUpRight2/>}/></div>    {/* Included an addition attribute - icon for the up-left arrow */}
                </div>
                <div className = {Style.contacts}>
                    <div className = {Style.faq}>
                        <span>FAQ</span>
                        <p className = {Style.subtitle}>Having some doubt?<br></br>Reach out to us</p>
                        <HButton name = {"Contact us"} icon = {<ImArrowUpRight2/>}/>
                    </div>
                    <div className = {Style.chat}>  
                        <div className = {Style.chatW}>Lorem ipsum dolor sit amet, ?</div>
                        <div className = {Style.chatB}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</div>
                        <div className = {Style.chatW}>Lorem ipsum dolor sit amet, ?</div>
                        <div className = {Style.chatW}>Lorem ipsum dolor sit amet, ?</div>
                        <div className = {Style.chatW}>Lorem ipsum dolor sit amet, ?</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsor_Faq

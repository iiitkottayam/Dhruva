import Link from 'next/link'
import styled from 'styled-components'
import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
/*This code is for the style of right navbar which is changed when screen size is mobile. Also the if statement inside style components is for underline transition for the nav options when the screen is not mobile size*/
/*Code Update: The burger and Right Navbar has been kept constant for both desktop and mobile screens*/

const Ul = styled.ul`
    li{
      position: relative;
      left: 16.5%;
      top: -16.5%;
      margin: 20px auto 20px;
      text-align: center;
      cursor: pointer;
      width: 200px;
      transition: transform 0.3s;
      -webkit-transform: ${({ open }) => open ? 'translate(0%, 0%)' : 'translate(500%, 0%)'};
      transform: ${({ open }) => open ? 'translate(0%, 0%)' : 'translate(500%, 0%)'};
    }

    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    font-size: 0.7em;
    padding: 0;
    
    content: "";
    position: fixed;
    width: 150vw;
    height: 150vh;
    background: rgba(12, 13, 13, 0.92);
    border-bottom-left-radius: 100%;
 
    z-index: -1;
    -webkit-transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
    transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
    -webkit-transform: ${({ open }) => open ? '' : 'translateX(100%) translateY(-100%)'};
    transform: ${({ open }) => open ? '' : 'translateX(100%) translateY(-100%)'}; 

    margin: 0px;
    top: 0;
    right: 0;         
    overflow: hidden;       
    flex-flow: column nowrap; 
`

const RightNav = ({ open, setOpen }) => {
  const router = useRouter();
  
  if(!open && router.pathname == "/"){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }

  function toggle(){
    setTimeout(() => {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    },3000);
    if(open){
      return setOpen(!open);
    }
    else{
      return setOpen(open);
    }
  }
  return (
    <div className='overlay overlay-contentpush open'>
        <Ul open={open}>      
          <li onClick = {toggle}><Link href='/#Header' passHref>Home</Link></li>
          <li onClick = {toggle}><Link href='/#AboutUS' passHref>About Us</Link></li>
          <li onClick = {toggle}><Link href='/events' passHref>Events</Link></li>
          <li onClick = {toggle}><Link href='/#Sponsors' passHref>Sponsors</Link></li>
          <li onClick = {toggle}><Link href='/#FAQ' passHref>FAQ</Link></li>
          <li onClick = {toggle}><Link href='/team' passHref>Team</Link></li>
        </Ul>
    </div>
    
  )
}
export default RightNav

import Link from 'next/link';
import styled from 'styled-components';

/*This code is for the style of right navbar which is changed when screen size is mobile. Also the if statement inside style components is for underline transition for the nav options when the screen is not mobile size*/
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 0.5em;
  li {   
    text-align: center;
    width: 60%;     
    padding-right: 3em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    cursor: pointer;    
  }    
  ${ function ({open}){
    if (open==false) {
      return (
        `.hover-underline-animation {
          display: inline-block;
          position: relative;            
        }
        .hover-underline-animation2 {
          display: inline-block;
          position: relative;            
        }
        .hover-underline-animation:after {
          content: '';
          position: absolute;         
          width: 60%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;          
          left: 0;
          background-color: #fff;
          transform-origin: bottom right;
          transition: transform 1s ease-out;
        } 
        .hover-underline-animation2:after {          
          content: '';
          position: absolute;         
          width: 45%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;          
          left: 0;
          background-color: #fff;
          transform-origin: bottom right;
          transition: transform 1s ease-out;
        } 
        .hover-underline-animation:hover:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        } 
        .hover-underline-animation2:hover:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        } 
        `       
      );
    }else{
      return ``;
    }
  }

  }
  @media (min-width: 0px) {
    content: "";
    margin: 0px;
    flex-flow: column nowrap;
    
    background-color: #0D2538;    
    position: fixed;
    overflow: hidden;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
 
    background: rgba(1, 1, 1, 0.60 );
    border-bottom-left-radius: 200%;
    z-index: -1;
    -webkit-transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
    transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
    -webkit-transform: ${({ open }) => open ? 'translateX(0%)' : 'translateY(-100%)'};
            transform: ${({ open }) => open ? 'translateX(0%)' : 'translateY(-100%)'};
  
            padding-top: 1rem;
    
           .Ul{
            position: relative;
            padding: 0;
            margin: 0;
            z-index: 2;
           }

            .li {
              position: relative;
            	display: block;
	         -webkit-transition-delay: 0.8s;
          transition-delay: 0.8s;
	opacity: 100;
	text-align: center;
	color: #fff;
	overflow: hidden; 
	font-family: 'Montserrat', sans-serif;
	font-size: 8vh;
	font-weight: 900;
	line-height: 1.15;
	letter-spacing: 3px;
  tranform-origin: 100%;
	-webkit-transform: ${({ open }) => !open ? 'translate(100%)' : '0%'};
          transform: ${({ open }) => !open ? 'translate(100%)' : '0%'};
	-webkit-transition: opacity .2s ease, -webkit-transform .3s ease;
	transition: opacity .2s ease, -webkit-transform .3s ease;
	transition: opacity .2s ease, transform .3s ease;
	transition: opacity .2s ease, transform .3s ease, -webkit-transform .3s ease;
	margin-top: 0;
	margin-bottom: 0;
            }


            .li a{
              position: relative;
  	text-decoration: none;
  	color: rgba(255,255,255,0.6);
	overflow: hidden; 
	cursor: pointer;
	padding-left: 5px;
	padding-right: 5px;
	font-weight: 900;
	z-index: 2;
	display: inline-block;
	text-transform: uppercase;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear; 
            }
            
 
            &:active{
              opacity: 1;
              -webkit-transform: ${({ open }) => open ? 'translateX(0%)' : ''};
                      transform: ${({ open }) => open ? 'translateX(0%)' : ''};
              -webkit-transition: opacity .3s ease, color .3s ease, -webkit-transform .3s ease;
              transition: opacity .3s ease, color .3s ease, -webkit-transform .3s ease;
              transition: opacity .3s ease, transform .3s ease, color .3s ease;
              transition: opacity .3s ease, transform .3s ease, color .3s ease, -webkit-transform .3s ease;
             }


  }
`;

const RightNav = ({ open }) => {
  return (
    <div className='overlay overlay-contentpush open'>
       <Ul open={open}>      
      <li className='hover-underline-animation'><Link href='#AboutUS' passHref>AboutUs</Link></li>
      <li className='hover-underline-animation'><Link href='#Events' passHref>Events</Link></li>
      <li className='hover-underline-animation2'><Link href='#FAQ' passHref>FAQ</Link></li>
      <li className='hover-underline-animation2'><Link href='#Prize' passHref>Prize</Link></li>
      <li className='hover-underline-animation'><Link href='#Sponsors' passHref>Sponsors</Link></li>
      <li className='hover-underline-animation2'><Link href='#Team' passHref>Team</Link></li>
    </Ul>
    </div>
  )
}

export default RightNav
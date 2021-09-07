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
  @media (max-width: 920px) {
    margin: 0px;    
    flex-flow: column nowrap;
    background-color: #0D2538;    
    position: fixed;
    background: rgba( 1, 1, 1, 0.60 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.0px );
    -webkit-backdrop-filter: blur( 13.0px );    
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding-top: 1rem;
    transition: transform 0.3s ease-in-out;
    li {
      font-size: 1.5rem;
      padding-top: 1.5rem;
      color: #fff;      
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <div className='overlay overlay-contentpush open'>
    <Ul open={open}>      
      <li className='hover-underline-animation'><Link href='#AboutUS' passHref>AboutUs</Link></li>
      <li className='hover-underline-animation'><Link href='/event' passHref>Events</Link></li>
      <li className='hover-underline-animation2'><Link href='#FAQ' passHref>FAQ</Link></li>
      <li className='hover-underline-animation2'><Link href='#Prize' passHref>Prize</Link></li>
      <li className='hover-underline-animation'><Link href='#Sponsors' passHref>Sponsors</Link></li>
      <li className='hover-underline-animation2'><Link href='#Team' passHref>Team</Link></li>
    </Ul>
    </div>
  )
}

export default RightNav
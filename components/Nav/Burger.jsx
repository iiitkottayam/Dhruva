import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import RightNav from './RightNav';

/*This code is divided into 3 parts, the Styled burgerbar formed when the screen become mobile size, when clicked its Open state becomes tru and is passed on RightBar to change the navigation view */
/*Code update: Burger has been now kept fixed for both mobile and desktop screens*/

const StyledBurger = styled.div`
width: 30px;
height: 30px;
position: fixed;
top: 1.5rem;
right: 1.25rem;
overflow: visible;
z-index: 2;
display: flex;
cursor: pointer;
  @media (min-width: 0px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div { 
 
    cursor: pointer;  
    height: 2px;
    margin-bottom:7px;
    background-color: ${({ open }) => open ? 'white' : 'white'};
    border-radius: 0.625rem;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform-origin: 0%;
      width: ${({ open }) => open ? '30px': '15px'};
      transform: ${({ open }) => open ? 'rotate(42deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      width: 30px;
      transform-origin: centre;
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      
      transform-origin: 0%;
      width: ${({ open }) => open ? '30px': '15px'};

      align-self: flex-end;
      transform: ${({ open }) => open ? 'rotate(-42deg)' : 'rotate(0)'};
    }
  }
    &:hover .first {
      width: ${({ open }) => open ? '': '30px'};
      
  }
  &:hover .third {
      width: ${({ open }) => open ? '': '30px'};
     
    }
  
  

  }
  }
}
  
`
let init = "/team";
const Burger = () => {
  const [open, setOpen] = useState(false);
  
  const router = useRouter();
  useEffect(() => {
    function initial(path){
      if(path !== init){
        document.getElementsByTagName("body")[0].style.overflow = "auto";
      }
      init = path;
    }
    initial(router.pathname);
  })

  function myFunc(){
    open ? document.getElementsByTagName("body")[0].style.overflow = "hidden" : document.getElementsByTagName("body")[0].style.overflow = "auto";
  };
  useEffect(() => {
      window.addEventListener('scroll', myFunc)
      return () => window.removeEventListener('scroll', myFunc);
  })
  return (
    <>
      <div className = "circleBack">
        <style jsx>{`
          .circleBack{
            position: fixed;
            ${open ? "right: 16.5px;" : "right: 12px;"} 
            top: 13px;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            ${open ? "background: transparent": "background: #20202062"}
          }
        `}</style>
        <StyledBurger open={open} onClick={() => {!open ? document.getElementsByTagName("body")[0].style.overflow = "hidden" : document.getElementsByTagName("body")[0].style.overflow = "auto"; return setOpen(!open)}}>        
          <div className="first"/>
          <div className="second"/>
          <div className="third"/>     
        </StyledBurger>
      </div>      
      <RightNav open={open} setOpen = {setOpen}/>
    </>
  )
}

export default Burger
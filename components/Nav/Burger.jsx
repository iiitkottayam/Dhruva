import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

/*This code is divided into 3 parts, the Styled burgerbar formed when the screen become mobile size, when clicked its Open state becomes tru and is paased on RightBar to change the navigation view */
const StyledBurger = styled.div`
width: 2rem;
height: 2rem;
position: absolute;
top: 15px;
right: 20px;
z-index: 500;
display: none;
  @media (max-width: 920px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {   
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? 'white' : 'white'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>      
      <StyledBurger open={open} onClick={() => setOpen(!open)}>        
        <div />
        <div />
        <div />        
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}

export default Burger
import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

/*This code is divided into 3 parts, the Styled burgerbar formed when the screen become mobile size, when clicked its Open state becomes tru and is paased on RightBar to change the navigation view */
const StyledBurger = styled.div`
width: 1.875rem;
height: 1.5rem;
position: absolute;
top: 1.5rem;
right: 1.25rem;
overflow: visible;
z-index: 500;
display: flex;
  @media (min-width: 0px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div { 
 
    cursor: pointer;  
    height: 0.25rem;
    background-color: ${({ open }) => open ? 'white' : 'white'};
    border-radius: 0.625rem;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform-origin: 0%;
      
      width: 1.1rem;
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      width: 1.875rem;
      transform-origin: centre;
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};

    }
    &:nth-child(3) {
      
      transform-origin: right;
      width: 1.1rem;
      align-self: flex-end;
    
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
  }
`

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
import styled from 'styled-components';
import Burger from './Burger';
import Link from 'next/link'

const Nav = styled.nav`
  overflow-x: hidden;
  top: 0;  
  position: absolute; 
  width: 100%;
  height: 5rem;  
  font-family: var(--title);
  font-size: 2.5em;
  background-color: black;
  color: white;
  padding-top: 0.25rem;
  padding-left: 2rem;  
  display: flex;
  justify-content: space-between;
  z-index: 10;
  .logo {
    padding: 15px 0;
    cursor: pointer;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Link href="/" passHref>Dhruva</Link>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
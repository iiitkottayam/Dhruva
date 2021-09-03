import styled from 'styled-components';
import Burger from './Burger';
import Link from 'next/link'

const Nav = styled.nav`
  top: 0;  
  position fixed; 
  width: 100%;
  height: 2em;  
  font-family: var(--title);
  font-size: 2.5em;
  background-color: black;
  color: white;
  padding-top: 10px;
  padding-left: 30px;
  padding-botton: 20px;
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
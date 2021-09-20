import styled from 'styled-components'
import Burger from './Burger'
import Link from 'next/link'

const Nav = styled.nav`
    overflow-x: hidden;
    top: 0;
    position: absolute;
    width: 100%;
    height: 5rem;
    font-family: var(--title);
    font-size: 2.5em;
    background-color: none;
    color: white;
    padding-top: 0.25rem;
    padding-left: 2rem;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    .logo {
        padding: 15px 0;
        cursor: pointer;
        font-size: 2rem;
        display: flex;
        align-items: center;
    }
`

const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
                <img
                    src="/png/dhruva-dark-icon.png"
                    style={{ height: '40px', marginRight: '3px' }}
                ></img>

                <Link href="/" passHref>
                    Dhruva
                </Link>
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar

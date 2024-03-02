import React from 'react'
import logo from '../assets/logo/LogoV3.png'
import { LinkContainer } from 'react-router-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Image, Nav, Dropdown } from "react-bootstrap"

export default function Navigation() {
    return (
        <>
            <Navbar bg="light" className='shadow-lg text-decoration-none justify-content-between border-bottom border-dark'>
                <LinkContainer to="/">
                    <Navbar.Brand className="px-3">
                        <Image src={logo} height="32" alt='Doballo Logo' className="me-1" />
                        Doballo
                    </Navbar.Brand>
                </LinkContainer>
                <Nav variant="underline" className='mx-2 d-none d-md-flex' >
                    <LinkContainer to='/'>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/shop' >
                        <Nav.Link>Shop</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/warenkorb'>
                        <Nav.Link>Warenkorb</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Dropdown className="px-2 d-md-none" drop="start">
                    <Dropdown.Toggle id="MenuDropdown">
                        <span><svg width="20" aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
                            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                                d='M1 1h15M1 7h15M1 13h15' />
                        </svg></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <LinkContainer to='/'>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <LinkContainer to='/shop' >
                                <Nav.Link>Shop</Nav.Link>
                            </LinkContainer>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <LinkContainer to='/warenkorb'>
                                <Nav.Link>Warenkorb</Nav.Link>
                            </LinkContainer>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar >
        </>
    )
}

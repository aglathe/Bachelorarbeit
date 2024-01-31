import React from 'react'
import logo from '../assets/logo/LogoV3.png'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Image, Row, Col, Nav, Dropdown, NavItem, Accordion, Button, NavDropdown } from "react-bootstrap"
import { useAccordionButton } from 'react-bootstrap'

export default function Navigation() {
    const [showMenu, setShowMenu] = useState('hidden')
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


            {/*<nav className='bg-white dark:bg-gray-900 shadow-md font-oswald'>
                <div className='flex flex-wrap items-center justify-between ml-0 mr-0 p-4 border-b-2 border-gray-400'>
                    <NavLink to='/' className='flex items-center space-x-3 '>
                        <img src={logo} className='h-8' alt='Doballo Logo' />
                        <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-oswald'>Doballo</span>
                    </NavLink>
                    <button data-collapse-toggle='navbar-default' type='button'
                        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                        aria-controls='navbar-default' aria-expanded='false' id='collapse-button' onClick={toggleMenu}>
                        <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
                            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                                d='M1 1h15M1 7h15M1 13h15' />
                        </svg>
                    </button>
                    <div className={(showMenu) + ' w-full md:block md:w-auto id="navbar-default" '}>
                        <ul className='navbar-top'>
                            <li>
                                <NavLink to='/' className={({ isActive }) => (isActive ? 'text-orange-400 dark:text-orange-400' : 'text-gray-900 dark:text-white') + ' block py-2 px-3 rounded hover:bg-gray-300  hover:text-orange-600  dark:hover:bg-gray-700 dark:hover:text-orange-600 md:dark:hover:bg-gray-700'}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/shop' className={({ isActive }) => (isActive ? 'text-orange-400 dark:text-orange-400' : 'text-gray-900 dark:text-white') + ' block py-2 px-3 rounded hover:bg-gray-300  hover:text-orange-600  dark:hover:bg-gray-700 dark:hover:text-orange-600 md:dark:hover:bg-gray-700'}>
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/warenkorb' className={({ isActive }) => (isActive ? 'text-orange-400 dark:text-orange-400' : 'text-gray-900 dark:text-white') + ' block py-2 px-3 rounded hover:bg-gray-300  hover:text-orange-600  dark:hover:bg-gray-700 dark:hover:text-orange-600 md:dark:hover:bg-gray-700'}>
                                    Warenkorb
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
    */}
        </>
    )
}

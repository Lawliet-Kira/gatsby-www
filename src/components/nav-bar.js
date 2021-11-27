import React from 'react'
import { Link, navigate } from 'gatsby'
import { getUser, isLoggedIn, logout } from '../services/auth'
import "./scss/nav-bar.scss"
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function NavBar() {

    let greetingMessage = ""

    if (isLoggedIn()) {
        greetingMessage = `Hello ${getUser().name}`
    } else {
        greetingMessage = "You are not logged in"
    }

    const navLogOut = (event) => {
        event.preventDefault()
        logout(() => navigate(`/app/login`))
    }

    return (
        <div
            className="navbar" 
        >
            <span > {greetingMessage} </span>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Gatsby</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/app/profile">Profile</Nav.Link>
                        { isLoggedIn() ? (
                            <Nav.Link
                                href="/"
                                onClick={navLogOut}
                            >
                                Logout
                            </Nav.Link>
                        ) : null }
                    </Nav>
                </Container>
            </Navbar>
            
        </div>
    )

}
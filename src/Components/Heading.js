import React from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar,
    Nav,
    NavItem,
    Container,
    NavbarBrand

}from 'reactstrap'

export const Heading = () => {
    return (
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href="/"> My Team </NavbarBrand>
            </Container>
            <Nav>
                <NavItem>
            <Link className="btn btn-primary" to="/add"> Add User </Link>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

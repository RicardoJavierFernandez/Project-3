import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="home">Forcastly</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="inventory">Inventory</Nav.Link>
                <Nav.Link href="forecast">Forecast</Nav.Link>
                <Nav.Link href="createorders">Orders</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavBar;


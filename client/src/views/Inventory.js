import React, { Component } from 'react';
import NavBar from '../components/NavBar';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


class Inventory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
            <NavBar></NavBar>
            <Container>
                <Col md={{ span: 4, offset: 4 }}>
                    <h1>
                        Inventory Page
                    </h1>
                </Col>
            </Container>
            </div>

        )
    }
}

export default Inventory;
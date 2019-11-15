import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import API from '../utils/API';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';


class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    pullOrders = () => {
        API.getOrders()
            .then((dbOrders) => {
                let dbData = []
                // we select index 0  in the data because sequelize
                // returns the same array twice per the documentation on raw queries 
                // https://sequelize.org/v4/manual/tutorial/raw-queries.html 
                dbOrders.data[0].map((row) => {
                    dbData.push(row);
                });
                console.log(dbData);
                this.setState({orders: dbData}, () => console.log(this.state.orders));
            });
    }

    componentDidMount() {
        this.pullOrders();
    }

    render() {
        return(
            <div>
            <NavBar></NavBar>
            <Container>
            <Col md={{ span: 4, offset: 4 }}>
                    <br />
                    <h2>Order History</h2>
                    <br />
                </Col>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Transaction</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.orders.map((order, index) =>
                    <tr>
                    <td>{order.transaction_type}</td>
                    <td>{order.product_name}</td>
                    <td>{parseInt(order.quantity)}</td>
                    <td>{order.transaction_date}</td>
                    </tr>
                    )}

                </tbody>
                </Table>
            </Container>
            </div>

        )
    }
}

export default Inventory;
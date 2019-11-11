import React, {Component} from 'react';
import API from '../utils/API';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transTypes: [],
            products: [],
            selectedTransaction: '',
            selectedProduct: '',
            price: 0,
            quantity: 0
        }
    }

    getTransactionTypes = () => {
        API.getAllTransactionTypes()
            .then((dbResponse) => {
                this.setState({transTypes: dbResponse.data})
            });
    }

    getProducts = () => {
        API.getAllProducts()
            .then((dbResponse) => {
                this.setState({products: dbResponse.data}, () => console.log(this.state.products));
            });
    }

    componentDidMount() {
        this.getTransactionTypes();
        this.getProducts();
    }

    handleInputChange = (e) => {
        e.persist();

        this.setState({[e.target.name]: e.target.value});
    }

    submitOrder = (e) => {
        e.preventDefault();

        let transaction = document.getElementById('transactionSelection');
        let product = document.getElementById('productSelection');

        this.setState({
            selectedTransaction: transaction.options[transaction.selectedIndex].id, 
            selectedProduct: product.options[product.selectedIndex].id
        }, 
        () => API.createOrder({
            transaction_type_id: this.state.selectedTransaction,
            product_id: this.state.selectedProduct,
            quantity: this.state.quantity, 
            price: this.state.price
        })
        .then((dbResponse) => console.log(dbResponse))
        .catch((err) => console.log(err))
        );
    }

    render() {
        return (
            <div>
                <Container expand="md">
                    <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Transaction Type</Form.Label>
                            <Form.Control as="select" id="transactionSelection">
                                {this.state.transTypes.map((transType, index) => 
                                    <option key={index} value={transType.transaction_name} id={transType.transaction_type_id}>{transType.transaction_type}</option>
                                )}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Product SKU</Form.Label>
                            <Form.Control as="select" id="productSelection">
                            {this.state.products.map((product, index) => 
                                <option key={index} value={product.product_name} id={product.product_id}>{product.product_sku}</option>
                            )}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" rows="1" name="price" onChange={this.handleInputChange} />
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="text" rows="1" name="quantity" onChange={this.handleInputChange} />
                        </Form.Group>
                    </Form>
                    <Button variant="success" onClick={this.submitOrder}>Order Now</Button>
                </Container>
            </div>
        )
    }
}

export default CreateOrder;
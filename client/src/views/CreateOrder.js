import React, {Component} from 'react';
import API from '../utils/API';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
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
                this.setState({products: dbResponse.data});
            });
    }

    componentDidMount() {
        this.getTransactionTypes();
        this.getProducts();
    }

    handleInputChange = (e) => {

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
        .then((dbResponse) => {
            console.log(dbResponse);
            this.setState({price:'', quantity:''}, () => {
                document.getElementById('price').value = "";
                document.getElementById('quantity').value = "";
            })
        })
        .catch((err) => alert('There was an error!', err))
        );
    }

    render() {
        // Enable boolean for the button
        const isEnabled = this.state.price > 0 && this.state.quantity > 0;
        return (
            <div>
                <Container>
                    <Col md={{ span: 4, offset: 4 }}>
                    <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Transaction Type</Form.Label>
                            <Form.Control as="select" id="transactionSelection">
                                {this.state.transTypes.map((transType, index) => 
                                    <option 
                                        key={index} 
                                        value={transType.transaction_name} 
                                        id={transType.transaction_type_id}
                                    >
                                        {transType.transaction_type}
                                    </option>
                                )}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Product SKU</Form.Label>
                            <Form.Control as="select" id="productSelection">
                            {this.state.products.map((product, index) => 
                                <option 
                                    key={index} 
                                    value={product.product_name} 
                                    id={product.product_id}
                                >
                                    {product.product_sku}
                                </option>
                            )}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" rows="1" name="price" id= "price" onChange={this.handleInputChange} />
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="text" rows="1" name="quantity" id="quantity" onChange={this.handleInputChange} />
                        </Form.Group>
                    </Form>
                    <Button disabled={!isEnabled} variant="success" onClick={this.submitOrder}>Order Now</Button>
                    </Col>
                </Container>
            </div>
        )
    }
}

export default CreateOrder;
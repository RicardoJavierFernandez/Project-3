import React, {Component} from 'react';
import API from '../utils/API';
import forecastModel from '../utils/forecastingModel';
import AsyncSelect from 'react-select/async';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class Forecast extends Component {
    constructor(props) {
        super(props);

    this.state = {
        unitsOrder: '',
        totalOrder: '',
        masterCarton: '',
        salesGrowth: '',
        leadTime: '',
        orderAmount: '',
        selectedProduct: '',
        products: []
    }
}

// retrieve the products in the database
componentDidMount() {
    API.getAllProducts().then((dbResponse) => {
        // console.log(dbResponse.data)
        dbResponse.data.map((row) => {
            this.state.products.push(row.product_id);
        });
        console.log(this.state.products);
    });
}

handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
}

// run forecast model and use output to determine the order quantity
submitAssumptions = (e) => {
    e.preventDefault();

    if(parseFloat(this.state.unitsOrder) >= 0 && parseFloat(this.state.totalOrder) >= 0 && parseFloat(this.state.masterCarton) >= 0) {
        let output = forecastModel.forecastOutput(
            parseFloat(this.state.unitsOrder), 
            parseFloat(this.state.totalOrder), 
            parseFloat(this.state.masterCarton)
        );

        let product = document.getElementById('products');
    
        this.setState(
            {orderAmount: output, selectedProduct: product.options[product.selectedIndex].id}, 
            () => {
                API.getProduct(this.state.selectedProduct).then((apiResponse)=> {
                    if(apiResponse.data.quantity > this.state.orderAmount) {
                        this.setState({orderAmount: 0})
                    }
                    else {
                        this.setState({orderAmount: (this.state.orderAmount - apiResponse.data.quantity)});
                    }
                });
            });
    }
    else {
        this.setState({orderAmount: "Error please input valid numbers greater than zero in the input boxes!"});
    }
}

    render() {
        let optionItems = this.state.products.map((product, index) => 
            <option key={index} id={product}>Product {product}</option>
            )
        console.log(optionItems);

        return(
            <Container >
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Assumption</th>
                        <th>Input</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Product</td>
                        <td>
                            <select id="products">
                                {optionItems}
                            </select>
                        </td>
                        </tr>
                        <tr>
                            <td>Units Order</td>
                            <td>
                                <input type="text" name="unitsOrder"placeholder="Units Ordered" onChange={this.handleChange}></input>
                            </td>
                        </tr>
                        <tr>
                        <td>Total Orders</td>
                            <td>
                                <input type="text" name="totalOrder"placeholder="Total Orders" onChange={this.handleChange}></input>
                            </td>
                        </tr>
                        <tr>
                        <td>Master Carton</td>
                            <td>
                                <input type="text" name="masterCarton" placeholder="Master Carton" onChange={this.handleChange}></input>
                            </td>
                        </tr>
                        <tr>
                        <td>Sales Growth</td>
                            <td>
                                <input type="text" name="salesGrowth" placeholder="Sales Growth" onChange={this.handleChange}></input>
                            </td>
                        </tr>
                        <tr>
                        <td>Lead Time</td>
                            <td>
                                <input type="text" name="leadTime" placeholder="Lead Time" onChange={this.handleChange}></input>
                            </td>
                        </tr> 
                        <tr onClick={() => alert('Order now!')}>
                        <td><strong>Order Amount</strong></td>
                        <td><strong>Click to order {this.state.orderAmount} units</strong></td>
                        </tr> 
                    </tbody>
                </Table>
                <Button variant="success" onClick={this.submitAssumptions}>Calculate</Button>
            </Container>

        )
    }
}

export default Forecast;
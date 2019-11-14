import React, {Component} from 'react';
import API from '../utils/API'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'


class RegistrationForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name:"",
            email:"",
            password: ""
        }
    }

    inputChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    
    register = () => {
        API.registerUser(this.state.name, this.state.email.toLowerCase(), this.state.password)
            .then((session) => {
                console.log(this.props);
                this.props.onRegister(session.data);
                console.log('Success!');
            });
    }
    // register = () => {
    //     console.log('Name:', this.state.name, 'Email:', this.state.email, 'Password:', this.state.password);
    // }

    render () {
        return (

            <Container>
                <Jumbotron>
                    <Container>
                        <h2>Registration Form</h2>
                        <p>Enter your information below</p>
                    </Container>
                </Jumbotron>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form.Control 
                        type="text" 
                        rows="1" 
                        value={this.state.name} 
                        name="name" 
                        id= "name" 
                        placeholder="Enter your Name" 
                        onChange={this.inputChangeHandler} 
                    />
                </Col>
                
                <br />
                
                <Col md={{ span: 4, offset: 4 }}>
                    <Form.Control 
                        type="text" 
                        rows="1" 
                        value={this.state.email} 
                        name="email" 
                        id="email" 
                        placeholder="Enter your email address" 
                        onChange={this.inputChangeHandler} 
                    />
                </Col>
                
                <br />

                <Col md={{ span: 4, offset: 4 }}>
                    <Form.Control 
                        type="password" 
                        rows="1" 
                        value={this.state.password} 
                        name="password" 
                        id="password" 
                        placeholder="Enter your password" 
                        onChange={this.inputChangeHandler} 
                    />
                </Col>
                <br />
                <Col md={{ span: 4, offset: 4 }}>
                    <Button onClick={this.register}>Register</Button>
                </Col>
            </Container>      
        )
    }
}

export default RegistrationForm;
import React, {Component} from 'react';
import API from '../utils/API';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';


class LoginForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email:"",
            password: ""
        }
    }

    inputChangeHandler = (e) => {
        this.setState ({[e.target.name]: e.target.value});
    }; 
    
    login = () => {
        API.login(this.state.email, this.state.password)
            .then((session) => {
                console.log(session);
                this.props.onLogin(session.data);
            });
    };

    render() {

        const isEnabled = this.state.email.length > 0 && this.state.password.length > 0;

        return (
            <Container>
                <Jumbotron>
                    <Container>
                    <Col md={{ span: 4, offset: 4 }}>
                        <h2>Login</h2>
                        <p>Welcome, please login</p>
                    </Col>
                    </Container>
                </Jumbotron>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form.Control
                        type="email"
                        rows="1"
                        value={this.state.email}
                        name="email"
                        onChange={this.inputChangeHandler}
                        placeholder="Enter your email"
                    />
                </Col>
                <br />
                <Col md={{ span: 4, offset: 4 }}>
                    <Form.Control
                        type="password"
                        rows="1"
                        value={this.state.password}
                        name="password"
                        onChange={this.inputChangeHandler}
                        placeholder="Enter your password"
                    />
                </Col>
                <br />
                <Col md={{ span: 4, offset: 4 }}>
                <Button disabled={!isEnabled} onClick={this.login} variant="primary">Login</Button>
                </Col>
            </Container>
        )
    }
}

export default LoginForm;
import React, {Component} from 'react';
import RegistrationForm from 'components/RegistrationForm'
import Api from '../..utils/api'


class LoginForm extends Component
{
    constructor (props)
    {
        super(props);
        this.state={
            name:"",
            email:"",
            password: ""

        }
    }
    inputChangeHandler=(e) =>this.setState ({[e.target.name]:e.targe.value}); 
    
    register =()=> {
Api.register(this.state.name,
    this.state.password) .then ( 
    session => {
        dedugger;
        this.props.onRegister(
        session.data);


    })
    }

    render ()
    {
        return <div className = "row">
         <div className = "col-6 offset -3">
             <h1> Register </h1>
             <div clasName ="form-group">
                 <input
                 onChange={this.inputChangeHandler}
                 value= {this.state.name}
                 type= "text"
                 name= "name"
                 placeholder= "Enter your email"/>

                  <input
                    onChange={this.inputChangeHandler}
                    value= {this.state.password}
                 type= "password"
                 name= "password"
                 placeholder= "Enter your password"/>
                 <button  onClick = {this.register} className = "btn btn-primary">Register</button>   


             </div>

         </div>

        </div>
    }
}
export default RegistrationFrom;
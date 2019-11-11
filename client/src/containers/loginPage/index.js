import React, {Component} from 'react';
import LoginForm from '.../../components/LoginForm'


class login extends Component
{
render ()
{
    return <LoginForm onLogin ={this.props.onlogin} />


}

}
export default Login;
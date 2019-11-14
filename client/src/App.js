import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import ForecastDetail from './views/ForecastDetail';
// import Login from '../../client/src/containers/LoginPage';
// import Homepage from '../../client/src/containers/HomePage';
import CreateOrder from './views/CreateOrder';
// import RegistrationForm from './views/RegistrationForm';
import Registration from '../../client/src/containers/Registration';

class App extends Component {
  constructor (props)
  {
      super(props);
      this.state = {
          session:null
      }
  }
  signIn = (session) => this.setState({session});

  render () {
    return (
        <Router>
        <Switch>
        {/* <Route path ="/" component = {CreateOrder} /> */}
            {/* {!this.state.session && <Route path ="/login" component = {()=> <Login onlogin= {this.signIn}/>} />} */}
            {!this.state.session && <Route path ="/register" component = {()=> <Registration onRegister= {this.signIn}/>} />}
        <Route component= {() => <CreateOrder session= {this.state.session} />}/>
        </Switch>
        </Router>
    )
}
}

export default App;
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import Login from '../../client/src/containers/LoginPage';
// import Homepage from '../../client/src/containers/HomePage';
import Login from '../src/containers/loginPage'
import Registration from '../src/containers/Registration';
import CreateOrder from './views/CreateOrder';
import ForecastDetail from './views/ForecastDetail';


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
        {!this.state.session && <Route path ="/login" component = {()=> <Login onLogin={this.signIn}/>} />}
        {!this.state.session && <Route path ="/register" component = {()=> <Registration onRegister={this.signIn}/>} />}
        <Route path="/createorders" component = {() => <CreateOrder session= {this.state.session} />}/>
        <Route path="/createorders" component = {() => <CreateOrder session= {this.state.session} />}/>
        <Route path="/forecast" component={() => <ForecastDetail session={this.state.session} />} />
        </Switch>
        </Router>
    )
}
}

export default App;
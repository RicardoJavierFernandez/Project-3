import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from '../src/containers/loginPage'
import HomePage from './views/HomePage';
import Registration from '../src/containers/Registration';
import CreateOrder from './views/CreateOrder';
import ForecastDetail from './views/ForecastDetail';
import Inventory from './views/Inventory';


class App extends Component {
  constructor (props) {
      super(props);
      this.state = {
          session: null
      }
  }

  signIn = (session) => this.setState({session});

  render () {
    const history = createBrowserHistory();
    // 10:45 minute mark
    return (
        <Router>
        <Switch>
        {/* <Route exact path ="/" component = {NavBar} /> */}
        {!this.state.session && <Route exact path ="/login" component = {()=> <Login onLogin={this.signIn} history={history}/>} />}
        {!this.state.session && <Route exact path ="/register" component = {()=> <Registration onRegister={this.signIn}/>} />}
        {!this.state.session && <Route exact path="/home" component = {() => <HomePage session={this.state.session} />}/>}
        {!this.state.session && <Route exact path="/createorder" component = {() => <CreateOrder session={this.state.session} />}/>}
        {!this.state.session && <Route exact path="/forecast" component={ForecastDetail} session={this.state.session}/>}
        {!this.state.session && <Route exact path="/inventory" component={Inventory} session={this.state.session}/>}
        <Route component={CreateOrder} />
        {/* <Route component = {ForecastDetail} /> */}
        {/* <Route component={() => <Inventory path="/inventory" session={this.state.session} />} />
        <Route component={() => <CreateOrder path="/createorder" session={this.state.session} />} />
        <Route component={() => <ForecastDetail session={this.state.session} />}/> */}
        </Switch>
        </Router>
    )
}
}

export default App;
import React, {component} from 'react';
import {BrowserRoter as Router,Switch,Route} from 'react-router-dom';
import Homepage from './containers/Homepage'
import Client from './containers/Client';
import Login from './conatiners/LoginPage';
import Registration from './conatiners/Registration';


class App extends Component {

    constructor (props)
    {
        SourceBuffer(props);
        this.state={
            session:null
        }
    }
    signIn = (session) => this.setState(
        {session});

render (){
return <Router>
<Switch>
    <Route path ="/client/
    :forcast" component = {client} />
    {!this.state.session && <Route path ="/login"
     component = {()=> <Login onlogin= {this.signIn}/>} />}

{!this.state.session && <Route path ="/register"
     component = {()=> <Registrartion onRegister= {this.signIn}/>} />}

<Route component= {()=> <Homepage session= {this.state.session}/>}/>

</Switch>
</Router>





}
}
export default App;
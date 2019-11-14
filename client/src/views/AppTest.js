import React, {component} from 'react';
import {BrowserRoter as Router,Switch,Route} from 'react-router-dom';
import Homepage from './containers/Homepage';
import Client from './containers/Client';
import Login from './conatiners/LoginPage';
import Registration from './conatiners/Registration';

class App extends Component {
    constructor (props)
    {
        SourceBuffer(props);
        this.state = {
            session:null
        }
    }
    signIn = (session) => this.setState({session});

    render () {

    return (
        <Router>
        <Switch>
        <Route path ="/" component = {client} />
            {!this.state.session && <Route path ="/login" component = {()=> <Login onlogin= {this.signIn}/>} />}
            {!this.state.session && <Route path ="/register" component = {()=> <Registration onRegister= {this.signIn}/>} />}
        <Route component= {()=> <Homepage session= {this.state.session}/>}/>
        </Switch>
        </Router>
    )
}
}

export default App;

// -----------
// const db = require("../models");
// const md5= require("md5");
// const getSession=(acount)=>{
// return {
//     id:account_id,
//     name:account.name,
//     token:md5(account.email+account.date)
// }
// }
// console.log("md5 of Name", md5("Name"))
// // Defining methods for the bController
// module.exports = {
//   findAll: function(req, res) {
//     db.User
//       .find(req.query)
//       .sort({ date: -1 })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   findById: function(req, res) {
//     db.User
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   login:function(req, res)
//   {
//     db.User
//     .findone(
//     {email:req.body.email.toLowerCase()})
//  .then(dbModel => {
//         if (dbModel.password==md5
//             (req.body.password))
//         {
//             res.json(getSession(dbModel))
//         }
//         else
//         res.sendStatus(401)
//  })
//     .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//       let account = req.body;
//       account.email = req.body.toLowerCase ();
//       account.password = md5(req.body.password);
//     db.User
//       .create(account)
//       .then(dbModel => res.json
//         (getSession(dbModel)))
//       .catch(err => res.status(422)
//       .json(err));
//   },
//   update: function(req, res) {
//     db.User
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.User
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };




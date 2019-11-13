import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import ForecastDetail from './views/ForecastDetail';
import CreateOrder from './views/CreateOrder';
import RegistrationForm from './views/RegistrationForm';

function App() {
  return (
    <Router>
      <div>
        <RegistrationForm />
      </div>
    </Router>
  );
}

export default App;

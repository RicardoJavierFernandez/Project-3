import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ForecastDetail from './views/ForecastDetail';
import CreateOrder from './views/CreateOrder';

function App() {
  return (
    <Router>
      <div>
        <CreateOrder />
      </div>
    </Router>
  );
}

export default App;

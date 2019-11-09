import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Forecast from './views/Forecast';

function App() {
  return (
    <Router>
      <div>
        <Forecast />
      </div>
    </Router>
  );
}

export default App;

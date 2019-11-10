import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ForecastDetail from './views/ForecastDetail';

function App() {
  return (
    <Router>
      <div>
        <ForecastDetail />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Start from './views/start/Start';
import Results from './views/results/Results';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Web IDV Demo App
      </header>
      <div className="App-body">
        <Router>
          <Switch>
            <Route path="/results" component={Results} />
            <Route path="/" component={Start} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

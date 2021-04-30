import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, AboutPage } from './Pages'
import { Navbar } from './components'
import './App.css';

function App() {
  return (
    <div className="app">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;

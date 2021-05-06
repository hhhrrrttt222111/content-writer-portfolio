import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, AboutPage, ServicesPage, ContactsPage } from './Pages'
import './App.css';

function App() {
  return (
    <div className="app">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/services" exact>
              <ServicesPage />
            </Route>
            <Route path="/contact" exact>
              <ContactsPage />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;

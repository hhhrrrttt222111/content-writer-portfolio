import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer } from './components'
import { Home, AboutPage, ServicesPage, ContactsPage, BlogPage } from './Pages'
import ScrollToTop from './utils/ScrollToTop'

import './App.css';

function App() {
  return (
    <div className="app">
        <Router>
        <ScrollToTop/>
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
            <Route path="/blog" exact>
              <BlogPage />
            </Route>
            <Route path="/contact" exact>
              <ContactsPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;

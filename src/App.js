import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Strategy from './components/pages/Strategy';
import Analytics from './components/pages/Analytics';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/analytics' component={Analytics} />
        <Route path='/strategy' component={Strategy} />
      </Switch>
      <FooterComponent />
    </Router>
  );
}

export default App;

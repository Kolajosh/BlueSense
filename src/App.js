import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Learning from './components/pages/Learning';
import Contact from './components/pages/Contact';
import Advisory from './components/pages/Advisory';
import Strategy from './components/pages/Strategy';
import Analytics from './components/pages/Analytics';
import FooterComponent from './components/FooterComponent';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/services' component={Services} />
        <Route path='/learning' component={Learning} />
        <Route path='/contact' component={Contact} />
        <Route path='/advisory' component={Advisory} />
        <Route path='/analytics' component={Analytics} />
        <Route path='/strategy' component={Strategy} />
      </Switch>
      <FooterComponent />
    </Router>
  );
}

export default App;

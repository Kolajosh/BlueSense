import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./components/pages/Blog";
import Learning from "./components/pages/Learning";
import Contact from "./components/pages/Contact";
import Advisory from "./components/pages/Advisory";
import Strategy from "./components/pages/Strategy";
import Analytics from "./components/pages/Analytics";
import FooterComponent from "./components/FooterComponent";
import About from "./components/pages/About";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import CookiePolicy from "./components/pages/CookiePolicy";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/blog' component={Blog} />
        <Route path='/learning' component={Learning} />
        <Route path='/contact' component={Contact} />
        <Route path='/advisory' component={Advisory} />
        <Route path='/analytics' component={Analytics} />
        <Route path='/strategy' component={Strategy} />
        <Route path='/privacypolicy' component={PrivacyPolicy} />
        <Route path='/cookiepolicy' component={CookiePolicy} />
      </Switch>
      <FooterComponent />
    </Router>
  );
}

export default App;

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
import Terms from "./components/pages/Terms.js";
import custom404 from "./components/pages/404";
import TraitsOfGreatFounders from "./components/blogPages/TraitsOfGreatFounders";
import WhyCompetion from "./components/blogPages/WhyCompetition";
import SixGuides from "./components/blogPages/SixGuides";
import Nsb from "./components/blogPages/Nsb";
import StartupTrends from "./components/blogPages/StartupTrends";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/learning" component={Learning} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/advisory" component={Advisory} />
        <Route exact path="/analytics" component={Analytics} />
        <Route exact path="/strategy" component={Strategy} />
        <Route exact path="/privacypolicy" component={PrivacyPolicy} />
        <Route exact path="/cookiepolicy" component={CookiePolicy} />
        <Route exact path="/terms" component={Terms} />
        <Route
          exact
          path="/blog/traitsofgoodfounders"
          component={TraitsOfGreatFounders}
        />
        <Route exact path="/blog/whycompetition" component={WhyCompetion} />
        <Route exact path="/blog/nsb" component={Nsb} />
        <Route exact path="/blog/6guides" component={SixGuides} />
        <Route exact path="/blog/startuptrends" component={StartupTrends} />
        <Route component={custom404} />
      </Switch>
      <FooterComponent />
    </Router>
  );
}

export default App;

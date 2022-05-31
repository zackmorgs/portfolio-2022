
import './App.scss';
import React from 'react';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from './../pages/Home';
import Skills from '../pages/Skills';
import Contact from './../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Aasm from '../pages/portfolio/Aasm';
import AmericanMuscle from '../pages/portfolio/AmericanMuscle';
import BuyAutoParts from '../pages/portfolio/BuyAutoParts';
import EPromos  from '../pages/portfolio/ePromos';
import EvanMoor from '../pages/portfolio/EvanMoor';
import TrinityInsight from '../pages/portfolio/TrinityInsight';
import CSIOnSite from '../pages/portfolio/CSIOnsite';

var classNames = require('classnames');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
  }
  handleBurgerClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <>
        <nav id="nav_main">
          <div id="navbar">
            <Link to="/" id="navbar_brand">
              Zack Morgenthaler
            </Link>
            <button id="navbar_burger" href="/" onClick={this.handleBurgerClick.bind(this)}
            className={classNames({'is-open' : this.state.isOpen})}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <ul id="nav_menu" className={classNames({'is-open' : this.state.isOpen})}>
            <li>
              <NavLink to="/" onClick={this.handleBurgerClick.bind(this)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" onClick={this.handleBurgerClick.bind(this)}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={this.handleBurgerClick.bind(this)}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" onClick={this.handleBurgerClick.bind(this)}>
                Skills
              </NavLink>
            </li>
          </ul>
        </nav>
        <div class="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/aasm/" element={<Aasm/>}/>
            <Route path="/portfolio/american-muscle/" element={<AmericanMuscle/>}/>
            <Route path="/portfolio/buy-auto-parts" element={<BuyAutoParts/>}/>
            <Route path="/portfolio/epromos/" element={<EPromos/>}/>
            <Route path="/portfolio/evan-moor/" element={<EvanMoor/>}/>
            <Route path="/portfolio/trinity-insight/" element={<TrinityInsight/>}/>
            <Route path="/portfolio/csi-onsite" element={<CSIOnSite/>}/>
          </Routes>
        </div>
      </>
    );
  }
}



export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

//components
import Home from './pages/home';
import About from './pages/about';
import Checkout from './pages/checkout';

//logo
import coral from './assets/coral.jpg';


const App = () => (
  <Router>
    <div>
    <h1 id="redCoral">Red Coral</h1>
      
    <center>
      <img classname= "logo" src={coral} alt="coral_logo"/>
    </center>

      <ul className = "Nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/checkout">Shopping Bag</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/checkout" component={Checkout}/>
    </div>
  </Router>
)


export default App;

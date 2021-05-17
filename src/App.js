
import React from "react";
import './App.css';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header.js'
import Login from './components/Login.js'
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import IndoorFurniture from './components/IndoorFurniture.js'
import OutdoorFurniture from './components/OutdoorFurniture.js'
import Location from './components/Location.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
     
      <Router>
      <Header />
        <Nav />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/indoor" exact component={() => <IndoorFurniture />} />
          <Route path="/outdoor" exact component={() => <OutdoorFurniture />} />
          <Route path="/location" exact component={() => <Location />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/login" exact component={() => <Login />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import '../assests/css/styles.css';
import LandingPage from './LandingPage';
import Cart from './Cart';

class App extends React.Component{
  render(){
    const LANDINGPAGE = "/";
    const CART = "/cart";
    return (
      <Router>
        <Route exact path={LANDINGPAGE} component={LandingPage}/>
        <Route exact path={CART} component={Cart}/>
      </Router>
    )
  }
}

export default connect()(App);

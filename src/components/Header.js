// Header.js
// To navigate to the routes above, your <Header/> file should contain the following <Link/> components:

// <Link to="/" id="homelink"> Home </Link> |
// <Link to="/about" id="aboutlink"> About </Link> |
// <Link to="/basket" id="basketlink"> Basket ({props.itemCount})</Link>

import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {

  return (
    <div id="header">
        <h1>Beryl's Media App Store</h1>
        <div id="homepage">
          <Link to="/" id="homeLink"> Home </Link> 
          <Link to="/about" id="aboutLink"> About </Link> 
          <Link to="/basket" id="basketLink"> Basket: {props.basketCount}</Link>
        </div>
    </div>
  );
}

export default Header;
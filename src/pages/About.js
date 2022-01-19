// Allow a user to view an About page called About.js explaining the application functionality. 
// This page should contain a <h1></h1> element containing the title "About".
// The About.js should be created in the pages folder.
// Each view/page of the app should have relevant links to enable navigation between the the About page, the Basket and the Home page.
// Your finished app should contain three <Route/> components with the following paths:
// <Route path="/"/>
// <Route path="about"/>
// <Route path="basket"/>




import React from 'react';
import {Link} from 'react-router-dom';

const Aboutpg = (props) => {
  return (
    <div id="header">
        <h1>About Me</h1>
        <div id="aboutpage">
        <Link to="/" id="homelink"> Home </Link> 
          <Link to="/about" id="aboutlink"> About </Link> 
          <Link to="/basket" id="basketlink"> Basket: {props.basketCount}</Link>
          </div>
        <h2 className="page">Welcome to my Music App.</h2>
        <div>I created this music app using the Itunes API. As a user you should be able to add/remove songs or tv shows to and from your basket whilst seeing the cost of each item.</div>
    </div>
  )
}


export default Aboutpg;
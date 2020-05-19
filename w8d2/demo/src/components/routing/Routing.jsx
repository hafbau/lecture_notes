import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import Home from './Home';
import Products from './Products';


const Routing = () => {
  return (
    <Router>
      <h1>Routing</h1>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/products">Products</Link> 
        <Link to="/about">About</Link> 
        <Link to="/policy">Privacy Policy</Link>
      </nav>
      <Switch>
        <Route path='/products' component={Products} />
        <Route path='/about'><h3>About Page</h3></Route>
        <Route path='/policy'><h3>Policy Page</h3></Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routing;

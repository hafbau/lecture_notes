import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Header from '../common/Header'
import Products from './Products';

const Routing = () => {
  return (
    <Router>
    <Header title="Routing" />

      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/products">Products</Link>
        <br />
        <Link to="/about">About</Link>
      </nav>
      
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/about">
          <h2>About page is here</h2>
        </Route>
        <Route exact path="/">
          <h2>Home page is here</h2>
        </Route>
        {/* <Route>
          <h2>Not found</h2>
        </Route> */}
      </Switch>
    </Router>
  );
};

export default Routing;

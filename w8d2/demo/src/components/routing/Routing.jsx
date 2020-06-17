import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Products from "./Products";
import Home from "./Home";

const Routing = () => {
  return (
    <Router>
      <h1>Routing</h1>

      <nav>
        <Link to="/">menu 1</Link>
        <Link to="/artist/products">menu 2</Link>
        <Link to="/about">menu 3</Link>
        <Link to="/privacy">menu 4</Link>

        <Switch>
          <Route path="/artist/products">
            <Products />
          </Route>

          <Route path="/about">
            <h2>About</h2>
          </Route>
          <Route path="/privacy">
            <h2>Privacy</h2>
          </Route>
          <Route path="/" component={Home} />
        </Switch>
      </nav>
    </Router>
  );
};

export default Routing;

import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import Product from "./Product";

const products = [
  { id: 1, name: "Robotic Hairy Feet" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
];
export default function Products() {
  const match = useRouteMatch();

  console.log("match :>> ", match);
  return (
    <Router>
      <h2>Products</h2>

      <nav>
        {products.map((product) => (
          <Link key={product.id} to={`${match.url}/${product.id}`}>
            {product.name}
          </Link>
        ))}
        {/* <Link to="/products/1">Product 1</Link>
        <Link to="/products/2">Product 2</Link>
        <Link to="/products/3">Product 3</Link>
        <Link to="/products/4">Product 4</Link>
        <Link to="/products/5">Product 5</Link> */}
      </nav>

      <Switch>
        <Route path={`${match.path}/:id`}>
          <Product />
        </Route>
        <Route>Choose your product!</Route>
      </Switch>
    </Router>
  );
}

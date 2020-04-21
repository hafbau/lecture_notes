import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Product from './Product';

const products = [
  {id: 1,
    name: 'Product 1'
  },
  {id: 2,
    name: 'Product 2'
  },
  {id: 3,
    name: 'Product 3'
  },
  {id: 4,
    name: 'Product 4'
  },
]
const Products = props => {
  const match = useRouteMatch();
  console.log('match :', match);
  return (
    <Router>
      <h2>Products page is here</h2>
      {products.map(p => (<Link key={p.id} to={`${match.url}/${p.id}`}>{p.name}</Link>))}

      <Switch>
        <Route path={`${match.url}/:id`} component={Product} />
        <Route ><h3>Choose your product</h3> </Route>
      </Switch>
    </Router>
  )
}

export default Products

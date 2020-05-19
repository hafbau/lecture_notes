import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import Product from './Product';

const products = [
  { id: 1, name: 'My Precious' },
  { id: 2, name: 'Fire Duckie' },
  { id: 3, name: 'Magic Wand' },
  { id: 4, name: 'Giant Map' }
]
export default function Products() {
  const match = useRouteMatch();
  
  return (
    <Router>
      <h3>
        Products Page
      </h3>

      <div style={{ width: 600, display: 'flex', justifyContent: 'space-evenly'}}>
        {products.map(p => <Link key={p.id} to={`${match.url}/${p.id}`}>{p.name}</Link>)}
      </div>

      {/* <Switch>
        <Route path={`${match.url}/3`}>
          <Product />
        </Route>
        <Route><h4>Choose your product</h4></Route>
      </Switch> */}

      <Switch>
        <Route path={`${match.url}/:id`}>
          <Product />
        </Route>
        <Route><h4>Choose your product</h4></Route>
      </Switch>
      
    </Router>
  )
}

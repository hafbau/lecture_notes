import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { routes } from './routes';
import { makeStyles } from './lib/styles';
import { Nav } from './components/Nav';

const useAppStyles = makeStyles({
  main: {
    maxWidth: 800,
    margin: '0 auto',
    padding: '80px 0px',
    position: 'relative',
  }
})

function App() {
  const classes = useAppStyles();

  return (
    <Router>
      <main className={classes.main}>
        <Switch>
          {routes.map(({ path, component, exact }) => (
            <Route key={path} path={path} component={component} exact={exact} />
          ))}
        </Switch>
        <Nav navRoutes={routes.filter(route => route.isMenuItems)} isMobile={true} />
      </main>
    </Router>
  );
}

export default App;

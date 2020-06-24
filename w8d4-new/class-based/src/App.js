import React, { useState } from 'react';
import './App.css';
import Lifecycle from './components/Lifecycle';
import ClassBased from './components/ClassBased';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const App = () => {
  const [showClassBased, setShowClassBased] = useState(true)
  // KIND OF COMPONENTDIDMOUNT
  // useEffect(() => {
  //   // do stuff
  //   return () => 'will unmount'
  // }, [])

  // KINDOF COMPONENTDIDUPDATE
  // useEffect(() => {
  //   // do stuff
  //   return () => 'will unmount'
  // }, [showClassBased])
  return (
    <div className="App">
      <h1>Class-Based Components!</h1>
      <Router>
        <Link to="/">ClassBased </Link>
        <Link to="/lifecycle">Lifecycle</Link>

        <Switch>
          <Route exact path="/lifecycle" component={Lifecycle} />
          {showClassBased && <Route path="/"  >
            <ClassBased name={{ first: 'Hafiz' }} />
          </Route>}
        </Switch>
      </Router>
      <button onClick={() => setShowClassBased(!showClassBased)}>Toggle ClassBased</button>
    </div>
  );
};

export default App;

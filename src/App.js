import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import Giphy from './Giphy';
import Nav from './Nav';

const links = ['cat', 'dog', 'fish'];
function App() {
  return (
    <Router>
      <div className="App App-header">
        <Nav links={links} />

      <Switch>
        <Route path="/giphy/:category">
          <Giphy />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;

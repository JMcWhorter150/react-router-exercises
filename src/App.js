import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const links = ['1', '2', '3', '4', '5'];

function App() {
  return (
    <Router>
      <div className="App App-header">
        <h1>This is a header</h1>
        <ul>
          {links.map((text, i) => (<li key={i}><Link to={`/${i + 1}`}>{text}</Link></li>))}
        </ul>


      <Switch>
        <Route path="/1">
          <Comp1 />
        </Route>
        <Route path="/2">
          <Comp2 />
        </Route>
        <Route path="/3">
          <Comp3 />
        </Route>
        <Route path='/4'>
          <Comp4 />
        </Route>
        <Route path='/5'>
          <Comp5 />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

function Comp1() {
  console.log('in comp1')
  return (
    <h1>comp1</h1>
  )
}

function Comp2() {
  return (
    <h1>comp2</h1>
  )
}

function Comp3() {
  return (
    <h1>comp3</h1>
  )
}

function Comp4() {
  return (
    <h1>comp4</h1>
  )
}

function Comp5() {
  return (
    <h1>comp5</h1>
  )
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact children={<div><h2>Home Page</h2></div>} />
      </Switch>
    </div>
  );
}

export default App;

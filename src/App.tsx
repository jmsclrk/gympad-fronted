import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import { User } from './models/user'


export default function App() {
  const [user, setUser] = useState<User | null>(null)

  return (
    <div className="App">
      <Switch>
        {user ? (
            <Route path="/" exact children={<div ><h2>Home Page</h2></div>} />
        ) : (
          <>
            <Route path="/" exact children={<div><h2>Login Page</h2></div>} />
            <Route path="/" render={() => <Redirect to="/" />} />
          </>
        )}
      </Switch>
    </div>
  );
}

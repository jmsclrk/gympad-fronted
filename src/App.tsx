import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import { getUser, User } from './models/user';


export default function App() {
  const [user, setUser] = useState<User | null>(null);
  
  const attemptGetUser: Function = async () => {
    try {
      const userData : User = await getUser();
      setUser(userData);
    } catch (err) {
      if (err?.request?.status !== 401) console.log(err);
    }
  }
  useEffect(() => attemptGetUser(), []);

  return (
    <div className="App">
      {user ? (
        <Switch>
          <Route path="/" exact children={<div data-testid="workout-container"><h2>Home Page</h2></div>} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact children={<div data-testid="login-container"><h2>Login Page</h2></div>} />
          <Route path="/" render={() => <Redirect to="/" />} />
        </Switch>
      )}
    </div>
  );
}

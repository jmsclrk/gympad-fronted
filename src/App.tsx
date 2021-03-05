import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import { getUser, User } from './models/user';
import WorkoutPage from './pages/workout';
import LoginPage from './pages/login';


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
          <Route path="/" exact component={WorkoutPage} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/" render={() => <Redirect to="/" />} />
        </Switch>
      )}
    </div>
  );
}

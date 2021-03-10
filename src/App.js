import React from 'react'
import {BrowserRouter as Router,  Switch, Route,  Redirect,} from 'react-router-dom'

import Homepage from './Routs/Homepage'
import Login from "./Routs/Login";
import SignUp from "./Routs/SignUp";
import Manager from './Routs/Manager'
import Profile from './Routs/Profile'

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          
          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/signup" exact>
            <SignUp />
          </Route>

          <Route path="/profile" exact>
            <Profile />
          </Route>

          <Route path="/manager" exact>
            <Manager />
          </Route>

          <Redirect to="/" />
        </Switch>        
      </main>
    </Router>
  );
}

export default App;

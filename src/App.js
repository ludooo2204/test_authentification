import React from 'react';
import './App.css';
import GuardedRoute from './GuardedRoute';
import Login from './Login';
import {Route, Routes} from 'react-router-dom'
import { authenticationService } from './services/authentication';  
const Home=()=>{
  return(
    <div><h1>home</h1></div>
  )
}
const App = () => {
  const loginUser = (login, password) => {
    const userCredentials = {
      login,
      password
    };

    authenticationService.login(userCredentials)
      .then(loginData => window.localStorage.setItem('token', loginData.token));
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={() => <Login loginUser={(login, password) => loginUser(login, password)} />} />
        <GuardedRoute path='/protected' component={Protected} auth={window.localStorage.getItem('token')}/>
      </Routes>
    </div>
  );
}

export default App;



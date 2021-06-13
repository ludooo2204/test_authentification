import React from 'react';
import './App.css';
import Login from './Login';
import { authenticationService } from './services/authentication';  

const App = () => {
  const loginUser = (login, password) => {
    const userCredentials = {
      login,
      password
    };

    authenticationService.login(userCredentials)
      // .then(loginData => console.log(loginData));
      .then(loginData => window.localStorage.setItem('token', loginData.token));
  }

  return (
    <div className="App">
      <Login loginUser={loginUser} />
    </div>
  );
}

export default App;



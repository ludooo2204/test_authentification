import React from 'react';
import './App.css';
import Login from './Login';
// import { authenticationService } from './services/authentication';

const App = () => {
  // const loginUser = (login, password) => {
  //   const userCredentials = {
  //     login,
  //     password
  //   };

  //   authenticationService.login(userCredentials)
  //     .then(loginData => window.localStorage.setItem('token', loginData.token));
  // }

  return (
    <div className="App">
      <Login loginUser={()=>{
        console.log("login !")
      }} />
    </div>
  );
}

export default App;



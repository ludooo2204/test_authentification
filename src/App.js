import React, { useEffect, useState } from "react";
import "./App.css";
import GuardedRoute from "./GuardedRoute";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import { authenticationService } from "./services/authentication";
import axios from "axios";
const Home = (props) => {
	return <h1>home</h1>;
};
const Protected = () => {
	return (
		<div>
			<h1>protected</h1>
		</div>
	);
};
const App = () => {
// useEffect(() => {
// 	console.log("coucou");
// 	let don={}
// 	don.a="toto"
// console.log(don);
//  axios.post("http://localhost:3001/",don)
// }, []);

	const loginUser = (login, password) => {
		const userCredentials = {
			login,
			password,
		};

//si mes mots de passe sont bon alors setItem token
		authenticationService
			.login(userCredentials)
			.then((loginData) => window.localStorage.setItem("token", loginData.token))
			.catch((e) => alert("Mot de passe erroné !"));
	};

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/protected" element={<GuardedRoute />}>
					<Route element={<Protected />} />
				</Route>
				<Route path="/login" element={<Login loginUser={(login, password) => loginUser(login, password)} />} />
			</Routes>
		</div>
	);
};

export default App;

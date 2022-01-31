import React, { useEffect, useState } from "react";
import "./App.css";
import GuardedRoute from "./GuardedRoute";
import Login from "./Login";
import { Route, Routes, useNavigate } from "react-router-dom";
// import { authenticationService } from "./services/authentication";
import axios from "axios";
// import { io } from "socket.io-client";
// const socket = io("http://localhost:3001");
// console.log(socket);
const Home = (props) => {
	const [data, setdata] = useState(null);

	const header = {
		headers: {
			"X-Auth-Token": window.localStorage.getItem("token"),
			"content-type": "application/json",
		},
	};
	axios
		.get("/api/user", header)
		.then((e) => {
			console.log("e", e);
			setdata(e.data.test);
		})
		.catch((error) => alert("non conect"));
	return (
		<div>
			<h1>home</h1>
			<h1>{data}</h1>
		</div>
	);
};
const Protected = () => {
	// const [users, setUsers] = useState([]);
	// useEffect(() => {
	// 	socket.emit("username", "ludo");

	// 	socket.on("newConnection", (user) => {
	// 		setUsers((users) => [...users, user]);
	// 	});
	// }, []);

	return (
		<div>
			<h1>protected</h1>
			<h1>protected</h1>
			{/* {users.map((e) => (
				<div>{e}</div>
			))} */}
			<h1>protected</h1>
			<h1>protected</h1>
		</div>
	);
};
const App = () => {
	const navigate = useNavigate();

	const loginUser = (login, password) => {
		const userCredentials = {
			login,
			password,
		};
		axios
			.post("/login", userCredentials)
			.then((response) => {
				console.log("response.data");
				console.log(response.data.token);
				window.localStorage.setItem("token", response.data.token);
				navigate("/protected");
			})
			.catch((error) => alert("Mot de passe erroné !"));
	};

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/" element={<Protected />} />
				<Route path="/protected" element={<GuardedRoute />}>
					<Route path="/protected" element={<Protected />} />
				</Route>
				<Route path="/login" element={<Login loginUser={(login, password) => loginUser(login, password)} />} />
			</Routes>
		</div>
	);
};

export default App;
